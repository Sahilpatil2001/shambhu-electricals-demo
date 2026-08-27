import { useState } from 'react';
import { Zap, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Container } from './Container';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/#gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path || (path === '/' && location.pathname === '');
    return isActive 
      ? "relative font-bold text-[#ff6800] px-3.5 py-2 rounded-xl bg-orange-50/80 transition-all duration-300 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-3/5 after:h-[2.5px] after:bg-gradient-to-r after:from-[#ff6800] after:to-[#ff8a1f] after:rounded-full after:shadow-[0_0_8px_rgba(255,104,0,0.5)]"
      : "relative font-semibold text-neutral-700 hover:text-[#ff6800] px-3.5 py-2 rounded-xl hover:bg-orange-50/60 transition-all duration-300 group after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-3/5 after:h-[2.5px] after:bg-gradient-to-r after:from-[#ff6800] after:to-[#ff8a1f] after:rounded-full hover:after:shadow-[0_0_8px_rgba(255,104,0,0.5)] after:transition-all after:duration-300 after:ease-out";
  };

  const getMobileLinkClasses = (path: string) => {
    const isActive = location.pathname === path || (path === '/' && location.pathname === '');
    return isActive
      ? "text-[#ff6800] font-bold px-4 py-3 bg-orange-50 rounded-xl flex items-center justify-between border-l-4 border-[#ff6800] shadow-sm transition-all"
      : "text-neutral-700 font-semibold px-4 py-3 hover:text-[#ff6800] hover:bg-orange-50 hover:translate-x-1.5 rounded-xl transition-all duration-200 flex items-center justify-between";
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 w-full transition-all">
      <Container className="py-3.5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)] p-2 rounded-lg group-hover:scale-105 transition-transform duration-300">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight text-neutral-900 tracking-tight uppercase group-hover:text-[#ff6800] transition-colors">Shambhu</h1>
            <p className="text-sm font-semibold leading-tight text-brand-gradient tracking-widest uppercase">Electricals</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-[15px]">
          {navLinks.map((link, idx) => (
            <Link key={idx} to={link.path} className={getLinkClasses(link.path)}>
              <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[0.5px] inline-block">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1 border-r border-gray-200 pr-4">
              <Globe className="w-5 h-5 text-neutral-500" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-sm font-bold text-neutral-700 hover:text-brand-gradient focus:outline-none cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="mr">MR</option>
              </select>
            </div>
            <a 
              href="https://wa.me/919370739383" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)] hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,104,0,0.6)] transition-all text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" gradient={false} />
              {t('nav.getQuote')}
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-3">
            <div className="md:hidden flex items-center gap-1 text-neutral-600">
              <Globe className="w-5 h-5" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent font-bold focus:outline-none cursor-pointer text-sm hover:text-brand-gradient transition-colors"
              >
                <option value="en">EN</option>
                <option value="mr">MR</option>
              </select>
            </div>
            <button 
              className="p-2 text-neutral-600 hover:text-brand-gradient transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white absolute w-full shadow-lg pb-4">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-3 font-medium text-neutral-600">
            {navLinks.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.path} 
                className={getMobileLinkClasses(link.path)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 md:hidden">
              <a 
                href="https://wa.me/919370739383" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full bg-brand-gradient shadow-[0_0_15px_rgba(255,104,0,0.4)] hover:brightness-110 hover:shadow-[0_0_25px_rgba(255,104,0,0.6)] transition-all rounded-xl text-white px-6 py-3 font-semibold flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" gradient={false} />
                {t('nav.getQuote')}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
