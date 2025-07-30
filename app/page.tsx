'use client';

import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Proof from '../components/Proof';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="flex flex-col">
        <Hero />
        <Proof />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
}
