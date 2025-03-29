
import React from 'react';
import { Linkedin, FileText, MapPin } from 'lucide-react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-normal text-navy mb-2">
                Mahaveer Satra
              </h2>
              <p className="text-gray-500 mb-1">
                Solutions Consultant | Industrial Automation Expert
              </p>
              <p className="text-gray-500 flex items-center">
                <MapPin className="h-4 w-4 mr-1" /> Plano, Texas
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/mahaveer-satra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-navy transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://mahaveersatra.medium.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-navy transition-colors"
                aria-label="Medium Blog"
              >
                <FileText className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Mahaveer Satra
            </p>
            
            <div className="mt-4 md:mt-0">
              <nav className="flex flex-wrap justify-center gap-8">
                <a href="#about" className="text-gray-500 hover:text-navy text-sm">About</a>
                <a href="#experience" className="text-gray-500 hover:text-navy text-sm">Experience</a>
                <a href="#skills" className="text-gray-500 hover:text-navy text-sm">Skills</a>
                <a href="#blog" className="text-gray-500 hover:text-navy text-sm">Blog</a>
                <a href="#contact" className="text-gray-500 hover:text-navy text-sm">Contact</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
