
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
    <div className="min-h-screen bg-white">
      <NavBar />
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4">
        <AboutSection />
        <DesignProcessSection />
        <ExperienceSection />
        <SkillsSection />
        <BlogSection />
        <PersonalGallery />
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
