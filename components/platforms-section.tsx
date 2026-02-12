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
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Platforms bar */}
      <div className="relative border-y border-white/[0.06] py-10 mb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <span className="text-gold font-heading font-semibold text-sm tracking-[0.2em] uppercase px-5 py-2 border border-gold/20 rounded-lg bg-gold/[0.04]">
                Target Platforms
              </span>
            </div>
          </FadeIn>
          <StaggerContainer className="flex items-center justify-center gap-10 lg:gap-20 flex-wrap" staggerDelay={0.06}>
            {platforms.map((platform) => (
              <StaggerItem key={platform.name}>
                <motion.div
                  className="flex flex-col items-center gap-2 group cursor-default"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <platform.icon className="w-8 h-8 text-muted-foreground/50 group-hover:text-gold transition-colors duration-200" strokeWidth={1.5} />
                  <span className="text-muted-foreground/30 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {platform.name}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.2}>
            <p className="text-center text-muted-foreground/40 text-sm mt-6 max-w-md mx-auto">
              PC is the initial priority platform. Mobile and console expansion planned as titles mature.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Game Engines */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  Technology
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
                Engines That Power
                <br />
                Our Worlds
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              Every game begins with a solid technical foundation. We leverage engines
              that allow us to remain creative and flexible.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.15}>
          {/* Unity */}
          <StaggerItem>
            <motion.div
              className="relative group overflow-hidden border border-white/[0.06] rounded-xl aspect-[4/3] hover:border-white/[0.12] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src="/images/unity-engine.jpg"
                alt="Unity game engine showcase"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-foreground text-4xl lg:text-5xl font-heading font-bold tracking-wide block">
                    Unity
                  </span>
                  <span className="text-gold text-xs tracking-[0.2em] mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Game Engine
                  </span>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Unreal */}
          <StaggerItem>
            <motion.div
              className="relative group overflow-hidden border border-white/[0.06] rounded-xl aspect-[4/3] hover:border-white/[0.12] transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src="/images/unreal-engine.jpg"
                alt="Unreal Engine showcase"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-foreground text-3xl lg:text-4xl font-heading font-bold tracking-wide">
                  Unreal
                </span>
                <span className="text-muted-foreground text-xs tracking-[0.2em]">Engine</span>
                <span className="text-gold text-xs tracking-[0.2em] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  High-End Visuals
                </span>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
