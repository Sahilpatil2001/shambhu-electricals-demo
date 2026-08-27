import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionIcon } from './SectionIcon';
import { Container } from './Container';
import { motion } from 'motion/react';

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop',
      tag: t('portfolio.p1.tag'),
      title: t('portfolio.p1.title')
    },
    {
      img: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=2070&auto=format&fit=crop',
      tag: t('portfolio.p2.tag'),
      title: t('portfolio.p2.title')
    },
    {
      img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop',
      tag: t('portfolio.p3.tag'),
      title: t('portfolio.p3.title')
    },
    {
      img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      tag: t('portfolio.p4.tag'),
      title: t('portfolio.p4.title')
    }
  ];

  return (
    <section id="gallery" className="w-full py-24 bg-[#fafafa] relative overflow-hidden z-10 text-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6800] opacity-[0.03] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff6800] opacity-[0.04] rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Dotted Grid Top Left */}
      <div
        className="absolute top-20 -left-10 w-64 h-64 opacity-30 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#ff6800 2px, transparent 2px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
        }}
      />

      {/* Dotted Grid Bottom Right */}
      <div
        className="absolute bottom-10 -right-10 w-64 h-64 opacity-30 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#ff6800 2px, transparent 2px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
        }}
      />

      <Container className="relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <SectionIcon className="w-6 h-6" />
            <p className="text-brand-gradient font-bold tracking-wider uppercase text-sm">{t('portfolio.tag')}</p>
          </div>
          <h2 className="text-[36px] font-bold text-neutral-900">
            {t('portfolio.title1')} <br /><span className="text-brand-gradient">{t('portfolio.title2')}</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 mb-12 text-left">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-3.5 rounded-[24px] border border-gray-100 group cursor-pointer shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
            >
              <div className="relative rounded-[16px] overflow-hidden mb-4 aspect-video">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="px-2 pb-1 flex-grow flex flex-col">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-orange-50 text-[#ff6800] text-xs font-bold rounded-[6px]">
                    {project.tag}
                  </span>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                    {project.title}
                  </h3>
                  <div className="w-11 h-11 rounded-full bg-brand-gradient flex items-center justify-center text-white shadow-[0_4px_15px_rgba(255,104,0,0.35)] group-hover:shadow-[0_6px_20px_rgba(255,104,0,0.5)] transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-5 h-5 transform transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-brand-gradient shadow-[0_8px_25px_rgba(255,104,0,0.4)] hover:brightness-110 transition-all text-white px-8 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2">
            {t('portfolio.viewMore')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </Container>
    </section>
  );
}
