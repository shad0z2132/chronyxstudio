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

/* OPTIMIZED: Removed CustomCursor component - using CSS cursor from globals.css instead for better performance */

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
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Scroll progress bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-[60] origin-left pointer-events-none"
              style={{ scaleX }}
            />

            <main>
              <Navbar />
              <HeroSection />
              <AboutSection />
              <PartnersSection />
              <SandsOfAvalonSection />
              <RoadmapSection />
              <WhyChooseUs />
              <ServicesSection />
              <PlatformsSection />
              <ProjectsSection />
              <CooperationSection />
              <TestimonialsSection />
              <AwardsSection />
              <BlogSection />
              <ContactSection />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
