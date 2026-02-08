import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';
import portfolio6 from '@/assets/portfolio-6.jpg';

const projects = [
  { img: portfolio1, en: 'FinTech Dashboard', fa: 'داشبورد مالی' },
  { img: portfolio2, en: 'E-Commerce App', fa: 'اپلیکیشن فروشگاهی' },
  { img: portfolio3, en: 'Healthcare Platform', fa: 'پلتفرم سلامت' },
  { img: portfolio4, en: 'Analytics Suite', fa: 'مجموعه تحلیلی' },
  { img: portfolio5, en: 'Real Estate App', fa: 'اپلیکیشن املاک' },
  { img: portfolio6, en: 'EdTech Platform', fa: 'پلتفرم آموزشی' },
];

export function Portfolio() {
  const { t, language } = useLanguage();

  return (
    <section id="portfolio" className="py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          {t('portfolio.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.img}
                  alt={language === 'fa' ? project.fa : project.en}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {language === 'fa' ? project.fa : project.en}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
