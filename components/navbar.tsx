import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"

const navLinks = [
  { label: "Games", href: "#games", num: "01" },
  { label: "Studio", href: "#about", num: "02" },
  { label: "Vision", href: "#vision", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
]

const socialLinks = [
  { label: "Twitter/X", href: "#" },
  { label: "Discord", href: "#" },
  { label: "YouTube", href: "#" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <>
      {/* Skip to content */}
      <a
        href="#games"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-gold focus:text-background focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      >
        Skip to content
      </a>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "navbar-scrolled"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Scroll Progress Bar — gold → cyan → purple gradient */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold via-cyan to-purple z-50 origin-left"
          style={{ scaleX, opacity: scrolled ? 1 : 0 }}
        />

        <div className="flex items-center justify-between px-6 py-4 lg:px-12">
          {/* ─── Logo ──────────────────────────────────────────────────── */}
          <a href="/" className="flex items-center gap-3 group relative">
            {/* Logo glow effect — gold on scroll */}
            <div
              className={`absolute -inset-3 rounded-full transition-opacity duration-700 ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background: "radial-gradient(circle, rgba(212,168,83,0.1) 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
            <img
              src="/Untitled design (55)-Photoroom.webp"
              alt="Chronyx Studio logo"
              width={40}
              height={40}
              className="w-10 h-10 transition-all duration-500 group-hover:scale-110 relative z-10 group-hover:drop-shadow-[0_0_8px_rgba(212,168,83,0.5)]"
            />
            <div className="flex flex-col leading-tight relative z-10">
              <span className="text-foreground font-bold text-lg tracking-[0.15em] font-heading">
                CHRONYX
              </span>
              <span className="text-gold/50 text-xs tracking-[0.3em] uppercase font-tactical">
                Studio
              </span>
            </div>
          </a>

          {/* ─── Desktop Nav Links ─────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <div key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className={`nav-link group relative flex items-center gap-2 px-4 py-2 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300 font-tactical ${
                    activeSection === link.href
                      ? "text-gold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {/* Number prefix */}
                  <span
                    className={`font-mono text-xs transition-colors duration-300 ${
                      activeSection === link.href
                        ? "text-cyan"
                        : "text-muted-foreground/40 group-hover:text-gold/60"
                    }`}
                  >
                    {link.num}
                  </span>

                  <span className="relative">
                    {link.label}

                    {/* Active glow underline — gold */}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] bg-gold"
                      initial={false}
                      animate={{
                        width: activeSection === link.href ? "100%" : "0%",
                        boxShadow:
                          activeSection === link.href
                            ? "0 0 8px rgba(212,168,83,0.5), 0 0 16px rgba(212,168,83,0.2)"
                            : "none",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />

                    <span className="nav-link-underline" />
                  </span>
                </a>

                {/* Separator */}
                {i < navLinks.length - 1 && (
                  <span className="w-[3px] h-[3px] rounded-full bg-gold/15 mx-1 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* ─── Right Side ────────────────────────────────────────────── */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA — game button style */}
            <a
              href="#contact"
              className="nav-cta group hidden lg:flex relative items-center gap-2 bg-transparent border border-gold/40 px-6 py-2.5 text-gold text-sm font-bold tracking-[0.15em] uppercase transition-all duration-400 overflow-hidden font-tactical hover:border-gold hover:shadow-[0_0_20px_rgba(212,168,83,0.15)]"
            >
              <span className="nav-cta-shimmer" />
              <span className="relative z-10 flex items-center gap-2">
                GET IN TOUCH
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-gold/8 scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100 z-0" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-foreground relative w-8 h-8 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ─── Full-Screen Mobile Menu ──────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <div className="relative z-10 flex flex-col justify-between h-full pt-24 pb-10 px-8">
              {/* Navigation Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      delay: i * 0.08 + 0.15,
                      duration: 0.5,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className={`mobile-nav-link group flex items-center gap-5 py-5 border-b border-border/30 transition-colors duration-300 ${
                      activeSection === link.href
                        ? "text-gold"
                        : "text-foreground hover:text-gold"
                    }`}
                    onClick={closeMobile}
                  >
                    <span
                      className={`font-mono text-xs tracking-[0.3em] ${
                        activeSection === link.href
                          ? "text-cyan"
                          : "text-muted-foreground/40 group-hover:text-cyan/60"
                      } transition-colors duration-300`}
                    >
                      {link.num}
                    </span>

                    <span className="text-muted-foreground/20 text-lg font-thin">/</span>

                    <span className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-wider">
                      {link.label}
                    </span>

                    {activeSection === link.href && (
                      <motion.div
                        className="ml-auto w-2 h-2 rounded-full bg-gold"
                        layoutId="mobile-active"
                        style={{
                          boxShadow: "0 0 8px rgba(212,168,83,0.5)",
                        }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Bottom Section */}
              <motion.div
                className="flex flex-col gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a
                  href="#contact"
                  className="nav-cta group flex items-center justify-center gap-3 border border-gold/40 px-8 py-4 text-gold text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gold/10 hover:border-gold hover:shadow-[0_0_20px_rgba(212,168,83,0.15)] w-full font-tactical"
                  onClick={closeMobile}
                >
                  GET IN TOUCH
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="text-muted-foreground text-sm font-tactical tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                  <span className="text-muted-foreground/30 text-xs font-mono">
                    &copy; 2026
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decorative corner elements — HUD style */}
            <div className="absolute top-20 right-8 w-12 h-12 border-r border-t border-gold/10 pointer-events-none" />
            <div className="absolute bottom-20 left-8 w-12 h-12 border-l border-b border-purple/10 pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
