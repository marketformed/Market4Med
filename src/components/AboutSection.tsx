import { useState } from 'react';
import { Target, CheckCircle2, Award, Zap, Globe2, BookOpen, Instagram, Play, ArrowRight, ExternalLink, Users, HeartHandshake, Sparkles } from 'lucide-react';
import { BrandStar, TikTokIcon } from './BrandLogos';
import { INSTAGRAM_URL, TIKTOK_URL, OFFICIAL_REELS, GENERAL_MEMBERSHIP_FORM_URL } from '../data/links';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'bridging' | 'whatWeDo' | 'community' | 'why' | 'social'>('bridging');

  const focusTopics = [
    'Patient trust and healthcare communication',
    'Psychology and decision-making in healthcare',
    'Healthcare literacy',
    'Medicine and business',
    'Leadership and professionalism',
    'Healthcare outreach and marketing',
    'Healthcare systems and real-world challenges',
    'Opportunities for future healthcare professionals'
  ];

  const coreSkills = [
    { title: 'Communicate', desc: 'Conveying complex health concepts with clarity, empathy, and transparency.' },
    { title: 'Lead', desc: 'Mobilizing peers, teams, and communities around patient-centered solutions.' },
    { title: 'Build Trust', desc: 'Understanding the bedside psychology and institutional factors that create confidence.' },
    { title: 'Understand People', desc: 'Examining behavioral psychology, social determinants, and patient backgrounds.' },
    { title: 'Work with Organizations', desc: 'Navigating health systems, clinics, non-profits, and industry partners.' },
    { title: 'Solve Problems', desc: 'Tackling real-world health literacy gaps and systemic hurdles.' }
  ];

  const getInvolvedActions = [
    'Join our student community',
    'Participate in workshops and projects',
    'Contribute to educational content',
    'Explore healthcare and research opportunities',
    'Collaborate with students and organizations',
    'Help build initiatives that make healthcare information more accessible'
  ];

  return (
    <section id="about" className="relative py-20 bg-[#F8F8F6] border-b-2 border-slate-900 overflow-hidden">
      {/* Crisp Editorial Ledger Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0F172A0D 1px, transparent 1px),
            linear-gradient(to bottom, #0F172A0D 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C57C4] text-white text-xs font-heading font-black tracking-widest uppercase mb-3 border border-slate-900">
            <Target className="w-3.5 h-3.5 text-[#FF66C4]" />
            <span>About MARKET4MED · International Community</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
            Bridging Medicine & <span className="text-slate-900">Business</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-body font-medium">
            Healthcare is more than science. It also involves communication, psychology, leadership, business, trust, and the way healthcare information reaches people.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-slate-900 shadow-xs text-xs font-heading font-black uppercase text-[#2C57C4]">
              <Globe2 className="w-3.5 h-3.5 text-[#2C57C4]" />
              <span>International Student Organization</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-slate-900 shadow-xs text-xs font-heading font-black uppercase text-[#FF66C4]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF66C4]" />
              <span>High School Founded · Open Worldwide</span>
            </div>
          </div>
        </div>

        {/* Mission Banner Card */}
        <div className="bg-[#2C57C4] text-white rounded-2xl border-2 border-slate-900 p-6 sm:p-8 m4m-editorial-shadow mb-10 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-heading font-black uppercase tracking-widest text-[#FF66C4] block mb-2">
              Our International Core Identity
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-white leading-snug">
              MARKET4MED is an international, student-led organization exploring the intersection of medicine and business to improve healthcare literacy and understand how psychology shapes trust in healthcare.
            </h3>
            <p className="mt-3 text-white/90 text-sm sm:text-base font-body leading-relaxed">
              We bring together students globally across healthcare, business, neuroscience, psychology, and related fields to explore the real-world side of medicine — the things that aren't always taught in a traditional classroom.
            </p>
          </div>
          <div className="hidden lg:block absolute -right-6 -bottom-8 opacity-20 pointer-events-none">
            <BrandStar size={240} color="#FFFFFF" />
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="bg-white rounded-xl border-2 border-slate-900 m4m-editorial-shadow overflow-hidden mb-12">
          {/* Navigation Bar for About Tabs */}
          <div className="flex border-b-2 border-slate-900 bg-[#F8F8F6] p-2.5 gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('bridging')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'bridging'
                  ? 'bg-[#2C57C4] text-white border-2 border-slate-900'
                  : 'text-slate-800 hover:text-[#2C57C4] hover:bg-white'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Bridging Medicine & Business</span>
            </button>

            <button
              onClick={() => setActiveTab('whatWeDo')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'whatWeDo'
                  ? 'bg-[#2C57C4] text-white border-2 border-slate-900'
                  : 'text-slate-800 hover:text-[#2C57C4] hover:bg-white'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>What We Do</span>
            </button>

            <button
              onClick={() => setActiveTab('community')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'community'
                  ? 'bg-[#2C57C4] text-white border-2 border-slate-900'
                  : 'text-slate-800 hover:text-[#2C57C4] hover:bg-white'
              }`}
            >
              <Globe2 className="w-4 h-4" />
              <span>Global Student Community</span>
            </button>

            <button
              onClick={() => setActiveTab('why')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'why'
                  ? 'bg-[#2C57C4] text-white border-2 border-slate-900'
                  : 'text-slate-800 hover:text-[#2C57C4] hover:bg-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Why MARKET4MED?</span>
            </button>

            <button
              onClick={() => setActiveTab('social')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'social'
                  ? 'bg-[#FF66C4] text-white border-2 border-slate-900'
                  : 'text-slate-800 hover:text-[#FF66C4] hover:bg-white'
              }`}
            >
              <Instagram className="w-4 h-4" />
              <span>Reels & Video Content</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-10">
            {/* TAB 1: BRIDGING MEDICINE & BUSINESS */}
            {activeTab === 'bridging' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-heading font-black text-[#FF66C4] uppercase tracking-wider">
                    Our Perspective
                  </span>
                  <h3 className="text-2xl font-heading font-black text-[#2C57C4] uppercase">
                    Healthcare is More Than Science
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-body">
                    Healthcare is more than science. It also involves <strong>communication, psychology, leadership, business, trust, and the way healthcare information reaches people</strong>.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-body">
                    Founded by high school students and open to passionate learners everywhere, MARKET4MED bridges the gap between scientific knowledge and real-world health execution. We believe that understanding how healthcare works — how people make decisions, how clinics operate, and how patient trust is cultivated — should begin early.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <div className="p-4 rounded-2xl bg-white border-2 border-slate-900 text-xs shadow-xs">
                      <span className="font-heading font-black text-[#2C57C4] uppercase text-sm block mb-1">High School Founded</span>
                      <span className="text-slate-600 font-body">Initiated by ambitious high school students with an inclusive, open-door mission for peers worldwide.</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white border-2 border-slate-900 text-xs shadow-xs">
                      <span className="font-heading font-black text-[#FF66C4] uppercase text-sm block mb-1">Open To Anyone</span>
                      <span className="text-slate-600 font-body">Welcoming students from high school, university, pre-med, business, and humanities backgrounds.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F8F8F6] p-6 sm:p-8 rounded-2xl border-2 border-slate-900 space-y-4">
                  <div className="text-xs uppercase tracking-wider text-[#2C57C4] font-heading font-black flex items-center gap-1.5">
                    <BrandStar size={16} color="#2C57C4" />
                    <span>Who We Bring Together</span>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-800 font-body">
                    <div className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#2C57C4] shrink-0" />
                      <span className="font-heading font-bold">Future Healthcare & Pre-Med Students</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#FF66C4] shrink-0" />
                      <span className="font-heading font-bold">Business & Economics Enthusiasts</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#2C57C4] shrink-0" />
                      <span className="font-heading font-bold">Psychology & Neuroscience Inquirers</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#FF66C4] shrink-0" />
                      <span className="font-heading font-bold">Health Communication & Outreach Advocates</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 font-body italic pt-1">
                    "Exploring the real-world side of medicine — the things that aren't always taught in a traditional classroom."
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: WHAT WE DO */}
            {activeTab === 'whatWeDo' && (
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-heading font-black text-[#2C57C4] uppercase tracking-wider block mb-1">
                    Methods & Mediums
                  </span>
                  <h3 className="text-2xl font-heading font-black text-slate-900 uppercase">
                    How MARKET4MED Creates Impact
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-body mt-2 max-w-3xl">
                    Through <strong>workshops, educational content, student-led projects, research, collaborations, and community initiatives</strong>, MARKET4MED gives students opportunities to explore healthcare from a broader perspective.
                  </p>
                </div>

                {/* Topics Grid */}
                <div>
                  <h4 className="text-sm font-heading font-black text-[#2C57C4] uppercase tracking-wider mb-4 flex items-center gap-2">
                    <BrandStar size={14} color="#FF66C4" />
                    <span>Topics We Focus On</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {focusTopics.map((topic, idx) => (
                      <div 
                        key={idx}
                        className="p-4 rounded-xl border-2 border-slate-900 bg-white hover:bg-[#2C57C4] hover:text-white transition-all group flex flex-col justify-between"
                      >
                        <span className="text-[10px] font-mono text-[#FF66C4] group-hover:text-white font-bold mb-1">
                          TOPIC 0{idx + 1}
                        </span>
                        <p className="font-heading font-bold text-xs sm:text-sm text-slate-900 group-hover:text-white leading-snug">
                          {topic}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Goal Callout */}
                <div className="p-5 rounded-2xl bg-[#2C57C4]/10 border-2 border-[#2C57C4]/30 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#2C57C4] text-white flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5 text-[#FF66C4]" />
                  </div>
                  <p className="text-sm text-slate-800 font-body">
                    <strong className="font-heading font-black text-[#2C57C4]">Our Core Goal:</strong> Not just to teach students about healthcare, but to help them understand <strong>how healthcare works in the real world</strong>.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: A GLOBAL STUDENT COMMUNITY */}
            {activeTab === 'community' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-heading font-black text-[#FF66C4] uppercase tracking-wider">
                      Worldwide Perspective
                    </span>
                    <h3 className="text-2xl font-heading font-black text-[#2C57C4] uppercase">
                      Healthcare Extends Far Beyond One Country
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-body">
                      Healthcare challenges and patient experiences extend far beyond one country or healthcare system. That's why MARKET4MED is building a community that connects students, organizations, and professionals from different backgrounds and countries.
                    </p>
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-body">
                      We are actively interested in collaborating with <strong>student organizations, healthcare organizations, educators, professionals, and youth communities around the world</strong> to exchange ideas, create educational opportunities, and explore healthcare from different perspectives.
                    </p>

                    <div className="p-4 rounded-xl bg-slate-50 border-2 border-slate-900 flex items-center gap-3 mt-4">
                      <div className="w-8 h-8 rounded-lg bg-[#2C57C4] text-white flex items-center justify-center shrink-0">
                        <Globe2 className="w-4 h-4 text-[#FF66C4]" />
                      </div>
                      <div className="text-xs font-body text-slate-700">
                        <strong className="text-[#2C57C4] font-heading font-black uppercase block">An International Network Without Borders:</strong>
                        Open to students and youth from the United States, Canada, the United Kingdom, Asia, Europe, and worldwide.
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-white p-6 rounded-2xl border-2 border-slate-900 m4m-editorial-shadow-sm space-y-4">
                    <h4 className="text-xs uppercase font-heading font-black text-slate-900 tracking-wider flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#2C57C4]" />
                      <span>Collaborate With Us</span>
                    </h4>
                    <div className="space-y-2 text-xs font-body text-slate-700">
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <strong className="text-[#2C57C4] font-heading font-bold block">Student Organizations:</strong> Co-host workshops, symposiums, and cross-chapter discussions.
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <strong className="text-[#2C57C4] font-heading font-bold block">Healthcare Organizations:</strong> Share real-world patient and administrative challenges.
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <strong className="text-[#2C57C4] font-heading font-bold block">Educators & Professionals:</strong> Mentor passionate youth and guide educational material.
                      </div>
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <strong className="text-[#2C57C4] font-heading font-bold block">Youth Communities:</strong> Empower young people anywhere to understand health systems.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: WHY MARKET4MED? */}
            {activeTab === 'why' && (
              <div className="space-y-8">
                <div className="max-w-3xl">
                  <span className="text-xs font-heading font-black text-[#2C57C4] uppercase tracking-wider block mb-1">
                    The Imperative
                  </span>
                  <h3 className="text-2xl font-heading font-black text-slate-900 uppercase">
                    Why MARKET4MED?
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-body mt-2">
                    Many students interested in medicine spend years learning the science behind healthcare. But becoming a future healthcare professional also means learning how to:
                  </p>
                </div>

                {/* The 6 Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {coreSkills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-2xl border-2 border-slate-900 bg-white m4m-editorial-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-6 rounded-full bg-[#2C57C4] text-white flex items-center justify-center text-xs font-heading font-black">
                          {idx + 1}
                        </span>
                        <h4 className="font-heading font-black text-slate-900 uppercase text-base">
                          {skill.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 font-body leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Synthesis Conclusion */}
                <div className="p-6 rounded-2xl bg-white border-2 border-slate-900 text-slate-900 space-y-3">
                  <h4 className="text-base font-heading font-black text-[#2C57C4] uppercase">
                    Start Developing Skills Before Medical School
                  </h4>
                  <p className="text-sm font-body text-slate-700 leading-relaxed">
                    MARKET4MED exists to explore that side of healthcare. We believe students can start developing these skills before medical school — and that understanding the relationship between medicine, business, and human behavior can lead to a broader understanding of healthcare.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 5: REELS & VIDEO CONTENT (@market4med) */}
            {activeTab === 'social' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border-2 border-slate-900 m4m-editorial-shadow-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-black text-[#2C57C4] text-lg uppercase">
                        Official Channels: @market4med
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-body">
                      Watch our student-created reels and short videos on Instagram & TikTok exploring medicine, healthcare business, and why patients trust doctors.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF66C4] hover:bg-[#ff4db9] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3 text-white" />
                    </a>

                    <a
                      href={TIKTOK_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all"
                    >
                      <TikTokIcon size={14} className="text-white" />
                      <span>TikTok</span>
                      <ExternalLink className="w-3 h-3 text-white" />
                    </a>
                  </div>
                </div>

                {/* Video / Reel Previews linking directly to official social channels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <a
                    href={OFFICIAL_REELS[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white rounded-2xl p-5 border-2 border-slate-900 m4m-editorial-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex flex-col justify-between group cursor-pointer ring-2 ring-[#FF66C4]/30"
                  >
                    <div>
                      <div className="w-full h-32 rounded-xl bg-[#2C57C4] flex items-center justify-center text-white mb-3 relative overflow-hidden group-hover:bg-[#23459c] transition-colors">
                        <Play className="w-8 h-8 text-[#FF66C4] fill-[#FF66C4] group-hover:scale-110 transition-transform" />
                        <span className="absolute top-2 left-2 text-[10px] font-heading font-black bg-[#FF66C4] px-2 py-0.5 rounded text-white shadow-xs">OFFICIAL REEL</span>
                        <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-white">INSTAGRAM</span>
                      </div>
                      <span className="text-[10px] uppercase font-black text-[#FF66C4] tracking-wider block mb-1">PATIENT TRUST & SYSTEMS</span>
                      <h5 className="font-heading font-black text-slate-900 text-sm group-hover:text-[#2C57C4] transition-colors">
                        Watch our reel exploring why patients trust doctors and health systems
                      </h5>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#2C57C4] font-heading font-black group-hover:text-[#FF66C4] transition-colors">
                      <span>Open Reel Directly</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>

                  <a
                    href={OFFICIAL_REELS[1].url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white rounded-2xl p-5 border-2 border-slate-900 m4m-editorial-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex flex-col justify-between group cursor-pointer ring-2 ring-[#2C57C4]/30"
                  >
                    <div>
                      <div className="w-full h-32 rounded-xl bg-[#2C57C4] flex items-center justify-center text-white mb-3 relative overflow-hidden group-hover:bg-[#23459c] transition-colors">
                        <Play className="w-8 h-8 text-white fill-white group-hover:scale-110 transition-transform" />
                        <span className="absolute top-2 left-2 text-[10px] font-heading font-black bg-[#2C57C4] px-2 py-0.5 rounded text-white shadow-xs">OFFICIAL REEL</span>
                        <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-white">INSTAGRAM</span>
                      </div>
                      <span className="text-[10px] uppercase font-black text-[#2C57C4] tracking-wider block mb-1">HEALTHCARE PERSPECTIVES</span>
                      <h5 className="font-heading font-black text-slate-900 text-sm group-hover:text-[#2C57C4] transition-colors">
                        Watch our reel exploring medicine & healthcare perspectives
                      </h5>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#2C57C4] font-heading font-black group-hover:text-[#FF66C4] transition-colors">
                      <span>Open Reel Directly</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>

                  <a
                    href={OFFICIAL_REELS[2].url}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white rounded-2xl p-5 border-2 border-slate-900 m4m-editorial-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex flex-col justify-between group cursor-pointer ring-2 ring-[#FF66C4]/30"
                  >
                    <div>
                      <div className="w-full h-32 rounded-xl bg-[#FF66C4] flex items-center justify-center text-white mb-3 relative overflow-hidden group-hover:bg-[#ff4db9] transition-colors">
                        <Play className="w-8 h-8 text-white fill-white group-hover:scale-110 transition-transform" />
                        <span className="absolute top-2 left-2 text-[10px] font-heading font-black bg-[#2C57C4] px-2 py-0.5 rounded text-white shadow-xs">OFFICIAL REEL</span>
                        <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-white">INSTAGRAM</span>
                      </div>
                      <span className="text-[10px] uppercase font-black text-[#2C57C4] tracking-wider block mb-1">HEALTHCARE & MEDICINE</span>
                      <h5 className="font-heading font-black text-slate-900 text-sm group-hover:text-[#2C57C4] transition-colors">
                        Watch our reel exploring clinical discussions & healthcare literacy
                      </h5>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#2C57C4] font-heading font-black group-hover:text-[#FF66C4] transition-colors">
                      <span>Open Reel Directly</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>

                {/* Follow @market4med Banner */}
                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FF66C4] flex items-center justify-center text-white shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-heading font-black text-slate-900 uppercase">
                        Follow @market4med for regular student-created video content
                      </p>
                      <p className="text-[11px] text-slate-500 font-body">
                        New reels posted exploring medicine, health systems, and patient advocacy
                      </p>
                    </div>
                  </div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider transition-colors shrink-0"
                  >
                    <span>View All on Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Get Involved Box with user's exact closing */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border-2 border-slate-900 m4m-editorial-shadow">
          <div className="max-w-3xl">
            <span className="text-xs font-heading font-black text-[#FF66C4] uppercase tracking-wider block mb-1">
              Join Our Mission
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#2C57C4] uppercase">
              Get Involved with MARKET4MED
            </h3>
            <p className="text-slate-700 font-body text-sm sm:text-base mt-2">
              Whether you're interested in medicine, business, neuroscience, psychology, healthcare, or simply want to learn more, there is a place for you at MARKET4MED.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              {getInvolvedActions.map((action, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-body text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#FF66C4] shrink-0" />
                  <span>{action}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-heading font-black text-[#2C57C4] text-sm uppercase">
                  We're building MARKET4MED one project, partnership, and student at a time.
                </p>
                <p className="text-xs text-slate-500 font-body font-bold mt-0.5">
                  Explore. Connect. Build. Welcome to MARKET4MED.
                </p>
              </div>

              <a
                href={GENERAL_MEMBERSHIP_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all shrink-0"
              >
                <span>Join Student Community</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
