import { useState, useEffect } from 'react';
import {
  Compass,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  GraduationCap,
  Users,
  BookOpen,
  Award,
  Link as LinkIcon,
  Check,
  Edit3
} from 'lucide-react';

interface ChaptersSectionProps {
  onOpenChapterModal?: () => void;
}

// Default Google Form link that can be updated either here in code or via the UI button
export const DEFAULT_CHAPTER_GOOGLE_FORM_URL =
  'https://forms.gle/k7ASmMd8duZodTCaA';

export default function ChaptersSection({ onOpenChapterModal }: ChaptersSectionProps) {
  const [googleFormUrl, setGoogleFormUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('market4med_chapter_form_url');
      if (saved && saved !== 'https://forms.gle/rcjkKrcTVSEu9KLMA') return saved;
    }
    return DEFAULT_CHAPTER_GOOGLE_FORM_URL;
  });

  const [isEditingLink, setIsEditingLink] = useState(false);
  const [tempUrlInput, setTempUrlInput] = useState(googleFormUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    setTempUrlInput(googleFormUrl);
  }, [googleFormUrl]);

  const handleSaveFormUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = tempUrlInput.trim();
    if (!cleanUrl) return;
    setGoogleFormUrl(cleanUrl);
    localStorage.setItem('market4med_chapter_form_url', cleanUrl);
    setIsEditingLink(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleResetToDefault = () => {
    setGoogleFormUrl(DEFAULT_CHAPTER_GOOGLE_FORM_URL);
    setTempUrlInput(DEFAULT_CHAPTER_GOOGLE_FORM_URL);
    localStorage.removeItem('market4med_chapter_form_url');
    setIsEditingLink(false);
  };

  return (
    <section id="chapters" className="py-20 bg-[#2C57C4] text-white border-b-2 border-slate-900 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF66C4]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white text-slate-900 text-xs font-heading font-black tracking-widest uppercase mb-4 border-2 border-slate-900 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF66C4]" />
            <span>Worldwide Chapter Expansion · US & International</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight uppercase leading-[1.05]">
            Start a Chapter Anywhere in the World
          </h2>

          <p className="mt-4 text-white/95 text-base sm:text-lg leading-relaxed font-body font-medium">
            Chapters do <strong>not</strong> have to be on campus or tied to a school. You can start a chapter anywhere—in your local community, city, regional youth hub, high school, university, or independent advocate group. Whether you are in America or abroad, in school or independent, our mission is to expand everywhere and empower as many leaders as possible.
          </p>
        </div>

        {/* PRIMARY CALL TO ACTION: Google Form Integration Card */}
        <div className="bg-white text-slate-900 rounded-2xl border-3 border-slate-900 p-7 sm:p-10 mb-16 m4m-editorial-shadow-pink">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-heading font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FF66C4] text-white border border-slate-900">
                  Open Worldwide
                </span>
                <span className="text-[11px] font-heading font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  No School Required
                </span>
                <span className="text-[11px] font-heading font-bold text-[#2C57C4] bg-[#2C57C4]/10 px-2.5 py-1 rounded-md border border-[#2C57C4]/30">
                  Community & School Hubs
                </span>
                {saveSuccess && (
                  <span className="text-[11px] font-heading font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-300 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Form Link Saved!
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#2C57C4] uppercase leading-tight">
                Ready to launch a chapter in your community or area?
              </h3>

              <p className="text-slate-700 text-sm font-medium leading-relaxed">
                Fill out our chapter founder form. Whether you are starting a city hub, community project, high school club, college alliance, or regional network in the US or internationally, our team equips you with turnkey toolkits and official backing.
              </p>

              {/* What You Receive As A Chapter Founder */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#2C57C4] shrink-0 mt-0.5" />
                  <span>Official Chapter Charter & Community Bylaws</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#2C57C4] shrink-0 mt-0.5" />
                  <span>Global Network of Fellow Chapter Founders & Ambassadors</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#2C57C4] shrink-0 mt-0.5" />
                  <span>Full Creative Freedom to Design Your Own Local Events & Projects</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#2C57C4] shrink-0 mt-0.5" />
                  <span>Official Founding Director Credentials & Leadership Recognition</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Column */}
            <div className="flex flex-col gap-3 min-w-[280px]">
              {/* Main Button: Directly Links to Google Form */}
              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="chapter-google-form-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-sm uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer text-center"
              >
                <span>Apply on Official Google Form</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>

              {/* Google Form Link Customizer for Site Admin */}
              <div className="pt-2 border-t border-slate-200">
                {!isEditingLink ? (
                  <button
                    type="button"
                    onClick={() => setIsEditingLink(true)}
                    className="inline-flex items-center gap-1.5 text-[11px] font-heading font-bold text-slate-600 hover:text-[#2C57C4] transition-colors cursor-pointer"
                  >
                    <Edit3 className="w-3 h-3 text-[#FF66C4]" />
                    <span>Link your Google Form URL</span>
                  </button>
                ) : (
                  <form onSubmit={handleSaveFormUrl} className="space-y-2 mt-1">
                    <label className="block text-[11px] font-heading font-bold text-slate-700">
                      Paste your Google Form Link:
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="url"
                        required
                        value={tempUrlInput}
                        onChange={(e) => setTempUrlInput(e.target.value)}
                        placeholder="https://forms.gle/..."
                        className="px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg flex-1 text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#2C57C4]"
                      />
                      <button
                        type="submit"
                        className="px-3 py-1.5 bg-[#2C57C4] hover:bg-[#23459c] text-white text-[11px] font-heading font-black uppercase rounded-lg border border-slate-900 cursor-pointer"
                      >
                        Save
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-500">
                      <span>Saved in your browser</span>
                      <button
                        type="button"
                        onClick={handleResetToDefault}
                        className="text-slate-500 hover:text-slate-800 underline cursor-pointer"
                      >
                        Reset default
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Steps: Why & How to Launch a Chapter */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest font-heading font-black text-[#FF66C4] bg-slate-900 px-2.5 py-1 rounded inline-block mb-2">
              Simple 3-Step Process
            </span>
            <h3 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase">
              How You Can Start A Chapter
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-2 font-medium">
              You don't need a hundred people or existing club status. Here is all it takes to get started:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white text-slate-900 p-6 rounded-xl border-2 border-slate-900 m4m-editorial-shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#2C57C4] text-white flex items-center justify-center font-heading font-black text-sm mb-4 border border-slate-900">
                  01
                </div>
                <h4 className="text-base font-heading font-black text-[#2C57C4] uppercase mb-2">
                  Submit the Google Form
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Fill out our short interest form. Tell us your location (city, country, or school if applicable) and how you'd like to champion healthcare literacy in your area.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-heading font-bold text-[#FF66C4]">
                <span>Takes ~3 minutes</span>
              </div>
            </div>

            <div className="bg-white text-slate-900 p-6 rounded-xl border-2 border-slate-900 m4m-editorial-shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#FF66C4] text-white flex items-center justify-center font-heading font-black text-sm mb-4 border border-slate-900">
                  02
                </div>
                <h4 className="text-base font-heading font-black text-[#2C57C4] uppercase mb-2">
                  15-Min Onboarding Call
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Hop on a quick intro call with our team. We'll hand over the official Charter Pack, community constitution bylaws, and support to launch your vision.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-heading font-bold text-[#2C57C4]">
                <span>Full Global Backing</span>
              </div>
            </div>

            <div className="bg-white text-slate-900 p-6 rounded-xl border-2 border-slate-900 m4m-editorial-shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#2C57C4] text-white flex items-center justify-center font-heading font-black text-sm mb-4 border border-slate-900">
                  03
                </div>
                <h4 className="text-base font-heading font-black text-[#2C57C4] uppercase mb-2">
                  Recruit 2–3 Co-Leads & Launch
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  Find 1–2 friends or local peers to co-lead. Creatively design and host your own community events, workshops, discussions, or outreach drives.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-heading font-bold text-emerald-600">
                <span>Officially Chartered Chapter</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Launch Playbook Framework */}
        <div className="bg-white text-slate-900 rounded-xl border-3 border-slate-900 p-8 sm:p-10 m4m-editorial-shadow">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-widest font-heading font-black text-[#FF66C4] bg-slate-900 px-2 py-0.5 rounded inline-block mb-2">
              Global Support Infrastructure
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-[#2C57C4] uppercase">
              What We Provide to Every Chapter
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mt-2 font-medium leading-relaxed">
              You won't have to build anything alone. National and global leadership equips your chapter with official credentials, advisory guidance, and creative freedom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#F8F8F6] p-5 rounded-lg border-2 border-slate-900">
              <span className="text-xs font-heading font-black text-[#2C57C4] uppercase block mb-2">PILLAR 01</span>
              <h4 className="text-sm font-heading font-black text-slate-900 mb-2 uppercase">Charter & Bylaws</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-body font-normal">
                Pre-approved constitution drafts adaptable for community hubs, high schools, universities, or regional youth groups.
              </p>
            </div>

            <div className="bg-[#F8F8F6] p-5 rounded-lg border-2 border-slate-900">
              <span className="text-xs font-heading font-black text-[#2C57C4] uppercase block mb-2">PILLAR 02</span>
              <h4 className="text-sm font-heading font-black text-slate-900 mb-2 uppercase">Global Peer Network</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-body font-normal">
                Connect and brainstorm directly with chapter founders, global ambassadors, and passionate youth advocates worldwide.
              </p>
            </div>

            <div className="bg-[#F8F8F6] p-5 rounded-lg border-2 border-slate-900">
              <span className="text-xs font-heading font-black text-[#2C57C4] uppercase block mb-2">PILLAR 03</span>
              <h4 className="text-sm font-heading font-black text-slate-900 mb-2 uppercase">Creative Autonomy</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-body font-normal">
                Complete freedom to innovate your own workshops, panels, podcasts, local campaigns, or youth initiatives that fit your community.
              </p>
            </div>

            <div className="bg-[#F8F8F6] p-5 rounded-lg border-2 border-slate-900">
              <span className="text-xs font-heading font-black text-[#2C57C4] uppercase block mb-2">PILLAR 04</span>
              <h4 className="text-sm font-heading font-black text-slate-900 mb-2 uppercase">Global Recognition</h4>
              <p className="text-xs text-slate-700 leading-relaxed font-body font-normal">
                Founding Chapter Director certificates, letters of recommendation, and priority board appointments.
              </p>
            </div>
          </div>

          {/* Bottom Callout in Box */}
          <div className="mt-8 pt-6 border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#2C57C4] shrink-0" />
              <div>
                <h5 className="font-heading font-black text-sm text-slate-900 uppercase">
                  Open Worldwide to Students & Community Advocates
                </h5>
                <p className="text-xs text-slate-600 font-medium">
                  No campus or school enrollment required. Anyone anywhere can start a local or regional chapter.
                </p>
              </div>
            </div>

            <a
              href={googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer whitespace-nowrap"
            >
              <span>Apply via Google Form</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
