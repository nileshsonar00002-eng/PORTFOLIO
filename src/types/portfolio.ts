export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription?: string
  image: string
  imageAlt: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  highlights?: string[]
  featured?: boolean
}

export interface SkillCategory {
  category: string
  iconName: string
  skills: string[]
  note?: string
}

export interface StatItem {
  value: string
  label: string
  sublabel?: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface SocialLink {
  name: string
  url: string
  ariaLabel: string
  icon: 'github' | 'linkedin' | 'youtube' | 'x'
}

export interface PersonalInfo {
  name: string
  initials: string
  badge: string
  tagline: {
    start: string
    highlight: string
    end?: string
  }
  heroBio: string
  aboutBio: string
  aboutExtendedBio?: string[]
  email: string
  portraitImage: string
  portraitAlt: string
  location?: string
  availability?: string
}
