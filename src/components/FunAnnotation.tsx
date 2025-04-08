
import React from 'react';
import { cn } from '@/lib/utils';

interface FunAnnotationProps {
  text: string;
  color?: 'yellow' | 'coral' | 'blue' | 'green';
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
  withArrow?: boolean;
  className?: string;
}

const FunAnnotation: React.FC<FunAnnotationProps> = ({ 
  text, 
  color = 'yellow', 
  position = 'bottom-right',
  withArrow = true,
  className 
}) => {
  const colorClasses = {
    yellow: 'text-marker-yellow',
    coral: 'text-marker-coral',
    blue: 'text-marker-blue',
    green: 'text-marker-green'
  };

  const positionClasses = {
    'top-right': 'top-0 right-0 transform translate-x-2 -translate-y-4',
    'bottom-right': 'bottom-0 right-0 transform translate-x-2 translate-y-0',
    'top-left': 'top-0 left-8 transform -translate-x-2 -translate-y-4',
    'bottom-left': 'bottom-0 left-8 transform -translate-x-2 translate-y-0'
  };

  const arrowSvg = {
    'top-right': "/lovable-uploads/88ff634e-204b-4e77-b3a7-38ca2d2d4180.png",
    'bottom-right': "/lovable-uploads/8f5089f4-d006-4e4c-bd35-822f31830cf0.png",
    'top-left': "/lovable-uploads/6b3f06a3-caf2-4db2-8a8d-78964c61fe90.png",
    'bottom-left': "/lovable-uploads/03c3405d-6f49-45af-937b-682a4178470b.png"
  };

  return (
    <div className={cn("relative inline-block", className)}>
      <div className={cn(
        "font-handwritten text-lg md:text-xl absolute z-10 whitespace-normal max-w-[200px]",
        colorClasses[color],
        positionClasses[position]
      )}>
        {text}
        {withArrow && (
          <img
            src={arrowSvg[position]}
            alt="Arrow"
            className="w-24 h-auto absolute -z-10"
            style={{
              top: position.includes('top') ? '100%' : 'auto',
              bottom: position.includes('bottom') ? '100%' : 'auto',
              left: position.includes('left') ? '20%' : 'auto',
              right: position.includes('right') ? '20%' : 'auto',
              transform: position.includes('top') ? 'scaleY(-1)' : ''
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FunAnnotation;
