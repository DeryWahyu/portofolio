import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/layout/Navbar';
import { routing } from '@/i18n/routing';
import { getSiteUrl } from '@/lib/site-url';

const localizedMetadata = {
  id: {
    title: 'Dery Wahyu Perdana | Fullstack Developer & Video Editor',
    description:
      'Portofolio profesional Dery Wahyu Perdana — Fullstack Developer & Video Editor berbasis di Indonesia.',
    openGraphLocale: 'id_ID',
    alternateLocale: 'en_US',
  },
  en: {
    title: 'Dery Wahyu Perdana | Fullstack Developer & Video Editor',
    description:
      'Professional portfolio of Dery Wahyu Perdana — Fullstack Developer & Video Editor based in Indonesia.',
    openGraphLocale: 'en_US',
    alternateLocale: 'id_ID',
  },
} as const;

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const siteUrl = getSiteUrl();
  const content = localizedMetadata[locale];
  const canonicalUrl = new URL(`/${locale}`, siteUrl);

  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        id: new URL('/id', siteUrl),
        en: new URL('/en', siteUrl),
        'x-default': new URL('/id', siteUrl),
      },
    },
    openGraph: {
      type: 'website',
      title: content.title,
      description: content.description,
      siteName: 'Dery Wahyu Perdana Portfolio',
      locale: content.openGraphLocale,
      alternateLocale: content.alternateLocale,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="data-theme"
        forcedTheme="light"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange={false}
      >
        <Navbar />
        <main>{children}</main>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
