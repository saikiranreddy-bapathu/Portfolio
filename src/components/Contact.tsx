import { motion } from 'motion/react';
import { sectionVariants, childVariants } from './animations';

export function Contact() {
  const sentence = "Let's work together.";
  const words = sentence.split(" ");

  return (
    <motion.div
      className="absolute inset-0 w-full max-w-7xl mx-auto p-6 h-full flex flex-col pt-0 pb-12 overflow-y-auto no-scrollbar"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-16 flex flex-col items-center justify-center text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/60 via-zinc-900 to-zinc-900"></div>

        <motion.div variants={childVariants} className="z-10 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-12 inline-block font-mono border border-zinc-700">CONTACT</motion.div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 z-10 flex flex-wrap justify-center gap-x-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block overflow-hidden pb-2"
            >
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i + 0.3 }}
              >
                {word}
              </motion.span>
            </motion.span>
          ))}
        </h2>

        <motion.p variants={childVariants} className="text-zinc-400 max-w-lg mb-12 text-sm md:text-base z-10">
          Have a project in mind or want to talk about a new opportunity? I'd love to hear from you.
        </motion.p>

        <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-4 mb-24 z-10">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saikiranreddybapatu@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">Send Email ↗</a>
          <a href="/assets/resume.pdf" download className="bg-transparent border border-zinc-700 text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-colors">Download Resume</a>
        </motion.div>

        <motion.div variants={childVariants} className="flex gap-6 text-sm font-mono tracking-widest uppercase text-zinc-500 mb-8 z-10">
          <a href="https://github.com/saikiranreddy-bapathu" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">GitHub</a>
          <span className="text-zinc-800">·</span>
          <a href="https://www.linkedin.com/in/saikiranreddybapathu/" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">LinkedIn</a>
        </motion.div>

        <motion.div variants={childVariants} className="text-xs font-mono tracking-widest text-zinc-600 z-10 flex flex-col md:flex-row gap-2 md:gap-4 items-center">
          <span>saikiranreddybapatu@gmail.com</span>
        </motion.div>
      </div>
    </motion.div>
  );
}
