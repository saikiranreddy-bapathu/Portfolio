import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

export function Background3D() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 100, stiffness: 40 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // We need inverse values for the other orb
  const inverseSmoothX = useTransform(smoothX, (v) => -v);
  const inverseSmoothY = useTransform(smoothY, (v) => -v);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 60);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 60);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#020617]">
      {/* Subtle Aurora / Gradient Orbs using radial-gradient to avoid expensive CSS blur filter */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-30 bg-[radial-gradient(circle_at_center,_#3730a3_0%,_#1e3a8a_40%,_transparent_70%)] pointer-events-none"
        style={{ x: inverseSmoothX, y: inverseSmoothY, willChange: 'transform' }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-30 bg-[radial-gradient(circle_at_center,_#164e63_0%,_#1e293b_40%,_transparent_70%)] pointer-events-none"
        style={{ x: smoothX, y: smoothY, willChange: 'transform' }}
      />
      <motion.div
        className="absolute top-[30%] right-[30%] w-[30vw] h-[30vw] rounded-full opacity-20 bg-[radial-gradient(circle_at_center,_#00E5FF_0%,_transparent_70%)] pointer-events-none"
        animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Very subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none"></div>
    </div>
  );
}
