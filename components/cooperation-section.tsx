import { ArrowUpRight, Globe, Layers, Shield } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const approaches = [
  {
    title: "Web2-First",
    image: "/images/outstaffing.jpg",
    imageAlt: "Web-first game development",
    icon: Globe,
    points: [
      "Accessible, performant, and quality-driven development",
      "No blockchain complexity — pure gameplay focus",
      "Standard distribution (Steam, storefronts) as priority",
      "Build audiences first, explore Web3 integrations later",
    ],
  },
  {
    title: "Independent Titles",
    image: "/images/dedicated-team.jpg",
    imageAlt: "Independent game development",
    icon: Layers,
    points: [
      "Each IP developed with its own team and vision",
      "No shared engines or forced cross-game mechanics",
      "Genre-specific design decisions, not one-size-fits-all",
      "Quality over quantity — fewer titles, deeper experiences",
    ],
  },
  {
    title: "Player-Driven Design",
    image: "/images/managed-outsourcing.jpg",
    imageAlt: "Player-focused game design",
    icon: Shield,
    points: [
      "Community feedback shapes development priorities",
      "No predatory monetization or pay-to-win mechanics",
      "Transparent roadmaps and development updates",
      "Long-term engagement over short-term extraction",
    ],
  },
]

const coreValues = [
  "Commitment", "Mastery", "Integrity", "Depth", "Vision", "Craft", "Identity",
]

export function CooperationSection() {
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
                  How We Build
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
                Our Development
                <br />
                <span className="text-gold">Approach</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
              Chronyx follows a deliberate, player-first development philosophy.
              We prioritize accessibility, performance, and game quality above all.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.1}>
          {approaches.map((approach) => {
            const Icon = approach.icon
            return (
              <StaggerItem key={approach.title}>
                <motion.div
                  className="group bg-card border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.12] transition-all duration-300 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={approach.image}
                      alt={approach.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute bottom-4 left-5 flex items-center gap-2">
                      <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                      <h3 className="text-gold font-heading font-bold text-sm tracking-wide">
                        {approach.title}
                      </h3>
                    </div>
                  </div>

                  {/* Points */}
                  <div className="p-6 flex flex-col gap-3">
                    {approach.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.3}>
          <div className="flex justify-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-background px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide uppercase transition-colors duration-200 group"
            >
              Join the Mission
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </FadeIn>

        {/* Core Values */}
        <FadeIn delay={0.2}>
          <div className="mt-20">
            <div className="flex justify-center mb-8">
              <span className="text-gold font-heading font-semibold text-sm tracking-[0.2em] uppercase px-5 py-2 border border-gold/20 rounded-lg bg-gold/[0.04]">
                Core Values
              </span>
            </div>
            <StaggerContainer className="flex items-center justify-center gap-6 lg:gap-12 flex-wrap" staggerDelay={0.04}>
              {coreValues.map((value) => (
                <StaggerItem key={value}>
                  <span className="text-muted-foreground/40 text-sm font-semibold tracking-[0.15em] uppercase hover:text-gold transition-colors duration-200 cursor-default">
                    {value}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
