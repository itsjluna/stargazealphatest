import React, { useState } from 'react';
import { ZODIAC_SIGNS, ASCENDANT_PROFILES } from '../data/zodiacData';
import { 
  GLOBAL_CITIES, 
  calculateFullNatalChart 
} from '../utils/astronomyCalculator';
import CityTimezonePicker from './CityTimezonePicker';
import { 
  ChevronRight, 
  Calculator, 
  Layers 
} from 'lucide-react';

const HOUSE_NAMES = [
  '1st House (Self & Identity)',
  '2nd House (Values & Resources)',
  '3rd House (Mind & Communication)',
  '4th House (Home & Foundations)',
  '5th House (Creativity & Joy)',
  '6th House (Daily Routines & Health)',
  '7th House (Partnerships & Marriage)',
  '8th House (Transformation & Rebirth)',
  '9th House (Philosophy & Exploration)',
  '10th House (Career & Public Life)',
  '11th House (Community & Objectives)',
  '12th House (Unconscious & Integration)'
];

export default function AscendantsExplorer({ onSelectSign }) {
  const [calcDate, setCalcDate] = useState('1998-10-24');
  const [calcTime, setCalcTime] = useState('14:30');
  const [calcCity, setCalcCity] = useState('New York, USA');
  const [computedAscendant, setComputedAscendant] = useState(null);

  const [mode, setMode] = useState('calculator');
  const [selectedAscendant, setSelectedAscendant] = useState('scorpio');

  const handleComputeAscendant = (e) => {
    if (e) e.preventDefault();
    const chart = calculateFullNatalChart({
      name: 'User',
      birthDate: calcDate,
      birthTime: calcTime,
      timeUnknown: false,
      cityName: calcCity
    });

    setComputedAscendant(chart.rising);
    setSelectedAscendant(chart.rising.signId);
  };

  const currentSign = ZODIAC_SIGNS.find(s => s.id === selectedAscendant) || ZODIAC_SIGNS[0];
  const profile = ASCENDANT_PROFILES[selectedAscendant] || ASCENDANT_PROFILES.aries;

  const signIndex = ZODIAC_SIGNS.findIndex(s => s.id === selectedAscendant);
  const housePlacements = HOUSE_NAMES.map((houseName, idx) => {
    const currentHouseSignIndex = (signIndex + idx) % 12;
    return {
      house: houseName,
      houseNumber: idx + 1,
      sign: ZODIAC_SIGNS[currentHouseSignIndex]
    };
  });

  return (
    <div className="space-y-6 pb-28">
      {/* Mode Selector */}
      <div className="rounded-2xl glass-panel p-4 sm:p-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('calculator')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 flex items-center gap-1.5 ${
              mode === 'calculator'
                ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
                : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
            }`}
          >
            <Calculator size={13} />
            <span>Ascendant Calculator</span>
          </button>

          <button
            onClick={() => setMode('library')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 flex items-center gap-1.5 ${
              mode === 'library'
                ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
                : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
            }`}
          >
            <Layers size={13} />
            <span>Browse 12 Rising Signs</span>
          </button>
        </div>
      </div>

      {/* CALCULATOR PANEL */}
      {mode === 'calculator' && (
        <div className="rounded-2xl glass-panel p-5 sm:p-6 space-y-4">
          <h3 className="text-sm font-bold text-black dark:text-white">
            Calculate Ascendant from Birth Data
          </h3>

          <form onSubmit={handleComputeAscendant} className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
            <div>
              <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                Birth Date
              </label>
              <input
                type="date"
                value={calcDate}
                onChange={(e) => setCalcDate(e.target.value)}
                className="w-full glass-input px-3 py-2 rounded-lg text-xs font-mono"
                required
              />
            </div>

            <div>
              <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                Birth Time
              </label>
              <input
                type="time"
                value={calcTime}
                onChange={(e) => setCalcTime(e.target.value)}
                className="w-full glass-input px-3 py-2 rounded-lg text-xs font-mono"
                required
              />
            </div>

            <CityTimezonePicker
              value={calcCity}
              onChange={setCalcCity}
              label="Birth City & Timezone"
            />

            <div className="sm:col-span-3 pt-1">
              <button
                type="submit"
                className="px-5 py-2 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
              >
                <Calculator size={13} />
                <span>Calculate Rising Sign</span>
              </button>
            </div>
          </form>

          {computedAscendant && (
            <div className="mt-3 p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-zinc-500 text-[10px] block">CALCULATED ASCENDANT</span>
                <span className="text-black dark:text-white font-bold">{computedAscendant.formatted}</span>
              </div>
              <div className="text-right">
                <span className="text-zinc-500 text-[10px] block">CHART RULER</span>
                <span className="text-black dark:text-white font-medium">{computedAscendant.sign.rulingPlanet}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 12 SIGN SELECTOR PILLS */}
      {mode === 'library' && (
        <div className="rounded-2xl glass-panel p-4 sm:p-5 space-y-2">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Select Rising Sign:</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {ZODIAC_SIGNS.map((s) => {
              const isSelected = selectedAscendant === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedAscendant(s.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center justify-between border transition-all active:scale-95 ${
                    isSelected
                      ? 'bg-black text-white dark:bg-white dark:text-black font-semibold border-black dark:border-white shadow-sm'
                      : 'bg-black/[0.03] dark:bg-white/[0.03] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border-black/[0.06] dark:border-white/[0.07]'
                  }`}
                >
                  <span>{s.name}</span>
                  <span className="font-mono text-[10px]" style={{ color: isSelected ? 'inherit' : s.colorAccent }}>{s.symbol}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Ascendant Details Card */}
      <div className="rounded-2xl glass-panel p-5 sm:p-7 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-black/[0.08] dark:border-white/10">
          <div>
            <div className="flex items-center gap-2.5">
              <h3 className="text-xl font-bold text-black dark:text-white">
                {profile.risingName}
              </h3>
              <span className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs border border-black/10 dark:border-white/10" style={{ color: currentSign.colorAccent }}>
                {currentSign.symbol}
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              Archetype: {profile.mask} • Chart Ruler: {profile.chartRuler}
            </p>
          </div>

          <button
            onClick={() => onSelectSign(currentSign)}
            className="px-4 py-1.5 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white transition-all active:scale-95 flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>Read {currentSign.name} Profile</span>
            <ChevronRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
            <h4 className="font-bold text-black dark:text-white uppercase text-[10px] tracking-wider">First Impression</h4>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{profile.firstImpression}</p>
          </div>

          <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
            <h4 className="font-bold text-black dark:text-white uppercase text-[10px] tracking-wider">Physical Carriage</h4>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{profile.physicalTraits}</p>
          </div>

          <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
            <h4 className="font-bold text-black dark:text-white uppercase text-[10px] tracking-wider">Life Focus</h4>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{profile.lifeTheme}</p>
          </div>
        </div>

        {/* The 12 House Wheel */}
        <div className="space-y-3 pt-2">
          <h4 className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">
            12 Natal Houses for {currentSign.name} Rising
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {housePlacements.map((hp) => (
              <div 
                key={hp.houseNumber} 
                className="p-3 rounded-lg glass-card flex items-center justify-between text-xs"
              >
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase block">
                    House {hp.houseNumber}
                  </span>
                  <p className="font-medium text-zinc-700 dark:text-zinc-200">
                    {hp.house.split('(')[1].replace(')', '')}
                  </p>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end">
                    <span className="font-bold text-black dark:text-white">{hp.sign.name}</span>
                    <span className="font-mono text-[10px]" style={{ color: hp.sign.colorAccent }}>{hp.sign.symbol}</span>
                  </div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500">{hp.sign.element}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
