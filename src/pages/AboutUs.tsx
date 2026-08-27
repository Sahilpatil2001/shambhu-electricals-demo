import { Container } from '../components/Container';
import { SectionIcon } from '../components/SectionIcon';
import CtaBanner from '../components/CtaBanner';
import ServiceMarquee from '../components/ServiceMarquee';
import MeetFounder from '../components/MeetFounder';
import { Check, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

// @ts-ignore: Asset import
import electricianLarge from '../assets/images/electrician_large_circle_1787268120847.jpg';
// @ts-ignore: Asset import
import electricianSmall from '../assets/images/electrician_small_circle_1787268137202.jpg';

export default function AboutUs() {
  const { t } = useLanguage();

  return (
    <>
      {/* 1. ABOUT HERO SECTION */}
      <section className="relative bg-neutral-900 text-white py-16 sm:py-20 overflow-hidden w-full">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
            alt="Electrician working"
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
              {t('about.hero.tag')}
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              {t('about.hero.title1')}<span className="text-brand-gradient whitespace-nowrap">{t('about.hero.title2')}</span>
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              {t('about.hero.desc')}
            </p>
            
            {/* Trust points */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                </div>
                <span className="font-bold text-gray-100 tracking-wide text-[15px] group-hover:text-[#ff6800] transition-colors duration-300">{t('about.hero.trusted')}</span>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                </div>
                <span className="font-bold text-gray-100 tracking-wide text-[15px] group-hover:text-[#ff6800] transition-colors duration-300">{t('about.hero.quality')}</span>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                </div>
                <span className="font-bold text-gray-100 tracking-wide text-[15px] group-hover:text-[#ff6800] transition-colors duration-300">{t('about.hero.honest')}</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* MEET FOUNDER SECTION */}
      <MeetFounder />

      {/* SERVICE MARQUEE SECTION */}
      <ServiceMarquee />

      {/* 2. WHO WE ARE SECTION */}
      <section className="py-24 bg-white overflow-hidden w-full relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Dual Image Composition */}
            <div className="w-full relative flex justify-center py-10 lg:py-0">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative w-full max-w-[500px] aspect-[4/5] mx-auto"
              >
                {/* Uploaded Orange Brush Stroke Background */}
                <div className="absolute top-[50%] left-[42%] -translate-x-1/2 -translate-y-1/2 w-[110%] h-[100%] z-0 pointer-events-none flex items-center justify-center">
                  <img 
                    src="/images/who-we-are-shape.png" 
                    alt="Orange Brush Stroke" 
                    className="w-full h-full object-contain opacity-100"
                  />
                </div>
                
                {/* Background Electrical Illustration */}
                <svg className="absolute bottom-[-5%] left-[-15%] w-[80%] h-[80%] text-neutral-400 opacity-20 z-0 pointer-events-none" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M50,200 L40,100 L10,100 L45,20 M50,200 L60,100 L90,100 L55,20 M15,100 L85,100 M25,75 L75,75 M35,50 L65,50 M40,30 L60,30 M15,100 L85,50 M85,100 L15,50 M45,20 L55,20 M40,30 L50,50 M60,30 L50,50 M50,50 L50,200" />
                  <path d="M0,80 Q50,110 100,70 M0,60 Q50,90 100,50 M0,40 Q50,70 100,30 M-20,110 Q50,140 120,100" strokeWidth="0.2" />
                  <g transform="translate(80, 50) scale(0.6)">
                    <path d="M50,200 L40,100 L10,100 L45,20 M50,200 L60,100 L90,100 L55,20 M15,100 L85,100 M25,75 L75,75 M35,50 L65,50 M40,30 L60,30 M15,100 L85,50 M85,100 L15,50 M45,20 L55,20 M40,30 L50,50 M60,30 L50,50 M50,50 L50,200" />
                    <path d="M0,80 Q50,110 100,70 M0,60 Q50,90 100,50 M0,40 Q50,70 100,30" strokeWidth="0.2" />
                  </g>
                </svg>

                {/* Back Image (Left) - Male Electrician */}
                <div className="absolute top-[0%] left-[0%] w-[47%] h-[72%] z-10 bg-neutral-100 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.1)] overflow-hidden">
                  <img 
                    src="/about-images/ser-6.webp" 
                    alt="Male electrician working on panel" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Front Image (Right) - Female Engineer */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute top-[20%] right-[0%] w-[47%] h-[72%] z-20 rounded-md shadow-[0_20px_40px_rgba(0,0,0,0.25)] overflow-hidden"
                >
                  <img 
                    src="/about-images/ser-7.webp" 
                    alt="Female electrical engineer" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* 30+ Years Experience Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute top-[40%] sm:top-[42%] left-[8%] sm:left-[12%] z-30 w-[180px] h-[105px] xs:w-[210px] xs:h-[122px] sm:w-[260px] sm:h-[150px]"
                >
                  {/* SVG Speech Bubble Background */}
                  <svg viewBox="0 0 260 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 w-full h-full drop-shadow-[0_15px_30px_rgba(255,104,0,0.3)] z-0">
                    <path d="M12 4 H248 C252.4 4 256 7.6 256 12 V118 C256 122.4 252.4 126 248 126 H95 L50 146 L65 126 H12 C7.6 126 4 122.4 4 118 V12 C4 7.6 7.6 4 12 4 Z" fill="#ff6800" stroke="white" strokeWidth="6" strokeLinejoin="round"/>
                  </svg>
                  
                  {/* Badge Text Content */}
                  <div className="relative z-10 w-full h-[84%] flex flex-col justify-center items-center text-center text-white px-3 sm:px-6">
                    <h3 className="text-[34px] xs:text-[40px] sm:text-[50px] font-extrabold leading-none mb-0.5 sm:mb-1 tracking-tight">{t('about.who.years')}</h3>
                    <p className="text-[12px] xs:text-[14px] sm:text-[16px] font-semibold leading-tight">{t('about.who.exp')}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Content */}
            <div className="w-full space-y-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start"
              >
                <div className="flex items-center gap-2 mb-3">
                  <SectionIcon className="w-5 h-5" />
                  <p className="text-brand-gradient font-bold tracking-widest uppercase text-sm">{t('about.who.tag')}</p>
                </div>
                <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold text-neutral-900 leading-[1.1]">
                  {t('about.who.title1')}<span className="text-brand-gradient">{t('about.who.title2')}</span> .
                </h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 text-neutral-600 text-[17px] leading-relaxed"
              >
                <p>
                  {t('about.who.desc1')}
                </p>
                <p>
                  {t('about.who.desc2')}
                </p>
              </motion.div>

              {/* Vertical Checklist */}
              <div className="flex flex-col gap-5 pt-4">
                {[
                  {
                    title: t('about.who.r1.title'),
                    desc: t('about.who.r1.desc')
                  },
                  {
                    title: t('about.who.r2.title'),
                    desc: t('about.who.r2.desc')
                  },
                  {
                    title: t('about.who.r3.title'),
                    desc: t('about.who.r3.desc')
                  },
                  {
                    title: t('about.who.r4.title'),
                    desc: t('about.who.r4.desc')
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-all duration-300">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-[15px] group-hover:text-[#ff6800] transition-colors duration-300 leading-tight mb-1.5">{item.title}</h4>
                      <p className="text-neutral-600 text-[15px] leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-6"
              >
                <a href="#contact" className="inline-flex items-center gap-2 btn-brand text-white px-8 py-3.5 font-bold text-[15px] tracking-wide rounded-xl">
                  {t('about.who.btn')}
                </a>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHY CHOOSE SECTION */}
      <section className="pb-24 bg-white overflow-hidden relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Content */}
            <div className="w-full space-y-8 order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <SectionIcon className="w-5 h-5" />
                  <p className="text-brand-gradient font-bold tracking-widest uppercase text-sm">{t('about.why.tag')}</p>
                </div>
                <h2 className="text-[36px] font-bold text-neutral-900 leading-tight mb-8">
                  {t('about.why.title1')}<br />
                  <span className="text-brand-gradient">{t('about.why.title2')}</span>
                </h2>
              </motion.div>

              <div className="flex flex-col gap-6">
                {[
                  {
                    title: t('about.who.r1.title'),
                    desc: t('about.who.r1.desc')
                  },
                  {
                    title: t('about.who.r2.title'),
                    desc: t('about.who.r2.desc')
                  },
                  {
                    title: t('about.who.r3.title'),
                    desc: t('about.who.r3.desc')
                  },
                  {
                    title: t('about.who.r4.title'),
                    desc: t('about.who.r4.desc')
                  },
                  {
                    title: t('about.why.r5.title'),
                    desc: t('about.why.r5.desc')
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-all duration-300">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-[15px] group-hover:text-[#ff6800] transition-colors duration-300 leading-tight mb-1.5">{item.title}</h4>
                      <p className="text-neutral-600 text-[15px] leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full relative flex justify-center order-1 lg:order-2 pt-6 pb-12 lg:py-0"
            >
               <div className="relative z-10 flex justify-center items-center">
                {/* Main Large Circle */}
                <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                  <img 
                    src={electricianLarge}
                    alt="Professional Electrician" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Small Overlapping Circle */}
                <div className="absolute -bottom-[5%] -right-[5%] sm:-bottom-[2%] sm:-right-[8%] lg:-bottom-[2%] lg:-right-[10%] w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] lg:w-[190px] lg:h-[190px] rounded-full overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] border-[6px] sm:border-[8px] border-white z-10">
                  <img 
                    src={electricianSmall}
                    alt="Electrical wiring work" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-4 sm:-bottom-4 sm:-left-12 lg:bottom-10 lg:-left-16 bg-white rounded-[16px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] p-4 sm:p-5 flex items-center gap-4 animate-float-fast z-20">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#ff6800]">
                    <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col pr-4">
                    <span className="font-bold text-neutral-900 text-lg leading-tight">{t('about.why.badge.title')}</span>
                    <span className="text-neutral-500 font-medium text-sm">{t('about.why.badge.desc')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* 4. SMALL CTA SECTION */}
      <CtaBanner />
    </>
  );
}
