
import React from 'react';
import { Linkedin, FileText, MapPin, Github, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <a 
                href="https://github.com/MahaveerSatra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-navy transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@mahaveersatra9619/featured" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-navy transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Mahaveer Satra
            </p>
            
            <div className="mt-4 md:mt-0">
              <nav className="flex flex-wrap justify-center gap-8">
                <Link to="/experience" className="text-gray-500 hover:text-navy text-sm">Experience</Link>
                <Link to="/skills" className="text-gray-500 hover:text-navy text-sm">Skills</Link>
                <Link to="/process" className="text-gray-500 hover:text-navy text-sm">Process</Link>
                <Link to="/projects" className="text-gray-500 hover:text-navy text-sm">Projects</Link>
                <Link to="/blog" className="text-gray-500 hover:text-navy text-sm">Blog</Link>
                <Link to="/personal" className="text-gray-500 hover:text-navy text-sm">Personal</Link>
                <Link to="/contact" className="text-gray-500 hover:text-navy text-sm">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
