import { ArrowUpRight, ChevronDown, Swords, ExternalLink, Globe } from "lucide-react"
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion"
import { useRef, MouseEvent } from "react"
import { FadeIn, Counter } from "@/components/motion"

const heroVideo = "/Untitled video - Made with Clipchamp (2).mp4"

/* ─── 3D Parallax Card ────────────────────────────────────────────────────── */

function ParallaxCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 400, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 400, damping: 30 })
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [100, 0]), { stiffness: 400, damping: 30 })
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [100, 0]), { stiffness: 400, damping: 30 })
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.1) 0%, transparent 60%)`

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative perspective-1000 w-full ${className || ""}`}
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

/* ─── World Preview Card (right column + mobile strip) ───────────────────── */

function WorldPreviewCard({
  image,
  name,
  subtitle,
  tag,
  accentColor,
  borderColor,
  badgeBg,
  glowColor,
  steamUrl,
  delay,
  tall = false,
}: {
  image: string
  name: string
  subtitle: string
  tag: string
  accentColor: string
  borderColor: string
  badgeBg: string
  glowColor: string
  steamUrl?: string
  delay: number
  tall?: boolean
}) {
  return (
    <FadeIn delay={delay} direction="right">
      <ParallaxCard>
        <div
          className={`relative rounded-2xl overflow-hidden border ${borderColor} bg-[#0a0a0f]/60 backdrop-blur-md group cursor-pointer transition-all duration-500 hover:${glowColor}`}
        >
          <a href="#sands-of-avalon" className="absolute inset-0 z-0" aria-label={`Go to ${name} section`} />

          {/* Image */}
          <div className="relative overflow-hidden z-10 pointer-events-none">
            <img
              src={image}
              alt={name}
              className={`w-full ${tall ? "h-[200px]" : "h-[160px]"} object-cover transition-transform duration-700 group-hover:scale-110`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />

            {/* Badges row */}
            <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-auto">
              {/* Status badge */}
              <div className={`flex items-center gap-1.5 ${badgeBg} border ${borderColor} backdrop-blur-sm px-2.5 py-1 rounded-full`}>
                <div className={`w-1.5 h-1.5 rounded-full ${accentColor.replace("text-", "bg-")} animate-pulse`} />
                <span className={`${accentColor} text-[10px] font-semibold tracking-wider uppercase`}>
                  {tag}
                </span>
              </div>
              {/* Steam link */}
              {steamUrl && (
                <a
                  href={steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#1b2838]/80 border border-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full hover:border-white/40 hover:bg-[#1b2838] transition-all duration-200 relative z-20"
                >
                  <ExternalLink className="w-2.5 h-2.5 text-white/70" />
                  <span className="text-white/80 text-[10px] font-semibold tracking-wider uppercase">Steam</span>
                </a>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 relative z-10 pointer-events-none">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Swords className={`w-3.5 h-3.5 ${accentColor} opacity-60`} />
                  <span className="text-muted-foreground/50 text-[11px] tracking-wider uppercase">
                    {subtitle}
                  </span>
                </div>
                <h3 className="text-foreground font-heading font-bold text-lg">{name}</h3>
              </div>
              <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:${badgeBg} group-hover:border-${borderColor} group-hover:scale-110`}>
                <ArrowUpRight className={`w-4 h-4 text-muted-foreground/50 transition-all duration-300 group-hover:${accentColor}`} />
              </div>
            </div>
          </div>
        </div>
      </ParallaxCard>
    </FadeIn>
  )
}

/* ─── Hero Section ────────────────────────────────────────────────────────── */

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 60])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section ref={sectionRef} className="relative">
      <div className="relative min-h-screen flex items-center overflow-hidden">

        {/* ── Background video / fallback image ── */}
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
            className="absolute inset-0 w-full h-full object-cover hidden md:block brightness-[0.85]"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Mobile: show Sands image */}
          <img
            src="/Anubismonolith.webp"
            alt="Sands of Avalon"
            className="absolute inset-0 w-full h-full object-cover md:hidden brightness-[0.85]"
          />
        </motion.div>

        {/* ── Overlays ── */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0f_100%)] opacity-60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 to-transparent z-[1] w-3/4" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent z-[1] h-1/2 mt-auto" />
        <div className="absolute inset-0 bg-[#1c1408]/40 mix-blend-multiply z-[1] pointer-events-none" />

        {/* ── Ambient flares ── */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[rgba(212,168,83,0.15)] rounded-full pointer-events-none z-[1] mix-blend-screen will-change-transform"
          style={{ filter: "blur(80px)", transform: "translateZ(0)" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[rgba(79,195,195,0.08)] rounded-full pointer-events-none z-[1] mix-blend-screen will-change-transform"
          style={{ filter: "blur(70px)", transform: "translateZ(0)" }}
        />
        <div
          className="absolute top-[-20%] left-[20%] w-[70vw] h-[70vw] bg-gold/15 rounded-full pointer-events-none z-[1] mix-blend-screen will-change-transform"
          style={{ animation: "flare-breathe 8s ease-in-out infinite", filter: "blur(90px)", transform: "translateZ(0)" }}
        />
        <div
          className="absolute top-[-10%] left-[15%] w-[50%] h-[150%] bg-gradient-to-b from-white/10 via-gold/5 to-transparent origin-top -rotate-[25deg] pointer-events-none z-[1] mix-blend-overlay will-change-transform"
          style={{ animation: "flare-breathe-slow 10s ease-in-out infinite", filter: "blur(50px)", transform: "translateZ(0)" }}
        />

        {/* ── Main content ── */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">

            {/* ── Left column ── */}
            <div className="flex-1 max-w-2xl">

              {/* Eyebrow — 1 Game · 2 Worlds badge */}
              <FadeIn delay={0.2}>
                <div className="inline-flex items-center gap-0 bg-black/40 border border-white/10 rounded-full overflow-hidden mb-6 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 border-r border-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span className="text-gold text-[10px] font-bold tracking-widest uppercase">Sands</span>
                    <span className="text-white/30 text-[10px] tracking-wide">Ancient</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5">
                    <Globe className="w-3 h-3 text-white/30" />
                    <span className="text-white/30 text-[10px] font-semibold tracking-widest uppercase whitespace-nowrap">1 Game · 2 Worlds</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3.5 py-1.5 border-l border-white/10">
                    <span className="text-[#4FC3C3]/60 text-[10px] tracking-wide">Medieval</span>
                    <span className="text-[#4FC3C3] text-[10px] font-bold tracking-widest uppercase">Avalon</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4FC3C3] animate-pulse" />
                  </div>
                </div>
              </FadeIn>

              {/* Main headline — letter-by-letter animation */}
              <h1 className="font-heading font-bold leading-[0.92] tracking-tight mb-7" aria-label="Sands of Avalon">

                {/* "Sands of" — gold, letters stagger in from below */}
                <span className="block text-5xl md:text-7xl lg:text-[6.5rem] text-gold mb-3 drop-shadow-[0_0_40px_rgba(212,168,83,0.4)]" aria-hidden="true">
                  {["S","a","n","d","s"," ","o","f"].map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.55,
                        delay: 0.3 + i * 0.055,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>

                {/* "Avalon" — white, letters stagger in slightly after, then glow pulses */}
                <span className="block text-4xl md:text-5xl lg:text-6xl text-foreground" aria-hidden="true">
                  {["A","v","a","l","o","n"].map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block relative"
                      initial={{ opacity: 0, y: 56, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.6,
                        delay: 0.75 + i * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {/* Glow underline that draws in after letters land */}
                  <motion.span
                    className="block h-[3px] mt-1 rounded-full bg-gradient-to-r from-gold/60 via-[#4FC3C3]/40 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 1.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformOrigin: "left" }}
                  />
                </span>
              </h1>

              {/* Two-world tagline */}
              <FadeIn delay={0.65}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-gold/80 text-sm font-semibold tracking-[0.15em] uppercase">Ancient Era</span>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-[#4FC3C3]/80 text-sm font-semibold tracking-[0.15em] uppercase">Medieval Era</span>
                </div>
              </FadeIn>

              {/* Accent line */}
              <FadeIn delay={0.75}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-px bg-gradient-to-r from-gold to-gold/20" />
                  <span className="text-white/50 text-sm italic tracking-wide">
                    One world was never enough.
                  </span>
                </div>
              </FadeIn>

              {/* Description */}
              <FadeIn delay={0.85}>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-lg mb-9">
                  A progression-focused ARPG spanning two distinct worlds. Explore the ancient sands of Egypt or forge your legend across medieval kingdoms — both await within a single game.
                </p>
              </FadeIn>

              {/* CTAs */}
              <FadeIn delay={1.0}>
                <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 xs:gap-4">
                  <motion.a
                    href="https://store.steampowered.com/app/4052670/Sands_Of_Avalon_Forge_Your_Legend/?beta=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-background px-7 py-4 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-300 group shadow-[0_0_20px_rgba(212,168,83,0.15)] hover:shadow-[0_0_40px_rgba(212,168,83,0.4)]"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span className="relative z-10">Wishlist on Steam</span>
                    <ExternalLink className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>

                  <motion.a
                    href="#sands-of-avalon"
                    className="inline-flex items-center justify-center gap-2.5 border border-white/20 hover:border-gold/30 hover:bg-white/[0.04] text-foreground px-7 py-4 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-200 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Both Worlds
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={1.2}>
                <div className="mt-12 pt-8 border-t border-white/[0.06]">
                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                    {[
                      { target: 2, suffix: "", label: "Worlds" },
                      { target: 15, suffix: "+", label: "Team Members" },
                      { target: 18, suffix: "", label: "Months In Dev" },
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

              {/* Mobile world preview strip */}
              <FadeIn delay={1.3}>
                <div className="lg:hidden grid grid-cols-2 gap-3 mt-10">
                  {/* Sands mini card */}
                  <a
                    href="#sands-of-avalon"
                    className="relative rounded-xl overflow-hidden border border-gold/30 group"
                  >
                    <img
                       src="/HighresScreenshot00108.webp"
                      alt="Sands — Ancient Era"
                      className="w-full h-[110px] object-cover transition-transform duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-[#0a0a0f]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2.5">
                      <p className="text-gold text-[9px] font-bold tracking-widest uppercase mb-0.5">Ancient</p>
                      <p className="text-white font-heading font-bold text-sm leading-none">Sands</p>
                    </div>
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  </a>
                  {/* Avalon mini card */}
                  <a
                    href="#sands-of-avalon"
                    className="relative rounded-xl overflow-hidden border border-[#4FC3C3]/30 group"
                  >
                    <img
                       src="/medieval/photo_2026-02-26_03-38-38.webp"
                      alt="Avalon — Medieval Era"
                      className="w-full h-[110px] object-cover transition-transform duration-500 group-hover:scale-105 brightness-75 group-hover:brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-[#0a0a0f]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2.5">
                      <p className="text-[#4FC3C3] text-[9px] font-bold tracking-widest uppercase mb-0.5">Medieval</p>
                      <p className="text-white font-heading font-bold text-sm leading-none">Avalon</p>
                    </div>
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#4FC3C3] animate-pulse" />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* ── Right column — two world cards (desktop only) ── */}
            <div className="hidden lg:flex flex-col gap-4 w-[380px] shrink-0" style={{ perspective: "1000px" }}>

              {/* Sands card */}
              <WorldPreviewCard
                image="/HighresScreenshot00108.webp"
                name="Sands"
                subtitle="Ancient Era"
                tag="In Development"
                accentColor="text-gold"
                borderColor="border-gold/25"
                badgeBg="bg-gold/10"
                glowColor="shadow-[0_0_50px_rgba(212,168,83,0.2)]"
                steamUrl="https://store.steampowered.com/app/4052670/Sands_Of_Avalon_Forge_Your_Legend/?beta=1"
                delay={1.0}
                tall
              />

              {/* Avalon card */}
              <WorldPreviewCard
                image="/medieval/photo_2026-02-26_03-38-38.webp"
                name="Avalon"
                subtitle="Medieval Era"
                tag="In Development"
                accentColor="text-[#4FC3C3]"
                borderColor="border-[#4FC3C3]/25"
                badgeBg="bg-[#4FC3C3]/10"
                glowColor="shadow-[0_0_50px_rgba(79,195,195,0.2)]"
                delay={1.2}
                tall={false}
              />

              {/* "1 Game · 2 Worlds" label between cards */}
              <FadeIn delay={1.35}>
                <div className="flex items-center gap-3 px-1">
                  <div className="flex-1 h-px bg-gradient-to-r from-gold/30 to-transparent" />
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-white/25" />
                    <span className="text-white/25 text-[10px] font-semibold tracking-widest uppercase whitespace-nowrap">
                      1 Game · 2 Worlds
                    </span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-l from-[#4FC3C3]/30 to-transparent" />
                </div>
              </FadeIn>
            </div>
          </div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-3"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-muted-foreground/50 text-xs tracking-[0.2em] uppercase">Scroll</span>
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
