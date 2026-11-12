import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavDock from './components/NavDock';
import HomeScreen from './components/HomeScreen';
import SignsGrid from './components/SignsGrid';
import ElementsExplorer from './components/ElementsExplorer';
import AscendantsExplorer from './components/AscendantsExplorer';
import CompatibilityExplorer from './components/CompatibilityExplorer';
import AstralCardBuilder from './components/AstralCardBuilder';
import GroupCosmosBuilder from './components/GroupCosmosBuilder';
import TarotMirror from './components/TarotMirror';
import TransitsForecast from './components/TransitsForecast';
import SignDetailModal from './components/SignDetailModal';

export default function App() {
  // Default selected theme is 'light'
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('stargaze_theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  });

  const [activeTab, setActiveTab] = useState('home');
  const [selectedSignForModal, setSelectedSignForModal] = useState(null);
  const [compatSignA, setCompatSignA] = useState(null);
  const [compatSignB, setCompatSignB] = useState(null);

  // Sync theme with html root element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('stargaze_theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleOpenCompatibility = (sign) => {
    setCompatSignA(sign);
    setActiveTab('compatibility');
  };

  const handleOpenAstralCard = (sign) => {
    setActiveTab('astral-card');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#070709] text-[#18181b] dark:text-[#ededed] flex flex-col font-sans selection:bg-zinc-200 dark:selection:bg-white/20 transition-colors duration-200">
      
      {/* Header with theme toggle and home shortcut */}
      <Header theme={theme} onToggleTheme={toggleTheme} onGoHome={() => setActiveTab('home')} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 pb-28">
        {activeTab === 'home' && (
          <HomeScreen />
        )}

        {activeTab === 'signs' && (
          <SignsGrid onSelectSign={(sign) => setSelectedSignForModal(sign)} />
        )}

        {activeTab === 'elements' && (
          <ElementsExplorer onSelectSign={(sign) => setSelectedSignForModal(sign)} />
        )}

        {activeTab === 'ascendants' && (
          <AscendantsExplorer onSelectSign={(sign) => setSelectedSignForModal(sign)} />
        )}

        {activeTab === 'compatibility' && (
          <CompatibilityExplorer 
            initialSignA={compatSignA} 
            initialSignB={compatSignB} 
          />
        )}

        {activeTab === 'astral-card' && (
          <AstralCardBuilder />
        )}

        {activeTab === 'group' && (
          <GroupCosmosBuilder />
        )}

        {activeTab === 'tarot' && (
          <TarotMirror onSelectSign={(sign) => setSelectedSignForModal(sign)} />
        )}

        {activeTab === 'transits' && (
          <TransitsForecast onSelectSign={(sign) => setSelectedSignForModal(sign)} />
        )}
      </main>

      {/* Navigation Dock */}
      <NavDock activeTab={activeTab} onSelectTab={(tabId) => setActiveTab(tabId)} />

      {/* Sign Detail Modal */}
      {selectedSignForModal && (
        <SignDetailModal
          sign={selectedSignForModal}
          onClose={() => setSelectedSignForModal(null)}
          onSelectForCompatibility={handleOpenCompatibility}
          onSelectForAstralCard={handleOpenAstralCard}
        />
      )}

    </div>
  );
}
