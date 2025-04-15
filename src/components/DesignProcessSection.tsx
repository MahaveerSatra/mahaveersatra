
import React from 'react';
import { Check, Search, Lightbulb, Cpu, BarChart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DesignProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Discovery & Requirements",
      description: "We start with a deep dive into your needs, understanding your challenges, goals, and workflows to make sure we're solving the right problem.",
      color: "bg-gradient-to-br from-indigo-600 to-blue-700",
      note: "Where the magic begins!"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Conceptualization",
      description: "We create the model architecture and mathematical foundation, building the conceptual framework for your simulation solution.",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      note: "Thinking outside the box!"
    },
    {
      icon: <Cpu className="h-8 w-8 text-white" />,
      title: "Implementation",
      description: "Our team develops the models using industry-standard tools, integrating the mathematical framework into a functional simulation.",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      note: "Code wizardry happens here"
    },
    {
      icon: <BarChart className="h-8 w-8 text-white" />,
      title: "Validation & Testing",
      description: "We rigorously test the model against real-world data to ensure accuracy, reliability, and performance under various conditions.",
      color: "bg-gradient-to-br from-violet-500 to-purple-700",
      note: "Making sure it actually works!"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Deployment & Training",
      description: "We integrate the solution into your workflows, provide comprehensive documentation, and train your team to get maximum value.",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      note: "Champagne time! 🍾"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="handwritten-note mx-auto mb-10 text-center">
            This is how you can get your design and development right!
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Your path to successful development
            </span>
          </h2>
          <div className="h-1 w-32 bg-amber-400 mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 text-center mb-14 max-w-3xl mx-auto">
            A structured approach to model-based design and simulation ensures accuracy, efficiency, and successful implementation
          </p>

          <div className="space-y-12 mt-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-center group relative">
                <div className={`flex-shrink-0 ${step.color} p-4 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110 mx-auto md:mx-0 flex items-center justify-center`}>
                  {step.icon}
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-amber-400 flex-1 hover:shadow-md transition-all duration-300 mt-4 md:mt-0">
                  <h3 className="text-2xl font-semibold text-blue-600 mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                
                {/* Handwritten note */}
                <div className="absolute -right-10 md:right-0 top-0 md:-right-24 transform rotate-3">
                  <span className="handwritten">{step.note}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-amber-400 hover:shadow-lg transition-all duration-300 relative">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Ready to optimize your development process?</h3>
              <p className="text-gray-700 mb-6">
                Let's collaborate to create simulation models that streamline your design and development workflow, saving time and resources while improving accuracy.
              </p>
              <Button className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-700 font-medium px-6 py-6 rounded-full shadow-sm">
                <a href="#contact" className="flex items-center gap-2 text-lg">
                  Get in Touch <Check className="h-5 w-5" />
                </a>
              </Button>
              
              {/* Handwritten arrow note */}
              <div className="absolute -bottom-16 right-10">
                <span className="handwritten handwritten-arrow">Click me, I don't bite!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
