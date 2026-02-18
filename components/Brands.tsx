import React from 'react';
import { motion } from 'framer-motion';
import { ViewState } from '../types';

interface BrandsProps {
  setView: (view: ViewState) => void;
  onSelectBrand: (id: string) => void;
}

// Map display names to IDs where we have data
const brands = [
  { name: "VOGUE", id: "vogue" },
  { name: "ROLEX", id: "rolex" },
  { name: "TESLA", id: "tesla" },
  { name: "BBC", id: "tv-broadcast" },
  { name: "CHANEL", id: null }, // Placeholder for future data
  { name: "GOOGLE", id: "corporate-elite" },
  { name: "NIKE", id: null },
  { name: "SONY", id: "stage-illusion" }
];

const Brands: React.FC<BrandsProps> = ({ setView, onSelectBrand }) => {
  
  const handleBrandClick = (id: string | null) => {
    if (id) {
        onSelectBrand(id);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white text-black py-24 px-6 md:px-20 overflow-y-auto">
       <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-20"
      >
        <p className="text-xs tracking-[0.5em] uppercase mb-4 text-neutral-500">Trusted By</p>
        <h1 className="text-4xl md:text-6xl font-serif">SELECTED CLIENTS</h1>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-neutral-200">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => handleBrandClick(brand.id)}
            className={`group relative h-40 md:h-60 border-r border-b border-neutral-200 flex items-center justify-center overflow-hidden interactive ${brand.id ? 'cursor-pointer' : 'cursor-default'}`}
          >
             <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
             
             <h3 className="relative z-10 text-2xl md:text-3xl font-bold tracking-tighter text-neutral-900 group-hover:text-white transition-colors duration-500 serif">
               {brand.name}
             </h3>

             {brand.id && (
                <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] uppercase tracking-widest text-white/50">View Case</span>
                </div>
             )}
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <p className="max-w-2xl text-center text-neutral-500 text-lg leading-relaxed font-light">
          "Azam doesn't just perform tricks; he crafts experiences that align with the prestige of world-class brands."
        </p>
      </div>
    </div>
  );
};

export default Brands;