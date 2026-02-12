import { Swords, Crosshair, Target, Flame, Map, Shield } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/motion"
import { motion } from "framer-motion"

const milestones = [
  { icon: Swords, label: "Flagship ARPG in Development", accent: "gold" },
  { icon: Crosshair, label: "Competitive FPS in Pre-Production", accent: "cyan" },
  { icon: Target, label: "Esports Infrastructure Planned", accent: "cyan" },
  { icon: Flame, label: "Web2-First, Player-Driven", accent: "gold" },
]

const stats = [
  { target: 2, suffix: "", label: "Active IPs" },
  { target: 1, suffix: "", label: "Genres Deep" },
  { target: 100, suffix: "%", label: "Player-First" },
]

const pillars = [
  { label: "Deep Progression", accent: "text-gold" },
  { label: "Competitive Integrity", accent: "text-cyan" },
  { label: "Player Identity", accent: "text-purple" },
  { label: "Long-Term Vision", accent: "text-gold" },
  { label: "No Pay-to-Win", accent: "text-cyan" },
]

const accentMap = {
  gold: {
    text: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
    hoverBorder: "hover:border-gold/40",
  },
  cyan: {
    text: "text-cyan",
    bg: "bg-cyan/10",
    border: "border-cyan/20",
    hoverBorder: "hover:border-cyan/40",
  },
} as const

export function AwardsSection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 hex-grid-bg" />

      {/* Top neon divider */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot status-dot-gold" />
                <span className="text-sm font-mono tracking-[0.3em] text-gold/50 uppercase">
                  Studio Milestones
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-gold/30 to-transparent" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] text-balance mb-6 font-heading tracking-tight">
                BUILDING THE
                <br />
                <span className="hero-text-gradient">FOUNDATION</span>
              </h2>
              <p className="text-muted-foreground text-base leading-[1.85] max-w-md font-tactical">
                Every great studio starts with a clear vision and the discipline to execute it. Chronyx is laying the groundwork for long-term IPs that will define new standards in progression-focused and competitive gaming.
              </p>
            </FadeIn>

            {/* Milestone badges */}
            <StaggerContainer className="grid grid-cols-2 gap-4 mt-10" staggerDelay={0.1}>
              {milestones.map((milestone) => {
                const a = accentMap[milestone.accent as keyof typeof accentMap]
                return (
                  <StaggerItem key={milestone.label}>
                    <motion.div
                      className={`hud-corners group flex items-center gap-3 bg-card border ${a.border} ${a.hoverBorder} p-4 transition-all duration-500`}
                      whileHover={{ scale: 1.03, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <div className="hud-corner-bl" />
                      <div className="hud-corner-br" />
                      <div className={`w-10 h-10 flex items-center justify-center ${a.bg} border ${a.border} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <milestone.icon className={`w-5 h-5 ${a.text}`} strokeWidth={1.5} />
                      </div>
                      <span className="text-foreground text-sm font-semibold font-tactical">{milestone.label}</span>
                    </motion.div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>

          {/* Right: Vision & Stats */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot status-dot-cyan" />
                <span className="text-sm font-mono tracking-[0.3em] text-cyan/50 uppercase">
                  Studio <span className="font-bold text-foreground">Pillars</span>
                </span>
              </div>

              {/* Pillars display */}
              <div className="hud-corners relative bg-card border border-border p-8 overflow-hidden">
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Background watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                  <Shield className="w-full h-full text-gold" strokeWidth={0.3} />
                </div>

                <div className="relative z-10 flex flex-col gap-4">
                  {pillars.map((pillar, i) => (
                    <motion.div
                      key={pillar.label}
                      className="flex items-center gap-3 group cursor-default"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <div className={`w-2 h-2 rounded-full ${pillar.accent === "text-gold" ? "bg-gold" : pillar.accent === "text-cyan" ? "bg-cyan" : "bg-purple"} group-hover:shadow-[0_0_12px] transition-shadow duration-300`} />
                      <span className={`text-foreground text-base font-tactical group-hover:${pillar.accent} transition-colors duration-300`}>{pillar.label}</span>
                      <div className={`h-px flex-1 bg-gradient-to-r from-border to-transparent`} />
                    </motion.div>
                  ))}
                </div>

                {/* Stats with animated counters */}
                <div className="mt-8 pt-6 border-t border-border relative z-10">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-gold text-3xl font-black font-heading">
                          <Counter target={stat.target} suffix={stat.suffix} />
                        </div>
                        <div className="text-muted-foreground text-sm mt-1 tracking-wide uppercase font-tactical">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
