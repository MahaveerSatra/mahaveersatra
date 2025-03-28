
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  value: number;
  category: string;
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: "Control Systems", value: 95, category: "technical" },
    { name: "MATLAB", value: 90, category: "technical" },
    { name: "Simulink", value: 90, category: "technical" },
    { name: "Mechanical Engineering", value: 85, category: "technical" },
    { name: "System Modeling", value: 85, category: "technical" },
    { name: "Data Analysis", value: 80, category: "technical" },
    { name: "Programming", value: 75, category: "technical" },
    { name: "Technical Consultation", value: 90, category: "soft" },
    { name: "Project Management", value: 80, category: "soft" },
    { name: "Team Leadership", value: 75, category: "soft" },
    { name: "Client Communication", value: 85, category: "soft" },
    { name: "Problem Solving", value: 90, category: "soft" }
  ];

  const technicalSkills = skills.filter(skill => skill.category === "technical");
  const softSkills = skills.filter(skill => skill.category === "soft");

  const getProgressColor = (value: number) => {
    if (value > 85) return "bg-liverpool";
    if (value > 75) return "bg-mathworks";
    return "bg-navy";
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-liverpool mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            I've developed a diverse set of technical and soft skills throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className={cn("h-2", getProgressColor(skill.value))} />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-6">Professional Skills</h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className={cn("h-2", getProgressColor(skill.value))} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navy mb-3">Control System Expert</h3>
              <p className="text-gray-700">
                Specialized in designing, modeling, and implementing advanced control systems for complex engineering applications.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navy mb-3">MATLAB & Simulink Specialist</h3>
              <p className="text-gray-700">
                Extensive experience in utilizing MATLAB and Simulink for system modeling, simulation, and data analysis.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-navy mb-3">Technical Consultant</h3>
              <p className="text-gray-700">
                Providing expert consultation to clients in implementing engineering solutions and optimizing their workflows.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
