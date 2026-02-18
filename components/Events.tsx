import React from 'react';
import { motion } from 'framer-motion';
import { EventItem } from '../types';
import { MapPin, Calendar } from 'lucide-react';

const events: EventItem[] = [
  { id: 1, title: 'The Royal Gala', location: 'Dubai Opera, UAE', date: 'OCT 24, 2024', image: 'https://picsum.photos/600/400?grayscale&random=1' },
  { id: 2, title: 'Midnight Illusions', location: 'London, UK', date: 'NOV 05, 2024', image: 'https://picsum.photos/600/400?grayscale&random=2' },
  { id: 3, title: 'Corporate Summit', location: 'New York, USA', date: 'DEC 12, 2024', image: 'https://picsum.photos/600/400?grayscale&random=3' },
  { id: 4, title: 'Private Mansion Show', location: 'Monaco', date: 'JAN 01, 2025', image: 'https://picsum.photos/600/400?grayscale&random=4' },
];

const Events: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-950 py-24 px-6 md:px-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 border-b border-neutral-800 pb-8 flex flex-col md:flex-row justify-between items-end"
      >
        <div>
           <h2 className="text-xs font-bold tracking-[0.5em] text-neutral-500 uppercase mb-2">Upcoming</h2>
           <h1 className="text-4xl md:text-6xl font-serif text-white">LIVE EVENTS</h1>
        </div>
        <button className="text-white border border-white/20 px-8 py-3 uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors interactive mt-8 md:mt-0">
          View Past Archives
        </button>
      </motion.div>

      <div className="grid grid-cols-1 gap-0">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative border-b border-neutral-800 py-12 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer interactive overflow-hidden"
          >
             {/* Hover Background Image Reveal */}
             <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img src={event.image} alt="bg" className="w-full h-full object-cover grayscale" />
             </div>

             <div className="relative z-10 flex flex-col md:flex-row items-baseline gap-6 md:gap-12 w-full">
                <span className="text-neutral-600 text-sm font-mono">0{index + 1}</span>
                <h3 className="text-2xl md:text-4xl font-serif text-white group-hover:translate-x-4 transition-transform duration-500">{event.title}</h3>
             </div>

             <div className="relative z-10 flex flex-col md:items-end gap-2 mt-4 md:mt-0 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 text-sm uppercase tracking-wider">
                   <MapPin size={14} />
                   <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-neutral-400">
                   <Calendar size={14} />
                   <span>{event.date}</span>
                </div>
             </div>
             
             <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0">
                <span className="text-xs uppercase tracking-widest border border-white px-4 py-2">Get Tickets</span>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;