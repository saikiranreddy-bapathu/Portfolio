import { useState } from 'react';
import { motion } from 'motion/react';
import { sectionVariants, childVariants } from './animations';

function ProfilePhoto() {
  return (
    <div className="w-[80%] max-w-sm aspect-[4/5] border border-blue-900/50 rounded-2xl relative z-10 bg-slate-900 overflow-hidden group shadow-[0_0_40px_rgba(0,229,255,0.15)] transition-transform duration-500 hover:scale-[1.02]">
      
      {/* Tech Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 flex flex-col items-center justify-center z-0">
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="techGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00E5FF" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="1.5" fill="#00E5FF" />
              <circle cx="0" cy="0" r="1.5" fill="#00E5FF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGrid)" />
        </svg>
      </div>

      {/* Actual Photo with spacing to show background */}
      <div className="absolute inset-4 z-10 rounded-xl overflow-hidden shadow-2xl border border-slate-700/50">
        <img src="/assets/photo.jpg" alt="Sai Kiran Reddy" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
      </div>

      <div className="absolute inset-0 rounded-2xl border border-[#00E5FF]/20 pointer-events-none z-20"></div>
    </div>
  );
}

export function About() {
  return (
    <motion.div
      className="absolute inset-0 w-full max-w-7xl mx-auto p-3 md:p-6 h-full flex flex-col pt-0 pb-6 md:pb-12 overflow-y-auto no-scrollbar"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-full pb-20 md:pb-0">
        {/* Left Col */}
        <motion.div variants={childVariants} className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-3xl p-8 flex flex-col pt-12 shadow-2xl">
          <div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-8 inline-block font-mono border border-slate-700 w-max text-[#00E5FF]">ABOUT</div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">I BUILD EFFICIENT<br />APPLICATIONS.</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed text-sm">
            <p>I am an aspiring Software Developer with knowledge in Java Full Stack Development and web technologies. I am passionate about learning modern technologies, building efficient applications, and enhancing problem-solving skills while contributing to innovative software solutions.</p>
            <p>I am pursuing my Bachelor of Technology (B.Tech) in Electronics and Communication Engineering at Vel Tech Rangarajan Dr. Sagunthala R D Institute of Science and Technology (2022 - 2026), maintaining a CGPA of 8.0.</p>
          </div>

          <div className="mt-12">
            <p className="text-[10px] uppercase tracking-widest font-mono text-slate-500 mb-4">Core Stack</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              {['Java', 'Spring Boot', 'JavaScript', 'React.js', 'HTML5', 'CSS3', 'SQL', 'GitHub'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700/50">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Col */}
        <motion.div variants={childVariants} className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px] shadow-2xl">
          <ProfilePhoto />
        </motion.div>
      </div>
    </motion.div>
  );
}
