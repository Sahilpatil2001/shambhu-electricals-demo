import { Check, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { SectionIcon } from './SectionIcon';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from './Container';
import { motion } from 'motion/react';

export default function QuoteAndWhy() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(true);

  const tabs = [
    {
      id: 'mission',
      title: t('quote.tab1.title'),
      description: t('quote.tab1.desc'),
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
      points: [
        t('quote.tab1.p1'),
        t('quote.tab1.p2'),
        t('quote.tab1.p3'),
        t('quote.tab1.p4')
      ]
    },
    {
      id: 'vision',
      title: t('quote.tab2.title'),
      description: t('quote.tab2.desc'),
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop',
      points: [
        t('quote.tab2.p1'),
        t('quote.tab2.p2'),
        t('quote.tab2.p3'),
        t('quote.tab2.p4')
      ]
    },
    {
      id: 'history',
      title: t('quote.tab3.title'),
      description: t('quote.tab3.desc'),
      image: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2070&auto=format&fit=crop',
      points: [
        t('quote.tab3.p1'),
        t('quote.tab3.p2'),
        t('quote.tab3.p3'),
        t('quote.tab3.p4')
      ]
    }
  ];

  const handleTabClick = (idx: number) => {
    if (activeTab === idx) return;
    setFade(false);
    setTimeout(() => {
      setActiveTab(idx);
      setFade(true);
    }, 200);
  };

  return (
    <section className="w-full py-24 bg-white relative z-10 overflow-hidden">
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 4.5s ease-in-out infinite; animation-delay: 0.5s; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; animation-delay: 1s; }
      `}</style>
      
      <Container className="relative">
        
        {/* Left Content Area */}
        <div className="w-full lg:w-[60%] xl:w-[65%] relative z-20">
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left mb-8 flex flex-col items-center lg:items-start"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <SectionIcon className="w-6 h-6" />
                <p className="text-brand-gradient font-bold tracking-wider uppercase text-sm">{t('quote.tag')}</p>
              </div>
              <h2 className="text-[36px] sm:text-[42px] font-bold text-neutral-900 leading-tight">
                {t('quote.title1')} <br /><span className="text-brand-gradient">{t('quote.title2')}</span>
              </h2>
            </motion.div>

            {/* Tabs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 border-b border-gray-100 pb-5"
            >
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTabClick(idx)}
                  className={`px-6 sm:px-10 py-3.5 rounded-xl font-bold transition-all duration-300 ${
                    activeTab === idx
                      ? 'bg-brand-gradient shadow-[0_6px_20px_rgba(255,104,0,0.35)] text-white'
                      : 'bg-gray-50 text-neutral-500 hover:bg-orange-50 hover:text-[#ff6800] border border-gray-100'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </motion.div>

            {/* Dynamic Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`transition-all duration-300 ease-out transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} relative z-20`}
            >
              <p className="text-md text-neutral-600 leading-relaxed mb-8 max-w-lg">
                {tabs[activeTab].description}
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8">
                {/* Left: Circular Image */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[6px] border-gray-50 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex-shrink-0 group">
                  <img 
                    src={tabs[activeTab].image} 
                    alt={tabs[activeTab].title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>

                {/* Right: Checklist */}
                <div className="flex flex-col gap-4 sm:gap-4 justify-center py-1 sm:py-3">
                  {tabs[activeTab].points.map((point, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-default">
                      <div className="w-5 h-5 rounded-full bg-brand-gradient flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-all duration-300">
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={4} />
                      </div>
                      <span className="text-neutral-900 font-bold text-[15px] group-hover:text-[#ff6800] transition-colors duration-300">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
        </div>

        {/* Right: Standing Man Image (Responsive & Visible on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 lg:absolute lg:mt-0 right-0 lg:-bottom-24 w-[95%] max-w-[480px] sm:max-w-[450px] lg:max-w-none lg:w-[500px] xl:w-[620px] mx-auto pointer-events-none z-10"
        >
          
          {/* Background Orange Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-br from-[#5BA9F9] to-[#8EDBFF] opacity-35 rounded-full blur-[70px] pointer-events-none -z-10"></div>
          
          {/* Subtle Dotted Grid */}
          <div 
            className="absolute top-10 -left-10 w-48 h-48 opacity-30 -z-10"
            style={{ 
              backgroundImage: 'radial-gradient(#ff6800 2px, transparent 2px)',
              backgroundSize: '16px 16px',
              WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)',
              maskImage: 'radial-gradient(circle, black 30%, transparent 70%)'
            }}
          />

          {/* Decorative Geometric Elements */}
          <div className="absolute top-10 right-16 w-16 h-16 border-[1px] border-[#ff6800]/30 rounded-full -z-10" />
          <div className="absolute bottom-32 -right-4 w-12 h-12 border-[1px] border-[#ff6800]/30 rounded-lg rotate-12 -z-10" />

          {/* Main Electrician Container (NO floating animation on the man) */}
          <div className="relative z-10 w-full flex justify-center">
            <img 
              src="/images/man3.png" 
              alt="Professional Electrician" 
              className="w-full h-auto object-contain object-bottom drop-shadow-[0_15px_40px_rgba(0,0,0,0.15)] relative z-10 pointer-events-auto" 
            />

            {/* Floating Secondary Image (Tool) - Transparent PNG */}
            <div className="absolute bottom-16 sm:bottom-32 -left-4 sm:-left-16 w-28 sm:w-40 xl:w-56 animate-float-medium transition-all duration-350 hover:scale-[1.03] z-20 group cursor-pointer pointer-events-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]">
              <img 
                src="/images/tool-1.png" 
                alt="Electrical Tool" 
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-20 sm:top-32 -right-4 sm:right-4 xl:right-4 bg-white rounded-[14px] sm:rounded-[18px] shadow-[0_12px_35px_rgba(0,0,0,0.1)] p-3 sm:p-4 flex items-center gap-3 sm:gap-4 animate-float-fast z-20 border border-gray-100 pointer-events-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 text-[#ff6800]">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col pr-2">
                <span className="font-extrabold text-neutral-900 leading-tight text-[13px] sm:text-[15px]">{t('about.cert')}</span>
                <span className="text-neutral-500 font-medium text-[11px] sm:text-[13px]">{t('about.elec')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
