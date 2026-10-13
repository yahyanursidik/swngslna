import { SITE } from '@/config/site';
import type { Dictionary } from '@/i18n';

/** `mailto:` link with a localized, encoded subject (PRD §14). */
export const emailHref = (t: Dictionary): string | null =>
  SITE.contact.email
    ? `mailto:${SITE.contact.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`
    : null;

/** `wa.me` link with a localized, encoded prefilled message (PRD §14). */
export const whatsappHref = (t: Dictionary): string | null =>
  SITE.contact.whatsappE164
    ? `https://wa.me/${SITE.contact.whatsappE164}?text=${encodeURIComponent(t.contact.whatsappMessage)}`
    : null;

/** Human-readable WhatsApp number, e.g. +62 812-3456-7890. */
export const whatsappDisplay = (): string | null => {
  const n = SITE.contact.whatsappE164;
  if (!n) return null;
  if (n.startsWith('62')) {
    const rest = n.slice(2);
    return `+62 ${rest.slice(0, 3)}-${rest.slice(3, 7)}-${rest.slice(7)}`;
  }
  return `+${n}`;
};
