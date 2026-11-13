import React from 'react'
import { stats } from '../data/portfolioData'
import { FolderGit2, Globe, Cloud, Sparkles } from 'lucide-react'

export const StatsSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FolderGit2 className="w-4 h-4 text-[var(--accent-copper)]" />
      case 1:
        return <Globe className="w-4 h-4 text-[var(--accent-copper)]" />
      case 2:
        return <Cloud className="w-4 h-4 text-[var(--accent-copper)]" />
      case 3:
        return <Sparkles className="w-4 h-4 text-[var(--accent-copper)]" />
      default:
        return null
    }
  }

  return (
    <section
      aria-label="Core Metrics"
      className="bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] py-8 lg:py-10 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-subtle)]">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex items-start space-x-4 ${
                idx !== 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''
              }`}
            >
              <div className="p-2.5 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] flex-shrink-0 mt-0.5 shadow-xs">
                {getIcon(idx)}
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline space-x-1.5">
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-copper)]">
                    {stat.label}
                  </span>
                </div>
                {stat.sublabel && (
                  <span className="text-xs text-[var(--text-muted)] mt-0.5 font-medium">
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
