# STS — Sawangsulna Teknologi Studio

Bilingual (Indonesian / English) static corporate site for **PT Sawangsulna Teknologi Studio**,
built to [`STS_Sawangsulna_PRD_v1.0.md`](STS_Sawangsulna_PRD_v1.0.md).

- **Stack:** Astro 7 (static output) · TypeScript (strict) · Tailwind CSS 4 · Lucide icons · self-hosted Manrope (OFL)
- **Routes:** `/` → 301 to `/id/` (host-side) · `/id/` · `/en/` · localized `404`
- **No** CMS, database, auth, server functions, forms, analytics, or AI API. Client JS is ~2 KB (menu, language-switch hash, active section).

---

## 1. Setup

Requires Node **22.12+** (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321/id/
```

| Script                 | What it does                                                                      |
| ---------------------- | --------------------------------------------------------------------------------- |
| `npm run dev`          | Local dev server                                                                  |
| `npm run build`        | Static build to `dist/` (noindex unless production — see §4)                      |
| `npm run preview`      | Serve `dist/` locally                                                             |
| `npm run check`        | Astro + TypeScript diagnostics                                                    |
| `npm run verify`       | Post-build checks on `dist/` (links, anchors, SEO tags, headings, ID/EN parity…) |
| `npm run ci`           | format check → type check → build → verify (same as GitHub Actions)               |
| `npm run launch-check` | Lists owner approvals still missing; exits 1 while a blocker remains              |
| `npm run assets`       | Regenerates favicons, logo and OG images from the copy                            |
| `npm run format`       | Prettier                                                                          |

## 2. Project structure

```text
src/
├── config/site.ts          ← company identity, legal line, CONTACT DETAILS (edit here)
├── i18n/
│   ├── types.ts            ← Dictionary shape shared by both languages
│   ├── id.ts / en.ts       ← all page copy (type-checked against types.ts)
│   └── config.ts           ← locales, shared section anchor ids
├── components/             ← Header, Hero, About, Challenges, Expertise, Platform, Approach,
│                             AILearning, Industries, SelectedWork, Contact, Footer
├── layouts/BaseLayout.astro← <head>: SEO, canonical, hreflang, OG, JSON-LD, robots
├── lib/                    ← contact link builders, nav, structured data
├── pages/                  ← id/, en/, 404, root fallback, robots.txt
└── styles/global.css       ← design tokens (colors, type, spacing) + base styles
public/                     ← favicons, OG images, _redirects, _headers, manifest
scripts/                    ← verify-dist, launch-check, generate-assets
```

## 3. Updating content

All copy lives in **`src/i18n/id.ts`** and **`src/i18n/en.ts`**. Both must satisfy `Dictionary`
in `types.ts`, so a missing or extra key fails `npm run check`. `npm run verify` also fails the
build if the two pages drift structurally (different sections, headings or list counts).

- Edit both languages in the same commit. Localize; don't translate word-for-word (PRD §11).
- Keep claims evidence-grounded: no invented metrics, clients, logos or partnerships (PRD §1, §5).
- After changing the hero title or meta copy, run `npm run assets` to refresh the OG images.

### Adding a Selected Work case

The section and its nav link are hidden while `work.cases` is empty. Add a case **only** with
the client's written permission, to **both** dictionaries:

```ts
cases: [
  {
    title: 'Redesign of onboarding academy',
    client: 'Client name (approved)',
    sector: 'Corporate',
    year: '2025',
    summary: 'One or two factual sentences about the scope and what was delivered.',
    scope: ['Needs analysis', 'Learning journey', 'LMS configuration'],
    logo: { src: '/clients/client.svg', alt: 'Client name' }, // optional, approved logo in public/clients/
  },
],
```

### Contact links (required before launch)

Set approved values in **`src/config/site.ts`**:

```ts
contact: {
  email: 'sapa@sawangsulna.web.id', // approved official business email (current)
  whatsappE164: null,                // add later as E.164 digits, e.g. '62812xxxxxxxx'
},
```

- Links are built automatically: `mailto:` with a localized subject and `https://wa.me/<number>?text=`
  with a localized prefilled message (edit the wording in `contact.emailSubject` /
  `contact.whatsappMessage` in each dictionary). The message ends with "(Source: website)" so inquiries
  can be attributed manually (PRD §14).
- Either channel alone is enough; the other is simply not rendered.
- While both are `null`, the site shows a "pending approval" note and **a production build fails**,
  so placeholder links can never ship.

### Legal line

The AHU registration (`legal.ahuNumber`, `legal.ahuDate`) is shown in About, Contact, the footer and
Organization JSON-LD (`identifier`). Set `legal.showAhu = false` to hide it everywhere.

## 4. Indexing: production vs. staging

Only the production deployment is indexable. Every other build gets
`<meta name="robots" content="noindex, nofollow">` and a disallow-all `robots.txt`.

Production is detected automatically on Netlify (`CONTEXT=production`), Vercel
(`VERCEL_ENV=production`) and Cloudflare Pages (`CF_PAGES_BRANCH=main`, override with
`PRODUCTION_BRANCH`). Anywhere else, set `SITE_ENV=production`. Set `SITE_ENV=staging` to force
noindex even on a production branch.

## 5. Deployment

The site is plain static files in `dist/`. Each host gets the root redirect and security headers
from files already in the repo — **no server adapter is needed**.

| Host                 | Build command                       | Output | Redirect / headers source  |
| -------------------- | ----------------------------------- | ------ | -------------------------- |
| **Cloudflare Pages** | `npm run build && npm run verify`   | `dist` | `public/_redirects`, `public/_headers` |
| **Netlify**          | from `netlify.toml`                 | `dist` | `public/_redirects`, `public/_headers` |
| **Vercel**           | from `vercel.json`                  | `dist` | `vercel.json`              |

Node version: 22 (set `NODE_VERSION=22` on Cloudflare Pages).

After the first production deploy:

1. Point `sts.web.id` DNS to the host and confirm HTTPS.
2. `curl -I https://sts.web.id/` → expect `301`/`308` with `location: /id/`.
3. Check `https://sts.web.id/robots.txt` shows `Allow: /` and the sitemap URL.
4. Submit `https://sts.web.id/sitemap-index.xml` in Google Search Console.
5. Run Lighthouse (mobile) on `/id/` and `/en/`; share-preview both URLs to check OG images.
6. Run `npm run launch-check` and complete the manual sign-off list.

## 6. Quality checks

`npm run verify` (also in CI) fails on:

- missing pages/files, wrong `<html lang>`, missing title/description
- canonical not self-referencing; missing `hreflang` id/en/x-default; missing OG tags or image
- robots meta disagreeing with `robots.txt`
- more than one `<h1>`, skipped heading levels, duplicate ids
- any `#anchor` without a target, any internal link/asset not in `dist/`
- malformed `mailto:`/`wa.me` links, placeholder text, `target=_blank` without `rel=noopener`
- `<img>` without `alt`, invalid JSON-LD
- ID/EN differing in sections, heading structure or list counts

Manual checks still required before launch (PRD §17): keyboard-only pass, a screen-reader spot
check, 200% browser zoom, `prefers-reduced-motion`, and recent Chrome/Firefox/Safari/Edge.

## 7. Logo & illustrations

- Approved source files: `brand/sts-logo-icon-source.webp`, `brand/sts-logo-horizontal-source.png`.
- The mark is redrawn as vector data in `src/lib/brand.ts` (single source). It renders inline via
  `src/components/ui/Mark.astro` / `Logo.astro` (light and dark variants) and feeds
  `npm run assets`, which regenerates the favicons, app icons, `logo-512.png` and OG images.
- Section illustrations are original inline SVGs in `src/components/figures/` (Challenges, Platform,
  AI & Learning). Their labels come from the dictionaries, so they are localized and type-checked.

## 8. Design tokens

Defined in `src/styles/global.css` (`@theme`), aligned to the approved logo colors (navy
`#16354F`, logo teal `#447C8E`, sand `#E1B373`). AA-driven additions: `teal-ink #3A6C7D` for accent
**text** and buttons on light backgrounds (logo teal is ~4.3:1 on off-white) and `teal-soft #A7CBD6`
for accents on navy. Sand is used only for rules and highlights, never for body text on light surfaces.
