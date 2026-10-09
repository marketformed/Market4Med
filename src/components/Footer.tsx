import { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, CheckCircle2, Instagram, Palette, ExternalLink, Sparkles, Globe } from 'lucide-react';
import { Market4MedSecondaryLogo, TikTokIcon, SubstackIcon } from './BrandLogos';
import { PageTab } from '../types';
import { GENERAL_MEMBERSHIP_FORM_URL, GLOBAL_AMBASSADOR_FORM_URL, OFFICIAL_EMAIL, INSTAGRAM_URL, TIKTOK_URL, SUBSTACK_URL } from '../data/links';

interface FooterProps {
  siteMode?: 'current' | 'vision';
  activeTab?: PageTab;
  onSelectTab?: (tab: PageTab) => void;
  onOpenBrandKitModal?: () => void;
  onOpenDuplicateModal?: () => void;
  onToggleAdmin?: () => void;
}

export default function Footer({
  siteMode = 'current',
  activeTab,
  onSelectTab,
  onOpenBrandKitModal,
  onOpenDuplicateModal: _onOpenDuplicateModal,
  onToggleAdmin
}: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleLinkClick = (tab: PageTab) => {
    if (onSelectTab) {
      onSelectTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
  };

  return (
    <footer id="site-footer" className="bg-[#2C57C4] text-white pt-16 pb-12 border-t-4 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Bar: Context-aware to prevent repetitive banners */}
        {siteMode === 'current' && activeTab !== 'opportunities' && activeTab !== 'chapters' ? (
          <div className="bg-[#3252AD] border-3 border-slate-900 rounded-2xl p-6 sm:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 m4m-editorial-shadow-pink">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#FF66C4] font-heading font-black block mb-1">
                Student Recruitment Active
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase mb-2">
                Become a Global Ambassador or Chapter Lead
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-body leading-relaxed font-medium">
                We are actively welcoming student ambassadors, community chapter directors, and general student members across the globe.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href={GLOBAL_AMBASSADOR_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Globe className="w-3.5 h-3.5 text-white" />
                <span>Global Ambassador</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
              <button
                onClick={() => handleLinkClick('chapters')}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Launch a Chapter</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-900" />
              </button>
              <a
                href={GENERAL_MEMBERSHIP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-white/30 transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>General Member</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>
        ) : (
          /* Future Vision Mode: Newsletter Draft */
          <div className="bg-[#3252AD] border-3 border-slate-900 rounded-2xl p-6 sm:p-10 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 m4m-editorial-shadow-pink">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#FF66C4] font-heading font-black block mb-1">
                Future Intelligence Dispatch (Draft)
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase mb-2">
                Subscribe to The Med-Market Brief
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-body leading-relaxed font-medium">
                Curated articles, healthcare literacy resources, and announcements on student initiatives and executive board recruitment.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 text-white font-heading font-black text-xs sm:text-sm bg-[#FF66C4] px-5 py-3 rounded-xl border-2 border-slate-900 m4m-editorial-shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>You're subscribed! Welcome to the MARKET4MED network.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full sm:w-96">
                  <input
                    type="email"
                    required
                    placeholder="Enter university email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-white text-xs text-slate-900 placeholder-slate-500 border-2 border-slate-900 focus:outline-none focus:ring-2 focus:ring-[#FF66C4] flex-1 font-body"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 text-xs">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Market4MedSecondaryLogo size={44} />
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl tracking-tight text-white leading-none">
                  MARKET<span className="text-[#FF66C4]">4</span>MED
                </span>
                <span className="text-[10px] uppercase font-bold text-white/80 tracking-widest mt-1">
                  Where Medicine Meets Business
                </span>
              </div>
            </div>
            <p className="text-white/85 text-xs font-body leading-relaxed max-w-sm">
              The premier student-run organization bridging clinical medicine and business economics to advance healthcare literacy and investigate how psychology shapes trust in healthcare.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#FF66C4] text-white text-xs font-heading font-bold transition-colors"
                title="Official Substack @market4med"
              >
                <SubstackIcon size={14} className="text-[#FF66C4]" />
                <span>Substack</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#FF66C4] text-white text-xs font-heading font-bold transition-colors"
                title="Official Instagram @market4med"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>

              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#2C57C4] text-white text-xs font-heading font-bold transition-colors"
                title="Official TikTok @market4med"
              >
                <TikTokIcon size={14} className="text-white" />
                <span>TikTok</span>
              </a>

              {onOpenBrandKitModal && (
                <button
                  onClick={onOpenBrandKitModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-heading font-bold transition-colors cursor-pointer"
                >
                  <Palette className="w-3.5 h-3.5 text-[#FF66C4]" />
                  <span>Brand Guidelines</span>
                </button>
              )}
            </div>
          </div>

          {/* Col 1: About & Mission */}
          <div className="space-y-3 font-body">
            <h4 className="font-heading font-black text-white uppercase tracking-wider text-xs">Organization</h4>
            <ul className="space-y-2 text-white/80">
              <li><button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">Home</button></li>
              <li><button onClick={() => handleLinkClick('about')} className="hover:text-white transition-colors cursor-pointer text-left">About MARKET4MED</button></li>
              <li><button onClick={() => handleLinkClick('opportunities')} className="hover:text-white transition-colors cursor-pointer text-left font-bold text-[#FF66C4]">Student Opportunities</button></li>
              <li><button onClick={() => handleLinkClick('chapters')} className="hover:text-white transition-colors cursor-pointer text-left">Chapters (Community & School)</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer text-left">Contact Us</button></li>
            </ul>
          </div>

          {/* Col 2: Apply & Get Involved */}
          <div className="space-y-3 font-body">
            <h4 className="font-heading font-black text-white uppercase tracking-wider text-xs">Apply & Join</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href={GLOBAL_AMBASSADOR_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF66C4] font-heading font-black transition-colors inline-flex items-center gap-1 bg-[#FF66C4]/20 border border-[#FF66C4]/40 px-2 py-0.5 rounded text-xs"
                >
                  <Globe className="w-3 h-3 text-[#FF66C4]" />
                  <span>Global Ambassador Form</span>
                  <ExternalLink className="w-3 h-3 text-white" />
                </a>
              </li>
              <li>
                <a
                  href={GENERAL_MEMBERSHIP_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white font-heading font-bold transition-colors inline-flex items-center gap-1"
                >
                  <span>General Membership Form</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-[#FF66C4] font-heading font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <SubstackIcon size={12} className="text-[#FF66C4]" />
                  <span>Read Substack (@market4med)</span>
                  <ExternalLink className="w-3 h-3 text-white/70" />
                </a>
              </li>
              <li><button onClick={() => handleLinkClick('chapters')} className="hover:text-white transition-colors cursor-pointer text-left">Start a Chapter (Anywhere)</button></li>
              <li><button onClick={() => handleLinkClick('contact')} className="hover:text-white transition-colors cursor-pointer text-left">Send an Inquiry</button></li>
            </ul>
          </div>

          {/* Col 3: Looking Ahead */}
          <div className="space-y-3 font-body">
            <h4 className="font-heading font-black text-white uppercase tracking-wider text-xs">Looking Ahead</h4>
            {siteMode === 'current' ? (
              <div className="space-y-2 text-white/75 text-[11px] leading-relaxed">
                <p>
                  Currently in active launch mode focusing on Global Ambassadors, Community & School Chapters worldwide, and youth healthcare literacy advocacy.
                </p>
                <p className="text-white/60">
                  Future student research cohorts, workshops, and hospital initiatives will launch as chapters expand.
                </p>
              </div>
            ) : (
              <ul className="space-y-2 text-white/80">
                <li><button onClick={() => handleLinkClick('programs')} className="hover:text-white transition-colors cursor-pointer text-left">Programs & Workshops</button></li>
                <li><button onClick={() => handleLinkClick('events')} className="hover:text-white transition-colors cursor-pointer text-left">Symposia & Events</button></li>
                <li><button onClick={() => handleLinkClick('opportunities')} className="hover:text-white transition-colors cursor-pointer text-left">Volunteer Pathways</button></li>
                <li><button onClick={() => handleLinkClick('collaborations')} className="hover:text-white transition-colors cursor-pointer text-left">Institutional Partners</button></li>
              </ul>
            )}
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/80 font-body">
          <div>
            <button
              type="button"
              onClick={onToggleAdmin}
              className="text-left text-white/80 hover:text-white transition-colors cursor-default focus:outline-none"
              title="MARKET4MED"
            >
              © {new Date().getFullYear()} MARKET4MED. All rights reserved. Where Medicine Meets Business.
            </button>
          </div>
          <div className="flex items-center gap-3">
            <a href={`mailto:${OFFICIAL_EMAIL}`} className="hover:text-white transition-colors font-semibold">
              {OFFICIAL_EMAIL}
            </a>
            <span>·</span>
            <span>Youth Organization · Medicine | Business | Literacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
