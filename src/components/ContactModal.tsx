import React, { useState, useEffect } from 'react'
import { personalInfo } from '../data/portfolioData'
import { X, Copy, Check, Send, Mail } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    const encodedSubject = encodeURIComponent(subject || 'Inquiry regarding collaboration')
    const encodedBody = encodeURIComponent(message || 'Hi Nilesh,')
    window.location.href = `mailto:${personalInfo.email}?subject=${encodedSubject}&body=${encodedBody}`
    onClose()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[var(--modal-overlay)] backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[var(--modal-bg)] border border-[var(--border-subtle)] rounded-xl shadow-2xl p-6 sm:p-8 text-[var(--text-primary)] transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-copper)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)]"
          aria-label="Close contact dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent-copper)] mb-2">
          <Mail className="w-4 h-4" />
          <span>Get in Touch</span>
        </div>
        <h2 id="contact-modal-title" className="text-2xl font-bold tracking-tight mb-2 text-[var(--text-primary)]">
          Contact Nilesh Bagul
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6">
          Send a direct email or launch your mail client.
        </p>

        {/* Quick Email Clipboard Bar */}
        <div className="flex items-center justify-between p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] mb-6">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">Direct Email</span>
            <span className="text-sm font-medium text-[var(--text-primary)] select-all">
              {personalInfo.email}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-[var(--bg-card)] hover:bg-[var(--bg-hover)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)] shadow-xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[var(--accent-copper)]" />
                <span className="text-[var(--accent-copper)]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Compose Form */}
        <form onSubmit={handleSendEmail} className="space-y-4">
          <div>
            <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
              Subject
            </label>
            <input
              id="contact-subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Project inquiry / Opportunity / Collaboration"
              className="w-full px-3.5 py-2.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-copper)] transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
              Message
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Nilesh, I came across your portfolio and wanted to discuss..."
              className="w-full px-3.5 py-2.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-copper)] transition-colors resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-secondary)] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-[var(--accent-copper)] hover:bg-[var(--accent-hover)] text-[#FFFFFF] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)]"
            >
              <span>Open Mail Client</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
