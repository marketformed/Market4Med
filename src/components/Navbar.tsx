import { useState } from 'react';
import { Menu, X, ArrowUpRight, Compass, ShieldCheck, Palette, ExternalLink, Sparkles, Globe } from 'lucide-react';
import { Market4MedNavbarLogo } from './BrandLogos';
import { PageTab } from '../types';
import { GENERAL_MEMBERSHIP_FORM_URL, BOARD_APPLICATION_FORM_URL, GLOBAL_AMBASSADOR_FORM_URL } from '../data/links';

interface NavbarProps {
  siteMode?: 'current' | 'vision';
  activeTab: PageTab;
  onSelectTab: (tab: PageTab) => void;
  onOpenChapterModal: () => void;
  onOpenApplyModal: (opportunityId?: string) => void;
  onOpenBrandKitModal?: () => void;
}

export default function Navbar({
  siteMode = 'current',
  activeTab,
  onSelectTab,
  onOpenChapterModal,
  onOpenApplyModal,
  onOpenBrandKitModal,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // In Current Launch Mode, include Home, About, Opportunities, Chapters, Contact
  const navLinks: { id: PageTab; name: string }[] = siteMode === 'current'
    ? [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'opportunities', name: 'Opportunities' },
        { id: 'chapters', name: 'Chapters' },
        { id: 'contact', name: 'Contact' },
      ]
    : [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'opportunities', name: 'Opportunities' },
        { id: 'programs', name: 'Programs' },
        { id: 'events', name: 'Events' },
        { id: 'resources', name: 'Resources' },
        { id: 'chapters', name: 'Chapters' },
        { id: 'collaborations', name: 'Partners' },
        { id: 'contact', name: 'Contact' },
      ];

  const handleNavClick = (tab: PageTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="main-navigation" className="sticky top-0 z-40 bg-[#F8F8F6]/95 backdrop-blur-md border-b-2 border-slate-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Top Left */}
        <button
          onClick={() => handleNavClick('home')}
          id="nav-brand-logo"
          className="group text-left focus:outline-none focus:ring-2 focus:ring-[#2C57C4] rounded-xl p-1.5 hover:bg-white transition-colors cursor-pointer"
          aria-label="MARKET4MED Home"
        >
          <Market4MedNavbarLogo />
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1.5 text-sm font-semibold font-body">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-lg transition-all font-heading text-xs font-black uppercase tracking-wider cursor-pointer ${
                  isActive
                    ? 'bg-[#2C57C4] text-white border-2 border-slate-900 m4m-editorial-shadow-sm'
                    : 'text-slate-800 hover:text-[#2C57C4] hover:bg-white border-2 border-transparent'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {onOpenBrandKitModal && (
            <button
              id="nav-brand-kit-btn"
              onClick={onOpenBrandKitModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-heading font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg border-2 border-slate-900 transition-colors cursor-pointer"
              title="View Official Branding Guidelines & Color Codes"
            >
              <Palette className="w-3.5 h-3.5 text-[#FF66C4]" />
              <span className="hidden md:inline">Brand Kit</span>
            </button>
          )}

          <button
            id="nav-start-chapter-btn"
            onClick={onOpenChapterModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-heading font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg border-2 border-slate-900 transition-colors cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-[#2C57C4]" />
            <span>Launch Chapter</span>
          </button>

          {/* Executive Board Application */}
          <a
            id="nav-board-app-btn"
            href={BOARD_APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-heading font-black text-white bg-[#2C57C4] hover:bg-[#23459c] rounded-lg border-2 border-slate-900 transition-colors cursor-pointer uppercase tracking-wider shadow-xs"
          >
            <Sparkles className="w-3 h-3 text-[#FF66C4]" />
            <span>Board App</span>
            <ExternalLink className="w-3 h-3 text-white" />
          </a>

          {/* General Membership */}
          <a
            id="nav-join-network-btn"
            href={GENERAL_MEMBERSHIP_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-heading font-black text-white bg-[#FF66C4] hover:bg-[#ff4db9] rounded-lg border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer uppercase tracking-wider"
          >
            <span>Join Member</span>
            <ExternalLink className="w-3 h-3 text-white" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#2C57C4]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-dropdown" className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-heading font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2C57C4] text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-[#2C57C4]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              {onOpenBrandKitModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrandKitModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-heading font-bold text-[#2C57C4] bg-[#2C57C4]/10 rounded-xl cursor-pointer"
                >
                  <Palette className="w-4 h-4 text-[#FF66C4]" />
                  <span>Official Brand Guidelines & Hex Colors</span>
                </button>
              )}
              <button
                id="mobile-start-chapter-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChapterModal();
                }}
                className="w-full text-center py-2.5 px-4 text-sm font-heading font-bold text-slate-800 bg-[#F4F4F3] rounded-xl hover:bg-slate-200 cursor-pointer"
              >
                Launch a Chapter (Community or School)
              </button>
              <a
                id="mobile-ambassador-btn"
                href={GLOBAL_AMBASSADOR_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-heading font-black text-white bg-[#FF66C4] rounded-xl hover:bg-[#ff4db9] cursor-pointer uppercase tracking-wider border-2 border-slate-900 shadow-xs"
              >
                <Globe className="w-4 h-4 text-white" />
                <span>Apply as Global Ambassador</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
              <a
                id="mobile-board-btn"
                href={BOARD_APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-heading font-black text-white bg-[#2C57C4] rounded-xl hover:bg-[#23459c] cursor-pointer uppercase tracking-wider border-2 border-slate-900"
              >
                <span>Apply for Executive Board</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
              <a
                id="mobile-apply-btn"
                href={GENERAL_MEMBERSHIP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-heading font-black text-slate-900 bg-white rounded-xl hover:bg-slate-100 cursor-pointer uppercase tracking-wider border-2 border-slate-900"
              >
                <span>General Membership Form</span>
                <ExternalLink className="w-4 h-4 text-slate-900" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
