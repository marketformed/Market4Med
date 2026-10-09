import { ArrowRight, Compass, Users, Building2, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { PageTab } from '../types';
import { SUBSTACK_URL, GLOBAL_AMBASSADOR_FORM_URL } from '../data/links';
import { SubstackIcon } from './BrandLogos';

interface HomeOverviewProps {
  onNavigateTab: (tab: PageTab) => void;
  onOpenChapterModal: () => void;
}

export default function HomeOverview({ onNavigateTab, onOpenChapterModal }: HomeOverviewProps) {
  return (
    <section id="home-directory" className="py-20 bg-[#F8F8F6] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C57C4] text-white text-xs font-heading font-black tracking-widest uppercase mb-3 border border-slate-900">
            <Compass className="w-3.5 h-3.5 text-[#FF66C4]" />
            <span>Discover MARKET4MED</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
            Where Would You Like To Go Next?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed font-body font-medium">
            Explore our foundational mission, discover active leadership pathways, launch a chapter in your community, or read our latest healthcare literacy articles.
          </p>
        </div>

        {/* 3 Clear, Non-Repetitive Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: About & Mission */}
          <div className="bg-white rounded-2xl border-3 border-slate-900 p-7 m4m-editorial-shadow flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2C57C4] text-white flex items-center justify-center border-2 border-slate-900 shadow-xs">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <span className="text-[11px] font-heading font-black text-[#2C57C4] uppercase tracking-wider block">
                Track 01 · Who We Are
              </span>
              <h3 className="text-2xl font-heading font-black text-slate-900 uppercase">
                Our Mission & Story
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-body">
                Learn why understanding medicine requires more than science. Explore our 4 strategic pillars across healthcare literacy, economics, and bedside trust psychology.
              </p>
            </div>

            <button
              onClick={() => onNavigateTab('about')}
              className="mt-6 inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#F8F8F6] hover:bg-slate-200 text-slate-900 font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 transition-all cursor-pointer"
            >
              <span>Explore Mission & Pillars</span>
              <ArrowRight className="w-4 h-4 text-[#2C57C4]" />
            </button>
          </div>

          {/* Card 2: Student Opportunities */}
          <div className="bg-white rounded-2xl border-3 border-slate-900 p-7 m4m-editorial-shadow flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all ring-2 ring-[#FF66C4]/30">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FF66C4] text-white flex items-center justify-center border-2 border-slate-900 shadow-xs">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-[11px] font-heading font-black text-[#FF66C4] uppercase tracking-wider block">
                Track 02 · Get Involved
              </span>
              <h3 className="text-2xl font-heading font-black text-slate-900 uppercase">
                Student Opportunities
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-body">
                Represent your region as a Global Ambassador, direct a local branch, or join as a general student member. Open worldwide with rolling admissions.
              </p>
            </div>

            <button
              onClick={() => onNavigateTab('opportunities')}
              className="mt-6 inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 transition-all cursor-pointer"
            >
              <span>View Open Opportunities</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Card 3: Chapters Network */}
          <div className="bg-white rounded-2xl border-3 border-slate-900 p-7 m4m-editorial-shadow flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#3252AD] text-white flex items-center justify-center border-2 border-slate-900 shadow-xs">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-[11px] font-heading font-black text-[#3252AD] uppercase tracking-wider block">
                Track 03 · Local Impact
              </span>
              <h3 className="text-2xl font-heading font-black text-slate-900 uppercase">
                Worldwide Chapters
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed font-body">
                Launch a chapter anywhere—in your city, neighborhood, youth network, or school. Zero campus restrictions with official bylaws and mentorship support.
              </p>
            </div>

            <button
              onClick={() => onNavigateTab('chapters')}
              className="mt-6 inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-[#F8F8F6] hover:bg-slate-200 text-slate-900 font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 transition-all cursor-pointer"
            >
              <span>Read Chapter Guide</span>
              <ArrowRight className="w-4 h-4 text-[#3252AD]" />
            </button>
          </div>
        </div>

        {/* Clear Substack & Media Banner Strip */}
        <div className="bg-[#2C57C4] text-white rounded-2xl border-3 border-slate-900 p-6 sm:p-8 m4m-editorial-shadow flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-heading font-black text-[#FF66C4] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Thought & Articles</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-heading font-black uppercase text-white">
              Stay Informed With MARKET4MED On Substack
            </h4>
            <p className="text-xs sm:text-sm text-white/90 font-body font-medium max-w-xl">
              Plain-language breakdowns of medical misinformation, health economics, and bedside trust written by student scholars.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 transition-all cursor-pointer"
            >
              <SubstackIcon size={14} className="text-[#FF66C4]" />
              <span>Read Substack (@market4med)</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-900" />
            </a>

            <a
              href={GLOBAL_AMBASSADOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 transition-all cursor-pointer"
            >
              <span>Apply as Ambassador</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
