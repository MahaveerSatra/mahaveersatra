
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Cpu, Users, TrendingUp, Bike, Ship, Mountain, Puzzle, HeartHandshake } from 'lucide-react';

interface Skill {
  name: string;
  value: number;
  category: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: "Digital Twin Development", value: 95, category: "technical" },
    { name: "MATLAB/Simulink", value: 90, category: "technical" },
    { name: "Machine Learning/Deep Learning", value: 85, category: "technical" },
    { name: "PLCs coding and networking", value: 90, category: "technical" },
    { name: "Python", value: 80, category: "technical" },
    { name: "Problem Solving", value: 92, category: "technical" },
    { name: "Semiconductor Manufacturing", value: 88, category: "technical" },
    { name: "Enterprise Account Growth", value: 90, category: "business" },
    { name: "Relationship Development", value: 95, category: "business" },
    { name: "Solution Consulting", value: 90, category: "business" },
    { name: "Business Strategy", value: 85, category: "business" },
    { name: "Client Communication", value: 95, category: "business" }
  ];

  const technicalSkills = skills.filter(skill => skill.category === "technical");
  const businessSkills = skills.filter(skill => skill.category === "business");

  // Using sunshine and teal colors from the new palette
  const getProgressColor = (value: number, category: string) => {
    if (category === "technical") {
      return "bg-teal";
    } else {
      return "bg-sunshine";
    }
  };

  // Adventure cards with new vibrant colors
  const adventureCards = [
    {
      icon: <Bike className="h-12 w-12 text-coral" />,
      title: "Cycling Adventures",
      description: "Exploring new trails and roads on two wheels.",
      bgColor: "bg-white"
    },
    {
      icon: <Ship className="h-12 w-12 text-azure" />,
      title: "Kayaking Expeditions",
      description: "Navigating waterways and enjoying the serenity of lakes.",
      bgColor: "bg-white"
    },
    {
      icon: <Mountain className="h-12 w-12 text-teal" />,
      title: "Hiking Journeys",
      description: "Conquering peaks and discovering breathtaking views.",
      bgColor: "bg-white"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="vibrant-heading">My Skills</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            I've developed a diverse set of technical and business skills throughout my career in Industrial Automation and Semiconductor Manufacturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-teal hover:shadow-md transition-all">
            <h3 className="text-2xl font-semibold text-indigo mb-6 flex items-center">
              <Cpu className="mr-2 h-6 w-6 text-teal" /> Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-indigo">{skill.name}</span>
                    <span className="text-gray-600">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className={cn("h-2 rounded-full", getProgressColor(skill.value, skill.category))} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-sunshine hover:shadow-md transition-all">
            <h3 className="text-2xl font-semibold text-indigo mb-6 flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-sunshine" /> Business Skills
            </h3>
            <div className="space-y-6">
              {businessSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-indigo">{skill.name}</span>
                    <span className="text-gray-600">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className={cn("h-2 rounded-full", getProgressColor(skill.value, skill.category))} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-indigo mb-8 text-center flex items-center justify-center">
            <HeartHandshake className="mr-2 h-6 w-6 text-coral" /> Professional Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-teal shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-indigo mb-3">Digital Twin Expert</h3>
                <p className="text-gray-700">
                  Specialized in designing and implementing digital twins for complex engineering systems in the Semiconductor Manufacturing industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-sunshine shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-indigo mb-3">Solution Consultant</h3>
                <p className="text-gray-700">
                  Providing expert consultation to clients, helping them optimize their processes and implement innovative Industrial Automation solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-coral shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-indigo mb-3">Problem Solver</h3>
                <p className="text-gray-700">
                  Skilled at analyzing complex technical challenges and developing effective solutions through creative thinking and systematic approaches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Outdoor Adventures Visual Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-indigo mb-8 text-center">My Outdoor Adventures</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adventureCards.map((card, index) => (
              <div 
                key={index} 
                className={`${card.bgColor} rounded-xl p-6 shadow-sm border-t-4 ${
                  index === 0 ? 'border-coral' : index === 1 ? 'border-azure' : 'border-teal'
                } hover:shadow-md transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex justify-center mb-4">
                  {card.icon}
                </div>
                <h4 className="text-xl font-semibold text-center mb-2 text-indigo">{card.title}</h4>
                <p className="text-center text-gray-700">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
