import React, { useState } from 'react'
import { personalInfo } from '../data/portfolioData'
import { ArrowRight, ChevronDown, CheckCircle2, Terminal, Shield, Sparkles } from 'lucide-react'

export const AboutSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 lg:py-28 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
              Background
            </span>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            A little about me
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Statement */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <p className="text-lg sm:text-xl text-[var(--text-primary)] font-normal leading-relaxed">
              {personalInfo.aboutBio}
            </p>

            {/* Expandable Extended Insights */}
            {isExpanded && (
              <div className="pt-4 flex flex-col space-y-4 border-t border-[var(--border-subtle)] animate-in fade-in duration-300">
                {personalInfo.aboutExtendedBio?.map((paragraph, index) => (
                  <p key={index} className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Core Focus Principles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xs">
                    <div className="flex items-center space-x-2 mb-2 text-[var(--accent-copper)]">
                      <Terminal className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                        Hands-On Build
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-normal">
                      Focusing on deployable code, functional user flows, and real-world utility over theory alone.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xs">
                    <div className="flex items-center space-x-2 mb-2 text-[var(--accent-copper)]">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                        AI Acceleration
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-normal">
                      Leveraging state-of-the-art AI tooling to speed up ideation, prototyping, and testing.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xs">
                    <div className="flex items-center space-x-2 mb-2 text-[var(--accent-copper)]">
                      <Shield className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                        Continuous Learning
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-normal">
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
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-[var(--bg-card)] hover:bg-[var(--bg-hover)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-copper)]/60 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)] group shadow-xs"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? 'Show Less' : 'Know More'}</span>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-[var(--accent-copper)] rotate-180 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-[var(--accent-copper)] group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Facts Sidebar Card */}
          <div className="lg:col-span-4 bg-[var(--bg-card)] rounded-xl border border-[var(--border-subtle)] p-6 lg:p-7 shadow-xs">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-5">
              Personal Snapshot
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-copper)] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-[var(--text-muted)] block">Primary Focus</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    DevOps Pipelines &amp; Modern Web
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-copper)] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-[var(--text-muted)] block">Methodology</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    AI-Assisted Fast Prototyping
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-copper)] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-[var(--text-muted)] block">Learning Path</span>
                  <span className="text-sm font-semibold text-[var(--text-primary)]">
                    Linux, Docker, CI/CD &amp; Cloud Infra
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-copper)] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-xs text-[var(--text-muted)] block">Availability</span>
                  <span className="text-sm font-semibold text-[var(--accent-copper)]">
                    Open to Collaborations &amp; Roles
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border-subtle)]">
              <span className="text-xs text-[var(--text-muted)] block mb-1">Location</span>
              <span className="text-sm text-[var(--text-secondary)]">India • Remote-ready</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
