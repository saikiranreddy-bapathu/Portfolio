import { motion } from 'motion/react';
import { sectionVariants, childVariants } from './animations';

const projects = [
  {
    id: '01',
    title: 'Drive AI Agent',
    desc: 'Developed an AI-powered document assistant that enables users to chat with uploaded documents using intelligent document retrieval and Generative AI integration. Implemented PDF parsing, authentication, and RAG-based context retrieval.',
    stack: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Generative AI', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    link: 'https://github.com/saikiranreddy-bapathu/Drive-Agent-RAG',
  },
  {
    id: '02',
    title: 'Hospital Management System',
    desc: 'Developed a web-based Hospital Management System for patient registration and medical record management. Implemented CRUD operations using Java Servlets, JDBC, and MySQL with deployment on Apache Tomcat. Designed a modular backend architecture to simplify maintenance and support future feature enhancements',
    stack: ['Java', 'Servlets', 'JDBC', 'MySQL', 'Apache Tomcat'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    link: 'https://github.com/saikiranreddy-bapathu/Hospital-Management-System',
  },
  {
    id: '03',
    title: 'AI-Based Crop Monitoring System',
    desc: 'Developed an AI and IoT-based smart crop monitoring system for real-time monitoring of soil moisture, temperature, humidity, and crop health using ESP32, Arduino Nano, and IoT sensors. Implemented CNN/TensorFlow-based image processing for crop disease detection.',
    stack: ['Python', 'IoT', 'CNN', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    link: 'https://github.com/saikiranreddy-bapathu/AI-Crop-Monitoring-System',
  },
  {
    id: '04',
    title: 'Knight Bite Website Clone',
    desc: 'Recreated the Knight Bite landing page from scratch using HTML5 and CSS3 to strengthen front-end development fundamentals. Focused on building a responsive, pixel-perfect interface while practicing semantic HTML, Flexbox, CSS Grid, media queries, and interactive hover animations.',
    stack: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    link: 'https://github.com/saikiranreddy-bapathu/Knight-Bite',
  }
];

export function Projects() {
  return (
    <motion.div
      className="absolute inset-0 w-full max-w-7xl mx-auto p-3 md:p-6 flex flex-col pt-0 pb-6 md:pb-12"
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="flex items-center justify-between mb-8 flex-shrink-0">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Projects</h2>
      </div>

      {/* The Projects Container Box */}
      <div className="w-full flex-1 overflow-y-auto no-scrollbar rounded-3xl border border-slate-700/50 bg-slate-900/90 p-4 md:p-8 relative shadow-2xl">
        <div className="flex flex-col gap-0 pb-[60vh]">
          {projects.map((proj, i) => (
            <motion.a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              key={proj.id}
              className="sticky w-full bg-slate-800/95 border border-slate-700/50 hover:border-white/10 hover:shadow-[0_-5px_40px_rgba(255,255,255,0.05)] rounded-3xl p-6 md:p-10 shadow-[0_-15px_30px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row items-center gap-8 min-h-[350px] transition-all duration-700 block group"
              style={{ top: `calc(${i * 2}rem + 1rem)` }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.01, y: -4 }}
            >
              <div className="flex-1 w-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[#00E5FF] text-xl md:text-2xl font-bold block">{proj.id}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#00E5FF] transition-colors">{proj.title}</h3>
                <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.stack?.map(t => (
                    <span key={t} className="px-3 py-1.5 bg-slate-900 text-xs rounded-full border border-slate-700/50 font-mono text-[#00E5FF]">{t}</span>
                  ))}
                </div>
              </div>
              {/* Visual Mockup Area */}
              <div className="w-full lg:w-[400px] aspect-[4/3] bg-slate-900/80 rounded-2xl border border-slate-700 flex items-center justify-center p-3 md:p-4 shrink-0 overflow-hidden group-hover:border-white/20 transition-all duration-700">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover rounded shadow-inner group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
