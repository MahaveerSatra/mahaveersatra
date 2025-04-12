
import React from 'react';
import NavBar from '@/components/NavBar';
import BlogSection from '@/components/BlogSection';
import FooterSection from '@/components/FooterSection';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-montserrat">
      <NavBar />
      <main className="pt-20">
        <BlogSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default BlogPage;
