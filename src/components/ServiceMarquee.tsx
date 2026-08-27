import { Zap, Building2, Home, Factory, Plug, Lightbulb, Wrench, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ServiceMarquee() {
  const { t } = useLanguage();

  const marqueeItems = [
    { icon: Home, text: t('marquee.s1') },
    { icon: Building2, text: t('marquee.s2') },
    { icon: Factory, text: t('marquee.s3') },
    { icon: Plug, text: t('marquee.s4') },
    { icon: Zap, text: t('marquee.s5') },
    { icon: Wrench, text: t('marquee.s6') },
    { icon: ShieldAlert, text: t('marquee.s7') },
    { icon: Lightbulb, text: t('marquee.s8') },
  ];

  const ItemList = () => (
    <>
      {marqueeItems.map((item, idx) => (
        <div key={idx} className="flex items-center shrink-0">
          <item.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-white" strokeWidth={2.5} />
          <span className="text-white font-bold text-[14px] sm:text-[16px] tracking-wide ml-3 sm:ml-4">
            {item.text}
          </span>
          <span className="text-white/40 text-xl mx-8 sm:mx-14">•</span>
        </div>
      ))}
    </>
  );

  return (
    <section className="w-full bg-brand-gradient overflow-hidden py-4 sm:py-5 flex group relative z-20">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* 
        We use two identical animated blocks.
        As the first translates left -100%, the second perfectly follows it.
      */}
      <div className="flex items-center animate-marquee shrink-0">
        <ItemList />
      </div>
      <div className="flex items-center animate-marquee shrink-0" aria-hidden="true">
        <ItemList />
      </div>
    </section>
  );
}
