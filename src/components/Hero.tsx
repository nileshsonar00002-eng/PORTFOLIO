import React from 'react'
import { personalInfo, socialLinks } from '../data/portfolioData'
import { SocialIcon } from './SocialIcons'
import { ArrowRight } from 'lucide-react'

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      aria-label="Introduction and Overview"
      className="relative min-h-[82vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#292929]"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      {/* Subtle Warm Copper Ambient Glow (Restrained & Minimal) */}
      <div
        className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#C47B52]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl flex flex-col items-start space-y-7 lg:space-y-9">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4F1EA] leading-[1.12]">
            I build digital products <br className="hidden sm:inline" />
            that solve{' '}
            <span className="text-[#C47B52] relative inline-block">
              real problems.
              <span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C47B52]/30 rounded"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Sub-headline description */}
          <p className="text-lg sm:text-xl text-[#A7A29A] max-w-2xl leading-relaxed">
            {personalInfo.heroBio}
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-md bg-[#C47B52] hover:bg-[#D28A5C] text-[#FFFFFF] font-semibold text-sm tracking-wide transition-all shadow-sm hover:shadow-[#C47B52]/10 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#C47B52] group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('about')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-md bg-[#141414] hover:bg-[#181818] text-[#F4F1EA] border border-[#292929] hover:border-[#77736D] font-medium text-sm tracking-wide transition-all focus-visible:ring-2 focus-visible:ring-[#C47B52] group"
            >
              <span>About Me</span>
              <ArrowRight className="w-4 h-4 text-[#A7A29A] group-hover:text-[#F4F1EA] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social Icons Bar (Subtle, Clean — GitHub & LinkedIn only) */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-t border-[#292929]/70 w-full max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#77736D]">
              Connect
            </span>
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-md bg-[#181818] border border-[#292929] text-[#A7A29A] hover:text-[#C47B52] hover:border-[#C47B52]/40 hover:bg-[#1E1C1A] transition-all focus-visible:ring-2 focus-visible:ring-[#C47B52]"
                >
                  <SocialIcon type={social.icon} className="w-4 h-4" />
                  <span className="text-xs font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
