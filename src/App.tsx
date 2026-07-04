import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Photoshop } from './components/Photoshop';
import { Experience } from './components/Experience';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { SplashScreen } from './components/SplashScreen';
import { Background3D } from './components/Background3D';
import { Certifications } from './components/Certifications';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-[#020617] text-white min-h-screen h-screen overflow-hidden flex flex-col font-sans relative selection:bg-blue-900 selection:text-white isolate">
      {/* Premium Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden bg-[#020617]">
        {/* Animated Grid */}
        <div className="absolute inset-[-100%] w-[300%] h-[300%] bg-grid-pattern animate-grid opacity-30" />
        
        {/* Soft Ambient Glows (Mesh Gradient Feel) */}
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#00E5FF]/10 blur-[120px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[100px] rounded-full mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
      </div>
      <Background3D />
      <CustomCursor />
      
      {!isLoaded && <SplashScreen onComplete={() => setIsLoaded(true)} />}

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      
      <main className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeSection === 'hero' && <Hero key="hero" setActiveSection={setActiveSection} />}
          {activeSection === 'about' && <About key="about" />}
          {activeSection === 'skills' && <Skills key="skills" setActiveSection={setActiveSection} />}
          {activeSection === 'photoshop' && <Photoshop key="photoshop" />}
          {activeSection === 'projects' && <Projects key="projects" />}
          {activeSection === 'experience' && <Experience key="experience" />}
          {activeSection === 'resume' && <Resume key="resume" />}
          {activeSection === 'contact' && <Contact key="contact" />}
          {activeSection === 'certifications' && <Certifications key="certifications" />}
        </AnimatePresence>
      </main>
    </div>
  );
}
