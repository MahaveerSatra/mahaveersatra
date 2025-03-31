
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import PersonalGallery from '@/components/PersonalGallery';
import DesignProcessSection from '@/components/DesignProcessSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <NavBar />
      <HeroSection />
      <div className="mx-auto">
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <AboutSection />
          </div>
        </section>
        
        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <DesignProcessSection />
          </div>
        </section>
        
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <ExperienceSection />
          </div>
        </section>
        
        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <SkillsSection />
          </div>
        </section>
        
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <BlogSection />
          </div>
        </section>
        
        <section className="bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <PersonalGallery />
          </div>
        </section>
        
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <ContactSection />
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
