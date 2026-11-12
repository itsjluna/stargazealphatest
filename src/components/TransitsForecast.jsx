import React, { useState } from 'react';
import { ZODIAC_SIGNS, COSMIC_TRANSITS } from '../data/zodiacData';

export default function TransitsForecast({ onSelectSign }) {
  const [selectedSignId, setSelectedSignId] = useState('scorpio');
  const [activeCategory, setActiveCategory] = useState('daily');

  const selectedSign = ZODIAC_SIGNS.find(s => s.id === selectedSignId) || ZODIAC_SIGNS[0];

  const getForecast = (sign) => {
    return {
      daily: {
        headline: `Focus and Planning for ${sign.name}`,
        theme: 'Setting practical boundaries and attending to key priorities.',
        detail: `Under the current transit cycle, ${sign.name} benefits from focusing on their core motto "${sign.motto}". Today is suited for organizing upcoming plans, declining unnecessary distractions, and completing unfinished tasks.`
      },
      love: {
        headline: 'Clear Communication in Relationships',
        theme: 'Direct and honest conversations.',
        detail: `The planetary transits encourage ${sign.name} to express thoughts directly rather than holding back. In existing relationships, a calm check-in resolves ambiguous assumptions.`
      },
      career: {
        headline: 'Focus on Long-Term Progress',
        theme: 'Consistent execution and strategic patience.',
        detail: `Career initiatives require methodical effort rather than hasty pivots. Focus on using your strength in ${sign.superpowers[0].toLowerCase()} to maintain steady momentum.`
      },
      warning: {
        headline: 'Managing Stress and Fatigue',
        theme: `Watch for ${sign.shadowSide[0].toLowerCase()}.`,
        detail: `Take breaks when feeling overloaded, rest, and disconnect from work messages after hours.`
      }
    };
  };

  const forecast = getForecast(selectedSign);

  return (
    <div className="space-y-6 pb-28">
      {/* Transits Ticker */}
      <div className="rounded-2xl glass-panel p-4 sm:p-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-black/[0.08] dark:border-white/10">
          <span className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">Planetary Transits</span>
          <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">{COSMIC_TRANSITS.currentPhase} • {COSMIC_TRANSITS.season}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {COSMIC_TRANSITS.planetaryTransits.map((transit, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-0.5 text-xs">
              <span className="font-mono text-black dark:text-white text-[11px] font-medium block">{transit.planet}</span>
              <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">{transit.effect}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sign Selector Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {ZODIAC_SIGNS.map(s => {
          const isSelected = selectedSignId === s.id;
          return (
            <button
              key={s.id}
              onClick={() => setSelectedSignId(s.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap border transition-all active:scale-95 ${
                isSelected
                  ? 'bg-black text-white dark:bg-white dark:text-black font-semibold border-black dark:border-white shadow-sm'
                  : 'bg-black/[0.03] dark:bg-white/[0.03] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border-black/[0.06] dark:border-white/[0.06]'
              }`}
            >
              <span>{s.name}</span>
            </button>
          );
        })}
      </div>

      {/* Forecast Card */}
      <div className="rounded-2xl glass-panel-elevated p-5 sm:p-7 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/[0.08] dark:border-white/10">
          <div>
            <h3 className="text-xl font-bold text-black dark:text-white">
              {selectedSign.name} Transit Forecast
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Ruler: {selectedSign.rulingPlanet} • Element: {selectedSign.element}
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'daily', label: 'Daily' },
              { id: 'love', label: 'Relationships' },
              { id: 'career', label: 'Career' },
              { id: 'warning', label: 'Advisory' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 ${
                  activeCategory === tab.id
                    ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
                    : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Forecast Details */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-black dark:text-white">
            {forecast[activeCategory].headline}
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            {forecast[activeCategory].theme}
          </p>
          <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {forecast[activeCategory].detail}
          </div>
        </div>

      </div>
    </div>
  );
}
