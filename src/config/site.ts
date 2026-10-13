/**
 * Single source of truth for company identity and contact details.
 *
 * Everything here is published. Only fill in values that the business owner has
 * approved (PRD §14, §18). Contact values left as `null` are not rendered, and a
 * production build fails while they are missing, so placeholder links can never ship.
 */
export const SITE = {
  url: 'https://sts.web.id',
  brand: 'STS.',
  shortName: 'STS',
  fullName: 'Sawangsulna Teknologi Studio',
  legalName: 'PT Sawangsulna Teknologi Studio',
  descriptor: 'Learning & Technology Studio',
  tagline: 'Designing Learning. Enabling Growth.',
  foundingYear: 2021,

  legal: {
    /** Supplied by the owner, not independently verified (PRD header). */
    ahuNumber: 'AHU-0197668.AH.01.11.TAHUN 2021',
    ahuDate: '2021-11-11',
    /** Approved by the owner for publication as the company's legal registration. */
    showAhu: true,
  },

  contact: {
    /** Approved official business email, e.g. 'halo@sts.web.id'. */
    email: 'sapa@sawangsulna.web.id' as string | null,
    /** Approved WhatsApp Business number in E.164 digits without '+', e.g. '6281234567890'. */
    whatsappE164: null as string | null,
  },

  /** Verified public profiles only (e.g. LinkedIn). Rendered in footer and JSON-LD `sameAs`. */
  sameAs: [] as string[],
} as const;

export type ContactChannel = 'email' | 'whatsapp';

export const hasEmail = (): boolean => !!SITE.contact.email;
export const hasWhatsApp = (): boolean => !!SITE.contact.whatsappE164;
export const isContactReady = (): boolean => hasEmail() || hasWhatsApp();
