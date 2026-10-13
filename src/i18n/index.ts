import { LOCALES, type Locale } from './config';
import type { Dictionary } from './types';
import id from './id';
import en from './en';

export * from './config';
export type * from './types';

const dictionaries: Record<Locale, Dictionary> = { id, en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export const otherLocale = (locale: Locale): Locale => LOCALES.find((l) => l !== locale) ?? locale;

export const isLocale = (value: string | undefined): value is Locale =>
  (LOCALES as readonly string[]).includes(value ?? '');
