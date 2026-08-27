import { Container } from './Container';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { SectionIcon } from './SectionIcon';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden w-full">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          
          {/* LEFT SIDE: Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 pr-0 lg:pr-8"
          >
            {/* Section Tag */}
            <div className="flex items-center justify-start gap-2 mb-4">
              <SectionIcon className="w-5 h-5" />
              <p className="text-brand-gradient font-bold tracking-wider uppercase text-sm">{t('contact.section.tag')}</p>
            </div>

            {/* Heading */}
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-bold text-neutral-900 leading-tight mb-4">
              {t('contact.section.title1')} <br className="hidden sm:block" />
              <span className="text-brand-gradient">{t('contact.section.title2')}</span>
            </h2>

            {/* Paragraph */}
            <p className="text-neutral-600 text-[16px] md:text-[17px] leading-relaxed mb-10 max-w-md">
              {t('contact.section.desc')}
            </p>

            {/* Contact Items */}
            <div className="space-y-8">
              {/* Call */}
              <a href="tel:+919876543210" className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-orange-50 text-[#ff6800] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#ff6800] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#ff6800]/25">
                  <Phone className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="pt-1">
                  <p className="font-bold text-neutral-900 mb-0.5 text-[17px] transition-colors duration-300 group-hover:text-[#ff6800]">{t('contact.info.call')}</p>
                  <p className="text-neutral-600 text-[16px] transition-colors duration-300 group-hover:text-neutral-900">+91 98765 43210</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-orange-50 text-[#ff6800] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#ff6800] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#ff6800]/25">
                  <WhatsAppIcon className="w-6 h-6" gradient={false} />
                </div>
                <div className="pt-1">
                  <p className="font-bold text-neutral-900 mb-0.5 text-[17px] transition-colors duration-300 group-hover:text-[#ff6800]">{t('contact.info.whatsapp')}</p>
                  <p className="text-neutral-600 text-[16px] transition-colors duration-300 group-hover:text-neutral-900">+91 98765 43210</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:shambhuelectricals@gmail.com" className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-orange-50 text-[#ff6800] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#ff6800] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#ff6800]/25">
                  <Mail className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="pt-1">
                  <p className="font-bold text-neutral-900 mb-0.5 text-[17px] transition-colors duration-300 group-hover:text-[#ff6800]">{t('contact.info.email')}</p>
                  <p className="text-neutral-600 text-[16px] transition-colors duration-300 group-hover:text-neutral-900">
                    shambhuelectricals@gmail.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-5 group cursor-default">
                <div className="w-12 h-12 rounded-full bg-orange-50 text-[#ff6800] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#ff6800] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#ff6800]/25">
                  <MapPin className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="pt-1">
                  <p className="font-bold text-neutral-900 mb-0.5 text-[17px] transition-colors duration-300 group-hover:text-[#ff6800]">{t('contact.info.address')}</p>
                  <p className="text-neutral-600 text-[16px] max-w-[200px] leading-relaxed whitespace-pre-line transition-colors duration-300 group-hover:text-neutral-900">
                    {t('contact.info.address.value')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Visual & Form */}
          <div className="lg:col-span-7 relative w-full mt-10 lg:mt-0 flex items-center justify-start lg:pl-8">
            
            {/* Background Image Container */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[calc(100%-2rem)] bg-neutral-950 rounded-[2rem] overflow-hidden">
              <img src="/images/contact-bg.webp" alt="Electrical tools" className="w-full h-full object-cover" />
            </div>

            {/* Form Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-20 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 sm:p-8 w-full max-w-[480px] mx-auto lg:mx-0 my-8 lg:my-16 border border-gray-100 lg:-ml-16"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-6">
                {t('contact.form.title')}
              </h3>

              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                {/* Name */}
                <input
                  type="text"
                  placeholder={t('quote.name')}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ff6800] focus:ring-1 focus:ring-[#ff6800] transition-colors placeholder:text-gray-400 text-[15px]"
                />
                
                {/* Phone */}
                <input
                  type="tel"
                  placeholder={t('quote.phone')}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ff6800] focus:ring-1 focus:ring-[#ff6800] transition-colors placeholder:text-gray-400 text-[15px]"
                />

                {/* Email */}
                <input
                  type="email"
                  placeholder={t('faq.form.email')}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ff6800] focus:ring-1 focus:ring-[#ff6800] transition-colors placeholder:text-gray-400 text-[15px]"
                />

                {/* Service Dropdown */}
                <div className="relative">
                  <select
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ff6800] focus:ring-1 focus:ring-[#ff6800] transition-colors text-gray-500 text-[15px] appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>{t('quote.select')}</option>
                    <option value="residential">Residential Wiring</option>
                    <option value="commercial">Commercial Electrical</option>
                    <option value="industrial">Industrial Setup</option>
                    <option value="maintenance">Maintenance & Repair</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <textarea
                  placeholder={t('faq.form.message')}
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#ff6800] focus:ring-1 focus:ring-[#ff6800] transition-colors placeholder:text-gray-400 text-[15px] h-28 resize-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)] hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,104,0,0.6)] transition-all text-white py-4 rounded-xl flex items-center justify-center gap-2 font-semibold text-[15px]"
                >
                  {t('faq.form.send')}
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
}
