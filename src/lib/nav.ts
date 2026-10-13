import { SECTION, type Dictionary, type SectionId } from '@/i18n';

export interface NavItem {
  id: SectionId;
  label: string;
}

/** Header/footer navigation in PRD §6 order. "Work" only appears when cases are published (FR-13). */
export const getNavItems = (t: Dictionary): NavItem[] =>
  [
    { id: SECTION.about, label: t.nav.about },
    { id: SECTION.expertise, label: t.nav.expertise },
    { id: SECTION.platform, label: t.nav.platform },
    { id: SECTION.approach, label: t.nav.approach },
    { id: SECTION.ai, label: t.nav.ai },
    { id: SECTION.work, label: t.nav.work, hidden: t.work.cases.length === 0 },
    { id: SECTION.contact, label: t.nav.contact },
  ]
    .filter((item) => !item.hidden)
    .map(({ id, label }) => ({ id, label }));
