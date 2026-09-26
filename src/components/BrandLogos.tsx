import React from 'react';
import { GENERAL_MEMBERSHIP_FORM_URL, BOARD_APPLICATION_FORM_URL } from '../data/links';

interface PrimaryLogoProps {
  className?: string;
  variant?: 'blob' | 'clean' | 'badge' | 'inverted';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Official MARKET4MED Primary Logo (Cloud / Pebble & Clean variants)
 * Used in the Website Hero and main presentations.
 * - Colors: #2C57C4 (Royal Blue), #FF66C4 (Vibrant Pink), #F4F4F3 (Off-white)
 * - Features: Horizontal organic cloud, pink '4', sparkle burst by the 'D', and 'WHERE MEDICINE MEETS BUSINESS'
 */
export function Market4MedPrimaryLogo({
  className = '',
  variant = 'blob',
  size = 'md',
}: PrimaryLogoProps) {
  const scale = {
    sm: { width: 150, height: 48, fontSize: 'text-lg', subSize: 'text-[7px]' },
    md: { width: 220, height: 70, fontSize: 'text-2xl', subSize: 'text-[9px]' },
    lg: { width: 320, height: 100, fontSize: 'text-4xl', subSize: 'text-[12px]' },
    xl: { width: 440, height: 140, fontSize: 'text-5xl', subSize: 'text-[15px]' },
  }[size];

  if (variant === 'blob') {
    return (
      <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
        {/* Organic Cloud / Pebble SVG Container from Branding Slide 1 & 3 */}
        <svg
          viewBox="0 0 520 220"
          className="w-full h-auto drop-shadow-md transition-transform hover:scale-[1.02]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Organic white/off-white cloud silhouette */}
          <path
            d="M80 110C65 110 50 120 40 135C30 150 35 170 50 185C65 200 90 205 120 205C150 205 380 205 420 205C455 205 480 190 490 170C500 150 495 130 480 115C465 100 450 100 440 85C425 60 400 45 370 40C340 35 320 45 300 55C280 40 250 30 220 30C180 30 150 50 135 75C120 70 100 75 85 90C75 100 80 110 80 110Z"
            fill="#FFFFFF"
          />
          {/* Subtle inner soft tint */}
          <path
            d="M85 112C72 112 58 121 50 134C41 147 45 165 58 178C71 191 93 196 120 196H420C450 196 472 183 481 166C490 148 485 131 472 118C459 105 446 104 437 91C424 69 402 55 375 51C348 46 330 55 312 64C294 51 267 42 240 42C204 42 177 60 163 82C150 78 132 82 118 95C109 104 114 112 85 112Z"
            fill="#F4F4F3"
            opacity="0.5"
          />

          {/* Unified Centered Text using tspan to prevent letter overlap or drift */}
          <text
            x="260"
            y="134"
            textAnchor="middle"
            fontFamily="'League Spartan', 'Alyssum', sans-serif"
            fontWeight="900"
            fontSize="54"
            letterSpacing="1"
          >
            <tspan fill="#2C57C4">MARKET</tspan>
            <tspan fill="#FF66C4" fontSize="58"> 4 </tspan>
            <tspan fill="#2C57C4">MED</tspan>
          </text>

          {/* Radiating Sparkle Burst beside MED */}
          <g transform="translate(420, 94)" stroke="#FF66C4" strokeWidth="4.5" strokeLinecap="round">
            <line x1="0" y1="0" x2="16" y2="-10" />
            <line x1="3" y1="8" x2="22" y2="4" />
            <line x1="2" y1="18" x2="18" y2="24" />
            <line x1="-3" y1="-8" x2="4" y2="-22" />
          </g>

          {/* Subtitle: WHERE MEDICINE MEETS BUSINESS */}
          <text
            x="260"
            y="166"
            textAnchor="middle"
            fill="#2C57C4"
            fontFamily="'Outfit', 'Glacial Indifference', sans-serif"
            fontWeight="700"
            fontSize="12.5"
            letterSpacing="3.5"
          >
            WHERE MEDICINE MEETS BUSINESS
          </text>
        </svg>
      </div>
    );
  }

  // Clean / Inverted Typography Variant
  const isBlueText = variant !== 'inverted';
  const primaryTextColor = isBlueText ? 'text-[#2C57C4]' : 'text-white';
  const subtitleColor = isBlueText ? 'text-[#2C57C4]' : 'text-white/90';

  return (
    <div className={`inline-flex flex-col select-none ${className}`}>
      <div className="flex items-center">
        <span
          className={`font-heading font-black tracking-tight ${primaryTextColor} ${scale.fontSize}`}
          style={{ letterSpacing: '0.02em' }}
        >
          MARKET
          <span className="text-[#FF66C4] font-black mx-[1px]">4</span>
          MED
        </span>

        {/* Radiating Pink Sparkle Burst beside MED */}
        <div className="relative ml-1 w-5 h-5 flex items-center justify-center text-[#FF66C4]">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="12" y1="2" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="2" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="22" y2="12" />
            <line x1="5" y1="5" x2="8" y2="8" />
            <line x1="16" y1="16" x2="19" y2="19" />
            <line x1="5" y1="19" x2="8" y2="16" />
            <line x1="16" y1="8" x2="19" y2="5" />
          </svg>
        </div>
      </div>

      <span
        className={`font-body font-bold uppercase tracking-[0.25em] ${subtitleColor} ${scale.subSize} -mt-0.5`}
      >
        Where Medicine Meets Business
      </span>
    </div>
  );
}

/**
 * Official MARKET4MED Secondary Circular Badge Logo
 * Exactly matching uploaded Image 2:
 * - Clean white circular center
 * - Signature hot pink outer ring (#FF66C4)
 * - Stacked brand typography:
 *     Line 1: MARKET (#2C57C4)
 *     Line 2: 4MED (#FF66C4 '4', #2C57C4 'MED')
 *     Line 3: WHERE MEDICINE MEETS BUSINESS (#2C57C4)
 */
export function Market4MedSecondaryLogo({
  className = '',
  size = 46,
  withBackground = false,
}: {
  className?: string;
  size?: number;
  withBackground?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      className={`select-none shrink-0 drop-shadow-xs ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Optional Royal Blue Background from Image 2 */}
      {withBackground && (
        <rect width="500" height="500" rx="36" fill="#2C57C4" />
      )}

      {/* Outer Vibrant Hot Pink Ring Border & Clean White Fill */}
      <circle
        cx="250"
        cy="250"
        r="200"
        stroke="#FF66C4"
        strokeWidth="18"
        fill="#FFFFFF"
      />

      {/* Line 1: MARKET */}
      <text
        x="250"
        y="210"
        textAnchor="middle"
        fill="#2C57C4"
        fontFamily="'League Spartan', 'Plus Jakarta Sans', -apple-system, sans-serif"
        fontWeight="900"
        fontSize="64"
        letterSpacing="1.5"
      >
        MARKET
      </text>

      {/* Line 2: 4MED */}
      <text
        x="250"
        y="285"
        textAnchor="middle"
        fontFamily="'League Spartan', 'Plus Jakarta Sans', -apple-system, sans-serif"
        fontWeight="900"
        fontSize="68"
        letterSpacing="1"
      >
        <tspan fill="#FF66C4">4</tspan>
        <tspan fill="#2C57C4">MED</tspan>
      </text>

      {/* Line 3: WHERE MEDICINE MEETS BUSINESS */}
      <text
        x="250"
        y="325"
        textAnchor="middle"
        fill="#2C57C4"
        fontFamily="'Outfit', -apple-system, sans-serif"
        fontWeight="800"
        fontSize="13"
        letterSpacing="3.5"
      >
        WHERE MEDICINE MEETS BUSINESS
      </text>
    </svg>
  );
}

/**
 * Pixel-Perfect Navbar Brand Lockup (Top-Left)
 * Displays the authentic Image 2 circular emblem paired with crisp responsive typography
 */
export function Market4MedNavbarLogo({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Image 2 Circular Badge Logo */}
      <div className="relative flex items-center justify-center shrink-0">
        <Market4MedSecondaryLogo
          size={48}
          className="hover:scale-105 transition-transform drop-shadow-xs"
        />
      </div>

      {/* Clean Brand Lockup Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-[#2C57C4]">
            MARKET<span className="text-[#FF66C4]">4</span>MED
          </span>
          <span className="text-[#FF66C4] text-xs sm:text-sm font-black leading-none drop-shadow-2xs">✦</span>
        </div>
        <span className="font-heading font-bold text-[8px] sm:text-[9.5px] uppercase tracking-[0.2em] text-[#2C57C4]/80 mt-1 whitespace-nowrap">
          Where Medicine Meets Business
        </span>
      </div>
    </div>
  );
}

/**
 * Decorative 4-Point Starburst
 * Matches social graphics and branding slides
 */
export function BrandStar({
  className = '',
  color = '#FF66C4',
  size = 24,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={`inline-block ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
    </svg>
  );
}

/**
 * Retro Film / Event Ticket Stub
 * From Intro Meeting Post graphic: "FOR NEW MEMBERS"
 */
export function BrandTicketStub({
  title = 'INTRODUCTORY MEETING',
  subtitle = 'FOR NEW MEMBERS',
  date = 'SATURDAY, SEPTEMBER 5TH',
  time = '1:00 PM PST · VIRTUAL ZOOM',
  onApply,
}: {
  title?: string;
  subtitle?: string;
  date?: string;
  time?: string;
  onApply?: () => void;
}) {
  return (
    <div className="relative bg-[#FF66C4] text-white rounded-xl p-6 sm:p-7 border-3 border-slate-900 m4m-editorial-shadow overflow-hidden">
      {/* Ticket Cutouts on Left and Right */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F8F8F6] border-2 border-slate-900" />
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F8F8F6] border-2 border-slate-900" />

      <div className="relative px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-dashed border-slate-900/40">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white text-slate-900 text-xs font-heading font-black tracking-widest uppercase mb-2 border border-slate-900">
              <span>✦ {subtitle}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-white uppercase drop-shadow-sm">
              {title}
            </h3>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-900 inline-block font-bold">EVENT PASS</span>
            <div className="font-heading font-black text-xl text-white mt-1">#M4M-2026</div>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <p className="text-[11px] uppercase tracking-wider font-heading font-bold text-slate-900 bg-white/70 px-1.5 py-0.5 rounded inline-block">Session Logistics</p>
            <p className="font-heading font-black text-white text-base sm:text-lg">{date}</p>
            <p className="text-xs text-white font-medium">{time}</p>
          </div>

          <a
            href={GENERAL_MEMBERSHIP_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-white text-slate-900 font-heading font-black text-sm tracking-wide border-2 border-slate-900 m4m-editorial-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
          >
            <span>RSVP · MEMBERSHIP FORM</span>
            <span className="text-[#FF66C4]">✦</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Billboard Announcement Component
 * Matches Slide 8 ("2026-2027 BOARD APPLICATIONS ARE OPEN")
 */
export function BrandBillboardBanner({
  onApply,
}: {
  onApply?: () => void;
}) {
  return (
    <div className="relative w-full bg-[#2C57C4] rounded-2xl p-6 sm:p-8 text-white overflow-hidden border-3 border-slate-900 m4m-editorial-shadow">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />

      {/* Retro Starburst Accents */}
      <BrandStar color="#FF66C4" size={36} className="absolute top-4 right-6 animate-pulse" />
      <BrandStar color="#FFFFFF" size={22} className="absolute bottom-4 left-6 opacity-80" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FF66C4] text-white text-xs font-heading font-black tracking-widest uppercase mb-3 border border-slate-900 shadow-xs">
            <span>★ LEADERSHIP RECRUITMENT ACTIVE ★</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase tracking-tight leading-tight text-white drop-shadow-sm">
            2026–2027 BOARD APPLICATIONS <br />
            <span className="text-[#FF66C4] bg-slate-900 px-2 py-0.5 rounded inline-block mt-1">ARE OFFICIALLY OPEN</span>
          </h2>

          <p className="text-white/95 text-sm sm:text-base font-body font-medium mt-3 leading-relaxed">
            Join the executive team shaping healthcare literacy, workshop series, and clinical-business research worldwide.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start md:items-center gap-3 shrink-0">
          <div className="bg-white px-4 py-2.5 rounded-lg border-2 border-slate-900 text-center text-slate-900">
            <span className="text-[10px] uppercase font-heading font-black text-slate-600 block">APPLICATION DEADLINE</span>
            <span className="text-sm font-heading font-black text-[#2C57C4]">2026–2027 CYCLE</span>
          </div>

          <a
            href={BOARD_APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-sm uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
          >
            <span>APPLY FOR BOARD</span>
            <span className="text-xl leading-none">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function TikTokIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.891 2.891 2.896 2.896 0 0 1-2.892-2.891 2.896 2.896 0 0 1 2.892-2.891c.314 0 .615.056.897.155V9.458a6.34 6.34 0 0 0-.897-.064 6.336 6.336 0 0 0-6.336 6.336 6.336 6.336 0 0 0 6.336 6.336 6.336 6.336 0 0 0 6.336-6.336V9.014a8.175 8.175 0 0 0 4.77 1.522V7.091a4.843 4.843 0 0 1-1-.405z" />
    </svg>
  );
}

