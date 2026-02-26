import { ArrowUpRight, Swords, Shield, Map, Users, Clock, Sparkles, ExternalLink, Globe } from "lucide-react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/motion"

/* ─── Data ────────────────────────────────────────────────────────────────── */

const milestones = [
  { label: "Core Combat System", progress: 85, status: "active" as const },
  { label: "World & Level Design", progress: 70, status: "active" as const },
  { label: "Progression & Loot", progress: 60, status: "active" as const },
  { label: "Allegiance Systems", progress: 45, status: "active" as const },
  { label: "Multiplayer Infrastructure", progress: 30, status: "upcoming" as const },
  { label: "Audio & Soundtrack", progress: 15, status: "upcoming" as const },
]

const features = [
  {
    icon: Swords,
    title: "Deep Combat",
    description: "Skill-based ARPG combat with meaningful build diversity and weapon mastery.",
    stat: { value: "6+", label: "Weapon Types" },
  },
  {
    icon: Shield,
    title: "Earned Progression",
    description: "Every piece of gear, every level — earned through gameplay. No shortcuts.",
    stat: { value: "0", label: "Pay-to-Win" },
  },
  {
    icon: Map,
    title: "Living World",
    description: "An evolving world shaped by exploration, rare resources, and shifting threats.",
    stat: { value: "∞", label: "Exploration" },
  },
  {
    icon: Users,
    title: "Allegiance & Identity",
    description: "Choose your faction. Your allegiance defines your journey and opens unique paths.",
    stat: { value: "3+", label: "Factions" },
  },
]

const devStats = [
  { target: 85, suffix: "%", label: "Core Systems" },
  { target: 12, suffix: "+", label: "Team Members" },
  { target: 18, suffix: "", label: "Months In Dev" },
  { target: 4, suffix: "", label: "Major Milestones" },
]

const worlds = [
  {
    id: "sands",
    name: "Sands",
    subtitle: "The Ancient World",
    era: "Ancient Era",
    description:
      "Traverse sun-scorched deserts and forgotten temples, where ancient gods still hold dominion. Unearth relics of a lost civilization and battle the divine forces that guard their secrets.",
    color: "gold" as const,
    accentClass: "text-gold",
    borderClass: "border-gold/30",
    bgClass: "bg-gold/10",
    glowClass: "shadow-[0_0_40px_rgba(212,168,83,0.15)]",
    hoverBorderClass: "group-hover:border-gold/60",
    gradientFrom: "from-[#D4A853]",
    screenshots: [
      { src: "/HighresScreenshot00108.webp", alt: "Sands of Avalon — ancient landscape" },
      { src: "/HighresScreenshot00081.webp", alt: "Ancient temple environment" },
      { src: "/HighresScreenshot00084.webp", alt: "Desert exploration gameplay" },
      { src: "/HighresScreenshot00105.webp", alt: "Combat encounter" },
    ],
    tag: "Ancient Era",
  },
  {
    id: "avalon",
    name: "Avalon",
    subtitle: "The Medieval World",
    era: "Medieval Era",
    description:
      "Enter a realm of stone fortresses, mystic forests, and warring kingdoms. Forge alliances, claim territories, and rise through the ranks of a world on the brink of legend.",
    color: "teal" as const,
    accentClass: "text-[#4FC3C3]",
    borderClass: "border-[#4FC3C3]/30",
    bgClass: "bg-[#4FC3C3]/10",
    glowClass: "shadow-[0_0_40px_rgba(79,195,195,0.15)]",
    hoverBorderClass: "group-hover:border-[#4FC3C3]/60",
    gradientFrom: "from-[#4FC3C3]",
    screenshots: [
      { src: "/medieval/photo_2026-02-26_03-38-38.webp", alt: "Avalon — medieval world" },
      { src: "/medieval/photo_2026-02-26_03-38-32.webp", alt: "Medieval castle environment" },
      { src: "/medieval/photo_2026-02-26_03-38-43.webp", alt: "Forest exploration" },
      { src: "/medieval/photo_2026-02-26_03-38-56.webp", alt: "Medieval combat" },
    ],
    tag: "Medieval Era",
  },
]

/* ─── Progress Bar ────────────────────────────────────────────────────────── */

function ProgressBar({ label, progress, status, delay }: {
  label: string
  progress: number
  status: "active" | "upcoming"
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          {status === "active" ? (
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          ) : (
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/20" />
          )}
          <span className={`text-sm font-medium ${
            status === "active" ? "text-foreground/90" : "text-muted-foreground/50"
          }`}>
            {label}
          </span>
        </div>
        <span className={`text-xs font-semibold tracking-wide ${
          status === "active" ? "text-gold" : "text-muted-foreground/50"
        }`}>
          {progress}%
        </span>
      </div>
      <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            status === "active"
              ? "bg-gradient-to-r from-gold/80 to-gold"
              : "bg-muted-foreground/15"
          }`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${progress}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
    </div>
  )
}

/* ─── World Card ──────────────────────────────────────────────────────────── */

function WorldCard({ world, index }: { world: typeof worlds[0]; index: number }) {
  const [activeShot, setActiveShot] = useState(0)
  const isSands = world.id === "sands"

  return (
    <FadeIn delay={index * 0.15}>
      <div className={`group relative bg-[#0f1115] border ${world.borderClass} rounded-2xl overflow-hidden transition-all duration-500 hover:${world.glowClass} flex flex-col h-full`}>

        {/* Top accent line */}
        <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${world.gradientFrom}/40 to-transparent z-10`} />

        {/* Hero image */}
        <div className="relative h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden flex-shrink-0">
          <img
            src={world.screenshots[activeShot].src}
            alt={world.screenshots[activeShot].alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/30 to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-br ${isSands ? "from-[#D4A853]/10" : "from-[#4FC3C3]/10"} to-transparent`} />

          {/* Era badge */}
          <div className="absolute top-4 left-4">
            <div className={`flex items-center gap-1.5 ${world.bgClass} border ${world.borderClass} backdrop-blur-sm px-3 py-1.5 rounded-full`}>
              <div className={`w-1.5 h-1.5 rounded-full ${isSands ? "bg-gold" : "bg-[#4FC3C3]"} animate-pulse`} />
              <span className={`${world.accentClass} text-[10px] font-semibold tracking-wider uppercase`}>
                {world.tag}
              </span>
            </div>
          </div>

          {/* World name overlaid */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className={`${world.accentClass} text-xs font-semibold tracking-[0.2em] uppercase mb-1`}>
              {world.subtitle}
            </p>
            <h3 className="text-3xl font-heading font-bold text-foreground leading-none tracking-tight">
              {world.name}
            </h3>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-muted-foreground/70 text-sm leading-relaxed mb-6">
            {world.description}
          </p>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-4 gap-2 mt-auto">
            {world.screenshots.map((shot, i) => (
              <button
                key={shot.src}
                onClick={() => setActiveShot(i)}
                className={`relative rounded-lg overflow-hidden aspect-[4/3] sm:aspect-[16/10] transition-all duration-300 ${
                  activeShot === i
                    ? `ring-2 ${isSands ? "ring-gold/60" : "ring-[#4FC3C3]/60"}`
                    : "opacity-50 hover:opacity-80 active:opacity-100"
                }`}
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

/* ─── Main Section ────────────────────────────────────────────────────────── */

export function SandsOfAvalonSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section
      ref={sectionRef}
      id="sands-of-avalon"
      className="relative py-16 sm:py-24 lg:py-36 overflow-hidden ambient-glow-gold"
    >
      {/* ── Ambient orbs ── */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          top: "5%",
          left: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.10) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          top: "45%",
          right: "5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,195,195,0.07) 0%, rgba(79,195,195,0) 65%)",
          animation: "flare-breathe-slow 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          bottom: "8%",
          left: "35%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 12s ease-in-out infinite",
        }}
      />

      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="/Anubismonolith.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.04] scale-110"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-gold/60" />
              <div className="flex items-center gap-1.5 bg-gold/10 border border-gold/20 px-3 py-1.5 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-gold text-[11px] font-semibold tracking-wider uppercase">
                  Flagship Title
                </span>
              </div>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-gold/60" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-[0.95] tracking-tight mb-4">
              Sands of <span className="text-gold">Avalon</span>
            </h2>

            {/* "1 Game · 2 Worlds" pill — stacks on very small screens */}
            <div className="inline-flex flex-col xs:flex-row items-center gap-0 bg-[#0f1115] border border-white/10 rounded-2xl xs:rounded-full overflow-hidden mt-2 mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] w-full max-w-[320px] xs:max-w-none xs:w-auto">
              <div className="flex items-center justify-center gap-2 px-4 py-2.5 border-b xs:border-b-0 xs:border-r border-white/10 w-full xs:w-auto">
                <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span className="text-gold text-xs font-bold tracking-widest uppercase">Sands</span>
                <span className="text-muted-foreground/40 text-[10px] tracking-wide">Ancient</span>
              </div>
              <div className="px-4 py-2.5 flex items-center justify-center gap-1.5 w-full xs:w-auto">
                <Globe className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0" />
                <span className="text-muted-foreground/40 text-[10px] font-semibold tracking-widest uppercase whitespace-nowrap">1 Game · 2 Worlds</span>
              </div>
              <div className="flex items-center justify-center gap-2 px-4 py-2.5 border-t xs:border-t-0 xs:border-l border-white/10 w-full xs:w-auto">
                <span className="text-[#4FC3C3]/70 text-[10px] tracking-wide">Medieval</span>
                <span className="text-[#4FC3C3] text-xs font-bold tracking-widest uppercase">Avalon</span>
                <div className="w-2 h-2 rounded-full bg-[#4FC3C3] shrink-0" />
              </div>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl sm:max-w-2xl mx-auto">
              One game. Two distinct worlds. Master the ancient era or forge your legend across medieval kingdoms — your journey, your realm.
            </p>
          </div>
        </FadeIn>

        {/* ── World Divider Banner ────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <div className="relative flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-white/10" />
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <span className="text-gold text-[11px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase">Ancient</span>
              <span className="text-muted-foreground/30 text-xs">×</span>
              <span className="text-[#4FC3C3] text-[11px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase">Medieval</span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#4FC3C3]/30 to-white/10" />
          </div>
        </FadeIn>

        {/* ── 2 World Cards ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {worlds.map((world, i) => (
            <WorldCard key={world.id} world={world} index={i} />
          ))}
        </div>

        {/* ── Progress + Stats ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
          {/* Dev progress panel — takes 3 cols */}
          <FadeIn className="lg:col-span-3">
            <div className="bg-[#0f1115] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] rounded-xl p-6 lg:p-8 h-full flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-gold/60" />
                    <span className="text-foreground font-heading font-semibold text-base tracking-tight">
                      Development Progress
                    </span>
                  </div>
                  <span className="text-muted-foreground/50 text-xs tracking-wider uppercase">
                    Q1 2026
                  </span>
                </div>

                <div className="flex flex-col gap-5 flex-1">
                  {milestones.map((m, i) => (
                    <ProgressBar
                      key={m.label}
                      label={m.label}
                      progress={m.progress}
                      status={m.status}
                      delay={i}
                    />
                  ))}
                </div>

                {/* Overall */}
                <div className="mt-7 pt-5 border-t border-white/[0.06] relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground/50 text-sm">Overall Completion</span>
                    <span className="text-gold font-heading font-bold text-xl">~51%</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Stats column — takes 2 cols */}
          <FadeIn delay={0.15} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 h-full">
              {devStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0f1115] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-xl p-5 flex flex-col items-center justify-center text-center hover:border-white/20 transition-colors duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Counter
                    target={stat.target}
                    suffix={stat.suffix}
                    className="text-gold font-heading font-bold text-2xl sm:text-3xl lg:text-4xl block mb-1 relative z-10"
                  />
                  <span className="text-muted-foreground/50 text-[10px] tracking-wider uppercase relative z-10">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ── Feature Cards ──────────────────────────────────────────────── */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.08}>
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group relative bg-[#0f1115] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-xl p-7 h-full hover:border-gold/30 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_10px_30px_rgba(212,168,83,0.1)] transition-all duration-500 overflow-hidden flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/60 transition-all duration-500" />

                <div className="mb-5 relative z-10">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-gold group-hover:drop-shadow-[0_0_8px_rgba(212,168,83,0.8)] transition-all duration-300" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-foreground font-heading font-semibold text-base mb-2 tracking-tight relative z-10 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground/60 text-sm leading-relaxed flex-1 relative z-10">
                  {feature.description}
                </p>

                <div className="mt-5 pt-4 border-t border-white/[0.04] group-hover:border-gold/20 transition-colors duration-500 relative z-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-gold font-heading font-bold text-lg">{feature.stat.value}</span>
                    <span className="text-muted-foreground/50 text-[11px] tracking-wider uppercase">{feature.stat.label}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <motion.a
              href="https://store.steampowered.com/app/4052670/Sands_Of_Avalon_Forge_Your_Legend/?beta=1"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-light text-background w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-300 group shadow-[0_0_20px_rgba(212,168,83,0.15)] hover:shadow-[0_0_40px_rgba(212,168,83,0.4)]"
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">Wishlist on Steam</span>
              <ExternalLink className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 border border-white/20 hover:border-gold/30 hover:bg-white/[0.04] text-foreground w-full sm:w-auto px-8 py-3.5 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-200 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Follow Development
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
