import React, { useState, useEffect } from 'react'
import { personalInfo, navLinks } from '../data/portfolioData'
import { Menu, X, ArrowRight } from 'lucide-react'

interface NavbarProps {
  onOpenContact: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Active section detection
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

  // Lock body scroll when mobile menu is open
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

  // Handle Escape key to close mobile menu
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
          ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[#292929] shadow-md py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center space-x-3 text-left focus-visible:ring-2 focus-visible:ring-[#C47B52] rounded-md p-1"
            aria-label="Nilesh Bagul - Return to top"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-md bg-[#181818] border border-[#292929] group-hover:border-[#C47B52]/60 transition-colors text-sm font-bold tracking-tight text-[#F4F1EA]">
              N<span className="text-[#C47B52]">B</span>
            </span>
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-sm text-[#F4F1EA] group-hover:text-[#FFFFFF] transition-colors">
                {personalInfo.name.toUpperCase()}
              </span>
              <span className="text-[10px] tracking-widest text-[#77736D] uppercase font-mono">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Right Navigation & CTA Container */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <nav aria-label="Primary" className="flex items-center space-x-1 lg:space-x-2">
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
                    className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#F4F1EA] bg-[#181818] border border-[#292929]'
                        : 'text-[#A7A29A] hover:text-[#F4F1EA] hover:bg-[#141414]'
                    }`}
                  >
                    <span className="flex items-center space-x-1.5">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C47B52]" aria-hidden="true" />
                      )}
                      <span>{link.name}</span>
                    </span>
                  </a>
                )
              })}
            </nav>

            {/* Desktop Right CTA */}
            <button
              type="button"
              onClick={onOpenContact}
              className="group inline-flex items-center space-x-2 px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider bg-[#181818] text-[#F4F1EA] border border-[#292929] hover:border-[#C47B52] hover:bg-[#1c1a19] transition-all focus-visible:ring-2 focus-visible:ring-[#C47B52]"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C47B52] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[#181818] border border-[#292929] text-[#F4F1EA] hover:text-[#FFFFFF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C47B52]"
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
          className="fixed inset-0 top-[61px] z-50 bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-[#292929] flex flex-col justify-between p-6 md:hidden animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-3 pt-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#77736D] px-3">
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
                      ? 'bg-[#181818] text-[#F4F1EA] border border-[#292929]'
                      : 'text-[#A7A29A] hover:text-[#F4F1EA] hover:bg-[#141414]'
                  }`}
                >
                  <span className="flex items-center space-x-2.5">
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#C47B52]" />
                    )}
                    <span>{link.name}</span>
                  </span>
                  <span className="text-xs font-mono text-[#77736D]">
                    0{navLinks.indexOf(link) + 1}
                  </span>
                </a>
              )
            })}
          </div>

          <div className="pt-6 border-t border-[#292929] flex flex-col space-y-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenContact()
              }}
              className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-lg bg-[#C47B52] hover:bg-[#D28A5C] text-[#FFFFFF] font-semibold text-sm transition-colors shadow-sm"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-[#77736D]">
              {personalInfo.name} — Aspiring DevOps Engineer
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
