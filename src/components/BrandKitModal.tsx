import React, { useState } from 'react';
import { X, Check, Copy, Download, Sparkles, ExternalLink, Palette, Type, Shield } from 'lucide-react';
import { Market4MedPrimaryLogo, Market4MedSecondaryLogo, BrandStar, TikTokIcon, SubstackIcon } from './BrandLogos';
import { INSTAGRAM_URL, TIKTOK_URL, SUBSTACK_URL } from '../data/links';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrandKitModal({ isOpen, onClose }: BrandKitModalProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  if (!isOpen) return null;

  const brandColors = [
    {
      name: 'Primary Royal Blue',
      hex: '#2C57C4',
      role: 'Primary Brand Color · Dominant Background & Headings',
      textClass: 'text-white',
    },
    {
      name: 'Primary Bubblegum Pink',
      hex: '#FF66C4',
      role: 'Primary Accent · "4" · Sparkles · Highlights · Callouts',
      textClass: 'text-white',
    },
    {
      name: 'Primary Off-White',
      hex: '#F4F4F3',
      role: 'Neutral Canvas · Soft Card Surfaces · Clean Contrast',
      textClass: 'text-slate-900',
    },
    {
      name: 'Secondary Deep Navy',
      hex: '#3252AD',
      role: 'Secondary Blue · High Contrast Sections · Borders',
      textClass: 'text-white',
    },
    {
      name: 'Midnight Black',
      hex: '#000000',
      role: 'Pure Black · Primary Body Text · High Legibility',
      textClass: 'text-white',
    },
    {
      name: 'Lavender Purple',
      hex: '#A568D4',
      role: 'Secondary Accent · 3D Text Shadows · Comic Accents',
      textClass: 'text-white',
    },
  ];

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border-4 border-[#2C57C4] overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#2C57C4] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF66C4] text-white text-xs font-heading font-black tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL BRANDING SPECIFICATIONS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight uppercase">
            MARKET<span className="text-[#FF66C4]">4</span>MED Brand Identity
          </h2>
          <p className="text-white/90 text-sm sm:text-base font-body mt-2 max-w-xl">
            Official guidelines, color codes, typography pairings, and vector logo assets for campus chapters, press, and partners.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto bg-[#F4F4F3]">
          {/* Logo Showcase Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[#2C57C4]" />
              <h3 className="text-lg font-heading font-black uppercase text-[#2C57C4]">
                1. Official Logos & Usage
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Primary Logo (Blob) */}
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200/80 shadow-xs flex flex-col items-center justify-between text-center">
                <div className="w-full py-6 flex items-center justify-center bg-[#2C57C4] rounded-xl relative overflow-hidden mb-4">
                  <div className="max-w-[280px]">
                    <Market4MedPrimaryLogo variant="blob" size="md" />
                  </div>
                </div>
                <div className="text-left w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-[#2C57C4] text-base">Primary Cloud Logo</h4>
                    <span className="text-[10px] uppercase font-bold bg-[#FF66C4]/10 text-[#FF66C4] px-2 py-0.5 rounded-md">Official</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Main logo used for website hero, primary presentation headers, social media banners, and official publications.
                  </p>
                </div>
              </div>

              {/* Secondary Logo (Circular Badge) */}
              <div className="bg-white rounded-2xl p-6 border-2 border-slate-200/80 shadow-xs flex flex-col items-center justify-between text-center">
                <div className="w-full py-6 flex items-center justify-center bg-[#2C57C4] rounded-xl relative overflow-hidden mb-4">
                  <Market4MedSecondaryLogo size={130} />
                </div>
                <div className="text-left w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="font-heading font-bold text-[#2C57C4] text-base">Secondary Circular Badge</h4>
                    <span className="text-[10px] uppercase font-bold bg-[#2C57C4]/10 text-[#2C57C4] px-2 py-0.5 rounded-md">Profiles & Favicon</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Official circular badge from brand guidelines. Used for Instagram & LinkedIn profile avatars, document stamps, email signatures, and browser favicon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Color Palette Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-[#2C57C4]" />
                <h3 className="text-lg font-heading font-black uppercase text-[#2C57C4]">
                  2. Official Color Palette
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">Click card to copy hex</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {brandColors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => handleCopyHex(c.hex)}
                  className="group relative rounded-2xl p-4 text-left transition-all hover:scale-[1.02] shadow-sm hover:shadow-md cursor-pointer border border-black/10"
                  style={{ backgroundColor: c.hex }}
                >
                  <div className="flex items-start justify-between">
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${c.textClass}`}>
                      {c.hex}
                    </span>
                    <span
                      className={`p-1.5 rounded-lg backdrop-blur-xs transition-opacity ${
                        copiedHex === c.hex ? 'opacity-100 bg-white text-black' : 'opacity-70 group-hover:opacity-100 bg-black/10 ' + c.textClass
                      }`}
                    >
                      {copiedHex === c.hex ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h4 className={`font-heading font-black text-base ${c.textClass}`}>
                      {c.name}
                    </h4>
                    <p className={`text-xs mt-0.5 opacity-90 ${c.textClass}`}>
                      {c.role}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Typography System */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Type className="w-5 h-5 text-[#2C57C4]" />
              <h3 className="text-lg font-heading font-black uppercase text-[#2C57C4]">
                3. Typography Hierarchy
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-[#FF66C4] tracking-widest block mb-2">
                  HEADING FONT
                </span>
                <p className="font-heading font-black text-2xl text-[#2C57C4] uppercase">
                  Alyssum
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Bold, rounded geometric display font for high-impact titles, billboard headlines, and acronyms.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-[#2C57C4] tracking-widest block mb-2">
                  SUB-HEADING FONT
                </span>
                <p className="font-body font-bold text-xl text-slate-900">
                  Glacial Indifference (Bold)
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Used for section labels, card headers, dates, and ticket stub metadata.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                <span className="text-[10px] uppercase font-bold text-[#3252AD] tracking-widest block mb-2">
                  BODY TEXT FONT
                </span>
                <p className="font-body text-base text-slate-700">
                  Glacial Indifference (Regular)
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Generously spaced, modern geometric sans-serif for comfortable reading across all devices.
                </p>
              </div>
            </div>
          </div>

          {/* Social Identity */}
          <div className="bg-[#2C57C4] text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <BrandStar size={20} color="#FF66C4" />
                <h4 className="font-heading font-black uppercase text-lg">Official Instagram: @market4med</h4>
              </div>
              <p className="text-xs sm:text-sm text-white/90 mt-1 font-body">
                "Youth Organization · Volunteering | Workshops | Leadership · Bridging medicine & business"
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-heading font-black text-xs uppercase tracking-wider shadow-md transition-all shrink-0"
              >
                <SubstackIcon size={12} className="text-[#FF66C4]" />
                <span>Substack</span>
                <ExternalLink className="w-3 h-3 text-slate-900" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-xs uppercase tracking-wider shadow-md transition-all shrink-0"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white font-heading font-black text-xs uppercase tracking-wider shadow-md transition-all shrink-0"
              >
                <TikTokIcon size={13} className="text-white" />
                <span>TikTok</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            MARKET4MED Brand Standards · Version 2026.1
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
