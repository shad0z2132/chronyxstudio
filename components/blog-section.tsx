import { ArrowUpRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const posts = [
  {
    image: "/images/blog-1.jpg",
    imageAlt: "Game development design session",
    tag: "Dev Log",
    tagAccent: "gold",
    title: "Building Progression Systems That Respect Players' Time",
    excerpt:
      "How Sands of Avalon's character advancement is designed around meaningful milestones — not time gates or purchase shortcuts. A deep dive into our progression philosophy.",
    slug: "#",
  },
  {
    image: "/images/blog-2.jpg",
    imageAlt: "Character concept art process",
    tag: "Art & Design",
    tagAccent: "purple",
    title: "Designing Allegiance Systems for a Living World",
    excerpt:
      "How faction loyalty, territory control, and player-driven politics create emergent narratives in Sands of Avalon — and why it matters for long-term engagement.",
    slug: "#",
  },
  {
    image: "/images/blog-3.jpg",
    imageAlt: "Esports competitive gaming setup",
    tag: "Esports",
    tagAccent: "cyan",
    title: "What Tournament-Ready Actually Means for an FPS",
    excerpt:
      "Spectator modes, anti-cheat, ranking frameworks, and event infrastructure — what we're building from day one to support competitive communities.",
    slug: "#",
  },
]

const tagColors = {
  gold: "bg-gold/10 text-gold",
  purple: "bg-purple/10 text-purple",
  cyan: "bg-cyan/10 text-cyan",
} as const

export function BlogSection() {
  return (
    <section className="relative py-28 lg:py-40 bg-card overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 hex-grid-bg" />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="status-dot status-dot-cyan" />
                <span className="text-sm font-mono tracking-[0.3em] text-cyan/50 uppercase">
                  Dev Log
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-cyan/30 to-transparent" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] text-balance font-heading tracking-tight">
                FROM THE
                <br />
                <span className="hero-text-gradient-alt">WORKSHOP</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <a
              href="#"
              className="group text-gold text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1 font-tactical"
            >
              VIEW ALL POSTS
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </FadeIn>
        </div>

        {/* Blog cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.15}>
          {posts.map((post) => {
            const tagColor = tagColors[post.tagAccent as keyof typeof tagColors]
            return (
              <StaggerItem key={post.title}>
                <motion.article
                  className="hud-corners bg-background border border-border hover:border-gold/20 overflow-hidden group transition-all duration-500 h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="hud-corner-bl" />
                  <div className="hud-corner-br" />

                  <div className="relative h-52 overflow-hidden glitch-effect">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className={`inline-block ${tagColor} text-sm font-bold tracking-wider px-3 py-1 mb-4 uppercase font-tactical`}>
                      {post.tag}
                    </span>
                    <h3 className="text-foreground text-base font-bold leading-snug mb-3 font-heading">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-[1.85] mb-5 font-tactical">
                      {post.excerpt}
                    </p>
                    <a
                      href={post.slug}
                      className="group/link text-gold text-sm font-bold tracking-wider hover:underline inline-flex items-center gap-1 font-tactical"
                    >
                      READ MORE
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </motion.article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
