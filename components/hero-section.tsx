import { ArrowUpRight, ChevronDown, Crosshair, Shield, Swords, Trophy } from "lucide-react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { useRef, useCallback, useMemo } from "react"
import { FadeIn, TextReveal, Counter, RotatingWords } from "@/components/motion"

// ─── Studio data ─────────────────────────────────────────────────────────────
const studioStats = [
  { value: 2, suffix: "", label: "Active IPs" },
  { value: 1, suffix: "", label: "Flagship ARPG" },
  { value: 1, suffix: "", label: "Competitive FPS" },
  { value: 100, suffix: "%", label: "Player-First" },
]

// ─── Hero background image ───────────────────────────────────────────────────
const heroBackground = "/alien-planet-building.webp"

// ─── Floating Particles Component ────────────────────────────────────────────
function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.1,
        // Particles: gold (ancient), cyan (tech), purple (void)
        color:
          i % 7 === 0
            ? "bg-gold"
            : i % 5 === 0
              ? "bg-purple"
              : i % 3 === 0
                ? "bg-cyan"
                : "bg-white",
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

// ─── Geometric Grid Overlay — HUD style ──────────────────────────────────────
function GeometricOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
      {/* Horizontal scan line */}
      <div className="scan-line" />

      {/* HUD corner brackets — top left */}
      <div className="absolute top-[12%] left-[6%] w-20 h-20 border-l-2 border-t-2 border-cyan/10" />
      <div className="absolute top-[12%] left-[6%] w-3 h-3 bg-cyan/20" />

      {/* HUD corner brackets — bottom right */}
      <div className="absolute bottom-[18%] right-[6%] w-20 h-20 border-r-2 border-b-2 border-gold/10" />
      <div className="absolute bottom-[18%] right-[calc(6%+64px)] w-3 h-3 bg-gold/20" />

      {/* Crosshair indicator — center right */}
      <div className="absolute top-1/2 right-[15%] -translate-y-1/2 hidden xl:block">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-cyan/15 mx-auto" />
        <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan/15 to-transparent -mt-4" />
      </div>

      {/* Diagonal tactical lines */}
      <motion.div
        className="absolute top-0 right-[25%] w-px h-full bg-gradient-to-b from-transparent via-purple/5 to-transparent"
        style={{ transform: "rotate(15deg)", transformOrigin: "top" }}
      />
      <motion.div
        className="absolute top-0 left-[35%] w-px h-full bg-gradient-to-b from-transparent via-gold/3 to-transparent"
        style={{ transform: "rotate(-8deg)", transformOrigin: "top" }}
      />

      {/* CRT lines overlay */}
      <div className="absolute inset-0 crt-lines opacity-30" />
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
        {/* Background image */}
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY, x: bgMouseX, scale: bgScale }}
        >
          <div className="hero-ken-burns absolute inset-0">
            <img
              src={heroBackground}
              alt="Epic fantasy landscape"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Multi-layer gradients — darker original */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple/[0.03] via-transparent to-gold/[0.02] z-[1]" />

        {/* Data stream effect */}
        <div className="absolute inset-0 data-stream z-[1]" />

        {/* Film grain overlay */}
        <div className="absolute inset-0 grain-overlay" />

        {/* Floating particles */}
        <FloatingParticles />

        {/* Geometric HUD overlay */}
        <GeometricOverlay />

        {/* Top neon accent line — gold → cyan → purple */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-cyan to-purple animate-glow-line z-20" />

        {/* Bracket lines */}
        <div className="bracket-line-left" />
        <div className="bracket-line-right" />

        {/* Large watermark — Orbitron font */}
        <motion.div
          className="watermark-text left-[5%] top-[15%]"
          style={{ x: fgMouseX, y: fgMouseY }}
        >
          CHRO<br />NYX
        </motion.div>

        {/* ─── Vertical Side Elements ─────────────────────────────────── */}

        {/* Left side — system status */}
        <motion.div
          className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold/30" />
          <span className="hero-vertical-text text-xs font-tactical tracking-[0.35em] text-gold/40 uppercase">
            Est. 2025
          </span>
          <div className="status-dot status-dot-gold" />
          <div className="w-px h-16 bg-gradient-to-b from-gold/30 to-transparent" />
        </motion.div>

        {/* Right side — SCROLL TO EXPLORE */}
        <motion.div
          className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-cyan/30" />
          <span className="hero-vertical-text text-xs font-mono tracking-[0.35em] text-cyan/40 uppercase">
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
          {/* ─── Top Status Bar ───────────────────────────────────────── */}
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-4 mb-8">
              <div className="status-dot status-dot-cyan" />
              <motion.div
                className="h-px bg-gold/50"
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <span className="text-gold text-sm font-tactical tracking-[0.4em] uppercase">
                Game Development Studio
              </span>
              <motion.div
                className="h-px bg-gold/20"
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              {/* System status badge */}
              <span className="hidden sm:inline-flex items-center gap-2 border border-cyan/20 px-3 py-1 text-xs font-mono tracking-[0.2em] text-cyan/50 uppercase genre-badge">
                <span className="status-dot status-dot-cyan" />
                Systems Online
              </span>
            </div>
          </FadeIn>

          {/* ─── Mission Briefing Box — Game Lobby Style ──────────────── */}
          <FadeIn delay={0.4}>
            <div className="mission-briefing p-8 lg:p-12 mb-10 max-w-4xl relative">
              {/* HUD corners */}
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              {/* Briefing header */}
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-4 h-4 text-gold/60" />
                <span className="text-xs font-mono tracking-[0.3em] text-gold/50 uppercase">
                  Mission Briefing // Studio Overview
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-gold/20 to-transparent" />
              </div>

              {/* Main Heading — Orbitron font, powerful */}
              <h1 className="font-heading font-black leading-[0.9] tracking-tight mb-6">
                {/* Line 1: "WE FORGE" */}
                <span className="block text-4xl md:text-6xl lg:text-[5.5rem] mb-2">
                  <span className="text-foreground/30 font-light mr-2 lg:mr-4 text-3xl md:text-5xl lg:text-[4rem] font-tactical">
                    <TextReveal text="WE" delay={0.3} />
                  </span>
                  <span className="text-foreground">
                    <TextReveal text="FORGE" delay={0.4} />
                  </span>
                </span>

                {/* Line 2: Rotating — "LEGENDARY" / "ENDURING" / "COMPETITIVE" */}
                <span className="block text-4xl md:text-6xl lg:text-[6rem] mb-1">
                  <RotatingWords
                    words={["LEGENDARY", "ENDURING", "COMPETITIVE"]}
                    interval={3500}
                    className="min-w-[240px] md:min-w-[380px] lg:min-w-[520px] hero-text-gradient"
                  />
                </span>

                {/* Line 3: "GAMING" + genre indicators */}
                <span className="flex items-end gap-4 lg:gap-6 mb-2">
                  <span className="block text-5xl md:text-7xl lg:text-[7rem] text-foreground leading-none">
                    <TextReveal text="GAMING" delay={0.7} />
                  </span>
                  <FadeIn delay={1.0} direction="left">
                    <span className="hidden md:flex flex-col items-start gap-2 pb-3 lg:pb-5">
                      <span className="h-px w-16 lg:w-24 bg-gradient-to-r from-gold to-gold/0" />
                      <span className="text-xs font-tactical tracking-[0.25em] text-gold/40 uppercase whitespace-nowrap">
                        IPs Built to Last
                      </span>
                    </span>
                  </FadeIn>
                </span>

                {/* Line 4: "WORLDS" with gradient split */}
                <span className="block text-4xl md:text-6xl lg:text-[5.5rem]">
                  <span className="text-foreground">
                    <TextReveal text="WOR" delay={0.9} />
                  </span>
                  <span className="hero-text-gradient-alt">
                    <TextReveal text="LDS" delay={1.0} />
                  </span>
                  <motion.span
                    className="inline-block text-gold ml-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3, duration: 0.4, type: "spring" }}
                  >
                    .
                  </motion.span>
                </span>
              </h1>

              {/* Briefing description */}
              <p className="text-muted-foreground text-base lg:text-lg leading-[1.9] max-w-xl mb-6">
                Chronyx Studio builds <span className="text-foreground font-medium">long-term IPs</span> through
                {" "}deep progression systems, <span className="text-gold font-medium">competitive gameplay</span>,
                and <span className="text-purple-light font-medium">player-driven experiences</span>.
                From sprawling ARPGs to high-stakes esports.
              </p>

              {/* Genre badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="genre-badge genre-badge-arpg">
                  <Swords className="w-3 h-3" />
                  ARPG
                </span>
                <span className="genre-badge genre-badge-fps">
                  <Crosshair className="w-3 h-3" />
                  Competitive FPS
                </span>
                <span className="genre-badge genre-badge-studio">
                  <Trophy className="w-3 h-3" />
                  Multi-IP Studio
                </span>
              </div>
            </div>
          </FadeIn>

          {/* ─── Micro Tags Row ───────────────────────────────────────── */}
          <FadeIn delay={1.2} direction="up">
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {["Deep Progression", "Player Identity", "Competitive Integrity", "Web2-First", "PC Priority"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="hero-micro-tag text-sm font-tactical tracking-[0.15em] text-muted-foreground/50 uppercase border border-border/30 px-3 py-1.5 hover:text-gold/60 hover:border-gold/20 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </FadeIn>

          {/* ─── CTA Buttons — Game Menu Style ────────────────────────── */}
          <FadeIn delay={1.4} direction="up">
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary CTA — Gold game button */}
              <a href="#games" className="game-btn game-btn-primary group">
                <span className="game-btn-shimmer" />
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE OUR GAMES
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              {/* Secondary CTA — Cyan outline */}
              <a href="#about" className="game-btn game-btn-secondary group">
                <span className="relative z-10 flex items-center gap-2">
                  ABOUT THE STUDIO
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>

              {/* Tertiary inline link */}
              <a
                href="#vision"
                className="hidden md:inline-flex items-center gap-2 text-muted-foreground/40 text-xs font-mono tracking-[0.15em] uppercase hover:text-gold/60 transition-colors duration-300 ml-2"
              >
                <span className="w-6 h-px bg-muted-foreground/20" />
                Our Vision
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
              {/* HUD header */}
              <div className="px-6 py-3 border-b border-white/5">
                <span className="text-xs font-mono tracking-[0.3em] text-gold/40 uppercase">
                  Studio Status
                </span>
              </div>
              {studioStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 px-6 py-4 ${
                    i < studioStats.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <span className="text-2xl lg:text-3xl font-heading font-black text-gold tabular-nums min-w-[80px]">
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm font-tactical tracking-[0.15em] text-muted-foreground uppercase">
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
            className="text-sm font-tactical tracking-[0.3em] text-muted-foreground/40 uppercase"
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
              className="w-[1px] h-3 bg-gold/60 rounded-full"
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

      {/* ─── IP Showcase Marquee (replaces generic partner logos) ──────── */}
      <div className="relative bg-background/80 backdrop-blur-sm border-t border-b border-border/50 py-5 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            "SANDS OF AVALON",
            "//",
            "COMPETITIVE FPS",
            "//",
            "DEEP PROGRESSION",
            "//",
            "PLAYER IDENTITY",
            "//",
            "DURABLE IPs",
            "//",
            "ESPORTS READY",
            "//",
            "MASTERY & COMMITMENT",
            "//",
            "SANDS OF AVALON",
            "//",
            "COMPETITIVE FPS",
            "//",
            "DEEP PROGRESSION",
            "//",
            "PLAYER IDENTITY",
            "//",
            "DURABLE IPs",
            "//",
            "ESPORTS READY",
            "//",
            "MASTERY & COMMITMENT",
            "//",
          ].map((text, i) => (
            <span key={i} className="flex items-center">
              {text === "//" ? (
                <span className="mx-6 w-1.5 h-1.5 rounded-full bg-gold/25" />
              ) : (
                <span className="mx-6 text-muted-foreground/30 text-base font-heading font-bold tracking-[0.2em] uppercase inline-block hover:text-gold/50 transition-colors duration-300">
                  {text}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
