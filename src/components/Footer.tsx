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
    <footer className="bg-[#0A0A0A] border-t border-[#292929] py-12 text-[#A7A29A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1F1F1F]">
          
          {/* Brand & Monogram Left */}
          <div className="flex items-center space-x-3">
            <span className="flex items-center justify-center w-7 h-7 rounded bg-[#141414] border border-[#292929] text-xs font-bold text-[#F4F1EA]">
              N<span className="text-[#C47B52]">B</span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-[#F4F1EA]">
              {personalInfo.name}
            </span>
            <span className="text-xs text-[#77736D] font-mono hidden sm:inline">
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
                className="p-2 rounded-md bg-[#141414] border border-[#242424] text-[#77736D] hover:text-[#C47B52] hover:border-[#C47B52]/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#C47B52]"
              >
                <SocialIcon type={social.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77736D]">
          
          {/* Copyright notice */}
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>

          {/* Secondary Links & Disclosures */}
          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => setLegalType('privacy')}
              className="hover:text-[#F4F1EA] transition-colors focus-visible:ring-1 focus-visible:ring-[#C47B52] rounded"
            >
              Privacy
            </button>
            <button
              type="button"
              onClick={() => setLegalType('terms')}
              className="hover:text-[#F4F1EA] transition-colors focus-visible:ring-1 focus-visible:ring-[#C47B52] rounded"
            >
              Terms
            </button>
            <button
              type="button"
              onClick={onOpenContact}
              className="hover:text-[#F4F1EA] transition-colors focus-visible:ring-1 focus-visible:ring-[#C47B52] rounded"
            >
              Contact
            </button>
            
            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 p-1 hover:text-[#C47B52] transition-colors focus-visible:ring-1 focus-visible:ring-[#C47B52] rounded ml-2"
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
