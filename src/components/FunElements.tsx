
import React from 'react';

interface AnnotationProps {
  text: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  color?: 'orange' | 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  className?: string;
  withArrow?: boolean;
  fontSize?: 'sm' | 'base' | 'lg' | 'xl';
}

export const Annotation: React.FC<AnnotationProps> = ({ 
  text, 
  position = 'top', 
  color = 'orange',
  className = '', 
  withArrow = true,
  fontSize = 'base'
}) => {
  const positionClasses = {
    top: '-top-10 left-1/2 transform -translate-x-1/2',
    right: 'top-1/2 -right-40 transform -translate-y-1/2',
    bottom: '-bottom-10 left-1/2 transform -translate-x-1/2',
    left: 'top-1/2 -left-40 transform -translate-y-1/2',
  };

  const arrowClasses = {
    top: 'bottom-0 left-1/2 transform -translate-x-1/2 rotate-180',
    right: 'left-0 top-1/2 transform -translate-y-1/2 -rotate-90',
    bottom: 'top-0 left-1/2 transform -translate-x-1/2',
    left: 'right-0 top-1/2 transform -translate-y-1/2 rotate-90',
  };

  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`absolute z-10 ${positionClasses[position]} whitespace-nowrap`}>
        <span className={`font-handwritten ${sizeClasses[fontSize]} text-annotation-${color} transform -rotate-3`}>
          {text}
          {withArrow && (
            <svg className={`w-6 h-6 absolute ${arrowClasses[position]} text-annotation-${color} fill-current`} viewBox="0 0 24 24">
              <path d="M12 2L4 10h5v12h6V10h5L12 2z" />
            </svg>
          )}
        </span>
      </div>
      <slot></slot>
    </div>
  );
};

interface HandDrawnUnderlineProps {
  color?: 'orange' | 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  width?: 'full' | 'auto';
  className?: string;
}

export const HandDrawnUnderline: React.FC<HandDrawnUnderlineProps> = ({ 
  color = 'yellow',
  width = 'auto',
  className = ''
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`absolute bottom-0 left-0 h-1 bg-annotation-${color} rounded-full ${width === 'full' ? 'w-full' : 'w-[80%] mx-[10%]'} opacity-60`} 
        style={{ transform: 'rotate(-0.5deg)' }}></div>
      <slot></slot>
    </div>
  );
};

interface HighlightedTextProps {
  children: React.ReactNode;
  color?: 'orange' | 'blue' | 'green' | 'yellow' | 'red' | 'purple';
  className?: string;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({ 
  children, 
  color = 'yellow',
  className = ''
}) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`relative z-10`}>{children}</span>
      <span className={`absolute bottom-0 left-0 right-0 h-3 bg-annotation-${color} opacity-20 transform rotate-[-0.5deg]`}></span>
    </span>
  );
};
