import type { PersonalInfo, Project, SkillCategory, StatItem, ProcessStep, SocialLink } from '../types/portfolio'

/**
 * =========================================================================
 * NILESH BAGUL — CENTRAL CONFIGURATION & PORTFOLIO DATA
 * =========================================================================
 * You can customize all your personal information, links, projects, and skills
 * directly in this file without modifying any UI components.
 */

export const personalInfo: PersonalInfo = {
  name: 'Nilesh Bagul',
  initials: 'NB',
  badge: 'ASPIRING DEVOPS ENGINEER',
  tagline: {
    start: 'I build digital products that solve ',
    highlight: 'real problems.',
  },
  heroBio: 'AI-assisted developer passionate about building modern web applications, practical digital products and meaningful solutions.',
  aboutBio: "I'm Nilesh Bagul, an aspiring DevOps Engineer and AI-assisted developer focused on building practical digital products. I enjoy turning ideas into functional web experiences, experimenting with modern AI tools, and continuously learning cloud and DevOps technologies.",
  aboutExtendedBio: [
    'My journey is fueled by curiosity about how software delivers tangible value to people and communities.',
    'Rather than focusing on theoretical concepts alone, I build hands-on applications—from civic reporting tools to environmental advocacy platforms. I actively leverage modern AI workflows to accelerate design-to-deployment while diving deep into Linux, system infrastructure, and automation pipelines.',
    'I believe that great software is grounded in empathy, simplicity, and rock-solid reliability.'
  ],
  // Configurable email address (safe from raw scraper harvesting)
  email: 'nileshbagul.dev@gmail.com',
  portraitImage: '',
  portraitAlt: 'Nilesh Bagul — Aspiring DevOps Engineer and AI-assisted Developer',
  location: 'India',
  availability: 'Open to Opportunities',
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/nileshbagul',
    ariaLabel: 'Nilesh Bagul on GitHub (opens in new tab)',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nileshbagul',
    ariaLabel: 'Nilesh Bagul on LinkedIn (opens in new tab)',
    icon: 'linkedin',
  },
]

export const stats: StatItem[] = [
  {
    value: '03+',
    label: 'Projects',
    sublabel: 'Shipped & Maintained',
  },
  {
    value: 'WEB',
    label: 'Development',
    sublabel: 'Modern Frontend & UI',
  },
  {
    value: 'CLOUD',
    label: '& Deployment',
    sublabel: 'Firebase & Vercel Stacks',
  },
  {
    value: 'AI',
    label: 'Assisted Development',
    sublabel: 'Accelerated Product Delivery',
  },
]

export const projects: Project[] = [
  {
    id: 'roadtok',
    title: 'RoadTok',
    category: 'Road & Civic Technology',
    description: 'A road and pothole reporting platform designed to make local road problems easier to report and visualize.',
    longDescription: 'RoadTok bridges the communication gap between everyday commuters and municipal road maintenance. Using geospatial mapping and instant image reporting, citizens can log road hazards and pothole clusters in seconds. The platform provides localized status tracking and clean spatial data visualization.',
    image: '/images/roadtok.svg',
    imageAlt: 'RoadTok road hazard and pothole reporting platform visual interface',
    technologies: ['Firebase', 'Firestore', 'JavaScript', 'Google Maps API', 'Vercel'],
    liveUrl: 'https://roadtok.vercel.app',
    githubUrl: 'https://github.com/nileshbagul/roadtok',
    highlights: [
      'Interactive geospatial pinpoints and coordinate clustering with Google Maps API',
      'Real-time pothole submission database synced with Cloud Firestore',
      'Mobile-optimized photo submission for fast field reporting',
      'Automated deployment pipelines configured on Vercel'
    ],
    featured: true,
  },
  {
    id: 'save-sahyadri',
    title: 'SAVE SAHYADRI',
    category: 'Environmental Awareness',
    description: 'A digital awareness platform focused on the conservation of the Sahyadri region and public participation.',
    longDescription: 'The Western Ghats (Sahyadri) are one of the world’s eight hottest biodiversity hotspots. SAVE SAHYADRI serves as an educational and mobilization hub to highlight ecological threats, track grassroots conservation initiatives, and engage nature enthusiasts in ethical trekking and ecosystem protection.',
    image: '/images/sahyadri.svg',
    imageAlt: 'SAVE SAHYADRI environmental conservation platform visual interface',
    technologies: ['Web', 'Firebase', 'Interactive UI', 'Deployment'],
    liveUrl: 'https://savesahyadri.org',
    githubUrl: 'https://github.com/nileshbagul/save-sahyadri',
    highlights: [
      'Interactive ecological storytelling and biodiversity exploration modules',
      'Community participation forms for reporting illegal dumping or forest degradation',
      'Zero-latency content delivery backed by Firebase hosting infrastructure',
      'Clean typography and earth-conscious visual hierarchy'
    ],
    featured: true,
  },
  {
    id: 'quitzz',
    title: 'Quitzz',
    category: 'Health & Lifestyle App',
    description: 'A modern smoke-free journey application designed around motivation, progress tracking and interactive experiences.',
    longDescription: 'Quitzz transforms smoking cessation into a measurable, rewarding, and supportive journey. By combining milestone achievements, financial savings calculators, and physiological recovery timelines with intelligent streak monitoring, it keeps users engaged during crucial habit transitions.',
    image: '/images/quitzz.svg',
    imageAlt: 'Quitzz smoke-free lifestyle progress tracking visual dashboard',
    technologies: ['Firebase', 'AI', 'JavaScript', 'App UI'],
    liveUrl: 'https://quitzz-app.web.app',
    githubUrl: 'https://github.com/nileshbagul/quitzz',
    highlights: [
      'Dynamic health recovery milestones calculated from cessation timestamp',
      'Real-time financial savings calculator based on custom consumption metrics',
      'AI-assisted motivational prompts and craving relapse intervention tips',
      'Cross-device authentication and profile persistence via Firebase Auth & Firestore'
    ],
    featured: true,
  },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Development',
    iconName: 'Code2',
    skills: ['JavaScript', 'React', 'HTML', 'CSS'],
    note: 'Core web architecture, modern frontend frameworks, and responsive design systems.'
  },
  {
    category: 'Cloud & Deployment',
    iconName: 'Cloud',
    skills: ['Firebase', 'Firestore', 'Vercel', 'Git'],
    note: 'Serverless backends, continuous deployment, version control, and production hosting.'
  },
  {
    category: 'AI Tools',
    iconName: 'Cpu',
    skills: ['Antigravity', 'Gemini', 'ChatGPT', 'Claude'],
    note: 'Advanced prompt architecture, AI-assisted coding, automated scaffolding, and workflow optimization.'
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand the problem, audience and objective.',
  },
  {
    step: '02',
    title: 'Build',
    description: 'Turn the idea into a functional digital product using modern tools.',
  },
  {
    step: '03',
    title: 'Improve',
    description: 'Test, refine, deploy and continuously improve the product.',
  },
]

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]
