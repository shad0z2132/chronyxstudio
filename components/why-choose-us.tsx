import { Flame, Crown, Swords, Eye } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const dna = [
  {
    icon: Flame,
    title: "IP-FIRST DEVELOPMENT",
    description:
      "We don't build games for other studios — we build our own. Every title is a long-term intellectual property designed to grow, evolve, and cultivate lasting communities. Chronyx is a studio of creators, not contractors.",
    accent: "gold",
  },
  {
    icon: Crown,
    title: "PLAYER SOVEREIGNTY",
    description:
      "Players own their journey. Progression is earned through gameplay — not purchased. Character identity, allegiance, and advancement are meaningful because they represent real investment. No shortcuts, no pay-to-skip.",
    accent: "purple",
  },
  {
    icon: Swords,
    title: "COMPETITIVE INTEGRITY",
    description:
      "From ranked ladders to tournament formats, competitive systems are built into the foundation — not bolted on. Skill expression, team coordination, and fair play are non-negotiable pillars across every Chronyx title.",
    accent: "cyan",
  },
  {
    icon: Eye,
    title: "LONG-TERM VISION",
    description:
      "We build for years, not quarters. Each game is designed to deepen over time — expanding worlds, evolving meta, growing communities. The best games aren't launched, they're cultivated.",
    accent: "gold",
  },
]

const accentMap = {
  gold: {
    icon: "text-gold",
    border: "border-gold/20",
    hoverBorder: "group-hover:border-gold/40",
    dotBg: "bg-gold",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(212,168,83,0.08)]",
  },
  cyan: {
    icon: "text-cyan",
    border: "border-cyan/20",
    hoverBorder: "group-hover:border-cyan/40",
    dotBg: "bg-cyan",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]",
  },
  purple: {
    icon: "text-purple",
    border: "border-purple/20",
    hoverBorder: "group-hover:border-purple/40",
    dotBg: "bg-purple",
    glowColor: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]",
  },
} as const

export function WhyChooseUs() {
  return (
    <section className="relative py-28 lg:py-40 pb-44 lg:pb-56 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 hex-grid-bg" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Left content margin line — gold neon glow accent */}
        <div className="absolute top-0 left-0 w-[1px] h-full z-20 bg-gradient-to-b from-[hsl(220,12%,14%)] via-[hsl(220,12%,18%)] to-[hsl(220,12%,14%)]" />
        <div className="absolute top-[50%] left-0 w-[30px] h-[200px] -translate-y-1/2 z-10 pointer-events-none bg-gold/30 blur-[20px] rounded-full" />
        <div className="absolute top-[50%] left-0 w-[6px] h-[120px] -translate-y-1/2 z-20 pointer-events-none bg-gold/80 blur-[4px] rounded-full" />

        {/* Right content margin line — purple glow */}
        <div className="absolute top-0 right-0 w-[1px] h-full z-20 bg-gradient-to-b from-[hsl(220,12%,14%)] via-[hsl(220,12%,18%)] to-[hsl(220,12%,14%)]" />
        <div className="absolute top-[50%] right-0 w-[20px] h-[150px] -translate-y-1/2 z-10 pointer-events-none bg-purple/15 blur-[15px] rounded-full" />

        {/* Header row: large heading left, description right */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-24">
          <FadeIn direction="left">
            <div>
              {/* Section label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot status-dot-gold" />
                <span className="text-sm font-mono tracking-[0.3em] text-gold/50 uppercase">
                  Studio DNA
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-gold/30 to-transparent" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-2xl font-heading tracking-tight">
                WHAT DRIVES
                <br />
                <span className="hero-text-gradient">CHRONYX STUDIO</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="lg:pt-12">
              <p className="text-muted-foreground max-w-[340px] text-base leading-[1.85] font-tactical tracking-wide">
                We're not a service studio. We build our own worlds — deep, competitive, and designed to last. Every decision is guided by four core principles that define how we create.
              </p>
              {/* Mini genre indicators */}
              <div className="flex items-center gap-3 mt-4">
                <span className="genre-badge genre-badge-arpg">
                  <Swords className="w-3 h-3" />
                  ARPG
                </span>
                <span className="genre-badge genre-badge-fps">
                  <Swords className="w-3 h-3" />
                  FPS
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Cards + watermark area */}
        <div className="relative">
          {/* Feature cards — 4-column grid */}
          <StaggerContainer
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.1}
          >
            {dna.map((item) => {
              const accent = accentMap[item.accent as keyof typeof accentMap]
              return (
                <StaggerItem key={item.title}>
                  <div
                    className={`hud-corners group relative bg-card border ${accent.border} ${accent.hoverBorder} px-7 pt-8 pb-10 lg:px-8 lg:pt-10 lg:pb-12 h-full transition-all duration-500 ${accent.glowColor}`}
                  >
                    {/* HUD bottom corners */}
                    <div className="hud-corner-bl" />
                    <div className="hud-corner-br" />

                    <div className="relative z-10">
                      {/* Icon — color-coded, no container */}
                      <div className="mb-8 flex items-center gap-3">
                        <item.icon className={`w-7 h-7 ${accent.icon}`} strokeWidth={1.5} />
                        <div className={`w-1.5 h-1.5 rounded-full ${accent.dotBg} animate-pulse`} />
                      </div>

                      {/* Title — Orbitron, white, bold, uppercase */}
                      <h3 className="text-sm font-bold text-foreground tracking-[0.08em] mb-5 leading-snug font-heading uppercase">
                        {item.title}
                      </h3>

                      {/* Description — Chakra Petch */}
                      <p className="text-muted-foreground text-base leading-[1.8] font-tactical">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          {/* CHRONYX watermark — below cards, full width */}
          <div className="pointer-events-none select-none mt-[-1rem] relative z-0">
            <div
              className="text-center font-heading font-black text-[clamp(6rem,18vw,15rem)] leading-none tracking-[0.2em] text-transparent uppercase"
              style={{ WebkitTextStroke: "1.5px hsl(220, 12%, 10%)" }}
            >
              CHRONYX
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
