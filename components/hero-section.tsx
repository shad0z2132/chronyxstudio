import { ArrowUpRight, ChevronDown } from "lucide-react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useRef, useCallback, useMemo } from "react"
import { FadeIn, TextReveal, Counter } from "@/components/motion"

// ─── Partners marquee data ───────────────────────────────────────────────────
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

// ─── Stats data ──────────────────────────────────────────────────────────────
const stats = [
  { value: 300, suffix: "+", label: "Experts" },
  { value: 13, suffix: "+", label: "Years" },
  { value: 200, suffix: "+", label: "Projects" },
  { value: 50, suffix: "+", label: "Clients" },
]

// ─── Hero background image ───────────────────────────────────────────────────
const heroBackground = "/alien-planet-building.webp"

// ─── Floating Particles Component ────────────────────────────────────────────
function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.1,
        // some particles are cyan, some are pink, some are white
        color: i % 5 === 0 ? "bg-pink" : i % 3 === 0 ? "bg-cyan" : "bg-white",
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.color}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// ─── Geometric Grid Overlay ──────────────────────────────────────────────────
function GeometricOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
      {/* Horizontal scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Corner brackets - top left */}
      <div className="absolute top-[15%] left-[8%] w-16 h-16 border-l border-t border-cyan/10" />
      {/* Corner brackets - bottom right */}
      <div className="absolute bottom-[20%] right-[8%] w-16 h-16 border-r border-b border-cyan/10" />

      {/* Diagonal line */}
      <motion.div
        className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-pink/5 to-transparent"
        style={{ transform: "rotate(15deg)", transformOrigin: "top" }}
      />
    </div>
  )
}

// ─── Main Hero Section ───────────────────────────────────────────────────────
export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 80])
  const statsY = useTransform(scrollYProgress, [0, 0.5], [0, 40])

  // Mouse-tracking parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 100 }
  const bgMouseX = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), springConfig)
  const bgMouseY = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), springConfig)
  const fgMouseX = useSpring(useTransform(mouseX, [0, 1], [8, -8]), springConfig)
  const fgMouseY = useSpring(useTransform(mouseY, [0, 1], [5, -5]), springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      mouseX.set((e.clientX - rect.left) / rect.width)
      mouseY.set((e.clientY - rect.top) / rect.height)
    },
    [mouseX, mouseY]
  )

  // Background image (no rotation — single cinematic hero image)

  // Scroll indicator visibility
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative"
      onMouseMove={handleMouseMove}
    >
      {/* Edge glow neon lines */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      {/* Hero background with parallax + Ken Burns + mouse tracking */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero background image */}
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY, x: bgMouseX, scale: bgScale }}
        >
          <div className="hero-ken-burns absolute inset-0">
            <img
              src={heroBackground}
              alt="Alien planet cityscape"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Multi-layer gradients for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink/[0.03] via-transparent to-cyan/[0.02] z-[1]" />

        {/* Film grain overlay */}
        <div className="absolute inset-0 grain-overlay" />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Geometric overlay elements */}
        <GeometricOverlay />

        {/* Top neon accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink via-cyan to-pink animate-glow-line z-20" />

        {/* Bracket lines */}
        <div className="bracket-line-left" />
        <div className="bracket-line-right" />

        {/* Large watermark */}
        <motion.div
          className="watermark-text left-[5%] top-[15%]"
          style={{ x: fgMouseX, y: fgMouseY }}
        >
          CHRONO<br />NYX
        </motion.div>

        {/* ─── Vertical Side Elements ─────────────────────────────────── */}

        {/* Left side - vertical text */}
        <motion.div
          className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-muted-foreground/30" />
          <span className="hero-vertical-text text-[10px] font-mono tracking-[0.35em] text-muted-foreground/50 uppercase">
            Est. 2013
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
        </motion.div>

        {/* Right side - SCROLL TO EXPLORE */}
        <motion.div
          className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-cyan/30" />
          <span className="hero-vertical-text text-[10px] font-mono tracking-[0.35em] text-cyan/40 uppercase">
            Scroll to explore
          </span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-cyan/30 to-transparent"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* ─── Main Content ───────────────────────────────────────────── */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full"
          style={{ opacity: contentOpacity, y: contentY, x: fgMouseX }}
        >
          {/* Small tagline */}
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="h-px bg-cyan"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase">
                Premier Game Studio
              </span>
              <motion.div
                className="h-px bg-cyan/30"
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </div>
          </FadeIn>

          {/* ─── Restructured Heading ─────────────────────────────── */}
          <h1 className="font-display font-black leading-[0.85] tracking-tighter max-w-5xl">
            {/* Line 1: GAME */}
            <span className="block text-6xl md:text-8xl lg:text-[8.5rem] text-foreground">
              <TextReveal text="GAME" delay={0.3} />
            </span>

            {/* Line 2: DEVELOPMENT - outline style, the hero word */}
            <span className="block text-5xl md:text-7xl lg:text-[7rem] hero-outline-text mt-1">
              <TextReveal text="DEVELOPMENT" delay={0.5} />
            </span>

            {/* Line 3: STUDIO - with cyan accent */}
            <span className="block text-6xl md:text-8xl lg:text-[8.5rem] mt-1">
              <span className="text-foreground">
                <TextReveal text="STU" delay={0.8} />
              </span>
              <span className="text-cyan">
                <TextReveal text="DIO" delay={0.9} />
              </span>
            </span>
          </h1>

          {/* Description */}
          <FadeIn delay={1.1} direction="up">
            <p className="mt-10 text-muted-foreground max-w-lg text-base lg:text-lg leading-relaxed font-mono tracking-wide">
              Blending our passion for games and technology with your unique vision through expert game art and development services
            </p>
          </FadeIn>

          {/* ─── CTA Buttons with Clip Path ───────────────────────── */}
          <FadeIn delay={1.3} direction="up">
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* Primary CTA - pink with shimmer */}
              <a
                href="#contact"
                className="hero-cta-primary group relative inline-flex items-center gap-2 bg-pink text-white px-8 py-4 text-sm font-bold tracking-wider hover:bg-pink-dark transition-all duration-300 overflow-hidden"
              >
                <span className="hero-cta-shimmer" />
                <span className="relative z-10 flex items-center gap-2">
                  CONTACT US
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              {/* Secondary CTA - outline with clip */}
              <a
                href="#projects"
                className="hero-cta-secondary group relative inline-flex items-center gap-2 border border-foreground/20 text-foreground px-8 py-4 text-sm font-bold tracking-wider hover:border-cyan hover:text-cyan transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  OUR WORK
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </div>
          </FadeIn>
        </motion.div>

        {/* ─── Floating Stats Bar ─────────────────────────────────────── */}
        <motion.div
          className="absolute bottom-28 right-6 lg:right-12 z-20 hidden md:block"
          style={{ opacity: contentOpacity, y: statsY }}
        >
          <FadeIn delay={1.6} direction="left">
            <div className="hero-stats-bar flex flex-col gap-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 px-6 py-4 ${
                    i < stats.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <span className="text-2xl lg:text-3xl font-display font-black text-cyan tabular-nums min-w-[80px]">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs font-mono tracking-[0.2em] text-muted-foreground uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </motion.div>

        {/* ─── Scroll Indicator ───────────────────────────────────────── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <motion.span
            className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground/40 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            Scroll
          </motion.span>
          <motion.div
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <motion.div
              className="w-[1px] h-3 bg-cyan/60 rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground/30 animate-bounce" />
          </motion.div>
        </motion.div>

      </div>

      {/* ─── Partner Logos Marquee ─────────────────────────────────────── */}
      <div className="relative bg-background/80 backdrop-blur-sm border-t border-b border-border/50 py-5 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-8 text-muted-foreground/30 text-sm font-bold tracking-[0.2em] uppercase inline-block hover:text-muted-foreground/60 transition-colors duration-300">
                {partner}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan/15" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
