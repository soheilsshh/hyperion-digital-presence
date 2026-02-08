import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40 dark:opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orb */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/20 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gradient mb-6 font-en">
            HYPERION
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${language === 'fa' ? 'font-fa' : 'font-en'}`}
        >
          {t('hero.slogan')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 glow"
          >
            {t('nav.portfolio')}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-all duration-300"
          >
            {t('nav.contact')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
