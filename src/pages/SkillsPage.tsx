
import React from 'react';
import NavBar from '@/components/NavBar';
import SkillsSection from '@/components/SkillsSection';
import FooterSection from '@/components/FooterSection';

const SkillsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main className="pt-20">
        <SkillsSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default SkillsPage;
