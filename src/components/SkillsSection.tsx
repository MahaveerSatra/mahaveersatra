
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Cpu, Users, TrendingUp, Bike, Ship, Mountain, Puzzle } from 'lucide-react';

interface Skill {
  name: string;
  value: number;
  category: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: "Digital Twin Development", value: 95, category: "technical" },
    { name: "MATLAB", value: 90, category: "technical" },
    { name: "Simulink", value: 90, category: "technical" },
    { name: "System Modeling", value: 85, category: "technical" },
    { name: "Data Analysis", value: 80, category: "technical" },
    { name: "Programming", value: 80, category: "technical" },
    { name: "Problem Solving", value: 92, category: "technical" },
    { name: "Quick Technical Learning", value: 95, category: "technical" },
    { name: "Enterprise Account Growth", value: 90, category: "business" },
    { name: "Relationship Development", value: 95, category: "business" },
    { name: "Solution Consulting", value: 90, category: "business" },
    { name: "Business Strategy", value: 85, category: "business" },
    { name: "Client Communication", value: 95, category: "business" }
  ];

  const technicalSkills = skills.filter(skill => skill.category === "technical");
  const businessSkills = skills.filter(skill => skill.category === "business");

  const getProgressColor = (value: number) => {
    if (value > 90) return "bg-gradient-to-r from-violet-500 to-purple-500";
    if (value > 85) return "bg-gradient-to-r from-blue-500 to-cyan-400";
    if (value > 80) return "bg-gradient-to-r from-emerald-500 to-green-400";
    return "bg-gradient-to-r from-amber-500 to-yellow-400";
  };

  // Adventure cards for visual appeal
  const adventureCards = [
    {
      icon: <Bike className="h-12 w-12 text-green-600" />,
      title: "Cycling Adventures",
      description: "Exploring new trails and roads on two wheels.",
      bgColor: "bg-green-50"
    },
    {
      icon: <Ship className="h-12 w-12 text-blue-600" />,
      title: "Kayaking Expeditions",
      description: "Navigating waterways and enjoying the serenity of lakes.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Mountain className="h-12 w-12 text-amber-600" />,
      title: "Hiking Journeys",
      description: "Conquering peaks and discovering breathtaking views.",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-liverpool mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            I've developed a diverse set of technical and business skills throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-800 mb-6 flex items-center">
              <Cpu className="mr-2 h-6 w-6 text-indigo-600" /> Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className={cn("h-2 rounded-full", getProgressColor(skill.value))} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-rose-800 mb-6 flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-rose-600" /> Business Skills
            </h3>
            <div className="space-y-6">
              {businessSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className={cn("h-2 rounded-full", getProgressColor(skill.value))} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-navy mb-8 text-center flex items-center justify-center">
            <Users className="mr-2 h-6 w-6" /> Professional Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-blue-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-3">Digital Twin Expert</h3>
                <p className="text-gray-700">
                  Specialized in designing and implementing digital twins for complex engineering systems in the semiconductor manufacturing industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-3">Solution Consultant</h3>
                <p className="text-gray-700">
                  Providing expert consultation to clients, helping them optimize their processes and implement innovative engineering solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-3">Problem Solver</h3>
                <p className="text-gray-700">
                  Skilled at analyzing complex technical challenges and developing effective solutions through creative thinking and systematic approaches.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Outdoor Adventures Visual Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-navy mb-8 text-center">My Outdoor Adventures</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adventureCards.map((card, index) => (
              <div key={index} className={`${card.bgColor} rounded-xl p-6 shadow-md transform hover:scale-105 transition-all duration-300`}>
                <div className="flex justify-center mb-4">
                  {card.icon}
                </div>
                <h4 className="text-xl font-semibold text-center mb-2">{card.title}</h4>
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
