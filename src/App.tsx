import { useState, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PartnersSection } from "@/components/partners-section"
import { SandsOfAvalonSection } from "@/components/sands-of-avalon-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServicesSection } from "@/components/services-section"
import { PlatformsSection } from "@/components/platforms-section"
import { ProjectsSection } from "@/components/projects-section"
import { CooperationSection } from "@/components/cooperation-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AwardsSection } from "@/components/awards-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"

function SectionDivider() {
  return (
    <div className="relative py-1">
      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
    </div>
  )
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const handlePreloaderComplete = useCallback(() => setIsLoaded(true), [])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Scroll progress bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[60] origin-left"
              style={{ scaleX }}
            />

            <main>
              <Navbar />
              <HeroSection />
              <SectionDivider />
              <AboutSection />
              <SectionDivider />
              <PartnersSection />
              <SectionDivider />
              <SandsOfAvalonSection />
              <SectionDivider />
              <RoadmapSection />
              <SectionDivider />
              <WhyChooseUs />
              <SectionDivider />
              <ServicesSection />
              <SectionDivider />
              <PlatformsSection />
              <SectionDivider />
              <ProjectsSection />
              <SectionDivider />
              <CooperationSection />
              <SectionDivider />
              <TestimonialsSection />
              <SectionDivider />
              <AwardsSection />
              <SectionDivider />
              <BlogSection />
              <SectionDivider />
              <ContactSection />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
