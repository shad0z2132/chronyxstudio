import { ArrowUpRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const posts = [
  {
    image: "/images/blog-1.jpg",
    imageAlt: "Game development brainstorming session",
    tag: "Expert Tips",
    title: "How to Choose the Right Game Development Partner in 2026",
    excerpt:
      "Selecting a game development studio is a critical decision that impacts your project's success. Here are the key factors to consider...",
    slug: "#",
  },
  {
    image: "/images/blog-2.jpg",
    imageAlt: "3D character modeling process",
    tag: "Art & Design",
    title: "The Evolution of 3D Character Design in Modern Gaming",
    excerpt:
      "From low-poly models to photorealistic characters, game art has undergone a dramatic transformation. We explore the techniques behind it...",
    slug: "#",
  },
  {
    image: "/images/blog-3.jpg",
    imageAlt: "VR gaming technology concept",
    tag: "Industry Trends",
    title: "VR Game Development: What to Expect in the Next Decade",
    excerpt:
      "Virtual reality gaming continues to push boundaries. Discover the emerging trends and technologies that will shape VR game development...",
    slug: "#",
  },
]

export function BlogSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-card overflow-hidden">
      {/* Edge glow */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-cyan" />
                <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase">Insights</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance font-display">
                LATEST ON OUR BLOG
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <a
              href="#"
              className="group text-cyan text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1"
            >
              VIEW ALL POSTS
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </FadeIn>
        </div>

        {/* Blog cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.15}>
          {posts.map((post) => (
            <StaggerItem key={post.title}>
              <motion.article
                className="bg-background border border-border overflow-hidden group card-glow-border transition-colors duration-300 hover:border-border/80 h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-pink/10 text-pink text-[10px] font-bold tracking-wider px-3 py-1 mb-4 uppercase">
                    {post.tag}
                  </span>
                  <h3 className="text-foreground text-base font-bold leading-snug mb-3 font-display">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.slug}
                    className="group/link text-cyan text-xs font-bold tracking-wider hover:underline inline-flex items-center gap-1"
                  >
                    READ MORE
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
