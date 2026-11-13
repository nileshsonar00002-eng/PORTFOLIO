import React from 'react'
import { processSteps } from '../data/portfolioData'
import { Compass, Hammer, RefreshCw } from 'lucide-react'

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-[var(--accent-copper)]" />
      case 1:
        return <Hammer className="w-5 h-5 text-[var(--accent-copper)]" />
      case 2:
        return <RefreshCw className="w-5 h-5 text-[var(--accent-copper)]" />
      default:
        return null
    }
  }

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 lg:py-28 bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
              Approach
            </span>
          </div>

          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-3"
          >
            How I Build
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl">
            A disciplined, iterative engineering mindset focused on clarity, execution, and continuous delivery.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between p-8 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all duration-300 group shadow-xs hover:shadow-md"
            >
              <div>
                {/* Step Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold tracking-tight text-[var(--text-muted)] group-hover:text-[var(--accent-copper)] transition-colors">
                    {step.step}
                  </span>
                  <div className="p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                  PHASE 0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)]/40 group-hover:bg-[var(--accent-copper)] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
