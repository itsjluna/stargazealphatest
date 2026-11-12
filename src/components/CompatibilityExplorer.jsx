import React, { useState } from 'react';
import { ZODIAC_SIGNS, getCompatibility } from '../data/zodiacData';
import { 
  GLOBAL_CITIES, 
  calculateFullNatalChart, 
  calculateTrueSynastry 
} from '../utils/astronomyCalculator';
import CityTimezonePicker from './CityTimezonePicker';
import { 
  HeartHandshake, 
  ArrowRightLeft,
  Grid,
  Calculator
} from 'lucide-react';

export default function CompatibilityExplorer({ initialSignA, initialSignB }) {
  const [synastryMode, setSynastryMode] = useState('birthdate');

  const [signAId, setSignAId] = useState(initialSignA?.id || 'aries');
  const [signBId, setSignBId] = useState(initialSignB?.id || 'leo');

  const [nameA, setNameA] = useState('');
  const [dateA, setDateA] = useState('');
  const [timeA, setTimeA] = useState('');
  const [cityA, setCityA] = useState('New York, USA');

  const [nameB, setNameB] = useState('');
  const [dateB, setDateB] = useState('');
  const [timeB, setTimeB] = useState('');
  const [cityB, setCityB] = useState('London, UK');

  const [computedSynastry, setComputedSynastry] = useState(null);

  const quickCompatibility = getCompatibility(signAId, signBId);

  const handleCalculateBirthSynastry = (e) => {
    if (e) e.preventDefault();
    if (!dateA || !dateB) return;
    const chartA = calculateFullNatalChart({ name: nameA || 'Person A', birthDate: dateA, birthTime: timeA || '12:00', cityName: cityA });
    const chartB = calculateFullNatalChart({ name: nameB || 'Person B', birthDate: dateB, birthTime: timeB || '12:00', cityName: cityB });
    const syn = calculateTrueSynastry(chartA, chartB);
    setComputedSynastry(syn);
  };

  const handleSwapQuick = () => {
    setSignAId(signBId);
    setSignBId(signAId);
  };

  return (
    <div className="space-y-6 pb-28">
      {/* Mode Switcher */}
      <div className="rounded-2xl glass-panel p-4 sm:p-5 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setSynastryMode('birthdate')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 flex items-center gap-1.5 ${
            synastryMode === 'birthdate'
              ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
              : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
          }`}
        >
          <Calculator size={13} />
          <span>Birth Data Synastry</span>
        </button>

        <button
          onClick={() => setSynastryMode('quick-signs')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 ${
            synastryMode === 'quick-signs'
              ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
              : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
          }`}
        >
          Quick Sign Pair
        </button>

        <button
          onClick={() => setSynastryMode('matrix')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 flex items-center gap-1.5 ${
            synastryMode === 'matrix'
              ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
              : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
          }`}
        >
          <Grid size={13} />
          <span>12×12 Heatmap</span>
        </button>
      </div>

      {/* MODE 1: BIRTH DATA SYNASTRY */}
      {synastryMode === 'birthdate' && (
        <div className="space-y-6">
          <form onSubmit={handleCalculateBirthSynastry} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Person A */}
              <div className="p-4 sm:p-5 rounded-2xl glass-panel space-y-3 relative z-20">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">PERSON A</span>
                <input
                  type="text"
                  value={nameA}
                  onChange={(e) => setNameA(e.target.value)}
                  className="w-full glass-input px-3 py-1.5 rounded-lg text-xs font-medium"
                  placeholder="Name"
                  required
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={dateA}
                    onChange={(e) => setDateA(e.target.value)}
                    className="w-full glass-input px-3 py-1.5 rounded-lg text-xs font-mono"
                    required
                  />
                  <input
                    type="time"
                    value={timeA}
                    onChange={(e) => setTimeA(e.target.value)}
                    className="w-full glass-input px-3 py-1.5 rounded-lg text-xs font-mono"
                  />
                </div>
                <CityTimezonePicker
                  value={cityA}
                  onChange={setCityA}
                  label="Birth City & Timezone"
                />
              </div>

              {/* Person B */}
              <div className="p-4 sm:p-5 rounded-2xl glass-panel space-y-3 relative z-10">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">PERSON B</span>
                <input
                  type="text"
                  value={nameB}
                  onChange={(e) => setNameB(e.target.value)}
                  className="w-full glass-input px-3 py-1.5 rounded-lg text-xs font-medium"
                  placeholder="Name"
                  required
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    value={dateB}
                    onChange={(e) => setDateB(e.target.value)}
                    className="w-full glass-input px-3 py-1.5 rounded-lg text-xs font-mono"
                    required
                  />
                  <input
                    type="time"
                    value={timeB}
                    onChange={(e) => setTimeB(e.target.value)}
                    className="w-full glass-input px-3 py-1.5 rounded-lg text-xs font-mono"
                  />
                </div>
                <CityTimezonePicker
                  value={cityB}
                  onChange={setCityB}
                  label="Birth City & Timezone"
                />
              </div>

            </div>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
            >
              <Calculator size={14} />
              <span>Calculate Synastry</span>
            </button>
          </form>

          {!computedSynastry ? (
            <div className="rounded-2xl glass-panel p-8 sm:p-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full glass-pill mx-auto flex items-center justify-center text-zinc-400 dark:text-zinc-500">
                <HeartHandshake size={22} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-black dark:text-white">
                  Birth Data Synastry
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  Enter birth dates, times, and cities for both individuals and click &quot;Calculate Synastry&quot; to generate multi-planet aspect synergy.
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl glass-panel-elevated p-5 sm:p-7 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-black/[0.08] dark:border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {nameA || 'Person A'} & {nameB || 'Person B'}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
                    {computedSynastry.chartA.sun.formatted} — {computedSynastry.chartB.sun.formatted}
                  </p>
                </div>

                <div className="px-4 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/10 dark:border-white/10 text-center self-start sm:self-auto">
                  <span className="text-xl font-bold text-black dark:text-white">{computedSynastry.overall}%</span>
                  <span className="block text-[9px] font-mono text-zinc-500 uppercase">Synergy</span>
                </div>
              </div>

              {/* Aspect Cards with plain solid colors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-zinc-600 dark:text-zinc-400">Sun ✦ Moon</span>
                    <span className="text-black dark:text-white font-mono">{computedSynastry.soulmateScore}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: `${computedSynastry.soulmateScore}%` }} />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-zinc-600 dark:text-zinc-400">Venus ✦ Mars</span>
                    <span className="text-black dark:text-white font-mono">{computedSynastry.passionScore}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: `${computedSynastry.passionScore}%` }} />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-zinc-600 dark:text-zinc-400">Moon ✦ Moon</span>
                    <span className="text-black dark:text-white font-mono">{computedSynastry.moonMoon.score}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${computedSynastry.moonMoon.score}%` }} />
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-zinc-600 dark:text-zinc-400">Sun ✦ Sun</span>
                    <span className="text-black dark:text-white font-mono">{computedSynastry.sunSun.score}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${computedSynastry.sunSun.score}%` }} />
                  </div>
                </div>
              </div>

              {/* Aspect list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">Sun ✦ Sun Angle</span>
                  <span className="text-black dark:text-white font-medium">{computedSynastry.sunSun.aspect}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">Sun ✦ Moon Angle</span>
                  <span className="text-black dark:text-white font-medium">{computedSynastry.sunMoon.aspect}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">Venus ✦ Mars Angle</span>
                  <span className="text-black dark:text-white font-medium">{computedSynastry.venusMars.aspect}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex justify-between">
                  <span className="text-zinc-500 dark:text-zinc-400">Ascendant ✦ Ascendant</span>
                  <span className="text-black dark:text-white font-medium">{computedSynastry.risingRising.aspect}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 2: QUICK SIGN PAIR */}
      {synastryMode === 'quick-signs' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
            <div className="md:col-span-2 rounded-xl glass-panel p-4 space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-500 uppercase block">FIRST SIGN</label>
              <select
                value={signAId}
                onChange={(e) => setSignAId(e.target.value)}
                className="w-full glass-input px-4 py-2 rounded-full text-xs"
              >
                {ZODIAC_SIGNS.map(s => <option key={s.id} value={s.id}>{s.name} ({s.element})</option>)}
              </select>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleSwapQuick}
                className="w-9 h-9 rounded-full glass-pill flex items-center justify-center text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-all active:scale-95"
              >
                <ArrowRightLeft size={14} />
              </button>
            </div>

            <div className="md:col-span-2 rounded-xl glass-panel p-4 space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-500 uppercase block">SECOND SIGN</label>
              <select
                value={signBId}
                onChange={(e) => setSignBId(e.target.value)}
                className="w-full glass-input px-4 py-2 rounded-full text-xs"
              >
                {ZODIAC_SIGNS.map(s => <option key={s.id} value={s.id}>{s.name} ({s.element})</option>)}
              </select>
            </div>
          </div>

          <div className="rounded-2xl glass-panel p-5 sm:p-6 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] dark:border-white/10">
              <div>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">{quickCompatibility.aspectName}</span>
                <h3 className="text-lg font-bold text-black dark:text-white">{quickCompatibility.dynamicTitle}</h3>
              </div>
              <span className="text-lg font-bold font-mono text-black dark:text-white px-3 py-1 rounded-lg bg-black/[0.04] dark:bg-white/5 border border-black/10 dark:border-white/10">
                {quickCompatibility.overall}%
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {quickCompatibility.dynamicText}
            </p>
          </div>
        </div>
      )}

      {/* MODE 3: 12x12 HEATMAP */}
      {synastryMode === 'matrix' && (
        <div className="rounded-2xl glass-panel p-4 sm:p-5 overflow-x-auto space-y-3">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Click any cell to load pairing:</p>
          <table className="w-full border-collapse text-center text-xs">
            <thead>
              <tr>
                <th className="p-1.5 text-zinc-400 font-mono text-[10px]"></th>
                {ZODIAC_SIGNS.map(s => (
                  <th key={s.id} className="p-1.5 font-mono text-[10px] text-zinc-600 dark:text-zinc-400 min-w-[34px]">
                    {s.symbol}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ZODIAC_SIGNS.map(rowSign => (
                <tr key={rowSign.id} className="border-t border-black/[0.04] dark:border-white/[0.04]">
                  <td className="p-1.5 text-zinc-700 dark:text-zinc-300 text-left font-medium whitespace-nowrap text-xs">
                    {rowSign.name}
                  </td>
                  {ZODIAC_SIGNS.map(colSign => {
                    const pair = getCompatibility(rowSign.id, colSign.id);
                    const isHigh = pair.overall >= 90;

                    return (
                      <td key={colSign.id} className="p-1">
                        <button
                          onClick={() => {
                            setSignAId(rowSign.id);
                            setSignBId(colSign.id);
                            setSynastryMode('quick-signs');
                          }}
                          className={`w-full py-1 rounded font-mono text-[11px] transition-colors ${
                            isHigh 
                              ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 font-bold'
                              : 'bg-black/[0.02] dark:bg-white/[0.02] text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/5'
                          }`}
                        >
                          {pair.overall}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
