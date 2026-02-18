import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ViewState } from '../types';
import { MapPin } from 'lucide-react';
import { brandData } from '../brandData';

interface HeroProps {
  setView: (view: ViewState) => void;
  onSelectBrand: (id: string) => void;
}

// Using the data directly ensures consistency
const slides = [
  {
    id: 0,
    brandId: 'stage-illusion',
    subtitle: "The Masterpiece",
    titleLine1: "The Prestige",
    titleLine2: "Stage Illusion",
    location: "Dubai Opera, Dubai",
    image: brandData['stage-illusion'].heroImage, 
    ghostText: "PRESTIGE",
  },
  {
    id: 1,
    brandId: 'corporate-elite',
    subtitle: "Private & VIP",
    titleLine1: "Corporate",
    titleLine2: "Excellence",
    location: "Burj Al Arab, Dubai",
    image: brandData['corporate-elite'].heroImage, 
    ghostText: "ELITE",
  },
  {
    id: 2,
    brandId: 'tv-broadcast',
    subtitle: "On Air",
    titleLine1: "Television",
    titleLine2: "Broadcast",
    location: "Global World Tour",
    image: brandData['tv-broadcast'].heroImage, 
    ghostText: "VISION",
  }
];

const stripItems = [
    { id: 'vogue', img: brandData['vogue'].heroImage },
    { id: 'rolex', img: brandData['rolex'].heroImage },
    { id: 'tesla', img: brandData['tesla'].heroImage },
    { id: 'stage-illusion', img: brandData['stage-illusion'].heroImage },
    { id: 'corporate-elite', img: brandData['corporate-elite'].heroImage },
];

const marqueeList = [...stripItems, ...stripItems, ...stripItems, ...stripItems];

const Hero: React.FC<HeroProps> = ({ setView, onSelectBrand }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -10000) {
      nextSlide();
    } else if (swipe > 10000) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black text-white">
      
      {/* Slider Track */}
      <motion.div 
        className="flex h-full w-full"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ 
            duration: 1.6, 
            ease: [0.16, 1, 0.3, 1] 
        }} 
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className="relative min-w-full h-full flex items-center overflow-hidden cursor-pointer interactive group"
            onClick={() => onSelectBrand(slide.brandId)}
          >
             {/* Background Image */}
             <motion.div 
                className="absolute inset-0 z-0"
                initial={{ scale: 1.15 }}
                animate={{ scale: currentIndex === index ? 1 : 1.15 }}
                transition={{ duration: 12, ease: "linear" }}
             >
                <img 
                  src={slide.image} 
                  alt={slide.titleLine1} 
                  className="w-full h-full object-cover opacity-80 filter contrast-125 sepia-[0.3]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_90%)]" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
             </motion.div>

             {/* Content Container */}
             <div className="relative z-10 w-full px-12 md:px-32 flex flex-col justify-center h-full pointer-events-none">
                
                {/* Ghost Text */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full overflow-hidden select-none mix-blend-overlay">
                  <motion.h1 
                    className="text-[15vw] md:text-[20vw] font-bold opacity-10 leading-none tracking-tighter text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(255,215,0,0.3)" }}
                    initial={{ x: 300 }}
                    animate={{ x: currentIndex === index ? 0 : 300 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
                    {slide.ghostText}
                  </motion.h1>
                </div>

                {/* Main Typography */}
                <motion.div
                  initial={{ opacity: 0, x: -80, filter: 'blur(10px)' }}
                  animate={{ 
                    opacity: currentIndex === index ? 1 : 0, 
                    x: currentIndex === index ? 0 : -80,
                    filter: currentIndex === index ? 'blur(0px)' : 'blur(10px)'
                  }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  className="relative"
                >
                   <div className="flex items-center gap-4 mb-6">
                      <div className="h-[1px] w-12 bg-yellow-500/60"></div>
                      <span className="text-sm md:text-base uppercase tracking-[0.3em] font-light text-yellow-500/80">
                        {slide.subtitle}
                      </span>
                   </div>

                   <h1 className="text-6xl md:text-9xl font-serif font-bold leading-[0.9] mb-8 hover:text-yellow-100 transition-colors">
                     <span className="block">{slide.titleLine1}</span>
                     <span className="block italic font-light ml-4 md:ml-12 text-neutral-300 group-hover:text-white transition-colors duration-500">{slide.titleLine2}</span>
                   </h1>

                   <div className="flex items-center gap-3 text-white/70 ml-2">
                      <MapPin size={18} className="text-yellow-500" />
                      <span className="text-sm md:text-lg font-light tracking-wide">{slide.location}</span>
                   </div>
                   
                   {/* Call to Action indicator */}
                   <div className="mt-8 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-xs uppercase tracking-widest border-b border-yellow-500 pb-1 text-yellow-500">Explore Experience</span>
                   </div>
                </motion.div>
             </div>
          </div>
        ))}
      </motion.div>

      {/* Drag Overlay */}
      <motion.div 
        className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      />

      {/* Indicators */}
      <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-8 mix-blend-difference pointer-events-auto">
         {slides.map((_, idx) => (
           <div 
            key={idx} 
            className="group flex items-center gap-4 cursor-pointer"
            onClick={() => goToSlide(idx)}
           >
              <div className="relative flex items-center justify-center w-6">
                <span className={`text-xs font-bold transition-all duration-500 ${currentIndex === idx ? 'text-white scale-125' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                  0{idx + 1}
                </span>
              </div>
              <motion.div 
                className={`h-[1px] bg-white transition-all duration-500 ${currentIndex === idx ? 'w-12 opacity-100' : 'w-4 opacity-30 group-hover:w-8 group-hover:opacity-50'}`}
              />
           </div>
         ))}
      </div>

      {/* BOTTOM INTERACTIVE STRIP */}
      <div className="absolute bottom-6 w-full z-30 overflow-hidden pointer-events-auto">
         <div className="absolute inset-0 z-40 bg-gradient-to-r from-black via-transparent to-black w-full pointer-events-none" />
         
         <motion.div 
            className="flex gap-16 items-center justify-center w-max"
            animate={{ x: ["0%", "-25%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
         >
            {marqueeList.map((item, index) => (
                <motion.div 
                    key={`${item.id}-${index}`} 
                    className="group relative w-12 h-12 rounded-full border border-white/10 overflow-hidden cursor-pointer interactive"
                    whileHover={{ scale: 1.15, borderColor: 'rgba(234, 179, 8, 0.6)' }}
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering slide click
                        onSelectBrand(item.id);
                    }}
                >
                    <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" />
                    
                    {/* Gold Glow on Hover */}
                    <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                </motion.div>
            ))}
         </motion.div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-12 right-12 md:right-32 z-30 pointer-events-none mix-blend-difference">
         <span className="text-6xl md:text-8xl font-serif font-bold opacity-20 text-white">
            {currentIndex + 1}<span className="text-4xl align-top opacity-50">/3</span>
         </span>
      </div>

    </div>
  );
};

export default Hero;