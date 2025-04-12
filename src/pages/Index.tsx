
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
