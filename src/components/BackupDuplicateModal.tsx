import React, { useState } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Calendar,
  HeartHandshake,
  TrendingUp,
  FileCode2,
  ExternalLink,
  Info
} from 'lucide-react';
import {
  ACCURATE_METRICS,
  VISION_METRICS,
  ACCURATE_EVENTS,
  VISION_EVENTS,
  ACCURATE_OPPORTUNITIES,
  VISION_OPPORTUNITIES,
  PROGRAMS,
  RESOURCES,
  PILLARS
} from '../data/mockData';
import {
  GLOBAL_AMBASSADOR_FORM_URL,
  GENERAL_MEMBERSHIP_FORM_URL,
  DEFAULT_CHAPTER_GOOGLE_FORM_URL,
  OFFICIAL_EMAIL,
  INSTAGRAM_URL,
  SUBSTACK_URL
} from '../data/links';
import { downloadDeployZip, downloadSourceZip } from '../utils/downloadHelper';

interface BackupDuplicateModalProps {
  isOpen: boolean;
  onClose: () => void;
  siteMode: 'current' | 'vision';
  onToggleSiteMode: (mode: 'current' | 'vision') => void;
}

export default function BackupDuplicateModal({
  isOpen,
  onClose,
  siteMode,
  onToggleSiteMode
}: BackupDuplicateModalProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [deployZipSuccess, setDeployZipSuccess] = useState(false);
  const [sourceZipSuccess, setSourceZipSuccess] = useState(false);

  const handleDownloadDeploy = () => {
    const ok = downloadDeployZip();
    if (ok) {
      setDeployZipSuccess(true);
      setTimeout(() => setDeployZipSuccess(false), 3000);
    }
  };

  const handleDownloadSource = () => {
    const ok = downloadSourceZip();
    if (ok) {
      setSourceZipSuccess(true);
      setTimeout(() => setSourceZipSuccess(false), 3000);
    }
  };

  if (!isOpen) return null;

  const handleDownloadFullBackup = () => {
    const backupData = {
      project: 'MARKET4MED',
      tagline: 'Where Medicine Meets Business',
      exportDate: new Date().toISOString(),
      activeMode: siteMode,
      links: {
        globalAmbassadorUrl: GLOBAL_AMBASSADOR_FORM_URL,
        generalMembershipUrl: GENERAL_MEMBERSHIP_FORM_URL,
        chapterInterestUrl: DEFAULT_CHAPTER_GOOGLE_FORM_URL,
        email: OFFICIAL_EMAIL,
        instagram: INSTAGRAM_URL,
        substack: SUBSTACK_URL
      },
      currentLaunchState: {
        status: 'Accurate Founding Stage (No fake stats, no fake symposiums, no fake volunteer roles)',
        metrics: ACCURATE_METRICS,
        events: ACCURATE_EVENTS,
        opportunities: ACCURATE_OPPORTUNITIES
      },
      visionExpansionState: {
        status: 'Future Expansion State (Includes Annual Symposium, Volunteer Roles, and Projected Scaling Metrics)',
        metrics: VISION_METRICS,
        events: VISION_EVENTS,
        opportunities: VISION_OPPORTUNITIES
      },
      coreContent: {
        pillars: PILLARS,
        programs: PROGRAMS,
        resources: RESOURCES
      }
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `market4med-full-site-backup-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handleCopyShareUrl = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl m4m-editorial-shadow border-3 border-slate-900 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#2C57C4] text-white border-b-3 border-slate-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white text-[#2C57C4] flex items-center justify-center border-2 border-slate-900 m4m-editorial-shadow-sm font-black">
              <Layers className="w-5 h-5 text-[#2C57C4]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-heading font-black uppercase tracking-widest text-[#FF66C4] bg-slate-900 px-2 py-0.5 rounded border border-white/20">
                <span>Duplicate & Archive Center</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-black uppercase text-white tracking-tight">
                Website Versions & Backup Manager
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white text-slate-900 hover:bg-[#FF66C4] hover:text-white border-2 border-slate-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 font-body text-slate-800">
          {/* Explanation Alert */}
          <div className="p-4 rounded-xl bg-[#F8F8F6] border-2 border-slate-900 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#2C57C4] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm space-y-1">
              <p className="font-heading font-black text-slate-900 uppercase">
                Nothing Is Lost — Both Versions Are Preserved
              </p>
              <p className="text-slate-700 leading-relaxed">
                You can keep this live site 100% accurate for current recruitment (board members & founding chapters), while preserving all future symposium drafts, volunteer programs, and expansion metrics. You can switch between them anytime with a single click or export the entire backup!
              </p>
            </div>
          </div>

          {/* Section 1: Live Version Switcher */}
          <div>
            <h3 className="text-sm font-heading font-black text-[#2C57C4] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF66C4]" />
              <span>1. Active Website Mode</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option A: Current Launch Mode */}
              <div
                onClick={() => onToggleSiteMode('current')}
                className={`p-5 rounded-xl border-3 transition-all cursor-pointer flex flex-col justify-between ${
                  siteMode === 'current'
                    ? 'border-slate-900 bg-white m4m-editorial-shadow ring-2 ring-[#2C57C4]'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-400 opacity-80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-heading font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                      Recommended for Live Site
                    </span>
                    {siteMode === 'current' && (
                      <span className="w-6 h-6 rounded-full bg-[#2C57C4] text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-heading font-black text-slate-900 uppercase mb-1">
                    Current Launch Mode (100% Accurate)
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Reflects the exact stage today: Global Ambassador & Chapter recruitment, General Membership, and Substack publication. Zero fake numbers, zero fake symposiums, and no fake volunteer claims.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-[11px] font-heading font-black text-[#2C57C4] uppercase flex items-center gap-1">
                  <span>{siteMode === 'current' ? 'Currently Active' : 'Switch to Accurate Launch Mode'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Option B: Vision / Expansion Preview Mode */}
              <div
                onClick={() => onToggleSiteMode('vision')}
                className={`p-5 rounded-xl border-3 transition-all cursor-pointer flex flex-col justify-between ${
                  siteMode === 'vision'
                    ? 'border-slate-900 bg-white m4m-editorial-shadow ring-2 ring-[#FF66C4]'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-400 opacity-80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-heading font-black uppercase tracking-wider px-2 py-0.5 rounded bg-purple-100 text-purple-800 border border-purple-300">
                      Future Vision Preview
                    </span>
                    {siteMode === 'vision' && (
                      <span className="w-6 h-6 rounded-full bg-[#FF66C4] text-white flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-heading font-black text-slate-900 uppercase mb-1">
                    Vision / Expansion Preview Mode
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Brings back the Annual Fall Symposium, Community Volunteer Advocate program, and projected scaling milestones (1,850+ scholars, 45+ mentors) so you can preview your future expanded organization.
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-[11px] font-heading font-black text-[#FF66C4] uppercase flex items-center gap-1">
                  <span>{siteMode === 'vision' ? 'Currently Active' : 'Preview Future Expansion State'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Direct Code & Data Downloads */}
          <div className="p-5 rounded-xl bg-[#F8F8F6] border-2 border-slate-900 space-y-4">
            <div>
              <h3 className="text-sm font-heading font-black text-slate-900 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Download className="w-4 h-4 text-[#2C57C4]" />
                <span>2. Direct Downloads (Works Instantly in Any Browser)</span>
              </h3>
              <p className="text-xs text-slate-600">
                Download the production deploy package for Netlify Drop, the complete source code, or the JSON data backup directly to your computer.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <button
                onClick={handleDownloadDeploy}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all cursor-pointer"
                title="Download ready-to-deploy zip for Netlify Drop"
              >
                {deployZipSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950" />
                    <span>Saved to Downloads!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-slate-950" />
                    <span>Deploy ZIP (Netlify)</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadSource}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#2C57C4] hover:bg-[#1E3E8F] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all cursor-pointer"
                title="Download full project source code"
              >
                {sourceZipSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Saved to Downloads!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-white" />
                    <span>Source Code (ZIP)</span>
                  </>
                )}
              </button>

              <button
                onClick={handleDownloadFullBackup}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-heading font-bold text-xs uppercase tracking-wider border-2 border-slate-900 transition-all cursor-pointer"
                title="Download JSON data snapshot"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <FileCode2 className="w-4 h-4 text-slate-600" />
                    <span>Data Backup (JSON)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Section 3: How to Duplicate Website in AI Studio & GitHub */}
          <div className="space-y-3">
            <h3 className="text-sm font-heading font-black text-[#2C57C4] uppercase tracking-wider flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-[#2C57C4]" />
              <span>3. How to Duplicate / Copy This Website</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="p-4 rounded-xl bg-white border-2 border-slate-200 space-y-2">
                <span className="font-heading font-black text-slate-900 uppercase text-xs block">
                  Method A: Duplicate Directly in Google AI Studio
                </span>
                <p className="leading-relaxed">
                  In Google AI Studio Build, you can duplicate this exact applet anytime:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 pl-1">
                  <li>Click the project options menu (top header or dashboard)</li>
                  <li>Select <strong>"Duplicate Applet"</strong> or <strong>"Clone Project"</strong></li>
                  <li>You will now have two independent copies: keep one as your active live launch site and the other as your future staging sandbox!</li>
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-white border-2 border-slate-200 space-y-2">
                <span className="font-heading font-black text-slate-900 uppercase text-xs block">
                  Method B: Export or Fork to GitHub
                </span>
                <p className="leading-relaxed">
                  You can connect or push this project to your GitHub account to create version branches (e.g. <code className="bg-slate-100 px-1 py-0.5 rounded text-[#2C57C4] font-mono">main-launch</code> for today's recruitment and <code className="bg-slate-100 px-1 py-0.5 rounded text-[#2C57C4] font-mono">future-expansion</code> for the symposium).
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Current Active Links Verification */}
          <div className="p-4 rounded-xl bg-white border border-slate-300 space-y-2">
            <span className="font-heading font-bold text-slate-800 uppercase text-[11px] block">
              Configured Form Endpoints:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-heading font-black text-[#2C57C4] block text-[11px] uppercase">Global Ambassador Form:</span>
                  <span className="text-[11px] text-slate-600 truncate block max-w-[200px]">{GLOBAL_AMBASSADOR_FORM_URL}</span>
                </div>
                <a href={GLOBAL_AMBASSADOR_FORM_URL} target="_blank" rel="noreferrer" className="text-[#2C57C4] hover:text-[#FF66C4]">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="font-heading font-black text-[#FF66C4] block text-[11px] uppercase">General Membership Form:</span>
                  <span className="text-[11px] text-slate-600 truncate block max-w-[200px]">{GENERAL_MEMBERSHIP_FORM_URL}</span>
                </div>
                <a href={GENERAL_MEMBERSHIP_FORM_URL} target="_blank" rel="noreferrer" className="text-[#FF66C4] hover:text-slate-900">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between sm:col-span-2">
                <div>
                  <span className="font-heading font-black text-slate-900 block text-[11px] uppercase">Official Substack Publication:</span>
                  <span className="text-[11px] text-slate-600 truncate block">{SUBSTACK_URL}</span>
                </div>
                <a href={SUBSTACK_URL} target="_blank" rel="noreferrer" className="text-[#FF66C4] hover:text-[#2C57C4]">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F8F6] border-t-2 border-slate-900 flex items-center justify-between">
          <button
            onClick={handleCopyShareUrl}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-xs font-heading font-bold text-slate-700 hover:text-slate-900 cursor-pointer"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'URL Copied!' : 'Copy Site Link'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-[#2C57C4] hover:bg-[#23459c] text-white text-xs font-heading font-black uppercase tracking-wider border-2 border-slate-900 cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
