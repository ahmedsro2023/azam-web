import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Sparkles } from 'lucide-react';

const cards = [
  { id: 1, type: 'JOKER', label: 'The Fool' },
  { id: 2, type: 'ACE', label: 'The Ace' },
  { id: 3, type: 'JOKER', label: 'The Fool' },
];

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<'IDLE' | 'SHUFFLING' | 'PICKING' | 'REVEALED'>('IDLE');
  const [shuffledCards, setShuffledCards] = useState(cards);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [message, setMessage] = useState("Find the Ace of Spades");

  useEffect(() => {
    if (gameState === 'SHUFFLING') {
      setMessage("Follow the movement...");
      const interval = setInterval(() => {
        setShuffledCards(prev => [...prev].sort(() => Math.random() - 0.5));
      }, 150);
      
      setTimeout(() => {
        clearInterval(interval);
        setGameState('PICKING');
        setMessage("Make your choice.");
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [gameState]);

  const handleCardClick = (id: number, type: string) => {
    if (gameState !== 'PICKING') return;
    setSelectedCard(id);
    setGameState('REVEALED');
    if (type === 'ACE') {
      setMessage("Destiny is in your hands.");
    } else {
      setMessage("Illusion is deceit.");
    }
  };

  const resetGame = () => {
    setSelectedCard(null);
    setGameState('SHUFFLING');
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 to-black pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>

      <motion.div 
        key={message}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center z-10 h-24 flex flex-col justify-end"
      >
        <span className="text-yellow-600/60 text-xs tracking-[0.4em] uppercase mb-4 block font-serif">The Test</span>
        <h2 className="text-3xl md:text-5xl font-serif text-neutral-200">{message}</h2>
      </motion.div>

      <div className="flex gap-6 md:gap-12 z-10 perspective-[1200px]">
        <AnimatePresence>
          {shuffledCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              onClick={() => handleCardClick(card.id, card.type)}
              initial={{ rotateY: 180 }}
              animate={{ 
                rotateY: gameState === 'REVEALED' && selectedCard === card.id ? 0 : 180,
                scale: gameState === 'PICKING' && selectedCard === null ? 1.05 : 1,
                y: gameState === 'PICKING' ? [0, -10, 0] : 0,
                z: gameState === 'PICKING' ? 50 : 0,
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 120, 
                damping: 20,
                y: {
                    repeat: gameState === 'PICKING' ? Infinity : 0,
                    duration: 3,
                    ease: "easeInOut",
                    delay: card.id * 0.2
                }
            }}
              className={`
                relative w-48 h-72 md:w-64 md:h-96 rounded-xl cursor-pointer interactive
                preserve-3d transition-shadow duration-500
                ${gameState === 'PICKING' ? 'hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]' : ''}
              `}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* BACK OF CARD (Dark Luxury) */}
              <div 
                className="absolute inset-0 w-full h-full rounded-xl backface-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                {/* Pattern */}
                <div className="absolute inset-2 border border-white/5 rounded-lg opacity-50 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]"></div>
                    <div className="w-16 h-16 rounded-full border border-yellow-600/30 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full border border-yellow-600/20"></div>
                    </div>
                </div>
                {/* Brand Mark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="font-serif text-2xl text-white/10 tracking-widest">AZAM</span>
                </div>
              </div>

              {/* FRONT OF CARD (White/Gold) */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#111] border border-white/10 rounded-xl flex flex-col items-center justify-center backface-hidden shadow-xl"
                style={{ backfaceVisibility: 'hidden' }}
              >
                 <div className="absolute inset-2 border border-yellow-500/10 rounded-lg"></div>
                 
                 {/* Card Content */}
                 {card.type === 'ACE' ? (
                     <motion.div 
                        initial={{ scale: 0 }} 
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center"
                     >
                        <Sparkles size={48} className="text-yellow-500 mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                        <span className="text-4xl font-serif text-white tracking-widest">ACE</span>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500 mt-2">The Origin</span>
                     </motion.div>
                 ) : (
                     <div className="flex flex-col items-center opacity-40 grayscale">
                        <span className="text-5xl mb-4">🎭</span>
                        <span className="text-2xl font-serif text-neutral-400">JOKER</span>
                        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-600 mt-2">The Trickster</span>
                     </div>
                 )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-20 h-16">
        {gameState === 'IDLE' && (
             <button 
                onClick={resetGame} 
                className="group relative px-10 py-4 bg-transparent border border-white/20 overflow-hidden interactive"
             >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                <span className="relative text-sm font-bold uppercase tracking-[0.3em] group-hover:text-white transition-colors">Enter The Void</span>
             </button>
        )}
        {gameState === 'REVEALED' && (
            <button 
                onClick={resetGame} 
                className="group flex items-center gap-3 px-8 py-3 text-neutral-400 hover:text-white transition-colors interactive"
            >
                <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-700" /> 
                <span className="text-xs uppercase tracking-widest">Reshuffle Destiny</span>
            </button>
        )}
      </div>

    </div>
  );
};

export default Game;