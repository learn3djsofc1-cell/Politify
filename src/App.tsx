import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroGrid } from './components/HeroGrid';
import { HeroContent } from './components/HeroContent';
import { FeaturesSection } from './components/FeaturesSection';
import { GridFeaturesSection } from './components/GridFeaturesSection';
import { InteractiveCardsSection } from './components/InteractiveCardsSection';
import { CommunitySection } from './components/CommunitySection';
import { CTASection } from './components/CTASection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-gray-900 bg-[#F4F5F7]">
      <HeroGrid />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center pb-10">
          <HeroContent />
        </main>
        <FeaturesSection />
        <GridFeaturesSection />
        <InteractiveCardsSection />
        <CommunitySection />
        <CTASection />
        <FooterSection />
      </div>
    </div>
  );
}
