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
      {/* Edge glow */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      {/* Platforms bar */}
      <div className="relative border-y border-border py-10 mb-24">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-10">
              <span className="relative text-cyan font-bold text-sm tracking-[0.25em] uppercase px-6 py-2 border border-cyan/30 bg-background font-display">
                PLATFORMS WE WORK WITH
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
                  <platform.icon className="w-9 h-9 text-muted-foreground/60 group-hover:text-cyan transition-colors duration-300" strokeWidth={1.5} />
                  <span className="text-muted-foreground/40 text-[10px] font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">{platform.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Game Engines */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Watermark */}
        <div className="watermark-text right-[-5%] top-[-10%]">ENGINES</div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-cyan" />
                <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase">Technology</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-xl text-balance font-display">
                GAME ENGINES WE WORK WITH
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed lg:pt-8">
              Every game begins with a solid technical foundation. Some projects require fast prototyping and broad platform compatibility, while others demand high-end visuals and complex effects. As an online game development studio, we leverage engines that allow us to remain creative and flexible, adapting to the unique needs of each project.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.2}>
          {/* Unity card */}
          <StaggerItem>
            <motion.div
              className="relative group overflow-hidden border border-border aspect-[4/3] card-glow-border"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src="/images/unity-engine.jpg"
                alt="Unity game engine showcase with stylized fantasy character"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-500" />
              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-12 h-px bg-cyan group-hover:w-24 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 h-12 w-px bg-cyan group-hover:h-24 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-foreground text-4xl lg:text-5xl font-black tracking-wider block font-display">Unity</span>
                  <span className="text-cyan text-xs tracking-[0.3em] font-mono mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">GAME ENGINE</span>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Unreal Engine card */}
          <StaggerItem>
            <motion.div
              className="relative group overflow-hidden border border-border aspect-[4/3] card-glow-border"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <img
                src="/images/unreal-engine.jpg"
                alt="Unreal Engine showcase with realistic sci-fi soldiers"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-500" />
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-12 h-px bg-pink group-hover:w-24 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 h-12 w-px bg-pink group-hover:h-24 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-foreground text-3xl lg:text-4xl font-black tracking-wider font-display">UNREAL</span>
                <span className="text-muted-foreground text-xs tracking-[0.3em]">ENGINE</span>
                <span className="text-pink text-xs tracking-[0.3em] font-mono mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">HIGH-END VISUALS</span>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
