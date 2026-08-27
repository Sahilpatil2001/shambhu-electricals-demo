import { Check, Phone, Play, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionIcon } from './SectionIcon';
import { Container } from './Container';
import { motion } from 'motion/react';

export default function About() {
  const { t } = useLanguage();

  const points = [
    t('about.p1'),
    t('about.p2'),
    t('about.p3'),
    t('about.p4'),
    t('about.p5'),
    t('about.p6')
  ];

  return (
    <section className="py-24 bg-white overflow-hidden w-full">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Images */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative w-full flex justify-center py-10"
          >
            {/* Background Glow (Medium & clearly visible) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] bg-gradient-to-br from-[#ff6800] to-[#ff8a1f] opacity-35 rounded-full blur-[70px] pointer-events-none z-0"></div>

            {/* Dot Grid */}
            <svg className="absolute top-12 left-4 sm:left-10 w-44 h-44 text-[#ff6800] opacity-25 z-0 pointer-events-none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dot-pattern" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>

            {/* Technical Blueprint lines (Top Right) */}
            <div className="absolute top-2 right-8 sm:right-14 flex gap-4 opacity-20 z-0 pointer-events-none">
              <svg className="w-16 h-16 text-[#ff6800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                <circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M12 6l4 4-4 4"/>
              </svg>
              <svg className="w-16 h-16 text-[#ff6800]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
              </svg>
            </div>

            <div className="relative z-10 w-4/5 max-w-[420px]">
              <img 
                src="/images/man1.png" 
                alt="Electrician" 
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
              />
              
              {/* Top right badge */}
              <div className="absolute top-1/4 -right-8 sm:-right-16 bg-white rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] w-24 h-24 sm:w-36 sm:h-36 flex flex-col items-center justify-center gap-1 animate-float-fast z-20">
                <ShieldCheck className="w-7 h-7 sm:w-9 sm:h-9 text-[#ff6800] mb-0 sm:mb-1" strokeWidth={1.5} />
                <div className="text-center leading-tight">
                  <p className="font-bold text-[11px] sm:text-sm text-neutral-900">{t('about.cert')}</p>
                  <p className="font-semibold text-[10px] sm:text-sm text-neutral-800">{t('about.elec')}</p>
                </div>
              </div>

              {/* Bottom left image thumbnail */}
              <div className="absolute bottom-8 sm:bottom-16 -left-8 sm:-left-24 w-[160px] sm:w-[240px] rounded-[16px] sm:rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] overflow-hidden border-[4px] sm:border-[6px] border-white group cursor-pointer animate-float-fast z-20 bg-white">
                <div className="relative h-[90px] sm:h-[130px] w-full overflow-hidden rounded-[12px] sm:rounded-[18px]">
                  <img 
                    src="/images/man2.jpg" 
                    alt="Electrical work" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <SectionIcon className="w-6 h-6" />
                <p className="text-brand-gradient font-bold tracking-wider uppercase text-sm">{t('about.tag')}</p>
              </div>
              <h2 className="text-[36px] font-bold text-neutral-900 leading-tight">
                {t('about.title1')} <br /><span className="text-brand-gradient">{t('about.title2')}</span>
              </h2>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-neutral-600 text-md leading-relaxed text-center lg:text-left"
            >
              {t('about.desc')}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {points.map((point, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                  </div>
                  <span className="text-neutral-900 font-bold text-[15px] group-hover:text-[#ff6800] transition-colors duration-300">{point}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              {/* Call Us Button */}
              <a href="tel:+919370739383" className="flex sm:flex-1 items-center justify-center sm:justify-start gap-4 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-xl px-6 py-4 w-[280px] sm:w-auto cursor-pointer hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] transition-shadow">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#ff6800]" fill="currentColor" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg text-neutral-900 leading-tight">+91 93707 39383</h4>
                  <p className="text-sm text-neutral-500 font-medium">{t('about.callUs')}</p>
                </div>
              </a>

              {/* Experience Button */}
              <div className="flex sm:flex-1 items-center justify-center gap-3 bg-brand-gradient shadow-[0_8px_25px_rgba(255,104,0,0.4)] rounded-xl px-6 py-4 w-[280px] sm:w-auto text-white cursor-pointer hover:brightness-110 transition-all">
                <h4 className="text-4xl font-bold tracking-tight">10+</h4>
                <p className="text-sm font-medium leading-tight opacity-90 text-left">{t('about.years')}<br/>{t('about.exp')}</p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
