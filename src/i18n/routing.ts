import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['id', 'en'],
  defaultLocale: 'id',
  localePrefix: 'always', // ensure locales are always in the URL prefix
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
