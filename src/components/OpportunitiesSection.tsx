import { useState } from 'react';
import { Briefcase, CheckCircle2, Clock, MapPin, ArrowRight, ExternalLink, Sparkles, Info, Globe, Award, Users, Building2 } from 'lucide-react';
import { ACCURATE_OPPORTUNITIES, VISION_OPPORTUNITIES } from '../data/mockData';
import { Opportunity } from '../types';
import { GENERAL_MEMBERSHIP_FORM_URL, BOARD_APPLICATION_FORM_URL, GLOBAL_AMBASSADOR_FORM_URL, DEFAULT_CHAPTER_GOOGLE_FORM_URL } from '../data/links';

interface OpportunitiesSectionProps {
  siteMode?: 'current' | 'vision';
  onApply: (opportunity: Opportunity) => void;
}

export default function OpportunitiesSection({ siteMode = 'current', onApply }: OpportunitiesSectionProps) {
  const [activeView, setActiveView] = useState<'all' | 'ambassador' | 'exec' | 'cohort' | 'volunteer'>('all');

  const opportunitiesList = siteMode === 'current' ? ACCURATE_OPPORTUNITIES : VISION_OPPORTUNITIES;

  const filteredOpportunities = opportunitiesList.filter((opp) => {
    if (activeView === 'ambassador') {
      return opp.type === 'Global Ambassador' || opp.id === 'opp-global-ambassador';
    }
    if (activeView === 'exec') {
      return opp.type === 'Executive Team';
    }
    if (activeView === 'cohort') {
      return opp.type === 'Student Cohort' || opp.type === 'Research Fellow';
    }
    if (activeView === 'volunteer') {
      return opp.type === 'Volunteer Initiative';
    }
    return true;
  });

  return (
    <section id="opportunities" className="py-20 bg-[#F8F8F6] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C57C4] text-white text-xs font-heading font-black tracking-widest uppercase mb-3 border border-slate-900">
              <Briefcase className="w-3.5 h-3.5 text-[#FF66C4]" />
              <span>Career & Leadership Pathways</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
              Leadership & Student Opportunities
            </h2>
            <p className="mt-3 text-base text-slate-700 leading-relaxed font-body font-medium">
              {siteMode === 'current'
                ? 'Join our global movement. Whether you want to represent MARKET4MED worldwide as a Global Ambassador, lead as an Executive Board Director, or launch a chapter in your community or school, we are accepting applications now.'
                : 'Join our global movement. Whether you want to represent MARKET4MED worldwide as a Global Ambassador, lead as an Executive Board Director, launch a chapter in your community or school, or analyze healthcare psychology in our research groups, we are accepting applications now.'}
            </p>
          </div>

          {/* Toggle View */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white border-2 border-slate-900 rounded-lg m4m-editorial-shadow-sm">
            <button
              onClick={() => setActiveView('all')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-heading font-black uppercase tracking-wider transition-colors cursor-pointer ${
                activeView === 'all'
                  ? 'bg-[#2C57C4] text-white'
                  : 'text-slate-800 hover:text-[#2C57C4]'
              }`}
            >
              All Openings
            </button>
            <button
              onClick={() => setActiveView('ambassador')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-heading font-black uppercase tracking-wider transition-colors cursor-pointer ${
                activeView === 'ambassador'
                  ? 'bg-[#FF66C4] text-white'
                  : 'text-slate-800 hover:text-[#FF66C4]'
              }`}
            >
              Global Ambassadors
            </button>
            <button
              onClick={() => setActiveView('exec')}
              className={`px-3.5 py-1.5 rounded-md text-xs font-heading font-black uppercase tracking-wider transition-colors cursor-pointer ${
                activeView === 'exec'
                  ? 'bg-[#2C57C4] text-white'
                  : 'text-slate-800 hover:text-[#2C57C4]'
              }`}
            >
              Executive Board & Leads
            </button>
            {siteMode === 'vision' && (
              <button
                onClick={() => setActiveView('cohort')}
                className={`px-3.5 py-1.5 rounded-md text-xs font-heading font-black uppercase tracking-wider transition-colors cursor-pointer ${
                  activeView === 'cohort'
                    ? 'bg-[#2C57C4] text-white'
                    : 'text-slate-800 hover:text-[#2C57C4]'
                }`}
              >
                Cohorts & Fellows
              </button>
            )}
          </div>
        </div>

        {/* Featured Callout Cards: Global Ambassador + Executive Board + Membership */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: PROMINENT GLOBAL AMBASSADOR CARD */}
          <div className="p-6 rounded-2xl bg-white border-3 border-slate-900 m4m-editorial-shadow flex flex-col justify-between gap-5 relative overflow-hidden group hover:translate-y-[-2px] transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF66C4]/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
            <div className="space-y-2 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FF66C4] text-white text-[11px] font-heading font-black uppercase tracking-wider border border-slate-900 shadow-xs">
                  <Globe className="w-3.5 h-3.5 text-white" />
                  <span>Worldwide Open Call</span>
                </span>
                <span className="text-[11px] font-heading font-bold text-slate-500 uppercase tracking-wide">
                  Remote · 2-4 hrs/wk
                </span>
              </div>

              <h3 className="text-2xl font-heading font-black text-[#2C57C4] uppercase leading-tight pt-1">
                Global Student Ambassador
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Be the face and voice of MARKET4MED in your school, region, or home country. Share healthcare literacy campaigns, organize local initiatives, and connect with students across the globe.
              </p>

              <div className="pt-2 space-y-1.5 text-xs text-slate-800 font-medium">
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#FF66C4] shrink-0" />
                  <span>Official Certificate & Ambassador Designation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-[#2C57C4] shrink-0" />
                  <span>International student leader network</span>
                </div>
              </div>
            </div>

            <a
              id="global-ambassador-apply-btn"
              href={GLOBAL_AMBASSADOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer w-full relative z-10"
            >
              <Globe className="w-4 h-4 text-white" />
              <span>Apply as Global Ambassador</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Card 2: Executive Board Member Form */}
          <div className="p-6 rounded-2xl bg-[#2C57C4] text-white border-3 border-slate-900 m4m-editorial-shadow flex flex-col justify-between gap-5 relative overflow-hidden group hover:translate-y-[-2px] transition-all">
            <div className="space-y-2 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FF66C4] text-white text-[11px] font-heading font-black uppercase tracking-wider border border-slate-900 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Executive Leadership</span>
                </span>
                <span className="text-[11px] font-heading font-bold text-white/80 uppercase tracking-wide">
                  2026–2027 Cycle
                </span>
              </div>

              <h3 className="text-2xl font-heading font-black text-white uppercase leading-tight pt-1">
                Executive Board Application
              </h3>

              <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                Lead national operations across Chapter Expansion, Research Working Groups, Outreach & Communications, Curriculum Development, or Operations.
              </p>

              <div className="pt-2 space-y-1.5 text-xs text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF66C4] shrink-0" />
                  <span>Founding organizational leadership role</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF66C4] shrink-0" />
                  <span>Shape national curriculum and initiatives</span>
                </div>
              </div>
            </div>

            <a
              id="exec-board-apply-btn"
              href={BOARD_APPLICATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer w-full relative z-10"
            >
              <span>Apply for Executive Board</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2C57C4]" />
            </a>
          </div>

          {/* Card 3: General Membership Application */}
          <div className="p-6 rounded-2xl bg-white border-3 border-slate-900 m4m-editorial-shadow flex flex-col justify-between gap-5 relative overflow-hidden group hover:translate-y-[-2px] transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-[11px] font-heading font-black uppercase tracking-wider border border-slate-300">
                  <Users className="w-3.5 h-3.5 text-[#2C57C4]" />
                  <span>Open Membership</span>
                </span>
                <span className="text-[11px] font-heading font-bold text-slate-500 uppercase tracking-wide">
                  Rolling Entry
                </span>
              </div>

              <h3 className="text-2xl font-heading font-black text-[#2C57C4] uppercase leading-tight pt-1">
                General Student Membership
              </h3>

              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Open to all high school and undergraduate students exploring healthcare economics, trust psychology, and medical careers. Get priority webinar invites.
              </p>

              <div className="pt-2 space-y-1.5 text-xs text-slate-800 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2C57C4] shrink-0" />
                  <span>Access to publications and resources</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2C57C4] shrink-0" />
                  <span>Community roundtables and guest lectures</span>
                </div>
              </div>
            </div>

            <a
              id="general-membership-apply-btn"
              href={GENERAL_MEMBERSHIP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer w-full"
            >
              <span>General Membership Form</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>

        {/* Informational Callout on Future Volunteer Programs */}
        {siteMode === 'current' && (
          <div className="mb-10 p-5 rounded-xl bg-white border-2 border-slate-900 m4m-editorial-shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#2C57C4] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-heading font-black text-slate-900 uppercase">
                  Note on Community Chapters & Worldwide Hubs
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Chapters do not have to be at a school or campus. You can start a chapter anywhere—in your local city, neighborhood, community group, or school—or apply directly as a Global Ambassador.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={GLOBAL_AMBASSADOR_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FF66C4] hover:bg-[#ff4db9] text-white text-xs font-heading font-black uppercase tracking-wider border border-slate-900"
              >
                <span>Global Ambassador</span>
                <ExternalLink className="w-3 h-3 text-white" />
              </a>
              <a
                href={BOARD_APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-heading font-black uppercase tracking-wider border border-slate-400"
              >
                <span>Board Application</span>
                <ArrowRight className="w-3 h-3 text-[#2C57C4]" />
              </a>
            </div>
          </div>
        )}

        {/* Opportunities Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredOpportunities.map((opp) => {
            const isBoardRole = opp.id === 'opp-board-exec';
            const isAmbassadorRole = opp.id === 'opp-global-ambassador' || opp.type === 'Global Ambassador';
            const isChapterLeadRole = opp.id === 'opp-director' || opp.title.toLowerCase().includes('chapter');
            
            return (
              <div
                key={opp.id}
                className={`bg-white rounded-xl border-2 border-slate-900 p-6 sm:p-8 flex flex-col justify-between m4m-editorial-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all ${
                  isAmbassadorRole ? 'ring-2 ring-[#FF66C4] bg-linear-to-b from-[#FFF0F8] to-white' : ''
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-heading font-black uppercase tracking-wider px-3 py-1 rounded-md border border-slate-900 ${
                        isAmbassadorRole ? 'bg-[#FF66C4] text-white' : 'bg-[#2C57C4] text-white'
                      }`}
                    >
                      {opp.type}
                    </span>

                    <div className="flex items-center gap-3 text-xs text-slate-700 font-heading font-bold">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#2C57C4]" />
                        {opp.commitment}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#2C57C4]" />
                        {opp.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-black text-[#2C57C4] mb-3 uppercase">
                    {opp.title}
                  </h3>

                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-body">
                    {opp.description}
                  </p>

                  {/* Core Responsibilities */}
                  <div className="mb-6 bg-[#F8F8F6] p-4 rounded-lg border border-slate-300">
                    <h4 className="text-xs font-heading font-black text-slate-900 uppercase tracking-wider mb-2.5">
                      Key Responsibilities & Deliverables:
                    </h4>
                    <div className="space-y-1.5">
                      {opp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2C57C4] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="pt-5 border-t-2 border-slate-200 flex items-center justify-between gap-4">
                  <div className="text-xs font-heading font-bold text-slate-700">
                    Status: <span className="font-heading font-black text-[#2C57C4]">{opp.deadline}</span>
                  </div>

                  {isAmbassadorRole ? (
                    <a
                      href={GLOBAL_AMBASSADOR_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all cursor-pointer"
                    >
                      <Globe className="w-3.5 h-3.5 text-white" />
                      <span>Apply via Google Form</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </a>
                  ) : isChapterLeadRole ? (
                    <a
                      href={DEFAULT_CHAPTER_GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all cursor-pointer"
                    >
                      <Building2 className="w-3.5 h-3.5 text-white" />
                      <span>Apply via Chapter Form</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </a>
                  ) : isBoardRole ? (
                    <a
                      href={BOARD_APPLICATION_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all cursor-pointer"
                    >
                      <span>Apply on Google Form</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onApply(opp)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all cursor-pointer"
                    >
                      <span>Apply for Role</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
