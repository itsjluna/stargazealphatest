import React, { useState, useRef, useEffect } from 'react';
import { 
  Play,
  Sparkles, 
  Flame, 
  Eye, 
  HeartHandshake, 
  Compass, 
  Users, 
  Layers, 
  Moon,
  Plus,
  Menu,
  X
} from 'lucide-react';

const ALL_DOCK_ITEMS = [
  { id: 'home', label: 'Play', icon: Play, primary: true },
  { id: 'signs', label: 'Signs', icon: Sparkles, primary: true },
  { id: 'astral-card', label: 'Astral Card', icon: Compass, primary: true },
  { id: 'compatibility', label: 'Compatibility', icon: HeartHandshake, primary: true },
  { id: 'elements', label: 'Elements', icon: Flame, primary: false },
  { id: 'ascendants', label: 'Ascendants', icon: Eye, primary: false },
  { id: 'group', label: 'Friends', icon: Users, primary: false },
  { id: 'tarot', label: 'Tarot', icon: Layers, primary: false },
  { id: 'transits', label: 'Transits', icon: Moon, primary: false },
];

export default function NavDock({ activeTab, onSelectTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dockRef = useRef(null);

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dockRef.current && !dockRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (tabId) => {
    onSelectTab(tabId);
    setIsMenuOpen(false);
  };

  // Check if active tab is in the secondary items on narrow screens
  const isSecondaryActive = ALL_DOCK_ITEMS.some(
    item => !item.primary && item.id === activeTab
  );

  return (
    <nav 
      ref={dockRef}
      aria-label="Navigation Dock" 
      className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[96vw]"
    >
      {/* Mobile Overflow Menu Popover */}
      {isMenuOpen && (
        <div className="sm:hidden mb-2.5 rounded-3xl glass-panel-elevated p-3 border border-black/10 dark:border-white/15 shadow-2xl animate-fade-in space-y-1.5 w-[260px] mx-auto">
          <div className="flex items-center justify-between px-2 pb-1 border-b border-black/[0.06] dark:border-white/[0.08]">
            <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 dark:text-zinc-400">
              More Archives
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-6 h-6 rounded-full flex items-center justify-center text-zinc-400 hover:text-black dark:hover:text-white"
            >
              <X size={13} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {ALL_DOCK_ITEMS.filter(item => !item.primary).map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`w-full px-3 py-2 rounded-full flex items-center gap-2.5 text-xs font-medium transition-all active:scale-[0.98] ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                    isActive 
                      ? 'bg-white/20 text-white dark:bg-black/20 dark:text-black' 
                      : 'bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-300'
                  }`}>
                    <Icon size={14} />
                  </div>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Dock Container */}
      <div className="flex items-center gap-1 sm:gap-1.5 px-2 py-1.5 sm:px-3 sm:py-2 rounded-full glass-pill shadow-xl">
        
        {/* On Mobile (sm:hidden): Show Primary 4 items + Sandwich/Plus toggle */}
        <div className="flex sm:hidden items-center gap-1">
          {ALL_DOCK_ITEMS.filter(item => item.primary).map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                aria-label={item.label}
                title={item.label}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-150 active:scale-95 flex-shrink-0 ${
                  isActive 
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm' 
                    : 'text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.08]'
                }`}
              >
                <Icon size={17} strokeWidth={isActive ? 2.4 : 1.8} />
              </button>
            );
          })}

          {/* Sandwich / Plus Toggle Button on narrow screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="More navigation options"
            title="More"
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-150 active:scale-95 flex-shrink-0 relative ${
              isMenuOpen || isSecondaryActive
                ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm'
                : 'text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.08]'
            }`}
          >
            {isMenuOpen ? <X size={17} /> : <Plus size={18} />}
            {isSecondaryActive && !isMenuOpen && (
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
            )}
          </button>
        </div>

        {/* On Tablets & Desktop (hidden sm:flex): Show all items cleanly */}
        <div className="hidden sm:flex items-center gap-1.5">
          {ALL_DOCK_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                aria-label={item.label}
                title={item.label}
                className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-150 active:scale-95 flex-shrink-0 ${
                  isActive 
                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm' 
                    : 'text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.08]'
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.4 : 1.8} />
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
}
