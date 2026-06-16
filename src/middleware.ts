import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except those starting with:
  // - api, _next/static, _next/image, favicon.ico, robots.txt, sitemap.xml, *.png, *.jpg, *.svg, etc.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
