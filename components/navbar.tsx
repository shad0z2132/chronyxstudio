import { ArrowUpRight, Menu, X, ExternalLink } from "lucide-react"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

/* ── Brand SVG icons ─────────────────────────────────────────────────────── */

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const navLinks = [
  { label: "Games", href: "#games" },
  { label: "Studio", href: "#about" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Technology", href: "#technology" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const lastScrollY = useRef(0)
  const scrollDirection = useRef<"up" | "down">("up")
  const lastDirectionChangeY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)

      // Determine scroll direction
      const direction = currentY > lastScrollY.current ? "down" : "up"

      // Track when direction changes
      if (direction !== scrollDirection.current) {
        scrollDirection.current = direction
        lastDirectionChangeY.current = currentY
      }

      // Only hide/show after scrolling 60px in one direction (prevents jitter)
      const delta = Math.abs(currentY - lastDirectionChangeY.current)
      if (currentY > 100 && delta > 60) {
        setHidden(direction === "down")
      } else if (currentY <= 100) {
        setHidden(false)
      }

      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      {/* Skip to content */}
      <a
        href="#games"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-gold focus:text-background focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter] duration-500 ${
          scrolled
            ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 lg:px-12 max-w-[1400px] mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/Silver 1.png"
                alt="Chronyx Studio logo"
                width={42}
                height={42}
                className="relative z-10 w-[42px] h-[42px] transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-foreground font-heading font-bold text-lg tracking-[0.15em] transition-colors duration-200 group-hover:text-gold">
                CHRONYX
              </span>
              <span className="text-gold text-[11px] font-semibold tracking-[0.3em] uppercase">
                Studios
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                  activeSection === link.href
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {/* Active indicator */}
                {activeSection === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold rounded-full"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Hover underline — slides in from left */}
                {activeSection !== link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-foreground/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                )}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Steam pill */}
            <a
              href="https://store.steampowered.com/app/4052670/Sands_Of_Avalon_Forge_Your_Legend/?beta=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-gold hover:bg-gold-light border border-gold/40 hover:border-gold px-4 py-2 rounded-lg text-background text-sm font-semibold tracking-wide uppercase transition-all duration-200 group"
            >
              <ExternalLink className="w-3 h-3" />
              Wishlist on Steam
            </a>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-2 border border-gold/40 hover:border-gold hover:bg-gold/5 px-5 py-2 rounded-lg text-gold text-sm font-semibold tracking-wide uppercase transition-all duration-200 group"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-foreground w-8 h-8 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 mobile-menu-backdrop" />

            <div className="relative z-10 flex flex-col justify-between h-full pt-24 pb-10 px-8">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ delay: i * 0.08 + 0.1, duration: 0.4 }}
                    className={`py-5 border-b border-white/[0.06] text-3xl font-heading font-bold tracking-wide transition-colors duration-200 ${
                      activeSection === link.href ? "text-gold" : "text-foreground hover:text-gold"
                    }`}
                    onClick={closeMobile}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="flex flex-col gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 border border-gold/40 hover:bg-gold/5 px-8 py-4 rounded-lg text-gold text-sm font-semibold tracking-wide uppercase transition-all duration-200 w-full"
                  onClick={closeMobile}
                >
                  Get in Touch
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {[
                      { label: "Discord", href: "https://discord.gg/y5rFa8vpHH", Icon: DiscordIcon },
                      { label: "Twitter / X", href: "https://x.com/ChronyxStudios", Icon: XIcon },
                      { label: "YouTube", href: "https://www.youtube.com/@mummylabs", Icon: YouTubeIcon },
                    ].map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-9 h-9 bg-white/[0.04] border border-white/[0.06] rounded-lg flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/20 hover:bg-gold/[0.06] transition-all duration-300"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                  <span className="text-muted-foreground/50 text-xs">&copy; 2026</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
