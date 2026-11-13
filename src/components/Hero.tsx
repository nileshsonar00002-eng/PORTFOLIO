import React from 'react'
import { personalInfo, socialLinks } from '../data/portfolioData'
import { SocialIcon } from './SocialIcons'
import { ArrowRight, Terminal } from 'lucide-react'

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
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#292929]"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 lg:space-y-8">
            
            {/* Small Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-md bg-[#181818] border border-[#292929]">
              <span className="w-2 h-2 rounded-full bg-[#C47B52]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#A7A29A] font-semibold">
                {personalInfo.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F1EA] leading-[1.12]">
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
            <p className="text-base sm:text-lg text-[#A7A29A] max-w-2xl leading-relaxed">
              {personalInfo.heroBio}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-md bg-[#C47B52] hover:bg-[#D28A5C] text-[#FFFFFF] font-semibold text-sm tracking-wide transition-all shadow-sm hover:shadow-[#C47B52]/10 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#C47B52] group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-md bg-[#141414] hover:bg-[#181818] text-[#F4F1EA] border border-[#292929] hover:border-[#77736D] font-medium text-sm tracking-wide transition-all focus-visible:ring-2 focus-visible:ring-[#C47B52] group"
              >
                <span>About Me</span>
                <ArrowRight className="w-4 h-4 text-[#A7A29A] group-hover:text-[#F4F1EA] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Icons Bar (Subtle, Clean) */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 border-t border-[#292929]/70 w-full">
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
                    className="p-2.5 rounded-md bg-[#181818] border border-[#292929] text-[#A7A29A] hover:text-[#C47B52] hover:border-[#C47B52]/40 hover:bg-[#1E1C1A] transition-all focus-visible:ring-2 focus-visible:ring-[#C47B52]"
                  >
                    <SocialIcon type={social.icon} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Professional Portrait Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-[5/6] rounded-xl overflow-hidden group">
              
              {/* Subtle Copper Architectural Geometric Ring Accent Behind Portrait */}
              <div
                className="absolute -inset-4 rounded-2xl border border-[#C47B52]/20 opacity-70 pointer-events-none group-hover:border-[#C47B52]/40 transition-colors"
                aria-hidden="true"
              />
              <div
                className="absolute -top-10 -right-10 w-44 h-44 rounded-full border border-[#C47B52]/15 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full border border-[#292929] pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait Container Card */}
              <div className="relative w-full h-full bg-[#141414] rounded-xl border border-[#292929] overflow-hidden shadow-2xl transition-all duration-300">
                
                {/* Developer Portrait Image (Easily replaceable via portfolioData.personalInfo.portraitImage) */}
                <img
                  src={personalInfo.portraitImage}
                  alt={personalInfo.portraitAlt}
                  loading="eager"
                  className="w-full h-full object-cover object-center filter grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
                />

                {/* Subtle vignette gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#141414]/90 backdrop-blur-md border border-[#292929] flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#C47B52] animate-pulse" />
                    <span className="text-xs font-medium text-[#F4F1EA]">
                      {personalInfo.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 font-mono text-[11px] text-[#A7A29A]">
                    <Terminal className="w-3 h-3 text-[#C47B52]" />
                    <span>DevOps &amp; Web</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
