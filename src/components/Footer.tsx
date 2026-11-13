import React, { useState } from 'react'
import { personalInfo, socialLinks } from '../data/portfolioData'
import { SocialIcon } from './SocialIcons'
import { LegalModal } from './LegalModal'
import { ArrowUp } from 'lucide-react'

interface FooterProps {
  onOpenContact: () => void
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] py-12 text-[var(--text-secondary)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          
          {/* Brand & Monogram Left */}
          <div className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-7 h-7 rounded bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-bold text-[var(--text-primary)] shadow-xs">
              N<span className="text-[var(--accent-copper)]">B</span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-[var(--text-primary)]">
              {personalInfo.name}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono hidden sm:inline">
              — Aspiring DevOps Engineer
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="p-2 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-copper)] hover:border-[var(--accent-copper)]/40 hover:bg-[var(--bg-hover)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)] shadow-xs"
              >
                <SocialIcon type={social.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          
          {/* Copyright notice */}
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

          {/* Secondary Links & Disclosures */}
          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => setLegalType('privacy')}
              className="hover:text-[var(--text-primary)] transition-colors focus-visible:ring-1 focus-visible:ring-[var(--accent-copper)] rounded"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => setLegalType('terms')}
              className="hover:text-[var(--text-primary)] transition-colors focus-visible:ring-1 focus-visible:ring-[var(--accent-copper)] rounded"
            >
              Terms
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="hover:text-[var(--text-primary)] transition-colors focus-visible:ring-1 focus-visible:ring-[var(--accent-copper)] rounded"
            >
              Contact
            </button>
            
            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 p-1 hover:text-[var(--accent-copper)] transition-colors focus-visible:ring-1 focus-visible:ring-[var(--accent-copper)] rounded ml-2"
              aria-label="Scroll back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

      {/* Disclosures Modal */}
      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </footer>
  )
}
