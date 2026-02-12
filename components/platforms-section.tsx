import { Gamepad2, Monitor, Smartphone, Apple, Laptop } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const platforms = [
  { name: "PlayStation", icon: Gamepad2 },
  { name: "Xbox", icon: Gamepad2 },
  { name: "Steam", icon: Monitor },
  { name: "Mobile", icon: Smartphone },
  { name: "PC", icon: Laptop },
  { name: "Apple", icon: Apple },
]

export function PlatformsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Platforms bar */}
      <div className="relative border-y border-border py-10 mb-24">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-10">
              <span className="relative text-gold font-bold text-sm tracking-[0.25em] uppercase px-6 py-2 border border-gold/30 bg-background font-heading">
                TARGET PLATFORMS
              </span>
            </div>
          </FadeIn>
          <StaggerContainer className="flex items-center justify-center gap-10 lg:gap-20 flex-wrap" staggerDelay={0.08}>
            {platforms.map((platform) => (
              <StaggerItem key={platform.name}>
                <motion.div
                  className="flex flex-col items-center gap-2 group cursor-default"
                  whileHover={{ scale: 1.2, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <platform.icon className="w-9 h-9 text-muted-foreground/60 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                  <span className="text-muted-foreground/40 text-sm font-tactical tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">{platform.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Platform note */}
          <FadeIn delay={0.3}>
            <div className="flex justify-center mt-8">
              <p className="text-muted-foreground/50 text-sm font-tactical tracking-wide text-center max-w-md">
                PC is the initial priority platform. Mobile and console expansion planned as titles mature.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Game Engines */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="status-dot status-dot-steel" />
                <span className="text-sm font-mono tracking-[0.3em] text-steel/50 uppercase">Technology</span>
                <div className="h-px w-16 bg-gradient-to-r from-steel/30 to-transparent" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-xl text-balance font-heading">
                ENGINES THAT POWER OUR WORLDS
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-muted-foreground max-w-md text-base leading-[1.85] lg:pt-8 font-tactical">
              Every game begins with a solid technical foundation. We leverage engines that allow us to remain creative and flexible — building the best possible experience for each title independently.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.2}>
          {/* Unity card */}
          <StaggerItem>
            <motion.div
              className="hud-corners relative group overflow-hidden border border-steel/20 aspect-[4/3] hover:border-steel/40 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />
              <img
                src="/images/unity-engine.jpg"
                alt="Unity game engine showcase with stylized fantasy character"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-500" />
              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-12 h-px bg-steel group-hover:w-24 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 h-12 w-px bg-steel group-hover:h-24 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-foreground text-4xl lg:text-5xl font-black tracking-wider block font-heading">Unity</span>
                  <span className="text-steel text-xs tracking-[0.3em] font-tactical mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">GAME ENGINE</span>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Unreal Engine card */}
          <StaggerItem>
            <motion.div
              className="hud-corners relative group overflow-hidden border border-gold/20 aspect-[4/3] hover:border-gold/40 transition-all duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />
              <img
                src="/images/unreal-engine.jpg"
                alt="Unreal Engine showcase with realistic sci-fi soldiers"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-500" />
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-px bg-gold group-hover:w-24 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 h-12 w-px bg-gold group-hover:h-24 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-foreground text-3xl lg:text-4xl font-black tracking-wider font-heading">UNREAL</span>
                <span className="text-muted-foreground text-xs tracking-[0.3em] font-tactical">ENGINE</span>
                <span className="text-gold text-xs tracking-[0.3em] font-tactical mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">HIGH-END VISUALS</span>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
