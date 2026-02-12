import { ArrowUpRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FadeIn, TextReveal } from "@/components/motion"

const partners = [
  "GOOD GAME",
  "EA",
  "EPIC GAMES",
  "LUCASFILM",
  "BANDAI NAMCO",
  "TECHONA",
  "BYTRO",
  "HOUSEMARQUE",
  "FOXNEXT",
  "LUCID",
]

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Parallax: background moves slower than content
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 60])

  return (
    <section ref={sectionRef} className="relative">
      {/* Edge glow neon lines */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      {/* Hero background with parallax */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-110"
          />
        </motion.div>

        {/* Multi-layer gradients for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink/[0.04] via-transparent to-cyan/[0.03]" />

        {/* Film grain overlay */}
        <div className="absolute inset-0 grain-overlay" />

        {/* Top neon accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink via-cyan to-pink animate-glow-line z-20" />

        {/* Bracket lines */}
        <div className="bracket-line-left" />
        <div className="bracket-line-right" />

        {/* Watermark */}
        <div className="watermark-text left-[5%] top-[15%]">GAME<br />DEV</div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {/* Small tagline */}
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="h-px bg-cyan"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase">Premier Game Studio</span>
            </div>
          </FadeIn>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-foreground leading-[0.9] tracking-tighter max-w-4xl font-display">
            <TextReveal text="GAME" delay={0.3} />
            <br />
            <span className="text-transparent [-webkit-text-stroke:2px_hsl(0_0%_95%)]">
              <TextReveal text="DEVELOP" delay={0.5} />
            </span>
            <TextReveal text="MENT" delay={0.7} />
            <br />
            <TextReveal text="STUDIO" delay={0.9} />
          </h1>

          <FadeIn delay={1.1} direction="up">
            <p className="mt-8 text-muted-foreground max-w-md text-base lg:text-lg leading-relaxed">
              Blending our passion for games and technology with your unique vision through expert game art and development services
            </p>
          </FadeIn>

          <FadeIn delay={1.3} direction="up">
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-cyan text-background px-7 py-3.5 text-sm font-bold tracking-wide hover:bg-cyan-dark transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20"
              >
                CONTACT US
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-bold tracking-wide hover:border-cyan hover:text-cyan transition-all duration-300"
              >
                OUR WORK
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </FadeIn>
        </motion.div>
      </div>

      {/* Partner logos marquee */}
      <div className="relative bg-background/80 backdrop-blur-sm border-t border-b border-border py-5 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-8 text-muted-foreground/40 text-sm font-bold tracking-[0.2em] uppercase inline-block">
                {partner}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan/20" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
