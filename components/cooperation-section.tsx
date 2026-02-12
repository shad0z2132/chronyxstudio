import { ArrowUpRight, Globe, Layers, Shield, ChevronRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const approaches = [
  {
    number: "01",
    title: "Web2-First",
    icon: Globe,
    tagline: "Accessible by default",
    description:
      "No blockchain complexity — pure gameplay focus. Standard distribution through Steam and major storefronts as priority. Build audiences first, explore integrations later.",
    points: [
      "Performant, quality-driven development",
      "Standard distribution channels as priority",
      "Web3 only if it genuinely serves gameplay",
    ],
    accent: "from-amber-500/10 to-transparent",
    stat: { value: "0", label: "Blockchain Tax" },
  },
  {
    number: "02",
    title: "Independent Titles",
    icon: Layers,
    tagline: "Each IP stands alone",
    description:
      "Every title is developed with its own dedicated team and vision. No shared engines or forced cross-game mechanics — genre-specific decisions, not one-size-fits-all.",
    points: [
      "Dedicated team per IP",
      "Genre-specific design decisions",
      "Quality over quantity — deeper experiences",
    ],
    accent: "from-sky-500/10 to-transparent",
    stat: { value: "2", label: "Dedicated Teams" },
  },
  {
    number: "03",
    title: "Player-Driven Design",
    icon: Shield,
    tagline: "Respect earns loyalty",
    description:
      "Community feedback shapes development priorities. No predatory monetization. Transparent roadmaps and long-term engagement over short-term extraction.",
    points: [
      "Community-shaped development priorities",
      "No pay-to-win mechanics",
      "Transparent roadmaps & updates",
    ],
    accent: "from-emerald-500/10 to-transparent",
    stat: { value: "100%", label: "Transparent" },
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

        {/* Approach Cards — editorial numbered layout */}
        <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.12}>
          {approaches.map((approach) => {
            const Icon = approach.icon
            return (
              <StaggerItem key={approach.title}>
                <motion.div
                  className="group relative bg-[#0d0d14] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.1] transition-all duration-500"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Top accent border */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/60 transition-all duration-500" />

                  {/* Accent gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${approach.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                   <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 p-6 lg:p-8">
                     {/* Number + Icon */}
                     <div className="flex items-center gap-5 shrink-0">
                       <span className="text-gold/10 text-6xl lg:text-7xl font-heading font-black leading-none select-none">
                         {approach.number}
                       </span>
                       <div className="flex flex-col items-center gap-2">
                         <div className="w-12 h-12 bg-gold/[0.06] rounded-xl flex items-center justify-center border border-gold/10 group-hover:bg-gold/[0.1] transition-colors duration-300">
                           <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                         </div>
                       </div>
                     </div>

                     {/* Title + Description */}
                     <div className="flex-1 min-w-0">
                       <div className="flex items-baseline gap-3 mb-1">
                         <h3 className="text-foreground font-heading font-bold text-xl tracking-tight">
                           {approach.title}
                         </h3>
                         <span className="text-gold/50 text-xs italic tracking-wide hidden sm:inline">
                           {approach.tagline}
                         </span>
                       </div>
                       {/* Tagline underline */}
                       <div className="mt-1 mb-2 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold/40 to-transparent transition-all duration-500 ease-out max-w-[160px]" />
                       <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                         {approach.description}
                       </p>
                     </div>

                     {/* Key Points */}
                     <div className="shrink-0 flex flex-col gap-2 lg:min-w-[240px]">
                       {approach.points.map((point) => (
                         <div key={point} className="flex items-center gap-2">
                           <ChevronRight className="w-3 h-3 text-gold/40 shrink-0" />
                           <span className="text-foreground/60 text-xs">{point}</span>
                         </div>
                       ))}
                     </div>

                     {/* Bottom metric */}
                     <div className="shrink-0 lg:border-l lg:border-white/[0.06] lg:pl-8 group-hover:lg:border-gold/10 transition-colors duration-500">
                       <div className="flex items-baseline gap-2">
                         <span className="text-gold font-heading font-bold text-2xl">{approach.stat.value}</span>
                         <span className="text-muted-foreground/40 text-[11px] tracking-wider uppercase">{approach.stat.label}</span>
                       </div>
                     </div>
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

        {/* Core Values Strip */}
        <FadeIn delay={0.2}>
          <div className="mt-20">
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold/20" />
              <span className="text-gold/60 text-xs font-semibold tracking-[0.25em] uppercase">
                Core Values
              </span>
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold/20" />
            </div>
            <StaggerContainer className="flex items-center justify-center gap-6 lg:gap-10 flex-wrap" staggerDelay={0.04}>
              {coreValues.map((value, i) => (
                <StaggerItem key={value}>
                  <div className="flex items-center gap-6 lg:gap-10">
                    <span className="text-muted-foreground/30 text-sm font-semibold tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300 cursor-default">
                      {value}
                    </span>
                    {i < coreValues.length - 1 && (
                      <span className="text-white/[0.06] hidden lg:inline">·</span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
