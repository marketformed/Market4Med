import { Compass, BookOpen, Brain, TrendingUp, Users2, ArrowUpRight } from 'lucide-react';
import { PILLARS } from '../data/mockData';
import { BrandStar } from './BrandLogos';

interface MissionPillarsProps {
  onLearnMore?: (pillarId: string) => void;
}

export default function MissionPillars({ }: MissionPillarsProps) {
  const iconMap: Record<string, typeof BookOpen> = {
    'pillar-literacy': BookOpen,
    'pillar-trust': Brain,
    'pillar-economics': TrendingUp,
    'pillar-leadership': Users2,
  };

  return (
    <section id="mission" className="py-20 bg-[#F8F8F6] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C57C4] text-white text-xs font-heading font-black tracking-widest uppercase mb-3 border border-slate-900">
            <Compass className="w-3.5 h-3.5 text-[#FF66C4]" />
            <span>Our Mission & Strategic Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
            Advancing Healthcare Literacy & Trust <br />
            <span className="text-slate-900">at the Clinical-Commercial Frontier</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed font-body font-medium">
            Our mission is to dismantle the artificial divide between clinical practice, commercial incentives, and patient comprehension. We operate across four strategic pillars to equip students with dual-literacy and actionable tools.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = iconMap[pillar.id] || BookOpen;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className="group bg-white rounded-xl border-2 border-slate-900 p-7 sm:p-8 m4m-editorial-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#2C57C4] text-white flex items-center justify-center font-bold text-sm border-2 border-slate-900 m4m-editorial-shadow-sm group-hover:bg-[#FF66C4] transition-colors">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-heading font-black text-xs text-[#2C57C4] uppercase tracking-wider">
                        PILLAR {pillar.number}
                      </span>
                    </div>
                    <span className="text-xs font-heading font-black px-3 py-1 rounded-md bg-[#FF66C4] text-white uppercase border border-slate-900">
                      Core Discipline
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading font-black text-[#2C57C4] mb-2 uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-heading font-black text-slate-900 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed mb-6 font-body">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Impact Metric */}
                <div className="pt-4 border-t-2 border-slate-200 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-heading font-black text-[#2C57C4]">
                      {pillar.impactStat}
                    </span>
                    <span className="text-xs text-slate-700 max-w-[220px] leading-tight font-body font-medium">
                      {pillar.impactLabel}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#F8F8F6] border-2 border-slate-900 flex items-center justify-center text-slate-900 group-hover:bg-[#FF66C4] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

