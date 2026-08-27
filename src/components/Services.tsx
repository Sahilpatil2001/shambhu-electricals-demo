import { ArrowUpRight, ChevronDown, PenTool, Cpu, Fan, Lightbulb, ShieldCheck, Plug } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionIcon } from './SectionIcon';
import { Container } from './Container';
import { motion } from 'motion/react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: PenTool,
      title: t('services.s1.title'),
      description: t('services.s1.desc'),
      image: '/images/ser-1.jpg',
    },
    {
      icon: Cpu,
      title: t('services.s2.title'),
      description: t('services.s2.desc'),
      image: '/images/ser-2.jpg',
    },
    {
      icon: Fan,
      title: t('services.s3.title'),
      description: t('services.s3.desc'),
      image: '/images/ser-3.jpg',
    },
    {
      icon: Lightbulb,
      title: t('services.s4.title'),
      description: t('services.s4.desc'),
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=2070&auto=format&fit=crop',
    },
    {
      icon: ShieldCheck,
      title: t('services.s5.title'),
      description: t('services.s5.desc'),
      image: '/images/ser-4.jpg',
    },
    {
      icon: Plug,
      title: t('services.s6.title'),
      description: t('services.s6.desc'),
      image: 'https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=2069&auto=format&fit=crop',
    },
  ];

  return (
    <section id="services" className="w-full py-24 bg-[#fafafa] relative overflow-hidden z-10">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#ff6800] opacity-[0.03] rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#ff6800] opacity-[0.04] rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Dotted Grid Top Right */}
      <div
        className="absolute top-20 -right-10 w-64 h-64 opacity-30 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(#ff6800 2px, transparent 2px)",
          backgroundSize: "16px 16px",
          maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
        }}
      />

      {/* Dotted Grid Bottom Left */}
      <div
        className="absolute bottom-10 -left-10 w-64 h-64 opacity-30 pointer-events-none -z-10"
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <SectionIcon className="w-6 h-6" />
            <p className="text-brand-gradient font-bold tracking-widest uppercase text-sm">{t('services.tag')}</p>
          </div>
          <h2 className="text-[36px] font-bold text-neutral-900 leading-tight">
            {t('services.title1')} <br /> <span className="text-brand-gradient">{t('services.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-gray-100 bg-white rounded-xl overflow-hidden group cursor-pointer flex flex-col hover:shadow-2xl transition-all duration-300"
            >
              {/* Top Image & Sidebar */}
              <div className="flex h-64 shrink-0 w-full overflow-hidden">
                <div className="flex-1 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="w-12 bg-neutral-900 md:bg-gray-50 flex flex-col items-center justify-center py-6 border-l border-neutral-800 md:border-gray-100 relative overflow-hidden">
                  <div className="hidden md:block absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-4 transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white md:text-neutral-900 group-hover:text-white transition-colors duration-300">{t('services.readMore')}</span>
                  </div>
                  <ArrowUpRight className="relative z-10 w-4 h-4 text-[#ff6800] mt-4 transition-colors duration-300" />
                </div>
              </div>

              {/* Bottom Content Area */}
              <div className="flex flex-col p-6 border-t border-gray-100 bg-white group-hover:border-orange-50/30 transition-all duration-500 relative">
                <div className="flex-1 flex flex-col w-full">
                  
                  {/* Container for Icon and Title */}
                  <div className="flex items-center group-hover:-translate-y-1 transition-transform duration-500 ease-in-out">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-800"></div>
                      <div className="w-2 h-px bg-neutral-800"></div>
                      <div className="p-1 border border-neutral-200 mx-1 rounded-sm">
                        <div className="w-14 h-14 bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)] flex items-center justify-center text-white shadow-[0_0_12px_rgba(255,104,0,0.4)] group-hover:shadow-[0_0_20px_rgba(255,104,0,0.6)] transition-shadow duration-300">
                          <service.icon className="w-7 h-7 drop-shadow-[0_0_4px_rgba(255,255,255,0.3)]" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="w-2 h-px bg-neutral-800"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral-800"></div>
                    </div>

                    <h3 className="ml-5 text-xl font-bold text-neutral-900 leading-snug text-left max-w-[150px]">
                      {service.title.split('\n').map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </h3>
                  </div>

                  {/* Expanding Description */}
                  <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="pt-0.5 text-sm text-neutral-500 leading-relaxed opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pr-12">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Chevrons */}
                <div className="absolute right-6 bottom-6 flex flex-col justify-end ml-2 -space-y-4">
                  <ChevronDown className="w-8 h-8 text-orange-200 group-hover:text-orange-300 transition-colors duration-300" strokeWidth={1} />
                  <ChevronDown className="w-8 h-8 text-orange-300 group-hover:text-orange-400 transition-colors duration-300" strokeWidth={1} />
                  <ChevronDown className="w-8 h-8 text-orange-400 group-hover:text-[#ff6800] transition-colors duration-300" strokeWidth={1} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
