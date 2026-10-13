// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = 'https://sts.web.id';

/**
 * A build is indexable only when it is explicitly the production deployment.
 * Every other build (local, preview, staging branch) is emitted with
 * `noindex` and a disallow-all robots.txt so staging is never indexed.
 *
 * Production is detected from the hosting provider, or forced with SITE_ENV=production.
 */
const env = process.env;
const isProduction =
  env.SITE_ENV === 'production' ||
  (env.SITE_ENV === undefined &&
    (env.CONTEXT === 'production' || // Netlify
      env.VERCEL_ENV === 'production' || // Vercel
      (env.CF_PAGES === '1' && env.CF_PAGES_BRANCH === (env.PRODUCTION_BRANCH ?? 'main')))); // Cloudflare Pages

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'id', locales: { id: 'id', en: 'en' } },
      // Only the two localized homepages are canonical, indexable URLs.
      filter: (page) => /\/(id|en)\/$/.test(new URL(page).pathname),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    define: {
      __SITE_PRODUCTION__: JSON.stringify(isProduction),
    },
  },
});
