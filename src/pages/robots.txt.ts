import type { APIRoute } from 'astro';

/** Production allows crawling; every other build disallows it so staging is never indexed. */
export const GET: APIRoute = ({ site }) => {
  const body = __SITE_PRODUCTION__
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
