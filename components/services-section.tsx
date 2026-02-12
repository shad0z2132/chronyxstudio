import { ArrowUpRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const services = [
  {
    title: "GAME DEVELOPMENT",
    description:
      "Chronyx is a game design studio offering a full spectrum of services, from concept and prototyping to soft launch and post-release support. Our specialists provide game design, art, animation, and top-tier development across all platforms.",
    image: "/images/game-dev.jpg",
    imageAlt: "Close up of a realistic tactical weapon 3D model",
  },
  {
    title: "GAME ART & DESIGN",
    description:
      "Chronyx Studio is a company looking for new ways to develop and display the most thrilling gaming worlds. We always go the extra mile to create exceptional game projects and colorful arts, recognized and highlighted by top tier video game companies.",
    image: "/images/game-art.jpg",
    imageAlt: "Sci-fi robot battle scene concept art",
  },
  {
    title: "GAME ANIMATION",
    description:
      "Animation is what turns art into life. We work on the way characters move, how environments react, and how motion supports the story. Sometimes it's a short loop, sometimes a full cinematic - but always shaped to match the tone of the game.",
    image: "/images/game-animation.jpg",
    imageAlt: "Game character in dynamic animation pose",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Edge glow */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      {/* Watermark */}
      <div className="watermark-text left-[3%] top-[40%]">SERVICES</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-cyan" />
                <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase">Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-2xl text-balance font-display">
                FULL-CYCLE GAME DEVELOPMENT STUDIO
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed lg:pt-8">
              From your idea to soft-launch, Chronyx Studio supports your project at any stage. Our team contains professionals of all profiles who deliver top quality work.
            </p>
          </FadeIn>
        </div>

        {/* Service cards */}
        <StaggerContainer className="flex flex-col gap-5" staggerDelay={0.15}>
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="relative group overflow-hidden border border-border bg-card min-h-[360px] lg:min-h-[420px] card-glow-border"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Stronger gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

                {/* Bottom-left cyan corner accent */}
                <div className="absolute bottom-0 left-0 w-16 h-px bg-cyan transition-all duration-500 group-hover:w-32" />
                <div className="absolute bottom-0 left-0 h-16 w-px bg-cyan transition-all duration-500 group-hover:h-32" />

                <div className="relative z-10 flex flex-col justify-center p-8 lg:p-14 h-full max-w-lg">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4 tracking-tight font-display">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="group/btn inline-flex items-center gap-2 bg-cyan text-background px-6 py-3 text-xs font-bold tracking-wider hover:bg-cyan-dark transition-all duration-300 w-fit hover:shadow-lg hover:shadow-cyan/20"
                  >
                    SEE MORE
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>

                {/* Bottom-right partner logos placeholder */}
                <div className="absolute bottom-6 right-6 flex items-center gap-3 z-10 opacity-40">
                  <span className="text-foreground text-[10px] font-bold tracking-[0.2em]">CHRONYX</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
