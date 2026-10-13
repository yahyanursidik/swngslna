import type { Dictionary } from './types';

const en: Dictionary = {
  locale: 'en',

  meta: {
    title: 'STS | Learning Experience & Technology Studio',
    description:
      'Learning and technology studio since 2021: learning strategy, LMS implementation, custom learning platforms for adult learners in institutions and companies, instructional design, evaluation, and responsible AI adoption.',
    ogImage: '/og-en.png',
    ogImageAlt: 'STS. Sawangsulna Teknologi Studio — Designing Learning. Enabling Growth.',
  },

  a11y: {
    skipToContent: 'Skip to main content',
    primaryNav: 'Primary navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageSwitch: 'Choose language',
    switchToLanguage: 'Read this page in Indonesian',
    opensInNewTab: '(opens in a new tab)',
    home: 'STS. home',
  },

  nav: {
    about: 'About',
    expertise: 'Expertise',
    platform: 'Platform',
    approach: 'Approach',
    ai: 'AI & Learning',
    work: 'Work',
    contact: 'Contact',
  },

  hero: {
    eyebrow: 'LEARNING SCIENCES · DESIGN · TECHNOLOGY',
    titleLines: ['Better Learning.', 'Smarter Technology.'],
    support:
      'We help organizations design effective learning experiences and digital learning systems, informed by learning science and responsible AI adoption.',
    primaryCta: 'Explore Our Expertise',
    secondaryCta: 'Discuss Your Project',
    figureCaption: 'From learning need, to design, to technology, to evaluation.',
    pillars: ['Learning Sciences', 'Experience Design', 'AI & Technology'],
  },

  about: {
    eyebrow: 'About STS',
    title: 'We Start With the Learning Problem',
    lead: 'Since 2021, Sawangsulna Teknologi Studio has focused on helping educational institutions, companies, and organizations design learning experiences, develop internal digital learning systems, and implement learning technology.',
    body: [
      'We connect learning science, experience design, and technology—including responsible AI—to support sustainable organizational capabilities.',
      'Every engagement begins by understanding who is learning, what they need to master, and how that learning will be used at work. Technology comes after, chosen to fit the organization’s needs and readiness.',
    ],
    factsLabel: 'At a glance',
    legalLabel: 'Legal registration (AHU)',
    facts: [
      { label: 'Established', value: '2021' },
      { label: 'Focus', value: 'Learning systems and learning experiences' },
      { label: 'Legal entity', value: 'PT Sawangsulna Teknologi Studio' },
    ],
    principlesTitle: 'How we think',
    principles: [
      {
        title: 'Learning problem first',
        text: 'We diagnose goals, learners and the work context before discussing platforms or features.',
      },
      {
        title: 'Evidence-informed design',
        text: 'Methods are chosen because they fit the objective and the evidence, not because they are trending.',
      },
      {
        title: 'Right-sized technology',
        text: 'We recommend solutions your own team can operate and maintain.',
      },
      {
        title: 'Measured and candid',
        text: 'Results are evaluated against agreed indicators, and limitations are stated openly.',
      },
    ],
  },

  challenges: {
    eyebrow: 'Challenges',
    title: 'A Platform Alone Is Not Enough',
    lead: 'Many organizations have already invested in an LMS or digital content, yet the effect on capability remains unclear. These are the patterns we see most often:',
    items: [
      {
        title: 'Passive LMS',
        text: 'The platform stores materials and records completions, but offers little room for practice and feedback.',
      },
      {
        title: 'Fragmented learning',
        text: 'Training, content and assessment are spread across many channels with no clear journey for learners.',
      },
      {
        title: 'Weak alignment',
        text: 'Program goals, learning activities and assessment are not connected to the capabilities the work requires.',
      },
      {
        title: 'Limited evaluation',
        text: 'Only attendance and completion are measured; application on the job is never known.',
      },
      {
        title: 'Uncertain AI adoption',
        text: 'Teams want to use AI but lack agreed use cases, boundaries and governance.',
      },
    ],
    closing:
      'These problems are rarely solved by switching platforms. They need learning design, systems and ways of working that reinforce each other.',
  },

  expertise: {
    eyebrow: 'Services',
    title: 'Our Expertise',
    lead: 'Five service areas, delivered on their own or as one integrated program, scoped to your organization’s stage and capacity.',
    labels: {
      problem: 'The problem',
      interventions: 'What we do',
      deliverables: 'Deliverables',
      outcome: 'Intended outcome',
    },
    services: [
      {
        id: 'service-strategy',
        code: '01',
        icon: 'compass',
        title: 'Learning Strategy & Consulting',
        summary: 'Mapping needs and setting the direction for organizational learning.',
        problem:
          'Training programs are running, but it is unclear which capabilities they build and how they fit together.',
        interventions: [
          'Learning needs analysis',
          'Competency mapping',
          'Learning strategy',
          'Learning ecosystem audit',
          'Transformation roadmap',
        ],
        deliverables: [
          'Diagnostic report',
          'Learning roadmap',
          'Competency map',
          'Architecture recommendation',
        ],
        outcome: 'Clear development priorities that leadership can stand behind.',
      },
      {
        id: 'service-lms',
        code: '02',
        icon: 'layers',
        title: 'LMS Development & Implementation',
        summary: 'Selecting, setting up and running an internal digital learning system.',
        problem:
          'The organization needs a learning platform that is actually used, integrated, and manageable by an internal team.',
        interventions: [
          'Platform evaluation and selection',
          'Implementation and configuration',
          'Custom development where justified',
          'Migration and data integration',
          'Governance and adoption support',
        ],
        deliverables: [
          'Solution blueprint',
          'Configured or built LMS',
          'Migration checklist',
          'Enablement plan',
        ],
        outcome: 'A platform that fits the need, is adopted by users, and is sustainable to run.',
      },
      {
        id: 'service-design',
        code: '03',
        icon: 'pen-tool',
        title: 'Instructional & Learning Experience Design',
        summary: 'Designing curricula, journeys and materials that lead to application.',
        problem:
          'Content exists, but learners struggle to understand it, practice it and apply it at work.',
        interventions: [
          'Curriculum and learning pathways',
          'Blended learning',
          'Case-based learning',
          'Interactive content',
          'Authentic assessment and constructive alignment',
        ],
        deliverables: [
          'Learning design blueprint',
          'Learning journey map',
          'Course or module prototypes',
          'Evaluation rubrics',
        ],
        outcome:
          'Learning experiences that are relevant, well structured, and support transfer to work.',
      },
      {
        id: 'service-evaluation',
        code: '04',
        icon: 'chart-line',
        title: 'Learning Analytics & Evaluation',
        summary: 'Measuring what actually changes after a program runs.',
        problem:
          'Completion and attendance data exist, but they do not show whether the program made a difference.',
        interventions: [
          'Learning performance indicators',
          'Dashboards, where commissioned',
          'Completion and engagement analysis',
          'Competency assessment',
          'Learning transfer evaluation',
        ],
        deliverables: [
          'Evaluation framework',
          'Measurement specification',
          'Findings and recommendations',
        ],
        outcome: 'Program decisions grounded in evidence rather than assumptions.',
      },
      {
        id: 'service-ai',
        code: '05',
        icon: 'sparkles',
        title: 'AI Learning Enablement',
        summary: 'Helping teams adopt AI safely, purposefully and usefully.',
        problem:
          'Interest in AI is high, but readiness, boundaries and agreed use cases are missing.',
        interventions: [
          'AI literacy for staff and educators',
          'AI-assisted learning design processes',
          'AI tutor or assistant concepts, where capacity exists',
          'AI readiness assessment',
          'Governance and human oversight',
        ],
        deliverables: [
          'AI adoption roadmap',
          'Staff training plan',
          'Governance checklist',
          'Scoped prototype when appropriate',
        ],
        outcome: 'Realistic, controlled use of AI that stays under human oversight.',
      },
    ],
    boundaryNote:
      'Scope, methods and deliverables are agreed together at the start of every project. We do not claim official partnership with any LMS vendor.',
  },

  platform: {
    eyebrow: 'Custom Platforms',
    title: 'Learning Platforms Designed for Adult Learners',
    lead: 'Beyond implementing existing LMS products, we develop custom learning platforms for the internal needs of institutions and companies—built around how adults learn at work, not around a feature list.',
    body: [
      'Adult learners bring experience, responsibilities and limited time. They learn best when material is directly relevant to their work, when they have room to choose their path, and when they can practice and reflect on the results.',
      'That is why we design every platform together with the organization: learning flows, terminology, roles and data follow your working context, so the platform feels like part of everyday work—not one more system to learn.',
    ],
    valuesTitle: 'Values we build into every platform',
    values: [
      {
        title: 'Relevant to the job',
        text: 'Content and activities connect directly to real tasks, roles and problems in the organization.',
      },
      {
        title: 'Respects experience',
        text: 'Learners can skip what they already know and focus on what they actually need.',
      },
      {
        title: 'Self-directed, with guidance',
        text: 'Flexible learning paths with clear guidance, matched to each learner’s readiness.',
      },
      {
        title: 'Practice and reflection',
        text: 'Case studies, simulations and structured reflection encourage application at work.',
      },
      {
        title: 'Concise and accessible',
        text: 'Usable between tasks, on any device, with accessibility in mind.',
      },
      {
        title: 'Your data, your rules',
        text: 'Learning data is managed under the organization’s policies and used to improve programs.',
      },
    ],
    capabilitiesTitle: 'Components we can develop as needed',
    capabilities: [
      'Role- and competency-based learning paths',
      'Spaces for practice, cases and reflection',
      'Authentic assessment and feedback',
      'Cohort programs and facilitator support',
      'Progress dashboards for learners and managers',
      'Integration with internal systems, where needed',
    ],
    note: 'We recommend custom development only when available platforms fall short. Scope, features and development phases are agreed together at the start of each project.',
  },

  approach: {
    eyebrow: 'Methodology',
    title: 'How We Work',
    lead: 'Six stages that move from the learning problem to design, technology, implementation and evaluation. The depth of each stage follows the scope of the project.',
    stagesLabel: 'Project stages',
    outputLabel: 'Output',
    stages: [
      {
        title: 'Discover',
        text: 'Understand the organization, learners, constraints and existing systems through interviews, observation and data review.',
        output: 'Diagnostic summary',
      },
      {
        title: 'Define',
        text: 'Agree learning goals, target capabilities and success indicators with stakeholders.',
        output: 'Goals and indicators',
      },
      {
        title: 'Design',
        text: 'Build the learning architecture: flow, activities, assessment and the right role for technology.',
        output: 'Design blueprint',
      },
      {
        title: 'Build',
        text: 'Develop prototypes, content and system configuration, then test with users before scaling.',
        output: 'Tested prototype',
      },
      {
        title: 'Implement',
        text: 'Support the launch, prepare facilitators and administrators, and build habits of use.',
        output: 'Enablement plan',
      },
      {
        title: 'Evaluate',
        text: 'Measure results against the agreed indicators and plan improvements for the next cycle.',
        output: 'Findings and recommendations',
      },
    ],
    toolbox: {
      title: 'Learning sciences toolbox',
      lead: 'Frameworks we consider when designing. Each is applied selectively, according to the objective and context.',
      columns: {
        framework: 'Framework',
        use: 'Use in engagements',
        guardrail: 'Guardrail',
      },
      frameworks: [
        {
          name: 'Andragogy',
          use: 'Relevance, learner experience and practical context.',
          guardrail: 'Not a universal rule for all adult learners.',
        },
        {
          name: 'Transformative Learning',
          use: 'Reflection, assumption-testing and perspective change.',
          guardrail: 'Requires appropriate facilitation and context.',
        },
        {
          name: 'Heutagogy',
          use: 'Learner agency and self-determined pathways.',
          guardrail: 'Needs support and learner readiness.',
        },
        {
          name: 'Cognitive Load Theory',
          use: 'Segmentation, worked examples and reducing extraneous load.',
          guardrail: 'Balance load with productive complexity.',
        },
        {
          name: 'Deep / Meaningful Learning',
          use: 'Conceptual understanding and transfer to new situations.',
          guardrail: 'Distinct from “deep learning” in AI.',
        },
        {
          name: 'Retrieval & Spacing',
          use: 'Structured practice and long-term recall.',
          guardrail: 'Tune spacing and feedback to learner needs.',
        },
        {
          name: 'Experiential Learning',
          use: 'Practice, simulation and authentic problems.',
          guardrail: 'Reflection and transfer remain essential.',
        },
        {
          name: 'Universal Design for Learning',
          use: 'Multiple means of engagement, representation, and action and expression.',
          guardrail: 'Accessibility and outcomes remain key.',
        },
      ],
      note: 'These frameworks are not equally validated, not interchangeable, and not all required in every project. We select evidence-aligned methods based on objectives, audience, constraints and the evaluation plan.',
    },
  },

  ai: {
    eyebrow: 'AI & Learning',
    title: 'Learning in the AI Era',
    lead: 'AI can speed up design work and enrich learning experiences, but it does not replace educators, facilitators or sound instructional practice. We treat it as a tool, chosen with care.',
    useCasesTitle: 'Use cases we support',
    useCases: [
      {
        title: 'Needs synthesis',
        text: 'Helping summarize interviews, surveys and documents as input for analysis.',
      },
      {
        title: 'Learning-path drafting',
        text: 'Producing first drafts of flows and module sequences for designers to review.',
      },
      {
        title: 'Content and scenario ideation',
        text: 'Developing contextual variations of cases, scenarios and practice tasks.',
      },
      {
        title: 'Formative feedback design',
        text: 'Designing feedback patterns that help learners correct their understanding.',
      },
      {
        title: 'Contextual learning assistants',
        text: 'Concepts for assistants that answer from the organization’s approved materials.',
      },
      {
        title: 'AI literacy and governance',
        text: 'Training staff to use AI well and drafting the rules for its use.',
      },
    ],
    guardrailsTitle: 'Guardrails we always apply',
    guardrails: [
      {
        title: 'Human sign-off',
        text: 'Every AI output is reviewed and approved by an accountable person before use.',
      },
      {
        title: 'Data protection',
        text: 'Organizational and personal data are not sent to AI services without a clear basis and safeguards.',
      },
      {
        title: 'Accuracy and grounding',
        text: 'Hallucination, bias and copyright risks are evaluated; answers are tied to checkable sources.',
      },
      {
        title: 'Transparency and cost',
        text: 'AI use is disclosed openly, including data retention, cost and impact.',
      },
      {
        title: 'High-stakes decisions',
        text: 'We do not automate important decisions about learners without adequate governance.',
      },
    ],
    conditionalNote:
      'The use cases above are conditional capabilities. Their feasibility is established per project through limited pilots, not promised as production-ready from the start.',
    terminology: {
      title: 'A note on terms',
      text: '“Deep learning” in education means conceptual understanding that transfers to new situations. It is different from “deep learning” in AI, which refers to artificial neural network techniques.',
    },
  },

  industries: {
    eyebrow: 'Sectors',
    title: 'Who We Serve',
    lead: 'Every sector learns differently. We adapt our approach to each organization’s culture, regulation and capacity.',
    items: [
      {
        icon: 'graduation-cap',
        title: 'Education',
        text: 'Schools, universities and education providers developing curricula and digital learning.',
        examples: ['LMS implementation', 'Online course design', 'Educator capability building'],
      },
      {
        icon: 'landmark',
        title: 'Corporate & Enterprise',
        text: 'HR and L&D teams building onboarding, capability development and internal academies.',
        examples: ['Onboarding programs', 'Corporate academies', 'Training impact evaluation'],
      },
      {
        icon: 'users',
        title: 'Training Providers',
        text: 'Training and certification providers running cohort-based and distributed programs.',
        examples: ['Cohort programs', 'Certification pathways', 'Facilitator readiness'],
      },
      {
        icon: 'scale',
        title: 'Nonprofits & Institutions',
        text: 'Nonprofits and institutions strengthening the capacity of staff, partners or communities.',
        examples: ['Distributed training', 'Capacity building', 'Accessible materials'],
      },
    ],
  },

  work: {
    eyebrow: 'Portfolio',
    title: 'Selected Work',
    lead: 'Examples of work our clients have approved for publication.',
    labels: { client: 'Client', sector: 'Sector', year: 'Year', scope: 'Scope' },
    // Add only verified case studies with the client's written permission.
    cases: [],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let’s Design Better Learning',
    lead: 'Tell us about the learning challenge in your organization. We will reply to arrange an initial conversation.',
    emailCta: 'Send an Email',
    whatsappCta: 'Contact via WhatsApp',
    emailSubject: 'STS Consultation — Learning Needs',
    whatsappMessage:
      'Hello STS, I am interested in a consultation about our organization’s learning needs. (Source: website)',
    emailLabel: 'Email',
    whatsappLabel: 'WhatsApp',
    companyLabel: 'Company',
    prepTitle: 'To make the first conversation more useful, include:',
    prepItems: [
      'Your organization and role',
      'Who the learners are',
      'The main challenge or goal',
      'Platforms already in use, if any',
      'Your expected timeline',
    ],
    pendingNote:
      'Official contact details are awaiting approval. Email and WhatsApp links will appear once approved.',
  },

  footer: {
    tagline: 'Designing Learning. Enabling Growth.',
    navTitle: 'Navigate',
    contactTitle: 'Contact',
    legalTitle: 'Legal',
    ahuLabel: 'Legal registration (AHU)',
    rights: 'All rights reserved.',
    privacyNote:
      'This site uses no forms, tracking cookies or analytics. Contact links open your own apps.',
    backToTop: 'Back to top',
  },

  notFound: {
    title: 'Page not found',
    text: 'The address you opened is not available or has moved.',
    cta: 'Back to home',
  },
};

export default en;
