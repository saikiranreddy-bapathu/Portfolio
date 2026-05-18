import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isInitializing) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += Math.floor(Math.random() * 8) + 2;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800);
          }, 400);
        }
        setProgress(currentProgress);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isInitializing, onComplete]);

  const handleClick = (e: React.MouseEvent) => {
    if (!isInitializing) {
      setClickPos({ x: e.clientX, y: e.clientY });
      setIsInitializing(true);
    }
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#0A0A0B] flex flex-col items-center justify-center overflow-hidden cursor-crosshair"
          onClick={handleClick}
          style={{ willChange: 'opacity, transform' }}
        >
          {/* Background Marquees */}
          <div className="absolute inset-0 flex flex-col justify-between py-[15vh] opacity-15 pointer-events-none">
             <motion.div 
               animate={{ x: ["-50%", "0%"] }} 
               transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
               className="whitespace-nowrap text-[12vw] font-black tracking-tighter text-white uppercase leading-none"
               style={{ willChange: 'transform' }}
             >
               SAI KIRAN REDDY • SAI KIRAN REDDY • SAI KIRAN REDDY • SAI KIRAN REDDY •
             </motion.div>
             <motion.div 
               animate={{ x: ["0%", "-50%"] }} 
               transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
               className="whitespace-nowrap text-[12vw] font-black tracking-tighter text-transparent uppercase leading-none mt-auto"
               style={{ willChange: 'transform', WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}
             >
               JAVA FULL STACK ENGINEER • JAVA FULL STACK ENGINEER •
             </motion.div>
          </div>

          <div className="relative w-full h-full pointer-events-none">
            {!isInitializing && (
               <motion.div 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 text-xl font-mono tracking-[0.2em] uppercase text-center"
                 animate={{ opacity: [0.4, 1, 0.4] }}
                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                 style={{ willChange: 'opacity' }}
               >
                 [ Click to initialize ]
               </motion.div>
            )}

            {isInitializing && (
               <motion.div 
                 className="absolute inset-0"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.5 }}
               >
                 {/* Progress Circle at click position */}
                 <motion.div 
                   className="absolute flex items-center justify-center origin-center"
                   style={{ left: clickPos.x, top: clickPos.y, x: "-50%", y: "-50%" }}
                   initial={{ scale: 1 }}
                   animate={{ scale: progress === 100 ? 50 : 1 }}
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                 >
                   <motion.div
                     className="absolute rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                     initial={{ scale: 0, opacity: 0 }}
                     animate={{ 
                       scale: progress >= 95 ? 2 : 1,
                       opacity: 1
                     }}
                     style={{ width: 80, height: 80, willChange: 'transform, opacity' }}
                     transition={{ duration: 0.3 }}
                   />
                   <span 
                     className="relative font-black text-[#0A0A0B] tracking-tighter transition-all duration-300" 
                     style={{ 
                       fontSize: progress >= 95 ? '3rem' : '1.5rem',
                       WebkitTextStroke: '0px'
                     }}
                   >
                     {progress}%
                   </span>
                 </motion.div>

                 {/* Bar at the bottom */}
                 <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80vw] max-w-sm flex flex-col gap-2">
                   <div className="text-white/50 text-xs font-mono tracking-widest uppercase text-center">
                     Initializing...
                   </div>
                   <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                     <div className="h-full bg-white transition-all duration-75" style={{ width: `${progress}%` }} />
                   </div>
                 </div>
               </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
