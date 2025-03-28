
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Award, GraduationCap, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  date: string;
  description: string[];
  icon: React.ReactNode;
  iconBackground: string;
}

const ExperienceSection: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Master of Science - Mechanical Engineering",
      company: "Ohio State University",
      companyUrl: "https://www.osu.edu/",
      location: "Columbus, Ohio",
      date: "August 2018 - August 2020",
      description: [
        "Specialization in Automotive Systems and Mobility",
        "GPA: 4.0",
        "Awarded J.N. Tata Endowment Scholarship for exceptional academic merit and professional experience."
      ],
      icon: <GraduationCap className="w-full h-full text-white" />,
      iconBackground: "#BB0000" // Ohio State scarlet
    },
    {
      title: "Bachelor of Technology - Mechanical Engineering",
      company: "Veermata Jijabai Technological Institute (VJTI)",
      companyUrl: "https://www.vjti.ac.in/",
      location: "Mumbai, India",
      date: "May 2012 - April 2016",
      description: [
        "CPI: 8.85/10"
      ],
      icon: <GraduationCap className="w-full h-full text-white" />,
      iconBackground: "#1F3A93" // VJTI blue
    },
    {
      title: "Senior Design Engineer",
      company: "Defense Manufacturing Company",
      companyUrl: "https://www.larsentoubro.com/",
      location: "Mumbai",
      date: "July 2016 - July 2018",
      description: [
        "Developed military qualified pneumatic launcher, from design conceptualization to the final production release.",
        "Designed simulations and experiments to validate the firing valve of the launcher and to determine its discharge coefficient."
      ],
      icon: <Briefcase className="w-full h-full text-white" />,
      iconBackground: "#0066CC" // L&T blue
    },
    {
      title: "System Modeling & Controls Team Lead",
      company: "Center for Automotive Research",
      companyUrl: "https://car.osu.edu/",
      location: "Ohio",
      date: "August 2019 - August 2020",
      description: [
        "Led a multidisciplinary team of 12 engineers in the development, testing and deployment of Equivalent Consumption Minimization Strategy (ECMS) for hybrid electric vehicle.",
        "Performed HIL testing for validation and verification of controller and V2X algorithms on dSPACE simulator.",
        "Directed a 5-member system safety work group, ensuring the safe operation of the project vehicle."
      ],
      icon: <Briefcase className="w-full h-full text-white" />,
      iconBackground: "#BB0000" // Ohio State scarlet
    },
    {
      title: "Application Engineer",
      company: "Scientific Software Company",
      companyUrl: "https://www.mathworks.com/",
      location: "Massachusetts",
      date: "September 2020 - October 2021",
      description: [
        "Developed an example to leverage our Graphical Neural Network deep learning workflows for node classification by processing and integrating the QM7-X dataset for chemistry.",
        "Acted as a technical advisor for aerospace clients, guiding them through the integration of flight management systems with existing infrastructure."
      ],
      icon: <Briefcase className="w-full h-full text-white" />,
      iconBackground: "#0076A8" // MathWorks blue
    },
    {
      title: "Senior Application Engineer",
      company: "Scientific Software Company",
      companyUrl: "https://www.mathworks.com/",
      location: "Texas",
      date: "October 2021 - Present",
      description: [
        "Led the account-level business strategy and planning across key enterprise accounts in the Semiconductor Manufacturing Industry, resulting in ~10% YoY growth and deeper adoption of technical tools.",
        "Delivered a comprehensive workshop on \"AI with Model-Based Design\" focusing on training machine learning models for virtual sensors and code generation for embedded AI applications in Industrial Automation.",
        "Created a \"No-Meeting\" cross-functional community of practice to connect Industry experts to enhance presence in the Semiconductor Equipment Manufacturing Industry."
      ],
      icon: <Briefcase className="w-full h-full text-white" />,
      iconBackground: "#0076A8" // MathWorks blue
    }
  ];

  // Sort experiences by date to ensure chronological order
  const sortedExperiences = [...experiences].sort((a, b) => {
    // Extract years for comparison
    const aStartYear = parseInt(a.date.split(' - ')[0].split(' ')[a.date.split(' - ')[0].split(' ').length - 1]);
    const bStartYear = parseInt(b.date.split(' - ')[0].split(' ')[b.date.split(' - ')[0].split(' ').length - 1]);
    return aStartYear - bStartYear;
  });

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">My Experience</h2>
          <div className="h-1 w-20 bg-liverpool mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            My professional journey in Industrial Automation and Semiconductor Manufacturing, from education to current role.
          </p>
        </div>

        <div className="hidden md:block">
          <VerticalTimeline>
            {sortedExperiences.map((exp, index) => (
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
                <h4 className="text-lg text-gray-600">
                  {exp.companyUrl ? (
                    <a 
                      href={exp.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-liverpool transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h4>
                {exp.location && <p className="text-sm text-mathworks flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-1" /> {exp.location}
                </p>}
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
          {sortedExperiences.map((exp, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: exp.iconBackground }}>
                    {React.cloneElement(exp.icon as React.ReactElement, { className: "w-5 h-5 text-white" })}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <p className="text-sm text-gray-600">
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-liverpool transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )} • {exp.date}
                    </p>
                    {exp.location && <p className="text-xs text-mathworks flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" /> {exp.location}
                    </p>}
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
