
import React from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import FooterSection from '@/components/FooterSection';
import DesignProcessSection from '@/components/DesignProcessSection';
import PersonalGallery from '@/components/PersonalGallery';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <DesignProcessSection />
        <ExperienceSection />
        <SkillsSection />
        <BlogSection />
        <PersonalGallery />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
