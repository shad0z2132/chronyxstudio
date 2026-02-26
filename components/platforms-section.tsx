import { Monitor, Smartphone, Gamepad2, Cpu, Zap, Server } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

/* ─── Data ────────────────────────────────────────────────────────────────── */

const platforms = [
  {
    name: "PC",
    subtitle: "Primary",
    icon: Monitor,
    priority: "primary" as const,
  },
  {
    name: "Steam",
    subtitle: "Distribution",
    icon: Monitor,
    priority: "primary" as const,
  },
  {
    name: "PlayStation",
    subtitle: "Planned",
    icon: Gamepad2,
    priority: "planned" as const,
  },
  {
    name: "Xbox",
    subtitle: "Planned",
    icon: Gamepad2,
    priority: "planned" as const,
  },
  {
    name: "Mobile",
    subtitle: "Exploring",
    icon: Smartphone,
    priority: "future" as const,
  },
]

const techHighlights = [
  { icon: Cpu, label: "Nanite", description: "Film-quality virtualized geometry" },
  { icon: Zap, label: "Lumen GI", description: "Fully dynamic global illumination" },
  { icon: Server, label: "Dedicated Servers", description: "Low-latency competitive infra" },
]

/* ─── Main Section ────────────────────────────────────────────────────────── */

export function PlatformsSection() {
  const priorityStyles = {
    primary: {
      border: "border-gold/20",
      iconColor: "text-gold",
      nameColor: "text-foreground",
      dot: "bg-gold",
    },
    planned: {
      border: "border-white/[0.06]",
      iconColor: "text-muted-foreground/50 group-hover:text-gold",
      nameColor: "text-foreground/80",
      dot: "bg-white/30",
    },
    future: {
      border: "border-white/[0.04]",
      iconColor: "text-muted-foreground/50 group-hover:text-muted-foreground/60",
      nameColor: "text-foreground/50",
      dot: "bg-white/15",
    },
  }

  return (
    <section id="technology" className="relative py-12 lg:py-24 bg-background overflow-hidden">
      {/* ── Golden flare orbs ── */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          top: "15%",
          left: "10%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.07) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          bottom: "10%",
          right: "12%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.05) 0%, rgba(212,168,83,0) 65%)",
          animation: "flare-breathe-slow 10s ease-in-out infinite",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 lg:mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
                  Platforms & Technology
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight tracking-tight">
                Where We <span className="text-gold">Build & Ship</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-xs text-xs sm:text-sm leading-relaxed">
              PC-first, Unreal Engine 5. Console expansion planned as titles mature.
            </p>
          </div>
        </FadeIn>

        {/* ── Platform Strip ──────────────────────────────────────────── */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 mb-8 lg:mb-10">
            {platforms.map((platform) => {
              const Icon = platform.icon
              const style = priorityStyles[platform.priority]
              return (
                <div
                  key={platform.name}
                  className={`group flex items-center gap-2.5 sm:gap-3 bg-background border ${style.border} rounded-xl px-3 sm:px-5 py-3 sm:py-3.5 hover:border-gold/30 transition-all duration-300`}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${style.iconColor} transition-colors duration-300 shrink-0`} strokeWidth={1.5} />
                  <div className="flex items-baseline gap-1.5 sm:gap-2">
                    <span className={`font-heading font-bold text-xs sm:text-sm tracking-tight ${style.nameColor}`}>
                      {platform.name}
                    </span>
                    <span className="text-muted-foreground/50 text-[9px] sm:text-[10px] tracking-wider uppercase">
                      {platform.subtitle}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </FadeIn>

        {/* ── Engine Showcase ──────────────────────────────────────────── */}
        <FadeIn delay={0.15}>
          <div className="relative rounded-xl overflow-hidden border border-white/[0.06] group">
            <div className="flex flex-col lg:flex-row">
              {/* Image side */}
              <div className="relative w-full lg:w-[38%] h-48 sm:h-56 lg:h-auto lg:min-h-[260px] overflow-hidden">
                <img
                   src="/HighresScreenshot00105.webp"
                  alt="Unreal Engine 5 in-game screenshot"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute top-0 bottom-0 right-0 w-3/4 bg-gradient-to-r from-transparent to-card hidden lg:block" />
                <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-card to-transparent lg:hidden" />

                {/* UE logo overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                  <img
                    src="/unreal-engine-xwo7bd8vu6fzpnkcifgtu.webp"
                    alt="Unreal Engine"
                    className="w-3.5 h-3.5 rounded-full object-cover invert"
                  />
                  <span className="text-foreground/80 text-[10px] font-semibold tracking-wider uppercase">
                    UE5
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="relative z-10 flex flex-col justify-center p-5 sm:p-6 lg:p-10 lg:w-[62%]">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-foreground tracking-tight mb-2">
                  Unreal Engine 5
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 max-w-md">
                  Nanite, Lumen, World Partition — powering cinematic open worlds
                  with real-time fidelity at scale.
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {["Nanite Geometry", "Lumen GI", "World Partition", "MetaHuman", "Chaos Physics"].map((tag) => (
                    <span
                      key={tag}
                      className="text-gold/50 text-[9px] sm:text-[10px] font-medium tracking-wider uppercase bg-gold/[0.06] border border-gold/10 px-2 sm:px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tech highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {techHighlights.map((tech) => (
                    <div key={tech.label} className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-gold/[0.08] rounded-md flex items-center justify-center shrink-0">
                        <tech.icon className="w-3.5 h-3.5 text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="text-foreground text-xs font-semibold block leading-tight">{tech.label}</span>
                        <span className="text-muted-foreground/50 text-[10px] leading-tight">{tech.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
