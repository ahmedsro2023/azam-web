import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white py-20 px-6 md:px-20 flex flex-col justify-center relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
           <h2 className="text-sm tracking-[0.5em] text-neutral-400 mb-6 uppercase">The Philosophy</h2>
           <h1 className="text-4xl md:text-7xl font-serif leading-tight mb-8">
             REALITY IS <br/> 
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">JUST A SUGGESTION.</span>
           </h1>
           <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
             AZAM creates moments that defy explanation. Merging psychology, sleight of hand, and immersive storytelling, he invites you to step into a world where the impossible becomes inevitable.
           </p>
           
           <div className="mt-12 flex gap-8">
              <div>
                 <span className="block text-3xl font-bold serif">15+</span>
                 <span className="text-xs tracking-widest text-neutral-500 uppercase">Years Exp</span>
              </div>
              <div>
                 <span className="block text-3xl font-bold serif">500+</span>
                 <span className="text-xs tracking-widest text-neutral-500 uppercase">Shows</span>
              </div>
              <div>
                 <span className="block text-3xl font-bold serif">Global</span>
                 <span className="text-xs tracking-widest text-neutral-500 uppercase">Performance</span>
              </div>
           </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[600px] w-full bg-neutral-900 overflow-hidden"
        >
          {/* Real Portrait Image */}
           <img 
             src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=1200&auto=format&fit=crop" 
             alt="Azam Portrait" 
             className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000 ease-out filter contrast-125 grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-900/10 pointer-events-none skew-x-12"></div>
    </div>
  );
};

export default About;