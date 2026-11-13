import React, { useState, useEffect } from 'react'
import { personalInfo, navLinks } from '../data/portfolioData'
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface NavbarProps {
  onOpenContact: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPos = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center space-x-3 text-left focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)] rounded-md p-1"
            aria-label="Nilesh Bagul - Return to top"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] group-hover:border-[var(--accent-copper)]/60 transition-colors text-sm font-bold tracking-tight text-[var(--text-primary)]">
              N<span className="text-[var(--accent-copper)]">B</span>
            </span>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-copper)] transition-colors">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="text-[10px] tracking-widest text-[var(--text-muted)] uppercase font-mono">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Right Navigation & CTA Container */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <nav aria-label="Primary" className="flex items-center space-x-1 lg:space-x-1.5">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[var(--text-primary)] bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xs'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
                    }`}
                  >
                    <span className="flex items-center space-x-1.5">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-copper)]" aria-hidden="true" />
                      )}
                      <span>{link.name}</span>
                    </span>
                  </a>
                )
              })}
            </nav>

            {/* Theme Toggle Button (Single Icon Only) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-copper)] hover:border-[var(--accent-copper)]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)]"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F4A261]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--text-secondary)]" />
              )}
            </button>

            {/* Desktop Right CTA */}
            <button
              type="button"
              onClick={onOpenContact}
              className="group inline-flex items-center space-x-2 px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-copper)] hover:bg-[var(--bg-hover)] transition-all focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)]"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-copper)] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent-copper)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)]"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F4A261]" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--text-secondary)]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-[var(--accent-copper)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-copper)]"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[61px] z-50 bg-[var(--bg-base)]/98 backdrop-blur-xl border-b border-[var(--border-subtle)] flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-3 pt-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)] px-3">
              Navigation Menu
            </span>
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-subtle)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
                  }`}
                >
                  <span className="flex items-center space-x-2.5">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-copper)]" />
                    )}
                    <span>{link.name}</span>
                  </span>
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    0{navLinks.indexOf(link) + 1}
                  </span>
                </a>
              )
            })}
          </div>

          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col space-y-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenContact()
              }}
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-lg bg-[var(--accent-copper)] hover:bg-[var(--accent-hover)] text-[#FFFFFF] font-semibold text-sm transition-colors shadow-sm"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-[var(--text-muted)]">
              {personalInfo.name} — Aspiring DevOps Engineer
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
