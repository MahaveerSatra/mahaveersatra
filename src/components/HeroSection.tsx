
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-36 pb-20 bg-gradient-to-b from-blue-50 to-white min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 animate-float-slow"></div>
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-teal-100 rounded-full opacity-40 animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-amber-100 rounded-full opacity-60 animate-float-fast"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Fast-Track Success Section */}
          <div className="bg-white/90 py-16 px-6 rounded-xl shadow-lg mb-10 backdrop-blur-sm border border-slate-100 transform transition-all duration-500 hover:shadow-xl">
            <div className="mb-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Fast-Track Success</span>
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                with <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-600">Insightful Simulations</span>
              </h2>
              <div className="h-1 w-32 bg-amber-400 mx-auto mb-6"></div>
              <p className="text-sm text-blue-500 italic mb-2">— simplifying complexity since 2010 —</p>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Streamline your development process with <span className="font-semibold text-teal-500">cutting-edge simulation models</span> that enhance analysis, 
              design, and testing, while <span className="font-semibold text-teal-500">saving time and cost</span>.
            </p>
            
            <Button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-700 font-medium px-8 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 mx-auto transform hover:scale-105">
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
