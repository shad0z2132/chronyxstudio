import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PartnersSection } from "@/components/partners-section"
import { SandsOfAvalonSection } from "@/components/sands-of-avalon-section"
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
    </>
  )
}
