
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background elements with enhanced visuals */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-earth/30 to-white z-0"></div>
      <div className="absolute top-1/4 right-0 h-64 w-64 bg-liverpool/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 h-64 w-64 bg-mathworks/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 h-32 w-32 bg-green-500/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/3 right-1/4 h-48 w-48 bg-blue-500/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-4">
              Hi, I'm <span className="text-liverpool">Mahaveer Satra</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Senior Application Engineer at MathWorks
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Digital Twins Expert & Solution Consultant based in Plano, Texas. Combining technical expertise with business acumen to deliver innovative solutions in the semiconductor manufacturing industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-liverpool hover:bg-liverpool/90 text-white px-6 py-2 rounded-md">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" className="text-navy border-navy hover:bg-navy/5">
                <a href="#experience">View My Work</a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/5 rounded-full overflow-hidden border-4 border-white shadow-xl animate-slide-in-right">
            <img 
              src="/lovable-uploads/facda059-8389-4f17-9ba5-451ace3f9504.png" 
              alt="Mahaveer Satra" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-navy hover:text-liverpool transition-colors">
            <ArrowDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
