import React from 'react';
import { motion } from 'framer-motion';
import { brandData } from '../brandData';
import { ArrowLeft, Play } from 'lucide-react';

interface BrandDetailProps {
  brandId: string;
  onBack: () => void;
}

const BrandDetail: React.FC<BrandDetailProps> = ({ brandId, onBack }) => {
  const data = brandData[brandId];

  if (!data) {
    return <div className="w-full h-screen flex items-center justify-center text-white">Content not found.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-y-auto overflow-x-hidden">
      
      {/* Back Navigation */}
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-3 mix-blend-difference group interactive"
      >
        <div className="p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
            <ArrowLeft size={20} />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">Back</span>
      </button>

      {/* Hero Section */}
      <div className="relative w-full h-[80vh]">
        <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <img src={data.heroImage} className="w-full h-full object-cover opacity-60" alt={data.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
            <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-24 z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <span className="block text-yellow-500 text-sm tracking-[0.4em] uppercase mb-4">{data.category}</span>
                <h1 className="text-5xl md:text-8xl font-serif font-bold leading-none mb-6 max-w-4xl">{data.title}</h1>
                <p className="text-xl md:text-2xl font-light text-neutral-300 max-w-2xl italic">{data.subtitle}</p>
            </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-black py-24 px-8 md:px-24 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Metadata */}
          <div className="col-span-1 md:col-span-3 space-y-8">
             <div className="border-t border-white/20 pt-4">
                <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Client</span>
                <span className="text-lg serif">{data.client || 'Private'}</span>
             </div>
             <div className="border-t border-white/20 pt-4">
                <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Year</span>
                <span className="text-lg serif">{data.year || '2024'}</span>
             </div>
             <div className="border-t border-white/20 pt-4">
                <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-1">Services</span>
                <span className="text-lg serif">Illusion Design, Performance</span>
             </div>
          </div>

          {/* Story */}
          <div className="col-span-1 md:col-span-9">
              <h3 className="text-3xl md:text-4xl font-serif leading-snug mb-8 text-neutral-200">
                  {data.description}
              </h3>
              
              {/* Fake Video Player */}
              <div className="relative w-full aspect-video bg-neutral-900 mt-12 group cursor-pointer overflow-hidden interactive">
                  <img src={data.gallery[0] || data.heroImage} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" alt="Video thumbnail" />
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                          <Play fill="white" className="text-white ml-1" />
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Gallery */}
      <div className="w-full bg-neutral-950 py-24 px-4 md:px-12">
         <h2 className="text-center text-xs tracking-[0.5em] uppercase text-neutral-500 mb-16">Gallery</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto">
            {data.gallery.map((img, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`relative overflow-hidden interactive ${idx === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'}`}
                >
                    <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
            ))}
         </div>
      </div>

      {/* Next Project Teaser */}
      <div className="w-full py-32 bg-black text-center cursor-pointer interactive group" onClick={onBack}>
          <span className="block text-xs tracking-[0.3em] uppercase text-neutral-600 mb-4">Discover More</span>
          <h2 className="text-5xl md:text-7xl font-serif text-neutral-800 group-hover:text-white transition-colors duration-500">
              Return to Archives
          </h2>
      </div>

    </div>
  );
};

export default BrandDetail;