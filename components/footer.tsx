import { Youtube, Gamepad2 } from "lucide-react"
import { FadeIn } from "@/components/motion"
import { motion } from "framer-motion"

const footerLinks = {
  Games: [
    "Sands of Avalon",
    "Competitive FPS",
    "Game Updates",
    "Patch Notes",
    "Roadmap",
  ],
  Studio: [
    "About Chronyx",
    "Our Philosophy",
    "Careers",
    "Press Kit",
    "Brand Guidelines",
  ],
  Community: [
    "Discord Server",
    "Forums",
    "Player Support",
    "Bug Reports",
    "Feedback",
  ],
  Resources: [
    "Developer Blog",
    "Media Gallery",
    "API Documentation",
    "Partner Program",
    "Content Creators",
  ],
}

const socialLinks = [
  { icon: Gamepad2, label: "Discord", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            {/* Logo & Studio Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <a href="/" className="flex items-center gap-3 w-fit group">
                <img
                  src="/Untitled design (55)-Photoroom.webp"
                  alt="Chronyx Studio logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(212,168,83,0.4)]"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-foreground font-bold text-xl tracking-[0.15em] font-heading">
                    CHRONYX
                  </span>
                  <span className="text-gold/50 text-xs tracking-[0.3em] uppercase font-tactical">
                    Studio
                  </span>
                </div>
              </a>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-tactical">
                Building long-term IPs through deep progression systems, strong player identity, and competitive gameplay experiences.
              </p>

              {/* Genre badges */}
              <div className="flex items-center gap-2 mt-1">
                <span className="genre-badge genre-badge-arpg text-xs">ARPG</span>
                <span className="genre-badge genre-badge-fps text-xs">FPS</span>
                <span className="genre-badge genre-badge-studio text-xs">Multi-IP</span>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                <div>
                  <h4 className="text-gold text-sm font-bold tracking-wide uppercase mb-2 font-tactical">
                    Contact
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    E-mail<br />
                    <a
                      href="mailto:contact@chronyxstudio.com"
                      className="text-purple hover:text-gold hover:underline transition-colors duration-300"
                    >
                      contact@chronyxstudio.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 mt-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-gold text-sm font-bold tracking-wide uppercase mb-4 font-tactical">
                  {category}
                </h4>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground text-sm hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block font-tactical"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-tactical">
            &copy; 2026 Chronyx Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 font-tactical"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300 font-tactical"
            >
              Terms of Service
            </a>
            <motion.button
              onClick={scrollToTop}
              className="text-gold text-sm font-semibold tracking-wide hover:underline font-tactical"
              whileHover={{ y: -2 }}
            >
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
