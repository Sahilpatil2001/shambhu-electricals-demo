import { Phone, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Container } from './Container';

export default function CtaBanner() {
  const { t } = useLanguage();

  return (
    <section className="bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)] w-full relative z-20 mt-auto">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 relative">
               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
                 <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff6800] fill-[#ff6800]" />
               </div>
            </div>
            <div className="max-w-xl">
              <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold text-white mb-2 whitespace-pre-line leading-tight">
                {t('cta.title')}
              </h2>
              <p className="text-orange-100 font-medium text-base sm:text-lg mt-2">
                {t('cta.desc')}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2 lg:mt-0 shrink-0">
            <a href="tel:+919370739383" className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
              {t('hero.callNow')}
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://wa.me/919370739383" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-neutral-900 px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 shadow-lg">
              {t('hero.freeQuote')}
              <WhatsAppIcon className="w-5 h-5" gradient={false} />
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}
