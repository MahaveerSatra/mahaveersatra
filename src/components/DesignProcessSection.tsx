
import React from 'react';
import { Check, Search, Lightbulb, Cpu, BarChart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DesignProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: "Discovery & Requirements",
      description: "We start with a deep dive into your needs, understanding your challenges, goals, and workflows to make sure we're solving the right problem.",
      color: "bg-gradient-to-br from-indigo-600 to-blue-700"
    },
    {
      icon: <Lightbulb className="h-9 w-9 text-white" />,
      title: "Conceptualization",
      description: "We create the model architecture and mathematical foundation, building the conceptual framework for your simulation solution.",
      color: "bg-gradient-to-br from-amber-500 to-orange-600"
    },
    {
      icon: <Cpu className="h-9 w-9 text-white" />,
      title: "Implementation",
      description: "Our team develops the models using industry-standard tools, integrating the mathematical framework into a functional simulation.",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600"
    },
    {
      icon: <BarChart className="h-9 w-9 text-white" />,
      title: "Validation & Testing",
      description: "We rigorously test the model against real-world data to ensure accuracy, reliability, and performance under various conditions.",
      color: "bg-gradient-to-br from-violet-500 to-purple-700"
    },
    {
      icon: <Award className="h-9 w-9 text-white" />,
      title: "Deployment & Training",
      description: "We integrate the solution into your workflows, provide comprehensive documentation, and train your team to get maximum value.",
      color: "bg-gradient-to-br from-pink-500 to-rose-600"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 text-center">
            This is how you can get your design and development right
          </h2>
          <div className="h-1 w-32 bg-accent-yellow mx-auto mb-10"></div>
          <p className="text-lg text-gray-600 text-center mb-14 max-w-3xl mx-auto">
            A structured approach to model-based design and simulation ensures accuracy, efficiency, and successful implementation
          </p>

          <div className="space-y-12 mt-16">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 items-center group">
                <div className={`flex-shrink-0 ${step.color} p-4 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110 mx-auto md:mx-0 flex items-center justify-center`}>
                  {step.icon}
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-accent-yellow flex-1 hover:shadow-md transition-all duration-300 mt-4 md:mt-0">
                  <h3 className="text-2xl font-semibold text-primary-blue mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-yellow hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold text-primary-blue mb-4">Ready to optimize your development process?</h3>
              <p className="text-gray-700 mb-6">
                Let's collaborate to create simulation models that streamline your design and development workflow, saving time and resources while improving accuracy.
              </p>
              <Button className="bg-accent-yellow hover:bg-accent-yellow/90 text-primary-blue font-medium px-6 py-6 rounded-full shadow-sm">
                <a href="#contact" className="flex items-center gap-2 text-lg">
                  Get in Touch <Check className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
