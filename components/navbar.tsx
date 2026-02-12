import { ArrowUpRight, Menu, X } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Games", href: "#games" },
  { label: "Studio", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
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
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-scrolled" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 lg:px-12 max-w-[1400px] mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/Untitled design (55)-Photoroom.webp"
              alt="Chronyx Studio logo"
              width={36}
              height={36}
              className="w-9 h-9 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-foreground font-heading font-bold text-base tracking-[0.1em]">
                CHRONYX
              </span>
              <span className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase">
                Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-px bg-gold"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
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
                  <div className="flex items-center gap-6">
                    {["Twitter/X", "Discord", "YouTube"].map((label) => (
                      <a
                        key={label}
                        href="#"
                        className="text-muted-foreground text-sm hover:text-gold transition-colors duration-200"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                  <span className="text-muted-foreground/30 text-xs">&copy; 2026</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
