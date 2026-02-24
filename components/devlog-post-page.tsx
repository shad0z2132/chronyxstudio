import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowLeft, ArrowUpRight, Clock, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { Footer } from "@/components/footer"
import { getPostBySlug, getRecentPosts, type DevlogContent } from "@/lib/devlog-data"

// ─── Content Renderer ─────────────────────────────────────────────────────────
function ContentBlock({ block }: { block: DevlogContent }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
          {block.text}
        </p>
      )

    case "heading":
      return (
        <h2 className="text-foreground font-heading font-bold text-xl lg:text-2xl mt-2">
          {block.text}
        </h2>
      )

    case "list":
      return (
        <ul className="flex flex-col gap-2.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )

    case "quote":
      return (
        <blockquote className="relative border-l-2 border-gold/50 pl-6 py-1">
          <p className="text-foreground/80 text-lg italic leading-relaxed mb-2">
            "{block.text}"
          </p>
          {block.author && (
            <cite className="text-muted-foreground/50 text-sm not-italic">
              — {block.author}
            </cite>
          )}
        </blockquote>
      )

    default:
      return null
  }
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export function DevlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  // 404 redirect for unknown slugs
  if (!post) {
    return <Navigate to="/devlog" replace />
  }

  const Icon = post.icon
  const relatedPosts = getRecentPosts(3, post.slug)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Ambient background ── */}
      <div
        className="fixed pointer-events-none"
        style={{
          top: "0",
          left: "50%",
          transform: "translateX(-50%) translateZ(0)",
          width: "900px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(212,168,83,0.05) 0%, rgba(212,168,83,0) 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      {/* ── Header ── */}
      <div className="relative z-10 pt-28 pb-12">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Back links */}
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <Link
                to="/devlog"
                className="group inline-flex items-center gap-2 text-muted-foreground/60 hover:text-gold text-sm font-medium transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                All Posts
              </Link>
              <span className="text-muted-foreground/20">·</span>
              <Link
                to="/"
                className="text-muted-foreground/40 hover:text-gold text-sm font-medium transition-colors duration-200"
              >
                Chronyx Studio
              </Link>
            </div>
          </FadeIn>

          {/* Meta */}
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 flex-wrap mb-6">
              <span className="inline-flex items-center gap-1.5 text-gold/80 text-xs font-semibold tracking-wider uppercase bg-gold/[0.08] px-3 py-1.5 rounded-md">
                <Icon className="w-3 h-3" />
                {post.tag}
              </span>
              <span className="text-muted-foreground/40 text-xs tracking-wider uppercase">
                {post.date}
              </span>
              <div className="flex items-center gap-1.5 text-muted-foreground/40 text-xs">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={0.15}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight mb-6">
              {post.title}
            </h1>
          </FadeIn>

          {/* Excerpt */}
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground/70 text-lg leading-relaxed border-b border-white/[0.06] pb-8">
              {post.excerpt}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── Article Body ── */}
      <motion.article
        className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="flex flex-col gap-7">
          {post.content.map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>

        {/* ── Author / Studio card ── */}
        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm">Chronyx Studio</p>
              <p className="text-muted-foreground/50 text-xs mt-0.5">
                We build long-term IPs through deep progression and competitive integrity.
              </p>
            </div>
            <Link
              to="/"
              className="ml-auto group text-gold text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1 shrink-0"
            >
              Visit Studio
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </motion.article>

      {/* ── Related Posts ── */}
      {relatedPosts.length > 0 && (
        <div className="relative z-10 border-t border-white/[0.06] bg-[#0a0a0f]/60">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
            <FadeIn>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-xl font-heading font-bold text-foreground">
                  More from the Workshop
                </h2>
                <Link
                  to="/devlog"
                  className="group text-gold text-sm font-semibold tracking-wide hover:underline inline-flex items-center gap-1"
                >
                  View All
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.1}>
              {relatedPosts.map((related) => {
                const RelatedIcon = related.icon
                return (
                  <StaggerItem key={related.slug}>
                    <motion.article
                      className="group relative bg-[#0f1115] border border-white/[0.05] rounded-xl overflow-hidden hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,168,83,0.08)] transition-all duration-500 h-full flex flex-col"
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent group-hover:via-gold/50 transition-all duration-500" />
                      <div className="relative z-10 p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 text-gold/80 text-[10px] font-semibold tracking-wider uppercase bg-gold/[0.08] px-2.5 py-1 rounded-md">
                            <RelatedIcon className="w-3 h-3" />
                            {related.tag}
                          </span>
                        </div>
                        <h3 className="text-foreground font-heading font-semibold text-sm leading-snug mb-2 group-hover:text-gold transition-colors duration-300 flex-1">
                          {related.title}
                        </h3>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-muted-foreground/40 text-[11px] tracking-wider uppercase">
                            {related.date}
                          </span>
                          <Link
                            to={`/devlog/${related.slug}`}
                            className="group/link text-gold text-xs font-semibold tracking-wide hover:underline inline-flex items-center gap-1"
                          >
                            Read
                            <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
