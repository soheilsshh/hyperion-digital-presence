import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/hooks/use-theme';
import { motion } from 'framer-motion';
import { Sun, Moon, Globe } from 'lucide-react';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggle } = useTheme();

  const navItems = ['services', 'portfolio', 'about', 'contact'];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold tracking-tight text-gradient font-en">
          HYPERION
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {t(`nav.${item}`)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors glass"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span className="font-en">{language === 'en' ? 'FA' : 'EN'}</span>
          </button>

          <button
            onClick={toggle}
            className="rounded-lg p-2 text-muted-foreground hover:text-primary transition-colors glass"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
