import React from 'react'
import { stats } from '../data/portfolioData'
import { FolderGit2, Globe, Cloud, Sparkles } from 'lucide-react'

export const StatsSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FolderGit2 className="w-4 h-4 text-[#C47B52]" />
      case 1:
        return <Globe className="w-4 h-4 text-[#C47B52]" />
      case 2:
        return <Cloud className="w-4 h-4 text-[#C47B52]" />
      case 3:
        return <Sparkles className="w-4 h-4 text-[#C47B52]" />
      default:
        return null
    }
  }

  return (
    <section
      aria-label="Core Metrics"
      className="bg-[#141414] border-b border-[#292929] py-8 lg:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#292929]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex items-start space-x-4 ${
                idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''
              }`}
            >
              <div className="p-2.5 rounded-md bg-[#181818] border border-[#292929] flex-shrink-0 mt-0.5">
                {getIcon(idx)}
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1.5">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#F4F1EA]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C47B52]">
                    {stat.label}
                  </span>
                </div>
                {stat.sublabel && (
                  <span className="text-xs text-[#77736D] mt-0.5 font-medium">
                    {stat.sublabel}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
