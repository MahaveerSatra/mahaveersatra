
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-earth/30 to-white z-0"></div>
      <div className="absolute top-1/4 right-0 h-64 w-64 bg-liverpool/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 h-64 w-64 bg-mathworks/5 rounded-full blur-3xl"></div>
      
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
              Mechanical Engineer & Control Systems Expert with a passion for solving complex engineering challenges, hiking mountains, and supporting Liverpool FC.
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
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
