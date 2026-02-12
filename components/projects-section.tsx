import { ArrowUpRight, CheckCheck } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const projects = [
  {
    title: "STELLAR ODYSSEY",
    image: "/images/project-1.jpg",
    publisher: "MAJOR PUBLISHER",
    highlights: [
      "VR-based action-adventure game based on an iconic sci-fi franchise",
      "Creating 3D characters with texture variations",
    ],
  },
  {
    title: "NEON ARENA",
    image: "/images/project-2.jpg",
    publisher: "AAA STUDIO",
    highlights: [
      "Fast-paced multiplayer battle royale with vibrant art style",
      "Character design and environment art for 50+ unique skins",
    ],
  },
  {
    title: "IRON ORDER 1919",
    image: "/images/project-3.jpg",
    publisher: "INDIE STUDIO",
    highlights: [
      "Historical real-time strategy game with alternate history setting",
      "Full art production including UI design and cinematic sequences",
    ],
  },
]

export function ProjectsSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden bg-card">
      {/* Edge glow */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      {/* Angled top separator */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-background clip-angle-bottom z-10" />

      {/* Watermark */}
      <div className="watermark-text left-[5%] top-[8%]">PROJECTS</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-pink" />
                <span className="text-pink text-xs font-mono tracking-[0.3em] uppercase">Portfolio</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-md text-balance font-display">
                OUR TOP-RATED PROJECTS
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed lg:pt-8">
              Our game development studio has successfully handled projects from initial concept art to full-scale production. As a creative studio, we emphasize solid game design, high-quality art, and thorough QA, delivering polished and engaging experiences across PC, mobile, and console platforms.
            </p>
          </FadeIn>
        </div>

        {/* Projects */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Project info */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className="flex flex-col gap-6"
              >
                <h3 className="text-2xl font-bold text-foreground tracking-tight font-display">
                  {projects[active].title}
                </h3>
                <div className="flex flex-col gap-3">
                  {projects[active].highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCheck className="w-5 h-5 text-cyan mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 border border-cyan text-cyan px-6 py-3 text-xs font-bold tracking-wider hover:bg-cyan hover:text-background transition-all duration-300 w-fit mt-2"
                >
                  VIEW PROJECT
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Project carousel */}
          <div className="lg:w-2/3 flex gap-4 items-stretch overflow-x-auto pb-4 w-full">
            {projects.map((project, i) => (
              <motion.button
                key={project.title}
                onClick={() => setActive(i)}
                className={`relative shrink-0 w-52 lg:w-60 aspect-[3/4] overflow-hidden border-2 transition-colors duration-500 ${
                  i === active
                    ? "border-pink shadow-2xl shadow-pink/20"
                    : "border-border/50 hover:border-border"
                }`}
                animate={{
                  scale: i === active ? 1.05 : 1,
                  opacity: i === active ? 1 : 0.5,
                }}
                whileHover={{ opacity: i === active ? 1 : 0.75, scale: i === active ? 1.05 : 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project poster`}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                    i === active ? "scale-110" : ""
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <AnimatePresence>
                  {i === active && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-3 right-3 bg-background/80 border border-border px-2 py-1"
                    >
                      <span className="text-[10px] text-foreground font-bold tracking-wider">{project.publisher}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-foreground text-xs font-bold tracking-wider font-display">{project.title}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-14">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className={`w-9 h-9 text-xs font-bold border transition-colors duration-300 ${
                i === active
                  ? "border-pink text-background bg-pink"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
