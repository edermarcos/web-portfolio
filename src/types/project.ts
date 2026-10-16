export type ProjectStatus = 'completed' | 'design' | 'in-progress';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  yearStart: number;
  yearEnd: number;
  technologies: string[];
  images: {
    src: string;
    alt: string;
  }[];
  link?: string;
  featured: boolean;
}

export interface ProjectFiltersProps {
  years: number[];
  technologies: string[];
}
