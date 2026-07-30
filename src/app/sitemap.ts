import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const languageAlternates = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      new URL(`/${locale}`, siteUrl).toString(),
    ]),
  );

  return routing.locales.map((locale) => ({
    url: new URL(`/${locale}`, siteUrl).toString(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: {
        ...languageAlternates,
        'x-default': new URL(`/${routing.defaultLocale}`, siteUrl).toString(),
      },
    },
  }));
}
