
import React from 'react';

export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  date: string;
  description: string[];
  icon: () => React.ReactNode;
  iconBackground: string;
  imageSrc?: string;
  imageAlt?: string;
}
