
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Digital Twin Application',
      description: 'A comprehensive digital twin solution for semiconductor equipment modeling, enhancing real-time monitoring and predictive maintenance.',
      technologies: ['Python', 'MATLAB', 'C++', 'LabVIEW'],
      github: 'https://github.com/MahaveerSatra',
      demo: 'https://www.youtube.com/@mahaveersatra9619/featured',
      image: '/lovable-uploads/e948e758-6f0c-4ef7-8d11-54a9b859c177.png'
    },
    {
      title: 'Predictive Maintenance System',
      description: 'Machine learning-based predictive maintenance solution for industrial equipment, reducing downtime and maintenance costs.',
      technologies: ['TensorFlow', 'Python', 'SQL', 'Azure ML'],
      github: 'https://github.com/MahaveerSatra',
      demo: 'https://www.youtube.com/@mahaveersatra9619/featured',
      image: '/lovable-uploads/56db6a2e-4bee-45d5-aea7-9793b41bb7e2.png'
    },
    {
      title: 'Industrial Automation Framework',
      description: 'A scalable framework for automating industrial processes with enhanced control systems and monitoring capabilities.',
      technologies: ['PLC', 'SCADA', 'C#', 'OPC UA'],
      github: 'https://github.com/MahaveerSatra',
      demo: 'https://www.youtube.com/@mahaveersatra9619/featured',
      image: '/lovable-uploads/de98bd37-1565-41b6-a54f-2095cc8d7e10.png'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Projects</h2>
          <div className="h-1 w-20 bg-accent-yellow mx-auto"></div>
          <p className="mt-8 text-lg text-gray-700 max-w-3xl mx-auto">
            A selection of my professional projects in industrial automation, digital twin development, and predictive maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-primary-blue">{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {project.technologies.join(' • ')}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-gray-700">{project.description}</p>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild className="bg-accent-yellow hover:bg-amber-500 text-primary-blue">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" /> View Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
