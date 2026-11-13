# Nilesh Bagul — Premium Personal Portfolio

A professional, minimal, and elegant personal brand portfolio engineered with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed specifically for recruiters, clients, and high-impact professional networking.

---

## 🎨 Color System

- **Background:** `#0D0D0D`
- **Secondary Background:** `#141414`
- **Card Background:** `#181818`
- **Borders:** `#292929`
- **Primary Text:** `#F4F1EA`
- **Secondary Text:** `#A7A29A`
- **Muted Text:** `#77736D`
- **Primary Accent (Warm Copper):** `#C47B52`
- **Accent Hover:** `#D28A5C`

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Easy Personalization (`src/data/portfolioData.ts`)

All personal information, projects, skills, links, and content are managed centrally in `src/data/portfolioData.ts`. You do not need to modify any UI components to update your information.

### 1. Replacing Your Portrait Photo

1. Place your photo inside `public/images/` (e.g. `public/images/my-photo.jpg`).
2. Open `src/data/portfolioData.ts` and update `portraitImage`:
   ```ts
   export const personalInfo: PersonalInfo = {
     ...
     portraitImage: '/images/my-photo.jpg',
     portraitAlt: 'Portrait of Nilesh Bagul',
   }
   ```

### 2. Updating Projects

Each project has structured metadata in `projects`:
```ts
{
  id: 'roadtok',
  title: 'RoadTok',
  category: 'Road & Civic Technology',
  description: '...',
  longDescription: '...',
  image: '/images/roadtok.svg',
  technologies: ['Firebase', 'Firestore', 'JavaScript', 'Google Maps API', 'Vercel'],
  liveUrl: 'https://roadtok.vercel.app',
  githubUrl: 'https://github.com/nileshbagul/roadtok',
  highlights: [ ... ],
}
```

### 3. Updating Skills

Organized into 4 clean categories:
- **Development**
- **Cloud & Deployment**
- **AI Tools**
- **Currently Learning**

---

## 🏛️ Project Architecture

```
PORTFOLIO NIL/
├── public/
│   ├── favicon.svg          # Custom "NB" monogram favicon
│   └── images/
│       ├── portrait.svg     # Studio portrait placeholder with copper accents
│       ├── roadtok.svg      # Road & Civic Technology visual mockup
│       ├── sahyadri.svg     # SAVE SAHYADRI environmental conservation visual
│       ├── quitzz.svg       # Quitzz smoke-free tracker visual
│       ├── news.svg         # Mobile-first multilingual news platform visual
│       └── og-preview.svg   # OpenGraph / Twitter social card
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx    # "A little about me" with expandable insights
│   │   ├── ContactModal.tsx    # Interactive message composer & clipboard email
│   │   ├── ContactSection.tsx  # "Have an idea? Let's build something." CTA
│   │   ├── Footer.tsx          # Minimal footer with disclosures & back to top
│   │   ├── Hero.tsx            # Two-column hero with portrait & copper highlights
│   │   ├── LegalModal.tsx      # Privacy Policy & Terms modal
│   │   ├── Navbar.tsx          # Sticky navigation with mobile drawer & active spy
│   │   ├── ProcessSection.tsx  # "How I Build" 3-step engineering process
│   │   ├── ProjectCard.tsx     # Card with subtle zoom, upward lift & copper arrow
│   │   ├── ProjectModal.tsx    # Accessible modal with deep project architecture
│   │   ├── ProjectsSection.tsx # 4 selected projects grid
│   │   ├── SkipLink.tsx        # Accessibility keyboard bypass landmark
│   │   ├── SkillsSection.tsx   # 4 categories without fake percentages
│   │   ├── SocialIcons.tsx     # Crisp, monochrome SVG social icons
│   │   └── StatsSection.tsx    # Horizontal stats (04+ Projects, Web, Cloud, AI)
│   ├── data/
│   │   └── portfolioData.ts    # Central data & configuration file
│   ├── types/
│   │   └── portfolio.ts        # TypeScript interfaces
│   ├── App.tsx                 # Main layout & section orchestrator
│   ├── index.css               # Tailwind CSS theme & reduced motion styling
│   └── main.tsx                # React 19 entrypoint
├── index.html                  # Semantic head, SEO, OpenGraph & Google Fonts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ♿ Accessibility & Performance

- **WCAG Compliant:** Color contrast adheres to accessibility standards, with high-contrast text `#F4F1EA` against `#0D0D0D`.
- **Keyboard Navigation:** Fully navigable with `Tab` / `Shift+Tab`, visible focus rings (`#C47B52`), and `Escape` key listeners on modals and drawers.
- **Screen Reader Support:** Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), descriptive ARIA labels, and skip link.
- **Motion Preferences:** Strictly respects `prefers-reduced-motion: reduce`.
- **SEO Ready:** OpenGraph, Twitter cards, meta descriptions, semantic headings, and clean canonical placeholders.
