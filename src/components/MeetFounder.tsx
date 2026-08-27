import { motion } from 'motion/react';
import { Quote, User } from 'lucide-react';
import { Container } from './Container';
import { SectionIcon } from './SectionIcon';
import { useLanguage } from '../contexts/LanguageContext';

// @ts-ignore: Asset import
import founderPortrait from '../assets/images/founder_portrait_1787212217683.jpg';

export default function MeetFounder() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 lg:py-32 bg-[#fafafa] relative overflow-hidden z-10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <SectionIcon className="w-5 h-5" />
                <p className="text-brand-gradient font-bold tracking-widest uppercase text-sm">{t('about.founder.tag')}</p>
              </div>

              {/* Heading */}
              <h2 className="text-[40px] md:text-[52px] font-bold text-neutral-900 leading-[1.1] mb-8">
                {t('about.founder.title1')}<br />
                <span className="text-[#ff6800]">{t('about.founder.title2')} {t('about.founder.title3')}</span>
              </h2>
              
              <div className="w-20 h-1 bg-brand-gradient rounded-full mb-8"></div>

              {/* Description */}
              <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mb-10">
                {t('about.founder.desc')}
              </p>

              {/* Quote Block */}
              <div className="relative pl-8 py-2 mb-12">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#ff6800]"></div>
                <Quote className="absolute -top-3 -left-4 w-10 h-10 text-[#ff6800] bg-[#fafafa] fill-[#ff6800]/10" strokeWidth={1.5} />
                <p className="text-[22px] md:text-[24px] font-medium italic text-neutral-800 leading-snug pt-2">
                  {t('about.founder.quote')}
                </p>
              </div>

              {/* Founder Info Row */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full border-[2.5px] border-[#ff6800] flex items-center justify-center bg-white text-[#ff6800] shadow-[0_4px_15px_rgba(255,104,0,0.2)]">
                  <User className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-neutral-900 leading-tight mb-1">{t('about.founder.name')}</h4>
                  <p className="text-[15px] font-medium text-neutral-500">{t('about.founder.role')}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Founder Image */}
          <div className="w-full relative mt-10 lg:mt-0 flex justify-center py-10 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-[70%] sm:w-[65%] lg:w-full lg:max-w-[420px] mx-auto lg:mx-0"
            >
              {/* Subtle orange blob behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#ff6800] to-[#ff8a1f] opacity-[0.06] rounded-full blur-[60px] -z-10 pointer-events-none"></div>

              {/* Decorative Dots */}
              <svg className="absolute -top-10 -right-8 w-32 h-32 text-[#ff6800] opacity-20 -z-10 pointer-events-none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dot-pattern-founder" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-pattern-founder)" />
              </svg>

              {/* Left angled orange shape */}
              <div 
                className="absolute top-[12%] -left-[8%] sm:-left-[10%] w-[40%] h-[83%] bg-[#ff6800] -z-10 pointer-events-none"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 25% 100%)' }}
              ></div>

              {/* Right vertical orange line */}
              <div className="absolute top-[5%] -right-[4%] sm:-right-[6%] w-[3px] sm:w-[4px] h-[180px] sm:h-[270px] bg-[#ff6800] -z-10 pointer-events-none rounded-full"></div>

              {/* Image Container */}
              <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)] bg-white border border-white/50">
                <img 
                  src={founderPortrait} 
                  alt="Founder of Shambhu Electricals" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-[#ff6800] text-white px-6 py-3.5 rounded-full flex items-center gap-3 shadow-[0_15px_30px_rgba(255,104,0,0.3)] border-[5px] border-[#fafafa]"
              >
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="text-[15px] font-bold tracking-widest uppercase">{t('about.founder.badge')}</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
