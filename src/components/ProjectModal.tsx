import React, { useEffect } from 'react'
import type { Project } from '../types/portfolio'
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react'
import { SocialIcon } from './SocialIcons'
import { TechIcon } from './TechIcon'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0D0D0D]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#141414] border border-[#292929] rounded-xl shadow-2xl p-6 sm:p-8 text-[#F4F1EA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md bg-[#181818] border border-[#292929] text-[#A7A29A] hover:text-[#FFFFFF] hover:border-[#C47B52] transition-colors focus-visible:ring-2 focus-visible:ring-[#C47B52]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#C47B52] mb-2">
          <span>{project.category}</span>
        </div>
        <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          {project.title}
        </h2>

        {/* Project Visual Media */}
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#292929] mb-6 bg-[#181818]">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detailed Narrative */}
        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#A7A29A]">
            Overview &amp; Purpose
          </h3>
          <p className="text-base text-[#F4F1EA] leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#A7A29A] mb-3">
              Key Technical Features
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start space-x-2.5 text-sm text-[#A7A29A]">
                  <CheckCircle2 className="w-4 h-4 text-[#C47B52] mt-0.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies Used */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#77736D] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#C47B52]" />
            <span>Technologies &amp; Tools</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-mono bg-[#181818] border border-[#292929] text-[#F4F1EA]"
              >
                <TechIcon name={tech} className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#292929]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-[#C47B52] hover:bg-[#D28A5C] text-[#FFFFFF] text-sm font-semibold tracking-wide transition-colors focus-visible:ring-2 focus-visible:ring-[#C47B52]"
            >
              <span>Visit Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-[#181818] hover:bg-[#1E1C1A] text-[#F4F1EA] border border-[#292929] hover:border-[#77736D] text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-[#C47B52]"
            >
              <SocialIcon type="github" className="w-4 h-4 text-[#A7A29A]" />
              <span>Source Repository</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
