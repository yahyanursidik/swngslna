import { SITE } from '@/config/site';
import { LOCALE_META, homePath, type Dictionary } from '@/i18n';

/**
 * Organization + WebPage JSON-LD (FR-15). Uses only owner-supplied details;
 * contact fields are included only once approved in src/config/site.ts.
 */
export const buildJsonLd = (t: Dictionary): Record<string, unknown>[] => {
  const orgId = `${SITE.url}/#organization`;
  const pageUrl = `${SITE.url}${homePath(t.locale)}`;

  const contactPoint = [
    SITE.contact.email || SITE.contact.whatsappE164
      ? {
          '@type': 'ContactPoint',
          contactType: 'sales',
          availableLanguage: ['id', 'en'],
          ...(SITE.contact.email ? { email: SITE.contact.email } : {}),
          ...(SITE.contact.whatsappE164 ? { telephone: `+${SITE.contact.whatsappE164}` } : {}),
        }
      : null,
  ].filter(Boolean);

  const organization: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: SITE.fullName,
    alternateName: SITE.shortName,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/logo-512.png`,
    foundingDate: String(SITE.foundingYear),
    ...(SITE.legal.showAhu
      ? {
          identifier: {
            '@type': 'PropertyValue',
            propertyID: 'AHU',
            value: SITE.legal.ahuNumber,
          },
        }
      : {}),
    slogan: SITE.tagline,
    knowsLanguage: ['id', 'en'],
    ...(SITE.contact.email ? { email: SITE.contact.email } : {}),
    ...(contactPoint.length ? { contactPoint } : {}),
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: t.meta.title,
    description: t.meta.description,
    inLanguage: LOCALE_META[t.locale].htmlLang,
    about: { '@id': orgId },
    publisher: { '@id': orgId },
  };

  return [organization, webPage];
};
