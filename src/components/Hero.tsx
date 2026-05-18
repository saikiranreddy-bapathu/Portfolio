import { motion } from 'motion/react';
import { sectionVariants, childVariants } from './animations';

export function Hero({ setActiveSection }: any) {
  return (
    <motion.div 
      className="absolute inset-0 w-full max-w-7xl mx-auto p-6 h-full flex flex-col pt-0 pb-12 overflow-y-auto no-scrollbar"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-[auto] md:grid-rows-6 gap-4 flex-grow min-h-0">
        
        {/* Main Profile Card */}
        <motion.div variants={childVariants} className="md:col-span-8 md:row-span-4 bg-slate-900/80 border border-slate-800/50 rounded-3xl p-8 flex flex-col justify-between relative overflow-y-auto no-scrollbar group">
          <div className="z-10">
            <div className="bg-black/80 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 inline-block font-mono border border-slate-700 text-[#00E5FF]">● AVAILABLE FOR NEW OPPORTUNITIES</div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 tracking-tighter text-white">Sai Kiran.<br/><span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)'}}>Software<br/>Developer.</span></h1>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base max-w-xl">Aspiring Software Developer with knowledge in Java Full Stack Development and web technologies. Passionate about learning modern technologies, building efficient applications, and enhancing problem-solving skills while contributing to innovative software solutions.</p>
          </div>
          

          
          {/* <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full"></div> */}
        </motion.div>

        {/* Featured Project Card (Shortcut) */}
        <motion.div 
          variants={childVariants} 
          className="md:col-span-4 md:row-span-3 bg-slate-900/80 border border-slate-800/50 rounded-3xl p-0 overflow-hidden relative group cursor-pointer"
          onClick={() => setActiveSection('projects')}
        >
          <div className="absolute top-6 left-6 z-20">
            <div className="bg-black/90 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2 inline-block text-[#00E5FF]">SELECTED WORK</div>
            <h2 className="text-2xl font-bold text-white">Drive AI Agent</h2>
          </div>
          <div className="w-full h-full bg-gradient-to-br from-slate-800/80 to-black flex items-center justify-center pt-24 min-h-[250px]">
             <div className="w-[80%] h-[80%] bg-slate-900 rounded-t-2xl border-t border-x border-slate-700 p-4 transform group-hover:-translate-y-2 transition-transform duration-500">
               <div className="flex space-x-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-600"></div>
               </div>
               <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 bg-slate-800 rounded-md"></div>
                  <div className="h-16 bg-slate-800 rounded-md"></div>
                  <div className="col-span-2 h-12 bg-slate-800/50 rounded-md"></div>
               </div>
             </div>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div variants={childVariants} className="md:col-span-4 md:row-span-2 bg-slate-900/80 border border-slate-800/50 rounded-3xl p-6 flex flex-col justify-between cursor-pointer group" onClick={() => setActiveSection('skills')}>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-slate-800/80 text-[10px] rounded border border-slate-700/50 font-mono text-slate-200 group-hover:border-[#00E5FF]/50 transition-colors">JAVA</span>
            <span className="px-2 py-1 bg-slate-800/80 text-[10px] rounded border border-slate-700/50 font-mono text-slate-200 group-hover:border-[#00E5FF]/50 transition-colors">SPRING BOOT</span>
            <span className="px-2 py-1 bg-slate-800/80 text-[10px] rounded border border-slate-700/50 font-mono text-slate-200 group-hover:border-[#00E5FF]/50 transition-colors">REACT</span>
            <span className="px-2 py-1 bg-slate-800/80 text-[10px] rounded border border-slate-700/50 font-mono text-slate-200 group-hover:border-[#00E5FF]/50 transition-colors">SQL</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs text-slate-400 font-mono uppercase tracking-widest group-hover:text-[#00E5FF] transition-colors">My Stack</span>
             <svg className="w-4 h-4 text-slate-400 group-hover:text-[#00E5FF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div variants={childVariants} className="md:col-span-6 md:row-span-2 bg-slate-900/80 border border-slate-800/50 text-white rounded-3xl p-6 md:p-8 flex justify-between items-end overflow-hidden relative group">
          <div className="flex flex-col z-10">
            <span className="text-4xl md:text-5xl font-bold tracking-tighter">2026</span>
            <span className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest text-slate-400 mt-1">Graduation</span>
          </div>
          <div className="flex flex-col z-10">
            <span className="text-4xl md:text-5xl font-bold tracking-tighter">8.0</span>
            <span className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest text-slate-400 mt-1">CGPA</span>
          </div>
          <div className="flex flex-col z-10">
            <span className="text-4xl md:text-5xl font-bold tracking-tighter">ECE</span>
            <span className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest text-slate-400 mt-1">B.Tech</span>
          </div>
          {/* <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#00E5FF]/10 rounded-full group-hover:scale-110 transition-transform duration-700 blur-2xl"></div> */}
        </motion.div>

        {/* CTA Card */}
        <motion.div variants={childVariants} className="md:col-span-6 md:row-span-2 bg-slate-800/90 border border-slate-700/50 rounded-3xl p-6 flex flex-col justify-between cursor-pointer group" onClick={() => setActiveSection('contact')}>
           <p className="text-xs text-slate-400 uppercase font-bold tracking-widest font-mono">Status</p>
           <div className="flex items-center justify-between mt-2">
             <span className="text-lg md:text-2xl font-medium text-white group-hover:text-[#00E5FF] transition-colors">Let's build together</span>
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10h14m0 0l-4-4m4 4l-4 4"></path>
                </svg>
             </div>
           </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
