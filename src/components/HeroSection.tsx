
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 tracking-tight">
            Mahaveer Satra
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
            Solutions Consultant — Industrial Automation & Semiconductor Manufacturing Expert
          </h2>
          <div className="flex flex-wrap gap-4 mb-16">
            <Button className="bg-navy hover:bg-navy/90 text-white px-6 py-2 rounded-none">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" className="text-navy border-navy hover:bg-navy/5 rounded-none">
              <a href="#experience">View My Work</a>
            </Button>
          </div>
          
          <div className="mt-10 w-24 h-1 bg-navy"></div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-navy hover:text-liverpool transition-colors">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
