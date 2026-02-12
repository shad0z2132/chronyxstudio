import { ArrowUpRight, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FadeIn, RotatingWords } from "@/components/motion"

const heroBackground = "/alien-planet-building.webp"

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 60])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section ref={sectionRef} className="relative">
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY, scale: bgScale }}
        >
          <img
            src={heroBackground}
            alt="Epic fantasy landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Dark gradient overlays — clean editorial */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/60 z-[1]" />

        {/* Main content */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {/* Eyebrow */}
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Game Development Studio
              </span>
            </div>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.4}>
            <h1 className="font-heading font-bold leading-[0.95] tracking-tight mb-8">
              <span className="block text-4xl md:text-6xl lg:text-7xl text-foreground mb-2">
                We Build
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl text-gold mb-2">
                <RotatingWords
                  words={["Legendary", "Enduring", "Competitive"]}
                  interval={3500}
                  className="min-w-[240px] md:min-w-[380px]"
                />
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-foreground">
                Gaming Worlds.
              </span>
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.6}>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-xl mb-10">
              Chronyx Studio builds long-term IPs through deep progression systems,
              competitive gameplay, and player-driven experiences.
            </p>
          </FadeIn>

          {/* CTA Buttons — clean, simple */}
          <FadeIn delay={0.8}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#games"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-background px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide uppercase transition-colors duration-200 group"
              >
                Explore Our Games
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-foreground px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide uppercase transition-colors duration-200 group"
              >
                About the Studio
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </FadeIn>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-muted-foreground/50 text-xs tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative bg-[#0d0d14] border-t border-b border-white/[0.06] py-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0d0d14] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0d0d14] to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "Sands of Avalon",
            "Competitive FPS",
            "Deep Progression",
            "Player Identity",
            "Esports Ready",
            "Mastery & Commitment",
            "Sands of Avalon",
            "Competitive FPS",
            "Deep Progression",
            "Player Identity",
            "Esports Ready",
            "Mastery & Commitment",
          ].map((text, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-8 text-muted-foreground/25 text-sm font-medium tracking-[0.15em] uppercase">
                {text}
              </span>
              <span className="w-1 h-1 rounded-full bg-gold/20" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
