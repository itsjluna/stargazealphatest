import React, { useState } from 'react';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { 
  getRealtimeSkyPositions, 
  fetchLiveDailyHoroscope 
} from '../utils/astronomyCalculator';
import { 
  RefreshCw 
} from 'lucide-react';

export default function TransitsForecast({ onSelectSign }) {
  const [selectedSignId, setSelectedSignId] = useState('scorpio');
  const [activeCategory, setActiveCategory] = useState('daily');
  
  const [realtimeSky, setRealtimeSky] = useState(() => getRealtimeSkyPositions());
  const [isSyncingSky, setIsSyncingSky] = useState(false);

  const [liveHoroscopes, setLiveHoroscopes] = useState({});
  const [loadingLive, setLoadingLive] = useState(false);

  const selectedSign = ZODIAC_SIGNS.find(s => s.id === selectedSignId) || ZODIAC_SIGNS[0];

  const handleSyncRealtimeSky = () => {
    setIsSyncingSky(true);
    setTimeout(() => {
      setRealtimeSky(getRealtimeSkyPositions());
      setIsSyncingSky(false);
    }, 300);
  };

  const handleFetchLiveHoroscope = async () => {
    setLoadingLive(true);
    const result = await fetchLiveDailyHoroscope(selectedSign.name);
    if (result && result.horoscope) {
      setLiveHoroscopes(prev => ({
        ...prev,
        [selectedSignId]: result
      }));
    }
    setLoadingLive(false);
  };

  const getForecast = (sign) => {
    return {
      daily: {
        headline: `Focus and Planning for ${sign.name}`,
        theme: 'Setting practical boundaries and attending to key priorities.',
        detail: `Under the current ${realtimeSky.season} transit cycle, ${sign.name} benefits from focusing on their core motto "${sign.motto}". Today is suited for organizing upcoming plans, declining unnecessary distractions, and completing unfinished tasks.`
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
  const currentLiveHoroscope = liveHoroscopes[selectedSignId];

  return (
    <div className="space-y-6 pb-28">
      {/* Planetary Transits Ticker */}
      <div className="rounded-2xl glass-panel p-4 sm:p-5 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-black/[0.08] dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">
              Planetary Transits
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              {realtimeSky.season} • {realtimeSky.moonPhase.phaseName} ({realtimeSky.moonPhase.illumination}%)
            </span>
            <button
              onClick={handleSyncRealtimeSky}
              disabled={isSyncingSky}
              className="w-7 h-7 rounded-full glass-pill flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all active:scale-95"
              title="Sync Sky Positions"
            >
              <RefreshCw size={12} className={isSyncingSky ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* Planetary Positions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-0.5 text-xs">
            <span className="font-mono text-zinc-500 text-[10px] uppercase block">Sun</span>
            <p className="font-bold text-xs text-black dark:text-white">{realtimeSky.planets.sun.formatted}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-0.5 text-xs">
            <span className="font-mono text-zinc-500 text-[10px] uppercase block">Moon</span>
            <p className="font-bold text-xs text-black dark:text-white">{realtimeSky.planets.moon.formatted}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-0.5 text-xs">
            <span className="font-mono text-zinc-500 text-[10px] uppercase block">Mercury</span>
            <p className="font-bold text-xs text-black dark:text-white">{realtimeSky.planets.mercury.formatted}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-0.5 text-xs">
            <span className="font-mono text-zinc-500 text-[10px] uppercase block">Venus</span>
            <p className="font-bold text-xs text-black dark:text-white">{realtimeSky.planets.venus.formatted}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-0.5 text-xs">
            <span className="font-mono text-zinc-500 text-[10px] uppercase block">Mars</span>
            <p className="font-bold text-xs text-black dark:text-white">{realtimeSky.planets.mars.formatted}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-0.5 text-xs">
            <span className="font-mono text-zinc-500 text-[10px] uppercase block">Jupiter</span>
            <p className="font-bold text-xs text-black dark:text-white">{realtimeSky.planets.jupiter.formatted}</p>
          </div>
          <div className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-0.5 text-xs">
            <span className="font-mono text-zinc-500 text-[10px] uppercase block">Saturn</span>
            <p className="font-bold text-xs text-black dark:text-white">{realtimeSky.planets.saturn.formatted}</p>
          </div>
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
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-black dark:text-white">
                {selectedSign.name} Transit Forecast
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-500">
                {selectedSign.element}
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
              Ruler: {selectedSign.rulingPlanet} • {realtimeSky.season}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleFetchLiveHoroscope}
              disabled={loadingLive}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white transition-all active:scale-95 flex items-center gap-1.5"
            >
              <RefreshCw size={12} className={loadingLive ? 'animate-spin' : ''} />
              <span>{loadingLive ? 'Updating Reading...' : currentLiveHoroscope ? 'Refresh Daily Reading' : 'Get Daily Reading'}</span>
            </button>

            {/* Category Switchers */}
            <div className="flex flex-wrap gap-1">
              {[
                { id: 'daily', label: 'Daily' },
                { id: 'love', label: 'Relationships' },
                { id: 'career', label: 'Career' },
                { id: 'warning', label: 'Advisory' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 ${
                    activeCategory === tab.id
                      ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
                      : 'bg-black/[0.03] dark:bg-white/[0.03] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.05] dark:border-white/[0.05]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Horoscope Dispatch Card */}
        {currentLiveHoroscope && (
          <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
            <div className="flex items-center justify-between pb-1 border-b border-black/[0.05] dark:border-white/[0.05]">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                Daily Dispatch • {selectedSign.name}
              </span>
              <span className="text-[10px] font-mono text-zinc-500">
                {currentLiveHoroscope.date || 'Today'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
              {currentLiveHoroscope.horoscope}
            </p>
          </div>
        )}

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
