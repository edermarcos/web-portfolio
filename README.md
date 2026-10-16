# Portafolio — Eder Marcos

Sitio personal para presentar proyectos, habilidades, experiencia profesional y formación de Eder Marcos. Está construido con [Astro](https://docs.astro.build/) y CSS; JavaScript ligero gestiona el menú de navegación y los filtros de proyectos por tecnología.

Esta guía resume las tecnologías, los requisitos, los scripts y el flujo de trabajo del proyecto.

## 🧰 Tecnologías utilizadas

### Frontend

- [Astro 6](https://docs.astro.build/)
- TypeScript con la configuración estricta recomendada por Astro
- CSS global y hojas de estilo junto a los componentes
- Componentes Astro sin framework de UI adicional

### SEO y contenido

- La página principal define el idioma español, el título, el viewport y los iconos del sitio.
- No hay integraciones de sitemap, `robots.txt` ni datos estructurados configuradas actualmente.
- El contenido de proyectos y experiencia se mantiene en `src/data/`; sus tipos compartidos están en `src/types/`.
- Los recursos estáticos, como los iconos y el CV, se sirven desde `public/`. Las imágenes de proyectos se referencian desde los datos.

### Calidad de código

- ESLint con reglas para JavaScript, TypeScript y Astro
- Prettier con `prettier-plugin-astro`
- No hay un runner de pruebas configurado actualmente.

### Git y flujo de trabajo

- Husky ejecuta `lint-staged` antes de cada commit: ESLint y Prettier para archivos de código, y Prettier para CSS, JSON y Markdown.
- Commitlint valida los mensajes según Conventional Commits.
- Los hooks se preparan al instalar las dependencias mediante `npm ci`.

## 🧱 Requisitos

- **Node.js:** `22.22.3` o superior
- **npm:** incluido con Node.js
- **Astro:** se instala como dependencia del proyecto; no requiere CLI global

Verifica las versiones locales:

```bash
node -v
npm -v
npx astro --version
```

Si utilizas `nvm`:

```bash
nvm install 22.22.3
nvm use 22.22.3
node -v
```

## 📦 Instalación

Desde la raíz del proyecto, instala las dependencias reproducibles con:

```bash
npm ci
```

La instalación ejecuta el script `prepare` para configurar Husky.

## ▶️ Levantar el proyecto

Inicia el servidor de desarrollo:

```bash
npm run dev
```

El sitio queda disponible en <http://localhost:4321>.

### Scripts habituales

| Comando                   | Descripción                                                     |
| ------------------------- | --------------------------------------------------------------- |
| `npm run dev`             | Inicia el servidor de desarrollo                                |
| `npm run build`           | Genera el sitio de producción en `dist/`                        |
| `npm run preview`         | Sirve localmente el build de producción                         |
| `npm run astro -- --help` | Muestra la ayuda de Astro CLI                                   |
| `npm run lint`            | Ejecuta ESLint                                                  |
| `npm run lint:fix`        | Corrige automáticamente los problemas que ESLint pueda arreglar |
| `npm run format`          | Aplica Prettier a los archivos del proyecto                     |
| `npm run format:check`    | Comprueba el formato sin modificar archivos                     |

## 🌐 Variables de entorno

El proyecto no requiere variables de entorno para instalarse, ejecutarse ni compilarse localmente. Los archivos `.env` están excluidos del repositorio.

## 🗂️ Estructura del proyecto

```text
/
├── public/                  # Archivos estáticos, iconos y CV
├── src/
│   ├── components/          # Secciones Astro y estilos de cada componente
│   ├── data/                # Contenido editable de proyectos y experiencia
│   ├── pages/
│   │   └── index.astro      # Página principal
│   ├── styles/
│   │   └── global.css       # Estilos globales
│   └── types/               # Tipos compartidos
├── .husky/                  # Hooks de pre-commit y validación de commits
├── astro.config.mjs         # Configuración de Astro
├── eslint.config.js          # Configuración de ESLint
├── tsconfig.json             # Configuración estricta de TypeScript
├── package-lock.json         # Versiones reproducibles de dependencias
└── package.json              # Dependencias y scripts
```

## 🧾 Convención de commits

Los mensajes de commit deben seguir [Conventional Commits](https://www.conventionalcommits.org/):

```text
tipo: descripción breve
```

Tipos comunes:

- `feat`: nueva funcionalidad
- `fix`: corrección de un bug
- `docs`: documentación
- `style`: cambios de formato o estilos sin modificar la lógica
- `refactor`: refactorización
- `test`: pruebas
- `chore`: mantenimiento, dependencias o configuración

Ejemplos:

```text
feat: agrega filtros de proyectos
fix: corrige el menú de navegación móvil
docs: actualiza la guía del proyecto
chore: actualiza dependencias
```

Husky ejecuta `lint-staged` sobre los archivos preparados y Commitlint rechaza mensajes que no cumplan la convención.

## 📌 Reglas rápidas

- No hagas commits directamente en `main` o `qa`.
- Usa ramas con prefijo `feature/`, `release/` o `hotfix/`, según corresponda.
- Sincroniza los cambios con `git pull` antes de crear una rama nueva.
- Antes de abrir un pull request, ejecuta `npm run lint`, `npm run format:check` y `npm run build`.
- No incluyas secretos, archivos `.env`, `dist/` ni dependencias instaladas (`node_modules/`) en los commits.

## ✅ Antes de publicar

- Revisa y actualiza el contenido editable en `src/data/`.
- Verifica que las rutas de las imágenes y los recursos públicos existan.
- Ejecuta `npm run lint`, `npm run format:check` y `npm run build`.
- Comprueba el build localmente con `npm run preview`.
