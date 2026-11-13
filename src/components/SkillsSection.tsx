import React from 'react'
import { skillCategories } from '../data/portfolioData'
import { Code2, Cloud, Cpu, Compass } from 'lucide-react'
import { TechIcon } from './TechIcon'

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[var(--accent-copper)]" />
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[var(--accent-copper)]" />
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[var(--accent-copper)]" />
      case 'Compass':
        return <Compass className="w-5 h-5 text-[var(--accent-copper)]" />
      default:
        return <Code2 className="w-5 h-5 text-[var(--accent-copper)]" />
    }
  }

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 lg:py-28 bg-[var(--bg-base)] border-b border-[var(--border-subtle)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
              Capabilities
            </span>
          </div>

          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-3"
          >
            Skills
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl">
            Practical competencies across web development, cloud hosting, and AI-assisted engineering.
          </p>
        </div>

        {/* 3 Clean Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group flex flex-col justify-between bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] group-hover:border-[var(--accent-copper)]/40 transition-colors shadow-xs">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)]">
                    {category.skills.length} ITEMS
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {category.category}
                </h3>

                {category.note && (
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-6">
                    {category.note}
                  </p>
                )}
              </div>

              {/* Skills Badges with Official Brand Icons */}
              <div className="flex flex-wrap gap-2.5 pt-3 border-t border-[var(--border-subtle)]">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center space-x-2.5 px-3.5 py-2 rounded-lg text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-copper)]/50 hover:bg-[var(--bg-hover)] transition-all group/badge"
                  >
                    <TechIcon name={skill} className="w-4 h-4 flex-shrink-0 transition-transform group-hover/badge:scale-110" />
                    <span className="tracking-wide">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
