import React, { useState, useRef, useEffect } from 'react';
import { GLOBAL_CITIES, getAutoDetectedCity } from '../utils/astronomyCalculator';
import { MapPin, Search, ChevronDown, Check, Compass, X } from 'lucide-react';

export default function CityTimezonePicker({ value, onChange, label = 'Birth City & Timezone' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input on open
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Selected city object
  const currentCity = GLOBAL_CITIES.find(c => c.name === value) || GLOBAL_CITIES[0];

  // Filtered cities based on search
  const filteredCities = GLOBAL_CITIES.filter(c => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    const nameMatch = c.name.toLowerCase().includes(q);
    const tzString = `utc ${c.tz >= 0 ? '+' : ''}${c.tz}`.toLowerCase();
    const tzMatch = tzString.includes(q) || `+${c.tz}`.includes(q) || `-${Math.abs(c.tz)}`.includes(q);
    return nameMatch || tzMatch;
  });

  const handleSelect = (cityName) => {
    onChange(cityName);
    setIsOpen(false);
    setSearch('');
  };

  const handleAutoDetect = () => {
    const detected = getAutoDetectedCity();
    onChange(detected.name);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <div className={`relative space-y-1 ${isOpen ? 'z-50' : 'z-10'}`} ref={containerRef}>
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider block">
            {label}
          </label>
          <button
            type="button"
            onClick={handleAutoDetect}
            className="text-[10px] px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-zinc-600 dark:text-zinc-300 flex items-center gap-1 transition-all active:scale-95"
          >
            <Compass size={11} />
            <span>Detect Location</span>
          </button>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 rounded-full border border-black/15 dark:border-white/15 bg-white/90 dark:bg-[#121218]/90 text-zinc-900 dark:text-zinc-100 flex items-center justify-between gap-2 shadow-sm hover:border-black/30 dark:hover:border-white/30 transition-all active:scale-[0.99]"
      >
        <div className="flex items-center gap-2 truncate">
          <div className="w-5 h-5 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 flex-shrink-0">
            <MapPin size={12} className="text-zinc-500 dark:text-zinc-400" />
          </div>
          <span className="text-xs font-medium truncate">{currentCity.name}</span>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300">
            UTC {currentCity.tz >= 0 ? `+${currentCity.tz}` : currentCity.tz}
          </span>
          <ChevronDown size={14} className={`text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {/* Dropdown Popover */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-[100] rounded-2xl border border-black/15 dark:border-white/15 glass-panel-elevated shadow-2xl p-2.5 space-y-2 animate-fade-in text-xs">
          
          {/* Search Box */}
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search city, country, or UTC (e.g. London, UTC-5)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-8 py-1.5 rounded-full border border-black/10 dark:border-white/10 bg-zinc-50 dark:bg-black/40 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:border-black/30 dark:focus:border-white/30 text-xs"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="w-5 h-5 rounded-full flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black dark:hover:text-white"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Quick Action: Auto Detect */}
          <button
            type="button"
            onClick={handleAutoDetect}
            className="w-full px-3.5 py-2 rounded-full bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-800 dark:text-zinc-200 text-left flex items-center justify-between text-xs font-medium transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10">
                <Compass size={12} className="text-zinc-600 dark:text-zinc-300" />
              </div>
              <span>Use Current Device Timezone</span>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">Auto-Detect</span>
          </button>

          {/* Cities List */}
          <div className="max-h-56 overflow-y-auto space-y-1 pr-1 scrollbar-none">
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => {
                const isSelected = city.name === currentCity.name;
                return (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => handleSelect(city.name)}
                    className={`w-full text-left px-3.5 py-2 rounded-full flex items-center justify-between transition-all active:scale-[0.98] ${
                      isSelected
                        ? 'bg-black text-white dark:bg-white dark:text-black font-semibold'
                        : 'text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {isSelected && <Check size={13} className="flex-shrink-0" />}
                      <span className="truncate">{city.name}</span>
                    </div>

                    <span className={`text-[10px] font-mono flex-shrink-0 ml-2 px-2 py-0.5 rounded-full ${
                      isSelected
                        ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black'
                        : 'bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-400'
                    }`}>
                      UTC {city.tz >= 0 ? `+${city.tz}` : city.tz}
                    </span>
                  </button>
                );
              })
            ) : (
              <div className="p-3 text-center text-zinc-500 text-xs">
                No cities found matching "{search}"
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
