export interface ExperienceProject {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  images: {
    src: string;
    alt: string;
  }[];
  featured: boolean;
}
