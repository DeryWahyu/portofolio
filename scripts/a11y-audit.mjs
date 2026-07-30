import fs from 'node:fs';
import { createRequire } from 'node:module';
import { chromium } from 'playwright-core';

const require = createRequire(import.meta.url);
const axePath = require.resolve('axe-core/axe.min.js');
const baseUrl = process.env.A11Y_BASE_URL ?? 'http://127.0.0.1:3000';
const theme = process.env.A11Y_THEME ?? 'dark';
const viewportName = process.env.A11Y_VIEWPORT ?? 'desktop';
const viewports = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844 },
};
const viewport = viewports[viewportName];

if (!viewport) {
  throw new Error(`A11Y_VIEWPORT harus salah satu dari: ${Object.keys(viewports).join(', ')}`);
}

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);
const executablePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));

if (!executablePath) {
  throw new Error('Chrome/Chromium tidak ditemukan. Atur environment variable CHROME_PATH.');
}

const browser = await chromium.launch({ executablePath, headless: true });

try {
  const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
  await context.addInitScript((selectedTheme) => {
    localStorage.setItem('theme', selectedTheme);
  }, theme);
  const page = await context.newPage();

  await page.goto(`${baseUrl}/id`, { waitUntil: 'networkidle', timeout: 90_000 });
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);

  for (let y = 0; y < pageHeight; y += Math.max(500, viewport.height * 0.7)) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(400);
  }

  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(1_000);
  await page.addScriptTag({ path: axePath });

  const violations = await page.evaluate(async () => {
    const result = await window.axe.run(document, { resultTypes: ['violations'] });
    return result.violations.map((violation) => ({
      id: violation.id,
      impact: violation.impact,
      nodes: violation.nodes.length,
    }));
  });
  const images = await page.evaluate(() =>
    performance
      .getEntriesByType('resource')
      .filter((entry) => entry.initiatorType === 'img')
      .map((entry) => ({ transferSize: entry.transferSize })),
  );
  const imageTransferBytes = images.reduce((sum, image) => sum + image.transferSize, 0);

  console.log(
    JSON.stringify(
      { theme, viewport: viewportName, violations, imageRequests: images.length, imageTransferBytes },
      null,
      2,
    ),
  );

  if (violations.length > 0) process.exitCode = 1;
} finally {
  await browser.close();
}