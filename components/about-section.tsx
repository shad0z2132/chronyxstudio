import { Hourglass, Users, Gamepad2, Target } from "lucide-react"
import { FadeIn, Counter } from "@/components/motion"
import { motion } from "framer-motion"

const highlights = [
  { icon: Gamepad2, label: "Original IPs", value: 2 },
  { icon: Users, label: "Team Members", value: 15, suffix: "+" },
  { icon: Target, label: "Years Building", value: 3 },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* ── Magical & Golden flare orbs ── */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          top: "20%",
          right: "8%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          bottom: "10%",
          left: "12%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(10,25,47,0.4) 0%, rgba(10,25,47,0) 65%)",
          animation: "flare-breathe-slow 10s ease-in-out infinite",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image composition */}
          <FadeIn>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group">
                <img
                  src="/HighresScreenshot00084.webp"
                  alt="Chronyx Studio — in-engine screenshot"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <img
                    src="/unreal-engine-xwo7bd8vu6fzpnkcifgtu.webp"
                    alt="Unreal Engine"
                    className="w-3.5 h-3.5 rounded-full object-cover invert"
                  />
                  <span className="text-foreground/70 text-[10px] font-semibold tracking-wider uppercase">
                    Built in UE5
                  </span>
                </div>
              </div>

              {/* Small offset accent image */}
              <motion.div
                className="absolute -bottom-6 -right-4 w-[45%] rounded-lg overflow-hidden border border-white/[0.08] shadow-2xl hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <img
                  src="/HighresScreenshot00108.webp"
                  alt="Game environment detail"
                  loading="lazy"
                  className="w-full aspect-[3/2] object-cover"
                />
              </motion.div>
            </div>
          </FadeIn>

          {/* Right — text content */}
          <div className="lg:pl-4">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  About Us
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight tracking-tight mb-6">
                A Studio Built on{" "}
                <span className="text-gold">Conviction</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-muted-foreground text-base leading-relaxed mb-5">
                Chronyx Studio is an independent game development studio focused on building
                long-term intellectual properties. We believe the best games are the ones
                that respect players' time and reward genuine skill.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-muted-foreground/70 text-sm leading-relaxed mb-8">
                Our team brings experience from competitive gaming, systems design, and
                world-building — united by a shared frustration with predatory monetization
                and shallow progression loops. We're here to build something different.
              </p>
            </FadeIn>

            {/* Studio principles — minimal */}
            <FadeIn delay={0.5}>
              <div className="flex flex-col gap-3 mb-10">
                {[
                  "Player-first design — no pay-to-win, ever",
                  "Deep progression earned through gameplay",
                  "Competitive integrity at the foundation",
                ].map((principle) => (
                  <div key={principle} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                    <span className="text-foreground/70 text-sm">{principle}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Stat strip */}
            <FadeIn delay={0.6}>
              <div className="flex items-center gap-6 lg:gap-8 pt-6 border-t border-white/[0.06]">
                {highlights.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    {i > 0 && <div className="w-px h-5 bg-white/[0.06] -ml-3 mr-0" />}
                    <div>
                      <Counter
                        target={stat.value}
                        suffix={stat.suffix ?? ""}
                        className="text-gold font-heading font-bold text-xl"
                      />
                      <span className="text-muted-foreground/50 text-[10px] tracking-wider uppercase block mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
