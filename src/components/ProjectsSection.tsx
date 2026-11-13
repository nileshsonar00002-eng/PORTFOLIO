import React, { useState } from 'react'
import { projects } from '../data/portfolioData'
import type { Project } from '../types/portfolio'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#292929]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#181818] border border-[#292929] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47B52]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A29A]">
              Portfolio
            </span>
          </div>

          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA] mb-3"
          >
            Selected Projects
          </h2>

          <p className="text-base sm:text-lg text-[#A7A29A] max-w-2xl">
            A collection of digital products and platforms I've built.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Project Detail Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
