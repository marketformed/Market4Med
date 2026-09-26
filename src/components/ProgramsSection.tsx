import { useState } from 'react';
import { Layers, Calendar, Users, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { PROGRAMS } from '../data/mockData';
import { Program, ProgramCategory } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onApply: (programTitle: string) => void;
}

export default function ProgramsSection({ onSelectProgram, onApply }: ProgramsSectionProps) {
  const [filter, setFilter] = useState<ProgramCategory>('all');

  const filteredPrograms = PROGRAMS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="programs" className="py-20 bg-[#F8F8F6] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C57C4] text-white text-xs font-heading font-black tracking-widest uppercase mb-3 border border-slate-900">
              <Layers className="w-3.5 h-3.5 text-[#FF66C4]" />
              <span>Curriculum & Cohorts</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
              Workshops & Flagship Programs
            </h2>
            <p className="mt-3 text-base text-slate-700 leading-relaxed font-body font-medium">
              Designed in tandem with physician-innovators and healthcare executives, our cohort-based programs build hard analytical capabilities and direct community impact.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-lg border-2 border-slate-900 m4m-editorial-shadow-sm">
            {(
              [
                { id: 'all', label: 'All Programs' },
                { id: 'fellowship', label: 'Fellowship' },
                { id: 'lab', label: 'Trust Lab' },
                { id: 'competition', label: 'Case Competition' },
                { id: 'workshop', label: 'Workshops' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-heading font-black uppercase tracking-wider transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#2C57C4] text-white'
                    : 'text-slate-800 hover:text-[#2C57C4] hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-xl border-2 border-slate-900 p-6 sm:p-8 flex flex-col justify-between m4m-editorial-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-heading font-black uppercase tracking-wider text-slate-900 bg-[#FF66C4] px-3 py-1 rounded-md border border-slate-900">
                    {prog.subtitle}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-700 font-heading font-bold">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#2C57C4]" />
                      {prog.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#2C57C4]" />
                      {prog.cohortSize}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-black text-[#2C57C4] mb-3 uppercase">
                  {prog.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-6 font-body">
                  {prog.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2 bg-[#F8F8F6] p-4 rounded-lg border border-slate-300">
                  <div className="text-xs font-heading font-black text-slate-900 uppercase tracking-wider">
                    Core Focus & Deliverables:
                  </div>
                  {prog.outcomes.slice(0, 2).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2C57C4] shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t-2 border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProgram(prog)}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-black text-slate-900 hover:text-[#2C57C4] p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#2C57C4]" />
                  <span>View Full Syllabus</span>
                </button>

                <button
                  onClick={() => onApply(prog.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#FF66C4] hover:bg-[#ff4db9] text-white text-xs font-heading font-black border-2 border-slate-900 m4m-editorial-shadow-sm transition-all cursor-pointer uppercase tracking-wider"
                >
                  <span>Apply for Cohort</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
