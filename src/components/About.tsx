import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 text-gradient"
        >
          {t('about.title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground leading-relaxed"
        >
          {t('about.text')}
        </motion.p>
      </div>
    </section>
  );
}
