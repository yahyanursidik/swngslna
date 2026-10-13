/**
 * Generates brand assets from the vector logo mark (src/lib/brand.ts):
 *   public/favicon.svg, public/favicon-32.png, public/apple-touch-icon.png,
 *   public/icon-512.png, public/logo-512.png, public/og-id.png, public/og-en.png
 *
 * Run after changing the mark, tagline or hero copy:  npm run assets
 * Uses sharp (installed with Astro). OG text renders with the system sans-serif.
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const { markSvg, MARK_PALETTE, MARK_VIEWBOX } = await import('../src/lib/brand.ts');
const { default: id } = await import('../src/i18n/id.ts');
const { default: en } = await import('../src/i18n/en.ts');

const root = new URL('../public/', import.meta.url);
const out = (name) => fileURLToPath(new URL(name, root));

const C = {
  navy: '#16354F',
  paper: '#F7F7F3',
  icon: '#FBF9F5',
  tealInk: '#3A6C7D',
  teal: '#447C8E',
  muted: '#4A5A66',
  line: '#DBE3E4',
  sand: '#E1B373',
};
const FONT = "Manrope, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
const ASPECT = MARK_VIEWBOX.height / MARK_VIEWBOX.width;

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** The mark as a nested <svg> placed at (x, y) with the given width. */
const placeMark = (x, y, width, idSuffix = 'a') =>
  markSvg(MARK_PALETTE.light, {
    id: `m-${idSuffix}`,
    attrs: `x="${x}" y="${y}" width="${width}" height="${(width * ASPECT).toFixed(2)}"`,
  }).replace(/xmlns="[^"]*"\s*/, '');

/** Square app icon: mark centered on warm off-white, like the approved icon. */
const iconSvg = (size, { rounded = true, scale = 0.72 } = {}) => {
  const w = size * scale;
  const h = w * ASPECT;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${rounded ? size * 0.22 : 0}" fill="${C.icon}"/>
  ${placeMark((size - w) / 2, (size - h) / 2 + size * 0.01, w)}
</svg>`;
};

const ogSvg = ({ eyebrow, lines }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="${C.line}"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="${C.paper}"/>
  <rect x="840" y="0" width="360" height="630" fill="url(#dots)"/>
  <g stroke-width="2.5" fill-opacity="0.08">
    <circle cx="990" cy="265" r="120" stroke="${C.navy}" fill="${C.navy}"/>
    <circle cx="1090" cy="265" r="120" stroke="${C.teal}" fill="${C.teal}"/>
    <circle cx="1040" cy="352" r="120" stroke="${C.sand}" fill="${C.sand}"/>
  </g>
  <circle cx="1040" cy="294" r="40" fill="none" stroke="${C.navy}" stroke-width="2.5"/>
  <circle cx="1040" cy="254" r="9" fill="${C.tealInk}"/>

  ${placeMark(80, 64, 112, 'og')}
  <text font-family="${FONT}" fill="${C.navy}">
    <tspan x="212" y="112" font-size="30" font-weight="800">Sawangsulna</tspan>
    <tspan x="212" y="146" font-size="30" font-weight="500">Teknologi Studio</tspan>
  </text>
  <text x="80" y="252" font-family="${FONT}" font-size="20" font-weight="700"
    fill="${C.tealInk}" letter-spacing="3">${esc(eyebrow)}</text>
  ${lines
    .map(
      (
        l,
        i,
      ) => `<text x="80" y="${330 + i * 64}" font-family="${FONT}" font-size="50" font-weight="800"
    fill="${i === 0 ? C.navy : C.tealInk}" letter-spacing="-1.5">${esc(l)}</text>`,
    )
    .join('\n  ')}
  <rect x="80" y="500" width="64" height="4" rx="2" fill="${C.sand}"/>
  <text x="80" y="552" font-family="${FONT}" font-size="24" font-weight="600"
    fill="${C.muted}">STS  ·  sts.web.id</text>
</svg>`;

const png = (svg, file, size) =>
  sharp(Buffer.from(svg)).resize(size?.w, size?.h).png({ compressionLevel: 9 }).toFile(out(file));

// Favicons & icons
await png(iconSvg(256, { scale: 0.84 }), 'favicon-32.png', { w: 32, h: 32 });
await png(iconSvg(360, { rounded: false }), 'apple-touch-icon.png', { w: 180, h: 180 });
await png(iconSvg(1024, { rounded: false, scale: 0.62 }), 'icon-512.png', { w: 512, h: 512 });
await png(iconSvg(1024, { rounded: false, scale: 0.7 }), 'logo-512.png', { w: 512, h: 512 });
await writeFile(out('favicon.svg'), iconSvg(64, { scale: 0.84 }).trim() + '\n');

// Open Graph images, one per locale
for (const t of [id, en]) {
  await png(ogSvg({ eyebrow: t.hero.eyebrow, lines: t.hero.titleLines }), `og-${t.locale}.png`);
}

console.log('Assets written to public/');
