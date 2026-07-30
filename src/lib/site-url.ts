const LOCAL_SITE_URL = 'http://localhost:3000';

function parseSiteUrl(value: string): URL {
  const url = new URL(value);

  if (url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL must be an origin without a path, query, or hash.');
  }

  return url;
}

export function getSiteUrl(): URL {
  const configuredUrl = process.env.SITE_URL?.trim();

  if (configuredUrl) {
    return parseSiteUrl(configuredUrl);
  }

  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.VERCEL_URL?.trim();

  if (vercelUrl) {
    return parseSiteUrl(`https://${vercelUrl}`);
  }

  return new URL(LOCAL_SITE_URL);
}
