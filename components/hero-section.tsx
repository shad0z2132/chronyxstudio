import { ArrowUpRight, ChevronDown, Gamepad2, Crosshair, Hourglass } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FadeIn, RotatingWords, Counter } from "@/components/motion"

const heroBackground = "/alien-planet-building.webp"
const heroVideo = "/Untitled video - Made with Clipchamp (2).mp4"

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
        {/* Background video (desktop) + image fallback (mobile) */}
        <motion.div
          className="absolute inset-0"
          style={{ y: bgY, scale: bgScale }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            poster={heroBackground}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <img
            src={heroBackground}
            alt="Epic fantasy landscape"
            className="absolute inset-0 w-full h-full object-cover md:hidden"
          />
        </motion.div>

        {/* Dark gradient overlays — balanced tint */}
        <div className="absolute inset-0 bg-[#0a0a0f]/55 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/95 via-[#0a0a0f]/65 to-[#0a0a0f]/35 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/95 via-[#0a0a0f]/15 to-[#0a0a0f]/40 z-[1]" />

        {/* Main content — two column layout */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">
            {/* Left column — headline + CTAs */}
            <div className="flex-1 max-w-2xl">
              {/* Eyebrow with studio badge */}
              <FadeIn delay={0.2}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2.5 bg-gold/[0.08] border border-gold/15 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Hourglass className="w-3.5 h-3.5 text-gold" />
                    <span className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">
                      Chronyx Studio
                    </span>
                  </div>
                  <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-gold/30 to-transparent hidden sm:block" />
                </div>
              </FadeIn>

              {/* Heading — enhanced hierarchy */}
              <h1 className="font-heading font-bold leading-[0.92] tracking-tight mb-7">
                <FadeIn delay={0.3}>
                  <span className="block text-lg md:text-xl lg:text-2xl text-white/40 mb-4 font-medium tracking-[0.08em] uppercase">
                    We Build
                  </span>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <span className="block text-5xl md:text-7xl lg:text-[6.5rem] text-gold mb-3 drop-shadow-[0_0_40px_rgba(212,168,83,0.15)]">
                    <RotatingWords
                      words={["Legendary", "Enduring", "Competitive"]}
                      interval={3500}
                      className="min-w-[280px] md:min-w-[440px] lg:min-w-[560px]"
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
                    className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-light text-background px-10 py-4 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-200 group"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(212,168,83,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Explore Our Games
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                          <span className="text-white/30 text-[11px] uppercase tracking-wider">
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
                      <span className="text-white/30 text-[11px] font-medium tracking-wider uppercase">
                        Powered by UE5
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right column — stacked game cards (desktop only) */}
            <div className="hidden lg:flex flex-col gap-4 w-[400px] shrink-0">
              {/* Sands of Avalon card */}
              <FadeIn delay={1.0} direction="right">
                <a href="#games" className="block rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0f]/60 backdrop-blur-sm group cursor-pointer transition-all duration-300 hover:border-gold/20 hover:shadow-[0_0_40px_rgba(212,168,83,0.08)]">
                  <div className="relative overflow-hidden">
                    <img
                      src="/image (27).png"
                      alt="Sands of Avalon"
                      className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-gold/10 border border-gold/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                      <span className="text-gold text-[10px] font-semibold tracking-wider uppercase">
                        In Development
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Gamepad2 className="w-3.5 h-3.5 text-gold/50" />
                          <span className="text-muted-foreground/40 text-[11px] tracking-wider uppercase">
                            Action RPG
                          </span>
                        </div>
                        <h3 className="text-foreground font-heading font-bold text-lg">
                          Sands of Avalon
                        </h3>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 transition-all duration-200 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </a>
              </FadeIn>

              {/* Competitive FPS card */}
              <FadeIn delay={1.2} direction="right">
                <a href="#games" className="block rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0f]/60 backdrop-blur-sm group cursor-pointer transition-all duration-300 hover:border-gold/20 hover:shadow-[0_0_40px_rgba(212,168,83,0.08)]">
                  <div className="relative overflow-hidden">
                    <img
                      src="/image-32.webp"
                      alt="Competitive FPS"
                      className="w-full h-[160px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/5 border border-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                      <span className="text-muted-foreground text-[10px] font-semibold tracking-wider uppercase">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Crosshair className="w-3.5 h-3.5 text-muted-foreground/40" />
                          <span className="text-muted-foreground/40 text-[11px] tracking-wider uppercase">
                            Competitive FPS
                          </span>
                        </div>
                        <h3 className="text-foreground font-heading font-bold text-lg">
                          Untitled Project
                        </h3>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 transition-all duration-200 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>
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


    </section>
  )
}
