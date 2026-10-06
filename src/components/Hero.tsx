import { ArrowRight, Sparkles, BookOpen, Building2, HeartPulse, Scale, BrainCircuit, Instagram, Calendar, CheckCircle2, ExternalLink, Compass, Globe } from 'lucide-react';
import { ACCURATE_METRICS, VISION_METRICS } from '../data/mockData';
import { Market4MedPrimaryLogo, Market4MedSecondaryLogo, BrandStar, BrandBillboardBanner, BrandTicketStub, TikTokIcon } from './BrandLogos';
import { GENERAL_MEMBERSHIP_FORM_URL, GLOBAL_AMBASSADOR_FORM_URL, INSTAGRAM_URL, TIKTOK_URL } from '../data/links';

interface HeroProps {
  siteMode?: 'current' | 'vision';
  onExplorePrograms: () => void;
  onExploreAbout?: () => void;
  onOpenChapterModal: () => void;
  onOpenApplyModal: () => void;
  onOpenBrandKitModal?: () => void;
}

export default function Hero({
  siteMode = 'current',
  onExplorePrograms,
  onExploreAbout,
  onOpenChapterModal,
  onOpenApplyModal
}: HeroProps) {
  const currentMetrics = siteMode === 'current' ? ACCURATE_METRICS : VISION_METRICS;

  return (
    <section id="hero" className="relative bg-[#F8F8F6] pt-8 pb-20 overflow-hidden border-b-2 border-slate-900">
      {/* Crisp Editorial Ledger Grid & Corner Tech Accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0F172A12 1px, transparent 1px),
            linear-gradient(to bottom, #0F172A12 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Graphic Accents */}
      <div className="absolute top-16 left-6 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border-2 border-slate-900 m4m-editorial-shadow-sm rotate-[-3deg] pointer-events-none select-none z-10">
        <BrandStar color="#2C57C4" size={14} />
        <span className="text-[11px] font-heading font-black text-[#2C57C4] uppercase tracking-wider">Medicine × Business</span>
      </div>

      <div className="absolute top-20 right-8 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FF66C4] text-white border-2 border-slate-900 m4m-editorial-shadow-sm rotate-[4deg] pointer-events-none select-none z-10">
        <Sparkles className="w-3.5 h-3.5 text-white" />
        <span className="text-[11px] font-heading font-black uppercase tracking-wider">2026–2027 Cycle</span>
      </div>

      <div className="absolute bottom-24 left-8 hidden xl:flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white border-2 border-slate-900 m4m-editorial-shadow-sm rotate-[2deg] pointer-events-none select-none z-10">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
        <span className="text-[11px] font-heading font-black text-slate-800 uppercase tracking-wider">Recruiting Global Ambassadors</span>
      </div>

      {/* Subtle Warm Gradient Radiance in Center */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-radial from-[#2C57C4]/8 via-[#FF66C4]/5 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status & Editorial Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b border-slate-300">
          <div className="inline-flex items-center gap-2.5 text-slate-800 text-xs sm:text-sm font-heading font-black tracking-widest uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF66C4] inline-block animate-pulse"></span>
            <span>Est. 2026 · International Student Community · Open Worldwide</span>
            <span className="text-slate-400">/</span>
            <span className="text-[#2C57C4]">
              Medicine · Business · Healthcare Literacy
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border-2 border-slate-900 text-slate-900 hover:bg-[#FF66C4] hover:text-white text-xs font-heading font-black transition-colors m4m-editorial-shadow-sm cursor-pointer"
              title="Official Instagram @market4med"
            >
              <Instagram className="w-3.5 h-3.5 text-[#FF66C4]" />
              <span>Instagram</span>
            </a>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border-2 border-slate-900 text-slate-900 hover:bg-[#2C57C4] hover:text-white text-xs font-heading font-black transition-colors m4m-editorial-shadow-sm cursor-pointer"
              title="Official TikTok @market4med"
            >
              <TikTokIcon size={13} className="text-[#2C57C4]" />
              <span>TikTok</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Brand Presentation: The Official Primary Cloud Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#2C57C4] p-5 sm:p-7 rounded-2xl border-3 border-slate-900 m4m-editorial-shadow-pink max-w-lg w-full flex items-center justify-center relative overflow-hidden">
            <BrandStar color="#FF66C4" size={26} className="absolute top-3 left-4 animate-pulse" />
            <BrandStar color="#FFFFFF" size={18} className="absolute bottom-3 right-4 opacity-75" />

            <div className="w-full max-w-[380px]">
              <Market4MedPrimaryLogo variant="blob" size="lg" className="w-full" />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <BrandStar color="#FF66C4" size={16} />
            <span className="text-xs sm:text-sm font-heading font-black tracking-widest text-[#2C57C4] uppercase">
              International Student-Led Healthcare Innovation Network
            </span>
            <BrandStar color="#FF66C4" size={16} />
          </div>

          <h1
            id="hero-main-headline"
            className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#2C57C4] uppercase leading-[0.98] mb-6"
          >
            WHERE MEDICINE <br className="hidden sm:block" />
            <span className="text-slate-900 relative inline-block">
              MEETS BUSINESS.
              <span className="absolute -bottom-1.5 left-0 right-0 h-3 bg-[#FF66C4] -z-10 -rotate-1 rounded-xs" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-800 max-w-3xl mx-auto font-body font-normal leading-relaxed mb-8">
            <strong className="font-heading font-black text-[#2C57C4]">MARKET4MED</strong> is an international, student-run organization bridging clinical medicine and business economics to improve <strong className="font-bold text-slate-950">healthcare literacy</strong> and investigate how <strong className="font-bold text-slate-950">the psychology of patient trust</strong> shapes care delivery worldwide.
          </p>

          {/* Quick Notice: Highlights Active Global Recruitment */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-slate-900 m4m-editorial-shadow-sm mb-10 text-xs text-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-heading font-black uppercase text-[#2C57C4]">Global Open Call:</span>
            <span>Global Ambassadors, Worldwide Chapters & General Members</span>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
            {/* Global Ambassador Application Button */}
            <a
              id="hero-ambassador-apply-btn"
              href={GLOBAL_AMBASSADOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer"
            >
              <Globe className="w-4 h-4 text-white" />
              <span>Apply as Global Ambassador</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>

            {/* Launch Chapter Button */}
            <button
              id="hero-launch-chapter-btn"
              onClick={onOpenChapterModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#FF66C4]" />
              <span>Launch a Chapter</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            {/* General Membership Form */}
            <a
              id="hero-general-membership-btn"
              href={GENERAL_MEMBERSHIP_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-heading font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
            >
              <span>General Membership</span>
              <ExternalLink className="w-4 h-4 text-slate-800" />
            </a>

            {/* In Current mode, explore About/Mission; In Vision mode, explore Programs */}
            {siteMode === 'current' ? (
              <button
                id="hero-about-mission-btn"
                onClick={onExploreAbout}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F8F8F6] hover:bg-slate-200 text-slate-900 font-heading font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#2C57C4]" />
                <span>About & Mission</span>
              </button>
            ) : (
              <button
                id="hero-explore-programs-btn"
                onClick={onExplorePrograms}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-heading font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#2C57C4]" />
                <span>Programs & Topics</span>
              </button>
            )}

            <button
              id="hero-launch-chapter-btn"
              onClick={onOpenChapterModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#F8F8F6] hover:bg-slate-200 text-slate-900 font-heading font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#2C57C4]" />
              <span>Launch Chapter</span>
            </button>
          </div>
        </div>

        {/* Billboard Announcement Banner */}
        <div className="max-w-5xl mx-auto mb-12">
          <BrandBillboardBanner onApply={onOpenApplyModal} />
        </div>

        {/* Film Ticket Event Announcement Stub */}
        <div className="max-w-4xl mx-auto mb-16">
          <BrandTicketStub onApply={onOpenApplyModal} />
        </div>

        {/* Visual Thematic Triad: Medicine - Business - Psychology & Trust */}
        <div className="max-w-5xl mx-auto bg-[#2C57C4] text-white rounded-2xl p-6 sm:p-8 lg:p-10 border-3 border-slate-900 m4m-editorial-shadow mb-16 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b-2 border-white/20 pb-6 mb-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#FF66C4] font-heading font-black mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF66C4]" />
                <span>The Core Synthesis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight uppercase">
                Beyond Disconnected Pre-Med & Business Clubs
              </h2>
            </div>
            <p className="text-white/90 text-xs sm:text-sm max-w-md font-body font-medium">
              Most universities isolate biology from finance, and clinical medicine from patient communication. MARKET4MED integrates the triad required to fix 21st-century healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Clinical Medicine */}
            <div className="bg-white text-slate-900 rounded-xl p-6 border-2 border-slate-900 m4m-editorial-shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#2C57C4] text-white flex items-center justify-center mb-4 border border-slate-900">
                  <HeartPulse className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-black text-[#2C57C4] mb-2 uppercase">Clinical Medicine</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4 font-body font-normal">
                  Diagnostic accuracy, therapeutic interventions, clinical pathophysiology, and bedside empathy in patient-centered care.
                </p>
              </div>
              <span className="text-[11px] font-heading font-black text-[#2C57C4] uppercase pt-3 border-t border-slate-200">
                Grounding: Medical Efficacy
              </span>
            </div>

            {/* Card 2: Strategic Economics */}
            <div className="bg-white text-slate-900 rounded-xl p-6 border-2 border-slate-900 m4m-editorial-shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#3252AD] text-white flex items-center justify-center mb-4 border border-slate-900">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-black text-[#3252AD] mb-2 uppercase">Business & Economics</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4 font-body font-normal">
                  Value-based reimbursement, regulatory pathways, health equity capital, hospital operating models, and commercial scaling.
                </p>
              </div>
              <span className="text-[11px] font-heading font-black text-[#3252AD] uppercase pt-3 border-t border-slate-200">
                Engine: Sustainable Delivery
              </span>
            </div>

            {/* Card 3: Psychology of Trust & Literacy */}
            <div className="bg-white text-slate-900 rounded-xl p-6 border-2 border-slate-900 m4m-editorial-shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#FF66C4] text-white flex items-center justify-center mb-4 border border-slate-900">
                  <BrainCircuit className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-heading font-black text-[#2C57C4] mb-2 uppercase">Psychology & Trust</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-4 font-body font-normal">
                  Behavioral economics, health literacy, transparent communication, and overcoming systemic patient alienation.
                </p>
              </div>
              <span className="text-[11px] font-heading font-black text-[#FF66C4] uppercase pt-3 border-t border-slate-200">
                Impact: Patient Trust & Literacy
              </span>
            </div>
          </div>
        </div>

        {/* Founding Metrics Strip */}
        <div id="hero-metrics-strip" className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-slate-900 rounded-xl p-5 text-center transition-all m4m-editorial-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px]"
            >
              <div className="text-2xl sm:text-3xl font-heading font-black text-[#2C57C4] tracking-tight mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-slate-700 leading-snug">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
