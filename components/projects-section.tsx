import { ArrowUpRight, Swords, Crosshair, Shield, Map, Users, Trophy } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const worlds = [
  {
    title: "SANDS OF AVALON",
    subtitle: "Flagship ARPG",
    image: "/images/project-1.jpg",
    badge: "arpg",
    accent: "gold",
    tagline: "FORGE YOUR LEGEND",
    features: [
      { icon: Map, text: "Vast world shaped by exploration and discovery" },
      { icon: Shield, text: "Deep character progression — earned, never bought" },
      { icon: Users, text: "Allegiance systems that define your path" },
      { icon: Swords, text: "Rare resources and evolving challenges" },
    ],
    description:
      "A progression-focused ARPG where every step forward is earned. Navigate a world of ancient power, shifting allegiances, and evolving threats. Your character's journey is yours alone.",
  },
  {
    title: "COMPETITIVE FPS",
    subtitle: "Tournament-Ready Shooter",
    image: "/images/project-2.jpg",
    badge: "fps",
    accent: "cyan",
    tagline: "PROVE YOUR SKILL",
    features: [
      { icon: Crosshair, text: "Precision gunplay with high skill ceiling" },
      { icon: Trophy, text: "Ranked ladders and tournament infrastructure" },
      { icon: Users, text: "Team-based tactics and coordinated play" },
      { icon: Shield, text: "Competitive integrity — no pay-to-win" },
    ],
    description:
      "Built from the ground up for esports. Every mechanic serves competitive clarity. Spectator systems, ranked progression, and event frameworks designed for thriving competitive communities.",
  },
]

const accentStyles = {
  gold: {
    text: "text-gold",
    border: "border-gold",
    borderMuted: "border-gold/30",
    bg: "bg-gold",
    bgMuted: "bg-gold/10",
    shadow: "shadow-gold/20",
    badge: "genre-badge-arpg",
  },
  cyan: {
    text: "text-cyan",
    border: "border-cyan",
    borderMuted: "border-cyan/30",
    bg: "bg-cyan",
    bgMuted: "bg-cyan/10",
    shadow: "shadow-cyan/20",
    badge: "genre-badge-fps",
  },
} as const

export function ProjectsSection() {
  const [active, setActive] = useState(0)
  const current = worlds[active]
  const accent = accentStyles[current.accent as keyof typeof accentStyles]

  return (
    <section id="projects" className="relative py-28 lg:py-40 overflow-hidden bg-card">
      {/* Background texture */}
      <div className="absolute inset-0 hex-grid-bg" />

      {/* Top separator glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-20">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot status-dot-gold" />
                <span className="text-sm font-mono tracking-[0.3em] text-gold/50 uppercase">
                  Our Worlds
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-gold/30 to-transparent" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-2xl font-heading tracking-tight">
                TWO WORLDS.
                <br />
                <span className="hero-text-gradient">ONE VISION.</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="lg:pt-12">
              <p className="text-muted-foreground max-w-[360px] text-base leading-[1.85] font-tactical tracking-wide">
                Each Chronyx title is developed independently — with its own mechanics, pacing, and audience. Deep RPG experiences and fast competitive gameplay, built without compromise.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <span className="genre-badge genre-badge-arpg">
                  <Swords className="w-3 h-3" />
                  ARPG
                </span>
                <span className="genre-badge genre-badge-fps">
                  <Crosshair className="w-3 h-3" />
                  FPS
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* World selector tabs */}
        <div className="flex gap-3 mb-10">
          {worlds.map((world, i) => {
            const a = accentStyles[world.accent as keyof typeof accentStyles]
            return (
              <motion.button
                key={world.title}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 px-5 py-3 text-sm font-bold tracking-[0.15em] uppercase font-tactical transition-all duration-300 border ${
                  i === active
                    ? `${a.border} ${a.text} ${a.bgMuted}`
                    : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {world.badge === "arpg" ? (
                  <Swords className="w-3.5 h-3.5" />
                ) : (
                  <Crosshair className="w-3.5 h-3.5" />
                )}
                {world.title}
                {i === active && (
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-[2px] ${a.bg}`}
                    layoutId="worldTabIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Active world display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className={`hud-corners relative overflow-hidden border ${accent.borderMuted} bg-background transition-all duration-500`}>
              {/* HUD corners */}
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              <div className="flex flex-col lg:flex-row min-h-[420px]">
                {/* Left: Image with glitch effect */}
                <div className="relative lg:w-[45%] min-h-[280px] lg:min-h-0 glitch-effect overflow-hidden group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/40 to-background" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />

                  {/* Tagline overlay */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <span className={`text-xs font-mono tracking-[0.3em] ${accent.text} uppercase`}>
                      {current.tagline}
                    </span>
                  </div>
                </div>

                {/* Right: Info panel */}
                <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 lg:w-[55%]">
                  {/* Badge + subtitle */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`genre-badge ${accent.badge}`}>
                      {current.badge === "arpg" ? (
                        <Swords className="w-3 h-3" />
                      ) : (
                        <Crosshair className="w-3 h-3" />
                      )}
                      {current.subtitle}
                    </span>
                    <div className={`w-1.5 h-1.5 rounded-full ${accent.bg} animate-pulse`} />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight font-heading mb-3">
                    {current.title}
                  </h3>

                  <p className="text-muted-foreground text-base leading-[1.85] mb-8 max-w-md font-tactical">
                    {current.description}
                  </p>

                  {/* Feature list */}
                  <div className="flex flex-col gap-3 mb-8">
                    {current.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-7 h-7 ${accent.bgMuted} flex items-center justify-center shrink-0`}>
                          <feature.icon className={`w-3.5 h-3.5 ${accent.text}`} strokeWidth={1.5} />
                        </div>
                        <span className="text-foreground/80 text-base font-tactical">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className={`game-btn game-btn-${current.accent === "gold" ? "primary" : "secondary"} inline-flex items-center gap-2 w-fit text-xs`}
                  >
                    LEARN MORE
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${accent.text === "text-gold" ? "via-gold/40" : "via-cyan/40"} to-transparent`} />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* World selector dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {worlds.map((world, i) => {
            const a = accentStyles[world.accent as keyof typeof accentStyles]
            return (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`w-10 h-10 text-xs font-bold font-tactical border transition-all duration-300 ${
                  i === active
                    ? `${a.border} ${a.bg} text-background`
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {i + 1}
              </motion.button>
            )
          })}
        </div>

        {/* Watermark */}
        <div className="pointer-events-none select-none mt-4 relative z-0">
          <div
            className="text-center font-heading font-black text-[clamp(4rem,14vw,11rem)] leading-none tracking-[0.15em] text-transparent uppercase"
            style={{ WebkitTextStroke: "1.5px hsl(220, 12%, 8%)" }}
          >
            WORLDS
          </div>
        </div>
      </div>
    </section>
  )
}
