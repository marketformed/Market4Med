import { ShieldCheck, Handshake, Quote, Building2, ExternalLink } from 'lucide-react';
import { PARTNERS, ADVISORS } from '../data/mockData';

interface PartnersSectionProps {
  onPartnerInquiry: () => void;
}

export default function PartnersSection({ onPartnerInquiry }: PartnersSectionProps) {
  return (
    <section id="collaborations" className="py-20 bg-[#F8F8F6] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C57C4] text-white text-xs font-heading font-black tracking-widest uppercase mb-3 border border-slate-900">
              <Handshake className="w-3.5 h-3.5 text-[#FF66C4]" />
              <span>Alliances & Advisory Council</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
              Collaborations Across Health Systems & Industry
            </h2>
            <p className="mt-3 text-base text-slate-700 leading-relaxed font-body font-medium">
              We collaborate with academic medical centers, healthtech venture studios, and community advocacy groups to ensure our research and student cohorts solve real-world problems.
            </p>
          </div>

          <div>
            <button
              onClick={onPartnerInquiry}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-900 font-heading font-black text-xs uppercase tracking-wider m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#2C57C4]" />
              <span>Institutional Partner Inquiry</span>
            </button>
          </div>
        </div>

        {/* Partner Organizations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl border-2 border-slate-900 p-6 flex flex-col justify-between m4m-editorial-shadow-sm hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
            >
              <div>
                <span className="text-[10px] font-heading font-black uppercase tracking-wider text-slate-900 bg-[#FF66C4]/20 px-2.5 py-0.5 rounded border border-slate-900 block w-fit mb-3">
                  {partner.type}
                </span>
                <h3 className="font-heading font-black text-[#2C57C4] text-base mb-2 uppercase leading-snug">{partner.name}</h3>
                <p className="text-xs text-slate-700 leading-relaxed font-body font-medium">{partner.description}</p>
              </div>
              <div className="mt-4 pt-3 border-t-2 border-slate-200 flex items-center text-[11px] font-heading font-bold text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2C57C4] mr-1.5" />
                Collaborative Partner
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Perspectives */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl sm:text-3xl font-heading font-black text-[#2C57C4] uppercase">
              Guidance from Clinical & Industry Advisors
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mt-2 font-body font-medium">
              Physicians, economists, and behavioral scientists who shape our cohorts and curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADVISORS.map((advisor, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-slate-900 rounded-xl p-6 sm:p-7 flex flex-col justify-between m4m-editorial-shadow hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
              >
                <div>
                  <Quote className="w-7 h-7 text-[#FF66C4] mb-4" />
                  <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed mb-6 font-body font-normal">
                    "{advisor.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-slate-200">
                  <h4 className="font-heading font-black text-slate-900 text-sm uppercase">{advisor.name}</h4>
                  <div className="text-xs text-slate-700 font-medium font-body">{advisor.title}</div>
                  <div className="text-[11px] text-[#2C57C4] font-heading font-bold mt-0.5">{advisor.affiliation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
