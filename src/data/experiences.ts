import type { ExperienceProject } from '../types/experience';

export const experiences: ExperienceProject[] = [
  {
    id: 'bimbo',
    company: 'Bimbo',
    role: 'Desarrollador Full-Stack',
    period: 'Dic 2023 — Presente',
    description:
      'Durante mi estancia en la empresa, estuve a cargo de proyectos como Issue Tracker, Portal Proxy, Portal RS entre otros en donde fui encargado de implementar las mejoras solicitadas por los Product Managers asi como la solucion de bugs. Tambien participe en otros proyectos junto con el equipo mobile para proyectos como chambitas, Portal T-Conecta y fui encargado del backend dentro del equipo web que estuvo bajo la tecnologia de Nest.js',
    technologies: ['Nest.js', 'React', 'TypeScript', 'Node.js'],
    images: [
      { src: '/projects/bimbo/dashboard.png', alt: 'Dashboard de Bimbo' },
      { src: '/projects/bimbo/portal.png', alt: 'Portal de Bimbo' },
    ],
    featured: true,
  },
  {
    id: 'mobiik',
    company: 'Mobiik',
    role: 'Desarrollador Front-End',
    period: 'Sep 2023 — Dic 2023',
    description:
      'Se creo un microfront para el banco Monex que basicamente mostraba los forwards que un usuario tiene disponible, asi como la opcion de ejercerlos. El microfront estaba diseñado para conectarse con una intranet de monex que estaba bajo la misma tecnologia.',
    technologies: ['React', 'TypeScript', 'Micro Frontends'],
    images: [{ src: '/projects/mobiik/forwards.png', alt: 'Sistema de forwards Monex' }],
    featured: true,
  },
  {
    id: 'inetum',
    company: 'Inetum',
    role: 'Desarrollador Front-End',
    period: 'Mar 2023 — Ago 2023',
    description:
      'Participé en el desarrollo de una aplicación para Walmart llamada "PAS". Este proyecto fue una migracion de una aplicacion de escritorio, y funcionaba para poder visualizar datos de ventas de las diferentes sucursales de walmart, ver reportes, incluso habia relacion con CFE para temas de consumo electrico.',
    technologies: ['Angular', 'TypeScript', 'RxJS'],
    images: [{ src: '/projects/inetum/pas-dashboard.png', alt: 'Dashboard PAS Walmart' }],
    featured: true,
  },
  {
    id: 'softtek',
    company: 'Softtek',
    role: 'Desarrollador Angular',
    period: 'May 2022 — Mar 2023',
    description:
      'Colaboré en un proyecto para PPG donde se realizó la migración de una aplicación de escritorio a tecnologías web. Dicha aplicación estaba destinada a gestionar información de productos internos, incluyendo pinturas, distribuidores y comparación de productos, etc.',
    technologies: ['Angular', 'TypeScript', 'Material UI'],
    images: [{ src: '/projects/softtek/ppg-products.png', alt: 'Sistema de gestión de productos PPG' }],
    featured: false,
  },
  {
    id: 'hitss',
    company: 'Hitss Corporativo',
    role: 'Desarrollador Angular',
    period: 'Sep 2021 — May 2022',
    description:
      'Trabajé en una aplicación para Telmex denominada "Canales Externos", cuyo propósito principal era generar folios para la contratación del servicio de internet. Además, ofrecía la opción de añadir servicios de entretenimiento como Netflix, Disney Plus y HBO Max',
    technologies: ['Angular', 'TypeScript', 'REST APIs'],
    images: [{ src: '/projects/hitss/canales-externos.png', alt: 'Generador de folios Telmex' }],
    featured: false,
  },
  {
    id: 'mtech',
    company: 'MTech Systems',
    role: 'Desarrollador Full-Stack',
    period: 'Feb 2018 — Sep 2021',
    description:
      'Participé en diversos proyectos destacando la elaboración de una intranet para gestionar información de empleados, incluyendo vacaciones, permisos y faltas. Formé parte del equipo Amino, software para administración de granjas enfocado a empresas como Bachoco y Pilgrims. Lideré la creación de aplicación web interna con Node.js, Express, JWT, RethinkDB y Socket.io. Desarrollé aplicación híbrida en Ionic 3 para administración de eventos. Construcción de página web corporativa en Angular.',
    technologies: ['Node.js', 'Express', 'Angular', 'Ionic', 'RethinkDB', 'Socket.io', 'JWT'],
    images: [
      { src: 'https://imgur.com/mrczxUj.png', alt: 'Dashboard Amino' },
      { src: '/projects/mtech/intranet.png', alt: 'Intranet de empleados' },
    ],
    featured: false,
  },
];

