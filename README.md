# Portfolio Personal — Maria de Fatima Perez

> [Español](#español) | [English](#english)

---

## Español

Sitio web de portafolio personal que contiene un perfil dual como **Desarrollador Full Stack** y **Especialista en Ciberseguridad**, con soporte bilingüe (Español / English) y animaciones interactivas.

### Caracteristicas

- **Perfil dual** — Alterna entre la vista de Full Stack y Ciberseguridad con transiciones animadas
- **Bilingue** — Cambio de idioma Español / Ingles en tiempo real via Context API
- **Animaciones** — Transiciones fluidas con Framer Motion y fondo de estrellas animado (Canvas API)
- **Responsive** — Diseno adaptado para movil y escritorio
- **SEO** — Meta etiquetas dinamicas por ruta con React Helmet Async
- **Enrutamiento hash** — Compatible con GitHub Pages y hosting estatico

### Tech Stack

| Categoria | Tecnologia |
|-----------|------------|
| Framework | React 19 |
| Build tool | Vite 8 |
| Estilos | Tailwind CSS 3 |
| Animaciones | Framer Motion 12 |
| Enrutamiento | React Router DOM 7 |
| i18n | React Context API (custom) |
| Meta tags | React Helmet Async |
| Linting | ESLint 9 |

### Inicio rapido

**Requisitos**

- Node.js >= 18
- npm >= 9

**Instalacion**

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio.git
# Instalar dependencias
npm install
# Levantar servidor de desarrollo
npm run dev
```

La aplicacion estara disponible en `http://localhost:5173`.

### Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Bundle de produccion en /dist
npm run preview   # Vista previa del build de produccion
npm run lint      # Analisis estatico con ESLint
```

### Despliegue

El proyecto esta configurado con `base: './'` en Vite para ser compatible con **GitHub Pages** y cualquier hosting estatico.

```bash
# Generar build de produccion
npm run build

# El contenido de /dist puede subirse directamente a GitHub Pages,
# Netlify, Vercel, o cualquier servidor estatico
```

### Personalizacion

**Cambiar textos / traducciones**

Edita los archivos en `src/locales/`:
- `es.js` — Contenido en espanol
- `en.js` — Contenido en ingles

**Cambiar colores**

El tema esta definido en `tailwind.config.js`. La paleta usa tonos configurados como tokens personalizados.

**Agregar un nuevo idioma**

1. Crea `src/locales/fr.js` (o el idioma deseado) con las mismas claves que `es.js`
2. Actualiza `LanguageContext.jsx` para incluir el nuevo idioma

### Licencia

MIT — libre de usar, modificar y distribuir.

---

## English

Personal portfolio website featuring a dual profile as **Full Stack Developer** and **Cybersecurity Specialist**, with bilingual support (Spanish / English) and interactive animations.

### Features

- **Dual profile** — Toggle between Full Stack and Cybersecurity views with animated transitions
- **Bilingual** — Real-time Spanish / English language switch via Context API
- **Animations** — Smooth transitions with Framer Motion and an animated starfield background (Canvas API)
- **Responsive** — Layout adapted for mobile and desktop
- **SEO** — Dynamic meta tags per route with React Helmet Async
- **Hash routing** — Compatible with GitHub Pages and static hosting

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styles | Tailwind CSS 3 |
| Animations | Framer Motion 12 |
| Routing | React Router DOM 7 |
| i18n | React Context API (custom) |
| Meta tags | React Helmet Async |
| Linting | ESLint 9 |

### Quick Start

**Requirements**

- Node.js >= 18
- npm >= 9

**Installation**

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
# Install dependencies
npm install
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

```bash
npm run dev       # Development server with HMR
npm run build     # Production bundle output to /dist
npm run preview   # Preview the production build locally
npm run lint      # Static analysis with ESLint
```

### Deployment

The project is configured with `base: './'` in Vite to be compatible with **GitHub Pages** and any static hosting provider.

```bash
# Generate production build
npm run build

# The /dist contents can be deployed directly to GitHub Pages,
# Netlify, Vercel, or any static server
```

### Customization

**Changing text / translations**

Edit the files in `src/locales/`:
- `es.js` — Spanish content
- `en.js` — English content

**Changing colors**

The theme is defined in `tailwind.config.js`. The palette uses dark violet tones configured as custom tokens.

**Adding a new language**

1. Create `src/locales/fr.js` (or the desired language) with the same keys as `es.js`
2. Update `LanguageContext.jsx` to include the new language

### License

MIT — free to use, modify, and distribute.
