import { useRef } from "react"
import { ArrowUpRight, Swords, Crosshair, Shield, Map, Users, Trophy, Flame, ExternalLink } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion, useScroll, useTransform } from "framer-motion"

const worlds = [
  {
    title: "Sands of Avalon",
    subtitle: "Action RPG",
    image: "/Anubismonolith.webp",
    characterImage: "/SETH 1.webp",
    icon: Swords,
    tagline: "Forge Your Legend",
    status: "In Development",
    steamHref: "https://store.steampowered.com/app/4052670/Sands_Of_Avalon_Forge_Your_Legend/?beta=1",
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
    image: "/photo_2026-02-18_02-54-03.jpg",
    characterImage: "/alien-planet-building.webp",
    icon: Crosshair,
    tagline: "Prove Your Skill",
    status: "Pre-Production",
    steamHref: null,
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

// ── Desktop-only scroll-jack wrapper ─────────────────────────────────────────
function ProjectsSectionDesktop() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section id="games" ref={targetRef} className="relative h-[250vh] bg-[#0f1115] ambient-glow-gold">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <ProjectsFlares />
        <ProjectsHeader />

        {/* Horizontal scroll container */}
        <div className="relative w-full z-10 overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-8 w-[200vw] px-6 lg:px-12"
          >
            {worlds.map((world) => (
              <div key={world.title} className="w-[100vw] lg:w-[calc(100vw-6rem)] shrink-0 flex items-center pr-6 lg:pr-12">
                <WorldCard world={world} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ── Mobile stacked layout ─────────────────────────────────────────────────────
function ProjectsSectionMobile() {
  return (
    <section id="games" className="relative bg-[#0f1115] ambient-glow-gold py-24">
      <ProjectsFlares />
      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        <ProjectsHeader />
        <div className="flex flex-col gap-8 mt-10">
          {worlds.map((world) => (
            <WorldCard key={world.title} world={world} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Shared sub-components ─────────────────────────────────────────────────────
function ProjectsFlares() {
  return (
    <>
      <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[rgba(10,25,47,0.4)] rounded-full pointer-events-none will-change-transform" style={{ filter: 'blur(80px)', transform: 'translateZ(0)' }} />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-[rgba(10,25,47,0.3)] rounded-full pointer-events-none will-change-transform" style={{ filter: 'blur(70px)', transform: 'translateZ(0)' }} />
      <div className="absolute pointer-events-none" style={{ top: "10%", right: "12%", width: "550px", height: "550px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,83,0.10) 0%, rgba(212,168,83,0) 70%)", animation: "flare-breathe 8s ease-in-out infinite" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "15%", left: "8%", width: "480px", height: "480px", borderRadius: "50%", background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0) 65%)", animation: "flare-breathe-slow 10s ease-in-out infinite" }} />
    </>
  )
}

function ProjectsHeader() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 z-10 mb-12 shrink-0">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <FadeIn>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">Our Worlds</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
              Two Worlds.<br /><span className="text-gold">One Vision.</span>
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
    </div>
  )
}

function WorldCard({ world }: { world: (typeof worlds)[0] }) {
  const Icon = world.icon
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto group relative bg-[#0f1115] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.05] rounded-xl overflow-hidden hover:border-gold/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,168,83,0.1)]"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/50 transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex flex-col lg:flex-row min-h-[420px]">
        {/* Image side */}
        <div className="relative lg:w-[50%] min-h-[220px] lg:min-h-0 overflow-hidden">
          <img
            src={world.image}
            alt={world.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-0 bottom-0 right-0 w-3/4 bg-gradient-to-r from-transparent to-[#0f1115] hidden lg:block" />
          <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0f1115] to-transparent lg:hidden" />
          <div className={`absolute inset-0 bg-gradient-to-br ${world.gradient} opacity-40`} />
          <div className="absolute top-4 left-4 z-10">
            <span className="text-gold/90 text-[10px] font-bold tracking-[0.2em] uppercase bg-gold/[0.12] backdrop-blur-sm px-3 py-1.5 rounded-md border border-gold/20">
              {world.status}
            </span>
          </div>
          {world.characterImage && (
            <div className="absolute bottom-0 right-4 w-[45%] max-w-[220px] hidden lg:block">
              <img src={world.characterImage} alt="" loading="lazy" className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:translate-y-[-4px]" />
            </div>
          )}
        </div>

        {/* Content side */}
        <div className="relative z-10 flex flex-col justify-center p-6 lg:p-12 lg:w-[50%]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gold/[0.08] rounded-lg flex items-center justify-center border border-gold/10">
              <Icon className="w-4 h-4 text-gold" strokeWidth={1.5} />
            </div>
            <span className="text-gold/70 text-xs font-medium tracking-wider uppercase">{world.subtitle}</span>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight mb-2">
            {world.title}
          </h3>

          <div className="mb-5">
            <p className="text-gold/60 text-sm font-medium tracking-wide italic">{world.tagline}</p>
            <div className="mt-1.5 h-px w-0 group-hover:w-full bg-gradient-to-r from-gold/40 to-transparent transition-all duration-500 ease-out max-w-[200px]" />
          </div>

          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-6 max-w-md">
            {world.description}
          </p>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6" staggerDelay={0.06}>
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

          <div className="flex flex-wrap items-center gap-3">
            {world.steamHref && (
              <a
                href={world.steamHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-background px-5 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all duration-200 w-fit group/steam hover:shadow-[0_0_30px_rgba(212,168,83,0.2)]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Wishlist on Steam
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent border border-gold/30 hover:border-gold hover:bg-gold/10 text-gold px-5 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase transition-colors duration-200 w-fit group/btn"
            >
              Learn More
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Responsive entry point ────────────────────────────────────────────────────
export function ProjectsSection() {
  return (
    <>
      {/* Desktop: scroll-jacked horizontal pan */}
      <div className="hidden lg:block">
        <ProjectsSectionDesktop />
      </div>
      {/* Mobile/tablet: simple stacked vertical cards */}
      <div className="lg:hidden">
        <ProjectsSectionMobile />
      </div>
    </>
  )
}
