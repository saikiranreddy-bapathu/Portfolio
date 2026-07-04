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

      {/* MOBILE VIEW (Restored original) */}
      <div className="flex md:hidden flex-col gap-4 flex-grow h-full overflow-y-auto no-scrollbar pb-10 pt-4 z-20">
        <motion.div variants={gridItemVariants}>
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-white tracking-wide mb-2 drop-shadow-lg">SAI KIRAN.</h1>
            <p className="text-xs text-slate-400 uppercase tracking-[0.2em] font-mono">SOFTWARE DEVELOPER</p>
          </div>
          
          <p className="text-sm leading-relaxed text-slate-400 mb-8 pr-4">
            I specialize in crafting visually striking and user-friendly digital experiences. With a passion for blending aesthetics and functionality, I bring ideas to life, creating innovative solutions in the dynamic world of web development.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveSection('about')}
            className="px-6 py-2.5 rounded-full text-sm font-medium text-slate-200 tracking-wide neo-skeuo-button flex items-center gap-2 group w-max"
          >
            <span>More about Me</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
          
          <div className="flex items-center gap-4 mt-8">
            <motion.a 
              href="https://github.com/saikiranreddy-bapathu" 
              target="_blank" 
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-white neo-skeuo-button shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/sai-kiran-bapathu" 
              target="_blank" 
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-[#0A66C2] neo-skeuo-button shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </motion.a>
            <motion.a 
              href="mailto:91918bapathu@gmail.com" 
              className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-[#EA4335] neo-skeuo-button shadow-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="hidden md:grid md:grid-cols-2 lg:grid-cols-8 gap-4 md:gap-6 flex-grow auto-rows-[auto] md:auto-rows-fr h-full min-h-0 relative z-10 w-full overflow-y-auto no-scrollbar pb-10"
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
          className="col-span-1 md:col-span-2 lg:col-span-4 row-span-1 text-white rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between cursor-pointer group relative overflow-hidden transition-all duration-500 neo-skeuo min-h-[250px]"
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
          className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-center items-center text-center group transition-all duration-500 neo-skeuo relative min-h-[250px]"
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
          className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden group cursor-pointer flex flex-col justify-center items-center neo-skeuo min-h-[250px]"
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