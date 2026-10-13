import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'intranet',
    title: 'Intranet',
    description:
      'Aplicación web concebida para gestionar datos de empleados y controlar solicitudes de vacaciones y permisos. La incorporación de módulos adicionales la convirtió en una herramienta versátil que aborda diversas necesidades empresariales, desde la administración de recursos humanos hasta funciones más allá de la gestión de datos.',
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
    link: '#',
    featured: true,
  },
];
