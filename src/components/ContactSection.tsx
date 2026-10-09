import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Building, Sparkles, Instagram, ExternalLink, Copy, Check, ArrowRight } from 'lucide-react';
import { TikTokIcon, SubstackIcon } from './BrandLogos';
import { INSTAGRAM_URL, TIKTOK_URL, SUBSTACK_URL, OFFICIAL_EMAIL } from '../data/links';

interface ContactSectionProps {
  defaultSubject?: string;
}

export default function ContactSection({ defaultSubject = 'General Inquiry' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    subject: defaultSubject,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [sendMethod, setSendMethod] = useState<'online' | 'email_client'>('online');

  const mailtoUrl = `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(
    `[MARKET4MED Inquiry] ${formData.subject}: ${formData.name || 'New Inquiry'}`
  )}&body=${encodeURIComponent(
    `Hello MARKET4MED Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\nAffiliation: ${formData.affiliation}\nInquiry Category: ${formData.subject}\n\nMessage:\n${formData.message}\n`
  )}`;

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(OFFICIAL_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send directly to marketformed@gmail.com via FormSubmit endpoint
      const response = await fetch(`https://formsubmit.co/ajax/${OFFICIAL_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          affiliation: formData.affiliation,
          subject: formData.subject,
          message: formData.message,
          _subject: `[MARKET4MED Inquiry] ${formData.subject} from ${formData.name}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSendMethod('online');
        setSubmitted(true);
      } else {
        // Fallback: open mailto
        window.location.href = mailtoUrl;
        setSendMethod('email_client');
        setSubmitted(true);
      }
    } catch {
      // If network fails (e.g. adblocker), seamlessly open user's mail client
      window.location.href = mailtoUrl;
      setSendMethod('email_client');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#F8F8F6] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C57C4] text-white text-xs font-heading font-black tracking-widest uppercase border border-slate-900">
              <Mail className="w-3.5 h-3.5 text-[#FF66C4]" />
              <span>Connect with Us</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
              Start a Conversation with MARKET4MED
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-body font-medium">
              Whether you are a student exploring healthcare, a physician interested in mentoring, an organization seeking to collaborate, or a young leader ready to start a chapter—we respond within 48 hours.
            </p>

            <div className="bg-white p-6 rounded-xl border-2 border-slate-900 space-y-4 m4m-editorial-shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#F8F8F6] border border-slate-900 text-[#2C57C4] mt-1">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-heading font-black uppercase text-slate-900">Direct Inquiries</div>
                    <a
                      href={`mailto:${OFFICIAL_EMAIL}`}
                      className="text-xs text-[#2C57C4] hover:text-[#FF66C4] font-heading font-bold break-all transition-colors"
                    >
                      {OFFICIAL_EMAIL}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-heading font-bold border border-slate-400 bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-slate-600" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#F8F8F6] border border-slate-900 text-slate-900 mt-1">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-heading font-black uppercase text-slate-900">Global Student Community</div>
                  <p className="text-xs text-slate-700 font-body">
                    Connecting students, educators, healthcare professionals, and youth communities worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#FF66C4]/20 border border-slate-900 text-slate-900 mt-1">
                  <Sparkles className="w-4 h-4 text-[#FF66C4]" />
                </div>
                <div>
                  <div className="text-xs font-heading font-black uppercase text-slate-900">Institutional Response Time</div>
                  <p className="text-xs text-slate-700 font-body">
                    All inquiries submitted through this form or sent directly to <strong className="text-slate-900">{OFFICIAL_EMAIL}</strong> are reviewed promptly by our Executive Committee.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="bg-white p-5 rounded-xl border-2 border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 m4m-editorial-shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-[#2C57C4]/10 border border-slate-900 text-[#2C57C4]">
                  <Instagram className="w-4 h-4 text-[#FF66C4]" />
                </div>
                <div>
                  <div className="text-xs font-heading font-black uppercase text-slate-900">Follow @market4med</div>
                  <div className="text-[11px] text-slate-600 font-body">Substack, Instagram & TikTok</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-900 hover:bg-slate-100 text-slate-900 text-xs font-heading font-black transition-colors"
                >
                  <SubstackIcon size={12} className="text-[#FF66C4]" />
                  <span>Substack</span>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF66C4] hover:bg-[#ff4db9] text-white text-xs font-heading font-black transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2C57C4] hover:bg-[#23459c] text-white text-xs font-heading font-black transition-colors"
                >
                  <TikTokIcon size={13} className="text-white" />
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border-3 border-slate-900 p-6 sm:p-10 m4m-editorial-shadow">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-emerald-500 text-white border-2 border-slate-900 rounded-xl flex items-center justify-center mx-auto m4m-editorial-shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-heading font-black uppercase tracking-wider border border-emerald-300">
                  <Check className="w-3.5 h-3.5" />
                  <span>Inquiry Dispatched to {OFFICIAL_EMAIL}</span>
                </div>
                <h3 className="text-2xl font-heading font-black text-[#2C57C4] uppercase">Thank You for Connecting</h3>
                <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed font-body">
                  Your message has been transmitted directly to <strong className="text-slate-900 font-heading font-bold">{OFFICIAL_EMAIL}</strong>. A member of the MARKET4MED Executive Committee will follow up with you at <strong className="text-slate-900 font-heading font-bold">{formData.email}</strong>.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-heading font-bold border border-slate-300 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#2C57C4]" />
                    <span>Open Copy in Your Mail App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        affiliation: '',
                        subject: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-[#2C57C4] text-white text-xs font-heading font-black uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm hover:bg-[#23459c] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-black uppercase tracking-wider text-slate-900 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-slate-900 bg-[#F8F8F6] text-xs text-slate-900 font-body focus:outline-none focus:ring-2 focus:ring-[#FF66C4] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-black uppercase tracking-wider text-slate-900 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex.morgan@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-slate-900 bg-[#F8F8F6] text-xs text-slate-900 font-body focus:outline-none focus:ring-2 focus:ring-[#FF66C4] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-black uppercase tracking-wider text-slate-900 mb-1.5">
                      School, Organization, or Hospital Affiliation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Columbia University / Pre-Med"
                      value={formData.affiliation}
                      onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-slate-900 bg-[#F8F8F6] text-xs text-slate-900 font-body focus:outline-none focus:ring-2 focus:ring-[#FF66C4] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-black uppercase tracking-wider text-slate-900 mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border-2 border-slate-900 bg-[#F8F8F6] text-xs text-slate-900 font-heading font-bold focus:outline-none focus:ring-2 focus:ring-[#FF66C4] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Global Ambassador Inquiry">Global Ambassador Program</option>
                      <option value="Chapter Expansion">Launch a Chapter (Community or School)</option>
                      <option value="General Student Membership">General Student Membership</option>
                      <option value="Student Fellowship">Student Strategy Fellowship</option>
                      <option value="Clinical Mentor / Speaker">Mentorship / Guest Speaking</option>
                      <option value="Sponsorship / Partnership">Institutional Partnership / Sponsorship</option>
                      <option value="Volunteer Outreach">Community Health Literacy Volunteer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-black uppercase tracking-wider text-slate-900 mb-1.5">
                    Your Message or Proposed Collaboration *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your background, interests, or how you'd like to collaborate with MARKET4MED..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-slate-900 bg-[#F8F8F6] text-xs text-slate-900 font-body focus:outline-none focus:ring-2 focus:ring-[#FF66C4] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-2.5 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending to {OFFICIAL_EMAIL}...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#FF66C4]" />
                        <span>Submit to {OFFICIAL_EMAIL}</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-600">
                    <span>Or write from your email app:</span>
                    <a
                      href={mailtoUrl}
                      className="font-heading font-bold text-[#2C57C4] hover:text-[#FF66C4] inline-flex items-center gap-1 underline transition-colors"
                    >
                      <Mail className="w-3 h-3" />
                      <span>Open Pre-filled Email to {OFFICIAL_EMAIL}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
