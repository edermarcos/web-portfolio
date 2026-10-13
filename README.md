# Portafolio — Eder Marcos

Sitio personal desarrollado con Astro. Esta guía resume las tecnologías, los requisitos y los comandos para trabajar en el proyecto, incluyendo la adaptación de la experiencia para dispositivos móviles.

## Tecnologías

- [Astro](https://astro.build/) 6
- TypeScript para los datos y tipos del proyecto
- CSS para estilos globales y estilos por componente
- npm para la gestión de dependencias

## Requisitos

- **Node.js**: `22.12.0` o superior
- **npm**: incluido con Node.js

Si usas `nvm`, puedes instalar y activar Node.js así:

```bash
nvm install 22.12.0
nvm use 22.12.0
```

## Instalación

Desde la raíz del proyecto:

```bash
npm ci
```

`npm ci` instala las dependencias definidas en `package-lock.json`.

## Desarrollo

```bash
npm run dev
```

Astro inicia el servidor local en `http://localhost:4321`.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el sitio para producción en `dist/` |
| `npm run preview` | Previsualiza localmente la compilación |
| `npm run astro -- --help` | Muestra la ayuda de Astro CLI |

## Estructura del proyecto

```text
/
├── public/              # Archivos estáticos, favicon y CV
├── src/
│   ├── components/      # Secciones del portafolio y sus estilos
│   ├── data/            # Datos de proyectos y experiencia
│   ├── pages/           # Páginas y rutas de Astro
│   ├── styles/          # Estilos globales
│   └── types/           # Tipos compartidos
├── astro.config.mjs
└── package.json
```

La página principal se compone en `src/pages/index.astro`. Los componentes visuales están en `src/components/`; sus estilos específicos se mantienen junto a cada componente.

## Adaptación móvil

Para continuar el trabajo en la versión móvil:

- Mantén los estilos globales compartidos en `src/styles/global.css`.
- Añade los ajustes de cada sección en su hoja de estilos dentro de `src/components/`.
- Usa media queries para adaptar distribución, espaciado y controles a pantallas pequeñas.
- Verifica la navegación y las secciones en distintos anchos de pantalla, además de revisar la página en escritorio.

## Convención de commits

Usa **Conventional Commits** con una descripción breve en modo imperativo:

```text
tipo: descripción breve
```

Tipos habituales:

- `feat`: nueva funcionalidad
- `fix`: corrección de un error
- `docs`: documentación
- `style`: cambios de formato o estilos sin cambios de lógica
- `refactor`: refactorización
- `test`: pruebas
- `chore`: mantenimiento, dependencias o configuración

Ejemplos:

```text
feat: adaptar navegación a móviles
fix: corregir espaciado en la vista móvil
docs: actualizar guía de instalación
```

## Flujo de trabajo

- No hagas commits directamente en `main` o `qa`.
- Usa ramas con prefijo `feature/`, `release/` o `hotfix/`, según corresponda.
- Sincroniza los cambios con `git pull` antes de crear una rama nueva.
