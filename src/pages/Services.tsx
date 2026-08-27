import { Container } from '../components/Container';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import ServicesList from '../components/Services';
import WhoWeServe from '../components/WhoWeServe';
import FAQ from '../components/FAQ';
import CtaBanner from '../components/CtaBanner';

export default function Services() {
  const { t } = useLanguage();

  const servicesFaqs = [
    { question: t('services.faq.q1'), answer: t('services.faq.a1') },
    { question: t('services.faq.q2'), answer: t('services.faq.a2') },
    { question: t('services.faq.q3'), answer: t('services.faq.a3') },
    { question: t('services.faq.q4'), answer: t('services.faq.a4') },
    { question: t('services.faq.q5'), answer: t('services.faq.a5') },
    { question: t('services.faq.q6'), answer: t('services.faq.a6') },
    { question: t('services.faq.q7'), answer: t('services.faq.a7') },
    { question: t('services.faq.q8'), answer: t('services.faq.a8') },
  ];

  return (
    <>
      {/* SERVICES HERO SECTION */}
      <section className="relative bg-neutral-900 text-white py-16 sm:py-20 overflow-hidden w-full">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop"
            alt="Electrical working"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900/40"></div>
        </div>
        
        <Container className="relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-full px-4 py-1.5 text-sm font-medium text-gray-300">
              <div className="w-2 h-2 rounded-full bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)]"></div>
              {t('services.hero.tag')}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {t('services.hero.title1')}<span className="text-brand-gradient whitespace-nowrap">{t('services.hero.title2')}</span>
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {t('services.hero.desc')}
            </p>
            
            {/* Trust points / Checklist */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                </div>
                <span className="font-bold text-gray-100 tracking-wide text-[15px] group-hover:text-[#ff6800] transition-colors duration-300">{t('services.hero.trusted')}</span>
              </div>
              
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                </div>
                <span className="font-bold text-gray-100 tracking-wide text-[15px] group-hover:text-[#ff6800] transition-colors duration-300">{t('services.hero.quality')}</span>
              </div>
              
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                </div>
                <span className="font-bold text-gray-100 tracking-wide text-[15px] group-hover:text-[#ff6800] transition-colors duration-300">{t('services.hero.honest')}</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Services List Content */}
      <ServicesList />
      
      {/* Who We Serve Section */}
      <WhoWeServe />
      
      {/* FAQ Section */}
      <FAQ hideForm={true} customFaqs={servicesFaqs} />

      {/* CTA Footer Section */}
      <CtaBanner />
    </>
  );
}
