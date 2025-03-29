
import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, FileText, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-sunshine flex items-center justify-center">
              <Smile className="w-6 h-6 text-indigo" />
            </div>
            <span className="text-indigo font-medium text-xl">mahaveer.</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <a href="#about" className="text-indigo hover:text-coral transition-colors text-sm">About</a>
            <a href="#experience" className="text-indigo hover:text-coral transition-colors text-sm">Experience</a>
            <a href="#skills" className="text-indigo hover:text-coral transition-colors text-sm">Skills</a>
            <a href="#blog" className="text-indigo hover:text-coral transition-colors text-sm">Blog</a>
            <a href="#contact" className="text-indigo hover:text-coral transition-colors text-sm">Contact</a>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <a href="https://www.linkedin.com/in/mahaveer-satra" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-indigo hover:text-coral transition-colors" />
            </a>
            <a href="https://mahaveersatra.medium.com/" target="_blank" rel="noopener noreferrer">
              <FileText className="h-5 w-5 text-indigo hover:text-coral transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMobileMenu} className="p-1">
              {isMobileMenuOpen ? <X className="h-6 w-6 text-indigo" /> : <Menu className="h-6 w-6 text-indigo" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white/95 backdrop-blur-sm z-40 flex flex-col pt-5 px-6">
          <div className="flex flex-col space-y-6 py-8">
            <a href="#about" className="text-indigo py-2 text-xl" onClick={toggleMobileMenu}>About</a>
            <a href="#experience" className="text-indigo py-2 text-xl" onClick={toggleMobileMenu}>Experience</a>
            <a href="#skills" className="text-indigo py-2 text-xl" onClick={toggleMobileMenu}>Skills</a>
            <a href="#blog" className="text-indigo py-2 text-xl" onClick={toggleMobileMenu}>Blog</a>
            <a href="#contact" className="text-indigo py-2 text-xl" onClick={toggleMobileMenu}>Contact</a>
            
            <div className="flex space-x-6 py-6">
              <a href="https://www.linkedin.com/in/mahaveer-satra" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-indigo hover:text-coral transition-colors" />
              </a>
              <a href="https://mahaveersatra.medium.com/" target="_blank" rel="noopener noreferrer">
                <FileText className="h-6 w-6 text-indigo hover:text-coral transition-colors" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
