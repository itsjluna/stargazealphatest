import React, { useState, useEffect } from 'react';
import { ZODIAC_SIGNS } from '../data/zodiacData';
import { 
  calculateFullNatalChart, 
  calculateTrueSynastry,
  saveFriendsCharts, 
  loadFriendsCharts 
} from '../utils/astronomyCalculator';
import CityTimezonePicker from './CityTimezonePicker';
import { 
  UserPlus, 
  Trash2, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp,
  Users
} from 'lucide-react';

export default function GroupCosmosBuilder() {
  const [groupName, setGroupName] = useState('Friend Group');
  const [friendInputs, setFriendInputs] = useState(() => loadFriendsCharts() || []);
  const [calculatedFriends, setCalculatedFriends] = useState([]);
  const [expandedFriendId, setExpandedFriendId] = useState(null);

  const [newName, setNewName] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const [newTimeUnknown, setNewTimeUnknown] = useState(false);
  const [newCity, setNewCity] = useState('New York, USA');

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = loadFriendsCharts() || [];
    setFriendInputs(saved);

    const charts = saved.map(f => {
      const chart = calculateFullNatalChart({
        name: f.name,
        birthDate: f.birthDate,
        birthTime: f.birthTime,
        timeUnknown: f.timeUnknown,
        cityName: f.cityName
      });
      return { ...f, chart };
    });
    setCalculatedFriends(charts);
  }, []);

  const handleAddFriend = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newDate) return;

    const newFriendObj = {
      id: Date.now().toString(),
      name: newName.trim(),
      birthDate: newDate,
      birthTime: newTime || '12:00',
      timeUnknown: newTimeUnknown,
      cityName: newCity
    };

    const newChart = calculateFullNatalChart({
      name: newFriendObj.name,
      birthDate: newFriendObj.birthDate,
      birthTime: newFriendObj.birthTime,
      timeUnknown: newFriendObj.timeUnknown,
      cityName: newFriendObj.cityName
    });

    const updatedInputs = [...friendInputs, newFriendObj];
    const updatedCalculated = [...calculatedFriends, { ...newFriendObj, chart: newChart }];

    setFriendInputs(updatedInputs);
    setCalculatedFriends(updatedCalculated);
    saveFriendsCharts(updatedInputs);

    setNewName('');
    setNewDate('');
    setNewTime('');
  };

  const handleRemoveFriend = (id) => {
    const updatedInputs = friendInputs.filter(f => f.id !== id);
    const updatedCalculated = calculatedFriends.filter(f => f.id !== id);
    setFriendInputs(updatedInputs);
    setCalculatedFriends(updatedCalculated);
    saveFriendsCharts(updatedInputs);
  };

  const evaluateSquadChemistry = () => {
    if (!calculatedFriends || calculatedFriends.length < 2) return null;

    const countByElement = { Fire: 0, Earth: 0, Air: 0, Water: 0 };

    calculatedFriends.forEach(f => {
      countByElement[f.chart.sun.element] = (countByElement[f.chart.sun.element] || 0) + 1.5;
      countByElement[f.chart.moon.element] = (countByElement[f.chart.moon.element] || 0) + 1.0;
      countByElement[f.chart.rising.element] = (countByElement[f.chart.rising.element] || 0) + 0.8;
    });

    const totalPoints = Object.values(countByElement).reduce((a, b) => a + b, 0);
    const elementPercentages = {
      Fire: Math.round((countByElement.Fire / totalPoints) * 100),
      Earth: Math.round((countByElement.Earth / totalPoints) * 100),
      Air: Math.round((countByElement.Air / totalPoints) * 100),
      Water: Math.round((countByElement.Water / totalPoints) * 100)
    };

    const sorted = Object.entries(elementPercentages).sort((a, b) => b[1] - a[1]);
    const dominantElement = sorted[0][0];

    let archetypeTitle = 'Balanced Dynamics';
    let archetypeVibe = 'A group that balances action, ideas, emotion, and practical planning.';
    
    if (elementPercentages.Fire >= 35) {
      archetypeTitle = 'Action & Spontaneity';
      archetypeVibe = 'High initiative, bold choices, and spontaneous activities.';
    } else if (elementPercentages.Air >= 35) {
      archetypeTitle = 'Communication & Ideas';
      archetypeVibe = 'Frequent discussion, varied topics, and shared intellectual curiosity.';
    } else if (elementPercentages.Water >= 35) {
      archetypeTitle = 'Empathy & Depth';
      archetypeVibe = 'Close mutual support, emotional safety, and personal trust.';
    } else if (elementPercentages.Earth >= 35) {
      archetypeTitle = 'Structure & Loyalty';
      archetypeVibe = 'Dependability, consistent plans, and long-term focus.';
    }

    const pairSynergies = [];
    for (let i = 0; i < calculatedFriends.length; i++) {
      for (let j = i + 1; j < calculatedFriends.length; j++) {
        const cA = calculatedFriends[i].chart;
        const cB = calculatedFriends[j].chart;
        
        const syn = calculateTrueSynastry(cA, cB);
        let summaryText = 'Dynamic Synergy';
        if (syn.sunSun.isMajorAspect) {
          summaryText = `Sun ${syn.sunSun.aspect.split('(')[0].trim()}`;
        } else if (syn.sunMoon.isMajorAspect) {
          summaryText = `Sun-Moon ${syn.sunMoon.aspect.split('(')[0].trim()}`;
        } else {
          summaryText = `${cA.sun.sign.name} + ${cB.sun.sign.name}`;
        }

        pairSynergies.push({
          personA: calculatedFriends[i].name,
          personB: calculatedFriends[j].name,
          score: syn.overall,
          summary: summaryText
        });
      }
    }

    const avg = Math.round(pairSynergies.reduce((acc, p) => acc + p.score, 0) / (pairSynergies.length || 1));

    return {
      archetypeTitle,
      archetypeVibe,
      dominantElement,
      elementPercentages,
      averageSynergy: avg,
      pairSynergies
    };
  };

  const groupStats = evaluateSquadChemistry();

  const handleCopyDossier = () => {
    if (!groupStats) return;
    const membersSummary = calculatedFriends.map(f => 
      `${f.name} (Sun: ${f.chart.sun.formatted}, Moon: ${f.chart.moon.formatted}, Rising: ${f.chart.rising.formatted})`
    ).join('\n  ');

    const text = `stargaze: ${groupName}\nDynamics: ${groupStats.archetypeTitle}\nAverage Synergy: ${groupStats.averageSynergy}%\nMembers:\n  ${membersSummary}\nElements:\n  Fire: ${groupStats.elementPercentages.Fire}%\n  Earth: ${groupStats.elementPercentages.Earth}%\n  Air: ${groupStats.elementPercentages.Air}%\n  Water: ${groupStats.elementPercentages.Water}%\nSummary: ${groupStats.archetypeVibe}`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 pb-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Friends List & Add Form */}
        <div className="lg:col-span-5 space-y-4 relative z-20">
          <div className="rounded-2xl glass-panel p-5 space-y-4">
            
            <div>
              <label className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">
                GROUP NAME
              </label>
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full glass-input px-4 py-1.5 rounded-full text-sm font-bold text-black dark:text-white"
              />
            </div>

            {/* List */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                MEMBERS ({calculatedFriends.length})
              </span>

              <div className="space-y-1.5">
                {calculatedFriends.length === 0 ? (
                  <div className="p-3 text-center text-xs text-zinc-400 dark:text-zinc-500 font-mono">
                    No members added yet
                  </div>
                ) : (
                  calculatedFriends.map((f) => {
                    const isExpanded = expandedFriendId === f.id;
                    const c = f.chart;

                    return (
                      <div key={f.id} className="rounded-xl glass-card overflow-hidden">
                        <div 
                          onClick={() => setExpandedFriendId(isExpanded ? null : f.id)}
                          className="p-3 flex items-center justify-between cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                        >
                          <div>
                            <p className="font-medium text-xs text-black dark:text-white">{f.name}</p>
                            <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                              {c.sun.formatted}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400">
                              {c.rising.sign.name}
                            </span>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveFriend(f.id);
                              }}
                              className="w-6 h-6 rounded-full flex items-center justify-center text-zinc-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                              title="Remove"
                            >
                              <Trash2 size={13} />
                            </button>

                          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5">
                            {isExpanded ? <ChevronUp size={12} className="text-zinc-400" /> : <ChevronDown size={12} className="text-zinc-400" />}
                          </div>
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="px-3.5 pb-3 pt-1 border-t border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-black/30 space-y-2 text-xs font-mono">
                          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                            <div className="p-1.5 rounded bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                              <span className="text-zinc-500 block">SUN</span>
                              <span className="text-black dark:text-white">{c.sun.sign.name}</span>
                            </div>
                            <div className="p-1.5 rounded bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                              <span className="text-zinc-500 block">MOON</span>
                              <span className="text-black dark:text-white">{c.moon.sign.name}</span>
                            </div>
                            <div className="p-1.5 rounded bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                              <span className="text-zinc-500 block">RISING</span>
                              <span className="text-black dark:text-white">{c.rising.sign.name}</span>
                            </div>
                          </div>
                          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 text-right">{f.cityName} • {f.birthDate}</p>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
              </div>
            </div>

            {/* Add Friend Form */}
            <form onSubmit={handleAddFriend} className="pt-3 border-t border-black/[0.08] dark:border-white/10 space-y-2.5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase block">Add Friend</span>

              <input
                type="text"
                placeholder="Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full glass-input px-4 py-1.5 rounded-full text-xs"
                required
              />

              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                  className="w-full glass-input px-4 py-1.5 rounded-full text-xs font-mono"
                  required
                />
                <input
                  type="time"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="w-full glass-input px-4 py-1.5 rounded-full text-xs font-mono"
                />
              </div>

              <CityTimezonePicker
                value={newCity}
                onChange={setNewCity}
                label="Birth City & Timezone"
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <UserPlus size={13} />
                <span>Calculate & Add Friend</span>
              </button>
            </form>

          </div>
        </div>

        {/* Right Column: Group Stats */}
        <div className="lg:col-span-7 space-y-4 relative z-10">
          {!groupStats ? (
            <div className="rounded-2xl glass-panel p-8 sm:p-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full glass-pill mx-auto flex items-center justify-center text-zinc-400 dark:text-zinc-500">
                <Users size={22} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-black dark:text-white">
                  Joint Group Chemistry
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto leading-relaxed">
                  Add at least 2 friends with their birth dates and locations to reveal squad dynamics, collective elements, and pairwise synastry.
                </p>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl glass-panel-elevated p-5 sm:p-7 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-black/[0.08] dark:border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {groupStats.archetypeTitle}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {groupName} • {calculatedFriends.length} Members
                  </p>
                </div>

                <div className="px-4 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/10 dark:border-white/10 text-center self-start sm:self-auto">
                  <span className="text-lg font-bold text-black dark:text-white font-mono">{groupStats.averageSynergy}%</span>
                  <span className="block text-[8px] font-mono text-zinc-500 uppercase">Avg Synergy</span>
                </div>
              </div>

              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {groupStats.archetypeVibe}
              </p>

              {/* Elements Progress */}
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                  Collective Elements
                </span>
                <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/5 flex overflow-hidden">
                  <div style={{ width: `${groupStats.elementPercentages.Fire}%` }} className="bg-[#FF3B30]" />
                  <div style={{ width: `${groupStats.elementPercentages.Earth}%` }} className="bg-[#10B981]" />
                  <div style={{ width: `${groupStats.elementPercentages.Air}%` }} className="bg-[#38BDF8]" />
                  <div style={{ width: `${groupStats.elementPercentages.Water}%` }} className="bg-[#818CF8]" />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="text-[#FF3B30]">Fire {groupStats.elementPercentages.Fire}%</span>
                  <span className="text-[#10B981]">Earth {groupStats.elementPercentages.Earth}%</span>
                  <span className="text-[#38BDF8]">Air {groupStats.elementPercentages.Air}%</span>
                  <span className="text-[#818CF8]">Water {groupStats.elementPercentages.Water}%</span>
                </div>
              </div>

              {/* Pairwise Synastry */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                  Pairwise Synastry
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono max-h-48 overflow-y-auto">
                  {groupStats.pairSynergies.map((pair, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex justify-between items-center">
                      <div>
                        <span className="text-black dark:text-white block font-sans">{pair.personA} & {pair.personB}</span>
                        <span className="text-[10px] text-zinc-500">{pair.summary}</span>
                      </div>
                      <span className="text-black dark:text-white font-bold">{pair.score}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Copy */}
              <div className="pt-3 border-t border-black/[0.08] dark:border-white/10 flex justify-end">
                <button
                  onClick={handleCopyDossier}
                  className="px-5 py-2 rounded-full text-xs font-semibold bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-1.5 shadow-sm"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy Summary'}</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
