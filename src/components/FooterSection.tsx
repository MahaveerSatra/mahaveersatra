
import React from 'react';
import { Linkedin, FileText, MapPin, Github, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-medium text-deep-blue mb-2 relative inline-block">
                Mahaveer Satra
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber"></span>
              </h2>
              <p className="text-slate-500 mb-1">
                Solutions Consultant | Industrial Automation Expert
              </p>
              <p className="text-slate-500 flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-teal" /> Plano, Texas
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/in/mahaveer-satra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-deep-blue hover:text-teal transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://mahaveersatra.medium.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-deep-blue hover:text-teal transition-colors"
                aria-label="Medium Blog"
              >
                <FileText className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/MahaveerSatra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-deep-blue hover:text-teal transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@mahaveersatra9619/featured" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-deep-blue hover:text-teal transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} Mahaveer Satra
            </p>
            
            <div className="mt-4 md:mt-0">
              <nav className="flex flex-wrap justify-center gap-8">
                <Link to="/experience" className="text-slate-500 hover:text-deep-blue text-sm hover-underline">Experience</Link>
                <Link to="/skills" className="text-slate-500 hover:text-deep-blue text-sm hover-underline">Skills</Link>
                <Link to="/process" className="text-slate-500 hover:text-deep-blue text-sm hover-underline">Process</Link>
                <Link to="/projects" className="text-slate-500 hover:text-deep-blue text-sm hover-underline">Projects</Link>
                <Link to="/blog" className="text-slate-500 hover:text-deep-blue text-sm hover-underline">Blog</Link>
                <Link to="/personal" className="text-slate-500 hover:text-deep-blue text-sm hover-underline">Personal</Link>
                <Link to="/contact" className="text-slate-500 hover:text-deep-blue text-sm hover-underline">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
