import { ArrowUpRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const posts = [
  {
    image: "/images/blog-1.jpg",
    imageAlt: "Game development design session",
    tag: "Dev Log",
    title: "Building Progression Systems That Respect Players' Time",
    excerpt:
      "How Sands of Avalon's character advancement is designed around meaningful milestones — not time gates or purchase shortcuts.",
    slug: "#",
  },
  {
    image: "/images/blog-2.jpg",
    imageAlt: "Character concept art process",
    tag: "Art & Design",
    title: "Designing Allegiance Systems for a Living World",
    excerpt:
      "How faction loyalty, territory control, and player-driven politics create emergent narratives in Sands of Avalon.",
    slug: "#",
  },
  {
    image: "/images/blog-3.jpg",
    imageAlt: "Esports competitive gaming setup",
    tag: "Esports",
    title: "What Tournament-Ready Actually Means for an FPS",
    excerpt:
      "Spectator modes, anti-cheat, ranking frameworks, and event infrastructure — what we're building from day one.",
    slug: "#",
  },
]

export function BlogSection() {
  return (
    <section className="relative py-24 lg:py-36 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <FadeIn>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  Dev Log
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
                From the
                <br />
                <span className="text-gold">Workshop</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="#"
              className="group text-gold text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1"
            >
              View All Posts
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </FadeIn>
        </div>

        {/* Blog cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.1}>
          {posts.map((post) => (
            <StaggerItem key={post.title}>
              <motion.article
                className="group bg-[#0d0d14] border border-white/[0.06] rounded-xl overflow-hidden hover:border-white/[0.12] transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14]/60 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-gold/80 text-xs font-medium tracking-wider uppercase bg-gold/[0.08] px-3 py-1 rounded-md mb-4">
                    {post.tag}
                  </span>
                  <h3 className="text-foreground font-heading font-semibold text-base leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.slug}
                    className="group/link text-gold text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1"
                  >
                    Read More
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
