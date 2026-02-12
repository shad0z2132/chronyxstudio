import { Flame, Crown, Swords, Eye } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const dna = [
  {
    icon: Flame,
    title: "IP-First Development",
    description:
      "We don't build games for other studios — we build our own. Every title is a long-term intellectual property designed to grow, evolve, and cultivate lasting communities.",
  },
  {
    icon: Crown,
    title: "Player Sovereignty",
    description:
      "Players own their journey. Progression is earned through gameplay — not purchased. Character identity and advancement are meaningful because they represent real investment.",
  },
  {
    icon: Swords,
    title: "Competitive Integrity",
    description:
      "From ranked ladders to tournament formats, competitive systems are built into the foundation — not bolted on. Skill expression and fair play are non-negotiable.",
  },
  {
    icon: Eye,
    title: "Long-Term Vision",
    description:
      "We build for years, not quarters. Each game is designed to deepen over time — expanding worlds, evolving meta, growing communities.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  Studio DNA
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
                What Drives
                <br />
                <span className="text-gold">Chronyx Studio</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
              We're not a service studio. We build our own worlds — deep, competitive,
              and designed to last. Every decision is guided by four core principles.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerDelay={0.08}
        >
          {dna.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group bg-card border border-white/[0.06] rounded-xl p-7 lg:p-8 h-full hover:border-white/[0.12] transition-all duration-300">
                <div className="mb-6">
                  <item.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-foreground font-heading font-semibold text-base mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
