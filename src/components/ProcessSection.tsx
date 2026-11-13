import React from 'react'
import { processSteps } from '../data/portfolioData'
import { Compass, Hammer, RefreshCw } from 'lucide-react'

export const ProcessSection: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-[#C47B52]" />
      case 1:
        return <Hammer className="w-5 h-5 text-[#C47B52]" />
      case 2:
        return <RefreshCw className="w-5 h-5 text-[#C47B52]" />
      default:
        return null
    }
  }

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="py-20 lg:py-28 bg-[#0D0D0D] border-b border-[#292929]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#181818] border border-[#292929] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47B52]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#A7A29A]">
              Approach
            </span>
          </div>

          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F1EA] mb-3"
          >
            How I Build
          </h2>

          <p className="text-base sm:text-lg text-[#A7A29A] max-w-2xl">
            A disciplined, iterative engineering mindset focused on clarity, execution, and continuous delivery.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between p-8 rounded-lg bg-[#141414] border border-[#292929] hover:border-[#383838] transition-all duration-300 group"
            >
              <div>
                {/* Step Index & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-extrabold tracking-tight text-[#77736D] group-hover:text-[#C47B52] transition-colors">
                    {step.step}
                  </span>
                  <div className="p-2 rounded-md bg-[#181818] border border-[#292929]">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-[#F4F1EA] mb-3">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#A7A29A] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#77736D]">
                  PHASE 0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C47B52]/40 group-hover:bg-[#C47B52] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
