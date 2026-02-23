import { ArrowUpRight, Swords, Crosshair, Layers, Users, Gamepad2, Globe, ChevronRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

/* ─── Data ────────────────────────────────────────────────────────────────── */

const games = [
  {
    title: "Sands of Avalon",
    subtitle: "Flagship ARPG",
    description:
      "A progression-focused ARPG centered on exploration, character development, and long-term advancement. Players navigate a rich world shaped by allegiance, rare resources, and evolving challenges.",
    icon: Swords,
    image: "/Anubismonolith.webp",
    href: "#sands-of-avalon",
    status: "In Development",
    statusActive: true,
    highlights: ["Deep progression", "Allegiance systems", "Evolving world"],
  },
  {
    title: "Competitive FPS",
    subtitle: "Tournament-Ready Shooter",
    description:
      "A competitive first-person shooter designed for tournaments and esports. Built around skill expression, team play, and competitive integrity — serving as a high-frequency engagement layer.",
    icon: Crosshair,
    image: "/photo_2026-02-18_02-54-03.jpg",
    href: "#competitive-fps",
    status: "Coming Soon",
    statusActive: false,
    highlights: ["Precision gunplay", "Ranked infrastructure", "Esports-ready"],
  },
]

const pillars = [
  {
    icon: Layers,
    title: "Deep Progression Systems",
    tagline: "Earned, not given.",
    description:
      "Every Chronyx title is built around meaningful advancement. No shortcuts — progression is earned through gameplay.",
    accent: "from-amber-500/10",
    stat: { value: "0", label: "Shortcuts" },
  },
  {
    icon: Users,
    title: "Player Identity & Allegiance",
    tagline: "Your journey, your mark.",
    description:
      "Allegiance systems and competitive rankings give players a real sense of ownership and purpose.",
    accent: "from-gold/10",
    stat: { value: "∞", label: "Player Paths" },
  },
  {
    icon: Gamepad2,
    title: "Competitive & Esports",
    tagline: "Built for the stage.",
    description:
      "Ranked ladders, tournament formats, spectator modes, and event systems built from the foundation.",
    accent: "from-red-500/10",
    stat: { value: "100%", label: "Skill-Based" },
  },
  {
    icon: Globe,
    title: "Multi-Platform Vision",
    tagline: "PC first, world next.",
    description:
      "Web2-first, PC priority. Accessible, performant, quality-driven — with expansion planned as titles mature.",
    accent: "from-blue-500/10",
    stat: { value: "3+", label: "Platforms" },
  },
]

/* ─── Featured Game Card ──────────────────────────────────────────────────── */

function FeaturedGameCard({ game, index }: { game: typeof games[0]; index: number }) {
  const Icon = game.icon
  const isFirst = index === 0

  return (
    <StaggerItem>
      <a
        href={game.href}
        className={`group block relative overflow-hidden rounded-2xl bg-[#0f1115] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.05] hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,168,83,0.1)] ${
          isFirst ? "lg:col-span-2" : ""
        }`}
      >
        <div className={`flex flex-col ${isFirst ? "lg:flex-row" : ""} ${
          isFirst ? "min-h-[380px] lg:min-h-[440px]" : "min-h-[360px]"
        }`}>
          {/* Image side */}
          <div className={`relative overflow-hidden ${
            isFirst ? "lg:w-[55%] min-h-[260px] lg:min-h-0" : "min-h-[220px]"
          }`}>
            <img
               src={game.image}
              alt={game.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
            {/* Gradients */}
            {isFirst ? (
              <>
                <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-[#0a0a0f] hidden lg:block" />
                <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0f] to-transparent lg:hidden" />
              </>
            ) : (
              <div className="absolute left-0 right-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
            )}

            {/* Status badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className={`flex items-center gap-1.5 backdrop-blur-sm px-3 py-1.5 rounded-full border ${
                game.statusActive
                  ? "bg-gold/10 border-gold/20"
                  : "bg-white/5 border-white/10"
              }`}>
                {game.statusActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                )}
                <span className={`text-[11px] font-semibold tracking-wider uppercase ${
                  game.statusActive ? "text-gold" : "text-muted-foreground/70"
                }`}>
                  {game.status}
                </span>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className={`relative z-10 flex flex-col justify-center p-8 lg:p-10 ${
            isFirst ? "lg:w-[45%]" : ""
          }`}>
            {/* Genre tag */}
            <div className="flex items-center gap-2.5 mb-4">
              <Icon className="w-4 h-4 text-gold/60" />
              <span className="text-gold/60 text-xs font-semibold tracking-wider uppercase">
                {game.subtitle}
              </span>
            </div>

            {/* Title */}
            <h3 className={`font-heading font-bold text-foreground tracking-tight mb-3 ${
              isFirst ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"
            }`}>
              {game.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6 max-w-md">
              {game.description}
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {game.highlights.map((h) => (
                <span
                  key={h}
                  className="text-muted-foreground/50 text-[11px] font-medium tracking-wider uppercase bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide uppercase group-hover:gap-3 transition-all duration-300 w-fit">
              Explore
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_60px_rgba(212,168,83,0.03)]" />
      </a>
    </StaggerItem>
  )
}

/* ─── Pillar Card ─────────────────────────────────────────────────────────── */

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const Icon = pillar.icon

  return (
    <StaggerItem>
      <motion.div
        className="group relative bg-[#0f1115] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.05] rounded-xl p-7 h-full hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,168,83,0.1)] transition-all duration-500 overflow-hidden"
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Top accent border */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/50 transition-all duration-500" />

        {/* Hover gradient accent */}
        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${pillar.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10">
          {/* Number + icon */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-10 h-10 bg-gold/[0.08] rounded-lg flex items-center justify-center group-hover:bg-gold/[0.14] transition-colors duration-300">
              <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
            </div>
            <span className="text-muted-foreground/10 text-3xl font-heading font-bold tracking-tight group-hover:text-muted-foreground/20 transition-colors duration-300">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-foreground font-heading font-semibold text-base mb-1.5 tracking-tight">
            {pillar.title}
          </h3>

          {/* Tagline with animated underline */}
          <div className="mb-3">
            <p className="text-gold/50 text-xs italic tracking-wide">{pillar.tagline}</p>
            <div className="mt-1.5 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold/40 to-transparent transition-all duration-500 ease-out" />
          </div>

          <p className="text-muted-foreground/60 text-sm leading-relaxed">
            {pillar.description}
          </p>

          {/* Bottom metric */}
          <div className="mt-5 pt-4 border-t border-white/[0.04] group-hover:border-gold/10 transition-colors duration-500">
            <div className="flex items-baseline gap-2">
              <span className="text-gold font-heading font-bold text-lg">{pillar.stat.value}</span>
              <span className="text-muted-foreground/50 text-[11px] tracking-wider uppercase">{pillar.stat.label}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </StaggerItem>
  )
}

/* ─── Main Section ────────────────────────────────────────────────────────── */

export function ServicesSection() {
  return (
    <section id="games" className="relative py-24 lg:py-36 overflow-hidden ambient-glow-blue">
      {/* ── Golden flare orbs (blue-tinted to match ambient-glow-blue) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          left: "10%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,160,220,0.08) 0%, rgba(120,160,220,0) 70%)",
          animation: "flare-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "20%",
          right: "8%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(120,160,220,0.06) 0%, rgba(120,160,220,0) 65%)",
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
                  Our Games & Vision
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
                Building Worlds
                <br />
                <span className="text-gold">That Endure</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-sm text-base lg:text-lg leading-relaxed">
              Each title is developed independently — with its own mechanics, pacing, and audience.
              Deep experiences and fast competitive gameplay, without compromise.
            </p>
          </FadeIn>
        </div>

        {/* Featured Games — stacked hero cards */}
        <StaggerContainer className="flex flex-col gap-5 mb-20" staggerDelay={0.15}>
          {games.map((game, i) => (
            <FeaturedGameCard key={game.title} game={game} index={i} />
          ))}
        </StaggerContainer>

        {/* Design Pillars */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-gold/50 text-xs font-semibold tracking-[0.25em] uppercase">
              Design Pillars
            </span>
          </div>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          staggerDelay={0.08}
        >
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
