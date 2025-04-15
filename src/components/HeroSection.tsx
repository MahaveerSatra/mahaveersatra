
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-36 pb-20 bg-slate-50 min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-deep-blue/5 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-teal/5 animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="bg-white/80 py-16 px-6 rounded-xl shadow-md backdrop-blur-sm border border-slate-100">
            <div className="mb-8 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-deep-blue">
                Fast-Track Success
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 relative inline-block">
                with <span className="text-teal">Insightful Simulations</span>
                <span className="absolute -bottom-3 left-0 w-24 h-1 bg-amber"></span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto my-8 leading-relaxed">
                Streamline your development process with <span className="text-teal font-medium">cutting-edge simulation models</span> that enhance analysis, 
                design, and testing, while <span className="text-teal font-medium">saving time and cost</span>.
              </p>
              
              <Button 
                className="bg-deep-blue hover:bg-deep-blue/90 text-white font-medium px-8 py-2.5 rounded-md shadow-md hover:shadow-lg transition-all group"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Learn More 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
