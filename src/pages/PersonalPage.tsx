
import React from 'react';
import NavBar from '@/components/NavBar';
import PersonalGallery from '@/components/PersonalGallery';
import FooterSection from '@/components/FooterSection';

const PersonalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main className="pt-20">
        <PersonalGallery />
      </main>
      <FooterSection />
    </div>
  );
};

export default PersonalPage;
