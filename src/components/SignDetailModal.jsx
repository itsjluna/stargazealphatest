import React, { useState } from 'react';
import { 
  X, 
  AlertCircle, 
  Check
} from 'lucide-react';

export default function SignDetailModal({ sign, onClose, onSelectForCompatibility, onSelectForAstralCard }) {
  if (!sign) return null;

  const [activeSection, setActiveSection] = useState('overview');

  const SECTIONS = [
    { id: 'overview', label: 'Overview' },
    { id: 'psychology', label: 'Psychology' },
    { id: 'love', label: 'Love' },
    { id: 'career', label: 'Career' },
    { id: 'decans', label: 'Decans' },
    { id: 'esoteric', label: 'Tarot & Anatomy' },
    { id: 'rising', label: 'Rising Sign' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 dark:bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl glass-panel-elevated p-5 sm:p-7 text-black dark:text-white my-auto space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center glass-pill text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all active:scale-95"
        >
          <X size={15} />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/[0.08] dark:border-white/10 pr-10">
          <div>
            <div className="flex items-center gap-2.5">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white">
                {sign.name}
              </h2>
              <span 
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold border border-black/10 dark:border-white/10"
                style={{ color: sign.colorAccent }}
              >
                {sign.symbol}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300">
                {sign.element}
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              {sign.dates} • Ruler: {sign.rulingPlanet} • Motto: {sign.motto}
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-black/[0.06] dark:border-white/[0.08]">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 ${
                activeSection === sec.id
                  ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
                  : 'bg-black/[0.04] dark:bg-white/[0.03] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[200px]">
          {activeSection === 'overview' && (
            <div className="space-y-4">
              <p className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {sign.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-black dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                    Strengths
                  </h4>
                  <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                    {sign.superpowers.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-zinc-400">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
                  <h4 className="text-xs font-bold text-black dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle size={14} className="text-rose-600 dark:text-rose-400" />
                    Challenges
                  </h4>
                  <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300">
                    {sign.shadowSide.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-zinc-400">•</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'psychology' && (
            <div className="p-4 sm:p-5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">Psychological Profile</h4>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {sign.psychologicalProfile}
              </p>
            </div>
          )}

          {activeSection === 'love' && (
            <div className="p-4 sm:p-5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">Relationship Style</h4>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {sign.loveAndIntimacy}
              </p>
            </div>
          )}

          {activeSection === 'career' && (
            <div className="p-4 sm:p-5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">Work and Finances</h4>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {sign.careerAndWealth}
              </p>
            </div>
          )}

          {activeSection === 'decans' && (
            <div className="space-y-2.5">
              {sign.decans.map((d, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-black dark:text-white">Decan {idx + 1} ({d.span})</span>
                    <span className="text-zinc-500 dark:text-zinc-400">Ruler: {d.ruler}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-300">{d.archetype}</p>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'esoteric' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
                <span className="text-zinc-500 dark:text-zinc-400 block text-[10px] uppercase font-mono">TAROT CORRESPONDENCE</span>
                <p className="font-bold text-black dark:text-white text-sm">{sign.tarotCard}</p>
                <p className="text-zinc-600 dark:text-zinc-300">{sign.tarotArchetype}</p>
              </div>

              <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
                <span className="text-zinc-500 dark:text-zinc-400 block text-[10px] uppercase font-mono">ANATOMICAL RULERSHIP</span>
                <p className="font-bold text-black dark:text-white text-sm">{sign.bodyPart}</p>
                <p className="text-zinc-600 dark:text-zinc-300">Crystals: {sign.birthstones.join(', ')}</p>
                <p className="text-zinc-500 dark:text-zinc-400">Metal: {sign.metal} • Plants: {sign.herbsAndFlowers}</p>
              </div>
            </div>
          )}

          {activeSection === 'rising' && (
            <div className="p-4 sm:p-5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">As an Ascendant (Rising Sign)</h4>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {sign.ascendantTraits}
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-black/[0.08] dark:border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                if (onSelectForCompatibility) onSelectForCompatibility(sign);
              }}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-black/[0.04] hover:bg-black/[0.08] dark:bg-white/5 dark:hover:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10 transition-all active:scale-95"
            >
              Compatibility
            </button>
            <button
              onClick={() => {
                onClose();
                if (onSelectForAstralCard) onSelectForAstralCard(sign);
              }}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-black/[0.04] hover:bg-black/[0.08] dark:bg-white/5 dark:hover:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/10 transition-all active:scale-95"
            >
              Astral Card
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 shadow-sm"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
