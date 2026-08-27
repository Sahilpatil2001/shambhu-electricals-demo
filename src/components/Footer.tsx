import { MapPin, Phone, Mail, Facebook, Instagram, Heart, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from './Container';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-neutral-950 text-gray-400 pt-20 pb-8 border-t border-neutral-900 w-full">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)] p-1.5 rounded text-white">
                <Zap className="w-6 h-6 fill-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold leading-none text-white tracking-tight uppercase">Shambhu</h2>
                <p className="text-[10px] font-bold leading-none text-brand-gradient tracking-widest uppercase mt-0.5">Electricals</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed pr-4">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t('footer.links')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-neutral-400 hover:text-[#ff6800] hover:translate-x-1.5 transition-all duration-200 inline-block">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-neutral-400 hover:text-[#ff6800] hover:translate-x-1.5 transition-all duration-200 inline-block">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-[#ff6800] hover:translate-x-1.5 transition-all duration-200 inline-block">{t('nav.services')}</Link></li>
              <li><Link to="/#gallery" className="text-neutral-400 hover:text-[#ff6800] hover:translate-x-1.5 transition-all duration-200 inline-block">{t('nav.gallery')}</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-[#ff6800] hover:translate-x-1.5 transition-all duration-200 inline-block">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t('footer.serv')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services" className="text-neutral-400 hover:text-[#ff6800] hover:translate-x-1.5 transition-all duration-200 inline-block">{t('services.s1.title')}</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-[#ff6800] hover:translate-x-1.5 transition-all duration-200 inline-block">{t('services.s2.title')}</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-[#ff6800] hover:translate-x-1.5 transition-all duration-200 inline-block">{t('services.s3.title')}</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-[#ff6800] hover:translate-x-1.5 transition-all duration-200 inline-block">{t('footer.s1')}</Link></li>
              <li><Link to="/services" className="text-neutral-400 hover:text-[#ff6800] hover:translate-x-1.5 transition-all duration-200 inline-block">{t('footer.s2')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t('footer.info')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff6800] flex-shrink-0" />
                <Link to="/contact" className="hover:text-[#ff6800] transition-colors">{t('topbar.address')} - 416201</Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#ff6800] flex-shrink-0" />
                <a href="tel:+919370739383" className="hover:text-[#ff6800] transition-colors cursor-pointer">+91 93707 39383</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#ff6800] flex-shrink-0" />
                <a href="mailto:shambhuelectricals@gmail.com" className="break-all hover:text-[#ff6800] transition-colors">shambhuelectricals@gmail.com</a>
              </li>
            </ul>
            
            <div className="mt-8">
              <h5 className="text-white font-semibold mb-4 text-sm">{t('footer.follow')}</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-xl border border-neutral-800 flex items-center justify-center hover:bg-brand-gradient hover:shadow-[0_0_15px_rgba(255,104,0,0.4)] hover:border-[#ff6800] hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl border border-neutral-800 flex items-center justify-center hover:bg-brand-gradient hover:shadow-[0_0_15px_rgba(255,104,0,0.4)] hover:border-[#ff6800] hover:text-white transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://wa.me/919370739383" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-neutral-800 flex items-center justify-center hover:bg-brand-gradient hover:shadow-[0_0_15px_rgba(255,104,0,0.4)] hover:border-[#ff6800] hover:text-white transition-all text-gray-400 group">
                  <WhatsAppIcon className="w-4 h-4 group-hover:fill-white" gradient={false} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>{t('footer.rights')}</p>
          <p className="flex items-center gap-1">
            {t('footer.design')} <Heart className="w-3 h-3 text-[#ff6800] fill-[#ff6800]" /> {t('footer.quality')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
