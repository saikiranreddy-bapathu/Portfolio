import { motion } from 'motion/react';
import { sectionVariants, childVariants } from './animations';

export function Resume() {
  return (
    <motion.div 
      className="absolute inset-0 w-full max-w-7xl mx-auto p-6 h-full flex flex-col pt-0 pb-12 overflow-y-auto no-scrollbar"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative bg-slate-900/80 border border-slate-700/50 rounded-3xl p-8 md:p-12 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 overflow-hidden shadow-2xl group no-print">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-[#00E5FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">My Resume</h2>
          <p className="text-slate-400 font-mono text-sm">Detailed overview of my professional experience.</p>
        </div>
        <div className="relative z-10 flex gap-4">
          <a href="/assets/resume.pdf" download className="group/btn relative px-6 py-3 bg-white text-black hover:bg-[#00E5FF] hover:text-black rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] flex items-center gap-2">
            <span>Download Resume</span>
            <svg className="w-4 h-4 transform group/btn:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </a>
        </div>
      </div>

      <motion.div variants={childVariants} className="w-full h-[800px] max-w-5xl mx-auto relative group print:w-full print:p-0 print:shadow-none print:max-w-none">
         {/* Glowing border effect behind the container */}
         <div className="absolute -inset-0.5 bg-gradient-to-b from-[#00E5FF]/30 to-blue-600/30 rounded-[26px] blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
         
         <div className="relative w-full h-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-slate-900 border border-slate-700/50 flex flex-col backdrop-blur-md">
            {/* Premium Window Header */}
            <div className="h-12 bg-gradient-to-b from-slate-800 to-slate-900 border-b border-slate-700/50 flex items-center px-4 justify-between shrink-0 z-20 shadow-md">
               <div className="flex gap-2 group/dots">
                  <div className="w-3 h-3 rounded-full bg-slate-600/50 border border-slate-500/50 group-hover/dots:bg-red-500/80 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600/50 border border-slate-500/50 group-hover/dots:bg-yellow-500/80 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600/50 border border-slate-500/50 group-hover/dots:bg-green-500/80 transition-colors"></div>
               </div>
               <div className="flex-1 flex justify-center">
               </div>
               <div className="w-16"></div> {/* Spacer for centering */}
            </div>
            
            <div className="relative flex-1 w-full bg-slate-950 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00E5FF]/5 to-transparent pointer-events-none opacity-50 z-20"></div>
              <object data="/assets/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" className="w-full h-full relative z-10 overflow-hidden" style={{ overflow: 'hidden' }}>
                 <div className="flex flex-col items-center justify-center h-full p-8 text-center text-slate-400 bg-slate-900">
                    <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 shadow-xl">
                      <svg className="w-10 h-10 text-[#00E5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <p className="mb-4 text-2xl text-white font-medium tracking-tight">Resume Not Found</p>
                    <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                       Please ensure your resume PDF is located at <br/>
                       <code className="text-[#00E5FF] bg-slate-950 px-2 py-1 rounded font-mono border border-slate-800 mt-2 inline-block shadow-inner">public/assets/resume.pdf</code>
                    </p>
                 </div>
              </object>
            </div>
         </div>
      </motion.div>
    </motion.div>
  );
}
