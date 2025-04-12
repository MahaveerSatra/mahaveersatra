
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Cpu, TrendingUp } from 'lucide-react';

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

  // Using our new color scheme
  const getProgressColor = (value: number, category: string) => {
    if (category === "technical") {
      return "bg-secondary-green"; // Using our secondary color for technical skills
    } else {
      return "bg-accent-amber"; // Using our accent color for business skills
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-blue mb-4">My Skills</h2>
          <div className="h-1 w-24 bg-accent-amber mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            I've developed a diverse set of technical and business skills throughout my career in Industrial Automation and Semiconductor Manufacturing.
          </p>
          <p className="text-slate-500 italic mt-4">"Jack of all trades, master of quite a few actually."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-secondary-green hover:shadow-md transition-all">
            <h3 className="text-2xl font-semibold text-primary-blue mb-6 flex items-center">
              <Cpu className="mr-2 h-6 w-6 text-secondary-green" /> Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-primary-blue">{skill.name}</span>
                    <span className="text-gray-600">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className={cn("h-2 rounded-full", getProgressColor(skill.value, skill.category))} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-accent-amber hover:shadow-md transition-all">
            <h3 className="text-2xl font-semibold text-primary-blue mb-6 flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-accent-amber" /> Business Skills
            </h3>
            <div className="space-y-6">
              {businessSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-primary-blue">{skill.name}</span>
                    <span className="text-gray-600">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className={cn("h-2 rounded-full", getProgressColor(skill.value, skill.category))} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary-blue mb-8 text-center">
            Professional Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-t-4 border-secondary-green shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-blue mb-3">Digital Twin Expert</h3>
                <p className="text-gray-700">
                  Specialized in designing and implementing digital twins for complex engineering systems in the Semiconductor Manufacturing industry.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-accent-amber shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-blue mb-3">Solution Consultant</h3>
                <p className="text-gray-700">
                  Providing expert consultation to clients, helping them optimize their processes and implement innovative Industrial Automation solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-primary-blue shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-blue mb-3">Problem Solver</h3>
                <p className="text-gray-700">
                  Skilled at analyzing complex technical challenges and developing effective solutions through creative thinking and systematic approaches.
                </p>
                <p className="text-slate-500 italic mt-3 text-sm">"There are no unsolvable problems, just opportunities for more coffee."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
