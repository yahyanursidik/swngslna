# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## STS — Sawangsulna Teknologi Studio
**Version:** 1.0  
**Date:** 13 October 2026  
**Status:** Approved direction / Ready for implementation planning  
**Planned domain:** `sts.web.id` (availability and ownership not verified)  
**Legal company:** PT Sawangsulna Teknologi Studio  
**Company registration supplied by owner:** AHU-0197668.AH.01.11.TAHUN 2021, dated 11 November 2021 (not independently verified)

---

## 1. Executive Summary
STS is a bilingual (Indonesian and English) static corporate landing page for PT Sawangsulna Teknologi Studio. Established in 2021, the company focuses on learning systems, instructional and learning experience design, digital learning implementation, and organizational learning capabilities. AI is positioned as a responsible enabler of learning, not a replacement for educators or sound instructional practice.

**Positioning:** Learning Sciences × Experience Design × AI & Technology.  
**Brand:** STS. / Sawangsulna Teknologi Studio  
**Descriptor:** Learning & Technology Studio  
**Tagline:** Designing Learning. Enabling Growth.  
**Primary outcome:** qualified B2B consultations.

### Non-negotiable scope
- Single page per language; static-first Astro implementation.
- Indonesian and English with equivalent, quality-assured content.
- No CMS, database, admin dashboard, authentication, embedded LMS, custom backend, or AI API integration.
- Git-managed copy and images.
- Direct email and WhatsApp contact links, no onsite submission form.
- Evidence-grounded claims; no fabricated case studies, quantitative outcomes, customer logos, or partnerships.

## 2. Business Goals and Success Criteria
1. Establish a distinctive, professional and credible online identity.
2. Explain exactly which organizational learning problems STS solves.
3. Show capabilities across consulting, LMS, experience design, analytics/evaluation and AI adoption.
4. Generate relevant consultations from decision-makers at institutions and enterprises.
5. Reach Indonesian and English-speaking visitors through localized SEO.

**North Star Metric:** number of qualified consultation inquiries per month (tracked externally through email/WhatsApp sales records). A CTA click is only an intent proxy, not a confirmed lead.

**Initial targets (hypotheses, review after baseline):** Lighthouse Performance >= 90 on representative mobile runs; accessibility checks with zero critical violations; all internal anchors operational; localization coverage 100%; no console errors; public pages successfully indexed; Core Web Vitals aspirational p75 LCP <=2.5s, CLS <=0.1, INP <=200ms where measurable.

## 3. Audiences and Jobs To Be Done
| Persona | Need | Buying consideration |
|---|---|---|
| HR/L&D Manager | Onboarding, corporate learning, competency development | Effectiveness, reporting, adoption |
| Academic Director / Education Leader | Digital curriculum and LMS implementation | Pedagogy, usability, sustainable operations |
| Training / Organization Manager | Cohort programs, certification, distributed training | Scalability, facilitator readiness, cost |
| IT/Digital Transformation Lead | Platform selection/integration, security, migration | Architecture, vendor reliability, interoperability |

**JTBD example:** 'When our organization has an LMS but learning outcomes remain unclear, we want to diagnose and redesign the learning journey so that participants can transfer learning into work.'

## 4. Product Scope
### In scope
- Static bilingual corporate homepage at `/id/` and `/en/`.
- Root `/` redirect to `/id/` with simple static-host routing.
- Responsive accessible navigation, active section indication where useful, mobile menu, language switch.
- Sections: hero, about, challenges, expertise, approach, AI, industries, selected work, contact, footer.
- Functional email and WhatsApp CTAs.
- SEO metadata, OpenGraph image, sitemap, robots, canonical, hreflang, structured data.
- Accessible design, optimized assets, quality checks, deployment pipeline.

### Out of scope
CMS, database, forms storing submissions, backend API, logins, user accounts, CRM, chatbot, AI API, LMS, client portal, subscriptions, e-commerce, blog engine, multi-site architecture, heavy animation frameworks.

## 5. Brand and Messaging
**Public wordmark:** STS.  
**Full name:** Sawangsulna Teknologi Studio  
**Corporate identity:** PT Sawangsulna Teknologi Studio  
**Descriptor:** Learning & Technology Studio  
**Tagline:** Designing Learning. Enabling Growth.

**ID positioning:** Sejak 2021, PT Sawangsulna Teknologi Studio berfokus membantu lembaga pendidikan, korporasi, dan organisasi merancang pengalaman pembelajaran, mengembangkan sistem pembelajaran digital internal, dan mendampingi implementasi teknologi pembelajaran yang relevan. Kami menghubungkan ilmu pembelajaran, desain pengalaman, dan teknologi—termasuk AI yang bertanggung jawab—untuk mendukung peningkatan kompetensi dan kapasitas organisasi.

**EN positioning:** Since 2021, Sawangsulna Teknologi Studio has focused on helping educational institutions, companies, and organizations design learning experiences, develop internal digital learning systems, and implement learning technology. We connect learning science, experience design, and technology—including responsible AI—to support sustainable organizational capabilities.

**Message hierarchy:** Learning problem first → scientific design → appropriate technology → implementation and enablement → evaluation.

**Avoid:** 'AI-powered' for features that do not exist; guarantees of performance outcomes; universal 'deep learning' superiority claims; unclear use of 'deep learning' as AI neural networks versus meaningful/deep learning in education; generic 'world-class' claims without evidence.

## 6. Information Architecture and UX
### Routes
- `/` → static 301/308 redirect to `/id/` (configured at CDN/hosting, not client-only redirect).
- `/id/` → Indonesian page.
- `/en/` → English page.
- Unknown routes → custom localized 404 with home link.

### Navigation
Header: STS. logo, About, Expertise, Approach, AI & Learning, Work, Contact, ID/EN toggle. On small screens use accessible toggle with aria-expanded, clear focus states, menu closes on link selection or Escape.

### Page sections, in order
1. **Hero** — core positioning, concise subheading, two direct CTAs; graphic abstract representing learning systems (not robot iconography).
2. **About** — established 2021, focus, identity and principles; do not use unverified business statistics.
3. **Challenges** — passive LMS, fragmented learning, weak alignment, limited evaluation, uncertain AI adoption.
4. **Expertise** — five services with typical outputs and client outcomes.
5. **Approach** — six-stage methodology and a selective learning-sciences toolbox.
6. **AI & Learning** — responsible practical AI use-cases and guardrails.
7. **Industries** — education, corporate/enterprise, training providers, nonprofit/institutions.
8. **Selected Work** — approved and verifiable evidence only; hide until publishable cases are ready.
9. **Contact** — mailto, WhatsApp links, company name and verified contact details.
10. **Footer** — legal company name, official supplied AHU reference after approval, copyright, links and privacy note if analytics/third-party links are used.

## 7. Detailed Functional Requirements
| ID | Priority | Requirement | Acceptance criteria |
|---|---|---|---|
| FR-01 | P0 | Display bilingual pages | `/id/` and `/en/` build as separate static HTML pages |
| FR-02 | P0 | Language switch | Switch preserves equivalent section hash when present |
| FR-03 | P0 | Sticky or static responsive navigation | Keyboard and touch navigable; no horizontal overflow |
| FR-04 | P0 | Anchor navigation | Each header anchor scrolls to the matching section with offset for header |
| FR-05 | P0 | Hero CTAs | Primary scrolls to expertise/contact as labeled; secondary opens contact route/anchor |
| FR-06 | P0 | Services list | Five service categories each include problem, intervention, deliverable |
| FR-07 | P0 | Approach | Six-stage process and clear distinction between frameworks and evidence |
| FR-08 | P0 | AI area | Clearly communicates use cases, human validation, privacy, accuracy |
| FR-09 | P0 | Contact links | mailto and wa.me use approved real addresses/numbers, no placeholders in production |
| FR-10 | P0 | SEO | Unique localized titles/descriptions, canonical, OG and hreflang |
| FR-11 | P0 | Responsive | Tested at 320, 375, 768, 1024, 1440 CSS px |
| FR-12 | P0 | Accessible | Semantic headings, labelled controls, accessible keyboard menu, visible focus |
| FR-13 | P1 | Selected work | Render only approved cases and approved logos; empty section omitted |
| FR-14 | P1 | Motion | Subtle CSS transitions, disabled/reduced for prefers-reduced-motion |
| FR-15 | P1 | Structured data | Organization schema using only verified details |
| FR-16 | P1 | CTA tracking | Optional privacy-conscious analytics only upon decision, not MVP dependency |
| FR-17 | P0 | Build quality | Clean production build and zero broken assets/links |

## 8. Services Content Requirements
### S1 Learning Strategy & Consulting
Needs analysis, competency mapping, learning strategy, learning ecosystem audit, transformation roadmap.
**Deliverables:** diagnostic report, learning roadmap, competency map, architecture recommendation.

### S2 LMS Development & Implementation
Platform evaluation, implementation/configuration, custom development when justified, migration, integration, governance and adoption. Do not suggest STS is an official partner of any commercial LMS without proof.
**Deliverables:** solution blueprint, configured/built LMS, migration checklist, enablement plan.

### S3 Instructional & Learning Experience Design
Curriculum and learning pathway, blended learning, case-based learning, interactive content, authentic assessment, constructive alignment.
**Deliverables:** learning design blueprint, learning journey map, course/module prototypes and evaluation rubrics.

### S4 Learning Analytics & Evaluation
Performance indicators, dashboards where commissioned, completion and engagement analysis, competency assessment, learning transfer evaluation.
**Deliverables:** evaluation framework, measurement specification, findings and recommendations.

### S5 AI Learning Enablement
AI literacy, AI-assisted design processes, AI tutor/assistant concepts (only if capacity exists), AI readiness, governance and human oversight.
**Deliverables:** AI adoption roadmap, staff training plan, governance checklist and scoped prototype when appropriate.

## 9. Learning Science Framework
| Framework | Use in client engagements | Guardrail |
|---|---|---|
| Andragogy | Relevance, learner experience, practical context | Not a universal rule for all adult learners |
| Transformative Learning | Reflection, assumption-testing, perspective change | Requires appropriate facilitation/context |
| Heutagogy | Learner agency and self-determined pathways | Needs support and learner readiness |
| Cognitive Load Theory | Segmentation, worked examples, reduction of extraneous load | Balance load with productive complexity |
| Deep/Meaningful Learning | Conceptual understanding and transfer | Clarify meaning vs AI deep learning |
| Retrieval & Spacing | Practice and retained recall | Tune spacing and feedback to learner needs |
| Experiential Learning | Practice, simulation, authentic problems | Reflection and transfer are essential |
| Universal Design for Learning | Multiple means of engagement, representation, action/expression | Accessibility and outcomes remain key |

These theories are not presented as equally validated, interchangeable, or required in every project. Select evidence-aligned methods based on objectives, audience, constraints and evaluation.

## 10. AI in the Website Narrative
AI here describes STS consulting and implementation capabilities, not site functionality.

**Use cases:** assisted needs synthesis, learning-path drafting, content ideation, case/scenario drafting, formative feedback design, contextual learning assistants, learning analytics support, staff AI literacy and governance.

**Guardrails:** human sign-off; protect organizational/personal data; evaluate hallucinations, bias, copyright/IP, source grounding, transparency, data retention, cost and impact; avoid automated high-stakes learner decisions without adequate governance. AI use cases are conditional capabilities; do not promise all are production-ready unless validated.

## 11. Bilingual Copy Deck (Draft)
| Element | Bahasa Indonesia | English |
|---|---|---|
| Hero eyebrow | SAINS PEMBELAJARAN · DESAIN · TEKNOLOGI | LEARNING SCIENCES · DESIGN · TECHNOLOGY |
| Hero title | Pembelajaran Lebih Bermakna. Teknologi Lebih Tepat Guna. | Better Learning. Smarter Technology. |
| Hero support | Kami membantu organisasi merancang pengalaman belajar dan sistem pembelajaran digital yang mendukung pengembangan kompetensi, dengan pendekatan ilmiah dan pemanfaatan AI yang bertanggung jawab. | We help organizations design effective learning experiences and digital learning systems, informed by learning science and responsible AI adoption. |
| Primary CTA | Jelajahi Layanan | Explore Our Expertise |
| Secondary CTA | Diskusikan Kebutuhan Anda | Discuss Your Project |
| About title | Berawal dari Kebutuhan Belajar, Bukan Teknologi | We Start With the Learning Problem |
| Challenges title | Platform Saja Tidak Cukup | A Platform Alone Is Not Enough |
| Expertise title | Keahlian Kami | Our Expertise |
| Approach title | Cara Kami Bekerja | How We Work |
| AI title | Pembelajaran di Era AI | Learning in the AI Era |
| Industries title | Organisasi yang Kami Dukung | Who We Serve |
| Selected Work title | Pekerjaan Pilihan | Selected Work |
| Contact title | Mari Rancang Pembelajaran yang Lebih Baik | Let's Design Better Learning |
| Email CTA | Kirim Email | Send an Email |
| WhatsApp CTA | Hubungi via WhatsApp | Contact via WhatsApp |

Tone of voice: confident but not boastful; clear, human, practical and consultative; no jargon-stacking; professionally localized rather than literal word-for-word translation.

## 12. Design System
**Design direction:** modern editorial, clean, thoughtful, analytical, calm, non-generic, anti-AI-slop.

**Colors (initial proposal):**
- Navy `#142933` (primary text/dark surface)
- Off-white `#F7F7F3` (page background)
- Teal `#477F7A` (accent)
- Mist `#BECED0` (soft separators)
- Sand `#DAAA72` (rare secondary highlight)

Contrast must be tested; tokens may be adjusted to achieve WCAG 2.2 AA.

**Type:** Manrope or Inter, one primary font initially; use font-display swap and self-host/subset licensed files if appropriate. Never include font asset redistribution in deliverable bundles unless license allows.

**Layout:** max content width approximately 1200px; body 16-18px; H1 responsive ~40-72px; 8px spacing system; restrained border radius; generous whitespace; real-world visuals or original simple vector diagrams only.

**Avoid:** robots, brains, neon glow, decorative arches/lanterns/mosques, excessive gradients, glassmorphism, fake dashboards, meaningless illustrations, stock testimonials, gratuitous animations.

**Motion:** functional and minimal; respect reduced motion.

## 13. Technical Architecture
**Framework:** current stable Astro with TypeScript, built as static HTML.  
**CSS:** Tailwind CSS 4 via official Vite plugin.  
**Components:** Astro-native components; no React unless a demonstrated need arises.  
**Icons:** Lucide (prefer tree-shaken SVG output).  
**Hosting:** Vercel, Netlify, or Cloudflare Pages with static files and HTTPS.  
**Content:** local TS files `id.ts` and `en.ts`; all strings type-checked against a shared schema or shape.  
**Assets:** local compressed SVG/WebP/AVIF with Astro image handling where useful.  
**CI:** GitHub Actions or host CI for format/typecheck/build and link checks.  
**No:** CMS, DB, login, server functions, contact storage, runtime AI API.

### Example directory tree
```text
sts-web/
├── public/
│   ├── favicon.svg
│   ├── og-id.png
│   ├── og-en.png
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Challenges.astro
│   │   ├── Expertise.astro
│   │   ├── Approach.astro
│   │   ├── AILearning.astro
│   │   ├── Industries.astro
│   │   ├── SelectedWork.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── i18n/
│   │   ├── id.ts
│   │   ├── en.ts
│   │   └── types.ts
│   ├── layouts/BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── id/index.astro
│   │   ├── en/index.astro
│   │   └── 404.astro
│   └── styles/global.css
├── astro.config.mjs
├── package.json
└── README.md
```

### i18n routing requirements
Use Astro's native i18n `locales: ['id','en']`, `defaultLocale: 'id'`, `routing: {prefixDefaultLocale: true}`; provide both localized routes and a root redirect compatible with the chosen deployment target. When navigating between languages, preserve valid hashes. Each page should have matching language-specific HTML `lang` attributes, alternate hreflang links and self canonical.

### Example Astro config (illustrative)
```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sts.web.id',
  output: 'static',
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: { prefixDefaultLocale: true },
  },
  vite: { plugins: [tailwindcss()] },
});
```
**Important:** verify root redirect behavior on the chosen hosting provider; do not add server adapters to solve a static host redirect.

## 14. Contact and Lead Handling
- Use approved WhatsApp Business number: `https://wa.me/<E164_NUMBER>?text=<URL_ENCODED_MESSAGE>`.
- Use approved business email: `mailto:<OFFICIAL_EMAIL>?subject=<ENCODED_SUBJECT>`.
- Do not ship placeholder contact links.
- Prefilled WhatsApp message should identify interest in STS consultation; use localized message by page language.
- Track inquiry qualification manually outside the website; do not assume click = inquiry.
- If web analytics added later, review privacy disclosures and provider terms before deployment.

## 15. SEO and Discovery
- Language-specific page title and meta description, localized OG title/description/image.
- `rel=canonical` to self; two reciprocal `hreflang` links plus optional x-default route.
- Organization JSON-LD with only verified brand, URL and contact metadata.
- Accurate `robots.txt` and generated sitemap; do not expose staging to indexing.
- Optimize for intent clusters: learning technology consulting, LMS implementation, instructional design, learning experience design, AI learning strategy and Indonesian equivalents.
- Provide distinct alt text for meaningful illustrations; decorative SVG marked as decorative.
- Avoid keyword stuffing and fabricated customer reviews.

**Proposed ID meta title:** STS — Sawangsulna Teknologi Studio | Solusi Pembelajaran Digital  
**Proposed EN meta title:** STS | Learning Experience & Technology Studio

## 16. Non-Functional Requirements
| Category | Requirement |
|---|---|
| Performance | Static-first, minimal JS, compressed responsive images, avoid unnecessary client hydration |
| CWV | Aim LCP <=2.5s, CLS <=0.1, INP <=200ms at p75 when meaningful field data exists |
| Accessibility | Target WCAG 2.2 AA: contrast, keyboard, semantics, focus visibility, reduced motion |
| Responsiveness | No horizontal scroll and legible navigation at 320-1440 CSS pixels |
| Security | HTTPS, no secrets in repository/client, dependency maintenance, safe external links |
| Privacy | No data collection by default, no contact forms, careful consideration before analytics |
| Reliability | Static assets delivered via CDN, 404 page and functional links |
| Maintainability | Typed localized copy, reusable components, documented deployment procedure |
| Localization | No missing translation keys; no mixed-language UI except intentional technical terms |
| Content integrity | Legal claims and portfolio need verification and approval |

## 17. Test Plan and Acceptance Scenarios
**Functional:** load `/`, `/id/`, `/en/`; click language switch on top and hashed sections; test anchor offset; mobile menu open/close via keyboard and touch; external contacts open correctly; handle missing approved portfolio gracefully.

**Quality:** Astro check/build; broken link scan; inspect console errors; validate semantic heading order; Lighthouse desktop/mobile; automated accessibility plus manual keyboard and screen-reader spot-check; check browser zoom at 200% and reduced-motion preference.

**SEO:** validate titles, descriptions, canonical, hreflang, OG preview, sitemap, robots, structured data; confirm production URL and noindex staging.

**Cross-browser:** recent Chrome, Firefox, Safari and Edge (desktop/mobile where available).

**Launch gate:** no blockers; approved translations, contacts, legal line, identity; all P0 requirements pass.

## 18. Dependencies and Required Assets
- Approved STS logo / wordmark and favicon.
- Approved legal company naming and AHU reference.
- Confirmation that `sts.web.id` can be acquired/controlled.
- Approved official business email and WhatsApp number.
- Approved content regarding actual delivery capabilities and service boundaries.
- Evidence and written permission for any public portfolio, client names or logos.
- Business owner approval for ID and EN copy.
- Hosting provider selection and domain DNS access.

**If missing at launch:** hide unavailable case studies; omit unverified social links/client logos; contact CTA only ships with real approved contact information.

## 19. Roadmap
### Phase 0 — Discovery and content
Verify company details, brand, scope, services, bilingual copy and publication permissions.

### Phase 1 — Design
Create design tokens, responsive wireframes, section compositions, mobile navigation, content hierarchy and accessible interactions.

### Phase 2 — Implementation
Initialize Astro, Tailwind, static routing, local translations, all sections, favicon/OG/SEO, links and visual assets.

### Phase 3 — Quality and deployment
Perform acceptance tests, security/privacy review, build and deploy; configure domain, HTTPS, redirects, sitemap and search indexing.

### Phase 4 — Post-launch refinement
Review inquiries and usability feedback; update content in Git; add approved case studies; revisit optional analytics only if warranted.

## 20. Risks and Mitigations
| Risk | Mitigation |
|---|---|
| STS acronym lacks immediate recognition | Display full name prominently and in SEO |
| `.web.id` may appear local in global market | Strong professional copy, proper English localization, consistent identity |
| Unverified business claims | Approval checklist and omit unverified information |
| AI wording creates inflated expectations | Define use cases, boundaries and human oversight |
| Deep-learning terminology confusion | Distinguish educational deep learning from AI deep learning |
| Static contact offers limited attribution | Track externally with simple source prompts |
| Bilingual inconsistencies | Typed dictionaries, editorial review, side-by-side QA |
| Portfolio not ready | Conditionally hide selected work rather than invent examples |

## 21. Definition of Done
- All P0 functional and non-functional requirements satisfied.
- Both locales complete, reviewed and approved.
- Branding, company and contact details approved.
- All responsive breakpoints and accessibility checks passed.
- No CMS/database/server/API dependencies.
- SEO and analytics/privacy choices explicit.
- Production domain with HTTPS and correct redirects.
- README documents setup, content updates, build, deployment and contact-link maintenance.

## 22. Developer / Vibe Coding Instruction
> Build a production-quality bilingual static corporate landing page for STS (Sawangsulna Teknologi Studio) at sts.web.id, strictly following this PRD. Use Astro with TypeScript, Tailwind CSS v4 and Astro's built-in internationalization. Render `/id/` and `/en/` as static HTML and configure a host-side root redirect to `/id/`. Do not add CMS, database, auth, backend APIs, contact storage, embedded LMS, analytics by default, React hydration unless needed, or any AI API. Use local typed copy dictionaries. Implement modern editorial styling with accessible responsive components, keyboard-supporting navigation, correct anchor links, SEO/canonical/hreflang/OG/JSON-LD and direct email/WhatsApp contact. Preserve a calm aesthetic and avoid generic AI imagery. Do not fabricate case studies, metrics, customers or integrations. Test production build, localization, accessibility, responsiveness and all links before delivery.

## 23. References and Verification
- Astro internationalization: https://docs.astro.build/en/guides/internationalization/
- Tailwind CSS v4 for Astro: https://tailwindcss.com/docs/installation/framework-guides/astro
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/
- PANDI (domain registration guidance): https://pandi.id/id

**Note:** Software versions should be pinned to stable releases verified at setup time. Domain availability, registration status, portfolio permissions, and legal details require owner confirmation before publication.
