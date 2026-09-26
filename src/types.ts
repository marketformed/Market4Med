export type PageTab = 'home' | 'about' | 'programs' | 'events' | 'opportunities' | 'resources' | 'chapters' | 'collaborations' | 'contact';

export type ProgramCategory = 'all' | 'fellowship' | 'lab' | 'competition' | 'workshop';

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  category: ProgramCategory;
  duration: string;
  format: 'Hybrid' | 'Virtual' | 'In-Person';
  cohortSize: string;
  description: string;
  curriculum: string[];
  prerequisites: string;
  outcomes: string[];
}

export interface EventItem {
  id: string;
  title: string;
  speaker: string;
  speakerRole: string;
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  category: 'Keynote' | 'Workshop' | 'Roundtable' | 'Symposium';
  description: string;
  spotsLeft: number;
}

export interface Opportunity {
  id: string;
  title: string;
  type: 'Student Cohort' | 'Executive Team' | 'Volunteer Initiative' | 'Research Fellow' | 'Global Ambassador';
  commitment: string;
  deadline: string;
  location: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Whitepaper' | 'Case Study' | 'Policy Brief' | 'Guide';
  author: string;
  readTime: string;
  topics: string[];
  summary: string;
  fullExcerpt: string;
  downloadSize?: string;
}

export interface Chapter {
  id: string;
  university: string;
  location: string;
  foundedYear: number;
  status: 'Active Chapter' | 'Founding Cohort' | 'Prospective Campus';
  memberCount: number;
  leadName: string;
}

export interface PartnerOrg {
  id: string;
  name: string;
  type: 'Medical Center' | 'Venture Firm' | 'University Network' | 'Policy Think Tank';
  description: string;
}
