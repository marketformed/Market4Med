import { useState } from 'react';
import { X, CheckCircle2, Calendar, MapPin, Download, BookOpen, Send, Compass, ExternalLink, Globe } from 'lucide-react';
import { Program, EventItem, Opportunity, ResourceItem } from '../types';
import { GENERAL_MEMBERSHIP_FORM_URL, GLOBAL_AMBASSADOR_FORM_URL, DEFAULT_CHAPTER_GOOGLE_FORM_URL } from '../data/links';

interface ModalsProps {
  activeModal: 'rsvp' | 'syllabus' | 'apply' | 'chapter' | 'resource' | null;
  onClose: () => void;
  selectedEvent: EventItem | null;
  selectedProgram: Program | null;
  selectedOpportunity: Opportunity | null;
  selectedResource: ResourceItem | null;
}

export default function Modals({
  activeModal,
  onClose,
  selectedEvent,
  selectedProgram,
  selectedOpportunity,
  selectedResource,
}: ModalsProps) {
  // RSVP Form state
  const [rsvpData, setRsvpData] = useState({ name: '', email: '', affiliation: '' });
  const [rsvpSuccess, setRsvpSuccess] = useState(false);

  // Application Form state
  const [applyData, setApplyData] = useState({
    name: '',
    email: '',
    university: '',
    majorYear: '',
    statement: '',
  });
  const [applySuccess, setApplySuccess] = useState(false);

  // Chapter Launch Form state
  const [chapterData, setChapterData] = useState({
    name: '',
    email: '',
    university: '',
    location: '',
    vision: '',
  });
  const [chapterSuccess, setChapterSuccess] = useState(false);

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-xl m4m-editorial-shadow border-3 border-slate-900 overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-900 hover:bg-[#FF66C4] hover:text-white border-2 border-slate-900 bg-[#F8F8F6] transition-colors z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. RSVP MODAL */}
        {activeModal === 'rsvp' && selectedEvent && (
          <div className="p-6 sm:p-8">
            {rsvpSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">Access Pass Confirmed</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Your seat for <strong className="text-slate-900">"{selectedEvent.title}"</strong> has been reserved. A confirmation with calendar invite and direct link has been sent to <strong className="text-slate-900">{rsvpData.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setRsvpSuccess(false);
                      onClose();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
                  >
                    Done & Return to Site
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 inline-block mb-3">
                  Event Registration
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2 leading-snug">
                  {selectedEvent.title}
                </h3>
                <div className="text-xs text-slate-600 font-medium mb-4">
                  Speaker: <strong className="text-slate-900">{selectedEvent.speaker}</strong> ({selectedEvent.speakerRole})
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-slate-600 p-3 bg-slate-50 rounded-xl border border-slate-200 mb-6">
                  <span className="flex items-center gap-1.5 font-medium text-slate-900">
                    <Calendar className="w-4 h-4 text-sky-600" />
                    {selectedEvent.date} · {selectedEvent.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {selectedEvent.location}
                  </span>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setRsvpSuccess(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={rsvpData.name}
                        onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                        placeholder="e.g. Jordan Smith"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={rsvpData.email}
                        onChange={(e) => setRsvpData({ ...rsvpData, email: e.target.value })}
                        placeholder="jordan@college.edu"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      School, Hospital, or Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={rsvpData.affiliation}
                      onChange={(e) => setRsvpData({ ...rsvpData, affiliation: e.target.value })}
                      placeholder="e.g. Johns Hopkins Pre-Med / Healthcare Consultant"
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Confirm RSVP & Claim Seat
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 2. SYLLABUS MODAL */}
        {activeModal === 'syllabus' && selectedProgram && (
          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 inline-block mb-3">
              Curriculum Syllabus
            </span>
            <h3 className="text-2xl font-bold text-slate-950 mb-1">{selectedProgram.title}</h3>
            <p className="text-xs font-semibold text-slate-500 mb-4">{selectedProgram.subtitle} · {selectedProgram.duration}</p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed mb-6">
              {selectedProgram.description}
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-600" />
                <span>Modules & Weekly Breakdown</span>
              </h4>
              <div className="space-y-2">
                {selectedProgram.curriculum.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200/90 text-xs text-slate-800 flex items-start gap-2.5">
                    <span className="font-mono font-bold text-sky-700 shrink-0">#{idx + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 p-4 rounded-xl bg-sky-50/50 border border-sky-100">
              <h4 className="text-xs font-bold text-sky-950 mb-1">Prerequisites & Eligibility:</h4>
              <p className="text-xs text-sky-900">{selectedProgram.prerequisites}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-950 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold cursor-pointer"
              >
                Apply for this Cohort
              </button>
            </div>
          </div>
        )}

        {/* 3. APPLICATION MODAL */}
        {activeModal === 'apply' && (
          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            {applySuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">Application Received</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for applying to MARKET4MED. Our Student Selection Committee reviews leadership, ambassador, and student applications on a rolling basis. You will receive an update at <strong className="text-slate-900">{applyData.email}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setApplySuccess(false);
                      onClose();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 inline-block mb-3">
                  {selectedOpportunity ? selectedOpportunity.type : 'Student & Volunteer Application'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                  {selectedOpportunity ? selectedOpportunity.title : 'Apply to MARKET4MED'}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Please complete the form below. We evaluate candidates based on interdisciplinary curiosity, dedication to health literacy, and passion for ethical healthcare systems.
                </p>

                {/* Direct Google Form Application Option */}
                <div className="mb-6 p-4 rounded-xl bg-slate-50 border-2 border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-heading font-black text-slate-900 block uppercase text-xs">Official Google Form Applications</span>
                    <span className="text-[11px] text-slate-600 font-medium">Prefer applying via Google Forms directly? Choose your application track:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <a
                      href={GLOBAL_AMBASSADOR_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-[11px] uppercase tracking-wider border border-slate-900 shadow-xs cursor-pointer"
                    >
                      <Globe className="w-3 h-3 text-white" />
                      <span>Global Ambassador</span>
                      <ExternalLink className="w-3 h-3 text-white" />
                    </a>
                    <a
                      href={DEFAULT_CHAPTER_GOOGLE_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-[11px] uppercase tracking-wider border border-slate-900 shadow-xs cursor-pointer"
                    >
                      <span>Chapter Application</span>
                      <ExternalLink className="w-3 h-3 text-white" />
                    </a>
                    <a
                      href={GENERAL_MEMBERSHIP_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-900 font-heading font-black text-[11px] uppercase tracking-wider border border-slate-900 shadow-xs cursor-pointer"
                    >
                      <span>General Membership</span>
                      <ExternalLink className="w-3 h-3 text-slate-800" />
                    </a>
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setApplySuccess(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={applyData.name}
                        onChange={(e) => setApplyData({ ...applyData, name: e.target.value })}
                        placeholder="e.g. Jordan Lee"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applyData.email}
                        onChange={(e) => setApplyData({ ...applyData, email: e.target.value })}
                        placeholder="jordan.lee@university.edu"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">College or University *</label>
                      <input
                        type="text"
                        required
                        value={applyData.university}
                        onChange={(e) => setApplyData({ ...applyData, university: e.target.value })}
                        placeholder="e.g. University of Pennsylvania"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">Major & Graduation Year *</label>
                      <input
                        type="text"
                        required
                        value={applyData.majorYear}
                        onChange={(e) => setApplyData({ ...applyData, majorYear: e.target.value })}
                        placeholder="e.g. Biology & Health Economics, Class of '27"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Why are you interested in the intersection of medicine, business, and health literacy? *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={applyData.statement}
                      onChange={(e) => setApplyData({ ...applyData, statement: e.target.value })}
                      placeholder="Share a statement on your background, perspectives, or what problem in healthcare you wish to solve..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-sky-400" />
                    <span>Submit Application</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 4. CHAPTER LAUNCH MODAL */}
        {activeModal === 'chapter' && (
          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            {chapterSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">Charter Request Initiated</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  We're excited to expand MARKET4MED to <strong className="text-slate-900">{chapterData.university}</strong>! The National Chapter Director will reach out to <strong className="text-slate-900">{chapterData.email}</strong> with the Campus Founder Kit and schedule an onboarding call.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setChapterSuccess(false);
                      onClose();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 inline-block mb-3 flex items-center gap-1.5 w-fit">
                  <Compass className="w-3.5 h-3.5 text-sky-600" />
                  <span>Worldwide Chapter Program · US & International</span>
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2">
                  Start a Chapter Anywhere (Community, City, or School)
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Chapters do not have to be on campus or tied to a school. You can start a chapter in your local community, city, regional youth hub, high school, or university. National leadership provides official charter bylaws, a global peer network, and full creative freedom to lead your own initiatives.
                </p>

                {/* Google Form Link Alternative */}
                <div className="mb-6 p-3.5 rounded-xl bg-[#2C57C4]/10 border-2 border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-xs text-slate-800">
                    <span className="font-heading font-black text-[#2C57C4] block uppercase">Prefer using Google Forms?</span>
                    <span className="text-[11px] text-slate-600">You can also submit through our official Google Form application.</span>
                  </div>
                  <a
                    href={typeof window !== 'undefined' ? localStorage.getItem('market4med_chapter_form_url') || DEFAULT_CHAPTER_GOOGLE_FORM_URL : DEFAULT_CHAPTER_GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-[11px] uppercase tracking-wider border border-slate-900 shadow-xs cursor-pointer shrink-0"
                  >
                    <span>Open Google Form</span>
                    <ExternalLink className="w-3 h-3 text-white" />
                  </a>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setChapterSuccess(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">Founding Director Name *</label>
                      <input
                        type="text"
                        required
                        value={chapterData.name}
                        onChange={(e) => setChapterData({ ...chapterData, name: e.target.value })}
                        placeholder="e.g. Samantha Vance"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={chapterData.email}
                        onChange={(e) => setChapterData({ ...chapterData, email: e.target.value })}
                        placeholder="samantha@example.com"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">City, Community, or School Name *</label>
                      <input
                        type="text"
                        required
                        value={chapterData.university}
                        onChange={(e) => setChapterData({ ...chapterData, university: e.target.value })}
                        placeholder="e.g. Greater Seattle Hub / Atlanta Youth Group / Harvard"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">City, State / Country *</label>
                      <input
                        type="text"
                        required
                        value={chapterData.location}
                        onChange={(e) => setChapterData({ ...chapterData, location: e.target.value })}
                        placeholder="e.g. Austin, TX (or London, UK)"
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1">
                      Chapter Vision & Community Goals *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={chapterData.vision}
                      onChange={(e) => setChapterData({ ...chapterData, vision: e.target.value })}
                      placeholder="Tell us about your city, community, or school, and how you want to bring healthcare literacy and medicine-business discussions to your area..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors cursor-pointer"
                  >
                    Submit Chapter Charter Proposal
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* 5. RESOURCE READER MODAL */}
        {activeModal === 'resource' && selectedResource && (
          <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                {selectedResource.type}
              </span>
              <span className="text-xs font-mono text-slate-500">{selectedResource.readTime}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-2 leading-snug">
              {selectedResource.title}
            </h3>
            <p className="text-xs text-sky-700 font-medium mb-6">
              Published by {selectedResource.author}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
                  Executive Summary
                </h4>
                <p>{selectedResource.summary}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
                  Key Excerpt & Research Findings
                </h4>
                <p className="p-4 bg-white rounded-xl border border-slate-200 text-slate-800">
                  {selectedResource.fullExcerpt}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Open Access · MARKET4MED Digital Commons
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
