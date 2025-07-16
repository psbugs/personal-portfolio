
import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header scrollToSection={scrollToSection} />

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://linkedin.com/in/praveen-sunhare-5b3341128"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/psbugs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://instagram.com/_praveen.sunhare_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-slate-400 text-sm">
            © 2025 Praveen Sunhare. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Index;
