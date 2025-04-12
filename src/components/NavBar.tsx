
import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, FileText, Github, Youtube } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when changing pages
    setIsMobileMenuOpen(false);
    
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-highlight-orange' : 'text-primary-blue';
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-200 backdrop-blur-sm border-b border-gray-200 py-3 shadow-sm' : 'bg-slate-200 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4">
            <div className="h-20 w-20 relative">
              <img 
                src="/lovable-uploads/128b7220-c3a4-4256-848c-311a57408fc1.png" 
                alt="Logo" 
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link to="/experience" className={`hover:text-highlight-orange transition-colors text-lg font-medium ${isActive('/experience')}`}>Experience</Link>
            <Link to="/skills" className={`hover:text-highlight-orange transition-colors text-lg font-medium ${isActive('/skills')}`}>Skills</Link>
            <Link to="/process" className={`hover:text-highlight-orange transition-colors text-lg font-medium ${isActive('/process')}`}>Process</Link>
            <Link to="/projects" className={`hover:text-highlight-orange transition-colors text-lg font-medium ${isActive('/projects')}`}>Projects</Link>
            <Link to="/blog" className={`hover:text-highlight-orange transition-colors text-lg font-medium ${isActive('/blog')}`}>Blog</Link>
            <Link to="/personal" className={`hover:text-highlight-orange transition-colors text-lg font-medium ${isActive('/personal')}`}>Personal</Link>
            <Link to="/contact" className={`hover:text-highlight-orange transition-colors text-lg font-medium ${isActive('/contact')}`}>Contact</Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <a href="https://www.linkedin.com/in/mahaveer-satra" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-primary-blue hover:text-highlight-orange transition-colors" />
            </a>
            <a href="https://mahaveersatra.medium.com/" target="_blank" rel="noopener noreferrer">
              <FileText className="h-6 w-6 text-primary-blue hover:text-highlight-orange transition-colors" />
            </a>
            <a href="https://github.com/MahaveerSatra" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-primary-blue hover:text-highlight-orange transition-colors" />
            </a>
            <a href="https://www.youtube.com/@mahaveersatra9619/featured" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-6 w-6 text-primary-blue hover:text-highlight-orange transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleMobileMenu} className="p-1">
              {isMobileMenuOpen ? <X className="h-6 w-6 text-primary-blue" /> : <Menu className="h-6 w-6 text-primary-blue" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-white/95 backdrop-blur-sm z-40 flex flex-col pt-5 px-6">
          <div className="flex flex-col space-y-6 py-8">
            <Link to="/experience" className={`py-2 text-lg font-medium ${isActive('/experience')}`}>Experience</Link>
            <Link to="/skills" className={`py-2 text-lg font-medium ${isActive('/skills')}`}>Skills</Link>
            <Link to="/process" className={`py-2 text-lg font-medium ${isActive('/process')}`}>Process</Link>
            <Link to="/projects" className={`py-2 text-lg font-medium ${isActive('/projects')}`}>Projects</Link>
            <Link to="/blog" className={`py-2 text-lg font-medium ${isActive('/blog')}`}>Blog</Link>
            <Link to="/personal" className={`py-2 text-lg font-medium ${isActive('/personal')}`}>Personal</Link>
            <Link to="/contact" className={`py-2 text-lg font-medium ${isActive('/contact')}`}>Contact</Link>
            
            <div className="flex space-x-6 py-6">
              <a href="https://www.linkedin.com/in/mahaveer-satra" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-primary-blue hover:text-highlight-orange transition-colors" />
              </a>
              <a href="https://mahaveersatra.medium.com/" target="_blank" rel="noopener noreferrer">
                <FileText className="h-6 w-6 text-primary-blue hover:text-highlight-orange transition-colors" />
              </a>
              <a href="https://github.com/MahaveerSatra" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-primary-blue hover:text-highlight-orange transition-colors" />
              </a>
              <a href="https://www.youtube.com/@mahaveersatra9619/featured" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6 text-primary-blue hover:text-highlight-orange transition-colors" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
