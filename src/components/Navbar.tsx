import { motion } from 'motion/react';

const navItems = [
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'WORKS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'resume', label: 'RESUME' }
];

export function Navbar({ activeSection, setActiveSection }: any) {
  return (
    <header className="flex justify-between items-center px-6 py-6 z-50 no-print flex-shrink-0 w-full max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 cursor-pointer group" onClick={() => setActiveSection('hero')}>
        <div className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 font-bold text-xl italic font-serif shadow-lg group-hover:bg-white transition-all duration-300">SK</div>
        <div className="hidden sm:flex items-center px-4 py-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:bg-slate-800/50 transition-colors duration-300">
          <span className="text-sm md:text-[15px] font-medium tracking-wide uppercase text-slate-200">
            Sai Kiran Reddy <span className="text-slate-500 mx-2">/</span> <span className="text-[#00E5FF]/90">Software Developer</span>
          </span>
        </div>
      </div>
      <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-zinc-400">
        {navItems.map(item => (
          <span 
            key={item.id} 
            onClick={() => setActiveSection(item.id)}
            className={`cursor-pointer transition-all hover:text-white hover:tracking-wide ${activeSection === item.id ? 'text-white border-b-2 border-white pb-0.5' : ''}`}
          >
            {item.label}
          </span>
        ))}
        <span 
          onClick={() => setActiveSection('contact')}
          className="bg-zinc-800 px-4 py-1.5 rounded-full text-white ring-1 ring-zinc-700 cursor-pointer hover:bg-zinc-700 transition-colors"
        >
          CONTACT
        </span>
      </nav>
      {/* Mobile nav placeholder -> directly link buttons */}
      <nav className="flex lg:hidden items-center space-x-4 text-xs font-medium text-zinc-400">
        {navItems.slice(0, 2).map(item => (
            <span key={item.id} onClick={() => setActiveSection(item.id)} className={`cursor-pointer ${activeSection === item.id ? 'text-white' : ''}`}>{item.label}</span>
        ))}
        <span onClick={() => setActiveSection('contact')} className="bg-zinc-800 px-3 py-1 rounded-full text-white ring-1 ring-zinc-700 cursor-pointer">HIRE ME</span>
      </nav>
    </header>
  );
}
