
import React from 'react';
import { Lightbulb, Briefcase, Puzzle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const interestCards = [
    {
      icon: <Lightbulb className="h-10 w-10 text-primary-blue" />,
      title: "Digital Twins Expert",
      description: "Specialized in developing advanced digital twin solutions for complex engineering systems in the Semiconductor Manufacturing industry.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary-blue" />,
      title: "Solutions Consultant",
      description: "Experienced consultant helping clients optimize their Industrial Automation processes and implement innovative technologies.",
    },
    {
      icon: <Puzzle className="h-10 w-10 text-primary-blue" />,
      title: "Problem Solver",
      description: "Quick learner with strong analytical skills and a passion for solving complex technical and business challenges.",
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">About Me</h2>
          <div className="h-1 w-20 bg-accent-yellow mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-5xl mx-auto mb-16">
          <div className="lg:w-1/3">
            <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 max-w-sm">
              <img 
                src="/lovable-uploads/facda059-8389-4f17-9ba5-451ace3f9504.png" 
                alt="Mahaveer Satra - Professional Headshot" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:w-2/3">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interestCards.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-100 bg-gray-50 transform hover:scale-105 transition-all">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="rounded-full bg-white p-4 shadow-sm mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-blue mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
