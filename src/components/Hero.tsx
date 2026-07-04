import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { sectionVariants } from './animations';

export function Hero({ setActiveSection }: any) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const dateString = time.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  // Custom variants for the transforming grid animation
  const gridContainerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const gridItemVariants = {
    initial: { opacity: 0, scale: 0.8, y: 80, rotateX: 15, filter: 'blur(15px)' },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { type: "spring", stiffness: 70, damping: 15, duration: 1.2 } 
    }
  };

  return (
    <motion.div 
      className="absolute inset-0 w-full max-w-7xl mx-auto p-4 md:p-6 h-full flex flex-col pt-0 pb-6 overflow-hidden"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Immersive Ambient Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-teal-600/20 rounded-full blur-[120px]"
        />
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 md:gap-6 flex-grow auto-rows-[auto] md:auto-rows-fr h-full min-h-0 relative z-10 w-full overflow-y-auto no-scrollbar pb-10"
        variants={gridContainerVariants}
        initial="initial"
        animate="animate"
      >
        
        {/* Intro Card */}
        <motion.div 
          variants={gridItemVariants}
          className="col-span-1 md:col-span-2 lg:col-span-5 row-span-1 md:row-span-2 p-6 md:p-10 rounded-[2.5rem] flex flex-col justify-between neo-skeuo relative overflow-hidden"
        >
          <div className="hidden md:flex absolute top-6 right-6 z-30 gap-2">
             <div className="px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/5 shadow-inner text-xs font-mono text-slate-300 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                {timeString}
             </div>
             <div className="px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/5 shadow-inner text-xs font-mono text-slate-400 flex items-center">
                {dateString}
             </div>
          </div>

          <div className="z-10 mt-2">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-wide mb-2 drop-shadow-2xl">SAI KIRAN.</h1>
            <p className="text-xs md:text-sm text-slate-400 uppercase tracking-[0.2em] font-mono mb-6 drop-shadow-md">SOFTWARE DEVELOPER</p>
            <p className="text-sm md:text-base leading-relaxed text-slate-300 max-w-lg mb-8">
              I specialize in crafting visually striking and user-friendly digital experiences. With a passion for blending aesthetics and functionality, I bring ideas to life, creating innovative solutions in the dynamic world of web development.
            </p>
          </div>
          
          <div className="z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-auto">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('about')}
              className="px-6 py-3 rounded-full text-sm font-medium text-slate-200 tracking-wide neo-skeuo-button flex items-center gap-2 group w-max"
            >
              <span>More about Me</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Selected Work */}
        <motion.div 
          variants={gridItemVariants}
          className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 md:row-span-2 rounded-[2.5rem] overflow-hidden relative group cursor-pointer flex flex-col items-center justify-center transition-all duration-500 neo-skeuo h-[350px] md:h-auto"
          onClick={() => setActiveSection('projects')}
        >
          <div className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full flex items-center justify-center transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all neo-skeuo-button">
            <svg className="w-5 h-5 text-white transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
          
          <div className="w-[85%] h-[75%] bg-slate-950 rounded-t-xl border border-slate-800 p-5 transform group-hover:-translate-y-3 transition-transform duration-700 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden mt-auto z-0">
             {/* App UI mock */}
             <div className="flex space-x-2 mb-4 border-b border-slate-800 pb-3">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
             </div>
             
             <div className="space-y-4">
               <div className="h-4 bg-slate-800 rounded w-1/3"></div>
               <div className="h-4 bg-slate-800/50 rounded w-1/2"></div>
               <div className="h-4 bg-slate-800/30 rounded w-3/4"></div>
             </div>

             {/* Decorative animated gradient */}
             <motion.div 
               animate={{ rotate: 360, scale: [1, 1.5, 1] }} 
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -mt-32 -ml-32 w-64 h-64 bg-purple-500/20 blur-[70px] rounded-full pointer-events-none"
             />
             <motion.div 
               animate={{ rotate: -360, scale: [1, 1.3, 1] }} 
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-1/2 -mt-32 -ml-32 w-64 h-64 bg-blue-500/20 blur-[70px] rounded-full pointer-events-none mix-blend-screen"
             />
          </div>
          
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full px-4 transform group-hover:scale-105 transition-transform duration-500">
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">Drive AI Agent</h3>
             <p className="text-slate-300 text-sm md:text-base font-mono">Selected Work</p>
          </div>
        </motion.div>

        {/* My Stack */}
        <motion.div 
          variants={gridItemVariants}
          className="col-span-1 md:col-span-2 lg:col-span-4 row-span-1 text-white rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-500 neo-skeuo min-h-[200px] lg:min-h-[250px]"
          onClick={() => setActiveSection('skills')}
        >
          <div className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full flex items-center justify-center transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all neo-skeuo-button">
            <svg className="w-5 h-5 text-white transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
          <div className="z-10 font-mono text-sm uppercase tracking-widest font-bold mb-4 opacity-90">
            My Stack
          </div>
          
          <div className="z-10 bg-white/5 border border-white/10 rounded-3xl p-5 flex items-center justify-around w-full shadow-2xl backdrop-blur-sm mt-auto">
            {/* Tech stack items aligned evenly */}
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 shadow-xl">
              <span className="text-xs md:text-sm font-bold text-slate-900">JAVA</span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 delay-75 shadow-xl">
              <span className="text-xs md:text-sm font-bold text-slate-900">SPRING</span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 delay-150 shadow-xl">
              <span className="text-xs md:text-sm font-bold text-slate-900">REACT</span>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 delay-200 shadow-xl">
              <span className="text-xs md:text-sm font-bold text-slate-900">SQL</span>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          variants={gridItemVariants}
          className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-center items-center text-center group transition-all duration-500 neo-skeuo relative min-h-[200px] lg:min-h-[250px]"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-800/80 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 text-slate-300 shadow-inner">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="text-3xl md:text-4xl font-bold text-white mb-2">8.0 <span className="text-sm md:text-base text-slate-400 font-normal">CGPA</span></div>
          <div className="text-[10px] md:text-xs font-mono text-slate-300 uppercase tracking-[0.15em] mt-1">B.Tech ECE (22-26)</div>
          <div className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.1em] mt-2">Vel Tech University</div>
        </motion.div>

        {/* Contact */}
        <motion.div 
          variants={gridItemVariants}
          className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden group cursor-pointer flex flex-col justify-center items-center neo-skeuo min-h-[200px] lg:min-h-[250px]"
          onClick={() => setActiveSection('contact')}
        >
          <div className="absolute top-6 right-6 z-30 w-10 h-10 text-white rounded-full flex items-center justify-center transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 neo-skeuo-button">
            <svg className="w-5 h-5 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
          <div className="font-bold text-white z-10 relative text-xl md:text-2xl mt-4">Contact</div>
          <div className="text-sm text-slate-400 z-10 font-mono mt-2">Let's Connect</div>
          
          {/* Globe Effect */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-500/10 rounded-full border border-white/10 z-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-1000">
            <div className="w-36 h-36 rounded-full border border-white/20 border-dashed animate-[spin_20s_linear_infinite]"></div>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}