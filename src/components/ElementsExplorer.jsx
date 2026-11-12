import React, { useState } from 'react';
import { ELEMENTS, MODALITIES, ZODIAC_SIGNS } from '../data/zodiacData';
import { Flame, Mountain, Wind, Droplets } from 'lucide-react';

export default function ElementsExplorer({ onSelectSign }) {
  const [selectedElement, setSelectedElement] = useState('Fire');
  const [activeTab, setActiveTab] = useState('elements');

  const getElementIcon = (name) => {
    switch (name) {
      case 'Fire': return Flame;
      case 'Earth': return Mountain;
      case 'Air': return Wind;
      case 'Water': return Droplets;
      default: return Flame;
    }
  };

  const currentEl = ELEMENTS[selectedElement];
  const Icon = getElementIcon(selectedElement);

  return (
    <div className="space-y-6 pb-28">
      {/* Tab Switcher */}
      <div className="rounded-2xl glass-panel p-4 sm:p-5 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('elements')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 ${
            activeTab === 'elements'
              ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
              : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
          }`}
        >
          4 Elements
        </button>
        <button
          onClick={() => setActiveTab('modalities')}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 ${
            activeTab === 'modalities'
              ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm'
              : 'bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white border border-black/[0.06] dark:border-white/[0.06]'
          }`}
        >
          3 Modalities
        </button>
      </div>

      {/* Elements View */}
      {activeTab === 'elements' && (
        <div className="space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto py-2">
            {Object.keys(ELEMENTS).map((key) => {
              const el = ELEMENTS[key];
              const ElIcon = getElementIcon(key);
              const isSelected = selectedElement === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedElement(key)}
                  className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full mx-auto flex flex-col items-center justify-center p-3 text-center transition-all duration-200 active:scale-95 ${
                    isSelected
                      ? 'bg-black/[0.06] dark:bg-white/[0.08] border-2 border-black dark:border-white text-black dark:text-white shadow-md scale-105'
                      : 'glass-card border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20'
                  }`}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center mb-1 bg-black/[0.03] dark:bg-white/[0.05]"
                  >
                    <ElIcon size={18} style={{ color: el.color }} />
                  </div>
                  <h3 className="font-bold text-black dark:text-white text-sm sm:text-base leading-tight">
                    {el.name}
                  </h3>
                  <span className="text-[10px] font-mono font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mt-0.5">
                    {el.code}
                  </span>
                  <p className="text-[9px] text-zinc-400 dark:text-zinc-500 font-mono mt-0.5 line-clamp-1 px-1">
                    {el.signs.join(' • ')}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl glass-panel p-5 sm:p-7 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/[0.08] dark:border-white/10">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]"
                  style={{ color: currentEl.color }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {currentEl.name} Element
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    Nature: {currentEl.nature}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {currentEl.signs.map(signName => {
                  const s = ZODIAC_SIGNS.find(item => item.name === signName);
                  return (
                    <button
                      key={signName}
                      onClick={() => onSelectSign(s)}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.04] hover:bg-black/[0.08] dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white transition-all active:scale-95 flex items-center gap-1.5"
                    >
                      <span className="font-mono text-[9px]" style={{ color: s?.colorAccent }}>{s?.symbol}</span>
                      <span>{signName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
                <h4 className="font-bold text-black dark:text-white uppercase tracking-wider text-[10px]">Core Essence</h4>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{currentEl.essence}</p>
              </div>

              <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
                <h4 className="font-bold text-black dark:text-white uppercase tracking-wider text-[10px]">Psychology</h4>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{currentEl.psychology}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
                <h4 className="font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider text-[10px]">In Excess</h4>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{currentEl.excess}</p>
              </div>

              <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 space-y-1">
                <h4 className="font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider text-[10px]">In Deficit</h4>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{currentEl.deficit}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/10 text-xs space-y-1">
              <h4 className="font-bold text-black dark:text-white uppercase tracking-wider text-[10px]">Interaction Dynamics</h4>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{currentEl.compatibilityRule}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modalities View */}
      {activeTab === 'modalities' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(MODALITIES).map((key) => {
            const mod = MODALITIES[key];
            return (
              <div key={key} className="p-5 rounded-2xl glass-panel space-y-3 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">{mod.season}</span>
                  <h3 className="text-lg font-bold text-black dark:text-white">{mod.name}</h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{mod.role}</p>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed pt-1">{mod.description}</p>
                </div>

                <div className="pt-3 border-t border-black/[0.08] dark:border-white/10">
                  <p className="text-[10px] font-mono text-zinc-500 mb-1.5">SIGNS:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {mod.signs.map(signName => {
                      const s = ZODIAC_SIGNS.find(item => item.name === signName);
                      return (
                        <button
                          key={signName}
                          onClick={() => onSelectSign(s)}
                          className="px-2.5 py-1 rounded-full text-xs bg-black/[0.04] dark:bg-white/[0.04] hover:bg-black/[0.08] dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white transition-all active:scale-95 flex items-center gap-1"
                        >
                          <span className="font-mono text-[9px]" style={{ color: s?.colorAccent }}>{s?.symbol}</span>
                          <span>{signName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
