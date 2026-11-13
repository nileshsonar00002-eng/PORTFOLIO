import React from 'react'
import type { Project } from '../types/portfolio'
import { ArrowRight, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article
      className="group relative flex flex-col bg-[#181818] border border-[#292929] hover:border-[#403B37] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/40"
    >
      {/* Top Media Area with Subtle Dark Overlay and Zoom */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#141414] border-b border-[#292929]">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        {/* Subtle Dark Overlay */}
        <div
          className="absolute inset-0 bg-[#0D0D0D]/25 group-hover:bg-[#0D0D0D]/10 transition-colors pointer-events-none"
          aria-hidden="true"
        />

        {/* Category Pill on Image */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded bg-[#0D0D0D]/90 backdrop-blur-sm border border-[#292929] text-[11px] font-mono tracking-wider text-[#A7A29A] uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47B52]" aria-hidden="true" />
            <span>{project.category}</span>
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between">
        <div>
          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F4F1EA] group-hover:text-[#FFFFFF] transition-colors mb-2.5">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#A7A29A] leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-[11px] font-mono tracking-wide text-[#A7A29A] bg-[#141414] border border-[#292929]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 border-t border-[#292929] flex items-center justify-between gap-4">
          {/* Primary View Project Action */}
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#F4F1EA] hover:text-[#C47B52] transition-colors focus-visible:ring-2 focus-visible:ring-[#C47B52] rounded py-1"
          >
            <span>View Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C47B52] group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          {/* External Live Site Link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live site for ${project.title} (opens in new tab)`}
              className="inline-flex items-center space-x-1 text-xs font-medium text-[#77736D] hover:text-[#F4F1EA] transition-colors py-1 focus-visible:ring-2 focus-visible:ring-[#C47B52] rounded"
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
