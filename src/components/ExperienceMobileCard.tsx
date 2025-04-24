
import React from 'react';
import { ExperienceItem } from '@/types/experience';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface ExperienceMobileCardProps {
  experience: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ExperienceMobileCard: React.FC<ExperienceMobileCardProps> = ({
  experience,
  isExpanded,
  onToggle
}) => {
  return (
    <Card className="border-l-4 shadow-sm hover:shadow-md transition-all" style={{ borderColor: experience.iconBackground }}>
      <CardContent className="p-4">
        <Collapsible open={isExpanded} onOpenChange={onToggle}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {experience.imageSrc && (
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2" style={{ borderColor: experience.iconBackground }}>
                  <img
                    src={experience.imageSrc}
                    alt={experience.imageAlt || experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="ml-4">
                <h3 className="text-lg font-bold">{experience.title}</h3>
                <p className="text-sm text-teal-600">
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
                  )} • {experience.date}
                </p>
                {experience.location && (
                  <p className="text-xs text-gray-500 flex items-center mt-1">
                    <MapPin className="h-3 w-3 mr-1" /> {experience.location}
                  </p>
                )}
              </div>
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
            <ul className="list-disc list-inside space-y-2 mt-4 pl-4">
              {experience.description.map((item, i) => (
                <li key={i} className="text-sm text-gray-700">{item}</li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};
