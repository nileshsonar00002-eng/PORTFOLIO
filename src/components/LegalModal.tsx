import React, { useEffect } from 'react'
import { X, ShieldCheck } from 'lucide-react'

interface LegalModalProps {
  type: 'privacy' | 'terms' | null
  onClose: () => void
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [type, onClose])

  if (!type) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[var(--modal-overlay)] backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[var(--modal-bg)] border border-[var(--border-subtle)] rounded-xl shadow-2xl p-6 sm:p-8 text-[var(--text-primary)] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent-copper)] mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Information &amp; Disclosures</span>
        </div>

        <h2 id="legal-modal-title" className="text-2xl font-bold tracking-tight mb-4 text-[var(--text-primary)]">
          {type === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
        </h2>

        <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          {type === 'privacy' ? (
            <>
              <p>
                This portfolio website is a personal presentation of projects and technical competencies created by Nilesh Bagul.
              </p>
              <p>
                We do not collect personal data, track cookies across third-party networks, or sell information to external vendors. Any communication initiated via email or contact forms is used solely to respond to project inquiries.
              </p>
              <p className="text-xs text-[var(--text-muted)] font-mono">
                Last reviewed: 2026. Standard privacy-preserving static architecture.
              </p>
            </>
          ) : (
            <>
              <p>
                All visual artifacts, code implementations, and project designs shown on this portfolio are the work of Nilesh Bagul unless otherwise credited.
              </p>
              <p>
                Code samples, open-source repositories, and demonstrations are provided for informational and showcase purposes under relevant open-source licensing.
              </p>
              <p className="text-xs text-[var(--text-muted)] font-mono">
                © 2026 Nilesh Bagul. All rights reserved.
              </p>
            </>
          )}
        </div>

        <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-md bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
