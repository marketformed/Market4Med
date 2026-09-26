import { Program, EventItem, Opportunity, ResourceItem, Chapter, PartnerOrg } from '../types';
import { BOARD_APPLICATION_FORM_URL, GENERAL_MEMBERSHIP_FORM_URL } from './links';

// Accurate Current Launch Metrics (Real, Honest, Foundational Stage)
export const ACCURATE_METRICS = [
  { label: 'Founding Leadership Cycle', value: '2026–2027' },
  { label: 'Executive Board Recruitment', value: 'Open Now' },
  { label: 'Chapters Worldwide', value: 'Open Call' },
  { label: 'Core Focus', value: 'Medicine × Business' },
];

// Projected / Visionary Expansion Metrics (For Future Preview)
export const VISION_METRICS = [
  { label: 'Student Scholars & Members', value: '1,850+' },
  { label: 'Interdisciplinary Focus Areas', value: '3 Tracks' },
  { label: 'Physician & Executive Mentors', value: '45+' },
  { label: 'Patient Literacy Toolkits Target', value: '12,000+' },
];

// Default to accurate metrics
export const METRICS = ACCURATE_METRICS;

// Four Pillars with authentic public health & economic benchmarks
export const PILLARS = [
  {
    id: 'pillar-literacy',
    number: '01',
    title: 'Healthcare Literacy',
    subtitle: 'Demystifying complex care systems for patients and future practitioners.',
    description:
      'Nearly 9 out of 10 adults struggle with health literacy, impacting treatment compliance, insurance navigation, and clinical outcomes. We develop community translation tools, actionable guides, and curriculum that turn Byzantine medical and billing terminology into clear, empowering patient knowledge.',
    impactStat: '89%',
    impactLabel: 'of US adults face barriers navigating clinical decisions or care costs (Public Health Benchmark)'
  },
  {
    id: 'pillar-trust',
    number: '02',
    title: 'The Psychology of Trust',
    subtitle: 'Investigating behavioral economics, cognitive biases, and bedside communication.',
    description:
      'Medical competence alone does not guarantee clinical efficacy if patients do not trust the clinical or commercial institution. We study how micro-incentives, clinical transparency, and doctor-patient communication dynamics build or erode systemic trust across diverse demographics.',
    impactStat: '64%',
    impactLabel: 'higher treatment adherence demonstrated in clinical studies when patient-clinician trust is high'
  },
  {
    id: 'pillar-economics',
    number: '03',
    title: 'Health Economics & Bio-Strategy',
    subtitle: 'Evaluating how payment models, clinical incentives, and market incentives align.',
    description:
      'From value-based care reimbursement to biotech commercialization and hospital supply chains, clinical outcomes are inseparable from financial infrastructure. We educate students on sustainable operational models that elevate patient care rather than prioritize extractive margins.',
    impactStat: '$4.5T',
    impactLabel: 'US healthcare economy requiring clinically sound, ethically grounded business minds'
  },
  {
    id: 'pillar-leadership',
    number: '04',
    title: 'Interdisciplinary Leadership',
    subtitle: 'Forging clinicians who understand business and founders who respect clinical reality.',
    description:
      'The healthcare sector is plagued by siloed thinking: physicians who feel alienated by administrators, and MBAs who lack bedside empathy. MARKET4MED provides dual-fluency education so future physicians, healthtech founders, and health policymakers speak the same language.',
    impactStat: '100%',
    impactLabel: 'student-run founding mission committed to bridging clinical reality with commercial strategy'
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'fellowship',
    title: 'Healthcare Strategy & Clinical Translation Fellowship',
    subtitle: 'Flagship 10-Week Interdisciplinary Cohort (Inaugural Class)',
    category: 'fellowship',
    duration: '10 Weeks (Fall & Spring Cycles)',
    format: 'Hybrid',
    cohortSize: 'Founding Cohort',
    description:
      'An intensive cohort bridging clinical diagnostics, hospital operations, healthcare venture capital, and health policy. Fellows analyze real-world clinical delivery bottlenecks alongside clinical and executive advisors.',
    curriculum: [
      'Week 1-2: Clinical Value Chains & Reimbursement Architecture (Fee-for-Service vs. Capitation)',
      'Week 3-4: Behavioral Economics of Patient Decision-Making & Institutional Trust',
      'Week 5-6: Digital Health, Medical Device GTM, and Regulatory Pathways (FDA & CMS)',
      'Week 7-8: Health Equity, Insurance Navigation, and Community Literacy Interventions',
      'Week 9-10: Capstone Clinical-Commercial Venture Defense before Advisory Panel'
    ],
    prerequisites: 'Open to high school, pre-med, business, public health, and bioengineering students.',
    outcomes: [
      'Direct mentorship from cross-disciplinary clinical and business leaders',
      'Published Capstone Whitepaper in the Med-Market Repository',
      'Priority access to healthcare venture & clinical innovation networks'
    ]
  },
  {
    id: 'trust-lab',
    title: 'Behavioral Psychology & Clinical Trust Lab',
    subtitle: 'Research & Applied Communications Studio',
    category: 'lab',
    duration: 'Semester-Long Track',
    format: 'Virtual',
    cohortSize: 'Research Working Group',
    description:
      'Investigate the psychological mechanics that govern patient adherence, placebo response, medical mistrust, and algorithmic diagnostics acceptance. Analysts design behavioral nudges for clinical workflows.',
    curriculum: [
      'Heuristics and Biases in Bedside Shared Decision-Making',
      'Socioeconomic Drivers of Institutional Medical Mistrust',
      'Communicating Complex Diagnoses: Linguistic Framing & Patient Retention',
      'Digital Therapeutics & Habit Formation in Chronic Illness Management',
      'Designing Trust-First Interfaces in Telehealth and Remote Monitoring'
    ],
    prerequisites: 'Strong interest in cognitive psychology, behavioral economics, neuroscience, or clinical medicine.',
    outcomes: [
      'Co-authored research briefs on healthcare communication',
      'Behavioral nudge toolkit for patient-facing interactions'
    ]
  },
  {
    id: 'case-comp',
    title: 'National Med-Market Case Challenge',
    subtitle: 'Youth & Student Healthcare Innovation Sprint',
    category: 'competition',
    duration: 'Multi-Week Sprint & Showcase',
    format: 'Hybrid',
    cohortSize: 'Multi-School Student Teams',
    description:
      'Teams of 3-4 students solve a complex healthcare case challenge bridging clinical protocol design with financial sustainability and patient community adoption.',
    curriculum: [
      'Live Case Release on Healthcare Access & Delivery Friction',
      'Mentorship Office Hours with Clinical and Management Mentors',
      'Preliminary Presentations & Feedback Rounds',
      'Showcase & Innovation Recognition'
    ],
    prerequisites: 'Teams must include at least one pre-health/STEM student and one business/economics student.',
    outcomes: [
      'Showcase portfolio project evaluated by industry leaders',
      'Direct networking with consulting, healthtech, and clinical innovators'
    ]
  },
  {
    id: 'literacy-workshop',
    title: 'Health Literacy & Community Translation Workshop',
    subtitle: 'Public Education & Advocacy Masterclass',
    category: 'workshop',
    duration: 'Modular Seminar Series',
    format: 'Virtual',
    cohortSize: 'Open Registration',
    description:
      'Practical tools for students to break down insurance jargon, explanation of benefits (EOBs), prescription pricing tiers, and informed consent documents.',
    curriculum: [
      'Module 1: How US Health Insurance Actually Works: Deductibles, Copays, and Networks',
      'Module 2: Deciphering the Hospital Bill: Medical Coding and Financial Assistance Programs',
      'Module 3: Plain-Language Medical Writing for Diverse Cultural Communities',
      'Module 4: Designing Community Health Literacy Guides'
    ],
    prerequisites: 'Open to all students and early-career healthcare advocates.',
    outcomes: [
      'MARKET4MED Health Literacy Certificate of Completion',
      'Toolkit license to facilitate campus and community workshops'
    ]
  }
];

// ACCURATE CURRENT EVENTS (Realistic, Founding-Phase: No Fake Symposiums)
export const ACCURATE_EVENTS: EventItem[] = [
  {
    id: 'event-board-info',
    title: '2026–2027 Executive Board Information & Q&A Session',
    speaker: 'MARKET4MED National Founding Team',
    speakerRole: 'Executive Council & Committee Leads',
    date: 'October 8, 2026',
    time: '6:00 PM – 7:00 PM EST',
    location: 'Virtual via Zoom (Link sent upon RSVP)',
    isVirtual: true,
    category: 'Roundtable',
    description:
      'Learn about open Executive Board roles (Chapter Expansion, Research, Curriculum, Marketing, and Operations). Meet the founding team, hear our vision for bridging medicine and business, and get direct answers for your application.',
    spotsLeft: 50
  },
  {
    id: 'event-chapter-briefing',
    title: 'Chapter Founder Briefing: How to Launch in Your Community or School',
    speaker: 'Chapter Development Committee',
    speakerRole: 'Global Expansion Team',
    date: 'October 22, 2026',
    time: '7:00 PM – 8:00 PM EST',
    location: 'Virtual Workshop',
    isVirtual: true,
    category: 'Workshop',
    description:
      'A step-by-step walkthrough for leaders looking to charter an official MARKET4MED branch in their community, city, or school. We review charter bylaws, creative event concepts, and global support.',
    spotsLeft: 40
  },
  {
    id: 'event-trust-talk',
    title: 'The Architecture of Clinical Trust: Rebuilding Confidence in Care',
    speaker: 'Dr. Elena Vance, MD, MPH',
    speakerRole: 'Chief Medical Officer & Clinical Behavioral Scientist',
    date: 'November 5, 2026',
    time: '6:30 PM – 7:30 PM EST',
    location: 'Virtual Interactive Stream',
    isVirtual: true,
    category: 'Keynote',
    description:
      'Exploring why clinical brilliance falls short without communication architecture. An examination of how medical misinformation spreads, cognitive biases in bedside care, and the business case for relationship-centered medicine.',
    spotsLeft: 65
  },
  {
    id: 'event-literacy-seminar',
    title: 'Deciphering the Healthcare Maze: Health Literacy & Economics 101',
    speaker: 'Sarah Jenkins, JD & Healthcare Navigators',
    speakerRole: 'Healthcare Advocates & Patient Navigation Specialists',
    date: 'November 19, 2026',
    time: '7:00 PM – 8:15 PM EST',
    location: 'Virtual Seminar',
    isVirtual: true,
    category: 'Workshop',
    description:
      'Equipping students with practical frameworks to understand health insurance terminology, hospital financial assistance policies, and plain-language patient education.',
    spotsLeft: 80
  }
];

// FUTURE / VISION EXPANSION EVENTS (Includes the Annual Symposium once launched)
export const VISION_EVENTS: EventItem[] = [
  ...ACCURATE_EVENTS,
  {
    id: 'event-symposium-future',
    title: 'Annual MARKET4MED Fall Interdisciplinary Healthcare Symposium',
    speaker: 'Featured Faculty Panel & Industry Leaders',
    speakerRole: 'Cross-Discipline Leaders from Academic Medical Centers & Health Startups',
    date: 'December 5, 2026',
    time: '9:00 AM – 4:00 PM EST',
    location: 'Metropolitan Academic Center & Global Stream',
    isVirtual: false,
    category: 'Symposium',
    description:
      'A full day of keynote addresses, fellow capstone showcases, rapid-fire debates on healthcare economics, and networking with residency directors, MBA recruiters, and health policy leaders.',
    spotsLeft: 24
  }
];

// Default to accurate events
export const EVENTS = ACCURATE_EVENTS;

// ACCURATE CURRENT OPPORTUNITIES (No Fake Volunteer Roles; Focus on Board & Chapters)
export const ACCURATE_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-board-exec',
    title: 'Executive Board Member (2026–2027 Cycle)',
    type: 'Executive Team',
    commitment: '4-7 hours / week',
    deadline: 'Applications Currently Open',
    location: 'Remote / Virtual National Leadership',
    description:
      'Apply to join the founding Executive Board of MARKET4MED. Directors lead key portfolios: Chapter Expansion, Health Literacy Curriculum, Research Working Groups, Marketing & Social Content, and Event Logistics.',
    responsibilities: [
      'Lead and scale initiatives bridging medicine, business, and psychology',
      'Collaborate on curriculum, guest speaker series, and patient literacy publications',
      'Support prospective chapter founders in launching community, regional, and school chapters',
      'Attend weekly Executive Team planning sessions'
    ],
    qualifications: [
      'Motivated high school, pre-med, business, public health, or related student',
      'Proven initiative, reliability, and clear written/verbal communication',
      'Commitment to establishing a lasting, high-impact student organization'
    ]
  },
  {
    id: 'opp-global-ambassador',
    title: 'Global Student Ambassador',
    type: 'Global Ambassador',
    commitment: '2-4 hours / week',
    deadline: 'Rolling Applications · Open Worldwide',
    location: 'Global / Virtual Remote',
    description:
      'Represent MARKET4MED internationally. Champion healthcare literacy in your region, school, or community, share student educational content, organize local initiatives, and connect peers to our global mission.',
    responsibilities: [
      'Represent MARKET4MED as an official student ambassador in your school, region, or country',
      'Share educational content, reels, and healthcare discussions with fellow students',
      'Help organize local or virtual healthcare literacy workshops and outreach drives',
      'Collaborate with international ambassadors across different countries and backgrounds'
    ],
    qualifications: [
      'Passionate high school or undergraduate student interested in healthcare, business, or education',
      'Strong communication, outreach, and social advocacy skills',
      'Enthusiastic about building a collaborative global student community'
    ]
  },
  {
    id: 'opp-director',
    title: 'Chapter Founder & Director (Community, Regional, or School)',
    type: 'Executive Team',
    commitment: '3-5 hours / week',
    deadline: 'Rolling Selection · Open Worldwide (US & International)',
    location: 'Anywhere Worldwide (Community, City, School, or Independent Hub)',
    description:
      'Launch a MARKET4MED chapter anywhere—in your local city, community hub, high school, college, or independent youth network. Chapters do NOT need to be in school or on a campus; anyone passionate about healthcare literacy can start one across the US and internationally.',
    responsibilities: [
      'Found an official chapter or local youth hub in your community, city, or school',
      'Host healthcare literacy discussions, community events, and creative awareness projects',
      'Connect local peers, students, and advocates to our international network',
      'Participate in monthly Global Chapter Council syncs'
    ],
    qualifications: [
      'Open to anyone worldwide—no school enrollment or campus affiliation required',
      'Passionate about expanding healthcare literacy, patient advocacy, or healthcare business',
      'Excited to launch a local community hub with full creative freedom and support'
    ]
  }
];

// FUTURE / VISION EXPANSION OPPORTUNITIES (Includes Cohorts, Research Fellowships & Volunteer Roles)
export const VISION_OPPORTUNITIES: Opportunity[] = [
  ...ACCURATE_OPPORTUNITIES,
  {
    id: 'opp-research',
    title: 'Health Literacy Research & Writing Analyst',
    type: 'Research Fellow',
    commitment: '3-4 hours / week',
    deadline: 'Rolling Applications',
    location: 'Remote Research Group',
    description:
      'Contribute to our open-access publications, including research summaries, case analyses, and plain-language patient navigation guides on healthcare economics and patient trust.',
    responsibilities: [
      'Conduct literature reviews on patient adherence, medical mistrust, and insurance literacy',
      'Synthesize academic findings into clear, accessible articles and toolkits',
      'Interview practicing clinicians and patient advocates for case studies',
      'Contribute to open-access health literacy research publications and guides'
    ],
    qualifications: [
      'Strong analytical writing and research synthesis abilities',
      'Interest in publishing and science communication',
      'High attention to detail and journalistic rigor'
    ]
  },
  {
    id: 'opp-fellow',
    title: 'Strategy & Clinical Translation Fellow (Inaugural Cohort)',
    type: 'Student Cohort',
    commitment: '3-5 hours / week',
    deadline: 'Interest Open / Next Cohort Cycle',
    location: 'Hybrid / Virtual Seminars',
    description:
      'Join our signature cohort. Learn healthcare business fundamentals, engage in clinical case seminars, analyze healthcare delivery bottlenecks, and complete a collaborative capstone project.',
    responsibilities: [
      'Attend bi-weekly seminar discussions and guest lectures',
      'Analyze clinical delivery case studies with your team',
      'Author a capstone brief on a high-friction healthcare challenge',
      'Engage in peer reviews with cross-disciplinary students'
    ],
    qualifications: [
      'Current high school, undergraduate, or pre-health student (Open to All)',
      'Demonstrated curiosity in cross-disciplinary healthcare problem solving',
      'Commitment to collaborative, rigorous analytical work'
    ]
  },
  {
    id: 'opp-volunteer-literacy',
    title: 'Community Health Literacy Advocate (Volunteer)',
    type: 'Volunteer Initiative',
    commitment: '2-4 hours / week (Flexible)',
    deadline: 'Planned for Future Expansion',
    location: 'Local Communities & Virtual Clinics',
    description:
      'Directly support patients and low-income families in navigating the healthcare maze. Volunteers help run hospital financial assistance workshops, translate insurance terms, and produce clear patient guides.',
    responsibilities: [
      'Facilitate plain-language insurance & billing clinics with community partners',
      'Distribute patient navigation guides in libraries, clinics, and community centers',
      'Collect feedback to improve MARKET4MED open-source patient toolkits',
      'Provide non-clinical administrative navigation support under supervisor guidance'
    ],
    qualifications: [
      'Empathy, patient communication skills, and reliability',
      'Completion of MARKET4MED 2-hour onboarding training module',
      'Multilingual abilities (Spanish, Mandarin, Arabic, etc.) warmly welcomed'
    ]
  }
];

// Default to accurate opportunities
export const OPPORTUNITIES = ACCURATE_OPPORTUNITIES;

export const RESOURCES: ResourceItem[] = [
  {
    id: 'res-trust',
    title: 'The Psychology of Institutional Trust: Why Patients Abandon Clinically Proven Therapies',
    type: 'Whitepaper',
    author: 'MARKET4MED Research Working Group & Dr. Elena Vance',
    readTime: '12 min read',
    topics: ['Behavioral Economics', 'Patient Compliance', 'Clinical Communication'],
    summary:
      'An empirical analysis evaluating how billing surprises, bedside jargon, and commercial incentives erode patient follow-through, and tactical frameworks clinics can adopt to rebuild trust.',
    fullExcerpt:
      'Medical compliance is rarely a deficit of patient willpower; it is fundamentally a breakdown in communicative contract. When patients experience opaque pricing, contradictory instructions, or rushed consultations, the psychological defense mechanism is disengagement. This whitepaper presents our 3-tiered framework for Clinical Transparency, demonstrating actionable pathways to improve follow-up retention.',
    downloadSize: '1.4 MB PDF'
  },
  {
    id: 'res-literacy-toolkit',
    title: 'The Patient Navigation Toolkit: Deciphering the Modern Medical System',
    type: 'Guide',
    author: 'MARKET4MED Health Literacy Initiative',
    readTime: '8 min read',
    topics: ['Health Literacy', 'Insurance Basics', 'Financial Assistance'],
    summary:
      'A practical, illustrated field guide explaining high-deductible health plans, in-network vs out-of-network rules, the No Surprises Act, and how to access hospital charity care programs.',
    fullExcerpt:
      'Under the federal Affordable Care Act and state non-profit hospital regulations, millions of patients qualify for full or partial hospital bill forgiveness through Charity Care policies—yet fewer than 15% ever apply due to complex documentation. This toolkit provides step-by-step templates and scripts for patients and advocates.',
    downloadSize: '2.8 MB PDF'
  },
  {
    id: 'res-case-study-glp1',
    title: 'Case Study: The Commercial and Clinical Dynamics of GLP-1 Receptor Agonists',
    type: 'Case Study',
    author: 'Bio-Strategy Working Group',
    readTime: '15 min read',
    topics: ['Pharmaceutical Economics', 'Payer Negotiations', 'Chronic Disease'],
    summary:
      'An interdisciplinary case study mapping the clinical efficacy of GLP-1 medications against pharmacy benefit managers (PBM) formularies, employer coverage decisions, and long-term societal cost offsets.',
    fullExcerpt:
      'As GLP-1 therapies transition from diabetes care to widespread metabolic health interventions, they present the definitive modern clash between immediate payer budget impact and multi-decade cardiovascular cost offsets. We model 3 distinct pricing and risk-sharing contract models currently under consideration by national health plans.',
    downloadSize: '1.9 MB PDF'
  },
  {
    id: 'res-policy-ai',
    title: 'Policy Brief: Algorithmic Diagnostics and the Question of Malpractice Liability',
    type: 'Policy Brief',
    author: 'Health Policy & Technology Taskforce',
    readTime: '10 min read',
    topics: ['Digital Health', 'Health Law', 'AI Ethics'],
    summary:
      'Examining who is legally and financially responsible when AI diagnostic tools suggest a deviation from standard care, and how hospital credentialing bodies must adapt.',
    fullExcerpt:
      'As machine learning models enter radiology, pathology, and triage, our legal and insurance systems confront an unprecedented challenge: the distributed agency problem. This policy brief provides model bylaws for hospital review committees evaluating predictive clinical algorithms.',
    downloadSize: '1.2 MB PDF'
  }
];

export const CHAPTERS: Chapter[] = [];

export const PARTNERS: PartnerOrg[] = [
  {
    id: 'partner-1',
    name: 'Academic Health Center Alliance',
    type: 'Medical Center',
    description: 'Collaborating on clinical speaker sessions, guest mentorship, and healthcare literacy review.'
  },
  {
    id: 'partner-2',
    name: 'Bio-Strategy & HealthTech Mentors',
    type: 'Venture Firm',
    description: 'Providing student feedback on capstone business and clinical innovation projects.'
  },
  {
    id: 'partner-3',
    name: 'Health Literacy Action Collaborative',
    type: 'Policy Think Tank',
    description: 'Partnering on open-access patient navigation toolkits and policy analyses.'
  },
  {
    id: 'partner-4',
    name: 'Intercollegiate Medical-Business Network',
    type: 'University Network',
    description: 'Supporting cross-campus collaboration and prospective chapter establishment.'
  }
];

export const ADVISORS = [
  {
    name: 'Dr. Maya Patel, MD, MBA',
    title: 'Associate Professor of Clinical Medicine & Healthcare Systems Design',
    affiliation: 'Academic Medical Center Lead',
    quote: 'MARKET4MED trains students to see both the human in the hospital bed and the system that makes their treatment possible.'
  },
  {
    name: 'Julian Sterling, MS, MPH',
    title: 'VP of Health Economics & Value-Based Outcomes',
    affiliation: 'Health Innovation Network',
    quote: 'The gap between clinical researchers and healthcare commercializers is where innovations die. This initiative bridges that exact chasm.'
  },
  {
    name: 'Claire Moreau, PhD',
    title: 'Director of Behavioral Decision Research',
    affiliation: 'Cognitive Science & Health Policy Institute',
    quote: 'Understanding how psychology drives patient trust is the single most urgent frontier in preventive public health.'
  }
];
