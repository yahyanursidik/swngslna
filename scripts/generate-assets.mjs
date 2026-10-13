/**
 * Generates raster brand assets from original SVG sources:
 *   public/favicon-32.png, public/apple-touch-icon.png, public/logo-512.png,
 *   public/og-id.png, public/og-en.png (1200×630)
 *
 * Run after changing the wordmark, tagline or meta copy:  npm run assets
 * Uses sharp (installed with Astro). Text renders with the system sans-serif.
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('../public/', import.meta.url);
const out = (name) => fileURLToPath(new URL(name, root));

const C = {
  navy: '#142933',
  paper: '#F7F7F3',
  teal: '#477F7A',
  tealSoft: '#9CCBC5',
  mist: '#BECED0',
  sand: '#DAAA72',
};
const FONT = "Manrope, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Square mark: "S." on navy, used for favicons and logo. */
const markSvg = (size, { rounded = true } = {}) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="${rounded ? 14 : 0}" fill="${C.navy}"/>
  <text x="29" y="45" font-family="${FONT}" font-size="38" font-weight="800"
    fill="${C.paper}" text-anchor="middle" letter-spacing="-1">S</text>
  <circle cx="46" cy="42" r="4.2" fill="${C.tealSoft}"/>
</svg>`;

const logoSvg = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${C.navy}"/>
  <text x="236" y="300" font-family="${FONT}" font-size="170" font-weight="800"
    fill="${C.paper}" text-anchor="middle" letter-spacing="-7">STS</text>
  <circle cx="396" cy="290" r="15" fill="${C.tealSoft}"/>
  <text x="256" y="372" font-family="${FONT}" font-size="25" font-weight="600"
    fill="${C.mist}" text-anchor="middle">Sawangsulna Teknologi Studio</text>
</svg>`;

const ogSvg = ({ eyebrow, lines, footer }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="#2A4652"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="${C.navy}"/>
  <rect x="840" y="0" width="360" height="630" fill="url(#dots)"/>
  <g fill="none" stroke-width="2">
    <circle cx="1000" cy="265" r="120" stroke="${C.paper}" stroke-opacity="0.55"/>
    <circle cx="1100" cy="265" r="120" stroke="${C.tealSoft}" stroke-opacity="0.8"/>
    <circle cx="1050" cy="350" r="120" stroke="${C.sand}" stroke-opacity="0.8"/>
    <circle cx="1050" cy="293" r="40" stroke="${C.paper}" stroke-width="2.5"/>
  </g>
  <circle cx="1050" cy="253" r="8" fill="${C.tealSoft}"/>

  <text x="80" y="118" font-family="${FONT}" font-size="64" font-weight="800"
    fill="${C.paper}" letter-spacing="-2">STS<tspan fill="${C.tealSoft}">.</tspan></text>
  <text x="80" y="196" font-family="${FONT}" font-size="20" font-weight="700"
    fill="${C.tealSoft}" letter-spacing="3">${esc(eyebrow)}</text>
  ${lines
    .map(
      (
        l,
        i,
      ) => `<text x="80" y="${290 + i * 64}" font-family="${FONT}" font-size="50" font-weight="800"
    fill="${i === 0 ? C.paper : C.tealSoft}" letter-spacing="-1.5">${esc(l)}</text>`,
    )
    .join('\n  ')}
  <rect x="80" y="500" width="64" height="4" rx="2" fill="${C.sand}"/>
  <text x="80" y="552" font-family="${FONT}" font-size="26" font-weight="600"
    fill="${C.mist}">${esc(footer)}</text>
</svg>`;

const png = (svg, file, size) =>
  sharp(Buffer.from(svg))
    .resize(size?.w, size?.h)
    .png({ compressionLevel: 9, palette: false })
    .toFile(out(file));

const { default: id } = await import('../src/i18n/id.ts');
const { default: en } = await import('../src/i18n/en.ts');

await png(markSvg(256), 'favicon-32.png', { w: 32, h: 32 });
await png(markSvg(360, { rounded: false }), 'apple-touch-icon.png', { w: 180, h: 180 });
await png(markSvg(1024, { rounded: false }), 'icon-512.png', { w: 512, h: 512 });
await png(logoSvg(512), 'logo-512.png');

for (const t of [id, en]) {
  await png(
    ogSvg({
      eyebrow: t.hero.eyebrow,
      lines: t.hero.titleLines,
      footer: 'Sawangsulna Teknologi Studio  ·  sts.web.id',
    }),
    `og-${t.locale}.png`,
  );
}

await writeFile(
  out('favicon.svg'),
  markSvg(64)
    .replace(` width="64" height="64" viewBox`, ' viewBox')
    .replace(FONT, FONT.replace(/'/g, ''))
    .trim() + '\n',
);

console.log('Assets written to public/');
