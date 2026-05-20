import { motion } from 'motion/react';
import { MonitorSmartphone, Palette, Database, Layers, CheckSquare, Wrench, Scissors } from 'lucide-react';
import { sectionVariants, childVariants } from './animations';

const categories = [
  { icon: <MonitorSmartphone className="w-5 h-5" />, title: 'Technical', tech: ['Java', 'Core Java', 'Spring Boot', 'JavaScript', 'React.js', 'HTML5', 'CSS3', 'SQL'] },
  { icon: <Layers className="w-5 h-5" />, title: 'Soft Skills', tech: ['Communication', 'Decision-Making', 'Leadership', 'Problem Solving'] },
  { id: 'certifications', icon: <CheckSquare className="w-5 h-5" />, title: 'Achievements', tech: ['IEEE Conference (2025)', 'Generative AI Studio', 'Generative AI for Beginners', 'Communication Fundamentals', 'Android Studio'] },
  { id: 'photoshop-skill', icon: <Wrench className="w-5 h-5" />, title: 'Tools', tech: ['VS Code', 'GitHub', 'Adobe Photoshop'] },
];

export function Skills({ setActiveSection }: { setActiveSection: (s: string) => void }) {
  return (
    <motion.div 
      className="absolute inset-0 w-full max-w-7xl mx-auto p-3 md:p-6 h-full flex flex-col pt-0 pb-6 md:pb-12 overflow-y-auto no-scrollbar"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex justify-between items-end mb-8 pl-2">
        <h2 className="text-4xl font-bold tracking-tight">Capabilities &<br/>Technologies</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 flex-grow">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.title}
            variants={childVariants} 
            className={`bg-slate-900/90 border border-slate-800/50 rounded-3xl p-6 md:p-8 flex flex-col group hover:bg-slate-800/95 transition-colors shadow-xl ${cat.id ? 'cursor-pointer' : ''}`}
            onClick={() => {
              if (cat.id === 'photoshop-skill') {
                setActiveSection('photoshop');
              } else if (cat.id === 'certifications') {
                setActiveSection('certifications');
              }
            }}
          >
            <div className="flex items-center space-x-4 mb-6">
               <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-slate-900 border border-blue-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),_0_4px_6px_rgba(0,0,0,0.5)] flex items-center justify-center text-[#00E5FF] group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),_0_8px_12px_rgba(0,0,0,0.6)]">
                 {cat.icon}
               </div>
               <h3 className="text-lg font-medium tracking-tight transform group-hover:translate-x-1 transition-transform text-white">
                 {cat.title}
                 {cat.id === 'photoshop-skill' && <span className="text-[10px] ml-2 text-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">(Click to view)</span>}
                 {cat.id === 'certifications' && <span className="text-[10px] ml-2 text-[#00E5FF] uppercase tracking-widest">(Click to view)</span>}
               </h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {cat.tech.map(t => (
                <span key={t} className="px-2 py-1 bg-slate-950 text-slate-300 text-[10px] rounded-md border border-slate-800 font-mono group-hover:border-[#00E5FF]/50 transition-colors">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
