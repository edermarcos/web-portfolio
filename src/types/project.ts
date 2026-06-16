export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: {
    src: string;
    alt: string;
  }[];
  link?: string;
  featured: boolean;
}

