import React, { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import { ArrowRight, ChevronDown, CheckCircle2, Terminal, Shield, Sparkles } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#292929]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#181818] border border-[#292929] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47B52]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A29A]">
              Background
            </span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA]"
          >
            A little about me
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Statement */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <p className="text-lg sm:text-xl text-[#F4F1EA] font-normal leading-relaxed">
              {personalInfo.aboutBio}
            </p>

            {/* Expandable Extended Insights */}
            {isExpanded && (
              <div className="pt-4 flex flex-col space-y-4 border-t border-[#292929] animate-in fade-in duration-300">
                {personalInfo.aboutExtendedBio?.map((paragraph, index) => (
                  <p key={index} className="text-base text-[#A7A29A] leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Core Focus Principles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-lg bg-[#141414] border border-[#292929]">
                    <div className="flex items-center space-x-2 mb-2 text-[#C47B52]">
                      <Terminal className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#F4F1EA]">
                        Hands-On Build
                      </span>
                    </div>
                    <p className="text-xs text-[#A7A29A] leading-normal">
                      Focusing on deployable code, functional user flows, and real-world utility over theory alone.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#141414] border border-[#292929]">
                    <div className="flex items-center space-x-2 mb-2 text-[#C47B52]">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#F4F1EA]">
                        AI Acceleration
                      </span>
                    </div>
                    <p className="text-xs text-[#A7A29A] leading-normal">
                      Leveraging state-of-the-art AI tooling to speed up ideation, prototyping, and testing.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#141414] border border-[#292929]">
                    <div className="flex items-center space-x-2 mb-2 text-[#C47B52]">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#F4F1EA]">
                        Continuous Learning
                      </span>
                    </div>
                    <p className="text-xs text-[#A7A29A] leading-normal">
                      Expanding every week into Linux administration, CI/CD automation, and cloud topologies.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Toggle Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-[#181818] hover:bg-[#1E1C1A] text-[#F4F1EA] border border-[#292929] hover:border-[#C47B52]/60 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-[#C47B52] group"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? 'Show Less' : 'Know More'}</span>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-[#C47B52] rotate-180 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-[#C47B52] group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Facts Sidebar Card */}
          <div className="lg:col-span-4 bg-[#141414] rounded-xl border border-[#292929] p-6 lg:p-7">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#77736D] mb-5">
              Personal Snapshot
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#C47B52] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-[#77736D] block">Primary Focus</span>
                  <span className="text-sm font-semibold text-[#F4F1EA]">
                    DevOps Pipelines &amp; Modern Web
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#C47B52] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-[#77736D] block">Methodology</span>
                  <span className="text-sm font-semibold text-[#F4F1EA]">
                    AI-Assisted Fast Prototyping
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#C47B52] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-[#77736D] block">Learning Path</span>
                  <span className="text-sm font-semibold text-[#F4F1EA]">
                    Linux, Docker, CI/CD &amp; Cloud Infra
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[#C47B52] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-[#77736D] block">Availability</span>
                  <span className="text-sm font-semibold text-[#C47B52]">
                    Open to Collaborations &amp; Roles
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#292929]">
              <span className="text-xs text-[#77736D] block mb-1">Location</span>
              <span className="text-sm text-[#A7A29A]">India • Remote-ready</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
