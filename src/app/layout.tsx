import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Dery Wahyu Perdana | Backend Developer & Video Editor',
  description:
    'Professional portfolio of Dery Wahyu Perdana — Backend Developer & Video Editor. Specializing in building robust server-side applications and crafting compelling video content.',
  keywords: [
    'Dery Wahyu Perdana',
    'Backend Developer',
    'Video Editor',
    'Portfolio',
    'Next.js',
    'TypeScript',
    'Full Stack',
    'Indonesia',
  ],
  authors: [{ name: 'Dery Wahyu Perdana' }],
  creator: 'Dery Wahyu Perdana',
  openGraph: {
    type: 'website',
    title: 'Dery Wahyu Perdana | Backend Developer & Video Editor',
    description:
      'Professional portfolio of Dery Wahyu Perdana — Backend Developer & Video Editor. Specializing in building robust server-side applications and crafting compelling video content.',
    siteName: 'Dery Wahyu Perdana Portfolio',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dery Wahyu Perdana | Backend Developer & Video Editor',
    description:
      'Professional portfolio of Dery Wahyu Perdana — Backend Developer & Video Editor.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
