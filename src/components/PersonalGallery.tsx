
import React from 'react';

const PersonalGallery: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Life Beyond Work</h2>
          <div className="h-1 w-24 bg-accent-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Embracing adventure and creating memories outside the professional world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/lovable-uploads/e948e758-6f0c-4ef7-8d11-54a9b859c177.png" 
              alt="Family Time" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg font-medium">Family Time</h3>
            </div>
          </div>
          
          <div className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/lovable-uploads/e2158f8d-13e3-41f3-abd5-b38cf23fa7ab.png" 
              alt="Mountain Hiking" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg font-medium">Mountain Exploration</h3>
            </div>
          </div>
          
          <div className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/lovable-uploads/de98bd37-1565-41b6-a54f-2095cc8d7e10.png" 
              alt="Kayaking Adventure" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg font-medium">Kayaking Expedition</h3>
            </div>
          </div>
          
          <div className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/lovable-uploads/56db6a2e-4bee-45d5-aea7-9793b41bb7e2.png" 
              alt="Cycling" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg font-medium">Cycling Passion</h3>
            </div>
          </div>
          
          <div className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl md:col-span-2">
            <img 
              src="/lovable-uploads/c2d6bdeb-b82c-4bbd-894c-938f8aaa8882.png" 
              alt="Holiday Season" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-lg font-medium">Holiday Season</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalGallery;
