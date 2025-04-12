
import React from 'react';
import NavBar from '@/components/NavBar';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main className="pt-20">
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default ContactPage;
