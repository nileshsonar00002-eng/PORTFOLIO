import React from 'react'
import { personalInfo, socialLinks } from '../data/portfolioData'
import { SocialIcon } from './SocialIcons'
import { ArrowRight, Terminal, CheckCircle2, Shield, Cpu, Activity } from 'lucide-react'

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
      className="relative min-h-[88vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-[#292929]"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
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

            {/* Social Icons Bar (Subtle, Clean — GitHub & LinkedIn only) */}
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
                    className="inline-flex items-center space-x-2 px-3 py-2 rounded-md bg-[#181818] border border-[#292929] text-[#A7A29A] hover:text-[#C47B52] hover:border-[#C47B52]/40 hover:bg-[#1E1C1A] transition-all focus-visible:ring-2 focus-visible:ring-[#C47B52]"
                  >
                    <SocialIcon type={social.icon} className="w-4 h-4" />
                    <span className="text-xs font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Minimal Engineering Console & System Architecture Spec (Face removed) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-[460px] bg-[#141414] rounded-xl border border-[#292929] shadow-2xl overflow-hidden group hover:border-[#383838] transition-all duration-300">
              
              {/* Console Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-[#292929]">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[#292929] group-hover:bg-[#C47B52]/70 transition-colors" />
                  <span className="w-3 h-3 rounded-full bg-[#242424]" />
                  <span className="w-3 h-3 rounded-full bg-[#242424]" />
                </div>
                <div className="flex items-center space-x-1.5 font-mono text-[11px] text-[#77736D]">
                  <Terminal className="w-3.5 h-3.5 text-[#C47B52]" />
                  <span>nilesh@devops-node ~</span>
                </div>
                <span className="text-[10px] font-mono text-[#C47B52] uppercase font-semibold">
                  ACTIVE
                </span>
              </div>

              {/* Console Body / Telemetry */}
              <div className="p-5 sm:p-6 font-mono text-xs space-y-4">
                
                {/* Command 1: Identity */}
                <div>
                  <div className="flex items-center space-x-2 text-[#A7A29A]">
                    <span className="text-[#C47B52] font-bold">$</span>
                    <span>whoami</span>
                  </div>
                  <div className="mt-1 pl-4 text-[#F4F1EA] text-[13px] font-semibold">
                    nilesh_bagul <span className="text-[#77736D] font-normal text-xs">(Aspiring DevOps Engineer)</span>
                  </div>
                </div>

                {/* Command 2: Stack & Architecture */}
                <div>
                  <div className="flex items-center space-x-2 text-[#A7A29A]">
                    <span className="text-[#C47B52] font-bold">$</span>
                    <span>system.get_stack()</span>
                  </div>
                  <div className="mt-2 pl-4 grid grid-cols-2 gap-2 text-[#A7A29A]">
                    <div className="p-2 rounded bg-[#181818] border border-[#242424] flex items-center space-x-2">
                      <Cpu className="w-3.5 h-3.5 text-[#C47B52]" />
                      <span className="text-[#F4F1EA] text-[11px]">React + TS</span>
                    </div>
                    <div className="p-2 rounded bg-[#181818] border border-[#242424] flex items-center space-x-2">
                      <Shield className="w-3.5 h-3.5 text-[#C47B52]" />
                      <span className="text-[#F4F1EA] text-[11px]">Cloud &amp; Firebase</span>
                    </div>
                  </div>
                </div>

                {/* Command 3: Deployment Pipeline Status */}
                <div>
                  <div className="flex items-center space-x-2 text-[#A7A29A]">
                    <span className="text-[#C47B52] font-bold">$</span>
                    <span>deploy.status</span>
                  </div>
                  <div className="mt-1.5 pl-4 flex items-center space-x-2 text-[#F4F1EA]">
                    <Activity className="w-3.5 h-3.5 text-[#C47B52]" />
                    <span className="text-xs text-[#A7A29A]">Pipelines:</span>
                    <span className="text-xs font-semibold text-[#F4F1EA]">Vercel / Edge Verified</span>
                  </div>
                </div>

                {/* Status Footer Inside Console */}
                <div className="pt-3 border-t border-[#242424] flex items-center justify-between text-[11px] text-[#77736D]">
                  <span className="flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C47B52]" />
                    <span className="text-[#A7A29A]">Open to Projects</span>
                  </span>
                  <span className="text-[#C47B52]">LATENCY: ~18ms</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
