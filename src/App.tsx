import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
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
import { motion, useScroll, useSpring } from "framer-motion"

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink via-cyan to-pink z-[60] origin-left"
        style={{ scaleX }}
      />

      <main>
        <Navbar />
        <HeroSection />
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
    </>
  )
}
