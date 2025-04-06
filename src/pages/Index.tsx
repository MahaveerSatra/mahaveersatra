
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

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main className="pt-28">
        <HeroSection />
        <div className="mx-auto">
          <section id="about">
            <div className="section-container">
              <AboutSection />
            </div>
          </section>
          
          <section id="process" className="bg-white">
            <div className="section-container">
              <DesignProcessSection />
            </div>
          </section>
          
          <section id="experience" className="bg-slate-100">
            <div className="section-container">
              <ExperienceSection />
            </div>
          </section>
          
          <section id="skills" className="bg-white">
            <div className="section-container">
              <SkillsSection />
            </div>
          </section>
          
          <section id="blog" className="bg-slate-50">
            <div className="section-container">
              <BlogSection />
            </div>
          </section>
          
          <section id="contact" className="bg-slate-100">
            <div className="section-container">
              <ContactSection />
            </div>
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
