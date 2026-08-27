import { CalendarDays, Briefcase, Users, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { Container } from './Container';

function AnimatedStat({ value, className }: { value: string, className: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [displayValue, setDisplayValue] = useState(() => {
    const match = value.match(/^(\d+)(.*)$/);
    return match ? `0${match[2]}` : value;
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;

    const target = parseInt(match[1], 10);
    const suffix = match[2];

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          if (prefersReducedMotion) {
            setDisplayValue(value);
            return;
          }

          const duration = 2000;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const t = Math.min(progress / duration, 1);
            
            // easeOutQuart
            const easeOut = 1 - Math.pow(1 - t, 4);
            const current = Math.floor(target * easeOut);
            
            setDisplayValue(`${current}${suffix}`);

            if (t < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };
          
          requestAnimationFrame(animate);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return <h4 ref={ref} className={className}>{displayValue}</h4>;
}

export default function StatsBanner() {
  const { t } = useLanguage();

  const stats = [
    { icon: CalendarDays, value: '10+', label: t('hero.yearsExp') },
    { icon: Briefcase, value: '850+', label: t('hero.projectsDone') },
    { icon: Users, value: '500+', label: t('hero.happyCustomers') },
    { icon: HeadphonesIcon, value: '24/7', label: t('hero.support') },
  ];

  return (
    <section className="w-full bg-gray-50 relative z-20 border-y border-gray-100">
      <Container className="py-12 lg:py-16">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-20">
          {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-5 min-w-[200px]">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100 flex-shrink-0">
              <stat.icon className="w-7 h-7 text-[#ff6800]" />
            </div>
            <div>
              <AnimatedStat value={stat.value} className="text-[36px] leading-tight font-bold text-neutral-900 mb-1" />
              <p className="text-sm font-medium text-neutral-600">{stat.label}</p>
            </div>
          </div>
        ))}
        </div>
      </Container>
    </section>
  );
}
