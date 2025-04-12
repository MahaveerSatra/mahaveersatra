
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-36 pb-20 bg-gradient-to-b from-slate-50 to-slate-100 min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Fast-Track Success Section */}
          <div className="bg-white/80 py-16 px-6 rounded-xl shadow-lg mb-10 backdrop-blur-sm border border-slate-100">
            <div className="mb-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-deep-blue">Fast-Track Success</span>
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                with <span className="text-teal">Insightful Simulations</span>
              </h2>
              <div className="h-1 w-32 bg-amber mx-auto mb-6"></div>
            </div>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Streamline your development process with <span className="font-semibold text-teal">cutting-edge simulation models</span> that enhance analysis, 
              design, and testing, while <span className="font-semibold text-teal">saving time and cost</span>.
            </p>
            
            <Button className="bg-amber hover:bg-amber-dark text-deep-blue font-medium px-8 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 mx-auto">
              <Link to="/contact" className="flex items-center gap-2">
                Learn More <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
