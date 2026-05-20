import { motion } from 'motion/react';
import { sectionVariants } from './animations';

const certifications = [
  {
    period: '2025',
    duration: '',
    role: 'IEEE Research Paper Presentation',
    organization: 'RMK College of Engineering and Technology',
    domains: ['IEEE Conference', 'Wireless Communication', 'Signal Processing'],
    desc: [
      'Participated in the IEEE International Conference conducted at RMK College in 2025.',
      'Presented research paper ID 2144 titled "Channel Estimation for IRS-based UAV Communications using ADALM PLUTO".',
      'Explored concepts related to UAV communication systems, intelligent reflecting surfaces (IRS), and wireless signal processing.',
      'Gained exposure to technical research presentation methodologies and emerging communication technologies.'
    ],
    tech: ['IEEE', 'Conference']
  },
  {
    period: '2026',
    duration: '',
    role: 'IEEE IC2PCT-2026 Research Presentation',
    organization: 'Galgotias University',
    domains: ['IEEE Conference', 'AI', 'IoT', 'Communication Technologies'],
    desc: [
      'Participated in IEEE 6th International Conference on Computing, Power, and Communication Technologies (IC2PCT-2026).',
      'Presented research paper ID 2099 titled "AI-based Crop Monitoring System for Rural Environments" under the Communication track.',
      'Explored concepts related to Artificial Intelligence, IoT-based smart agriculture, and real-time environmental monitoring.',
      'Gained exposure to technical research methodologies, academic paper presentation, and emerging communication technologies.'
    ],
    tech: ['IEEE', 'Conference']
  },
  {
    organization: 'Indian Institute of Science Bangalore (IISc Bangalore)',
    period: 'Jan 2025 - Apr 2025',
    role: 'NPTEL Elite Certification',
    domains: ['NPTEL', 'Sensors and Actuators', 'IoT'],
    desc: [
      'Successfully completed the 12-week NPTEL Elite certification course on "Sensors and Actuators".',
      'Offered by IISc Bangalore under the Ministry of Education (MoE), Government of India.',
      'Gained knowledge in sensors, actuators, embedded systems, and their applications in automation and IoT technologies.'
    ],
    tech: ['NPTEL', 'Certification']
  },
  {
    organization: 'Indian Institute of Technology Madras (IIT Madras)',
    period: 'Jan 2025 - Apr 2025',
    role: 'NPTEL Certification',
    domains: ['NPTEL', 'Construction Materials', 'Online Certification'],
    desc: [
      'Successfully completed the 12-week NPTEL online certification course on "Basic Construction Materials".',
      'Offered by IIT Madras under the Ministry of Education (MoE), Government of India initiative.',
      'Gained foundational knowledge in construction materials, engineering properties, and material applications.',
      'Completed the course with successful performance in assignments and proctored examinations.'
    ],
    tech: ['NPTEL', 'Certification']
  },
  {
    period: '2024',
    duration: '',
    role: 'Certificate',
    company: 'Generative AI Studio',
    domains: ['AI'],
    desc: [
      'Introduction to Generative AI Studio.'
    ],
    tech: ['Generative AI']
  },
  {
    period: '2024',
    duration: '',
    role: 'Certificate',
    company: 'Generative AI for Beginners',
    domains: ['AI'],
    desc: [
      'Generative AI for Beginners.'
    ],
    tech: ['Generative AI', 'Beginner']
  }
];

// 1. Parent container stagger for initial load
const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

// 2. Smooth Scroll Up and Fade for Timeline Cards
const cardVariants = {
  initial: { opacity: 0, y: 60 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      mass: 0.8,
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const staggerDomains = {
  initial: { opacity: 0, y: 10 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export function Certifications() {
  return (
    <motion.div
      className="absolute inset-0 w-full max-w-7xl mx-auto p-3 md:p-6 h-full flex flex-col pt-0 pb-6 md:pb-12"
      variants={sectionVariants} // Assuming this handles the page entry
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="bg-slate-900/90 border border-slate-800/50 rounded-3xl p-8 md:p-12 flex-1 flex flex-col overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/50 pb-8 mb-8 shrink-0">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Achievements & Certificates
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden md:flex items-center space-x-2"
          >
            <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#00E5FF]">Available</span>
          </motion.div>
        </div>

        {/* Scrollable Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-12 relative flex-1 overflow-y-auto no-scrollbar pr-4 scroll-smooth"
        >

          {/* Animated Timeline Line */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="absolute left-[8px] md:left-[180px] top-2 w-px bg-gradient-to-b from-[#00E5FF]/50 via-slate-800/50 to-transparent z-0 hidden lg:block"
          />

          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.2, margin: "0px 0px -50px 0px" }} // Waits until 20% visible before triggering
              className="flex flex-col lg:flex-row relative z-10 group"
            >
              {/* Marker */}
              <div className="absolute left-[176px] top-6 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-[#00E5FF] group-hover:scale-150 group-hover:shadow-[0_0_10px_#00E5FF] transition-all duration-300 hidden lg:block border ring-4 ring-slate-900"></div>

              {/* Left Column (Dates) */}
              <div className="lg:w-[220px] shrink-0 mb-4 lg:mb-0 pt-4 flex flex-col items-start lg:pr-8">
                <span className="font-mono text-slate-300 text-sm group-hover:text-[#00E5FF] transition-colors duration-300">
                  {cert.period || 'Continuous'}
                </span>
                {cert.duration && (
                  <span className="font-mono text-slate-500 text-xs mt-1">{cert.duration}</span>
                )}
              </div>

              {/* Right Column (Card Content) */}
              <div className="flex-1 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:bg-slate-800/60 transition-all duration-500 hover:border-[#00E5FF]/30 hover:shadow-[0_8px_30px_rgb(0,229,255,0.05)] hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-white mb-2">{cert.role}</h3>
                <h4 className="text-[#00E5FF] mb-6 font-medium">{cert.organization || cert.company}</h4>

                <div className="flex flex-col gap-4 mb-8">
                  {/* Domain Tags */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {cert.domains.map((d, dIdx) => (
                      <motion.span
                        key={d}
                        variants={staggerDomains}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        transition={{ delay: dIdx * 0.08 }} // Staggered fade up for tags
                        className="inline-block px-2 py-0.5 bg-slate-900/80 border border-slate-700 text-slate-300 text-[10px] uppercase tracking-wider font-mono rounded"
                      >
                        {d}
                      </motion.span>
                    ))}
                  </div>

                  {/* Descriptions */}
                  {cert.desc.map((d, idx) => (
                    <p key={idx} className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {d}
                    </p>
                  ))}
                </div>

                {/* Footer Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800/50">
                  {cert.tech.map(t => (
                    <span key={t} className="text-[10px] text-slate-500 font-mono tracking-wide">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}