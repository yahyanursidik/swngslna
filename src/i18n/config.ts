export const LOCALES = ['id', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'id';

export const LOCALE_META: Record<
  Locale,
  { label: string; name: string; htmlLang: string; hreflang: string; ogLocale: string }
> = {
  id: { label: 'ID', name: 'Bahasa Indonesia', htmlLang: 'id', hreflang: 'id', ogLocale: 'id_ID' },
  en: { label: 'EN', name: 'English', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US' },
};

/**
 * Section anchors are shared across locales so the language switch can
 * preserve the current hash (FR-02).
 */
export const SECTION = {
  top: 'top',
  about: 'about',
  challenges: 'challenges',
  expertise: 'expertise',
  platform: 'platform',
  approach: 'approach',
  ai: 'ai-learning',
  industries: 'industries',
  work: 'work',
  contact: 'contact',
} as const;
export type SectionId = (typeof SECTION)[keyof typeof SECTION];

export const homePath = (locale: Locale): string => `/${locale}/`;
