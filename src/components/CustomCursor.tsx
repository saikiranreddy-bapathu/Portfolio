import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const xDot = useMotionValue(-100);
  const yDot = useMotionValue(-100);
  const xRing = useMotionValue(-100);
  const yRing = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 400, mass: 0.1 };
  const cursorXSpring = useSpring(xRing, springConfig);
  const cursorYSpring = useSpring(yRing, springConfig);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    
    let frameId: number;
    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        xDot.set(e.clientX - 4);
        yDot.set(e.clientY - 4);
        xRing.set(e.clientX - 16);
        yRing.set(e.clientY - 16);
      });
    };
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(frameId);
    };
  }, [xDot, yDot, xRing, yRing]);

  if (isMobile) return null;

  return (
    <div className="no-print hidden md:block">
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{ x: xDot, y: yDot, willChange: 'transform' }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9998]"
        style={{ x: cursorXSpring, y: cursorYSpring, willChange: 'transform' }}
      />
    </div>
  );
}
