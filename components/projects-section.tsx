import { ArrowUpRight, Swords, Crosshair, Shield, Map, Users, Trophy, Flame } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const worlds = [
  {
    title: "Sands of Avalon",
    subtitle: "Action RPG",
    image: "/Anubismonolith.webp",
    characterImage: "/SETH 1.webp",
    icon: Swords,
    tagline: "Forge Your Legend",
    status: "In Development",
    features: [
      { icon: Map, text: "Vast world shaped by exploration" },
      { icon: Shield, text: "Deep progression — earned, never bought" },
      { icon: Users, text: "Allegiance systems define your path" },
      { icon: Flame, text: "Evolving threats and rare resources" },
    ],
    description:
      "A progression-focused ARPG where every step forward is earned. Navigate a world of ancient power, shifting allegiances, and evolving threats.",
    gradient: "from-amber-500/20 via-transparent to-transparent",
  },
  {
    title: "Competitive FPS",
    subtitle: "Tournament-Ready Shooter",
    image: "/image-32.webp",
    characterImage: "/alien-planet-building.webp",
    icon: Crosshair,
    tagline: "Prove Your Skill",
    status: "Pre-Production",
    features: [
      { icon: Crosshair, text: "Precision gunplay, high skill ceiling" },
      { icon: Trophy, text: "Ranked ladders & tournament infra" },
      { icon: Users, text: "Team-based tactics & coordination" },
      { icon: Shield, text: "Competitive integrity — no P2W" },
    ],
    description:
      "Built from the ground up for esports. Every mechanic serves competitive clarity, with spectator systems and event frameworks for thriving communities.",
    gradient: "from-sky-500/20 via-transparent to-transparent",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 lg:py-36 bg-card overflow-hidden ambient-glow-gold">
      {/* ── Golden flare orbs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          right: "12%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.10) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "15%",
          left: "8%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0) 65%)",
          animation: "flare-breathe-slow 10s ease-in-out infinite",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  Our Worlds
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
                Two Worlds.
                <br />
                <span className="text-gold">One Vision.</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
              Each Chronyx title is developed independently — with its own mechanics, pacing,
              and audience. Deep RPG and fast competitive gameplay, built without compromise.
            </p>
          </FadeIn>
        </div>

        {/* World Cards — stacked cinematic */}
        <div className="flex flex-col gap-6">
          {worlds.map((world, worldIndex) => {
            const Icon = world.icon
            const isReversed = worldIndex % 2 === 1

            return (
              <FadeIn key={world.title} delay={worldIndex * 0.15}>
                <motion.div
                  className="group relative bg-[#0d0d14] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.1] transition-all duration-500"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Top accent border */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/60 transition-all duration-500" />

                  <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} min-h-[380px]`}>
                    {/* Image side */}
                    <div className="relative lg:w-[50%] min-h-[260px] lg:min-h-0 overflow-hidden">
                      <img
                        src={world.image}
                        alt={world.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Directional fade into content */}
                      <div className={`absolute inset-0 bg-gradient-to-${isReversed ? "l" : "r"} from-transparent via-[#0d0d14]/50 to-[#0d0d14] hidden lg:block`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/40 to-transparent lg:hidden" />

                      {/* Accent gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${world.gradient} opacity-40`} />

                      {/* Status badge */}
                      <div className="absolute top-5 left-5 z-10">
                        <span className="text-gold/90 text-[10px] font-bold tracking-[0.2em] uppercase bg-gold/[0.12] backdrop-blur-sm px-3 py-1.5 rounded-md border border-gold/20">
                          {world.status}
                        </span>
                      </div>

                      {/* Character overlay */}
                      {world.characterImage && (
                        <div className={`absolute bottom-0 ${isReversed ? "left-4" : "right-4"} w-[45%] max-w-[220px] hidden lg:block`}>
                          <img
                            src={world.characterImage}
                            alt=""
                            className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:translate-y-[-4px]"
                          />
                        </div>
                      )}
                    </div>

                    {/* Content side */}
                    <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 lg:w-[50%]">
                      {/* Subtitle + icon */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-gold/[0.08] rounded-lg flex items-center justify-center border border-gold/10">
                          <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
                        </div>
                        <span className="text-gold/70 text-xs font-medium tracking-wider uppercase">
                          {world.subtitle}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight mb-2">
                        {world.title}
                      </h3>

                      {/* Tagline with animated underline */}
                      <div className="mb-5">
                        <p className="text-gold/60 text-sm font-medium tracking-wide italic">
                          {world.tagline}
                        </p>
                        <div className="mt-1.5 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold/40 to-transparent transition-all duration-500 ease-out max-w-[200px]" />
                      </div>

                      <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
                        {world.description}
                      </p>

                      {/* Features grid */}
                      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8" staggerDelay={0.06}>
                        {world.features.map((feature) => (
                          <StaggerItem key={feature.text}>
                            <div className="flex items-center gap-3">
                              <div className="w-7 h-7 bg-gold/[0.06] rounded-md flex items-center justify-center shrink-0">
                                <feature.icon className="w-3.5 h-3.5 text-gold/80" strokeWidth={1.5} />
                              </div>
                              <span className="text-foreground/70 text-sm">{feature.text}</span>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>

                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-background px-6 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase transition-colors duration-200 w-fit group/btn"
                      >
                        Learn More
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
