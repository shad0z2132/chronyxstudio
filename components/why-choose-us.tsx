import { Flame, Crown, Swords, Eye } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/motion"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const dna = [
  {
    icon: Flame,
    number: "01",
    title: "IP-First Development",
    tagline: "Our worlds. Our rules.",
    description:
      "We don't build games for other studios — we build our own. Every title is a long-term IP designed to grow, evolve, and cultivate lasting communities.",
    accent: "from-amber-500/15 to-transparent",
    stat: { value: "2", label: "Active IPs" },
  },
  {
    icon: Crown,
    number: "02",
    title: "Player Sovereignty",
    tagline: "Earned, never bought.",
    description:
      "Progression is earned through gameplay — not purchased. Character identity and advancement are meaningful because they represent real investment.",
    accent: "from-gold/15 to-transparent",
    stat: { value: "0", label: "Pay-to-Win" },
  },
  {
    icon: Swords,
    number: "03",
    title: "Competitive Integrity",
    tagline: "Skill is the only currency.",
    description:
      "From ranked ladders to tournament formats, competitive systems are built into the foundation — not bolted on. Fair play is non-negotiable.",
    accent: "from-red-500/10 to-transparent",
    stat: { value: "100%", label: "Skill-Based" },
  },
  {
    icon: Eye,
    number: "04",
    title: "Long-Term Vision",
    tagline: "Years, not quarters.",
    description:
      "Each game is designed to deepen over time — expanding worlds, evolving meta, growing communities. We build for years, not quarters.",
    accent: "from-blue-500/10 to-transparent",
    stat: { value: "5+", label: "Year Roadmap" },
  },
]

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section ref={sectionRef} id="studio" className="relative py-24 lg:py-36 bg-card overflow-hidden">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="/HighresScreenshot00081.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.04] scale-110"
        />
      </motion.div>

      {/* ── Magic Accents / Ambient Flares (OPTIMIZED - reduced blur) ── */}
      <div className="absolute top-[20%] left-[15%] w-[600px] h-[600px] bg-[rgba(10,25,47,0.4)] rounded-full pointer-events-none will-change-transform" style={{ filter: 'blur(80px)', transform: 'translateZ(0)' }} />
      <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] bg-[rgba(10,25,47,0.3)] rounded-full pointer-events-none will-change-transform" style={{ filter: 'blur(70px)', transform: 'translateZ(0)' }} />

      {/* ── Golden flare orbs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.12) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          right: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.10) 0%, rgba(212,168,83,0) 65%)",
          animation: "flare-breathe-slow 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          left: "40%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 12s ease-in-out infinite",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  Studio DNA
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
                What Drives{" "}
                <span className="text-gold">Chronyx</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
              We're not a service studio. We build our own worlds — deep, competitive,
              and designed to last.
            </p>
          </FadeIn>
        </div>

        {/* 4-column grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
          {dna.map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                className="group relative bg-[#0f1115] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.05] rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 h-full flex flex-col hover:shadow-[0_0_30px_rgba(212,168,83,0.1)]"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* ── Top accent border (gold gradient, glows on hover) ── */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/50 transition-all duration-500" />

                {/* Hover accent wash */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 p-6 lg:p-7 flex flex-col flex-1">
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 bg-gold/[0.06] rounded-lg flex items-center justify-center group-hover:bg-gold/[0.12] transition-colors duration-300">
                      <item.icon className="w-4.5 h-4.5 text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-white/[0.06] text-3xl font-heading font-black leading-none select-none group-hover:text-white/[0.1] transition-colors duration-300">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-foreground font-heading font-bold text-base tracking-tight mb-1.5">
                    {item.title}
                  </h3>

                  {/* ── Tagline with animated underline ── */}
                  <div className="mb-3">
                    <p className="text-gold/50 text-xs italic tracking-wide">
                      {item.tagline}
                    </p>
                    <div className="mt-1.5 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold/40 to-transparent transition-all duration-500 ease-out" />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* ── Bottom metric ── */}
                  <div className="mt-5 pt-4 border-t border-white/[0.04] group-hover:border-gold/10 transition-colors duration-500">
                    <div className="flex items-baseline gap-2">
                      <span className="text-gold font-heading font-bold text-lg">
                        {item.stat.value}
                      </span>
                      <span className="text-muted-foreground/50 text-[11px] tracking-wider uppercase">
                        {item.stat.label}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom stat row */}
        <FadeIn delay={0.3}>
          <div className="mt-12 pt-8 border-t border-white/[0.04]">
            <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
              {[
                { value: 4, label: "Core Principles" },
                { value: 2, label: "Original IPs" },
                { value: 0, label: "Pay-to-Win Mechanics", suffix: "" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix ?? ""}
                    className="text-gold font-heading font-bold text-2xl"
                  />
                   <span className="text-muted-foreground/50 text-xs tracking-wider uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
