import { useEffect, useState } from 'react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Apply theme on load and when toggled
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleResumeClick = () => {
    window.open('/assets/files/resume.pdf', '_blank');
  };

  return (
    <header className="fixed top-0 w-full bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-300 dark:border-slate-700/50 z-40 transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-lg">
              PS
            </div>
            <span className="text-slate-800 dark:text-white font-semibold text-xl">Praveen Sunhare</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('projects')} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Projects</button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</button>
            <button onClick={handleResumeClick} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">Resume</button>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-slate-700 dark:text-slate-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300"
              title="Toggle theme"
            >
              {isDarkMode ? '🌙 Dark' : '☀️ Light'}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-800 dark:text-white"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-300 dark:border-slate-700/50 pt-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-left">Projects</button>
              <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-left">About</button>
              <button onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-left">Contact</button>
              <button onClick={handleResumeClick} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-left w-fit">Resume</button>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-slate-700 dark:text-slate-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300 text-left"
              >
                {isDarkMode ? '🌙 Dark' : '☀️ Light'}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
