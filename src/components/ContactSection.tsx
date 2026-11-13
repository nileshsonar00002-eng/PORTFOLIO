import React from 'react'
import { ArrowRight, Mail } from 'lucide-react'

interface ContactSectionProps {
  onOpenContact: () => void
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 lg:py-36 bg-[var(--bg-base)] border-b border-[var(--border-subtle)] relative overflow-hidden transition-colors"
    >
      {/* Background Subtle Accent Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--accent-copper)]/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Section Indicator */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-6 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)]" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
              Get In Touch
            </span>
          </div>

          {/* Large Heading */}
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15] mb-6"
          >
            Have an idea? <br />
            <span className="text-[var(--accent-copper)]">Let's build something.</span>
          </h2>

          {/* Short Text */}
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-10 leading-relaxed">
            I'm always open to interesting projects, collaborations and opportunities.
          </p>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-md bg-[var(--accent-copper)] hover:bg-[var(--accent-hover)] text-[#FFFFFF] font-semibold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-[var(--accent-copper)]/20 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)] group"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
