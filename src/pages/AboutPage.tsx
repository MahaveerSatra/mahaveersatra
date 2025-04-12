
import React from 'react';
import NavBar from '@/components/NavBar';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main className="pt-20">
        <AboutSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
