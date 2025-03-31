
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Fast-Track Success Section - Moved to the top */}
          <div className="bg-neutral-50 py-16 px-4 rounded-xl shadow-sm mb-10">
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
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mb-8">
              Streamline your development process with cutting-edge simulation models that enhance analysis, 
              design, and testing, while saving time and cost.
            </p>
            
            <Button className="bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-medium px-6 py-2 rounded-full shadow-sm">
              <a href="#contact" className="flex items-center gap-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Professional Introduction */}
          <h2 className="text-xl md:text-2xl text-secondary-green mb-8 font-light fade-up delay-100 mt-10">
            Solutions Consultant — Industrial Automation & Semiconductor Manufacturing Expert
          </h2>
          
          {/* Good Fit Section */}
          <div className="py-10 px-0 bg-white">
            <div className="max-w-5xl">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-blue mb-10">
                We're a good fit if...
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-6 w-6 text-secondary-green flex-shrink-0 mt-1">✓</div>
                  <p className="text-lg text-neutral-700">
                    You Value Efficiency and Innovation seeking to enhance your development process with cutting-edge simulation.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-6 w-6 text-secondary-green flex-shrink-0 mt-1">✓</div>
                  <p className="text-lg text-neutral-700">
                    You demand high-quality, reliable results with a focus on accuracy and precision, valuing partners who uphold integrity and accountability.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-6 w-6 text-secondary-green flex-shrink-0 mt-1">✓</div>
                  <p className="text-lg text-neutral-700">
                    You require specialized technical expertise and value solutions that are adaptable to meet your unique challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
