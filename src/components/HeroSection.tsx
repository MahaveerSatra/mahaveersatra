
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Fast-Track Success Section */}
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
