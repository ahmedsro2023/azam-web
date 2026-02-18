import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const cards = [
  { id: 1, type: 'JOKER', label: '🃏' },
  { id: 2, type: 'ACE', label: '♠️' },
  { id: 3, type: 'JOKER', label: '🃏' },
];

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<'IDLE' | 'SHUFFLING' | 'PICKING' | 'REVEALED'>('IDLE');
  const [shuffledCards, setShuffledCards] = useState(cards);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [message, setMessage] = useState("Find the Ace of Spades");

  useEffect(() => {
    if (gameState === 'SHUFFLING') {
      setMessage("Watch closely...");
      const interval = setInterval(() => {
        setShuffledCards(prev => [...prev].sort(() => Math.random() - 0.5));
      }, 150);
      
      setTimeout(() => {
        clearInterval(interval);
        setGameState('PICKING');
        setMessage("Pick a card.");
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [gameState]);

  const handleCardClick = (id: number, type: string) => {
    if (gameState !== 'PICKING') return;
    setSelectedCard(id);
    setGameState('REVEALED');
    if (type === 'ACE') {
      setMessage("You have the gift! It is the Ace.");
    } else {
      setMessage("Illusion is deceit. Try again.");
    }
  };

  const resetGame = () => {
    setSelectedCard(null);
    setGameState('SHUFFLING');
  };

  return (
    <div className="w-full min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black opacity-40 pointer-events-none"></div>

      <motion.div 
        key={message}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center z-10"
      >
        <h2 className="text-3xl md:text-5xl font-serif mb-2">{message}</h2>
        <p className="text-neutral-500 text-sm tracking-widest uppercase">The Azam Challenge</p>
      </motion.div>

      <div className="flex gap-4 md:gap-8 z-10 perspective-1000">
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
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 260, 
                damping: 20,
                y: {
                    repeat: gameState === 'PICKING' ? Infinity : 0,
                    duration: 2,
                    delay: Math.random()
                }
            }}
              className={`
                relative w-24 h-36 md:w-40 md:h-60 rounded-xl cursor-pointer interactive shadow-2xl
                ${gameState === 'PICKING' ? 'hover:-translate-y-4 hover:shadow-white/20' : ''}
                transition-all duration-300 transform-style-3d
              `}
            >
              {/* Back of Card */}
              <div 
                className="absolute inset-0 w-full h-full bg-neutral-800 border-2 border-neutral-700 rounded-xl flex items-center justify-center backface-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arches.png')]"></div>
                <div className="absolute text-4xl">👁️</div>
              </div>

              {/* Front of Card */}
              <div 
                className="absolute inset-0 w-full h-full bg-white text-black rounded-xl flex items-center justify-center backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <span className="text-6xl">{card.label}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-16 h-12">
        {gameState === 'IDLE' && (
             <button onClick={resetGame} className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform interactive">Start Game</button>
        )}
        {gameState === 'REVEALED' && (
            <button onClick={resetGame} className="flex items-center gap-2 px-8 py-3 border border-neutral-700 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors interactive">
                <RefreshCw size={16} /> Play Again
            </button>
        )}
      </div>

    </div>
  );
};

export default Game;