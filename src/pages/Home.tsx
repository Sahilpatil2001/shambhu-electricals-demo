import { CinematicScrollIntro } from '../components/CinematicScrollIntro';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ServiceMarquee from '../components/ServiceMarquee';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import StatsBanner from '../components/StatsBanner';
import QuoteAndWhy from '../components/QuoteAndWhy';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <CinematicScrollIntro />
      <Hero />
      <Services />
      <ServiceMarquee />
      <About />
      <StatsBanner />
      <QuoteAndWhy />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CtaBanner />
    </>
  );
}
