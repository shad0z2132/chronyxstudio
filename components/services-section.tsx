import { ArrowRight, Swords, Crosshair, Layers, Users, Gamepad2, Globe } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const studioCards = [
  {
    title: "Sands of Avalon",
    subtitle: "Flagship ARPG",
    description:
      "A progression-focused ARPG centered on exploration, character development, and long-term advancement. Players navigate a rich world shaped by allegiance, rare resources, and evolving challenges.",
    icon: Swords,
    image: "/images/game-dev.jpg",
    href: "#sands-of-avalon",
  },
  {
    title: "Competitive FPS",
    subtitle: "Tournament-Ready Shooter",
    description:
      "A competitive first-person shooter designed for tournaments and esports. Built around skill expression, team play, and competitive integrity — serving as a high-frequency engagement layer.",
    icon: Crosshair,
    image: "/images/game-art.jpg",
    href: "#competitive-fps",
  },
  {
    title: "Deep Progression Systems",
    subtitle: "Core Design Philosophy",
    description:
      "Every Chronyx title is built around meaningful advancement. No shortcuts — progression is earned through gameplay. Character development and evolving challenges create layers of depth.",
    icon: Layers,
    image: null,
    href: "#philosophy",
  },
  {
    title: "Player Identity & Allegiance",
    subtitle: "Community-Driven Design",
    description:
      "Strong player identity sits at the heart of Chronyx's design philosophy. Allegiance systems and competitive rankings give players a real sense of ownership and purpose.",
    icon: Users,
    image: null,
    href: "#player-identity",
  },
  {
    title: "Competitive & Esports Infrastructure",
    subtitle: "Built for Competition",
    description:
      "From ranked ladders to tournament-ready formats, Chronyx builds competitive infrastructure directly into its titles. Spectator modes and event systems support thriving communities.",
    icon: Gamepad2,
    image: null,
    href: "#esports",
  },
  {
    title: "Multi-Platform & Long-Term Vision",
    subtitle: "Web2-First, PC Priority",
    description:
      "Chronyx follows a Web2-first development approach, prioritizing accessibility, performance, and game quality. PC is the initial platform, with expansion planned as titles mature.",
    icon: Globe,
    image: null,
    href: "#vision",
  },
]

function GameCard({ card, index }: { card: (typeof studioCards)[0]; index: number }) {
  const Icon = card.icon
  return (
    <motion.div
      className="group relative overflow-hidden bg-card border border-white/[0.06] rounded-xl hover:border-white/[0.12] transition-all duration-300"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className={`flex flex-col ${card.image ? "lg:flex-row" : ""} min-h-[200px]`}>
        {/* Text content */}
        <div className={`relative z-10 flex flex-col justify-center p-8 lg:p-10 ${card.image ? "lg:w-[55%]" : "w-full"}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-muted-foreground/40 text-xs font-medium tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-gold/80 text-xs font-medium tracking-wider uppercase bg-gold/[0.08] px-3 py-1 rounded-md">
              {card.subtitle}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2 tracking-tight">
            {card.title}
          </h3>

          <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-md">
            {card.description}
          </p>

          <a
            href={card.href}
            className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide uppercase hover:gap-4 transition-all duration-200 w-fit"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Image */}
        {card.image && (
          <div className="relative lg:w-[45%] min-h-[200px] lg:min-h-0">
            <img
              src={card.image}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-card via-card/50 to-transparent" />
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section id="games" className="relative py-24 lg:py-36 overflow-hidden">
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
            <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
              Each title is developed independently — with its own mechanics, pacing, and audience.
              Deep experiences and fast competitive gameplay, without compromise.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.08}>
          {studioCards.map((card, i) => (
            <StaggerItem key={card.title}>
              <GameCard card={card} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
