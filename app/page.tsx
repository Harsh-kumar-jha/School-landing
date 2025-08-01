'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Programs />
      <Achievements />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}