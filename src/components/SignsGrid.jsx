import React, { useState } from 'react';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { ArrowRight } from 'lucide-react';

export default function SignsGrid({ onSelectSign }) {
  const [filterElement, setFilterElement] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSigns = ZODIAC_SIGNS.filter(sign => {
    const matchesElement = filterElement === 'All' || sign.element === filterElement;
    const matchesSearch = 
      sign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sign.element.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sign.rulingPlanet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sign.motto.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesElement && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-28">
      {/* Filter and Search Bar */}
      <div className="rounded-2xl glass-panel p-4 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          
          {/* Element Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 mr-1 font-medium">Element:</span>
            {['All', 'Fire', 'Earth', 'Air', 'Water'].map(el => (
              <button
                key={el}
                onClick={() => setFilterElement(el)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 ${
                  filterElement === el
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                    : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
                }`}
              >
                {el}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search sign, planet, motto..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-1.5 text-xs rounded-full glass-input placeholder-zinc-400 dark:placeholder-zinc-500"
            />
          </div>

        </div>
      </div>

      {/* Grid of Signs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredSigns.map((sign) => {
          return (
            <div
              key={sign.id}
              onClick={() => onSelectSign(sign)}
              className="group cursor-pointer rounded-2xl glass-card p-5 flex flex-col justify-between transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-base text-black dark:text-white">
                      {sign.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {sign.dates}
                    </p>
                  </div>

                  <span 
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold border border-black/10 dark:border-white/10"
                    style={{ color: sign.colorAccent, backgroundColor: 'rgba(128,128,128,0.05)' }}
                  >
                    {sign.symbol}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span 
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-black/10 dark:border-white/10"
                    style={{ color: sign.colorAccent }}
                  >
                    {sign.element}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-black/[0.06] dark:border-white/[0.06]">
                    {sign.modality}
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 border border-black/[0.06] dark:border-white/[0.06]">
                    {sign.rulingPlanet}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {sign.summary}
                </p>
              </div>

              {/* Card Footer: Quotes removed */}
              <div className="mt-5 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                <span className="font-mono text-[11px]">{sign.motto}</span>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-medium">
                  <span>Details</span>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10">
                    <ArrowRight size={11} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
