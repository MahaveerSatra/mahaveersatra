
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  description: string[];
  icon: React.ReactNode;
  iconBackground: string;
}

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Senior Application Engineer",
      company: "MathWorks",
      date: "2021 - Present",
      description: [
        "Providing technical expertise and consultation in the development and optimization of control system applications.",
        "Leading the implementation of simulation environments for testing and validating complex engineering systems.",
        "Collaborating with clients to identify requirements and deliver customized engineering solutions."
      ],
      icon: <Briefcase className="w-full h-full text-white" />,
      iconBackground: "#0076A8" // MathWorks blue
    },
    {
      title: "Application Engineer",
      company: "MathWorks",
      date: "2017 - 2021",
      description: [
        "Developed simulation models and control algorithms for various engineering applications.",
        "Provided technical support and training to clients in implementing control system solutions.",
        "Contributed to the enhancement of simulation tools and methodologies."
      ],
      icon: <Briefcase className="w-full h-full text-white" />,
      iconBackground: "#0076A8" // MathWorks blue
    },
    {
      title: "Master's Degree",
      company: "University of Wisconsin-Madison",
      date: "2015 - 2017",
      description: [
        "Specialization in Mechanical Engineering with focus on Control Systems.",
        "Research on advanced control methodologies and their practical applications."
      ],
      icon: <GraduationCap className="w-full h-full text-white" />,
      iconBackground: "#C5050C" // Wisconsin red
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">My Experience</h2>
          <div className="h-1 w-20 bg-liverpool mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            My professional journey in engineering and control systems, from education to current role.
          </p>
        </div>

        <div className="hidden md:block">
          <VerticalTimeline>
            {experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                contentStyle={{ background: '#fff', color: '#0A1128', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: '12px' }}
                contentArrowStyle={{ borderRight: '7px solid #fff' }}
                date={exp.date}
                iconStyle={{ background: exp.iconBackground, color: '#fff' }}
                icon={exp.icon}
              >
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <h4 className="text-lg text-gray-600">{exp.company}</h4>
                <ul className="mt-4 list-disc list-inside space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="md:hidden space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: exp.iconBackground }}>
                    {React.cloneElement(exp.icon as React.ReactElement, { className: "w-5 h-5 text-white" })}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <p className="text-sm text-gray-600">{exp.company} • {exp.date}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-liverpool hover:bg-liverpool/90 text-white">
            <a 
              href="https://www.linkedin.com/in/mahaveer-satra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View Full Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
