import { ArrowUpRight, ChevronDown, Gamepad2, Crosshair, ExternalLink } from "lucide-react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { useRef, MouseEvent } from "react"
import { FadeIn, RotatingWords, Counter } from "@/components/motion"

const heroVideo = "/Untitled video - Made with Clipchamp (2).mp4"

// --- 3D Card Component ---
function ParallaxCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 400, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 400, damping: 30 })

  // Smooth springs for glare effect
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [100, 0]), { stiffness: 400, damping: 30 })
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [100, 0]), { stiffness: 400, damping: 30 })
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, transparent 60%)`

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    // Calculate mouse position relative to center of card (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative perspective-1000 w-full ${className || ''}`}
    >
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
        style={{ background: glareBackground }}
      />
      <div className="transform-gpu will-change-transform" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  // Entrance animations for background video
  const bgScaleInitial = useSpring(useTransform(scrollYProgress, [0, 1], [1.1, 1.05]), { stiffness: 100, damping: 20 })
  const bgScale = useMotionValue(1.1)

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 60])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section ref={sectionRef} className="relative">
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background video (desktop) + image fallback (mobile) */}
        <motion.div
          className="absolute inset-0 origin-center"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 3, ease: [0.25, 1, 0.5, 1] }}
          style={{ y: bgY }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/Anubismonolith.webp"
            className="absolute inset-0 w-full h-full object-cover hidden md:block brightness-[0.85]"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <img
            src="/Anubismonolith.webp"
            alt="Anubis monolith — Sands of Avalon"
            className="absolute inset-0 w-full h-full object-cover md:hidden brightness-[0.85]"
          />
        </motion.div>

        {/* Film Grain Texture - Cinematic overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[1] bg-repeat"
          style={{ backgroundImage: "url('/noise.png')", backgroundSize: "100px 100px" }}
        />

        {/* ── Complex Cinematic Lighting & Overlays ── */}
        {/* 1. Base vignette (middle ground between the old heavy black and the fully bright version) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0f_100%)] opacity-60 z-[1]" />
        
        {/* 2. Side/Bottom gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/40 z-[1]" />

        {/* 3. Global color wash to tone down raw video colors and unify the cinematic look */}
        <div className="absolute inset-0 bg-[#1c1408]/40 mix-blend-multiply z-[1] pointer-events-none" />

        {/* 4. Ambient Magic Flares (Deep Teal + Gold) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[rgba(212,168,83,0.15)] rounded-full blur-[120px] pointer-events-none z-[1] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[rgba(212,168,83,0.1)] rounded-full blur-[100px] pointer-events-none z-[1] mix-blend-screen" />
        
        {/* 5. Center/Top Golden "God Ray" and pulsing core */}
        <div 
          className="absolute top-[-20%] left-[20%] w-[70vw] h-[70vw] bg-gold/15 rounded-full blur-[130px] pointer-events-none z-[1] mix-blend-screen"
          style={{ animation: 'flare-breathe 8s ease-in-out infinite' }}
        />
        {/* Sweeping light ray overlay */}
        <div className="absolute top-[-10%] left-[15%] w-[50%] h-[150%] bg-gradient-to-b from-white/10 via-gold/5 to-transparent origin-top -rotate-[25deg] blur-3xl pointer-events-none z-[1] mix-blend-overlay" style={{ animation: 'flare-breathe-slow 10s ease-in-out infinite' }} />

        {/* Main content — two column layout */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">
            {/* Left column — headline + CTAs */}
            <div className="flex-1 max-w-2xl">
              {/* Heading — enhanced hierarchy */}
              <h1 className="font-heading font-bold leading-[0.92] tracking-tight mb-7">
                <FadeIn delay={0.3}>
                  <motion.span 
                    initial={{ letterSpacing: "0.2em", opacity: 0 }}
                    animate={{ letterSpacing: "0.08em", opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="block text-lg md:text-xl lg:text-2xl text-white/50 mb-4 font-medium uppercase"
                  >
                    We Build
                  </motion.span>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <span className="block text-5xl md:text-7xl lg:text-[6.5rem] text-gold mb-4 drop-shadow-[0_0_40px_rgba(212,168,83,0.4)] relative z-10">
                    <RotatingWords
                      words={["Legendary", "Enduring", "Competitive"]}
                      interval={3500}
                      className="min-w-[280px] md:min-w-[460px] lg:min-w-[600px] py-2"
                    />
                  </span>
                </FadeIn>
                <FadeIn delay={0.7}>
                  <span className="block text-4xl md:text-5xl lg:text-6xl text-foreground">
                    Gaming Worlds.
                  </span>
                </FadeIn>
              </h1>

              {/* Tagline accent line */}
              <FadeIn delay={0.8}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-gradient-to-r from-gold to-gold/20" />
                  <span className="text-gold/50 text-sm italic tracking-wide">
                    Where mastery meets meaning.
                  </span>
                </div>
              </FadeIn>

              {/* Description — tighter, punchier */}
              <FadeIn delay={0.9}>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-lg mb-9">
                  Deep progression systems. Competitive integrity. Player-driven worlds
                  designed to last — not to extract.
                </p>
              </FadeIn>

              {/* CTA Buttons — enhanced with micro-interactions */}
              <FadeIn delay={1.0}>
                <div className="flex flex-wrap items-center gap-4">
                  <motion.a
                    href="#games"
                    className="relative overflow-hidden inline-flex items-center gap-2.5 bg-gold hover:bg-gold-light text-background px-10 py-4 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-300 group shadow-[0_0_20px_rgba(212,168,83,0.15)] hover:shadow-[0_0_40px_rgba(212,168,83,0.4)]"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span className="relative z-10">Explore Our Games</span>
                    <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>

                  <motion.a
                    href="#about"
                    className="inline-flex items-center gap-2.5 border border-white/20 hover:border-gold/30 hover:bg-white/[0.04] text-foreground px-10 py-4 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-200 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    About the Studio
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                </div>
              </FadeIn>

              {/* Stats + UE badge — enhanced with dividers */}
              <FadeIn delay={1.2}>
                <div className="mt-12 pt-8 border-t border-white/[0.06]">
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                    {[
                      { target: 2, suffix: "", label: "Original IPs" },
                      { target: 15, suffix: "+", label: "Team Members" },
                      { target: 3, suffix: "", label: "Years Building" },
                    ].map((stat, i) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        {i > 0 && <div className="w-px h-4 bg-white/[0.08] hidden sm:block" />}
                        <div className="flex items-baseline gap-1.5">
                          <Counter
                            target={stat.target}
                            suffix={stat.suffix}
                            className="text-gold font-heading font-bold text-2xl"
                          />
                          <span className="text-white/50 text-[11px] uppercase tracking-wider">
                            {stat.label}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="w-px h-4 bg-white/[0.08] hidden sm:block" />
                    <div className="flex items-center gap-2.5">
                      <img
                        src="/unreal-engine-xwo7bd8vu6fzpnkcifgtu.webp"
                        alt="Unreal Engine"
                        className="w-5 h-5 rounded-full object-cover invert opacity-70"
                      />
                      <span className="text-white/50 text-[11px] font-medium tracking-wider uppercase">
                        Powered by UE5
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right column — stacked game cards (desktop only) */}
            <div className="hidden lg:flex flex-col gap-4 w-[400px] shrink-0 relative" style={{ perspective: "1000px" }}>
              {/* Sands of Avalon card */}
              <FadeIn delay={1.0} direction="right">
                <ParallaxCard>
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0f]/60 backdrop-blur-md group cursor-pointer transition-all duration-500 hover:border-gold/40 hover:shadow-[0_0_50px_rgba(212,168,83,0.15)]">
                    {/* The main click target spanning the whole card */}
                    <a href="#games" className="absolute inset-0 z-0" aria-label="Go to Games Section" />
                    
                    <div className="relative overflow-hidden z-10 pointer-events-none">
                      <img
                        src="/image (27).png"
                        alt="Sands of Avalon"
                        className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-auto">
                        <div className="flex items-center gap-1.5 bg-gold/10 border border-gold/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_10px_rgba(212,168,83,1)]" />
                          <span className="text-gold text-[10px] font-semibold tracking-wider uppercase">
                            In Development
                          </span>
                        </div>
                        <a
                          href="https://store.steampowered.com/app/4052670/Sands_Of_Avalon_Forge_Your_Legend/?beta=1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-[#1b2838]/80 border border-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full hover:border-white/40 hover:bg-[#1b2838] transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] relative z-20"
                        >
                          <img src="/steam-icon.svg" alt="" className="w-3 h-3 invert opacity-80" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                          <ExternalLink className="w-2.5 h-2.5 text-white/70" />
                          <span className="text-white/80 text-[10px] font-semibold tracking-wider uppercase">
                            Steam
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="p-4 relative z-10 pointer-events-none">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Gamepad2 className="w-3.5 h-3.5 text-gold/50" />
                            <span className="text-muted-foreground/50 text-[11px] tracking-wider uppercase">
                              Action RPG
                            </span>
                          </div>
                          <h3 className="text-foreground font-heading font-bold text-lg">
                            Sands of Avalon
                          </h3>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-gold/10 group-hover:border-gold/30 group-hover:scale-110">
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 transition-all duration-300 group-hover:text-gold" />
                        </div>
                      </div>
                    </div>
                  </div>
                </ParallaxCard>
              </FadeIn>

              {/* Competitive FPS card */}
              <FadeIn delay={1.2} direction="right">
                <ParallaxCard>
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0f]/60 backdrop-blur-md group cursor-pointer transition-all duration-500 hover:border-white/20">
                    <a href="#games" className="absolute inset-0 z-0" aria-label="Go to Games Section" />
                    
                    <div className="relative overflow-hidden z-10 pointer-events-none">
                      <img
                        src="/photo_2026-02-18_02-54-03.jpg"
                        alt="Competitive FPS"
                        className="w-full h-[160px] object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/5 border border-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full pointer-events-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white/80 transition-colors duration-300 group-hover:animate-pulse" />
                        <span className="text-muted-foreground text-[10px] font-semibold tracking-wider uppercase group-hover:text-white/80 transition-colors duration-300">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                    <div className="p-4 relative z-10 pointer-events-none">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Crosshair className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-white/70 transition-colors duration-300" />
                            <span className="text-muted-foreground/50 text-[11px] tracking-wider uppercase group-hover:text-white/70 transition-colors duration-300">
                              Competitive FPS
                            </span>
                          </div>
                          <h3 className="text-foreground/40 font-heading font-bold text-lg italic group-hover:text-foreground/80 transition-colors duration-300">
                            TBA
                          </h3>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-transparent border border-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-white/5 group-hover:border-white/10">
                          <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 transition-all duration-300 group-hover:text-white/70" />
                        </div>
                      </div>
                    </div>
                  </div>
                </ParallaxCard>
              </FadeIn>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator — hidden on mobile to avoid overlap with stacked content */}
        <motion.div
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-3"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-muted-foreground/50 text-xs tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>


    </section>
  )
}
