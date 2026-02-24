import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight, Clock, ArrowLeft, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { Footer } from "@/components/footer"
import { devlogPosts, ALL_TAGS, type DevlogTag } from "@/lib/devlog-data"

// ─── Tag Pill ─────────────────────────────────────────────────────────────────
function TagPill({
  tag,
  active,
  onClick,
}: {
  tag: DevlogTag | "All"
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 border ${
        active
          ? "bg-gold text-background border-gold shadow-[0_0_15px_rgba(212,168,83,0.3)]"
          : "border-white/10 text-muted-foreground hover:border-gold/30 hover:text-gold bg-white/[0.02]"
      }`}
    >
      {tag}
    </button>
  )
}

// ─── Post Card ────────────────────────────────────────────────────────────────
function PostCard({ post, featured = false }: { post: (typeof devlogPosts)[0]; featured?: boolean }) {
  const Icon = post.icon

  if (featured) {
    return (
      <motion.article
        className="group relative bg-[#0f1115] border border-white/[0.05] rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-[0_0_40px_rgba(212,168,83,0.08)] transition-all duration-500"
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Top accent */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/60 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-5">
          {/* Tag row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-gold/80 text-xs font-semibold tracking-wider uppercase bg-gold/[0.08] px-3 py-1.5 rounded-md">
              <Icon className="w-3 h-3" />
              {post.tag}
            </span>
            <span className="text-muted-foreground/40 text-xs tracking-wider uppercase">
              {post.date}
            </span>
            <div className="flex items-center gap-1.5 text-muted-foreground/40 text-xs ml-auto">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </div>
          </div>

          {/* Featured label */}
          <div className="inline-flex items-center gap-2 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_8px_rgba(212,168,83,0.8)]" />
            <span className="text-gold/60 text-[10px] font-bold tracking-[0.2em] uppercase">
              Latest Post
            </span>
          </div>

          <h2 className="text-foreground font-heading font-bold text-2xl lg:text-3xl leading-snug group-hover:text-gold transition-colors duration-300">
            {post.title}
          </h2>

          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>

          <Link
            to={`/devlog/${post.slug}`}
            className="group/link text-gold text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1 w-fit mt-2"
          >
            Read Article
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      className="group relative bg-[#0f1115] border border-white/[0.05] rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,168,83,0.08)] transition-all duration-500 flex flex-col"
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/50 transition-all duration-500" />

      <div className="relative z-10 p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-gold/80 text-xs font-semibold tracking-wider uppercase bg-gold/[0.08] px-2.5 py-1 rounded-md">
            <Icon className="w-3 h-3" />
            {post.tag}
          </span>
          <div className="flex items-center gap-1.5 text-muted-foreground/40 text-xs ml-auto">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>

        <h3 className="text-foreground font-heading font-semibold text-base leading-snug mb-3 group-hover:text-gold transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-muted-foreground/40 text-xs tracking-wider uppercase">
            {post.date}
          </span>
          <Link
            to={`/devlog/${post.slug}`}
            className="group/link text-gold text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1"
          >
            Read
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function DevlogPage() {
  const [activeTag, setActiveTag] = useState<DevlogTag | "All">("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = devlogPosts.filter((post) => {
    const matchesTag = activeTag === "All" || post.tag === activeTag
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      !q ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tag.toLowerCase().includes(q)
    return matchesTag && matchesSearch
  })

  const [featuredPost, ...restPosts] = filteredPosts

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Page Header ── */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        {/* Ambient background flares */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%) translateZ(0)",
            width: "800px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(212,168,83,0.07) 0%, rgba(212,168,83,0) 70%)",
            filter: "blur(40px)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back link */}
          <FadeIn>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-muted-foreground/60 hover:text-gold text-sm font-medium transition-colors duration-200 mb-10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back to Chronyx Studio
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Dev Log
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight tracking-tight mb-4">
              From the <span className="text-gold">Workshop</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Behind-the-scenes updates on what we're building, the decisions we're making, and why.
            </p>
          </FadeIn>

          {/* Search + Filter Row */}
          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              {/* Search */}
              <div className="relative w-full sm:w-72 shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0f1115] border border-white/[0.07] rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-200"
                />
              </div>

              {/* Tag pills — horizontally scrollable on mobile */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none w-full sm:flex-wrap sm:overflow-visible sm:pb-0">
                <TagPill
                  tag="All"
                  active={activeTag === "All"}
                  onClick={() => setActiveTag("All")}
                />
                {ALL_TAGS.map((tag) => (
                  <TagPill
                    key={tag}
                    tag={tag}
                    active={activeTag === tag}
                    onClick={() => setActiveTag(tag)}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Posts Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <AnimatePresence mode="wait">
          {filteredPosts.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-32 text-center"
            >
              <p className="text-muted-foreground/50 text-lg mb-2">No posts found</p>
              <p className="text-muted-foreground/30 text-sm">
                Try a different tag or clear your search.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured post */}
              {featuredPost && (
                <FadeIn className="mb-8">
                  <PostCard post={featuredPost} featured />
                </FadeIn>
              )}

              {/* Rest of posts */}
              {restPosts.length > 0 && (
                <StaggerContainer
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                  staggerDelay={0.08}
                >
                  {restPosts.map((post) => (
                    <StaggerItem key={post.slug}>
                      <PostCard post={post} />
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  )
}
