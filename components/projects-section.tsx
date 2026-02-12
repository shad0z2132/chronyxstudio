import { ArrowUpRight, Swords, Crosshair, Shield, Map, Users, Trophy } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/motion"

const worlds = [
  {
    title: "Sands of Avalon",
    subtitle: "Flagship ARPG",
    image: "/images/project-1.jpg",
    icon: Swords,
    tagline: "Forge Your Legend",
    features: [
      { icon: Map, text: "Vast world shaped by exploration and discovery" },
      { icon: Shield, text: "Deep character progression — earned, never bought" },
      { icon: Users, text: "Allegiance systems that define your path" },
      { icon: Swords, text: "Rare resources and evolving challenges" },
    ],
    description:
      "A progression-focused ARPG where every step forward is earned. Navigate a world of ancient power, shifting allegiances, and evolving threats.",
  },
  {
    title: "Competitive FPS",
    subtitle: "Tournament-Ready Shooter",
    image: "/images/project-2.jpg",
    icon: Crosshair,
    tagline: "Prove Your Skill",
    features: [
      { icon: Crosshair, text: "Precision gunplay with high skill ceiling" },
      { icon: Trophy, text: "Ranked ladders and tournament infrastructure" },
      { icon: Users, text: "Team-based tactics and coordinated play" },
      { icon: Shield, text: "Competitive integrity — no pay-to-win" },
    ],
    description:
      "Built from the ground up for esports. Every mechanic serves competitive clarity. Spectator systems and event frameworks for thriving communities.",
  },
]

export function ProjectsSection() {
  const [active, setActive] = useState(0)
  const current = worlds[active]

  return (
    <section id="projects" className="relative py-24 lg:py-36 bg-card overflow-hidden">
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
              and audience. Deep RPG experiences and fast competitive gameplay, built without compromise.
            </p>
          </FadeIn>
        </div>

        {/* Tab selector */}
        <div className="flex gap-3 mb-8">
          {worlds.map((world, i) => {
            const Icon = world.icon
            return (
              <button
                key={world.title}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 px-5 py-3 text-sm font-semibold tracking-wide rounded-lg transition-all duration-200 ${
                  i === active
                    ? "bg-gold/10 text-gold border border-gold/30"
                    : "text-muted-foreground border border-white/[0.06] hover:border-white/[0.12] hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {world.title}
              </button>
            )
          })}
        </div>

        {/* Active world display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="relative overflow-hidden bg-[#0d0d14] border border-white/[0.06] rounded-xl">
              <div className="flex flex-col lg:flex-row min-h-[420px]">
                {/* Image */}
                <div className="relative lg:w-[45%] min-h-[280px] lg:min-h-0 overflow-hidden group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0d0d14]/40 to-[#0d0d14]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14]/60 via-transparent to-transparent" />

                  {/* Tagline */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
                      {current.tagline}
                    </span>
                  </div>
                </div>

                {/* Info panel */}
                <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 lg:w-[55%]">
                  <span className="text-gold/80 text-xs font-medium tracking-wider uppercase bg-gold/[0.08] px-3 py-1 rounded-md w-fit mb-4">
                    {current.subtitle}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight mb-3">
                    {current.title}
                  </h3>

                  <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
                    {current.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-3 mb-8">
                    {current.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 + 0.15 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-7 h-7 bg-gold/[0.08] rounded-md flex items-center justify-center shrink-0">
                          <feature.icon className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                        </div>
                        <span className="text-foreground/80 text-sm">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-background px-6 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase transition-colors duration-200 w-fit group"
                  >
                    Learn More
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
