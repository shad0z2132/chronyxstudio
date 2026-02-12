import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const visionQuotes = [
  {
    quote:
      "We started Chronyx because we were tired of games designed around monetization instead of mastery. Every system in our titles exists to make the player's journey more meaningful — not to extract value from it.",
    name: "Studio Founder",
    role: "Creative Direction",
    department: "Leadership",
    initials: "SF",
  },
  {
    quote:
      "The best competitive games don't just test reflexes — they reward strategy, adaptation, and team coordination. Our FPS is being built from the ground up for tournament play.",
    name: "Lead Designer",
    role: "Competitive Systems",
    department: "Game Design",
    initials: "LD",
  },
  {
    quote:
      "Sands of Avalon isn't just another ARPG — it's a world where your choices define your path. We're building something players will invest years in, not weeks.",
    name: "Game Director",
    role: "ARPG Development",
    department: "Sands of Avalon",
    initials: "GD",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-36 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  Team Vision
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
                Why We Build
                <br />
                <span className="text-gold">What We Build</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
              Chronyx wasn't founded to make games — it was founded to make games differently.
              Hear from the team behind the vision.
            </p>
          </FadeIn>
        </div>

        {/* Quote cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start" staggerDelay={0.1}>
          {visionQuotes.map((item, index) => (
            <StaggerItem key={item.name}>
              <motion.div
                className={`group bg-[#0d0d14] border border-white/[0.06] rounded-xl p-6 lg:p-8 hover:border-white/[0.12] transition-all duration-300 ${
                  index === 1 ? "md:-mt-8" : index === 2 ? "md:mt-8" : ""
                }`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="text-gold/20 text-5xl font-serif leading-none mb-2">"</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.quote}
                </p>
                <div className="h-px w-full bg-white/[0.06] mb-5" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/[0.08] rounded-lg flex items-center justify-center border border-white/[0.06]">
                    <span className="text-gold text-xs font-heading font-bold">{item.initials}</span>
                  </div>
                  <div>
                    <div className="text-foreground text-sm font-semibold">{item.name}</div>
                    <div className="text-muted-foreground text-xs">
                      {item.role} — {item.department}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
