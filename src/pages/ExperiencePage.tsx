
import React from 'react';
import NavBar from '@/components/NavBar';
import ExperienceSection from '@/components/ExperienceSection';
import FooterSection from '@/components/FooterSection';

const ExperiencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main className="pt-20">
        <ExperienceSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default ExperiencePage;
