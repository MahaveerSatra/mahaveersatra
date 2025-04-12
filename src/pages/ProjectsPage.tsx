
import React from 'react';
import NavBar from '@/components/NavBar';
import ProjectsSection from '@/components/ProjectsSection';
import FooterSection from '@/components/FooterSection';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main className="pt-20">
        <ProjectsSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default ProjectsPage;
