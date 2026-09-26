import { useState } from 'react';
import { UserCheck, Stethoscope, Building, HeartHandshake, ArrowRight, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { GENERAL_MEMBERSHIP_FORM_URL, BOARD_APPLICATION_FORM_URL } from '../data/links';

interface GetInvolvedProps {
  siteMode?: 'current' | 'vision';
  onOpenApply: () => void;
  onOpenChapter: () => void;
  onOpenContact: (type: string) => void;
}

export default function GetInvolvedSection({
  siteMode = 'current',
  onOpenApply,
  onOpenChapter,
  onOpenContact
}: GetInvolvedProps) {
  const [selectedRole, setSelectedRole] = useState<string>(siteMode === 'current' ? 'board' : 'student');

  const roleDetailsCurrent: Record<string, {
    title: string;
    badge: string;
    description: string;
    benefits: string[];
    ctaText: string;
    isExternal?: boolean;
    action: () => void;
  }> = {
    board: {
      title: 'Executive Board Leadership',
      badge: '2026–2027 Cycle Active',
      description:
        'Apply for executive leadership: Chapter Expansion, Research Working Groups, Outreach & Social Media, Curriculum Development, and Operations.',
      benefits: [
        'Directly shape a student-led organization at the medicine-business nexus',
        'Lead cross-disciplinary initiatives with aspiring physicians and leaders',
        'Support students launching chapters at schools and communities',
        'Hold weekly executive leadership voting seat on organizational strategy'
      ],
      ctaText: 'Apply for Executive Board (Google Form)',
      isExternal: true,
      action: () => window.open(BOARD_APPLICATION_FORM_URL, '_blank', 'noopener,noreferrer')
    },
    student: {
      title: 'General Student Membership',
      badge: 'High School & Beyond (Open to All)',
      description:
        'Join the student community of MARKET4MED. Receive updates on healthcare literacy initiatives, workshops, and project collaborations.',
      benefits: [
        'Access to virtual healthcare literacy and patient advocacy workshops',
        'Connection with a network of peers bridging pre-med and business',
        'Early invitations to participate in future cohorts and leadership roles',
        'Direct access to student-led reels, discussions, and community initiatives'
      ],
      ctaText: 'General Membership Form (Google Form)',
      isExternal: true,
      action: () => window.open(GENERAL_MEMBERSHIP_FORM_URL, '_blank', 'noopener,noreferrer')
    },
    chapter: {
      title: 'Chapter Founders & Directors',
      badge: 'No School Required · Open Worldwide',
      description:
        'Chapters do NOT have to be tied to a school or campus! You can launch a MARKET4MED chapter anywhere—in your local city, neighborhood, community center, youth network, high school, or college. We provide official charter bylaws, global backing, and complete creative freedom.',
      benefits: [
        'Open to anyone worldwide—no campus or school enrollment needed',
        'Establish an official chapter in your local community, city, or school',
        'Full creative freedom to design your own local healthcare literacy initiatives',
        'Represent your community or school on the Global Chapter Council'
      ],
      ctaText: 'Apply on Official Google Form',
      action: onOpenChapter
    }
  };

  const roleDetailsVision: Record<string, {
    title: string;
    badge: string;
    description: string;
    benefits: string[];
    ctaText: string;
    isExternal?: boolean;
    action: () => void;
  }> = {
    student: {
      title: 'For Students & Scholars',
      badge: 'High School & University (Open to All)',
      description:
        'Join our community, conduct research on health literacy and clinical trust, participate in projects, or lead local initiatives.',
      benefits: [
        'Mentorship with practicing MDs and healthcare professionals',
        'Publication opportunities in educational content and whitepapers',
        'Network of like-minded peers bridging healthcare and business',
        'Pathways to healthcare knowledge, clinical literacy, and leadership'
      ],
      ctaText: 'General Membership Form',
      isExternal: true,
      action: () => window.open(GENERAL_MEMBERSHIP_FORM_URL, '_blank', 'noopener,noreferrer')
    },
    professional: {
      title: 'For Physicians & Healthcare Executives',
      badge: 'Clinical & Industry Mentors',
      description:
        'Serve as a guest speaker, mentor promising students, or provide real-world clinical delivery challenges for our initiatives.',
      benefits: [
        'Give back by mentoring the next generation of healthcare leaders',
        'Engage with motivated, interdisciplinary youth research teams',
        'Speak on panels addressing clinical operations, economics, or trust',
        'Evaluate student initiatives and research projects'
      ],
      ctaText: 'Join as a Mentor or Speaker',
      action: () => onOpenContact('Clinical Mentor / Speaker')
    },
    chapter: {
      title: 'For Chapter Founders & Leads',
      badge: 'Start a Chapter Anywhere',
      description:
        'Launch a MARKET4MED chapter in your community, city, regional youth hub, high school, or college. We provide charter bylaws, global community connections, and creative freedom.',
      benefits: [
        'Establish an official chapter in your community, city, or school',
        'No school or campus affiliation required—open to anyone worldwide',
        'Access turn-key bylaws and direct global team support',
        'Represent your area on the Global Chapter Council'
      ],
      ctaText: 'Apply on Official Google Form',
      action: onOpenChapter
    },
    partner: {
      title: 'For Health Systems & Sponsors',
      badge: 'Institutional Collaborations',
      description:
        'Partner with MARKET4MED to sponsor student innovation grants, commission student research on patient literacy, or co-host symposium events.',
      benefits: [
        'Access exceptional interdisciplinary student talent pipelines',
        'Deploy community health literacy drives in target patient populations',
        'Co-brand national symposia and healthcare innovation challenges',
        'Support grassroots healthcare education and transparency'
      ],
      ctaText: 'Explore Institutional Sponsorship',
      action: () => onOpenContact('Sponsorship / Partnership')
    }
  };

  const tabsCurrent = [
    { id: 'board', label: 'Executive Board', icon: Sparkles },
    { id: 'student', label: 'General Members', icon: UserCheck },
    { id: 'chapter', label: 'Chapters (Community & School)', icon: Building },
  ];

  const tabsVision = [
    { id: 'student', label: 'Students & Pre-Meds', icon: UserCheck },
    { id: 'professional', label: 'Clinicians & Execs', icon: Stethoscope },
    { id: 'chapter', label: 'Chapters (Worldwide)', icon: Building },
    { id: 'partner', label: 'Sponsors & Health Systems', icon: HeartHandshake },
  ];

  const tabs = siteMode === 'current' ? tabsCurrent : tabsVision;
  const roleDetails = siteMode === 'current' ? roleDetailsCurrent : roleDetailsVision;

  const current = roleDetails[selectedRole] || roleDetails[tabs[0].id];

  return (
    <section id="get-involved" className="py-20 bg-white border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C57C4] text-white text-xs font-heading font-black tracking-widest uppercase mb-3 border border-slate-900">
            <UserCheck className="w-3.5 h-3.5 text-[#FF66C4]" />
            <span>Join MARKET4MED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
            How You Can Get Involved
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed font-body font-medium">
            {siteMode === 'current'
              ? 'We are actively recruiting our founding leadership team, global ambassadors, and chapter founders worldwide (community, regional, or school). Choose your pathway below to submit your application.'
              : 'Healthcare transformation requires diverse minds. Choose your pathway below to see tailored opportunities and next steps.'}
          </p>
        </div>

        {/* Pathway Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedRole === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedRole(tab.id)}
                className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-slate-900 bg-[#2C57C4] text-white m4m-editorial-shadow-sm'
                    : 'border-slate-300 bg-[#F8F8F6] text-slate-800 hover:border-slate-900 hover:bg-white'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border border-slate-900 ${
                    isSelected ? 'bg-[#FF66C4] text-white' : 'bg-white text-slate-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-heading font-black uppercase tracking-wider leading-tight">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Pathway Display */}
        <div className="bg-[#F8F8F6] rounded-2xl border-2 border-slate-900 p-6 sm:p-10 m4m-editorial-shadow">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-heading font-black uppercase tracking-wider text-[#FF66C4] bg-slate-900 px-3 py-1 rounded-md border border-slate-900 inline-block mb-3">
              {current.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#2C57C4] uppercase mb-3">
              {current.title}
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-body">
              {current.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {current.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border-2 border-slate-900 m4m-editorial-shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#2C57C4] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium font-body">{benefit}</span>
              </div>
            ))}
          </div>

          <button
            onClick={current.action}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
          >
            <span>{current.ctaText}</span>
            {current.isExternal ? (
              <ExternalLink className="w-4 h-4 text-white" />
            ) : (
              <ArrowRight className="w-4 h-4 text-[#FF66C4]" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
