import { useRef, memo } from "react"
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
    image: "/HighresScreenshot00081.webp",
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
    image: "/Anubismonolith.webp",
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
    image: "/SETH 1.webp",
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
    image: "/alien-planet-building.webp",
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
    image: "/image (27).webp",
  },
]

const statusConfig = {
  "in-progress": { label: "In Progress", dot: "bg-gold animate-pulse", text: "text-gold", line: "bg-gold" },
  upcoming: { label: "Upcoming", dot: "bg-gold/40", text: "text-gold/60", line: "bg-gold/30" },
  planned: { label: "Planned", dot: "bg-muted-foreground/30", text: "text-muted-foreground/50", line: "bg-muted-foreground/15" },
}

/* ─── Animated connecting line between nodes ──────────────────────────────── */
// Replaced by the continuous scrolling energy beam.

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
      <div className="hidden md:flex flex-col items-center z-10" style={{ width: "80px" }}>
        <motion.div
          className={`relative w-20 h-20 rounded-full border-2 flex items-center justify-center transition-colors duration-300 will-change-transform ${
            milestone.status === "in-progress"
              ? "border-gold/50 bg-[#0f1115] shadow-[0_0_30px_rgba(212,168,83,0.3)]"
              : milestone.status === "upcoming"
                ? "border-gold/20 bg-[#0f1115]"
                : "border-white/10 bg-[#0f1115]"
          }`}
          initial={{ scale: 0, rotate: -90 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: baseDelay * 0.5, type: "spring", stiffness: 150, damping: 12 }}
        >
          {/* Inner ring */}
          <div className={`absolute inset-1 rounded-full border border-dashed transition-colors duration-300 ${
            milestone.status === "in-progress" ? "border-gold/80 motion-safe:animate-[spin_10s_linear_infinite]" : "border-white/10"
          }`} />

          {/* Outer ring */}
          {milestone.status === "in-progress" && (
            <div className="absolute -inset-3 rounded-full border border-gold/20 motion-safe:animate-[spin_15s_linear_infinite_reverse]" />
          )}

          <milestone.icon
            className={`w-7 h-7 relative z-10 ${
              milestone.status === "in-progress"
                ? "text-gold drop-shadow-[0_0_8px_rgba(212,168,83,0.8)]"
                : milestone.status === "upcoming"
                  ? "text-gold/50"
                  : "text-white/30"
            }`}
            strokeWidth={1.5}
          />
          
          {milestone.status === "in-progress" && (
            <motion.span
              className="absolute inset-0 rounded-full border border-gold"
              animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          {/* Glow behind active node - OPTIMIZED: Removed blur, using opacity-based glow */}
          {milestone.status === "in-progress" && (
            <div className="absolute inset-0 rounded-full bg-gold/20 scale-150 -z-10" style={{ transform: 'translateZ(0)' }} />
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
      <div className="md:hidden flex items-start gap-4 w-full pl-0">
        <div className="flex flex-col items-center flex-shrink-0 z-10">
          <motion.div
            className={`relative w-12 h-12 rounded-full border-2 flex items-center justify-center will-change-transform ${
              milestone.status === "in-progress"
                ? "border-gold/50 bg-[#0f1115] shadow-[0_0_20px_rgba(212,168,83,0.3)]"
                : milestone.status === "upcoming"
                  ? "border-gold/20 bg-[#0f1115]"
                  : "border-white/10 bg-[#0f1115]"
            }`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 180 }}
          >
            {/* Inner dashed ring */}
            <div className={`absolute inset-0.5 rounded-full border border-dashed transition-colors duration-300 ${
              milestone.status === "in-progress" ? "border-gold/80 motion-safe:animate-[spin_10s_linear_infinite]" : "border-white/10"
            }`} />

            <milestone.icon
              className={`w-4 h-4 relative z-10 ${
                milestone.status === "in-progress"
                  ? "text-gold drop-shadow-[0_0_5px_rgba(212,168,83,0.8)]"
                  : milestone.status === "upcoming"
                    ? "text-gold/50"
                    : "text-white/30"
              }`}
              strokeWidth={1.5}
            />
            {milestone.status === "in-progress" && (
              <motion.span
                className="absolute inset-0 rounded-full border border-gold"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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

/* ─── Card Content (OPTIMIZED - Memoized, removed mouse tracking) ─────── */

const CardContent = memo(function CardContent({
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
  const isEven = index % 2 === 0

  return (
    <div 
      className="group relative bg-[#0f1115] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.05] rounded-xl overflow-hidden hover:border-gold/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,168,83,0.15)] will-change-transform"
      style={{ transform: 'translateZ(0)' }}
    >
      {/* OPTIMIZED: Static hover glow instead of mouse-tracking blur gradient */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,83,0.12),transparent_50%)]"
      />

      {/* Cinematic Background Image Masked */}
      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden">
        <img 
          src={milestone.image} 
          alt={milestone.title}
          loading="lazy"
          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s]" 
        />
        {/* Gradient fades the image from right/left depending on card side to ensure text is highly readable */}
        <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-[#0f1115] via-[#0f1115]/90 to-transparent hidden md:block`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/90 to-[#0f1115]/20 md:hidden" />
      </div>
      
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/50 transition-all duration-500 z-10" />

      <div className="relative p-6 lg:p-8 z-10">
        {/* Phase + Status badges */}
        <div className="flex items-center gap-2.5 mb-4">
          <span className="text-gold/60 text-[11px] font-bold tracking-[0.25em] uppercase bg-gold/5 px-2.5 py-1 rounded border border-gold/10 backdrop-blur-sm group-hover:bg-gold/10 group-hover:text-gold transition-colors duration-300">
            {milestone.phase}
          </span>
          <div className="w-px h-3 bg-white/20" />
          <div className="flex items-center gap-2 bg-white/5 px-2.5 py-1 rounded border border-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-colors duration-300">
            <div className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
            <span className={`text-[10px] font-bold tracking-wider uppercase ${status.text}`}>
              {status.label}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-foreground font-heading font-bold text-xl lg:text-2xl tracking-tight mb-2 group-hover:text-gold transition-colors duration-300 drop-shadow-md">
          {milestone.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md drop-shadow-sm">
          {milestone.description}
        </p>

        {/* Details — staggered animate in */}
        <div className="border-t border-white/10 pt-5 mt-5">
          <ul className="space-y-3">
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
                className="flex items-start gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300"
              >
                <div className="w-4 h-4 rounded bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/20 group-hover:border-gold/40 transition-colors duration-300">
                  <div className="w-1 h-1 rounded-full bg-gold/80" />
                </div>
                <span className="leading-snug drop-shadow-sm">{detail}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
})

/* ─── Main Section ────────────────────────────────────────────────────────── */

export function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  })

  // We map the scroll progress to a height percentage for the glowing line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="relative py-24 lg:py-36 overflow-hidden bg-background"
    >
      {/* ── OPTIMIZED: Replaced massive blur with solid gradients ── */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[rgba(10,25,47,0.4)] rounded-full pointer-events-none z-[1]" style={{ filter: 'blur(80px)', transform: 'translateZ(0)' }} />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-[rgba(10,25,47,0.3)] rounded-full pointer-events-none z-[1]" style={{ filter: 'blur(80px)', transform: 'translateZ(0)' }} />

      {/* ── Golden flare orbs ── */}
      <div
        className="absolute pointer-events-none z-[1] will-change-transform"
        style={{
          top: "8%",
          right: "8%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 9s ease-in-out infinite",
          transform: 'translateZ(0)'
        }}
      />
      <div
        className="absolute pointer-events-none z-[1] will-change-transform"
        style={{
          bottom: "12%",
          left: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, rgba(212,168,83,0) 65%)",
          animation: "flare-breathe-slow 11s ease-in-out infinite",
          transform: 'translateZ(0)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Section Header ── */}
        <FadeIn>
          <div className="text-center mb-16 lg:mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold/80 text-xs font-semibold tracking-[0.25em] uppercase">
                The Master Plan
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/40" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight tracking-tight mb-6 drop-shadow-xl">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-600">Future</span>
            </h2>
            <p className="text-white/60 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Our vision for Sands of Avalon and beyond. We build for the long term—expanding worlds, deepening mechanics, and delivering unforgettable experiences.
            </p>
          </div>
        </FadeIn>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical center line — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/5">
            <motion.div 
              className="w-full bg-gradient-to-b from-gold/50 via-gold to-transparent" 
              style={{ height: lineHeight }}
            />
            {/* OPTIMIZED: Reduced blur on glow effect */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 w-4 h-[100px] bg-gold/50 pointer-events-none"
              style={{ 
                top: lineHeight, 
                marginTop: "-100px",
                filter: 'blur(20px)',
                transform: 'translateZ(0)'
              }}
            />
          </div>

          {/* Vertical left line — mobile */}
          <div className="md:hidden absolute left-[24px] top-0 bottom-0 w-[2px] bg-white/5">
            <motion.div 
              className="w-full bg-gradient-to-b from-gold/50 via-gold to-transparent" 
              style={{ height: lineHeight }}
            />
            {/* OPTIMIZED: Reduced blur on glow effect */}
            <motion.div 
              className="absolute left-1/2 -translate-x-1/2 w-4 h-[80px] bg-gold/50 pointer-events-none"
              style={{ 
                top: lineHeight, 
                marginTop: "-80px",
                filter: 'blur(20px)',
                transform: 'translateZ(0)'
              }}
            />
          </div>

          {/* Milestone items with connecting segments */}
          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {milestones.map((milestone, index) => (
              <div key={milestone.id}>
                <MilestoneCard milestone={milestone} index={index} />
              </div>
            ))}
          </div>

          {/* Timeline end cap */}
          <FadeIn delay={0.4}>
            <div className="flex justify-center mt-16 relative z-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-dashed border-white/20 bg-[#0f1115] flex items-center justify-center motion-safe:animate-[spin_15s_linear_infinite]">
                  <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center motion-safe:animate-[spin_10s_linear_infinite_reverse]">
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                  </div>
                </div>
                <span className="text-white/40 text-xs font-semibold tracking-[0.3em] uppercase bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  The Journey Continues
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
