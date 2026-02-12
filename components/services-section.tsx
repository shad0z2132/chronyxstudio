import { ArrowRight, Swords, Crosshair, Layers, Users, Gamepad2, Globe } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

// ─── IP & Studio pillar cards ────────────────────────────────────────────────
const studioCards = [
  {
    title: "Sands of Avalon",
    subtitle: "Flagship ARPG",
    description:
      "A progression-focused ARPG centered on exploration, character development, and long-term advancement. Players navigate a rich world shaped by allegiance, rare resources, and evolving challenges — with meaningful progression earned through gameplay.",
    icon: Swords,
    badge: "arpg",
    image: "/images/game-dev.jpg",
    href: "#sands-of-avalon",
    accentColor: "gold",
  },
  {
    title: "Competitive FPS",
    subtitle: "Tournament-Ready Shooter",
    description:
      "A competitive first-person shooter designed specifically for tournaments and esports. Built around skill expression, team play, and competitive integrity — serving as a high-frequency engagement layer for events, rankings, and spectator-driven formats.",
    icon: Crosshair,
    badge: "fps",
    image: "/images/game-art.jpg",
    href: "#competitive-fps",
    accentColor: "cyan",
  },
  {
    title: "Deep Progression Systems",
    subtitle: "Core Design Philosophy",
    description:
      "Every Chronyx title is built around meaningful advancement. No shortcuts — progression is earned through gameplay. Character development, rare resources, evolving challenges, and allegiance systems create layers of depth that reward commitment and mastery.",
    icon: Layers,
    badge: "studio",
    image: null,
    href: "#philosophy",
    accentColor: "purple",
  },
  {
    title: "Player Identity & Allegiance",
    subtitle: "Community-Driven Design",
    description:
      "Strong player identity sits at the heart of Chronyx's design philosophy. Allegiance systems, character customization, and competitive rankings give players a real sense of ownership and purpose within each game world.",
    icon: Users,
    badge: "studio",
    image: null,
    href: "#player-identity",
    accentColor: "purple",
  },
  {
    title: "Competitive & Esports Infrastructure",
    subtitle: "Built for Competition",
    description:
      "From ranked ladders to tournament-ready formats, Chronyx builds competitive infrastructure directly into its titles. Spectator modes, event systems, and ranking frameworks ensure each game can support thriving competitive communities.",
    icon: Gamepad2,
    badge: "fps",
    image: null,
    href: "#esports",
    accentColor: "cyan",
  },
  {
    title: "Multi-Platform & Long-Term Vision",
    subtitle: "Web2-First, PC Priority",
    description:
      "Chronyx follows a Web2-first development approach, prioritizing accessibility, performance, and game quality. PC is the initial platform, with mobile and console expansion planned as the studio and its titles mature across genres and platforms.",
    icon: Globe,
    badge: "studio",
    image: null,
    href: "#vision",
    accentColor: "gold",
  },
]

// ─── Accent color mapping ────────────────────────────────────────────────────
const accentMap = {
  gold: {
    text: "text-gold",
    border: "border-gold/20",
    hoverBorder: "hover:border-gold/40",
    bg: "bg-gold/5",
    iconBg: "bg-gold/10",
    line: "from-gold to-gold/0",
    badge: "genre-badge-arpg",
    dot: "status-dot-arpg",
    glow: "rgba(212, 168, 83, 0.15)",
    cornersClass: "arpg-corners",
    cornerTR: "arpg-corner-tr",
    cornerBL: "arpg-corner-bl",
    cornerBR: "arpg-corner-br",
    cardClass: "arpg-card",
    textureBg: "sand-grain-bg",
    imageTint: "arpg-image-tint",
    toneBg: "linear-gradient(135deg, hsl(30 20% 6%), hsl(30 15% 5%))",
  },
  cyan: {
    text: "text-steel",
    border: "border-steel/20",
    hoverBorder: "hover:border-steel/40",
    bg: "bg-steel/5",
    iconBg: "bg-steel/10",
    line: "from-steel to-steel/0",
    badge: "genre-badge-fps",
    dot: "status-dot-fps",
    glow: "rgba(74, 168, 192, 0.15)",
    cornersClass: "fps-corners",
    cornerTR: "",
    cornerBL: "fps-corner-bl",
    cornerBR: "fps-corner-br",
    cardClass: "fps-card",
    textureBg: "carbon-fiber-bg",
    imageTint: "fps-image-tint",
    toneBg: "linear-gradient(135deg, hsl(210 18% 5%), hsl(210 15% 4%))",
  },
  purple: {
    text: "text-purple",
    border: "border-purple/20",
    hoverBorder: "hover:border-purple/40",
    bg: "bg-purple/5",
    iconBg: "bg-purple/10",
    line: "from-purple to-purple/0",
    badge: "genre-badge-studio",
    dot: "status-dot-purple",
    glow: "rgba(139, 92, 246, 0.15)",
    cornersClass: "hud-corners",
    cornerTR: "",
    cornerBL: "hud-corner-bl",
    cornerBR: "hud-corner-br",
    cardClass: "",
    textureBg: "",
    imageTint: "",
    toneBg: undefined as string | undefined,
  },
} as const

// ─── Featured IP Card (with image) ──────────────────────────────────────────
function FeaturedIPCard({
  card,
  index,
}: {
  card: (typeof studioCards)[0]
  index: number
}) {
  const accent = accentMap[card.accentColor as keyof typeof accentMap]
  const Icon = card.icon

  const toneClass = card.accentColor === "gold" ? "tone-arpg" : card.accentColor === "cyan" ? "tone-fps" : ""

  return (
    <motion.div
      className={`service-card ${accent.cornersClass} group relative overflow-hidden border ${accent.border} transition-all duration-500 ${accent.hoverBorder} ${accent.cardClass} ${toneClass}`}
      style={accent.toneBg ? { background: accent.toneBg } : undefined}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* IP-specific corners */}
      {accent.cornerTR && <div className={accent.cornerTR} />}
      <div className={accent.cornerBL} />
      <div className={accent.cornerBR} />

      {/* IP-specific background texture */}
      {accent.textureBg && <div className={`absolute inset-0 ${accent.textureBg} pointer-events-none`} />}

      <div className="flex flex-col lg:flex-row min-h-[280px] lg:min-h-[320px]">
        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 lg:w-[55%]">
          {/* Top row: number + badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className={`${accent.text} text-xs font-mono tracking-[0.3em] opacity-50`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={`genre-badge ${accent.badge}`}>
              <Icon className="w-3 h-3" />
              {card.subtitle}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-foreground mb-2 tracking-tight font-heading leading-tight">
            {card.title}
          </h3>

          <p className="text-muted-foreground text-base leading-[1.85] mb-8 max-w-md font-tactical">
            {card.description}
          </p>

          <a
            href={card.href}
            className={`service-see-more group/btn inline-flex items-center gap-3 ${accent.text} text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:gap-5 w-fit font-tactical`}
          >
            LEARN MORE
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>

        {/* Image — right side with glitch effect on hover */}
        {card.image && (
          <div className="relative lg:w-[45%] min-h-[200px] lg:min-h-0 glitch-effect">
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-card/30 lg:from-transparent lg:to-transparent" />
            {/* IP tone tint */}
            <div className={`absolute inset-0 ${accent.imageTint}`} />
          </div>
        )}
      </div>

      {/* Bottom accent line on hover */}
      <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r ${accent.line} group-hover:w-full transition-all duration-700`} />
    </motion.div>
  )
}

// ─── Pillar Card (text only, with icon) ──────────────────────────────────────
function PillarCard({
  card,
  index,
}: {
  card: (typeof studioCards)[0]
  index: number
}) {
  const accent = accentMap[card.accentColor as keyof typeof accentMap]
  const Icon = card.icon

  const toneClass = card.accentColor === "gold" ? "tone-arpg" : card.accentColor === "cyan" ? "tone-fps" : ""

  return (
    <motion.div
      className={`service-card ${accent.cornersClass} group relative overflow-hidden border ${accent.border} transition-all duration-500 ${accent.hoverBorder} ${accent.cardClass} ${toneClass}`}
      style={accent.toneBg ? { background: accent.toneBg } : undefined}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* IP-specific corners */}
      {accent.cornerTR && <div className={accent.cornerTR} />}
      <div className={accent.cornerBL} />
      <div className={accent.cornerBR} />

      {/* IP-specific background texture */}
      {accent.textureBg && <div className={`absolute inset-0 ${accent.textureBg} pointer-events-none`} />}

      <div className="flex flex-col lg:flex-row min-h-[200px] lg:min-h-[230px]">
        <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 w-full">
          <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-12">
            {/* Icon + number column */}
            <div className="flex items-center lg:flex-col lg:items-center gap-3 lg:gap-3 shrink-0">
              <div className={`w-10 h-10 ${accent.iconBg} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${accent.text}`} />
              </div>
              <span className={`${accent.text} text-xs font-mono tracking-[0.3em] opacity-40`}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-foreground tracking-tight font-heading leading-tight">
                  {card.title}
                </h3>
                <span className={`genre-badge ${accent.badge} hidden sm:inline-flex`}>
                  {card.subtitle}
                </span>
              </div>

              <p className="text-muted-foreground text-base leading-[1.85] mb-6 max-w-2xl font-tactical">
                {card.description}
              </p>

              <a
                href={card.href}
                className={`service-see-more group/btn inline-flex items-center gap-3 ${accent.text} text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:gap-5 w-fit font-tactical`}
              >
                LEARN MORE
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r ${accent.line} group-hover:w-full transition-all duration-700`} />
    </motion.div>
  )
}

// ─── Main Services / IPs Section ─────────────────────────────────────────────
export function ServicesSection() {
  return (
    <section id="games" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background texture — neutral */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Content margin lines */}
        <div className="absolute top-0 left-0 w-[1px] h-full z-20 bg-gradient-to-b from-[hsl(220,12%,14%)] via-[hsl(220,12%,18%)] to-[hsl(220,12%,14%)]" />
        <div className="absolute top-[40%] left-0 w-[30px] h-[200px] -translate-y-1/2 z-10 pointer-events-none bg-gold/20 blur-[20px] rounded-full" />
        <div className="absolute top-[40%] left-0 w-[6px] h-[120px] -translate-y-1/2 z-20 pointer-events-none bg-gold/60 blur-[4px] rounded-full" />

        <div className="absolute top-0 right-0 w-[1px] h-full z-20 bg-gradient-to-b from-[hsl(220,12%,14%)] via-[hsl(220,12%,18%)] to-[hsl(220,12%,14%)]" />
        <div className="absolute top-[60%] right-0 w-[20px] h-[150px] -translate-y-1/2 z-10 pointer-events-none bg-purple/15 blur-[15px] rounded-full" />

        {/* ─── Header ─────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-24">
          <FadeIn direction="left">
            <div>
              {/* Section label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot status-dot-gold" />
                <span className="text-sm font-mono tracking-[0.3em] text-gold/50 uppercase">
                  Our Games & Vision
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-gold/30 to-transparent" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-2xl font-heading tracking-tight">
                BUILDING WORLDS
                <br />
                <span className="hero-text-gradient">THAT ENDURE</span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="lg:pt-12">
              <p className="text-muted-foreground max-w-[360px] text-base leading-[1.85] font-tactical tracking-wide">
                Each title is developed independently — with its own mechanics, pacing, and audience. Deep experiences and fast competitive gameplay, without compromise.
              </p>
              {/* Mini genre indicators */}
              <div className="flex items-center gap-3 mt-4">
                <span className="genre-badge genre-badge-arpg">
                  <Swords className="w-3 h-3" />
                  ARPG
                </span>
                <span className="genre-badge genre-badge-fps">
                  <Crosshair className="w-3 h-3" />
                  FPS
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ─── Cards ──────────────────────────────────────────────────── */}
        <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.1}>
          {studioCards.map((card, i) => (
            <StaggerItem key={card.title}>
              {card.image ? (
                <FeaturedIPCard card={card} index={i} />
              ) : (
                <PillarCard card={card} index={i} />
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ─── Watermark — Orbitron ────────────────────────────────────── */}
        <div className="pointer-events-none select-none mt-[-1rem] relative z-0">
          <div
            className="text-center font-heading font-black text-[clamp(4rem,12vw,10rem)] leading-none tracking-[0.15em] text-transparent uppercase"
            style={{ WebkitTextStroke: "1.5px hsl(220, 12%, 10%)" }}
          >
            CHRONYX
          </div>
        </div>
      </div>
    </section>
  )
}
