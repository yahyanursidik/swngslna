import type { Locale } from './config';

/**
 * Shared shape for every locale dictionary. Both `id.ts` and `en.ts` must
 * satisfy it, so a missing or extra key is a type error (PRD §13, §16).
 */

export interface TitledText {
  title: string;
  text: string;
}

export interface SectionHeading {
  eyebrow: string;
  title: string;
  lead: string;
}

export type ServiceIcon = 'compass' | 'layers' | 'pen-tool' | 'chart-line' | 'sparkles';
export type IndustryIcon = 'graduation-cap' | 'landmark' | 'users' | 'scale';

export interface Service {
  /** Stable id used for in-page anchors, e.g. `service-strategy`. */
  id: string;
  code: string;
  icon: ServiceIcon;
  title: string;
  summary: string;
  problem: string;
  interventions: string[];
  deliverables: string[];
  outcome: string;
}

export interface Framework {
  name: string;
  use: string;
  guardrail: string;
}

export interface Industry {
  icon: IndustryIcon;
  title: string;
  text: string;
  examples: string[];
}

/**
 * A published case. Only add cases that are verifiable and have the client's
 * written permission (PRD §8 item 8, FR-13). The section is omitted when empty.
 */
export interface WorkCase {
  title: string;
  client: string;
  sector: string;
  year: string;
  summary: string;
  scope: string[];
  /** Optional approved logo, path under /public. */
  logo?: { src: string; alt: string };
}

export interface Dictionary {
  locale: Locale;

  meta: {
    title: string;
    description: string;
    ogImage: string;
    ogImageAlt: string;
  };

  a11y: {
    skipToContent: string;
    primaryNav: string;
    openMenu: string;
    closeMenu: string;
    languageSwitch: string;
    switchToLanguage: string;
    opensInNewTab: string;
    home: string;
  };

  nav: {
    about: string;
    expertise: string;
    platform: string;
    approach: string;
    ai: string;
    work: string;
    contact: string;
  };

  hero: {
    eyebrow: string;
    titleLines: [string, string];
    support: string;
    primaryCta: string;
    secondaryCta: string;
    figureCaption: string;
    pillars: [string, string, string];
  };

  about: SectionHeading & {
    body: string[];
    factsLabel: string;
    legalLabel: string;
    facts: { label: string; value: string }[];
    principlesTitle: string;
    principles: TitledText[];
  };

  challenges: SectionHeading & {
    figure: { before: TitledText; after: TitledText };
    items: TitledText[];
    closing: string;
  };

  expertise: SectionHeading & {
    labels: {
      problem: string;
      interventions: string;
      deliverables: string;
      outcome: string;
    };
    services: Service[];
    boundaryNote: string;
  };

  platform: SectionHeading & {
    body: string[];
    figure: {
      caption: string;
      center: [string, string];
      steps: [string, string, string, string];
    };
    valuesTitle: string;
    values: TitledText[];
    capabilitiesTitle: string;
    capabilities: string[];
    note: string;
  };

  approach: SectionHeading & {
    stagesLabel: string;
    stages: (TitledText & { output: string })[];
    outputLabel: string;
    toolbox: {
      title: string;
      lead: string;
      columns: { framework: string; use: string; guardrail: string };
      frameworks: Framework[];
      note: string;
    };
  };

  ai: SectionHeading & {
    figure: {
      caption: string;
      governance: string;
      steps: [string, string, string, string];
    };
    useCasesTitle: string;
    useCases: TitledText[];
    guardrailsTitle: string;
    guardrails: TitledText[];
    conditionalNote: string;
    terminology: TitledText;
  };

  industries: SectionHeading & {
    items: Industry[];
  };

  work: SectionHeading & {
    labels: { client: string; sector: string; year: string; scope: string };
    cases: WorkCase[];
  };

  contact: SectionHeading & {
    emailCta: string;
    whatsappCta: string;
    emailSubject: string;
    whatsappMessage: string;
    emailLabel: string;
    whatsappLabel: string;
    companyLabel: string;
    prepTitle: string;
    prepItems: string[];
    pendingNote: string;
  };

  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    legalTitle: string;
    ahuLabel: string;
    rights: string;
    privacyNote: string;
    backToTop: string;
  };

  notFound: {
    title: string;
    text: string;
    cta: string;
  };
}
