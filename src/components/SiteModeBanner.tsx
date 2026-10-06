import React from 'react';
import { Sparkles, Layers, ShieldCheck, Download, ChevronRight, Check, X, EyeOff, Lock } from 'lucide-react';

interface SiteModeBannerProps {
  siteMode: 'current' | 'vision';
  onToggleSiteMode: (mode: 'current' | 'vision') => void;
  onOpenDuplicateModal: () => void;
  onHideBanner: () => void;
  onLockAdmin?: () => void;
}

export default function SiteModeBanner({
  siteMode,
  onToggleSiteMode,
  onOpenDuplicateModal,
  onHideBanner,
  onLockAdmin
}: SiteModeBannerProps) {
  return (
    <aside
      aria-label="Website Admin and Mode Control"
      className="bg-slate-900 text-white border-b-2 border-slate-950 text-xs py-2 px-4 transition-all relative z-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        {/* Left: Mode Indicator */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-heading font-black uppercase tracking-wider bg-white/10 text-white border border-white/20">
            {siteMode === 'current' ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Live Mode: 100% Accurate Launch</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3 h-3 text-[#FF66C4]" />
                <span>Preview: Future Expansion State</span>
              </>
            )}
          </span>

          <span className="text-slate-300 text-[11px] hidden md:inline font-body">
            {siteMode === 'current'
              ? 'Public View: Global Ambassadors, General Membership, and Chapters (Community & School).'
              : 'Expansion Draft: Programs, Events, and Partners.'}
          </span>
        </div>

        {/* Right: Controls & Dismiss */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Quick Toggle Switch */}
          <div className="inline-flex items-center rounded-lg bg-slate-800 p-0.5 border border-slate-700 text-[11px] font-heading font-bold">
            <button
              onClick={() => onToggleSiteMode('current')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                siteMode === 'current'
                  ? 'bg-[#2C57C4] text-white font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Current (Accurate)
            </button>
            <button
              onClick={() => onToggleSiteMode('vision')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                siteMode === 'vision'
                  ? 'bg-[#FF66C4] text-white font-black'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Vision (Future Preview)
            </button>
          </div>

          {/* Backup / Duplicate Button */}
          <button
            onClick={onOpenDuplicateModal}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white hover:text-slate-900 text-white text-[11px] font-heading font-bold border border-white/20 transition-all cursor-pointer"
            title="Download full backup or duplicate site"
          >
            <Layers className="w-3 h-3 text-[#FF66C4]" />
            <span className="hidden sm:inline">Backup / Duplicate</span>
          </button>

          {/* Lock / Log Out Admin */}
          {onLockAdmin && (
            <button
              onClick={onLockAdmin}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-rose-500/20 hover:bg-rose-500 hover:text-white text-rose-300 text-[11px] font-heading font-bold border border-rose-500/30 transition-all cursor-pointer"
              title="Lock Admin & Revert to Public View"
            >
              <Lock className="w-3 h-3" />
              <span>Lock Admin</span>
            </button>
          )}

          {/* Hide / Dismiss for Clean Custom Domain View */}
          <button
            onClick={onHideBanner}
            className="p-1 rounded-md hover:bg-white/20 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
            title="Minimize this admin bar"
            aria-label="Minimize admin banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
