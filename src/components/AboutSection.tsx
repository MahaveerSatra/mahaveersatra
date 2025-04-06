
import React from 'react';
import { Lightbulb, Briefcase, Puzzle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const interestCards = [
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "Digital Twins Expert",
      description: "Specialized in developing advanced digital twin solutions for complex engineering systems in the Semiconductor Manufacturing industry.",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-white" />,
      title: "Solutions Consultant",
      description: "Experienced consultant helping clients optimize their Industrial Automation processes and implement innovative technologies.",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      icon: <Puzzle className="h-10 w-10 text-white" />,
      title: "Problem Solver",
      description: "Quick learner with strong analytical skills and a passion for solving complex technical and business challenges.",
      bgColor: "bg-gradient-to-br from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">About Me</h2>
          <div className="h-1 w-20 bg-accent-yellow mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto mb-16">
          <div className="lg:w-1/5">
            <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 max-w-xs mx-auto">
              <img 
                src="/lovable-uploads/facda059-8389-4f17-9ba5-451ace3f9504.png" 
                alt="Mahaveer Satra - Professional Headshot" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:w-4/5">
            <p className="text-lg text-gray-700 mb-6">
              I'm Mahaveer Satra, a Solutions Consultant specializing in Simulation, digital twin and Predictive Maintenance. I have a strong background in implementing complex engineering systems across various semiconductor equipment manufacturers, automotive, aerospace and robotics industry.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With a knack for quickly grasping technical concepts, I pride myself on being a solution-oriented consultant who can bridge the gap between technical innovation and business strategy.
            </p>
            <p className="text-lg text-gray-700">
              Outside of work, I'm an avid outdoor enthusiast who enjoys cycling, hiking, kayaking, and seeking new adventures. I'm also a dedicated Liverpool FC fan and bring the same passion to both my professional work and personal interests.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {interestCards.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-none overflow-hidden transform hover:scale-105 transition-all">
              <CardContent className={`flex flex-col items-center text-center p-6 ${card.bgColor} text-white`}>
                <div className="rounded-full bg-white/20 p-4 shadow-sm mb-4 backdrop-blur-sm">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-white/90">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Good Fit Section */}
        <div className="py-10 px-0 bg-white rounded-xl shadow-sm">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-blue mb-10 text-center">
              We're a good fit if...
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-7 w-7 text-secondary-green" />
                  </div>
                  <p className="text-lg text-neutral-700">
                    You Value Efficiency and Innovation seeking to enhance your development process with cutting-edge simulation.
                  </p>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-7 w-7 text-secondary-green" />
                  </div>
                  <p className="text-lg text-neutral-700">
                    You demand high-quality, reliable results with a focus on accuracy and precision, valuing partners who uphold integrity and accountability.
                  </p>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-7 w-7 text-secondary-green" />
                  </div>
                  <p className="text-lg text-neutral-700">
                    You require specialized technical expertise and value solutions that are adaptable to meet your unique challenges.
                  </p>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/e2158f8d-13e3-41f3-abd5-b38cf23fa7ab.png" 
                  alt="Mountain Hiking" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
