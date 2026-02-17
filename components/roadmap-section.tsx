import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Map, Skull, Users, Globe, Wind } from "lucide-react"
import { FadeIn } from "@/components/motion"

/* ─── Data ────────────────────────────────────────────────────────────────── */

const milestones = [
  {
    id: "open-world",
    icon: Map,
    title: "Open World Map — 2x2 KM",
    description: "Expanded world with new regions and exploration areas.",
    details: [
      "Seamless open world with no loading screens",
      "Dynamic weather & day-night cycle across biomes",
      "Hidden ruins, ancient temples, and secret passages",
      "Verticality — cliffs, caves, and elevated strongholds",
    ],
    phase: "Phase 1",
    status: "in-progress" as const,
  },
  {
    id: "dungeons",
    icon: Skull,
    title: "Dungeons",
    description: "Quest-driven dungeon experiences with unique enemies.",
    details: [
      "Procedurally-enhanced dungeon layouts",
      "Unique boss encounters with phase mechanics",
      "Scaling difficulty based on player progression",
      "Exclusive loot drops and rare crafting materials",
    ],
    phase: "Phase 2",
    status: "upcoming" as const,
  },
  {
    id: "npcs",
    icon: Users,
    title: "Enhanced NPCs",
    description: "Improved interactions, behaviors, and quest immersion.",
    details: [
      "Context-aware dialogue trees",
      "NPC daily routines and reactive behaviors",
      "Faction reputation influencing NPC attitudes",
      "Companion system with loyalty mechanics",
    ],
    phase: "Phase 3",
    status: "upcoming" as const,
  },
  {
    id: "multiplayer",
    icon: Globe,
    title: "Multiplayer — Open Servers",
    description: "Shared world gameplay with cooperative and competitive play.",
    details: [
      "Seamless drop-in / drop-out co-op",
      "PvP zones with meaningful risk-reward",
      "Guild systems and territory control",
      "Server-wide dynamic events",
    ],
    phase: "Phase 4",
    status: "planned" as const,
  },
  {
    id: "mounts",
    icon: Wind,
    title: "Mounts — Horses & Dragons",
    description: "Land and aerial mounts for faster travel and exploration.",
    details: [
      "Tameable wild horses across the open world",
      "Legendary dragon mounts earned through endgame quests",
      "Mounted combat with unique skill sets",
      "Mount customization — armor, saddles, and cosmetics",
    ],
    phase: "Phase 5",
    status: "planned" as const,
  },
]

const statusConfig = {
  "in-progress": { label: "In Progress", dot: "bg-gold animate-pulse", text: "text-gold", line: "bg-gold" },
  upcoming: { label: "Upcoming", dot: "bg-gold/40", text: "text-gold/60", line: "bg-gold/30" },
  planned: { label: "Planned", dot: "bg-muted-foreground/30", text: "text-muted-foreground/50", line: "bg-muted-foreground/15" },
}

/* ─── Animated connecting line between nodes ──────────────────────────────── */

function ConnectingLine({ status }: { status: keyof typeof statusConfig }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })
  const config = statusConfig[status]

  return (
    <div ref={ref} className="hidden md:flex justify-center" style={{ height: "80px" }}>
      <motion.div
        className={`w-px ${config.line}`}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ transformOrigin: "top" }}
      />
    </div>
  )
}

/* ─── Milestone Card (scroll-animated) ────────────────────────────────────── */

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const status = statusConfig[milestone.status]
  const isEven = index % 2 === 0
  const baseDelay = 0.1

  return (
    <div ref={ref} className="relative flex items-start md:items-center">
      {/* ── Desktop: alternating layout ── */}

      {/* Left side */}
      <div className="hidden md:flex md:w-[calc(50%-28px)] md:justify-end">
        {isEven && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: baseDelay, ease: [0.25, 0.4, 0.25, 1] }}
            className="w-full max-w-md"
          >
            <CardContent milestone={milestone} status={status} index={index} isInView={isInView} />
          </motion.div>
        )}
      </div>

      {/* Center node */}
      <div className="hidden md:flex flex-col items-center z-10" style={{ width: "56px" }}>
        <motion.div
          className={`relative w-14 h-14 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
            milestone.status === "in-progress"
              ? "border-gold bg-gold/10"
              : milestone.status === "upcoming"
                ? "border-gold/30 bg-gold/5"
                : "border-white/10 bg-white/[0.03]"
          }`}
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: baseDelay * 0.5, type: "spring", stiffness: 180, damping: 14 }}
        >
          <milestone.icon
            className={`w-5 h-5 ${
              milestone.status === "in-progress"
                ? "text-gold"
                : milestone.status === "upcoming"
                  ? "text-gold/50"
                  : "text-muted-foreground/40"
            }`}
            strokeWidth={1.5}
          />
          {milestone.status === "in-progress" && (
            <motion.span
              className="absolute inset-0 rounded-full border border-gold/30"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          {/* Glow behind active node */}
          {milestone.status === "in-progress" && (
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-xl scale-150 -z-10" />
          )}
        </motion.div>
      </div>

      {/* Right side */}
      <div className="hidden md:flex md:w-[calc(50%-28px)]">
        {!isEven && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: baseDelay, ease: [0.25, 0.4, 0.25, 1] }}
            className="w-full max-w-md"
          >
            <CardContent milestone={milestone} status={status} index={index} isInView={isInView} />
          </motion.div>
        )}
      </div>

      {/* ── Mobile layout ── */}
      <div className="md:hidden flex items-start gap-3 w-full pl-1">
        <div className="flex flex-col items-center flex-shrink-0">
          <motion.div
            className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center ${
              milestone.status === "in-progress"
                ? "border-gold bg-gold/10"
                : milestone.status === "upcoming"
                  ? "border-gold/30 bg-gold/5"
                  : "border-white/10 bg-white/[0.03]"
            }`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <milestone.icon
              className={`w-4 h-4 ${
                milestone.status === "in-progress"
                  ? "text-gold"
                  : milestone.status === "upcoming"
                    ? "text-gold/50"
                    : "text-muted-foreground/40"
              }`}
              strokeWidth={1.5}
            />
            {milestone.status === "in-progress" && (
              <motion.span
                className="absolute inset-0 rounded-full border border-gold/30"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex-1 min-w-0"
        >
          <CardContent milestone={milestone} status={status} index={index} isInView={isInView} />
        </motion.div>
      </div>
    </div>
  )
}

/* ─── Card Content (always visible, details animate in on scroll) ─────── */

function CardContent({
  milestone,
  status,
  index,
  isInView,
}: {
  milestone: (typeof milestones)[0]
  status: (typeof statusConfig)[keyof typeof statusConfig]
  index: number
  isInView: boolean
}) {
  return (
    <div className="group relative bg-card border border-white/[0.06] rounded-xl overflow-hidden hover:border-gold/15 transition-all duration-300">
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/40 transition-all duration-500" />

      <div className="p-5 lg:p-6">
        {/* Phase + Status badges */}
        <div className="flex items-center gap-2.5 mb-3">
          <span className="text-gold/40 text-[11px] font-semibold tracking-[0.2em] uppercase">
            {milestone.phase}
          </span>
          <div className="w-px h-3 bg-white/10" />
          <div className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            <span className={`text-[11px] font-semibold tracking-wider uppercase ${status.text}`}>
              {status.label}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-foreground font-heading font-semibold text-base lg:text-lg tracking-tight mb-1.5">
          {milestone.title}
        </h3>
        <p className="text-muted-foreground/60 text-sm leading-relaxed mb-4">
          {milestone.description}
        </p>

        {/* Details — staggered animate in */}
        <div className="border-t border-white/[0.06] pt-4">
          <ul className="space-y-2">
            {milestone.details.map((detail, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.3 + i * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="flex items-start gap-2.5 text-sm text-muted-foreground/70"
              >
                <span className="w-1 h-1 rounded-full bg-gold/50 mt-2 flex-shrink-0" />
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

/* ─── Main Section ────────────────────────────────────────────────────────── */

export function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative py-24 lg:py-36 overflow-hidden"
    >
      {/* ── Golden flare orbs ── */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          top: "8%",
          right: "8%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          bottom: "12%",
          left: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, rgba(212,168,83,0) 65%)",
          animation: "flare-breathe-slow 11s ease-in-out infinite",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Section Header ── */}
        <FadeIn>
          <div className="text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold/40" />
              <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
                Development Roadmap
              </span>
              <div className="w-8 h-px bg-gold/40" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight mb-4">
              Roadmap <span className="text-gold">Milestones</span>
            </h2>
            <p className="text-muted-foreground/60 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Our vision for Sands of Avalon — from expanded worlds to shared adventures.
            </p>
          </div>
        </FadeIn>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical center line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
          </div>

          {/* Vertical left line — mobile */}
          <div className="md:hidden absolute left-[21px] top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
          </div>

          {/* Milestone items with connecting segments */}
          <div className="flex flex-col gap-6 md:gap-0">
            {milestones.map((milestone, index) => (
              <div key={milestone.id}>
                <MilestoneCard milestone={milestone} index={index} />
                {index < milestones.length - 1 && (
                  <ConnectingLine status={milestones[index + 1].status} />
                )}
              </div>
            ))}
          </div>

          {/* Timeline end cap */}
          <FadeIn delay={0.4}>
            <div className="flex justify-center mt-12">
              <div className="flex flex-col items-center gap-2">
                <div className="w-3 h-3 rounded-full border-2 border-gold/20 bg-background" />
                <span className="text-muted-foreground/30 text-[11px] tracking-[0.2em] uppercase">
                  And Beyond
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
