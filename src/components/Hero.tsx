import { ArrowRight, Phone, History, Shield, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Container } from './Container';
import { motion } from 'motion/react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-neutral-900 text-white py-24 sm:py-32 overflow-hidden w-full">
      {/* Background Image Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
          alt="Electrician working"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
      </motion.div>

      <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-full px-4 py-1.5 text-sm font-medium text-gray-300"
          >
            <div className="w-2 h-2 rounded-full bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)]"></div>
            {t('hero.trusted')}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              {t('hero.title1')} <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,104,0,0.5)] whitespace-nowrap">{t('hero.title2')}</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-lg leading-relaxed"
          >
            {t('hero.desc')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a 
              href="https://wa.me/919370739383" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)] hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,104,0,0.6)] transition-all text-white px-8 py-3.5 rounded-xl font-semibold flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <WhatsAppIcon className="w-5 h-5" gradient={false} />
              {t('hero.freeQuote')}
            </a>
            <a href="tel:+919370739383" className="bg-transparent border-2 border-neutral-600 hover:border-neutral-400 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              {t('hero.callNow')}
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 pt-4"
          >
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-neutral-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Customer" />
              <img className="w-10 h-10 rounded-full border-2 border-neutral-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" alt="Customer" />
              <img className="w-10 h-10 rounded-full border-2 border-neutral-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Customer" />
              <img className="w-10 h-10 rounded-full border-2 border-neutral-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Customer" />
            </div>
            <div className="text-sm text-gray-300">
              {t('hero.trustedBy')} <span className="font-bold text-white">500+</span> {t('hero.happyCustomers')}
            </div>
          </motion.div>
        </div>

        {/* Stats box on the right */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="hidden lg:flex absolute right-0 bottom-[-30px] bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl px-8 py-5 items-center gap-7 z-20"
        >

          <div className="flex items-center gap-3 text-white group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
             <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
               <History className="w-5 h-5 text-[#ff6800] drop-shadow-[0_0_8px_rgba(255,104,0,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(255,104,0,0.8)] transition-all duration-300" />
             </div>
             <div>
               <h4 className="font-bold text-lg leading-tight">24/7</h4>
               <p className="text-[13px] text-gray-300 font-medium">{t('hero.support')}</p>
             </div>
          </div>

          <div className="flex items-center gap-3 text-white group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
             <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
               <Shield className="w-5 h-5 text-[#ff6800] drop-shadow-[0_0_8px_rgba(255,104,0,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(255,104,0,0.8)] transition-all duration-300" />
             </div>
             <div>
               <h4 className="font-bold text-lg leading-tight">10+</h4>
               <p className="text-[13px] text-gray-300 font-medium">{t('hero.yearsExp')}</p>
             </div>
          </div>
          
          <div className="flex items-center gap-3 text-white group cursor-pointer hover:-translate-y-1 transition-transform duration-300">
             <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
               <BadgeCheck className="w-5 h-5 text-[#ff6800] drop-shadow-[0_0_8px_rgba(255,104,0,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(255,104,0,0.8)] transition-all duration-300" />
             </div>
             <div>
               <h4 className="font-bold text-lg leading-tight">500+</h4>
               <p className="text-[13px] text-gray-300 font-medium">{t('hero.projectsDone')}</p>
             </div>
          </div>
        
        </motion.div>
      </Container>
    </section>
  );
}
