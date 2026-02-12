import { ArrowRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

// ─── Service card data ───────────────────────────────────────────────────────
// First 3 have images (like Kevuru's top cards), last 3 are text-only
const services = [
  {
    title: "Game Development",
    description:
      "Chronyx is a game design studio offering a full spectrum of services, from concept and prototyping to soft launch and post-release support. Our specialists provide game design, art, animation, and top-tier development across all platforms.",
    image: "/images/game-dev.jpg",
    imageAlt: "Close-up of a realistic tactical weapon 3D model",
    href: "#contact",
  },
  {
    title: "Game Art & Design",
    description:
      "Chronyx Studio is a company looking for new ways to develop and display the most thrilling gaming worlds. We always go the extra mile to create exceptional game projects and colorful arts, recognized and highlighted by top tier video game companies.",
    image: "/images/game-art.jpg",
    imageAlt: "Sci-fi robot battle scene concept art",
    href: "#contact",
  },
  {
    title: "Game Animation",
    description:
      "Animation is what turns art into life. We work on the way characters move, how environments react, and how motion supports the story. Sometimes it's a short loop, sometimes a full cinematic — but always shaped to match the tone of the game. The result feels natural, not forced, and keeps players inside the world you've created.",
    image: "/images/game-animation.jpg",
    imageAlt: "Game character in dynamic animation pose",
    href: "#contact",
  },
  {
    title: "Quality Assurance",
    description:
      "In our video game development studio, testing is part of everyday work. The team plays, observes, and fixes until the game runs the way it should. We check how it looks, sounds, and feels across different devices, paying attention to the small things players might notice first. The goal is simple — a smooth experience that holds together from start to finish.",
    image: null,
    imageAlt: "",
    href: "#contact",
  },
  {
    title: "AAA Game Development & Art",
    description:
      "Our video game outsourcing team works on big projects where every detail matters. We help studios create full worlds, design characters, and shape the overall look and feel of a game. The work can start from a sketch or from an existing build — we fit into the process where needed. The focus stays on consistency, strong visuals, and results that blend naturally with the rest of the production.",
    image: null,
    imageAlt: "",
    href: "#contact",
  },
  {
    title: "VR Development",
    description:
      "At our game design studio, we build VR worlds that feel close to real. The team experiments with light, depth, and motion until every move feels natural inside the headset. It's not only about graphics — it's about how players sense space, react to sound, and lose track of where the real world ends.",
    image: null,
    imageAlt: "",
    href: "#contact",
  },
]

// ─── Service Card with Image (cards 1-3) ─────────────────────────────────────
function ServiceCardWithImage({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  return (
    <motion.div
      className="service-card group relative overflow-hidden border border-[hsl(220,10%,14%)] bg-card transition-all duration-500 hover:border-[hsl(220,10%,22%)]"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex flex-col lg:flex-row min-h-[260px] lg:min-h-[300px]">
        {/* Text content — left side */}
        <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 lg:w-[55%]">
          {/* Numbering */}
          <span className="text-pink/40 text-xs font-mono tracking-[0.3em] mb-4">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-foreground mb-5 tracking-tight font-display leading-tight">
            {service.title}
          </h3>

          <p className="text-muted-foreground text-[13px] leading-[1.85] mb-8 max-w-md">
            {service.description}
          </p>

          <a
            href={service.href}
            className="service-see-more group/btn inline-flex items-center gap-3 text-pink text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:gap-5 w-fit"
          >
            SEE MORE
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>

        {/* Image — right side with gradient fade */}
        <div className="relative lg:w-[45%] min-h-[200px] lg:min-h-0">
          <img
            src={service.image!}
            alt={service.imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient fade from left (blending image into the dark card bg) */}
          <div className="absolute inset-0 bg-gradient-to-r from-card via-card/60 to-transparent" />
          {/* Top/bottom gradient for mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-card/30 lg:from-transparent lg:to-transparent" />
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink to-pink/0 group-hover:w-full transition-all duration-700" />
    </motion.div>
  )
}

// ─── Service Card Text Only (cards 4-6) ──────────────────────────────────────
function ServiceCardTextOnly({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  return (
    <motion.div
      className="service-card group relative overflow-hidden border border-[hsl(220,10%,14%)] bg-card transition-all duration-500 hover:border-[hsl(220,10%,22%)]"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex flex-col lg:flex-row min-h-[200px] lg:min-h-[220px]">
        {/* Text content — full width for text-only cards */}
        <div className="relative z-10 flex flex-col justify-center p-8 lg:p-12 w-full">
          {/* Top row: number + title + see more */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-12">
            {/* Numbering */}
            <span className="text-pink/40 text-xs font-mono tracking-[0.3em] lg:pt-2 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-foreground mb-5 tracking-tight font-display leading-tight">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-[13px] leading-[1.85] mb-6 max-w-2xl">
                {service.description}
              </p>

              <a
                href={service.href}
                className="service-see-more group/btn inline-flex items-center gap-3 text-pink text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:gap-5 w-fit"
              >
                SEE MORE
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink to-pink/0 group-hover:w-full transition-all duration-700" />
    </motion.div>
  )
}

// ─── Main ServicesSection ────────────────────────────────────────────────────
export function ServicesSection() {
  return (
    <section id="services" className="relative py-28 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Content margin lines — matching WhyChooseUs */}
        <div className="absolute top-0 left-0 w-[1px] h-full z-20 bg-gradient-to-b from-[hsl(220,10%,18%)] via-[hsl(220,10%,22%)] to-[hsl(220,10%,18%)]" />
        <div className="absolute top-[40%] left-0 w-[30px] h-[200px] -translate-y-1/2 z-10 pointer-events-none bg-pink/30 blur-[20px] rounded-full" />
        <div className="absolute top-[40%] left-0 w-[6px] h-[120px] -translate-y-1/2 z-20 pointer-events-none bg-pink/80 blur-[4px] rounded-full" />

        <div className="absolute top-0 right-0 w-[1px] h-full z-20 bg-gradient-to-b from-[hsl(220,10%,18%)] via-[hsl(220,10%,22%)] to-[hsl(220,10%,18%)]" />
        <div className="absolute top-[60%] right-0 w-[20px] h-[150px] -translate-y-1/2 z-10 pointer-events-none bg-pink/15 blur-[15px] rounded-full" />

        {/* ─── Header: italic heading left, mono description right ─── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-24">
          <FadeIn direction="left">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-2xl font-display tracking-tight italic">
              FULL-CYCLE GAME
              <br />
              DEVELOPMENT
              <br />
              STUDIO
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-muted-foreground max-w-[320px] text-[13px] leading-[1.85] lg:pt-1 font-mono tracking-wide">
              From your idea to soft-launch, Chronyx Studio supports your project at any stage. Our team contains professionals of all profiles who deliver top quality work.
            </p>
          </FadeIn>
        </div>

        {/* ─── Service Cards ──────────────────────────────────────────── */}
        <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.1}>
          {services.map((service, i) => (
            <StaggerItem key={service.title}>
              {service.image ? (
                <ServiceCardWithImage service={service} index={i} />
              ) : (
                <ServiceCardTextOnly service={service} index={i} />
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ─── SERVICES watermark — below cards ───────────────────────── */}
        <div className="pointer-events-none select-none mt-[-1rem] relative z-0">
          <div
            className="text-center font-display font-black text-[clamp(5rem,14vw,12rem)] leading-none tracking-[0.15em] text-transparent uppercase"
            style={{ WebkitTextStroke: "1.5px hsl(220, 10%, 14%)" }}
          >
            SERVICES
          </div>
        </div>
      </div>
    </section>
  )
}
