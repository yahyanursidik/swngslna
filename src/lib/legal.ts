import { SITE } from '@/config/site';
import type { Locale } from '@/i18n';

/** AHU registration date, localized (e.g. "11 November 2021"). */
export const ahuDate = (locale: Locale): string =>
  new Intl.DateTimeFormat(locale === 'id' ? 'id-ID' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${SITE.legal.ahuDate}T00:00:00Z`));
