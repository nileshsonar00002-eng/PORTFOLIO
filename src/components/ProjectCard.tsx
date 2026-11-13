import React from 'react'
import type { Project } from '../types/portfolio'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { TechIcon } from './TechIcon'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      className="group relative flex flex-col bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-lg"
    >
      {/* Top Media Area with Subtle Overlay and Zoom */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--bg-surface)] border-b border-[var(--border-subtle)]">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        {/* Subtle Overlay */}
        <div
          className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors pointer-events-none"
          aria-hidden="true"
        />

        {/* Category Pill on Image */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[var(--bg-card)]/95 backdrop-blur-sm border border-[var(--border-subtle)] text-[11px] font-mono tracking-wider text-[var(--text-secondary)] uppercase font-semibold shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)]" aria-hidden="true" />
            <span>{project.category}</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between">
        <div>
          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-copper)] transition-colors mb-2.5">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Technology Tags with Icons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide text-[var(--text-secondary)] bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
              >
                <TechIcon name={tech} className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-4">
          {/* Primary View Project Action */}
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent-copper)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)] rounded py-1"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-copper)] group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          {/* External Live Site Link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live site for ${project.title} (opens in new tab)`}
              className="inline-flex items-center space-x-1 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors py-1 focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)] rounded"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
