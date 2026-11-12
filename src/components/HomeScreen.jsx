import React from 'react';

export default function HomeScreen() {
  return (
    <div className="min-h-[72vh] flex flex-col items-center justify-center text-center px-4 select-none animate-fade-in">
      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black dark:text-white">
          play stargaze - coming soon
        </h1>
        <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
          game project
        </p>
      </div>
    </div>
  );
}
