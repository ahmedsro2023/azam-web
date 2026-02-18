import React from 'react';
import { NavItem, ViewState } from '../types';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const navItems: NavItem[] = [
  { id: ViewState.HOME, label: 'Home' },
  { id: ViewState.ABOUT, label: 'About' },
  { id: ViewState.EVENTS, label: 'Events' },
  { id: ViewState.BRANDS, label: 'Brands' },
  { id: ViewState.GAME, label: 'Play With AZAM' },
];

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  return (
    <>
      {/* Brand Watermark - Top Left - Subtle */}
      <div 
        className="fixed top-8 left-8 z-50 cursor-pointer mix-blend-difference interactive opacity-90 hover:opacity-100 transition-opacity"
        onClick={() => setView(ViewState.HOME)}
      >
        <span className="text-lg tracking-[0.4em] cinzel text-white font-bold">AZAM</span>
      </div>

      {/* Desktop Vertical Menu - STRICT RIGHT SIDE */}
      <nav className="hidden md:flex fixed right-0 top-0 h-screen w-32 z-50 flex-col justify-center items-end pr-12 mix-blend-difference pointer-events-none">
        <div className="flex flex-col gap-10 text-right pointer-events-auto">
          {navItems.map((item) => (
            <div key={item.id} className="relative group flex items-center justify-end interactive">
              <button
                onClick={() => setView(item.id as ViewState)}
                className={`text-[10px] font-medium tracking-[0.3em] uppercase transition-all duration-700 ${
                  currentView === item.id ? 'text-white scale-110' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
              
              {/* Minimal Active Dot */}
              <motion.div 
                className={`absolute -right-6 w-1 h-1 bg-white rounded-full transition-opacity duration-500 ${currentView === item.id ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Toggle - Minimalist */}
      <button 
        className="md:hidden fixed top-8 right-8 z-50 text-white interactive mix-blend-difference opacity-80" 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
             {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setView(item.id as ViewState);
                  setIsMobileOpen(false);
                }}
                className={`text-2xl tracking-[0.2em] uppercase interactive font-serif ${
                   currentView === item.id ? 'text-white' : 'text-neutral-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;