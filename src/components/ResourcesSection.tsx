import { useState } from 'react';
import { BookOpen, Search, Download, ArrowUpRight, Tag, Eye } from 'lucide-react';
import { RESOURCES } from '../data/mockData';
import { ResourceItem } from '../types';

interface ResourcesSectionProps {
  onReadResource: (resource: ResourceItem) => void;
}

export default function ResourcesSection({ onReadResource }: ResourcesSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);

  const allTopics = ['All', 'Behavioral Economics', 'Health Literacy', 'Pharmaceutical Economics', 'Digital Health'];

  const filteredResources = RESOURCES.filter((res) => {
    const matchesSearch =
      res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag =
      selectedTag === 'All' || res.topics.some((t) => t.toLowerCase() === selectedTag.toLowerCase());

    return matchesSearch && matchesTag;
  });

  const handleDownload = (res: ResourceItem) => {
    setDownloadNotification(`Preparing download: ${res.title}`);
    setTimeout(() => {
      setDownloadNotification(null);
    }, 3000);
  };

  return (
    <section id="resources" className="py-20 bg-[#F8F8F6] border-b-2 border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2C57C4] text-white text-xs font-heading font-black tracking-widest uppercase mb-3 border border-slate-900">
              <BookOpen className="w-3.5 h-3.5 text-[#FF66C4]" />
              <span>Open Knowledge Repository</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-[#2C57C4] tracking-tight uppercase leading-[1.05]">
              Educational Resources & Research
            </h2>
            <p className="mt-3 text-base text-slate-700 leading-relaxed font-body font-medium">
              Peer-reviewed student whitepapers, patient literacy field kits, and clinical case studies freely available to educators, students, and healthcare advocates.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-700 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search papers & guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border-2 border-slate-900 bg-white text-xs text-slate-900 font-body focus:outline-none focus:ring-2 focus:ring-[#FF66C4] m4m-editorial-shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Topic Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-heading font-black text-slate-900 mr-1 flex items-center gap-1 uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5 text-[#2C57C4]" /> Filter:
          </span>
          {allTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTag(topic)}
              className={`px-3 py-1 rounded-md text-xs font-heading font-black uppercase tracking-wider transition-colors cursor-pointer border ${
                selectedTag === topic
                  ? 'bg-[#2C57C4] text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-800 border-slate-300 hover:border-slate-900'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Download Notification Toast */}
        {downloadNotification && (
          <div className="mb-6 p-3 rounded-lg bg-white border-2 border-slate-900 text-slate-900 text-xs flex items-center justify-between m4m-editorial-shadow-sm animate-fade-in">
            <span className="font-heading font-bold text-[#2C57C4]">{downloadNotification}</span>
            <span className="text-[11px] text-slate-600 font-mono font-bold uppercase">Verified PDF</span>
          </div>
        )}

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white border-2 border-slate-900 rounded-xl p-6 sm:p-7 flex flex-col justify-between m4m-editorial-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-heading font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#FF66C4] text-white border border-slate-900">
                    {res.type}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-600">{res.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-black text-[#2C57C4] mb-2 leading-snug uppercase">
                  {res.title}
                </h3>

                <div className="text-xs font-heading font-bold text-slate-900 mb-3">
                  Author: <span className="text-[#3252AD]">{res.author}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-body">
                  {res.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {res.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded border border-slate-300 bg-[#F8F8F6] text-slate-700 font-semibold"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t-2 border-slate-200 flex items-center justify-between gap-3">
                <button
                  onClick={() => onReadResource(res)}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-black text-slate-900 hover:text-[#2C57C4] px-3 py-2 rounded-lg bg-[#F8F8F6] border border-slate-900 hover:bg-slate-100 transition-colors cursor-pointer uppercase"
                >
                  <Eye className="w-3.5 h-3.5 text-[#2C57C4]" />
                  <span>Read Abstract</span>
                </button>

                <button
                  onClick={() => handleDownload(res)}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-black text-white px-3 py-2 rounded-lg bg-[#2C57C4] hover:bg-[#23459c] border border-slate-900 m4m-editorial-shadow-sm transition-colors cursor-pointer uppercase"
                >
                  <Download className="w-3.5 h-3.5 text-white" />
                  <span>PDF ({res.downloadSize})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
