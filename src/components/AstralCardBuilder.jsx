import React, { useState, useEffect } from 'react';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { 
  GLOBAL_CITIES, 
  calculateFullNatalChart, 
  saveUserChart, 
  loadUserChart 
} from '../utils/astronomyCalculator';
import CityTimezonePicker from './CityTimezonePicker';
import { 
  Copy, 
  Check, 
  RefreshCw,
  SlidersHorizontal,
  Compass
} from 'lucide-react';

export default function AstralCardBuilder() {
  const [savedChart, setSavedChart] = useState(null);

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [timeUnknown, setTimeUnknown] = useState(false);
  const [cityName, setCityName] = useState('New York, USA');
  
  const [isManualOverride, setIsManualOverride] = useState(false);
  const [manualSun, setManualSun] = useState('aries');
  const [manualMoon, setManualMoon] = useState('leo');
  const [manualRising, setManualRising] = useState('sagittarius');
  const [manualVenus, setManualVenus] = useState('taurus');
  const [manualMars, setManualMars] = useState('scorpio');

  const [isFlipped, setIsFlipped] = useState(false);
  const [copied, setCopied] = useState(false);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const existing = loadUserChart();
    if (existing) {
      setSavedChart(existing);
      setName(existing.name || '');
      if (existing.birthDate) setBirthDate(existing.birthDate);
      if (existing.birthTime && !existing.birthTime.includes('Unknown')) setBirthTime(existing.birthTime);
      if (existing.cityName) setCityName(existing.cityName);
      setChart(existing);
    }
  }, []);

  const handleCalculate = (e) => {
    if (e) e.preventDefault();
    const calculated = calculateFullNatalChart({
      name,
      birthDate,
      birthTime,
      timeUnknown,
      cityName
    });
    setChart(calculated);
    saveUserChart(calculated);
    setSavedChart(calculated);
  };

  const activeSun = isManualOverride 
    ? (ZODIAC_SIGNS.find(s => s.id === manualSun) || ZODIAC_SIGNS[0])
    : chart?.sun?.sign || ZODIAC_SIGNS[7];

  const activeMoon = isManualOverride 
    ? (ZODIAC_SIGNS.find(s => s.id === manualMoon) || ZODIAC_SIGNS[11])
    : chart?.moon?.sign || ZODIAC_SIGNS[11];

  const activeRising = isManualOverride 
    ? (ZODIAC_SIGNS.find(s => s.id === manualRising) || ZODIAC_SIGNS[3])
    : chart?.rising?.sign || ZODIAC_SIGNS[3];

  const activeVenus = isManualOverride 
    ? (ZODIAC_SIGNS.find(s => s.id === manualVenus) || ZODIAC_SIGNS[8])
    : chart?.venus?.sign || ZODIAC_SIGNS[8];

  const activeMars = isManualOverride 
    ? (ZODIAC_SIGNS.find(s => s.id === manualMars) || ZODIAC_SIGNS[0])
    : chart?.mars?.sign || ZODIAC_SIGNS[0];

  const elementPercentages = chart?.elementPercentages || { Fire: 25, Earth: 25, Air: 25, Water: 25 };

  const handleCopy = () => {
    const text = `stargaze card\nName: ${name}\nSun: ${chart?.sun?.formatted || activeSun.name}\nMoon: ${chart?.moon?.formatted || activeMoon.name}\nRising: ${chart?.rising?.formatted || activeRising.name}\nVenus: ${chart?.venus?.formatted || activeVenus.name}\nMars: ${chart?.mars?.formatted || activeMars.name}\nElements: Fire ${elementPercentages.Fire}%, Earth ${elementPercentages.Earth}%, Air ${elementPercentages.Air}%, Water ${elementPercentages.Water}%`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 pb-28">
      {/* Mode Switcher */}
      <div className="rounded-2xl glass-panel p-4 sm:p-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsManualOverride(false)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 ${
              !isManualOverride
                ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
                : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
            }`}
          >
            Astronomical Calculation
          </button>
          <button
            onClick={() => setIsManualOverride(true)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 flex items-center gap-1.5 ${
              isManualOverride
                ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
                : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
            }`}
          >
            <SlidersHorizontal size={13} />
            <span>Manual Selection</span>
          </button>
        </div>
      </div>

      {/* Grid: Form & Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Form Column */}
        <div className="lg:col-span-5 rounded-2xl glass-panel p-5 sm:p-6 space-y-4 relative z-20">
          <h3 className="text-sm font-bold text-black dark:text-white">
            {!isManualOverride ? 'Birth Coordinates' : 'Select Signs'}
          </h3>

          {!isManualOverride ? (
            <form onSubmit={handleCalculate} className="space-y-3">
              <div>
                <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full glass-input px-4 py-2 rounded-full text-xs font-medium"
                  required
                />
              </div>

              <div>
                <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                  Birth Date
                </label>
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="w-full glass-input px-3 py-2 rounded-lg text-xs font-mono"
                  required
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-mono text-zinc-500 uppercase">
                    Birth Time
                  </label>
                  <label className="flex items-center gap-1 text-[10px] text-zinc-500 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={timeUnknown}
                      onChange={(e) => setTimeUnknown(e.target.checked)}
                      className="rounded text-black dark:text-white w-3 h-3"
                    />
                    <span>Unknown</span>
                  </label>
                </div>

                {!timeUnknown ? (
                  <input
                    type="time"
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    className="w-full glass-input px-3 py-2 rounded-lg text-xs font-mono"
                    required
                  />
                ) : (
                  <div className="px-3 py-1.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 text-xs text-zinc-500 font-mono">
                    12:00 PM (Noon)
                  </div>
                )}
              </div>

              <CityTimezonePicker
                value={cityName}
                onChange={setCityName}
                label="Birth City & Timezone"
              />

              <button
                type="submit"
                className="w-full py-2.5 mt-2 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-sm"
              >
                Calculate Card
              </button>
            </form>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Sun</label>
                <select
                  value={manualSun}
                  onChange={(e) => setManualSun(e.target.value)}
                  className="w-full glass-input px-3 py-2 rounded-full text-xs"
                >
                  {ZODIAC_SIGNS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Moon</label>
                <select
                  value={manualMoon}
                  onChange={(e) => setManualMoon(e.target.value)}
                  className="w-full glass-input px-3 py-2 rounded-full text-xs"
                >
                  {ZODIAC_SIGNS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Rising</label>
                <select
                  value={manualRising}
                  onChange={(e) => setManualRising(e.target.value)}
                  className="w-full glass-input px-3 py-2 rounded-full text-xs"
                >
                  {ZODIAC_SIGNS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Venus</label>
                <select
                  value={manualVenus}
                  onChange={(e) => setManualVenus(e.target.value)}
                  className="w-full glass-input px-3 py-2 rounded-full text-xs"
                >
                  {ZODIAC_SIGNS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Mars</label>
                <select
                  value={manualMars}
                  onChange={(e) => setManualMars(e.target.value)}
                  className="w-full glass-input px-3 py-2 rounded-full text-xs"
                >
                  {ZODIAC_SIGNS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
            </div>
          )}

          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="flex-1 py-2 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.04] hover:bg-black/[0.08] dark:hover:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10 transition-all active:scale-95 flex items-center justify-center gap-1.5"
            >
              <RefreshCw size={13} />
              <span>Flip Card</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Preview Column */}
        <div className="lg:col-span-7 flex flex-col items-center relative z-10">
          {!chart && !isManualOverride ? (
            <div className="w-full max-w-md rounded-2xl p-8 sm:p-12 glass-panel text-center space-y-4">
              <div className="w-12 h-12 rounded-full glass-pill mx-auto flex items-center justify-center text-zinc-400 dark:text-zinc-500">
                <Compass size={22} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-black dark:text-white">
                  Astral Card Generator
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  Enter your birth coordinates and click "Calculate Card" to reveal your personal natal card.
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-md rounded-2xl p-6 sm:p-7 glass-panel-elevated space-y-5">
              {!isFlipped ? (
                /* FRONT */
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                        stargaze
                      </span>
                      <h4 className="text-xl font-bold text-black dark:text-white mt-0.5">
                        {name || 'Astral Card'}
                      </h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                        {cityName} • {birthDate}
                      </p>
                    </div>

                    <span 
                      className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold border border-black/10 dark:border-white/10"
                      style={{ color: activeSun.colorAccent }}
                    >
                      {activeSun.symbol}
                    </span>
                  </div>

                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 text-center">
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">Sun</span>
                    <p className="font-bold text-sm text-black dark:text-white">{activeSun.name}</p>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                      {chart?.sun ? `${chart.sun.degreeInSign}°` : activeSun.element}
                    </p>
                  </div>
                  <div className="border-x border-black/[0.06] dark:border-white/[0.06]">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">Moon</span>
                    <p className="font-bold text-sm text-black dark:text-white">{activeMoon.name}</p>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                      {chart?.moon ? `${chart.moon.degreeInSign}°` : activeMoon.element}
                    </p>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block">Rising</span>
                    <p className="font-bold text-sm text-black dark:text-white">{activeRising.name}</p>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                      {chart?.rising ? `${chart.rising.degreeInSign}°` : activeRising.element}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                    <span className="text-[9px] text-zinc-500 block">VENUS</span>
                    <span className="text-black dark:text-white font-medium">{chart?.venus?.formatted || activeVenus.name}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                    <span className="text-[9px] text-zinc-500 block">MARS</span>
                    <span className="text-black dark:text-white font-medium">{chart?.mars?.formatted || activeMars.name}</span>
                  </div>
                </div>

                {/* Elements solid progress */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                    Elements
                  </span>
                  <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/5 flex overflow-hidden">
                    <div style={{ width: `${elementPercentages.Fire}%` }} className="bg-[#FF3B30]" />
                    <div style={{ width: `${elementPercentages.Earth}%` }} className="bg-[#10B981]" />
                    <div style={{ width: `${elementPercentages.Air}%` }} className="bg-[#38BDF8]" />
                    <div style={{ width: `${elementPercentages.Water}%` }} className="bg-[#818CF8]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="text-[#FF3B30]">Fire {elementPercentages.Fire}%</span>
                    <span className="text-[#10B981]">Earth {elementPercentages.Earth}%</span>
                    <span className="text-[#38BDF8]">Air {elementPercentages.Air}%</span>
                    <span className="text-[#818CF8]">Water {elementPercentages.Water}%</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-black/[0.08] dark:border-white/[0.08] flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>Motto: {activeSun.motto}</span>
                  <span>Ruler: {activeRising.rulingPlanet}</span>
                </div>
              </div>
            ) : (
              /* BACK */
              <div className="space-y-4 text-xs">
                <div className="pb-3 border-b border-black/[0.08] dark:border-white/10 flex justify-between items-center">
                  <h4 className="font-bold text-black dark:text-white text-sm">Profile Details</h4>
                  <span className="text-[10px] font-mono text-zinc-500">BACK</span>
                </div>

                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {activeSun.summary}
                </p>

                <div className="p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">CHART RULER</span>
                  <p className="text-zinc-700 dark:text-zinc-200">
                    With {activeRising.name} Rising, your chart ruler is <strong className="text-black dark:text-white">{activeRising.rulingPlanet}</strong>.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">TAROT CORRESPONDENCE</span>
                  <p className="text-zinc-700 dark:text-zinc-200">{activeSun.tarotCard} — {activeSun.tarotArchetype}</p>
                </div>
              </div>
            )}
          </div>
          )}
        </div>

      </div>
    </div>
  );
}
