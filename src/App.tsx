/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen font-sans selection:bg-[#ff6800] selection:text-white flex flex-col">
            <TopBar />
            <Header />
            <main className="flex-grow flex flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/services" element={<Services />} />
              </Routes>
            </main>
            <FloatingActions />
            <Footer />
          </div>
        </BrowserRouter>
      </SmoothScroll>
    </LanguageProvider>
  );
}

