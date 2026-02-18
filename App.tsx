import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Brands from './components/Brands';
import Game from './components/Game';
import BrandDetail from './components/BrandDetail';
import CustomCursor from './components/CustomCursor';
import { ViewState } from './types';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);

  const handleBrandSelect = (id: string) => {
      setSelectedBrandId(id);
      setCurrentView(ViewState.BRAND_DETAIL);
  };

  const handleBackToHome = () => {
      setCurrentView(ViewState.HOME);
      setSelectedBrandId(null);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <Hero setView={setCurrentView} onSelectBrand={handleBrandSelect} />;
      case ViewState.ABOUT:
        return <About />;
      case ViewState.EVENTS:
        return <Events />;
      case ViewState.BRANDS:
        return <Brands />;
      case ViewState.GAME:
        return <Game />;
      case ViewState.BRAND_DETAIL:
        return <BrandDetail brandId={selectedBrandId || 'stage-illusion'} onBack={handleBackToHome} />;
      default:
        return <Hero setView={setCurrentView} onSelectBrand={handleBrandSelect} />;
    }
  };

  return (
    <div className="relative bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black">
      <CustomCursor />
      
      {/* Navbar logic: Hide on detail page for immersion */}
      {currentView !== ViewState.BRAND_DETAIL && (
         <Navbar currentView={currentView} setView={setCurrentView} />
      )}
      
      <main className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode='wait'>
            <motion.div
                key={currentView} // Triggers animation on view change
                className="w-full h-full"
                // Cinematic Entrance: Slightly zoomed in, blurry, transparent
                initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                // Cinematic Active: Normal scale, sharp, visible
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                // Cinematic Exit: Zoom out slightly, blur, fade
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                // Timing: Slow, smooth, elegant
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                {renderView()}
            </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Audio/Sound toggle */}
      {currentView !== ViewState.BRAND_DETAIL && (
        <div className="fixed bottom-10 right-12 z-40 hidden md:flex gap-3 items-center mix-blend-difference interactive opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
            <div className="flex gap-1 h-3 items-end">
               <div className="w-[1px] bg-white h-2 group-hover:animate-pulse"></div>
               <div className="w-[1px] bg-white h-4 group-hover:animate-pulse group-hover:delay-75"></div>
               <div className="w-[1px] bg-white h-1 group-hover:animate-pulse group-hover:delay-150"></div>
            </div>
            <span className="text-[9px] tracking-[0.2em] uppercase text-white font-light">Sound On</span>
        </div>
      )}
    </div>
  );
};

export default App;