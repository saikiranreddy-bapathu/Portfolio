const fs = require('fs');

const heroContent = fs.readFileSync('./src/components/Hero.tsx', 'utf8');

let newHeroContent = heroContent.replace(
  `  const gridItemVariants = {
    initial: { opacity: 0, scale: 0.8, y: 80, rotateX: 15, filter: 'blur(15px)' },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      rotateX: 0,
      filter: 'blur(0px)',
      transition: { type: "spring", stiffness: 70, damping: 15, duration: 1.2 } 
    }
  };`,
  `  const gridItemVariants = {
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

  const textVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }
  };`
);

newHeroContent = newHeroContent.replace(
  `    >
      {/* Immersive Ambient Background Layer */}`,
  `    >
      <style>
        {\`
          @keyframes slideUpBg {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .text-shimmer {
            background: linear-gradient(to right, #ffffff 20%, #00E5FF 50%, #ffffff 80%);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shine 4s linear infinite;
          }
          @keyframes shine { to { background-position: 200% center; } }
        \`}
      </style>
      {/* Immersive Ambient Background Layer */}`
);

newHeroContent = newHeroContent.replace(
  `      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4 md:gap-6 flex-grow auto-rows-[auto] md:auto-rows-fr h-full min-h-0 relative z-10 w-full overflow-y-auto no-scrollbar pb-10"`,
  `      {/* MOBILE VIEW (Restored Original Animated Card) */}
      <div className="flex md:hidden w-full h-full pb-10 z-20 overflow-y-auto no-scrollbar relative pt-2">
          <motion.div 
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            initial="initial" animate="animate"
            className="w-full bg-slate-900/80 border border-[#00E5FF]/80 shadow-[0_0_40px_rgba(0,229,255,0.35)] rounded-[2rem] p-5 flex flex-col justify-center relative overflow-hidden my-auto min-h-[65vh]"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#00E5FF]/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none z-0"></div>
            <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden rounded-[2rem] z-0">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00E5FF]/20 via-transparent to-transparent opacity-50 blur-xl mix-blend-screen animate-pulse"></div>
               <svg width="100%" height="200%" className="absolute inset-0 opacity-50" style={{ animation: "slideUpBg 20s linear infinite" }}>
                  <pattern id="neural-mobile" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.5" fill="#00E5FF" className="animate-ping" style={{animationDuration: '3s'}}/>
                    <circle cx="40" cy="30" r="1" fill="#fff" />
                    <path d="M 10 10 L 40 30" stroke="rgba(0,229,255,0.3)" strokeWidth="0.5" />
                    <path d="M 40 30 L 10 60" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                    <path d="M 10 10 L -20 30" stroke="rgba(0,229,255,0.3)" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#neural-mobile)" />
               </svg>
            </div>
            
            <div className="z-10 relative flex flex-col items-center text-center w-full mt-2">
              <div className="bg-black/80 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase mb-4 inline-block font-mono border border-slate-700 text-[#00E5FF]">
                ● AVAILABLE FOR NEW OPPORTUNITIES
              </div>
              <h1 className="font-bold leading-tight mb-3 tracking-tighter flex flex-col items-center z-10">
                <div className="flex flex-wrap items-center justify-center drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                  {"Sai Kiran.".split("").map((char, i) => (
                    <motion.span key={i} className="inline-block overflow-hidden pb-1">
                      <motion.span
                        className="inline-block text-shimmer text-6xl leading-none"
                        initial={{ y: "100%" }} animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
                      >
                        {char === " " ? "\\u00A0" : char}
                      </motion.span>
                    </motion.span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center justify-center mt-2">
                  {["Software", "Developer."].map((word, i) => (
                    <motion.span key={i} className="inline-block overflow-hidden mr-2 pb-1">
                      <motion.span
                        className="inline-block text-transparent stroke-text text-3xl"
                        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                        initial={{ y: "-100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "backOut", delay: 0.2 * i + 0.5 }}
                      >
                        {word}
                      </motion.span>
                    </motion.span>
                  ))}
                </div>
              </h1>
              
              <motion.p variants={textVariants} className="text-slate-300 leading-relaxed text-[13px] px-4 mt-4">
                Aspiring Software Developer with knowledge in Full Stack Development and web technologies. Passionate about learning modern technologies, building efficient applications, and enhancing problem-solving skills while contributing to innovative software solutions.
              </motion.p>

              <div className="flex gap-4 mt-6">
                <a href="https://github.com/saikiranreddy-bapathu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 bg-white/5 border border-white/10">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/sai-kiran-bapathu" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 bg-white/5 border border-white/10">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="mailto:91918bapathu@gmail.com" className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 bg-white/5 border border-white/10">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
      </div>

      <motion.div 
        className="hidden md:grid md:grid-cols-2 lg:grid-cols-8 gap-4 md:gap-6 flex-grow auto-rows-[auto] md:auto-rows-fr h-full min-h-0 relative z-10 w-full overflow-y-auto no-scrollbar pb-10"`
);

newHeroContent = newHeroContent.replace(
  `          <div className="z-10 mt-2">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-wide mb-2 drop-shadow-2xl">SAI KIRAN.</h1>
            <p className="text-xs md:text-sm text-slate-400 uppercase tracking-[0.2em] font-mono mb-6 drop-shadow-md">SOFTWARE DEVELOPER</p>
            <p className="text-sm md:text-base leading-relaxed text-slate-300 max-w-lg mb-8">
              I specialize in crafting visually striking and user-friendly digital experiences. With a passion for blending aesthetics and functionality, I bring ideas to life, creating innovative solutions in the dynamic world of web development.
            </p>
          </div>`,
  `          <div className="z-10 mt-2">
            <h1 className="font-bold leading-tight mb-3 md:mb-4 tracking-tighter flex flex-col items-start transition-all duration-700 z-10">
              <div className="flex flex-wrap items-center justify-start drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                {"Sai Kiran.".split("").map((char, i) => (
                  <motion.span key={i} className="inline-block overflow-hidden pb-1 md:pb-2">
                    <motion.span
                      className="inline-block text-shimmer text-5xl lg:text-7xl leading-none"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 * i }}
                    >
                      {char === " " ? "\\u00A0" : char}
                    </motion.span>
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-start mt-2 md:mt-1">
                {["Software", "Developer."].map((word, i) => (
                  <motion.span key={i} className="inline-block overflow-hidden mr-2 md:mr-3 pb-1">
                    <motion.span
                      className="inline-block group-hover:scale-[1.02] transition-all duration-700 cursor-default text-transparent stroke-text text-3xl sm:text-5xl lg:text-6xl"
                      style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                      initial={{ y: "-100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "backOut", delay: 0.2 * i + 0.5 }}
                    >
                      {word}
                    </motion.span>
                  </motion.span>
                ))}
              </div>
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-slate-300 max-w-lg mb-8">
              I specialize in crafting visually striking and user-friendly digital experiences. With a passion for blending aesthetics and functionality, I bring ideas to life, creating innovative solutions in the dynamic world of web development.
            </p>
          </div>`
);

fs.writeFileSync('./src/components/Hero.tsx', newHeroContent, 'utf8');
console.log('Update complete');
