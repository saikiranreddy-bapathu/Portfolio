import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'WORKS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'resume', label: 'RESUME' }
];

export function Navbar({ activeSection, setActiveSection }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to handle navigation and close the menu
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="relative flex justify-between items-center px-6 py-6 z-50 no-print flex-shrink-0 w-full max-w-7xl mx-auto">
      
      {/* Brand / Logo */}
      <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => handleNavClick('hero')}>
        <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 font-bold text-xl italic font-serif shadow-lg group-hover:bg-white transition-all duration-300">SK</div>
        <div className="hidden sm:flex items-center px-4 py-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:bg-slate-800/50 transition-colors duration-300">
          <span className="text-sm md:text-[15px] font-medium tracking-wide uppercase text-slate-200">
            Sai Kiran Reddy <span className="text-slate-500 mx-2">/</span> <span className="text-[#00E5FF]/90">Software Developer</span>
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-zinc-400">
        {navItems.map(item => (
          <span 
            key={item.id} 
            onClick={() => handleNavClick(item.id)}
            className={`cursor-pointer transition-all hover:text-white hover:tracking-wide ${activeSection === item.id ? 'text-white border-b-2 border-white pb-0.5' : ''}`}
          >
            {item.label}
          </span>
        ))}
        <span 
          onClick={() => handleNavClick('contact')}
          className="bg-zinc-800 px-4 py-1.5 rounded-full text-white ring-1 ring-zinc-700 cursor-pointer hover:bg-zinc-700 transition-colors"
        >
          CONTACT
        </span>
      </nav>

      {/* Mobile Menu Button (Hamburger / Close) */}
      <div className="flex lg:hidden items-center z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle Mobile Menu"
        >
          {isMenuOpen ? (
            // Close (X) Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-0 right-0 mx-6 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col space-y-4 lg:hidden shadow-2xl z-40"
          >
            {navItems.map(item => (
              <span 
                key={item.id} 
                onClick={() => handleNavClick(item.id)} 
                className={`cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeSection === item.id ? 'bg-white/10 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
              >
                {item.label}
              </span>
            ))}
            <span 
              onClick={() => handleNavClick('contact')} 
              className="mt-4 bg-zinc-800 px-4 py-3 rounded-xl text-white text-center ring-1 ring-zinc-700 cursor-pointer text-sm font-semibold hover:bg-zinc-700 transition-colors"
            >
              HIRE ME
            </span>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}