/**
 * Post-build verification of dist/ (PRD §17). Dependency-free; run after `astro build`:
 *   npm run verify
 *
 * Checks: required files, lang/title/description/canonical/hreflang/OG per locale,
 * single h1 and no skipped heading levels, unique ids, every in-page anchor resolves,
 * every internal href/src resolves to a file, no placeholder contact links,
 * safe target=_blank, image alt text, valid JSON-LD, and ID/EN structural parity.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const SITE = 'https://sts.web.id';
const LOCALES = ['id', 'en'];

const errors = [];
const warnings = [];
const fail = (page, msg) => errors.push(`${page}: ${msg}`);
const warn = (page, msg) => warnings.push(`${page}: ${msg}`);

const read = (rel) => readFileSync(join(DIST, rel), 'utf8');
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'))?.[1];
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? [];
const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

/** Resolve an internal URL path to a file in dist/. */
const resolvesInDist = (path) => {
  const clean = decodeURI(path.split(/[?#]/)[0]);
  if (clean === '' || clean === '/') return existsSync(join(DIST, 'index.html'));
  const rel = clean.replace(/^\//, '');
  if (clean.endsWith('/')) return existsSync(join(DIST, rel, 'index.html'));
  return existsSync(join(DIST, rel)) || existsSync(join(DIST, rel, 'index.html'));
};

// --- Required output -------------------------------------------------------
for (const file of [
  'index.html',
  '404.html',
  'id/index.html',
  'en/index.html',
  'robots.txt',
  'sitemap-index.xml',
  '_redirects',
  'favicon.svg',
  'og-id.png',
  'og-en.png',
]) {
  if (!existsSync(join(DIST, file))) fail('dist', `missing ${file}`);
}

const robotsTxt = existsSync(join(DIST, 'robots.txt')) ? read('robots.txt') : '';
const indexable = /Allow: \//.test(robotsTxt) && !/Disallow: \/\s*$/m.test(robotsTxt);

// --- Per-page checks --------------------------------------------------------
const structure = {};

const checkPage = (rel, { locale, home }) => {
  const html = read(rel);
  const page = `/${rel.replace(/index\.html$/, '')}`;

  // Language
  const htmlLang = attr(tags(html, 'html')[0] ?? '', 'lang');
  if (locale && htmlLang !== locale) fail(page, `<html lang="${htmlLang}"> expected "${locale}"`);

  // Title & description
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
  if (!title) fail(page, 'missing <title>');
  const metas = tags(html, 'meta');
  const metaContent = (key, by = 'name') =>
    metas.find((m) => attr(m, by) === key) &&
    attr(
      metas.find((m) => attr(m, by) === key),
      'content',
    );
  if (!metaContent('description')) fail(page, 'missing meta description');

  // Robots meta must agree with robots.txt
  const robots = metaContent('robots') ?? '';
  if (home && indexable && /noindex/.test(robots))
    fail(page, 'production build but page is noindex');
  if (home && !indexable && !/noindex/.test(robots))
    fail(page, 'non-production build must be noindex');

  if (home) {
    const links = tags(html, 'link');
    const canonical = attr(links.find((l) => attr(l, 'rel') === 'canonical') ?? '', 'href');
    if (canonical !== `${SITE}/${locale}/`) fail(page, `canonical is "${canonical}"`);
    const alternates = Object.fromEntries(
      links
        .filter((l) => attr(l, 'rel') === 'alternate' && attr(l, 'hreflang'))
        .map((l) => [attr(l, 'hreflang'), attr(l, 'href')]),
    );
    for (const l of LOCALES) {
      if (alternates[l] !== `${SITE}/${l}/`) fail(page, `hreflang="${l}" is "${alternates[l]}"`);
    }
    if (!alternates['x-default']) fail(page, 'missing hreflang="x-default"');

    for (const key of ['og:title', 'og:description', 'og:url', 'og:image', 'og:locale']) {
      if (!metaContent(key, 'property')) fail(page, `missing ${key}`);
    }
    const ogImage = metaContent('og:image', 'property');
    if (ogImage && !resolvesInDist(new URL(ogImage).pathname))
      fail(page, `og:image not in dist: ${ogImage}`);

    // JSON-LD
    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (!ld.length) fail(page, 'missing JSON-LD');
    for (const [, json] of ld) {
      try {
        const data = JSON.parse(json);
        if (data['@type'] === 'Organization' && !data.legalName)
          fail(page, 'Organization without legalName');
      } catch {
        fail(page, 'invalid JSON-LD');
      }
    }
  }

  // Headings
  const headings = [...html.matchAll(/<h([1-6])\b/g)].map((m) => Number(m[1]));
  const h1s = headings.filter((h) => h === 1).length;
  if (home && h1s !== 1) fail(page, `expected exactly one <h1>, found ${h1s}`);
  headings.reduce((prev, h) => {
    if (h > prev + 1) fail(page, `heading level skips from h${prev} to h${h}`);
    return h;
  }, 1);

  // Ids & anchors
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const idSet = new Set(ids);
  if (idSet.size !== ids.length) {
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    fail(page, `duplicate ids: ${[...new Set(dupes)].join(', ')}`);
  }
  for (const a of tags(html, 'a')) {
    const href = decode(attr(a, 'href') ?? '');
    if (!href) {
      fail(page, `<a> without href: ${a}`);
      continue;
    }
    if (href.startsWith('#')) {
      if (!idSet.has(href.slice(1))) fail(page, `broken anchor ${href}`);
    } else if (href.startsWith('/')) {
      if (!resolvesInDist(href)) fail(page, `broken internal link ${href}`);
    } else if (href.startsWith('mailto:')) {
      if (!/^mailto:[^@\s<>]+@[^@\s<>]+\.[a-z]{2,}(\?subject=.+)?$/i.test(href))
        fail(page, `malformed mailto: ${href}`);
    } else if (href.startsWith('https://wa.me/')) {
      if (!/^https:\/\/wa\.me\/[1-9]\d{7,14}\?text=.+/.test(href))
        fail(page, `malformed wa.me: ${href}`);
    }
    if (attr(a, 'target') === '_blank' && !/noopener/.test(attr(a, 'rel') ?? ''))
      fail(page, `target=_blank without rel=noopener: ${href}`);
  }
  for (const tag of [...tags(html, 'img'), ...tags(html, 'script'), ...tags(html, 'link')]) {
    const url = attr(tag, 'src') ?? (tag.startsWith('<link') ? attr(tag, 'href') : undefined);
    if (url?.startsWith('/') && !resolvesInDist(url)) fail(page, `missing asset ${url}`);
  }
  for (const img of tags(html, 'img')) {
    if (attr(img, 'alt') === undefined) fail(page, `<img> without alt: ${img}`);
  }

  // Placeholders must never ship (FR-09)
  const placeholder =
    /<E164_NUMBER>|E164_NUMBER|OFFICIAL_EMAIL|ENCODED_SUBJECT|example\.(com|org)|lorem ipsum|\bTODO\b|\bTBD\b|wa\.me\/0|wa\.me\/\+/i;
  const hit = html.match(placeholder);
  if (hit) fail(page, `placeholder text found: "${hit[0]}"`);

  if (/data-contact-pending/.test(html)) {
    (indexable ? fail : warn)(page, 'contact links not configured (src/config/site.ts)');
  }

  if (locale) {
    structure[locale] = {
      sections: [...html.matchAll(/<section\b[^>]*\sid="([^"]+)"/g)].map((m) => m[1]),
      headings: headings.join(','),
      services: (html.match(/id="service-[a-z]+"/g) ?? []).length,
      listItems: (html.match(/<li\b/g) ?? []).length,
    };
  }
};

for (const locale of LOCALES) {
  if (existsSync(join(DIST, locale, 'index.html')))
    checkPage(`${locale}/index.html`, { locale, home: true });
}
if (existsSync(join(DIST, '404.html'))) checkPage('404.html', { home: false });

// --- Localization parity ----------------------------------------------------
if (structure.id && structure.en) {
  const [a, b] = [structure.id, structure.en];
  if (a.sections.join() !== b.sections.join())
    fail('parity', `section ids differ: id=[${a.sections}] en=[${b.sections}]`);
  if (a.headings !== b.headings) fail('parity', 'heading structure differs between ID and EN');
  if (a.services !== 5 || b.services !== 5) fail('parity', 'expected 5 services in each locale');
  if (a.listItems !== b.listItems)
    fail('parity', `list item count differs: id=${a.listItems} en=${b.listItems}`);
}

// --- Root redirect -----------------------------------------------------------
if (existsSync(join(DIST, '_redirects')) && !/^\/\s+\/id\/\s+30[18]/m.test(read('_redirects')))
  fail('_redirects', 'missing "/ → /id/" permanent redirect');

// --- Report -------------------------------------------------------------------
for (const w of warnings) console.warn(`⚠ ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`✗ ${e}`);
  console.error(`\n${errors.length} problem(s) found in dist/.`);
  process.exit(1);
}
console.log(
  `✓ dist verified (${indexable ? 'production, indexable' : 'non-production, noindex'}) — ` +
    `${structure.id?.sections.length ?? 0} sections per locale, ID/EN parity OK.`,
);
