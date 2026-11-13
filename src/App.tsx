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
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1EA] flex flex-col font-sans selection:bg-[#C47B52]/30 selection:text-[#FFFFFF]">
      {/* Accessibility Skip Link */}
      <SkipLink />

      {/* Navigation */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1">
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
