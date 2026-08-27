import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionIcon } from './SectionIcon';
import { useState, useEffect, useRef } from 'react';
import { Container } from './Container';
import { motion } from 'motion/react';

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const reviews = [
    {
      name: 'Rahul Patil',
      location: 'Kolhapur',
      text: t('test.r1'),
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
    },
    {
      name: 'Snehal Jadhav',
      location: 'Panhala',
      text: t('test.r2'),
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'Amol Desai',
      location: 'Kolhapur',
      text: t('test.r3'),
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      name: 'Priya Sharma',
      location: 'Pune',
      text: t('test.r4'),
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
    {
      name: 'Vikram Singh',
      location: 'Satara',
      text: t('test.r5'),
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
    },
    {
      name: 'Rohan Joshi',
      location: 'Mumbai',
      text: t('test.r6'),
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    }
  ];

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 cards
      } else {
        setItemsPerView(3); // Desktop: 3 cards
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  // Prevent out of bounds on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (idx: number) => {
    setCurrentIndex(Math.min(idx, maxIndex));
  };

  // Autoplay handler
  useEffect(() => {
    if (isPaused || isDragging) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }
    
    autoplayTimerRef.current = setInterval(() => {
      handleNext();
    }, 5500);
    
    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isPaused, isDragging, maxIndex]);

  return (
    <section id="testimonials" className="w-full py-24 bg-[#050B14] relative overflow-hidden z-10 font-sans select-none">
      
      {/* SVG Defs for Star Gradient */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#FF6800" offset="0%" />
            <stop stopColor="#FF8A1F" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      {/* Atmospheric Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(11,21,35,0.7)_0%,transparent_80%)] pointer-events-none -z-10"></div>
      
      {/* Subtle orange/navy ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[radial-gradient(circle,rgba(255,104,0,0.03)_0%,transparent_60%)] pointer-events-none -z-10 blur-3xl"></div>

      <Container className="relative z-20">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          {/* Top Label */}
          <div className="flex items-center gap-2 mb-4">
            <SectionIcon className="w-5 h-5" />
            <p className="text-brand-gradient font-bold tracking-wider uppercase text-[13px] md:text-[14px]">
              {t('test.tag')}
            </p>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold text-white leading-[1.2]">
            {t('test.t1')} <span className="text-brand-gradient">{t('test.t2')}</span> {t('test.t3')}
          </h2>
        </motion.div>

        {/* Carousel Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group/carousel mx-auto w-full max-w-6xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute top-1/2 -left-5 lg:-left-12 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-[#FFFFFF]/10 hover:border-[#FF6800] hover:scale-105 group/arrow z-30 focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 text-white/70 group-hover/arrow:text-[#FF6800] transition-colors" />
          </button>

          <button 
            onClick={handleNext}
            aria-label="Next testimonial"
            className="hidden md:flex absolute top-1/2 -right-5 lg:-right-12 -translate-y-1/2 w-[44px] h-[44px] rounded-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/15 items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-[#FFFFFF]/10 hover:border-[#FF6800] hover:scale-105 group/arrow z-30 focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 text-white/70 group-hover/arrow:text-[#FF6800] transition-colors" />
          </button>
          
          {/* Track Window (Overflow Hidden) */}
          <div className="overflow-hidden px-1 py-4">
            <motion.div 
              className="flex cursor-grab active:cursor-grabbing"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(_, info) => {
                setIsDragging(false);
                const swipeThreshold = 35;
                if (info.offset.x < -swipeThreshold) {
                  handleNext();
                } else if (info.offset.x > swipeThreshold) {
                  handlePrev();
                }
              }}
            >
              {reviews.map((review, idx) => (
                <div 
                  key={idx} 
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-[#0D1827] border border-white/[0.12] rounded-[18px] sm:rounded-[20px] p-6 sm:p-7 h-full flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-white/[0.22] hover:shadow-[0_12px_40px_rgba(255,104,0,0.08)] cursor-grab active:cursor-grabbing">
                    
                    {/* Background Quote Watermark */}
                    <Quote className="absolute top-5 right-5 sm:top-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 text-white/[0.05] pointer-events-none" strokeWidth={1.5} />
                    
                    <div>
                      {/* Star Rating */}
                      <div className="flex gap-[4px] mb-4 relative z-10">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-[17px] h-[17px]" fill="url(#star-gradient)" stroke="url(#star-gradient)" strokeWidth={1} />
                        ))}
                      </div>

                      {/* Testimonial Quote Text */}
                      <p className="text-[#F5F7FA] text-[15px] sm:text-[15.5px] leading-[1.65] font-normal mb-6 relative z-10 text-left">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Customer Information (Avatar, Name, Location) */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-white/[0.08] relative z-10 mt-auto">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        draggable={false}
                        className="w-[48px] h-[48px] rounded-full object-cover border-2 border-[#FF6800]/40 shadow-sm shrink-0" 
                      />
                      <div className="text-left min-w-0">
                        <h4 className="text-white font-bold text-[15px] leading-tight mb-0.5 truncate">{review.name}</h4>
                        <p className="text-[#AAB3C0] text-[12px] sm:text-[13px] flex items-center gap-1.5 font-medium truncate">
                          <span>{review.location}</span>
                          <span className="w-1 h-1 rounded-full bg-[#FF6800] shrink-0"></span>
                          <span className="text-[#FF6800]/90 text-[11px] uppercase tracking-wider font-semibold shrink-0">Verified</span>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === idx 
                  ? 'w-[26px] h-[8px] bg-brand-gradient shadow-[0_0_10px_rgba(255,104,0,0.6)]' 
                  : 'w-[8px] h-[8px] bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}
