
import React from 'react';

const PersonalGallery: React.FC = () => {
  return (
    <section className="py-20" id="personal">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Life Beyond Work</h2>
          <div className="h-1 w-24 bg-accent-yellow mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Embracing adventure and creating memories outside the professional world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/lovable-uploads/e948e758-6f0c-4ef7-8d11-54a9b859c177.png" 
              alt="Family Time" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-xl font-medium mb-1">Family Time</h3>
              <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300">Creating memories with loved ones</p>
            </div>
          </div>
          
          <div className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/lovable-uploads/e2158f8d-13e3-41f3-abd5-b38cf23fa7ab.png" 
              alt="Mountain Hiking" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-xl font-medium mb-1">Mountain Exploration</h3>
              <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300">Conquering peaks and enjoying nature</p>
            </div>
          </div>
          
          <div className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/lovable-uploads/de98bd37-1565-41b6-a54f-2095cc8d7e10.png" 
              alt="Kayaking Adventure" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-xl font-medium mb-1">Kayaking Expedition</h3>
              <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300">Navigating waters and seeking adventure</p>
            </div>
          </div>
          
          <div className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/lovable-uploads/56db6a2e-4bee-45d5-aea7-9793b41bb7e2.png" 
              alt="Cycling" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-xl font-medium mb-1">Cycling Passion</h3>
              <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300">Exploring on two wheels</p>
            </div>
          </div>
          
          <div className="group relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl md:col-span-2">
            <img 
              src="/lovable-uploads/c2d6bdeb-b82c-4bbd-894c-938f8aaa8882.png" 
              alt="Holiday Season" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-xl font-medium mb-1">Holiday Season</h3>
              <p className="text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300">Celebrating special moments with family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalGallery;
