import { ArrowUpRight, Layers, Shield, Zap, Globe } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const approaches = [
  {
    title: "WEB2-FIRST",
    image: "/images/outstaffing.jpg",
    imageAlt: "Web-first game development",
    accent: "gold",
    icon: Globe,
    points: [
      "Accessible, performant, and quality-driven development",
      "No blockchain complexity — pure gameplay focus",
      "Standard distribution (Steam, storefronts) as priority",
      "Build audiences first, explore Web3 integrations later",
    ],
  },
  {
    title: "INDEPENDENT TITLES",
    image: "/images/dedicated-team.jpg",
    imageAlt: "Independent game development",
    accent: "steel",
    icon: Layers,
    points: [
      "Each IP developed with its own team and vision",
      "No shared engines or forced cross-game mechanics",
      "Genre-specific design decisions, not one-size-fits-all",
      "Quality over quantity — fewer titles, deeper experiences",
    ],
  },
  {
    title: "PLAYER-DRIVEN DESIGN",
    image: "/images/managed-outsourcing.jpg",
    imageAlt: "Player-focused game design",
    accent: "purple",
    icon: Shield,
    points: [
      "Community feedback shapes development priorities",
      "No predatory monetization or pay-to-win mechanics",
      "Transparent roadmaps and development updates",
      "Long-term engagement over short-term extraction",
    ],
  },
]

const accentMap = {
  gold: {
    text: "text-gold",
    border: "border-gold/20",
    hoverBorder: "hover:border-gold/40",
    bg: "bg-gold",
    bgMuted: "bg-gold/10",
    dot: "status-dot-gold",
    line: "bg-gold",
    icon: "text-gold",
  },
  steel: {
    text: "text-steel",
    border: "border-steel/20",
    hoverBorder: "hover:border-steel/40",
    bg: "bg-steel",
    bgMuted: "bg-steel/10",
    dot: "status-dot-steel",
    line: "bg-steel",
    icon: "text-steel",
  },
  purple: {
    text: "text-purple",
    border: "border-purple/20",
    hoverBorder: "hover:border-purple/40",
    bg: "bg-purple",
    bgMuted: "bg-purple/10",
    dot: "status-dot-purple",
    line: "bg-purple",
    icon: "text-purple",
  },
} as const

const principles = [
  "COMMITMENT",
  "MASTERY",
  "INTEGRITY",
  "DEPTH",
  "VISION",
  "CRAFT",
  "IDENTITY",
]

export function CooperationSection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background texture — neutral */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-20">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot status-dot-purple" />
                <span className="text-sm font-mono tracking-[0.3em] text-purple/50 uppercase">
                  How We Build
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-purple/30 to-transparent" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-xl text-balance font-heading tracking-tight">
                OUR DEVELOPMENT
                <br />
                <span className="hero-text-gradient-alt">APPROACH</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="lg:pt-12">
              <p className="text-muted-foreground max-w-[360px] text-base leading-[1.85] font-tactical tracking-wide">
                Chronyx follows a deliberate, player-first development philosophy. We prioritize accessibility, performance, and game quality above all — building experiences that respect players' time and investment.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Approach cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.15}>
          {approaches.map((approach) => {
            const a = accentMap[approach.accent as keyof typeof accentMap]
            const Icon = approach.icon
            return (
              <StaggerItem key={approach.title}>
                <motion.div
                  className={`hud-corners bg-card border ${a.border} ${a.hoverBorder} overflow-hidden group transition-all duration-500 h-full`}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="hud-corner-bl" />
                  <div className="hud-corner-br" />

                  <div className="relative h-52 overflow-hidden glitch-effect">
                    <img
                      src={approach.image}
                      alt={approach.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 w-10 h-px ${a.bg} group-hover:w-full transition-all duration-500`} />
                    <div className="absolute bottom-4 left-5 flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${a.icon}`} strokeWidth={1.5} />
                      <h3 className={`${a.text} font-black text-sm tracking-wider font-heading`}>{approach.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    {approach.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${a.bg} mt-1.5 shrink-0`} />
                        <span className="text-muted-foreground text-base leading-relaxed font-tactical">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="flex justify-center mt-16">
            <motion.a
              href="#contact"
              className="game-btn game-btn-primary inline-flex items-center gap-2 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              JOIN THE MISSION
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </FadeIn>

        {/* Core Values bar */}
        <FadeIn delay={0.2}>
          <div className="mt-24">
            <div className="flex justify-center mb-10">
              <span className="relative text-gold font-bold text-sm tracking-[0.25em] uppercase px-6 py-2 border border-gold/30 bg-background font-heading">
                CORE VALUES
              </span>
            </div>
            <StaggerContainer className="flex items-center justify-center gap-8 lg:gap-14 flex-wrap" staggerDelay={0.06}>
              {principles.map((value) => (
                <StaggerItem key={value}>
                  <motion.span
                    className="text-muted-foreground/40 text-sm font-bold tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300 cursor-default font-heading"
                    whileHover={{ scale: 1.1 }}
                  >
                    {value}
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
