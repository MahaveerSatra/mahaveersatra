
import React from 'react';
import { ArrowDown, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 fade-up">
            <div className="h-1 w-8 bg-sunshine"></div>
            <span className="text-coral font-medium">Hello, I'm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-indigo mb-6 tracking-tight fade-up delay-100">
            Mahaveer Satra
          </h1>
          
          <h2 className="text-xl md:text-2xl text-teal-600 mb-8 font-light fade-up delay-200">
            Solutions Consultant — Industrial Automation & Semiconductor Manufacturing Expert
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-16 fade-up delay-300">
            <Button className="bg-sunshine hover:bg-sunshine/90 text-indigo font-medium px-6 py-2 rounded-full shadow-sm">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" className="text-indigo border-sunshine hover:bg-sunshine/10 rounded-full">
              <a href="#experience">View My Work</a>
            </Button>
          </div>
          
          <div className="mt-10 w-24 h-1 bg-sunshine"></div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-indigo hover:text-coral transition-colors">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
