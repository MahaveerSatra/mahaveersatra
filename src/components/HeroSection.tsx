
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-20 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Fast-Track Success Section */}
          <div className="bg-white/80 py-16 px-6 rounded-xl shadow-lg mb-10 backdrop-blur-sm border border-slate-100">
            <div className="mb-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-primary-blue">Fast-Track Success</span>
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                with <span className="text-secondary-green">Insightful Simulations</span>
              </h2>
              <div className="h-1 w-32 bg-accent-yellow mx-auto mb-6"></div>
            </div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Streamline your development process with <span className="font-semibold text-highlight-orange">cutting-edge simulation models</span> that enhance analysis, 
              design, and testing, while <span className="font-semibold text-highlight-orange">saving time and cost</span>.
            </p>
            
            <Button className="bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-medium px-8 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 mx-auto">
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
