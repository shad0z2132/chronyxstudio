import { useState, useCallback, useEffect } from "react"
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
import { motion, useScroll, useSpring, AnimatePresence, useMotionValue } from "framer-motion"

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Motion values for smooth springing
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Spring configurations for different parts of the cursor
  const springConfigOuter = { damping: 25, stiffness: 300, mass: 0.5 }
  const springConfigInner = { damping: 40, stiffness: 800, mass: 0.1 }
  
  const outerX = useSpring(cursorX, springConfigOuter)
  const outerY = useSpring(cursorY, springConfigOuter)
  
  const innerX = useSpring(cursorX, springConfigInner)
  const innerY = useSpring(cursorY, springConfigInner)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if we are hovering over a clickable element
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleMouseOver)
    
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/40 pointer-events-none z-[100] hidden md:block mix-blend-difference"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? "rgba(212,168,83,0.15)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[100] hidden md:block"
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
    </>
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
      <CustomCursor />
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
