import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Language = 'en' | 'fa';

interface Translations {
  [key: string]: { en: string; fa: string };
}

const translations: Translations = {
  'hero.slogan': {
    en: 'We build the digital future, today.',
    fa: 'ما آینده دیجیتال را امروز می‌سازیم.',
  },
  'about.title': { en: 'About Us', fa: 'درباره ما' },
  'about.text': {
    en: "Hyperion is a collective of visionary developers and designers dedicated to transforming complex ideas into seamless digital experiences. We don't just build websites; we craft digital identities that scale.",
    fa: 'هایپریون مجموعه‌ای از توسعه‌دهندگان و طراحان خلاق است که برای تبدیل ایده‌های پیچیده به تجربه‌های دیجیتال بی‌نقص تلاش می‌کنند. ما فقط سایت نمی‌سازیم؛ ما هویت دیجیتال شما را برای رشد و مقیاس‌پذیری طراحی می‌کنیم.',
  },
  'services.title': { en: 'Our Services', fa: 'خدمات ما' },
  'services.web.title': { en: 'Web Development', fa: 'توسعه وب' },
  'services.web.desc': { en: 'High-performance, scalable web applications built with modern frameworks.', fa: 'اپلیکیشن‌های وب با کارایی بالا و مقیاس‌پذیر با فریم‌ورک‌های مدرن.' },
  'services.design.title': { en: 'UI/UX Design', fa: 'طراحی رابط کاربری' },
  'services.design.desc': { en: 'Intuitive interfaces that delight users and drive engagement.', fa: 'رابط‌های کاربری بصری که کاربران را خوشحال و درگیر می‌کند.' },
  'services.mobile.title': { en: 'Mobile Apps', fa: 'اپلیکیشن موبایل' },
  'services.mobile.desc': { en: 'Cross-platform mobile experiences that feel native and perform flawlessly.', fa: 'تجربه‌های موبایل چند سکویی با حس بومی و عملکرد بی‌نقص.' },
  'services.cloud.title': { en: 'Cloud Solutions', fa: 'راهکارهای ابری' },
  'services.cloud.desc': { en: 'Scalable cloud architecture designed for reliability and growth.', fa: 'معماری ابری مقیاس‌پذیر برای اطمینان و رشد پایدار.' },
  'services.ai.title': { en: 'AI Integration', fa: 'هوش مصنوعی' },
  'services.ai.desc': { en: 'Intelligent automation and machine learning solutions for your business.', fa: 'اتوماسیون هوشمند و راهکارهای یادگیری ماشین برای کسب‌وکار شما.' },
  'services.consulting.title': { en: 'Tech Consulting', fa: 'مشاوره فناوری' },
  'services.consulting.desc': { en: 'Strategic guidance to navigate your digital transformation journey.', fa: 'راهنمایی استراتژیک برای مسیر تحول دیجیتال شما.' },
  'portfolio.title': { en: 'Our Work', fa: 'نمونه کارها' },
  'contact.title': { en: 'Get In Touch', fa: 'تماس با ما' },
  'contact.name': { en: 'Your Name', fa: 'نام شما' },
  'contact.email': { en: 'Your Email', fa: 'ایمیل شما' },
  'contact.message': { en: 'Your Message', fa: 'پیام شما' },
  'contact.send': { en: 'Send Message', fa: 'ارسال پیام' },
  'nav.services': { en: 'Services', fa: 'خدمات' },
  'nav.portfolio': { en: 'Portfolio', fa: 'نمونه‌کارها' },
  'nav.about': { en: 'About', fa: 'درباره ما' },
  'nav.contact': { en: 'Contact', fa: 'تماس' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback(
    (key: string) => translations[key]?.[language] || key,
    [language]
  );

  const dir = language === 'fa' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
