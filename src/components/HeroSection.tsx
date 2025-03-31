
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Fast-Track Success Section */}
          <div className="bg-neutral-50 py-16 px-6 rounded-xl shadow-sm mb-10">
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl text-primary-blue font-medium mb-3">
                Fast-Track Success
              </h3>
              <h4 className="text-3xl md:text-4xl font-bold text-secondary-green mb-6">
                with Insightful Simulations
              </h4>
              <div className="h-1 w-20 bg-accent-yellow mb-6"></div>
            </div>
            <p className="text-lg text-neutral-600 max-w-3xl mb-8 leading-relaxed">
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
