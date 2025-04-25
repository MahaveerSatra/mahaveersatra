
export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  date: string;
  description: string[];
  icon: () => React.ReactNode; // Changed from React.ReactNode to a function returning React.ReactNode
  iconBackground: string;
  imageSrc?: string;
  imageAlt?: string;
}
