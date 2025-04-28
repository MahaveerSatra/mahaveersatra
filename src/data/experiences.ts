
import { Briefcase, Award, GraduationCap } from 'lucide-react';
import { ExperienceItem } from '@/types/experience';
import React from 'react';

// Helper function to create icons without JSX in this file
const createIconFunction = (IconComponent: typeof Briefcase | typeof Award | typeof GraduationCap) => {
  return () => React.createElement(IconComponent, { size: 24, strokeWidth: 2 });
};

export const experiences: ExperienceItem[] = [
  {
    title: "Senior Application Engineer",
    company: "The MathWorks Inc.",
    companyUrl: "https://www.mathworks.com/",
    location: "Texas",
    date: "October 2021 - Present",
    description: [
      "Led the account-level business strategy and planning across key enterprise accounts in the Semiconductor Manufacturing Industry, resulting in ~10% YoY growth and deeper adoption of technical tools.",
      "Delivered a comprehensive workshop on \"AI with Model-Based Design\" focusing on training machine learning models for virtual sensors and code generation for embedded AI applications in Industrial Automation.",
      "Created a \"No-Meeting\" cross-functional community of practice to connect Industry experts to enhance presence in the Semiconductor Equipment Manufacturing Industry."
    ],
    icon: createIconFunction(Briefcase),
    iconBackground: "#9b87f5",
    imageSrc: "/lovable-uploads/e948e758-6f0c-4ef7-8d11-54a9b859c177.png",
    imageAlt: "MathWorks industrial automation visualization"
  },
  {
    title: "Application Engineer",
    company: "The MathWorks Inc.",
    companyUrl: "https://www.mathworks.com/",
    location: "Massachusetts",
    date: "September 2020 - October 2021",
    description: [
      "Developed an example to leverage our Graphical Neural Network deep learning workflows for node classification by processing and integrating the QM7-X dataset for chemistry.",
      "Acted as a technical advisor for aerospace clients, guiding them through the integration of flight management systems with existing infrastructure.",
      "Built customer relationships through technical presentations and workshops on system modeling applications."
    ],
    icon: createIconFunction(Briefcase),
    iconBackground: "#9b87f5",
    imageSrc: "/lovable-uploads/56db6a2e-4bee-45d5-aea7-9793b41bb7e2.png",
    imageAlt: "Neural network visualization"
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
    icon: createIconFunction(Briefcase),
    iconBackground: "#7E69AB",
    imageSrc: "/lovable-uploads/de98bd37-1565-41b6-a54f-2095cc8d7e10.png",
    imageAlt: "Automotive systems engineering"
  },
  {
    title: "Senior Design Engineer",
    company: "Larsen & Toubro Defence",
    companyUrl: "https://www.larsentoubro.com/",
    location: "Mumbai",
    date: "July 2016 - July 2018",
    description: [
      "Developed military qualified pneumatic launcher, from design conceptualization to the final production release.",
      "Designed simulations and experiments to validate the firing valve of the launcher and to determine its discharge coefficient.",
      "Led a cross-functional team to implement manufacturing improvements that reduced production time by 15%."
    ],
    icon: createIconFunction(Briefcase),
    iconBackground: "#7E69AB",
    imageSrc: "/lovable-uploads/128b7220-c3a4-4256-848c-311a57408fc1.png",
    imageAlt: "Engineering design visualization"
  },
  {
    title: "Intern - Design and Engineering Centre",
    company: "Thinkphi",
    companyUrl: "https://www.thinkphi.com/",
    location: "Mumbai, India",
    date: "May 2016 - July 2016",
    description: [
      "Designed a pressure-based single axis passive solar tracker by utilizing the change in vapor pressure.",
      "Developed the complete solar tracker for a 50W panel under $100, yielding a theoretical increase in energy output by over 35% in a day compared to a fixed solar panel.",
      "Collaborated with manufacturing team to prototype and test the solar tracking system."
    ],
    icon: createIconFunction(Briefcase),
    iconBackground: "#7E69AB",
    imageSrc: "/lovable-uploads/facda059-8389-4f17-9ba5-451ace3f9504.png",
    imageAlt: "Solar tracking system"
  },
  {
    title: "Publication - SAE Technical Paper",
    company: "SAE International",
    companyUrl: "https://doi.org/10.4271/2020-01-1438",
    location: "",
    date: "2020",
    description: [
      "Kuwabara, K., Karl-DeFrain, J., Midlam-Mohler, S., Satra, M. et al., \"Model-Based Design of a Hybrid Powertrain Architecture with Connected and Automated Technologies for Fuel Economy Improvements,\" SAE Technical Paper 2020-01-1438, 2020."
    ],
    icon: createIconFunction(Award),
    iconBackground: "#6E59A5",
    imageSrc: "/lovable-uploads/c2d6bdeb-b82c-4bbd-894c-938f8aaa8882.png",
    imageAlt: "Technical publication visualization"
  },
  {
    title: "Publication - Conference Paper",
    company: "ATSMDE Conference",
    companyUrl: "",
    location: "Mumbai, India",
    date: "December 2017",
    description: [
      "Satra, M., & Shetty, S. (2017). Design Optimization and Manufacturing of Quadcopter using 3D Printing. International Conference on Advances in Thermal System, Materials and Design Engineering (ATSMDE)."
    ],
    icon: createIconFunction(Award),
    iconBackground: "#6E59A5",
    imageSrc: "/lovable-uploads/e2158f8d-13e3-41f3-abd5-b38cf23fa7ab.png",
    imageAlt: "3D printing and design optimization"
  },
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
    icon: createIconFunction(GraduationCap),
    iconBackground: "#E5DEFF",
    imageSrc: "/lovable-uploads/e2158f8d-13e3-41f3-abd5-b38cf23fa7ab.png",
    imageAlt: "Ohio State University campus"
  },
  {
    title: "Bachelor of Technology - Mechanical Engineering",
    company: "Veermata Jijabai Technological Institute (VJTI)",
    companyUrl: "https://www.vjti.ac.in/",
    location: "Mumbai, India",
    date: "May 2012 - April 2016",
    description: [
      "CPI: 8.85/10",
      "Active member of the Robotics Club",
      "Participated in multiple national-level engineering competitions"
    ],
    icon: createIconFunction(GraduationCap),
    iconBackground: "#E5DEFF",
    imageSrc: "/lovable-uploads/e2158f8d-13e3-41f3-abd5-b38cf23fa7ab.png",
    imageAlt: "VJTI campus"
  }
];

export const sortExperiences = (experiences: ExperienceItem[]) => {
  return [...experiences].sort((a, b) => {
    const aEndYear = parseInt(a.date.split(' - ')[1]?.split(' ')[a.date.split(' - ')[1]?.split(' ').length - 1] || a.date.split(' ')[a.date.split(' ').length - 1]);
    const bEndYear = parseInt(b.date.split(' - ')[1]?.split(' ')[b.date.split(' - ')[1]?.split(' ').length - 1] || b.date.split(' ')[b.date.split(' ').length - 1]);
    return bEndYear - aEndYear;
  });
};
