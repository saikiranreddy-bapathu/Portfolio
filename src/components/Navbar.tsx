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
      <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group" onClick={() => handleNavClick('hero')}>
        <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 font-bold text-sm sm:text-lg italic font-serif shadow-lg group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-500">SK</div>
        <div className="h-8 sm:h-10 flex items-center px-3 sm:px-4 bg-slate-900/30 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.5)] group-hover:bg-slate-800/40 transition-colors duration-500">
          <span className="text-[8px] sm:text-[13px] font-medium tracking-wide uppercase text-slate-200 whitespace-nowrap">
            Sai Kiran Reddy <span className="text-slate-500 mx-1">/</span> <span className="text-[#00E5FF]/90">Software Developer</span>
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-2 text-sm font-bold text-zinc-400">
        {navItems.map(item => (
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={item.id} 
            onClick={() => handleNavClick(item.id)}
            className={`relative cursor-pointer px-4 py-2 rounded-full transition-colors z-10 flex items-center justify-center ${activeSection === item.id ? 'text-white' : 'hover:text-white'}`}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="navbar-active-indicator"
                className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            {item.label}
          </motion.div>
        ))}
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('contact')}
          className="ml-4 bg-white px-6 py-2 rounded-full text-slate-900 font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:bg-slate-100 transition-all border border-transparent"
        >
          CONTACT
        </motion.button>
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
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[80px] left-0 right-0 mx-6 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex flex-col space-y-4 lg:hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] z-40"
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
              className="mt-4 bg-white px-4 py-3 rounded-xl text-slate-900 text-center ring-1 ring-white cursor-pointer text-sm font-bold hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              HIRE ME
            </span>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}