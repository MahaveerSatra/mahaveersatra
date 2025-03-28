
import React from 'react';
import { Linkedin, FileText, Heart } from 'lucide-react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              Mahaveer<span className="text-liverpool">.</span>
            </h2>
            <p className="mt-2 text-gray-300">
              Senior Application Engineer | Control Systems Expert
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/mahaveer-satra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-liverpool transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://mahaveersatra.medium.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-liverpool transition-colors"
              aria-label="Medium Blog"
            >
              <FileText className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            &copy; {currentYear} Mahaveer Satra. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#about" className="text-gray-300 hover:text-white text-sm">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white text-sm">Experience</a>
              <a href="#skills" className="text-gray-300 hover:text-white text-sm">Skills</a>
              <a href="#blog" className="text-gray-300 hover:text-white text-sm">Blog</a>
              <a href="#contact" className="text-gray-300 hover:text-white text-sm">Contact</a>
            </nav>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-400">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-liverpool mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
