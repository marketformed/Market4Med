import { useState } from 'react';
import { UserCheck, Stethoscope, Building, HeartHandshake, ArrowRight, CheckCircle2, Sparkles, ExternalLink, Globe } from 'lucide-react';
import { GENERAL_MEMBERSHIP_FORM_URL, BOARD_APPLICATION_FORM_URL, GLOBAL_AMBASSADOR_FORM_URL } from '../data/links';

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
  const [selectedRole, setSelectedRole] = useState<string>('students');

  const scrollToOpportunities = () => {
    const el = document.getElementById('opportunities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 900, behavior: 'smooth' });
    }
  };

  const roleDetailsCurrent: Record<string, {
    title: string;
    badge: string;
    description: string;
    benefits: string[];
    ctaText: string;
    isExternal?: boolean;
    action: () => void;
  }> = {
    students: {
      title: 'For Students & Aspiring Pre-Health Leaders',
      badge: '3 Active Roles · Open Worldwide',
      description:
        'Whether you want to represent your region internationally as a Global Ambassador, launch a chapter in your community or school, or join our student network—open applications are welcoming students worldwide.',
      benefits: [
        'Global Student Ambassadors representing schools and cities across 15+ regions',
        'Founding a local Chapter with zero campus restrictions (open in your city or school)',
        'General Student Membership open to all high school, college, and post-grad youth',
        'Direct pathways to future committee and project leadership cohorts'
      ],
      ctaText: 'View Open Student Roles Above',
      action: scrollToOpportunities
    },
    mentors: {
      title: 'For Physicians, Clinicians & Healthcare Leaders',
      badge: 'Advisory & Guest Speaking',
      description:
        'Are you a physician, medical resident, nurse, or healthcare executive passionate about youth health literacy? Connect with our student leadership team as a guest speaker, article reviewer, or clinical advisor.',
      benefits: [
        'Share real-world clinical delivery insights with high-school and pre-med students',
        'Advise youth on patient advocacy, healthcare economics, and clinical trust',
        'Guest speaker opportunities on virtual student webinars and discussions',
        'Direct mentorship impact on aspiring future healthcare and business leaders'
      ],
      ctaText: 'Connect as a Clinical Mentor',
      action: () => onOpenContact('Clinical Mentor / Speaker')
    },
    educators: {
      title: 'For Teachers, Counselors & School Advisors',
      badge: 'Classrooms & Student Clubs',
      description:
        'High school educators, pre-health advisors, and club directors: bring MARKET4MED to your campus or youth group with our starter guides, educational content, and speaker sessions.',
      benefits: [
        'Free starter resources and bylaws on healthcare literacy and clinical strategy',
        'Sponsor or support an official student-led chapter at your school or district',
        'Co-host virtual educational workshops for your pre-health and STEM students',
        'Connect your students to an international network of ambitious peers'
      ],
      ctaText: 'Bring MARKET4MED to Your School',
      action: () => onOpenContact('Educator / School Inquiry')
    },
    partners: {
      title: 'For Nonprofits, Health Systems & Sponsors',
      badge: 'Institutional & Community Collaborations',
      description:
        'Health equity non-profits, student advocacy groups, and mission-aligned sponsors: partner with MARKET4MED on youth literacy campaigns, regional awareness drives, and community education.',
      benefits: [
        'Co-organize community healthcare literacy and patient advocacy initiatives',
        'Partner on cross-organizational student workshops, panels, and publications',
        'Support grassroots educational equity and transparency for underserved youth',
        'Transparent, youth-driven nonprofit mission focused on measurable community impact'
      ],
      ctaText: 'Propose a Partnership or Sponsorship',
      action: () => onOpenContact('Sponsorship / Partnership')
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
    { id: 'students', label: 'Students & Youth', icon: UserCheck },
    { id: 'mentors', label: 'Clinicians & Mentors', icon: Stethoscope },
    { id: 'educators', label: 'Schools & Educators', icon: Building },
    { id: 'partners', label: 'Partners & Sponsors', icon: HeartHandshake },
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
            <span>Community & Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
            How You Can Support & Get Involved
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed font-body font-medium">
            {siteMode === 'current'
              ? 'Whether you are a student ready to lead, a physician ready to mentor, an educator bringing healthcare literacy to campus, or an organization eager to collaborate—there is a dedicated place for you.'
              : 'Healthcare transformation requires diverse minds. Choose your pathway below to see tailored opportunities and next steps.'}
          </p>
        </div>

        {/* Pathway Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
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
