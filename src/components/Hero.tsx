import { motion } from 'motion/react';
import { sectionVariants, childVariants } from './animations';

export function Hero({ setActiveSection }: any) {
  
  // Explicit variants to ensure animations trigger properly inside the parent motion group
  const nameVariants = {
    initial: { y: 40, opacity: 0, scale: 0.9 },
    animate: { 
      y: 0, opacity: 1, scale: 1, 
      transition: { duration: 0.8, type: "spring", bounce: 0.5 } 
    }
  };

  const roleVariants = {
    initial: { y: 30, opacity: 0, scale: 0.95 },
    animate: { 
      y: 0, opacity: 1, scale: 1, 
      transition: { duration: 0.8, delay: 0.15, type: "spring", bounce: 0.4 } 
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { 
      opacity: 1, y: 0, 
      transition: { duration: 0.8, delay: 0.3 } 
    }
  };

  return (
    <>
      <style>
        {`
          /* Custom Mobile-Only Blink Animation */
          @media (max-width: 767px) {
            .mobile-blink {
              animation: mobileFadeUpBlink 4s ease-in-out infinite;
            }
          }
          @keyframes mobileFadeUpBlink {
            0%, 100% { 
              box-shadow: 0 0 0px rgba(0,229,255,0); 
              transform: translateY(0px);
              border-color: rgba(30, 41, 59, 0.5);
            }
            50% { 
              box-shadow: 0 8px 20px rgba(0,229,255,0.25); 
              transform: translateY(-4px);
              border-color: rgba(0, 229, 255, 0.5);
            }
          }

          @media (max-width: 767px) {
            .mobile-title-animate {
              background: linear-gradient(270deg, #00E5FF, #ffffff, #00E5FF);
              background-size: 200% 200%;
              animation: gradientShift 3s ease infinite, mobileTitlePulse 3s ease-in-out infinite alternate;
              -webkit-background-clip: text;
              color: transparent;
            }
            .mobile-card-animate {
              animation: floatCard 6s ease-in-out infinite;
            }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes floatCard {
            0%, 100% { transform: translateY(0px); box-shadow: 0 0 40px rgba(0,229,255,0.35); }
            50% { transform: translateY(-12px); box-shadow: 0 15px 50px rgba(0,229,255,0.6); }
          }
          @keyframes mobileTitlePulse {
            0%, 100% {
              filter: drop-shadow(0 0 2px rgba(0, 229, 255, 0.3));
            }
            50% {
              filter: drop-shadow(0 0 12px rgba(0, 229, 255, 0.8));
            }
          }
          
          /* Native CSS Shimmer for guaranteed continuous glow */
          .text-shimmer {
            background: linear-gradient(to right, #ffffff 20%, #00E5FF 50%, #ffffff 80%);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shine 4s linear infinite;
          }
          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }
        `}
      </style>

      {/* Reduced outer padding on mobile to prevent clipping */}
      <motion.div 
        className="absolute inset-0 w-full max-w-7xl mx-auto p-3 md:p-6 h-full flex flex-col pt-0 pb-6 md:pb-12 overflow-hidden"
        variants={sectionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 flex-grow h-full min-h-0 relative">
          
          {/* Main Profile Card - Added mobile-specific border and neon glow, resets on md (desktop) */}
          <motion.div 
            variants={childVariants} 
            className="md:col-span-8 md:row-span-4 bg-slate-900/80 border border-[#00E5FF]/80 shadow-[0_0_40px_rgba(0,229,255,0.35)] md:border-slate-800/50 md:shadow-none rounded-[2rem] p-5 md:p-8 flex flex-col justify-center md:justify-between relative overflow-y-auto no-scrollbar group h-[65vh] md:h-full max-h-[65vh] md:max-h-none my-auto transition-all duration-700 ease-in-out mobile-card-animate"
          >
            
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 md:w-96 md:h-96 w-56 h-56 bg-[#00E5FF]/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="z-10 relative flex flex-col items-center md:items-start text-center md:text-left w-full mt-2 md:mt-0">
              <div className="bg-black/80 px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-4 md:mb-6 inline-block font-mono border border-slate-700 text-[#00E5FF]">
                ● AVAILABLE FOR NEW OPPORTUNITIES
              </div>
              
              {/* Reduced font size for mobile (text-4xl) to ensure it fits perfectly */}
              <h1 className="font-bold leading-tight mb-3 md:mb-4 tracking-tighter flex flex-col items-center md:items-start transition-all duration-700">
                
                {/* Now using explicit variants so it animates reliably on load */}
                <motion.div 
                  variants={nameVariants}
                  className="inline-block relative drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]"
                >
                  <span className="text-shimmer block pb-1 md:pb-2 transition-all duration-700 text-7xl md:text-7xl leading-none">
                    Sai Kiran.
                  </span>
                </motion.div>
                
                <motion.div
                  variants={roleVariants}
                  className="inline-block mt-2 md:mt-1"
                >
                  <span 
                    className="inline-block group-hover:scale-[1.02] transition-all duration-700 cursor-default mobile-title-animate md:text-transparent md:stroke-text text-3xl md:text-7xl" 
                    style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)'}}
                  >
                    Software<br/>Developer.
                  </span>
                </motion.div>
              </h1>
              
              {/* Updated wording to perfectly match the provided image */}
              <motion.p 
                variants={textVariants}
                className="text-slate-300 leading-relaxed text-[13px] md:text-base max-w-xl mt-4 md:mt-4 px-4 md:px-0"
              >
                Aspiring Software Developer with knowledge in Full Stack Development and web technologies. Passionate about learning modern technologies, building efficient applications, and enhancing problem-solving skills while contributing to innovative software solutions.
              </motion.p>
            </div>
          </motion.div>

          {/* ALL CARDS BELOW ARE HIDDEN ON MOBILE */}

          {/* Featured Project (Selected Work) */}
          <motion.div 
            variants={childVariants} 
            className="hidden md:block mobile-blink md:col-span-4 md:row-span-3 bg-slate-900/80 border border-slate-800/50 rounded-3xl p-0 overflow-hidden relative group cursor-pointer"
            onClick={() => setActiveSection('projects')}
          >
            <div className="absolute top-6 right-6 z-30">
              <svg className="w-5 h-5 text-slate-400 group-hover:text-[#00E5FF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>

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

          {/* Skills (My Stack) */}
          <motion.div 
            variants={childVariants} 
            className="hidden md:flex mobile-blink md:col-span-4 md:row-span-2 bg-slate-900/80 border border-slate-800/50 rounded-3xl p-6 flex-col justify-between cursor-pointer group" 
            onClick={() => setActiveSection('skills')}
          >
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
          <motion.div variants={childVariants} className="hidden md:flex md:col-span-8 md:row-span-2 bg-slate-900/80 border border-slate-800/50 text-white rounded-3xl p-6 md:p-8 justify-between items-end overflow-hidden relative group">
            <div className="flex flex-col z-10">
              <span className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white/95">2026</span>
              <span className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest text-slate-400 mt-2">Graduation</span>
            </div>
            <div className="flex flex-col z-10">
              <span className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white/95">8.0</span>
              <span className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest text-slate-400 mt-2">CGPA</span>
            </div>
            <div className="flex flex-col z-10">
              <span className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white/95">ECE</span>
              <span className="text-[10px] md:text-xs font-bold font-mono uppercase tracking-widest text-slate-400 mt-2">B.Tech</span>
            </div>
          </motion.div>

          {/* CTA Status Card */}
          <motion.div 
            variants={childVariants} 
            className="hidden md:flex md:col-span-4 md:row-span-1 bg-slate-800/90 border border-slate-700/50 rounded-3xl p-6 items-center justify-between cursor-pointer group hover:bg-slate-800 transition-colors duration-300" 
            onClick={() => setActiveSection('contact')}
          >
             <div className="flex flex-col justify-center h-full">
               <div className="flex items-center gap-2 mb-1.5">
                 <div className="relative flex h-2 w-2 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#00E5FF] opacity-60"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00E5FF]"></span>
                 </div>
                 <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-[0.2em]">Status</p>
               </div>
               
               <span className="text-lg md:text-xl font-medium tracking-wide text-white group-hover:text-[#00E5FF] transition-colors duration-300">
                 Let's build together
               </span>
             </div>
             
             <div className="w-10 h-10 md:w-11 md:h-11 bg-white/10 border border-white/20 group-hover:bg-white rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-all duration-300 shrink-0">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10"></path>
                </svg>
             </div>
          </motion.div>

        </div>
      </motion.div>
    </>
  );
}