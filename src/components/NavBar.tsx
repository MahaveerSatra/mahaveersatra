
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText } from 'lucide-react';
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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="text-navy font-bold text-2xl">
          Mahaveer<span className="text-liverpool">.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-navy hover:text-liverpool transition-colors">About</a>
          <a href="#experience" className="text-navy hover:text-liverpool transition-colors">Experience</a>
          <a href="#skills" className="text-navy hover:text-liverpool transition-colors">Skills</a>
          <a href="#blog" className="text-navy hover:text-liverpool transition-colors">Blog</a>
          <a href="#contact" className="text-navy hover:text-liverpool transition-colors">Contact</a>
          <div className="flex space-x-3">
            <a href="https://www.linkedin.com/in/mahaveer-satra" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-navy hover:text-linkedin transition-colors" />
            </a>
            <a href="https://mahaveersatra.medium.com/" target="_blank" rel="noopener noreferrer">
              <FileText className="h-5 w-5 text-navy hover:text-gray-600 transition-colors" />
            </a>
          </div>
          <Button className="bg-liverpool hover:bg-liverpool/90 text-white">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="outline" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 flex flex-col pt-5 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-navy hover:text-liverpool py-2 text-lg border-b border-gray-100" onClick={toggleMobileMenu}>About</a>
            <a href="#experience" className="text-navy hover:text-liverpool py-2 text-lg border-b border-gray-100" onClick={toggleMobileMenu}>Experience</a>
            <a href="#skills" className="text-navy hover:text-liverpool py-2 text-lg border-b border-gray-100" onClick={toggleMobileMenu}>Skills</a>
            <a href="#blog" className="text-navy hover:text-liverpool py-2 text-lg border-b border-gray-100" onClick={toggleMobileMenu}>Blog</a>
            <a href="#contact" className="text-navy hover:text-liverpool py-2 text-lg border-b border-gray-100" onClick={toggleMobileMenu}>Contact</a>
            
            <div className="flex space-x-4 py-3">
              <a href="https://www.linkedin.com/in/mahaveer-satra" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-navy hover:text-linkedin" />
              </a>
              <a href="https://mahaveersatra.medium.com/" target="_blank" rel="noopener noreferrer">
                <FileText className="h-6 w-6 text-navy hover:text-gray-600" />
              </a>
            </div>
            
            <Button className="bg-liverpool hover:bg-liverpool/90 text-white w-full mt-4">
              <a href="#contact" onClick={toggleMobileMenu}>Get in Touch</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
