import React from 'react'
import { skillCategories } from '../data/portfolioData'
import { Code2, Cloud, Cpu, Compass } from 'lucide-react'

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#C47B52]" />
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#C47B52]" />
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#C47B52]" />
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C47B52]" />
      default:
        return <Code2 className="w-5 h-5 text-[#C47B52]" />
    }
  }

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 lg:py-28 bg-[#141414] border-b border-[#292929]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#181818] border border-[#292929] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47B52]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A29A]">
              Capabilities
            </span>
          </div>

          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA] mb-3"
          >
            Skills
          </h2>

          <p className="text-base sm:text-lg text-[#A7A29A] max-w-2xl">
            Practical competencies across web development, cloud hosting, AI-assisted engineering and modern DevOps.
          </p>
        </div>

        {/* 3 Clean Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="group flex flex-col justify-between bg-[#181818] border border-[#292929] hover:border-[#3D3D3D] rounded-lg p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-md bg-[#141414] border border-[#292929] group-hover:border-[#C47B52]/40 transition-colors">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#77736D]">
                    {category.skills.length} ITEMS
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F4F1EA] mb-2">
                  {category.category}
                </h3>

                {category.note && (
                  <p className="text-xs text-[#77736D] leading-relaxed mb-6">
                    {category.note}
                  </p>
                )}
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#242424]">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#F4F1EA] bg-[#141414] border border-[#292929] group-hover:border-[#333333] transition-colors"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C47B52]" aria-hidden="true" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
