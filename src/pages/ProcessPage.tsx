
import React from 'react';
import NavBar from '@/components/NavBar';
import DesignProcessSection from '@/components/DesignProcessSection';
import FooterSection from '@/components/FooterSection';

const ProcessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main className="pt-20">
        <DesignProcessSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default ProcessPage;
