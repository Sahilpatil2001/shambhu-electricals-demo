import { MapPin, Clock, Phone, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Container } from './Container';
import { WhatsAppIcon } from './WhatsAppIcon';

export default function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="bg-neutral-900 text-gray-300 py-2 border-b border-neutral-800 w-full">
      <Container className="flex flex-col lg:flex-row justify-between items-center text-xs sm:text-sm gap-3 lg:gap-0">
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#ff6800]" />
            <span className="text-center">{t('topbar.address')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#ff6800]" />
            <span>{t('topbar.hours')}</span>
          </div>
          <a href="tel:+919370739383" className="flex items-center gap-1.5 hover:text-[#ff6800] transition-colors cursor-pointer">
            <Phone className="w-4 h-4 text-[#ff6800]" />
            <span>+91 93707 39383</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-[#ff6800] transition-colors"><Facebook className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#ff6800] transition-colors"><Instagram className="w-4 h-4" /></a>
          <a href="https://wa.me/919370739383" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#ff6800] transition-colors">
            <WhatsAppIcon className="w-4 h-4" gradient={false} />
          </a>
        </div>
      </Container>
    </div>
  );
}
