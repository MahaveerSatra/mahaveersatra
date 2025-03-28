
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
  location?: string;
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
      location: "Texas",
      date: "October 2021 - Present",
      description: [
        "Led the account-level business strategy and planning across key enterprise accounts, including ASML USA and Disney, resulting in ~10% YoY growth and deeper adoption of MathWorks tools.",
        "Delivered a comprehensive workshop on \"AI with Model-Based Design\" for MathWorks Torrance, focusing on training machine learning models for virtual sensors, Model-Based Design integration, compression of neural networks and code generation for embedded AI applications.",
        "Continuous Collaboration with PLC Coder, Controls and System Identification development, and product marketing teams to support market assessment, feedback in MRP meetings and customer feedback integration.",
        "Developed customer-facing content for advanced process control in pharmaceutical industry, regression modeling, predictive maintenance and resource optimization to drive awareness and adoption.",
        "Created a \"No-Meeting\" cross-functional community of practice to connect Industry AE, Academia CSE and Product Managers to enhance our presence in the Semiconductor Equipment Manufacturing Industry.",
        "Delivered compelling technical presentations, proofs of concept, and demonstrations to both technical and non-technical stakeholders, resulting in $2M+ sales wins from June 2024-Dec 2024.",
        "Developed thought leadership for Digital Twins through LinkedIn community engagement, with 3k+ followers."
      ],
      icon: <Briefcase className="w-full h-full text-white" />,
      iconBackground: "#0076A8" // MathWorks blue
    },
    {
      title: "Application Engineer",
      company: "MathWorks",
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
      title: "System Modeling & Controls Team Lead",
      company: "Center for Automotive Research",
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
      title: "Senior Design Engineer",
      company: "Larsen and Toubro Defence",
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
      title: "Master of Science - Mechanical Engineering",
      company: "Ohio State University",
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
      location: "Mumbai, India",
      date: "May 2012 - April 2016",
      description: [
        "CPI: 8.85/10"
      ],
      icon: <GraduationCap className="w-full h-full text-white" />,
      iconBackground: "#1F3A93" // VJTI blue
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">My Experience</h2>
          <div className="h-1 w-20 bg-liverpool mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            My professional journey in digital twins and solution consulting, from education to current role.
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
