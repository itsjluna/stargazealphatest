import React, { useState } from 'react';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { Shuffle, ArrowRight } from 'lucide-react';

export default function TarotMirror({ onSelectSign }) {
  const [activeCard, setActiveCard] = useState(ZODIAC_SIGNS[0]);
  const [dailyCard, setDailyCard] = useState(null);

  const handleDrawDailyMirror = () => {
    const randomIndex = Math.floor(Math.random() * ZODIAC_SIGNS.length);
    const drawn = ZODIAC_SIGNS[randomIndex];
    setDailyCard(drawn);
    setActiveCard(drawn);
  };

  return (
    <div className="space-y-6 pb-28">
      {/* Header bar with draw card */}
      <div className="rounded-2xl glass-panel p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-black dark:text-white">Tarot Correspondences</h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">Major Arcana assignments for each zodiac sign.</p>
        </div>

        <button
          onClick={handleDrawDailyMirror}
          className="px-5 py-2 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-1.5 self-start sm:self-auto shadow-sm"
        >
          <Shuffle size={13} />
          <span>Draw Random Sign Card</span>
        </button>
      </div>

      {/* Grid: Focused Card & 12 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Focused Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-sm rounded-2xl p-6 glass-panel-elevated text-center space-y-4">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                ZODIAC SIGN: {activeCard.name}
              </span>
              <h3 className="text-xl font-bold text-black dark:text-white mt-0.5">
                {activeCard.tarotCard}
              </h3>
            </div>

            <div 
              className="w-16 h-16 mx-auto rounded-full flex items-center justify-center font-mono font-bold text-base border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]"
              style={{ color: activeCard.colorAccent }}
            >
              {activeCard.symbol}
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {activeCard.tarotArchetype}
            </p>

            <button
              onClick={() => onSelectSign(activeCard)}
              className="w-full py-2.5 rounded-full text-xs font-semibold bg-black/[0.04] dark:bg-white/[0.04] hover:bg-black/[0.08] dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white transition-all active:scale-95 flex items-center justify-center gap-1.5"
            >
              <span>View {activeCard.name} Profile</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* 12 Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {ZODIAC_SIGNS.map((s) => {
            const isSelected = activeCard.id === s.id;
            return (
              <div
                key={s.id}
                onClick={() => setActiveCard(s)}
                className={`p-3.5 rounded-xl cursor-pointer border text-left transition-colors ${
                  isSelected
                    ? 'bg-black/[0.05] dark:bg-white/[0.08] border-black/30 dark:border-white/30 text-black dark:text-white'
                    : 'glass-card text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5 font-mono text-[10px]">
                  <span className="text-zinc-400 dark:text-zinc-500">{s.symbol}</span>
                  <span style={{ color: s.colorAccent }}>{s.element}</span>
                </div>

                <h4 className="font-bold text-black dark:text-white text-xs line-clamp-1">
                  {s.tarotCard}
                </h4>

                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {s.name}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
