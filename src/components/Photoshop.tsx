import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { sectionVariants, childVariants } from './animations';

const designs = [
  {
    title: 'YouTube Thumbnail: SaaS Landing Page',
    before: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&q=80', // raw shot
    after: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80', // stylized
  },
  {
    title: 'Product Ad Campaign',
    before: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
  }
];

const sideThumbnails = [
  'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=600&q=80',
  'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=600&q=80',
  'https://images.unsplash.com/photo-1563240619-44ce02ddaf31?w=600&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
  'https://images.unsplash.com/photo-1612831455740-a2f6cb65f122?w=600&q=80',
  'https://images.unsplash.com/photo-1563209259-ea7285f29f12?w=600&q=80',
  'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=600&q=80',
];

export function Photoshop() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div 
      className="absolute inset-0 w-full max-w-7xl mx-auto p-3 md:p-6 h-full flex flex-col pt-0 pb-6 md:pb-12 overflow-y-auto no-scrollbar"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex justify-between items-end mb-8 pl-2">
        <div>
           <h2 className="text-4xl font-bold tracking-tight">Photoshop Works &<br/>Thumbnails</h2>
           <p className="text-slate-400 mt-2 font-mono text-xs uppercase tracking-widest">Hover over designs to see before & after</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow mb-16">
        {designs.map((design, i) => (
          <motion.div 
            key={design.title}
            variants={childVariants} 
            className="flex flex-col group cursor-crosshair min-h-[300px]"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl mb-4 border border-slate-800">
               <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-sm z-0">Loading...</div>
               
               {/* After Image (Base Layer) */}
               <img 
                 src={design.after} 
                 alt={`${design.title} After`}
                 className="absolute inset-0 w-full h-full object-cover z-10 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" 
               />
               
               {/* Before Image (Top Layer) - Vaporizes on hover */}
               <img 
                 src={design.before} 
                 alt={`${design.title} Before`}
                 className="absolute inset-0 w-full h-full object-cover z-20 group-hover:opacity-0 group-hover:scale-110 group-hover:blur-md transition-all duration-700 ease-in-out origin-center" 
               />
               
               <div className="absolute top-4 left-4 z-30 flex space-x-2">
                   <span className="bg-slate-900/80 backdrop-blur text-white text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded border border-slate-700 opacity-100 group-hover:opacity-0 transition-opacity duration-300">Before</span>
                   <span className="bg-[#00E5FF]/80 backdrop-blur text-black font-bold text-[10px] font-mono tracking-widest uppercase px-2 py-1 rounded border border-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">After</span>
               </div>
            </div>
            <h3 className="text-lg font-medium text-white px-2">{design.title}</h3>
          </motion.div>
        ))}
      </div>

      <motion.div variants={childVariants} className="mt-8 pb-8">
        <h3 className="text-xl font-bold tracking-tight mb-6 pl-2">More Concepts</h3>
        <div 
           ref={scrollRef}
           className="flex gap-4 overflow-x-auto pb-8 pt-4 px-2 no-scrollbar snap-x snap-mandatory"
        >
          {sideThumbnails.map((src, i) => (
             <motion.div 
               key={i}
               className="shrink-0 w-72 md:w-96 aspect-video rounded-2xl overflow-hidden border border-slate-800/80 shadow-xl group cursor-pointer snap-center relative bg-slate-900"
               whileHover={{ scale: 1.05, y: -10 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
             >
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xs z-0">Loading...</div>
                <img src={src} alt="Concept mockup" className="absolute inset-0 w-full h-full object-cover z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00E5FF]/50 rounded-2xl z-20 transition-colors duration-500 pointer-events-none"></div>
             </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
