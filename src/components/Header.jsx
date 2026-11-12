import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Header({ theme, onToggleTheme, onGoHome }) {
  return (
    <header className="w-full pt-4 pb-3 sm:pt-6 sm:pb-4 px-4 sm:px-8 border-b border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-[#070709]/80 backdrop-blur-xl sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={onGoHome}
          className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white select-none hover:opacity-80 transition-opacity text-left"
        >
          stargaze
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          className="w-10 h-10 rounded-full flex items-center justify-center glass-pill text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-all active:scale-95"
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
    </header>
  );
}
