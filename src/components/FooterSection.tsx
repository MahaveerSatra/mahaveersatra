
import React from 'react';
import { Linkedin, FileText, MapPin, Github, Youtube, Coffee, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-gray-200 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-normal text-blue-600 mb-2 flex items-center">
                Mahaveer Satra <Smile className="ml-2 h-4 w-4 text-amber-400" />
              </h2>
              <p className="text-gray-500 mb-1">
                Solutions Consultant | Industrial Automation Expert
              </p>
              <p className="text-gray-500 flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-teal-500" /> Plano, Texas
              </p>
              <p className="text-sm text-gray-400 italic mt-2 flex items-center">
                <Coffee className="h-3 w-3 mr-1" /> Fueled by optimism and coffee
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/mahaveer-satra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-teal-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://mahaveersatra.medium.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-teal-500 transition-colors"
                aria-label="Medium Blog"
              >
                <FileText className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/MahaveerSatra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-teal-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@mahaveersatra9619/featured" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-teal-500 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Mahaveer Satra | Making complex systems simple since... well, it's complicated
            </p>
            
            <div className="mt-4 md:mt-0">
              <nav className="flex flex-wrap justify-center gap-8">
                <Link to="/experience" className="text-gray-500 hover:text-blue-600 text-sm relative group">
                  <span>Experience</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/skills" className="text-gray-500 hover:text-blue-600 text-sm relative group">
                  <span>Skills</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/process" className="text-gray-500 hover:text-blue-600 text-sm relative group">
                  <span>Process</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/projects" className="text-gray-500 hover:text-blue-600 text-sm relative group">
                  <span>Projects</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/blog" className="text-gray-500 hover:text-blue-600 text-sm relative group">
                  <span>Blog</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/personal" className="text-gray-500 hover:text-blue-600 text-sm relative group">
                  <span>Personal</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/contact" className="text-gray-500 hover:text-blue-600 text-sm relative group">
                  <span>Contact</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
