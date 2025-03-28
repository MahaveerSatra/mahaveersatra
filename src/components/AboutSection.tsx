
import React from 'react';
import { Mountain, Soccer, Briefcase, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  const interestCards = [
    {
      icon: <Briefcase className="h-10 w-10 text-mathworks" />,
      title: "Engineering Professional",
      description: "Senior Application Engineer at MathWorks with expertise in developing advanced control systems and simulations.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-gray-700" />,
      title: "Control Systems Expert",
      description: "Specialized in mechanical engineering with a focus on designing and implementing complex control systems.",
    },
    {
      icon: <Mountain className="h-10 w-10 text-green-600" />,
      title: "Hiking Enthusiast",
      description: "Passionate about exploring hiking trails and experiencing adventures in nature.",
    },
    {
      icon: <Soccer className="h-10 w-10 text-liverpool" />,
      title: "Liverpool FC Fan",
      description: "Ardent supporter of Liverpool Football Club and enjoy watching and playing soccer.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">About Me</h2>
          <div className="h-1 w-20 bg-liverpool mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6">
            I'm Mahaveer Satra, a Senior Application Engineer at MathWorks with a strong background in mechanical engineering and a specialization in control systems. My professional journey has equipped me with expertise in developing simulation solutions and implementing advanced control algorithms.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Throughout my career, I've worked on diverse projects ranging from industrial automation to complex simulation environments, helping clients solve challenging engineering problems. I'm passionate about leveraging technology to create efficient and innovative solutions.
          </p>
          <p className="text-lg text-gray-700">
            Outside of work, I'm an avid hiker who loves exploring mountain trails and embarking on adventures. I'm also a dedicated soccer enthusiast and a loyal supporter of Liverpool Football Club. These interests help me maintain a balanced lifestyle and provide fresh perspectives that enhance my professional work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interestCards.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-none bg-gray-50">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="rounded-full bg-white p-4 shadow-sm mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{card.title}</h3>
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
