import type { Project, ProjectStatus } from '../types/project';

export const projects: Project[] = [
  {
    id: 'intranet',
    title: 'Intranet',
    description:
      'Intranet desarrollada durante mi etapa en MTech Systems para gestionar información de empleados y solicitudes de vacaciones y permisos. Se amplió con módulos para atender distintas necesidades internas de la empresa.',
    status: 'completed',
    yearStart: 2018,
    yearEnd: 2021,
    technologies: [
      'Angular',
      'Bootstrap 4',
      'Socket.io',
      'SCSS',
      'Node.js',
      'RethinkDB',
      'Express.js',
    ],
    images: [
      { src: 'https://imgur.com/2vS5H0p.png', alt: 'Dashboard de Intranet' },
      { src: 'https://imgur.com/mrczxUj.png', alt: 'Gestión de empleados' },
    ],
    link: '',
    featured: true,
  },
];

export const projectStatuses = [
  { value: 'completed', label: 'Finalizados' },
  { value: 'design', label: 'En diseño' },
  { value: 'in-progress', label: 'En construcción' },
] satisfies { value: ProjectStatus; label: string }[];
