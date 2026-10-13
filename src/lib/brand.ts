/**
 * STS logo mark as vector data — redrawn from the approved logo
 * (brand/sts-logo-icon-source.webp). Single source for the site header/footer
 * (Mark.astro) and generated raster assets (scripts/generate-assets.mjs).
 * Keep this file free of imports so Node can load it directly.
 */

export interface MarkPalette {
  navy: string;
  teal: string;
  tealDeep: string;
  tail: string;
  sand: string;
}

export const MARK_PALETTE: Record<'light' | 'dark', MarkPalette> = {
  light: {
    navy: '#184261',
    teal: '#447c8e',
    tealDeep: '#3f7587',
    tail: '#3a6f84',
    sand: '#e1b373',
  },
  dark: {
    navy: '#f7f7f3',
    teal: '#a7cbd6',
    tealDeep: '#a7cbd6',
    tail: '#c9dde3',
    sand: '#e1b373',
  },
};

let markCount = 0;
/** Deterministic unique id for inline SVG gradient definitions. */
export const nextMarkId = (): number => ++markCount;

/** Tight bounds of the mark (dot top to baseline). Width:height ≈ 1.54. */
export const MARK_VIEWBOX = { x: 198, y: 320, width: 858, height: 554 };

export const markSvg = (
  palette: MarkPalette,
  { id = 'sts-mark', attrs = '' }: { id?: string; attrs?: string } = {},
): string => {
  const { x, y, width, height } = MARK_VIEWBOX;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} ${width} ${height}" ${attrs}>
  <defs>
    <linearGradient id="${id}-l" gradientUnits="userSpaceOnUse" x1="204" y1="0" x2="420" y2="0">
      <stop offset="0" stop-color="${palette.tail}"/>
      <stop offset="1" stop-color="${palette.navy}"/>
    </linearGradient>
    <linearGradient id="${id}-r" gradientUnits="userSpaceOnUse" x1="696" y1="0" x2="915" y2="0">
      <stop offset="0" stop-color="${palette.navy}"/>
      <stop offset="1" stop-color="${palette.tealDeep}"/>
    </linearGradient>
  </defs>
  <path fill="url(#${id}-l)" d="M440 609C519 609 562 654 562 739C562 824 519 869 440 869H204V860C204 810 240 772 290 772H427A31.5 31.5 0 0 0 427 709H440Z"/>
  <path fill="${palette.navy}" d="M696 440V869H690C630 869 594 832 594 772V539H343A35 35 0 0 0 343 609H440V709H336A134 134 0 0 1 336 440Z"/>
  <path fill="url(#${id}-r)" d="M688 772H920V869H688Z"/>
  <path fill="${palette.teal}" d="M728 440H1040Q1046 440 1046 446C1046 500 1012 539 960 539H728Z"/>
  <path fill="${palette.tealDeep}" d="M730 608H915C1003 608 1051 654 1051 739C1051 824 1003 869 915 869H900V772H897A31 31 0 0 0 897 709H810C760 709 730 682 730 640Z"/>
  <path fill="${palette.navy}" d="M696 440V869H690C630 869 594 832 594 772V440Z"/>
  <circle fill="${palette.sand}" cx="648" cy="375" r="51"/>
</svg>`;
};
