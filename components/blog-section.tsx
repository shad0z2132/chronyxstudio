import { ArrowUpRight, BookOpen, Palette, Trophy, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const posts = [
  {
    slug: "building-progression-systems",
    tag: "Dev Log",
    icon: BookOpen,
    date: "Feb 20, 2026",
    title: "Building Progression Systems That Respect Players' Time",
    excerpt:
      "How Sands of Avalon's character advancement is designed around meaningful milestones — not time gates or purchase shortcuts.",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "designing-allegiance-systems",
    tag: "Art & Design",
    icon: Palette,
    date: "Feb 10, 2026",
    title: "Designing Allegiance Systems for a Living World",
    excerpt:
      "How faction loyalty, territory control, and player-driven politics create emergent narratives in Sands of Avalon.",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "tournament-ready-fps",
    tag: "Esports",
    icon: Trophy,
    date: "Jan 28, 2026",
    title: "What Tournament-Ready Actually Means for an FPS",
    excerpt:
      "Spectator modes, anti-cheat, ranking frameworks, and event infrastructure — what we're building from day one.",
    readTime: "7 min read",
    featured: false,
  },
]

export function BlogSection() {
  const [featured, ...rest] = posts

  return (
    <section id="news" className="relative py-24 lg:py-36 bg-card overflow-hidden">
      {/* ── Golden flare orbs ── */}
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          top: "15%",
          right: "10%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none z-[1]"
        style={{
          bottom: "10%",
          left: "15%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, rgba(212,168,83,0) 65%)",
          animation: "flare-breathe-slow 10s ease-in-out infinite",
        }}
      />

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
            <Link
              to="/devlog"
              className="group text-gold text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1"
            >
              View All Posts
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FadeIn>
        </div>

        {/* Blog layout — featured + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured post — large */}
          <FadeIn className="lg:col-span-3">
            <motion.article
              className="group relative bg-[#0f1115] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.05] rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,168,83,0.1)] transition-all duration-500 h-full flex flex-col"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Top accent border */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/50 transition-all duration-500" />

              {/* Accent gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 p-8 lg:p-10 flex flex-col flex-1">
                {/* Tag + meta */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-gold/80 text-xs font-medium tracking-wider uppercase bg-gold/[0.08] px-3 py-1.5 rounded-md">
                    <featured.icon className="w-3 h-3" />
                    {featured.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-muted-foreground/50 text-xs">
                    <Clock className="w-3 h-3" />
                    {featured.readTime}
                  </div>
                </div>

                <h3 className="text-foreground font-heading font-bold text-2xl lg:text-3xl leading-snug mb-4 group-hover:text-gold transition-colors duration-300">
                  {featured.title}
                </h3>

                <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-xl flex-1">
                  {featured.excerpt}
                </p>

                <div className="flex items-center justify-between">
                   <span className="text-muted-foreground/50 text-xs tracking-wider uppercase">
                     {featured.date}
                  </span>
                  <Link
                    to={`/devlog/${featured.slug}`}
                    className="group/link text-gold text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1"
                  >
                    Read Article
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </FadeIn>

          {/* Sidebar posts — stacked */}
          <StaggerContainer className="lg:col-span-2 flex flex-col gap-5" staggerDelay={0.1}>
            {rest.map((post) => (
              <StaggerItem key={post.title}>
                <motion.article
                  className="group relative bg-[#0f1115] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] border border-white/[0.05] rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,168,83,0.1)] transition-all duration-500 h-full"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Top accent border */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/50 transition-all duration-500" />
                  
                  {/* Accent gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10 p-6">
                    {/* Tag + meta */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 text-gold/80 text-xs font-medium tracking-wider uppercase bg-gold/[0.08] px-2.5 py-1 rounded-md">
                        <post.icon className="w-3 h-3" />
                        {post.tag}
                      </span>
                      <div className="flex items-center gap-1.5 text-muted-foreground/50 text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-foreground font-heading font-semibold text-base leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground/50 text-xs tracking-wider uppercase">
                        {post.date}
                      </span>
                      <Link
                        to={`/devlog/${post.slug}`}
                        className="group/link text-gold text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1"
                      >
                        Read Article
                        <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
