
import React from 'react';
import { Check, Search, Lightbulb, Code, Activity, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DesignProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-primary-blue" />,
      title: "Discovery & Requirements",
      description: "We start with a deep dive into your needs, understanding your challenges, goals, and workflows to make sure we're solving the right problem."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-highlight-orange" />,
      title: "Conceptualization",
      description: "We create the model architecture and mathematical foundation, building the conceptual framework for your simulation solution."
    },
    {
      icon: <Code className="h-10 w-10 text-primary-blue" />,
      title: "Implementation",
      description: "Our team develops the models using industry-standard tools, integrating the mathematical framework into a functional simulation."
    },
    {
      icon: <Activity className="h-10 w-10 text-highlight-orange" />,
      title: "Validation & Testing",
      description: "We rigorously test the model against real-world data to ensure accuracy, reliability, and performance under various conditions."
    },
    {
      icon: <Award className="h-10 w-10 text-primary-blue" />,
      title: "Deployment & Training",
      description: "We integrate the solution into your workflows, provide comprehensive documentation, and train your team to get maximum value."
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
              <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 bg-white p-5 rounded-full shadow-md">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary-blue mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent-yellow">
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
