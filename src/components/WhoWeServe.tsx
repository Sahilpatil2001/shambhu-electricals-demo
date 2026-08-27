import { motion } from 'motion/react';
import { SectionIcon } from './SectionIcon';
import { Container } from './Container';
import { useLanguage } from '../contexts/LanguageContext';
import { Home, Building2, Factory } from 'lucide-react';

// @ts-ignore: Asset import
import resImg from '../assets/images/residential_card_1787320528400.jpg';
// @ts-ignore: Asset import
import comImg from '../assets/images/commercial_card_1787320550867.jpg';
// @ts-ignore: Asset import
import indImg from '../assets/images/industrial_card_1787320571950.jpg';

export default function WhoWeServe() {
  const { t } = useLanguage();

  const cards = [
    {
      title: t('services.serve.c1.title'),
      desc: t('services.serve.c1.desc'),
      img: resImg,
      icon: Home
    },
    {
      title: t('services.serve.c2.title'),
      desc: t('services.serve.c2.desc'),
      img: comImg,
      icon: Building2
    },
    {
      title: t('services.serve.c3.title'),
      desc: t('services.serve.c3.desc'),
      img: indImg,
      icon: Factory
    }
  ];

  return (
    <section className="w-full py-24 bg-white relative overflow-hidden z-10">
      <Container className="relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <SectionIcon className="w-6 h-6" />
              <p className="text-brand-gradient font-bold tracking-widest uppercase text-sm">
                {t('services.serve.tag')}
              </p>
            </div>
            <h2 className="text-[36px] md:text-[42px] font-bold text-neutral-900 leading-tight">
              {t('services.serve.title1')} <br /> 
              <span className="text-brand-gradient">{t('services.serve.title2')}</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-xl overflow-hidden shadow-lg group bg-neutral-900 h-[280px] sm:h-[300px] flex flex-col"
            >
              {/* Background Image & Gradient */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={card.img} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/10 via-neutral-900/60 to-neutral-900/95"></div>
              </div>

              {/* Content Box (Pushed to bottom) */}
              <div className="relative z-10 flex-grow flex flex-col justify-end p-6">
                
                {/* Heading Row with Overlapping Icon */}
                <div className="flex items-center gap-4 mb-3">
                  {/* Circular Orange Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#ff6800] text-white flex items-center justify-center shrink-0 shadow-lg relative -top-3">
                    <card.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white relative -top-1">
                    {card.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed pl-16 -mt-6">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
