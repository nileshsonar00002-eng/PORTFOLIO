import { useState } from 'react'
import { SkipLink } from './components/SkipLink'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsSection } from './components/StatsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ProcessSection } from './components/ProcessSection'
import { ContactSection } from './components/ContactSection'
import { ContactModal } from './components/ContactModal'
import { Footer } from './components/Footer'

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] flex flex-col font-sans selection:bg-[#C47B52]/30 selection:text-[#FFFFFF] relative">
      {/* Page Center Transparent Black Ambient Shadow Effect (Depth for Light Theme) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center"
        aria-hidden="true"
      >
        {/* Large Centered Soft Radial Black Shadow */}
        <div
          className="w-[1000px] h-[1000px] max-w-[95vw] rounded-full opacity-[0.06] dark:opacity-0 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 45%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Soft Vertical Center Depth Spine */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[760px] max-w-full opacity-[0.04] dark:opacity-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 25%, rgba(0, 0, 0, 0.7) 75%, transparent 100%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      {/* Accessibility Skip Link */}
      <SkipLink />

      {/* Navigation */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1 relative z-10">
        <Hero />
        <StatsSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection onOpenContact={() => setContactModalOpen(true)} />
      </main>

      {/* Footer Landmark */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* Global Interactive Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  )
}

export default App
