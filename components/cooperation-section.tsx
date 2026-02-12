import { ArrowUpRight, CheckCheck } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const models = [
  {
    title: "OUTSTAFFING",
    image: "/images/outstaffing.jpg",
    imageAlt: "Medieval fantasy battle scene",
    points: [
      "We provide individual experts or entire units to extend your team",
      "You handle project management",
      "Cost-effective and scalable team extension",
      "Best suited for skill-specific needs",
    ],
  },
  {
    title: "DEDICATED TEAM",
    image: "/images/dedicated-team.jpg",
    imageAlt: "Game development studio workstations",
    points: [
      "We provide a team tailored to your specific needs and requirements",
      "You directly manage the team as part of your workflow",
      "Skilled professionals seamlessly integrate to fill expertise gaps",
      "Best for large, evolving projects requiring ongoing development",
    ],
  },
  {
    title: "MANAGED OUTSOURCING",
    image: "/images/managed-outsourcing.jpg",
    imageAlt: "Futuristic soldier character model",
    points: [
      "We take full responsibility for the project from start to finish",
      "You receive the deliverables",
      "High-quality results with minimal client involvement",
      "Perfect for projects where you want experienced professionals to handle everything",
    ],
  },
]

const partnerLogos = [
  "LUCASFILM",
  "HOUSEMARQUE",
  "BANDAI NAMCO",
  "FOXNEXT",
  "BYTRO",
  "LUCID",
  "EA",
]

export function CooperationSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Edge glow */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      {/* Watermark */}
      <div className="watermark-text left-[3%] top-[20%]">MODELS</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-cyan" />
                <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase">Cooperation</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-xl text-balance font-display">
                OUR COOPERATION MODELS
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed lg:pt-8">
              Chronyx Studio team adapts to every client to offer bespoke services. Whatever your project{"'"}s requirements, we{"'"}ll find the approach that suits it best. For 13 years of experience, we have developed the most efficient cooperation models.
            </p>
          </FadeIn>
        </div>

        {/* Model cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.15}>
          {models.map((model) => (
            <StaggerItem key={model.title}>
              <motion.div
                className="bg-card border border-border overflow-hidden group card-glow-border transition-colors duration-300 hover:border-border/80 h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  {/* Corner accent on image */}
                  <div className="absolute bottom-0 left-0 w-10 h-px bg-pink group-hover:w-full transition-all duration-500" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="text-pink font-black text-sm tracking-wider font-display">{model.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  {model.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCheck className="w-4 h-4 text-pink mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <div className="flex justify-center mt-16">
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-cyan text-background px-8 py-4 text-sm font-bold tracking-wider hover:bg-cyan-dark transition-colors duration-300 hover:shadow-lg hover:shadow-cyan/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              HIRE US
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>
        </FadeIn>

        {/* Partners */}
        <FadeIn delay={0.2}>
          <div className="mt-24">
            <div className="flex justify-center mb-10">
              <span className="relative text-cyan font-bold text-sm tracking-[0.25em] uppercase px-6 py-2 border border-cyan/30 bg-background font-display">
                PARTNERS
              </span>
            </div>
            <StaggerContainer className="flex items-center justify-center gap-8 lg:gap-14 flex-wrap" staggerDelay={0.06}>
              {partnerLogos.map((logo) => (
                <StaggerItem key={logo}>
                  <motion.span
                    className="text-muted-foreground/40 text-xs font-bold tracking-[0.2em] uppercase hover:text-cyan transition-colors duration-300 cursor-default"
                    whileHover={{ scale: 1.1 }}
                  >
                    {logo}
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
