import type { ExperienceProject } from '../types/experience';

export const experiences: ExperienceProject[] = [
  {
    id: 'bimbo',
    company: 'Bimbo',
    role: 'Desarrollador Full-Stack',
    period: 'Dic 2023 — Presente',
    description:
      'Refactoricé portales corporativos y participé en la arquitectura de APIs y plataformas internas con Angular y Node.js. Construí Intrahub, utilizada por más de 5,000 empleados en México y Colombia, con expansión en curso a Ecuador y España. Diseñé el Portal Proxy y una API centralizada para aplicaciones de T-Conecta; también contribuí a Portal RS, Issue Tracker y la continuidad de Chambitas Web.',
    technologies: ['Angular', 'Node.js'],
    images: [],
    featured: true,
  },
  {
    id: 'mobiik',
    company: 'Mobiik (cliente: Banco Monex)',
    role: 'Desarrollador Front-End',
    period: 'Sep 2023 — Dic 2023',
    description:
      'Construí un microfrontend bancario con Module Federation en Angular para consultar y ejercer forwards, integrado a la intranet de Monex. Implementé pruebas unitarias, análisis de calidad con Kiuwan y soporte para múltiples entornos y despliegues CI/CD en GitHub.',
    technologies: ['Angular', 'Module Federation', 'Kiuwan', 'CI/CD'],
    images: [],
    featured: true,
  },
  {
    id: 'inetum',
    company: 'Inetum (cliente: Walmart México)',
    role: 'Desarrollador Front-End',
    period: 'Mar 2023 — Ago 2023',
    description:
      'Migré PAS de una aplicación de escritorio a web con React para consultar ventas nacionales, reportes por sucursal y consumo eléctrico. Mejoré el rendimiento con react-window y AG Grid, incluida la exportación a Excel; desarrollé componentes reutilizables, rediseñé formularios con Material UI y estandaricé la integración de APIs REST con Axios.',
    technologies: ['React', 'AG Grid', 'react-window', 'Material UI', 'Axios'],
    images: [],
    featured: true,
  },
  {
    id: 'softtek',
    company: 'Softtek (cliente: PPG)',
    role: 'Desarrollador Angular',
    period: 'May 2022 — Mar 2023',
    description:
      'Participé en la migración a web de una aplicación de escritorio para gestionar productos, pinturas y distribuidores. Integré servicios backend en .NET mediante Observables y NgRx, incorporé funciones con Material UI y refactoricé flujos incompletos y errores de interfaz.',
    technologies: ['Angular', '.NET', 'Observables', 'NgRx', 'Material UI'],
    images: [],
    featured: true,
  },
  {
    id: 'hitss',
    company: 'Hitss Corporativo (cliente: Telmex)',
    role: 'Desarrollador Angular',
    period: 'Sep 2021 — May 2022',
    description:
      'Desarrollé Canales Externos, una aplicación para generar folios de contratación de internet y agregar servicios de entretenimiento. Mejoré su experiencia móvil con Bootstrap 4 y SCSS, creé componentes reutilizables, propuse soluciones para sesiones y tokens, y realicé pruebas manuales de los flujos.',
    technologies: ['Angular', 'Bootstrap 4', 'SCSS'],
    images: [],
    featured: false,
  },
  {
    id: 'mtech',
    company: 'MTech Systems',
    role: 'Desarrollador Full-Stack',
    period: 'Feb 2018 — Sep 2021',
    description:
      'Lideré el diseño y desarrollo del frontend Angular para Amino, software de administración de granjas utilizado por empresas como Bachoco y Pilgrim’s. También desarrollé una intranet para cerca de 50 empleados, con backend en Node.js, Express, JWT, RethinkDB y Socket.io en tiempo real; una aplicación de eventos en Ionic 3 y el sitio corporativo en Angular.',
    technologies: ['Angular', 'Node.js', 'Express', 'JWT', 'RethinkDB', 'Socket.io', 'Ionic'],
    images: [],
    featured: false,
  },
];
