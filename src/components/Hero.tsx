import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { t } = useTranslation();

  const titles = [
    t('hero_title_1'),
    t('hero_title_2'),
    t('hero_title_3'),
    t('hero_title_4')
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-20 pb-8 bg-white dark:bg-slate-800/30 transition-colors duration-500">
      <div className="text-center max-w-4xl mx-auto w-full">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 animate-fade-in leading-tight">
            {t('hero_greeting')}{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Praveen Sunhare
            </span>
          </h1>

          <div className="h-16 sm:h-20 flex items-center justify-center">
            <h2 className="text-lg sm:text-2xl md:text-4xl text-slate-700 dark:text-slate-300 font-light">
              {displayText}
              <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
            </h2>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          {t('hero_description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
          >
            {t('hero_view_work')}
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            {t('hero_get_in_touch')}
          </button>
        </div>

        {/* Floating Animation Background Circles */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-5 sm:left-10 w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/10 dark:bg-blue-400/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 sm:top-40 right-5 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/10 dark:bg-purple-400/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-10 sm:left-20 w-12 sm:w-16 h-12 sm:h-16 bg-blue-400/10 dark:bg-blue-300/10 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
