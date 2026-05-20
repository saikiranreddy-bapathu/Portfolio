import { motion } from 'motion/react';
import { sectionVariants, childVariants } from './animations';

const experiences = [
  {
    period: 'Present',
    duration: 'Present',
    role: 'Java Full Stack Intern',
    company: 'Magneq Software · Hyderabad, India',
    domains: ['Web Development', 'Java Full Stack'],
    desc: [
      'Assisted in developing web application features using Java Full Stack technologies and supported frontend and backend development tasks.',
      'Worked with REST-based functionalities and basic database operations using SQL queries.',
      'Participated in debugging, UI improvements, and collaborative development activities to gain practical experience in real-time project workflows.'
    ],
    tech: ['Java', 'REST', 'SQL', 'Frontend', 'Backend']
  }
];

export function Experience() {
  return (
    <motion.div 
      className="absolute inset-0 w-full max-w-7xl mx-auto p-3 md:p-6 h-full flex flex-col pt-0 pb-6 md:pb-12"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="bg-slate-900/90 border border-slate-800/50 rounded-3xl p-8 md:p-12 flex-1 flex flex-col overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800/50 pb-8 mb-8 shrink-0">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Internship Experience</h2>
           <div className="hidden md:flex items-center space-x-2">
             <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></div>
             <span className="text-xs font-mono uppercase tracking-widest text-[#00E5FF]">Available</span>
           </div>
        </div>

        <div className="flex flex-col gap-12 relative flex-1 overflow-y-auto no-scrollbar pr-4">
           {/* Timeline Line */}
           <div className="absolute left-[8px] md:left-[180px] top-2 bottom-2 w-px bg-slate-800/50 z-0 hidden lg:block"></div>

           {experiences.map((exp, i) => (
             <motion.div key={i} variants={childVariants} className="flex flex-col lg:flex-row relative z-10 group">
               {/* Marker hidden on mobile, visible on desktop */}
               <div className="absolute left-[176px] top-6 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-[#00E5FF] transition-colors hidden lg:block border ring-4 ring-slate-900"></div>
               
               <div className="lg:w-[220px] shrink-0 mb-4 lg:mb-0 pt-4 flex flex-col items-start lg:pr-8">
                 <span className="font-mono text-slate-300 text-sm">{exp.period}</span>
                 <span className="font-mono text-slate-500 text-xs mt-1">{exp.duration}</span>
               </div>
               
               <div className="flex-1 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 lg:p-8 group-hover:bg-slate-800/60 transition-colors group-hover:border-slate-600/50 shadow-lg">
                 <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                 <h4 className="text-[#00E5FF] mb-6 font-medium">{exp.company}</h4>
                 
                 <div className="flex flex-col gap-4 mb-8">
                   {exp.domains.map(d => (
                     <div key={d}>
                       <span className="inline-block px-2 py-0.5 bg-slate-900/80 border border-slate-700 text-slate-300 text-[10px] uppercase tracking-wider font-mono rounded mb-2">{d}</span>
                     </div>
                   ))}
                   {exp.desc.map((d, idx) => (
                     <p key={idx} className="text-sm text-slate-400 leading-relaxed">{d}</p>
                   ))}
                 </div>
                 
                 <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
                   {exp.tech.map(t => (
                     <span key={t} className="text-[10px] text-slate-500 font-mono tracking-wide">{t}</span>
                   ))}
                 </div>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </motion.div>
  );
}
