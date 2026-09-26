import { useState } from 'react';
import { Calendar, Clock, MapPin, Video, UserCheck, Sparkles, ExternalLink, ArrowRight } from 'lucide-react';
import { ACCURATE_EVENTS, VISION_EVENTS } from '../data/mockData';
import { EventItem } from '../types';
import { BOARD_APPLICATION_FORM_URL } from '../data/links';

interface EventsSectionProps {
  siteMode?: 'current' | 'vision';
  onRSVP: (event: EventItem) => void;
}

export default function EventsSection({ siteMode = 'current', onRSVP }: EventsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const eventsList = siteMode === 'current' ? ACCURATE_EVENTS : VISION_EVENTS;

  // In current launch mode, no symposium exists yet
  const categories = siteMode === 'current'
    ? ['All', 'Roundtable', 'Workshop', 'Keynote']
    : ['All', 'Roundtable', 'Workshop', 'Keynote', 'Symposium'];

  const filteredEvents = eventsList.filter((e) => {
    if (selectedCategory === 'All') return true;
    return e.category === selectedCategory;
  });

  return (
    <section id="events" className="py-20 bg-[#F8F8F6] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C57C4] text-white text-xs font-heading font-black tracking-widest uppercase mb-3 border border-slate-900">
              <Calendar className="w-3.5 h-3.5 text-[#FF66C4]" />
              <span>
                {siteMode === 'current' ? 'Founding Sessions & Speaker Series' : 'Seminars & Symposia'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
              Upcoming Events & Speaker Series
            </h2>
            <p className="mt-3 text-base text-slate-700 leading-relaxed font-body font-medium">
              Join our virtual info sessions, chapter briefings, and foundational guest seminars exploring how medicine, business strategy, and patient trust intersect.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-heading font-black uppercase tracking-wider transition-colors cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#2C57C4] text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Informational Callout on Future Symposia */}
        <div className="mb-10 p-5 rounded-2xl bg-white border-2 border-slate-900 m4m-editorial-shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-heading font-black text-[#FF66C4] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Future Event Roadmap</span>
            </div>
            <h3 className="text-base font-heading font-black text-slate-900 uppercase">
              Looking for our Annual Student Healthcare Symposium?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Large-scale regional symposia and in-person summits will be planned by our incoming 2026–2027 Executive Board. Apply today to help organize and direct our inaugural conferences!
            </p>
          </div>

          <a
            href={BOARD_APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer shrink-0"
          >
            <span>Apply to Help Plan Events</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white border-2 border-slate-900 rounded-xl p-6 sm:p-7 flex flex-col justify-between m4m-editorial-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-heading font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FF66C4] text-white border border-slate-900">
                    {evt.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-slate-900 bg-[#F8F8F6] px-2.5 py-1 rounded-md border border-slate-900">
                    {evt.isVirtual ? (
                      <>
                        <Video className="w-3.5 h-3.5 text-[#2C57C4]" />
                        <span>Interactive Stream</span>
                      </>
                    ) : (
                      <>
                        <MapPin className="w-3.5 h-3.5 text-[#2C57C4]" />
                        <span>In-Person & Broadcast</span>
                      </>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-heading font-black text-[#2C57C4] mb-2 leading-snug uppercase">
                  {evt.title}
                </h3>

                <div className="p-3 bg-[#F8F8F6] border border-slate-300 rounded-lg mb-4">
                  <div className="text-xs font-heading font-bold text-slate-900">{evt.speaker}</div>
                  <div className="text-[11px] text-slate-600 font-body">{evt.speakerRole}</div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-body">
                  {evt.description}
                </p>
              </div>

              {/* Event Meta & RSVP */}
              <div className="pt-4 border-t-2 border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs font-heading font-bold text-slate-700">
                  <div className="flex items-center gap-1.5 text-slate-900">
                    <Calendar className="w-4 h-4 text-[#2C57C4]" />
                    <span>{evt.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-600" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#2C57C4]">
                    <UserCheck className="w-4 h-4 text-[#FF66C4]" />
                    <span>{evt.spotsLeft} seats remaining</span>
                  </div>
                </div>

                <button
                  onClick={() => onRSVP(evt)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#2C57C4] hover:bg-[#23459c] text-white font-heading font-black text-xs uppercase tracking-wider border-2 border-slate-900 m4m-editorial-shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>RSVP & Reserve Access Pass</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
