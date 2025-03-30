
import React from 'react';
import { ArrowDown, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8 fade-up">
            <div className="h-1 w-8 bg-accent-yellow"></div>
            <span className="text-highlight-orange font-medium">Hello, I'm</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-blue mb-6 tracking-tight fade-up delay-100">
            Mahaveer Satra
          </h1>
          
          <h2 className="text-xl md:text-2xl text-secondary-green mb-8 font-light fade-up delay-200">
            Solutions Consultant — Industrial Automation & Semiconductor Manufacturing Expert
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-16 fade-up delay-300">
            <Button className="bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-medium px-6 py-2 rounded-full shadow-sm">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" className="text-primary-blue border-accent-yellow hover:bg-accent-yellow/10 rounded-full">
              <a href="#experience">View My Work</a>
            </Button>
          </div>
          
          <div className="mt-10 w-24 h-1 bg-accent-yellow"></div>
        </div>
      </div>
      
      {/* Simulation Highlight Section - Inspired by Kate Little's website */}
      <div className="mt-20 bg-neutral-50 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="relative mb-10">
            <h3 className="font-bold text-4xl md:text-6xl text-primary-blue">
              Fast-Track Success
            </h3>
            <span className="absolute -top-3 -left-3 text-7xl md:text-8xl opacity-10 font-bold text-secondary-green">
              01
            </span>
          </div>
          <h4 className="text-2xl md:text-3xl font-medium text-highlight-orange mb-8">
            with Insightful Simulations
          </h4>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl">
            Streamline your development process with cutting-edge simulation models that enhance analysis, 
            design, and testing, while saving time and cost.
          </p>
        </div>
      </div>
      
      {/* Good Fit Section */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-blue mb-10">
            We're a good fit if...
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-secondary-green flex-shrink-0 mt-1" />
              <p className="text-lg text-neutral-700">
                You Value Efficiency and Innovation seeking to enhance your development process with cutting-edge simulation.
              </p>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-secondary-green flex-shrink-0 mt-1" />
              <p className="text-lg text-neutral-700">
                You demand high-quality, reliable results with a focus on accuracy and precision, valuing partners who uphold integrity and accountability.
              </p>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="h-6 w-6 text-secondary-green flex-shrink-0 mt-1" />
              <p className="text-lg text-neutral-700">
                You require specialized technical expertise and value solutions that are adaptable to meet your unique challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-primary-blue hover:text-secondary-green transition-colors">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
