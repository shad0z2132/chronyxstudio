import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const visionQuotes = [
  {
    quote:
      "We started Chronyx because we were tired of games designed around monetization instead of mastery. Every system in our titles exists to make the player's journey more meaningful — not to extract value from it. That's the studio we wanted to build.",
    name: "Studio Founder",
    role: "Creative Direction",
    department: "Leadership",
    initials: "SF",
    accent: "gold",
  },
  {
    quote:
      "The best competitive games don't just test reflexes — they reward strategy, adaptation, and team coordination. Our FPS is being built from the ground up for tournament play, with spectator systems and ranking frameworks designed to support real competitive communities.",
    name: "Lead Designer",
    role: "Competitive Systems",
    department: "Game Design",
    initials: "LD",
    accent: "cyan",
  },
  {
    quote:
      "Sands of Avalon isn't just another ARPG — it's a world where your choices define your path. Allegiance systems, deep character progression, and a living world that evolves with the community. We're building something players will invest years in, not weeks.",
    name: "Game Director",
    role: "ARPG Development",
    department: "Sands of Avalon",
    initials: "GD",
    accent: "purple",
  },
]

const accentMap = {
  gold: {
    text: "text-gold",
    border: "border-gold/20",
    hoverBorder: "hsl(42, 65%, 55%, 0.3)",
    bg: "bg-gold",
    bgMuted: "bg-gold/10",
    quote: "text-gold/20",
    toneClass: "tone-arpg",
    cornersClass: "arpg-corners",
    cornerTR: "arpg-corner-tr",
    cornerBL: "arpg-corner-bl",
    cornerBR: "arpg-corner-br",
    cardClass: "arpg-card",
    textureBg: "sand-grain-bg",
    toneBg: "linear-gradient(180deg, hsl(30 20% 6%), hsl(30 15% 5%))",
  },
  cyan: {
    text: "text-steel",
    border: "border-steel/20",
    hoverBorder: "hsl(195, 45%, 50%, 0.3)",
    bg: "bg-steel",
    bgMuted: "bg-steel/10",
    quote: "text-steel/20",
    toneClass: "tone-fps",
    cornersClass: "fps-corners",
    cornerTR: "",
    cornerBL: "fps-corner-bl",
    cornerBR: "fps-corner-br",
    cardClass: "fps-card",
    textureBg: "carbon-fiber-bg",
    toneBg: "linear-gradient(180deg, hsl(210 18% 5%), hsl(210 15% 4%))",
  },
  purple: {
    text: "text-purple",
    border: "border-purple/20",
    hoverBorder: "hsl(263, 70%, 58%, 0.3)",
    bg: "bg-purple",
    bgMuted: "bg-purple/10",
    quote: "text-purple/20",
    toneClass: "tone-arpg",
    cornersClass: "arpg-corners",
    cornerTR: "arpg-corner-tr",
    cornerBL: "arpg-corner-bl",
    cornerBR: "arpg-corner-br",
    cardClass: "arpg-card",
    textureBg: "sand-grain-bg",
    toneBg: "linear-gradient(180deg, hsl(30 20% 6%), hsl(30 15% 5%))",
  },
} as const

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-40 bg-card overflow-hidden">
      {/* Background texture — neutral */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Top separator glow */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-20">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot status-dot-purple" />
                <span className="text-sm font-mono tracking-[0.3em] text-purple/50 uppercase">
                  Team Vision
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-purple/30 to-transparent" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-xl text-balance font-heading tracking-tight">
                WHY WE BUILD
                <br />
                <span className="hero-text-gradient-alt">WHAT WE BUILD</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <div className="lg:pt-12">
              <p className="text-muted-foreground max-w-[360px] text-base leading-[1.85] font-tactical tracking-wide">
                Chronyx wasn't founded to make games — it was founded to make games differently. Hear from the team behind the vision: why we chose to build our own IPs, and what drives every design decision.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Vision cards - staggered masonry-like layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start" staggerDelay={0.15}>
          {visionQuotes.map((item, index) => {
            const accent = accentMap[item.accent as keyof typeof accentMap]
            return (
              <StaggerItem key={item.name}>
                <motion.div
                  className={`${accent.cornersClass} ${accent.cardClass} group border ${accent.border} p-6 lg:p-8 transition-all duration-500 ${accent.toneClass} ${
                    index === 1 ? "md:-mt-10" : index === 2 ? "md:mt-10" : ""
                  }`}
                  style={{ background: accent.toneBg }}
                  whileHover={{ y: -6, borderColor: accent.hoverBorder }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* IP-specific corners */}
                  {accent.cornerTR && <div className={accent.cornerTR} />}
                  <div className={accent.cornerBL} />
                  <div className={accent.cornerBR} />

                  {/* IP-specific background texture */}
                  <div className={`absolute inset-0 ${accent.textureBg} pointer-events-none`} />

                  {/* Quote mark */}
                  <div className={`${accent.quote} text-5xl font-serif leading-none mb-2 relative z-10`}>{'"'}</div>
                  <p className="text-muted-foreground text-base leading-[1.85] mb-6 font-tactical relative z-10">
                    {item.quote}
                  </p>
                  <div className={`h-px w-full bg-gradient-to-r from-transparent ${item.accent === "gold" ? "via-gold/20" : item.accent === "cyan" ? "via-steel/20" : "via-purple/20"} to-transparent mb-5 relative z-10`} />
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`w-10 h-10 ${accent.bgMuted} flex items-center justify-center border ${accent.border} group-hover:border-opacity-60 transition-colors duration-300`}>
                      <span className={`${accent.text} text-xs font-bold font-heading`}>{item.initials}</span>
                    </div>
                    <div>
                      <div className="text-foreground text-sm font-semibold font-heading">{item.name}</div>
                      <div className={`${accent.text} text-sm font-tactical`}>
                        {item.role} — {item.department}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
