import { Swords, Crosshair, Target, Flame, Shield } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/motion"
import { motion } from "framer-motion"

const milestones = [
  { icon: Swords, label: "Flagship ARPG in Development", status: "Active" },
  { icon: Crosshair, label: "Competitive FPS in Pre-Production", status: "Planning" },
  { icon: Target, label: "Esports Infrastructure Planned", status: "Roadmap" },
  { icon: Flame, label: "Web2-First, Player-Driven", status: "Philosophy" },
]

const stats = [
  { target: 2, suffix: "", label: "Active IPs" },
  { target: 1, suffix: "", label: "Genres Deep" },
  { target: 100, suffix: "%", label: "Player-First" },
]

const pillars = [
  "Deep Progression",
  "Competitive Integrity",
  "Player Identity",
  "Long-Term Vision",
  "No Pay-to-Win",
]

export function AwardsSection() {
  return (
    <section id="milestones" className="relative py-24 lg:py-36 overflow-hidden ambient-glow-gold-top">
      {/* ── Golden flare orbs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          left: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.10) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "15%",
          right: "12%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.07) 0%, rgba(212,168,83,0) 65%)",
          animation: "flare-breathe-slow 10s ease-in-out infinite",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  Studio Milestones
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight mb-5">
                Building the
                <br />
                <span className="text-gold">Foundation</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                Every great studio starts with a clear vision and the discipline to execute it.
                Chronyx is laying the groundwork for long-term IPs.
              </p>
            </FadeIn>

            {/* Milestone badges */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10" staggerDelay={0.08}>
              {milestones.map((milestone) => (
                <StaggerItem key={milestone.label}>
                  <motion.div
                    className="group relative flex items-center gap-3 bg-card border border-white/[0.06] rounded-xl p-4 hover:border-white/[0.1] transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    {/* Top accent border */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent group-hover:via-gold/50 transition-all duration-500" />
                    <div className="w-10 h-10 flex items-center justify-center bg-gold/[0.06] rounded-lg shrink-0 group-hover:bg-gold/[0.1] transition-colors duration-300">
                      <milestone.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-foreground text-sm font-medium block">{milestone.label}</span>
                      <span className="text-gold/60 text-[10px] tracking-wider uppercase">{milestone.status}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  Studio Pillars
                </span>
              </div>

              <div className="group/pillars relative bg-card border border-white/[0.06] rounded-xl p-8 overflow-hidden hover:border-white/[0.1] transition-all duration-500">
                {/* Top accent border */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover/pillars:via-gold/60 transition-all duration-500" />
                {/* Subtle watermark — now relative to this container */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                  <Shield className="w-48 h-48 text-gold" strokeWidth={0.3} />
                </div>

                <div className="relative z-10 flex flex-col gap-4">
                  {pillars.map((pillar, i) => (
                    <motion.div
                      key={pillar}
                      className="flex items-center gap-3 group cursor-default"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + 0.2 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gold/60 group-hover:bg-gold transition-colors duration-200" />
                      <span className="text-foreground text-sm font-medium group-hover:text-gold transition-colors duration-200">
                        {pillar}
                      </span>
                      <div className="h-px flex-1 bg-white/[0.04] group-hover:bg-gold/10 transition-colors duration-300" />
                      <span className="text-gold/40 text-xs font-heading font-bold tabular-nums">
                        0{i + 1}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-8 pt-6 border-t border-white/[0.06] relative z-10">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-gold text-3xl font-heading font-bold">
                          <Counter target={stat.target} suffix={stat.suffix} />
                        </div>
                        <div className="text-muted-foreground text-xs mt-1 tracking-wide uppercase">
                          {stat.label}
                        </div>
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
