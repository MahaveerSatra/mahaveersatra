
import React from 'react';
import { cn } from '@/lib/utils';

interface HighlightedTextProps {
  children: React.ReactNode;
  color?: 'yellow' | 'coral' | 'blue' | 'green';
  type?: 'underline' | 'highlight' | 'strike';
  className?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ 
  children, 
  color = 'yellow', 
  type = 'underline',
  className 
}) => {
  const colorClasses = {
    yellow: {
      underline: 'decoration-marker-yellow',
      highlight: 'bg-marker-yellow/30',
      strike: 'line-through decoration-marker-yellow'
    },
    coral: {
      underline: 'decoration-marker-coral',
      highlight: 'bg-marker-coral/30',
      strike: 'line-through decoration-marker-coral'
    },
    blue: {
      underline: 'decoration-marker-blue',
      highlight: 'bg-marker-blue/30',
      strike: 'line-through decoration-marker-blue'
    },
    green: {
      underline: 'decoration-marker-green',
      highlight: 'bg-marker-green/30',
      strike: 'line-through decoration-marker-green'
    }
  };

  const baseClasses = {
    underline: 'underline decoration-4 decoration-wavy',
    highlight: 'px-1 rounded',
    strike: 'decoration-2'
  };

  return (
    <span className={cn(
      baseClasses[type],
      colorClasses[color][type],
      'font-medium',
      className
    )}>
      {children}
    </span>
  );
};

export default HighlightedText;
