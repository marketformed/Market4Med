import React, { useState } from 'react';
import { Lock, ShieldCheck, Key, Eye, EyeOff, AlertCircle, X, Check } from 'lucide-react';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const DEFAULT_PASSCODE = 'market4med2026';

export default function AdminAuthModal({ isOpen, onClose, onSuccess }: AdminAuthModalProps) {
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isChangingPasscode, setIsChangingPasscode] = useState(false);
  const [currentPasscodeForChange, setCurrentPasscodeForChange] = useState('');
  const [newPasscode, setNewPasscode] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const getStoredPasscode = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('market4med_admin_passcode') || DEFAULT_PASSCODE;
    }
    return DEFAULT_PASSCODE;
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const correctCode = getStoredPasscode();

    if (passcode.trim() === correctCode) {
      setError('');
      if (typeof window !== 'undefined') {
        localStorage.setItem('market4med_admin_auth', 'true');
      }
      setPasscode('');
      onSuccess();
      onClose();
    } else {
      setError('Incorrect passcode. Access is strictly restricted to MARKET4MED leadership.');
    }
  };

  const handleUpdatePasscode = (e: React.FormEvent) => {
    e.preventDefault();
    const correctCode = getStoredPasscode();

    if (currentPasscodeForChange.trim() !== correctCode) {
      setError('Current passcode is incorrect.');
      return;
    }

    if (newPasscode.trim().length < 6) {
      setError('New passcode must be at least 6 characters.');
      return;
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('market4med_admin_passcode', newPasscode.trim());
      localStorage.setItem('market4med_admin_auth', 'true');
    }
    setSuccessMsg('Passcode updated successfully!');
    setTimeout(() => {
      setSuccessMsg('');
      setIsChangingPasscode(false);
      setCurrentPasscodeForChange('');
      setNewPasscode('');
      onSuccess();
      onClose();
    }, 1000);
  };

  const handleClose = () => {
    setPasscode('');
    setError('');
    setIsChangingPasscode(false);
    setCurrentPasscodeForChange('');
    setNewPasscode('');
    setSuccessMsg('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl border-4 border-slate-900 shadow-2xl p-6 sm:p-8">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center border-2 border-slate-900 shadow-md">
            <Lock className="w-6 h-6 text-[#FF66C4]" />
          </div>
          <div>
            <h3 className="font-heading font-black text-xl text-slate-900 leading-none">
              Founder & Admin Access
            </h3>
            <p className="text-xs text-slate-500 font-body mt-1">
              Restricted portal for MARKET4MED leadership
            </p>
          </div>
        </div>

        {!isChangingPasscode ? (
          <form onSubmit={handleVerify} className="space-y-4">
            <p className="text-xs text-slate-600 font-body leading-relaxed">
              Enter your secret founder passcode to unlock the internal roadmap and site administrative controls.
            </p>

            <div className="space-y-1.5">
              <label className="block text-xs font-heading font-black text-slate-800 uppercase tracking-wider">
                Passcode
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoFocus
                  placeholder="••••••••••••"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setError('');
                  }}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-900 rounded-xl text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C57C4] pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 p-1 cursor-pointer"
                  title={showPassword ? 'Hide passcode' : 'Show passcode'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="flex flex-col gap-2 pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#2C57C4] hover:bg-[#1E3E8F] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Key className="w-4 h-4" />
                <span>Verify & Unlock</span>
              </button>

              <div className="flex items-center justify-end text-[11px] pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setError('');
                    setIsChangingPasscode(true);
                  }}
                  className="text-slate-400 hover:text-[#2C57C4] transition-colors font-semibold cursor-pointer"
                >
                  Update Passcode
                </button>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleUpdatePasscode} className="space-y-4">
            <p className="text-xs text-slate-600 font-body leading-relaxed">
              Verify your current passcode first, then choose a new private passcode.
            </p>

            <div className="space-y-3">
              <div className="space-y-1">
                <label className="block text-xs font-heading font-bold text-slate-800 uppercase tracking-wider">
                  Current Passcode
                </label>
                <input
                  type="password"
                  required
                  placeholder="Current passcode"
                  value={currentPasscodeForChange}
                  onChange={(e) => {
                    setCurrentPasscodeForChange(e.target.value);
                    setError('');
                  }}
                  className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-900 rounded-xl text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C57C4]"
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-heading font-bold text-slate-800 uppercase tracking-wider">
                  New Private Passcode
                </label>
                <input
                  type="password"
                  required
                  placeholder="New passcode (min 6 characters)"
                  value={newPasscode}
                  onChange={(e) => {
                    setNewPasscode(e.target.value);
                    setError('');
                  }}
                  className="w-full px-4 py-2.5 bg-slate-50 border-2 border-slate-900 rounded-xl text-sm font-mono text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2C57C4]"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-start gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {successMsg && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
                <Check className="w-4 h-4" />
                <span>{successMsg}</span>
              </div>
            )}

            <div className="flex items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsChangingPasscode(false);
                  setError('');
                }}
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-heading font-bold text-xs uppercase tracking-wider border-2 border-slate-900 transition-all cursor-pointer flex-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-3 px-4 rounded-xl bg-[#2C57C4] hover:bg-[#1E3E8F] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all cursor-pointer flex-1"
              >
                Save New Passcode
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
