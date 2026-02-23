import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const visionQuotes = [
  {
    quote:
      "We started Chronyx because we were tired of games designed around monetization instead of mastery. Every system in our titles exists to make the player's journey more meaningful — not to extract value from it.",
    name: "Studio Founder",
    role: "Creative Direction",
    department: "Leadership",
    initials: "SF",
    accent: "from-amber-500/8 to-transparent",
    focus: { value: "10+", label: "Years in Gaming" },
  },
  {
    quote:
      "The best competitive games don't just test reflexes — they reward strategy, adaptation, and team coordination. Our FPS is being built from the ground up for tournament play.",
    name: "Lead Designer",
    role: "Competitive Systems",
    department: "Game Design",
    initials: "LD",
    accent: "from-sky-500/8 to-transparent",
    focus: { value: "FPS", label: "Competitive Focus" },
  },
  {
    quote:
      "Sands of Avalon isn't just another ARPG — it's a world where your choices define your path. We're building something players will invest years in, not weeks.",
    name: "Game Director",
    role: "ARPG Development",
    department: "Sands of Avalon",
    initials: "GD",
    accent: "from-emerald-500/8 to-transparent",
    focus: { value: "ARPG", label: "World Building" },
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-36 bg-card overflow-hidden ambient-glow-blue">
      {/* ── Golden flare orbs (blue-tinted to match ambient-glow-blue) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          right: "15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,160,220,0.08) 0%, rgba(120,160,220,0) 70%)",
          animation: "flare-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "10%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,160,220,0.06) 0%, rgba(120,160,220,0) 65%)",
          animation: "flare-breathe-slow 10s ease-in-out infinite",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="flex items-center gap-4 justify-center mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Team Vision
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight mb-4">
              Why We Build{" "}
              <span className="text-gold">What We Build</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed">
              Chronyx wasn't founded to make games — it was founded to make games differently.
              Hear from the team behind the vision.
            </p>
          </FadeIn>
        </div>

        {/* Quote cards — editorial staggered grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start" staggerDelay={0.12}>
          {visionQuotes.map((item, index) => (
            <StaggerItem key={item.name}>
              <motion.div
                className={`group relative bg-[#0f1115] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.05] rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,168,83,0.1)] transition-all duration-500 ${
                  index === 1 ? "md:-mt-6" : index === 2 ? "md:mt-6" : ""
                }`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Top accent border */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/50 transition-all duration-500" />

                {/* Accent gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 p-7 lg:p-8">
                  {/* Quote icon */}
                  <div className="mb-5">
                    <Quote className="w-8 h-8 text-gold/15" strokeWidth={1} />
                  </div>

                  <p className="text-foreground/80 text-sm leading-[1.75] mb-8">
                    {item.quote}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-full bg-white/[0.06] mb-5" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gold/[0.08] rounded-lg flex items-center justify-center border border-gold/10 group-hover:border-gold/20 transition-colors duration-300">
                      <span className="text-gold text-xs font-heading font-bold">{item.initials}</span>
                    </div>
                    <div>
                      <div className="text-foreground text-sm font-semibold">{item.name}</div>
                      <div className="text-muted-foreground/60 text-xs">
                        {item.role} · {item.department}
                      </div>
                    </div>
                  </div>

                  {/* Bottom metric */}
                  <div className="mt-5 pt-4 border-t border-white/[0.04] group-hover:border-gold/10 transition-colors duration-500">
                    <div className="flex items-baseline gap-2">
                      <span className="text-gold font-heading font-bold text-lg">{item.focus.value}</span>
                      <span className="text-muted-foreground/50 text-[11px] tracking-wider uppercase">{item.focus.label}</span>
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
