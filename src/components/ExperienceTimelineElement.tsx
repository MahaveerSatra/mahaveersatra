
import React from 'react';
import { ExperienceItem } from '@/types/experience';
import { MapPin } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface ExperienceTimelineElementProps {
  experience: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ExperienceTimelineElement: React.FC<ExperienceTimelineElementProps> = ({
  experience,
  isExpanded,
  onToggle
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element"
      contentStyle={{ 
        background: '#fff', 
        color: '#073B4C', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.07)', 
        borderRadius: '12px',
        borderLeft: `4px solid ${experience.iconBackground}`,
        padding: isExpanded ? '1.5rem' : '1rem'
      }}
      contentArrowStyle={{ borderRight: '7px solid #fff' }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBackground,
        color: '#fff',
        boxShadow: `0 0 0 4px ${experience.iconBackground}30`
      }}
      icon={experience.icon}
    >
      {experience.imageSrc && (
        <div className="absolute -left-24 top-0 w-16 h-16 rounded-full overflow-hidden border-2" style={{ borderColor: experience.iconBackground }}>
          <img
            src={experience.imageSrc}
            alt={experience.imageAlt || experience.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <Collapsible open={isExpanded} onOpenChange={onToggle}>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <h4 className="text-lg text-teal-600">
              {experience.companyUrl ? (
                <a 
                  href={experience.companyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-coral transition-colors"
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </h4>
            {experience.location && (
              <p className="text-sm text-gray-500 flex items-center mt-1">
                <MapPin className="h-4 w-4 mr-1" /> {experience.location}
              </p>
            )}
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <ul className="mt-4 list-disc list-inside space-y-2">
            {experience.description.map((item, i) => (
              <li key={i} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </VerticalTimelineElement>
  );
};
