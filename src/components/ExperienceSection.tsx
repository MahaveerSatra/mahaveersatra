
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences, sortExperiences } from '@/data/experiences';
import { ExperienceTimelineElement } from './ExperienceTimelineElement';
import { ExperienceMobileCard } from './ExperienceMobileCard';

const ExperienceSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const sortedExperiences = sortExperiences(experiences);

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="vibrant-heading">My Experience</h2>
          <div className="section-divider"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            My professional journey in Industrial Automation and Semiconductor Manufacturing, from education to current role.
          </p>
        </div>

        <div className="hidden md:block">
          <VerticalTimeline lineColor="#8B5CF6">
            {sortedExperiences.map((exp, index) => (
              <ExperienceTimelineElement
                key={index}
                experience={exp}
                isExpanded={expandedItems[index]}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </VerticalTimeline>
        </div>

        <div className="md:hidden space-y-6">
          {sortedExperiences.map((exp, index) => (
            <ExperienceMobileCard
              key={index}
              experience={exp}
              isExpanded={expandedItems[index]}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-sunshine hover:bg-sunshine/90 text-indigo rounded-full shadow-sm">
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
