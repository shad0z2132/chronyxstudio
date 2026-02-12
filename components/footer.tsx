import { Youtube, Gamepad2, ArrowUp, MessageSquare } from "lucide-react"
import { FadeIn } from "@/components/motion"
import { motion } from "framer-motion"

const footerLinks = {
  Games: ["Sands of Avalon", "Competitive FPS", "Game Updates", "Patch Notes", "Roadmap"],
  Studio: ["About Chronyx", "Our Philosophy", "Careers", "Press Kit", "Brand Guidelines"],
  Community: ["Discord Server", "Forums", "Player Support", "Bug Reports", "Feedback"],
  Resources: ["Developer Blog", "Media Gallery", "API Documentation", "Partner Program", "Content Creators"],
}

const socialLinks = [
  { icon: Gamepad2, label: "Discord", href: "#" },
  { icon: MessageSquare, label: "Twitter / X", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#08080d] border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            {/* Logo & Info */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <a href="/" className="flex items-center gap-3 w-fit group">
                <img
                  src="/Untitled design (55)-Photoroom.webp"
                  alt="Chronyx Studio logo"
                  width={44}
                  height={44}
                  className="w-11 h-11 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-foreground font-heading font-bold text-lg tracking-[0.1em]">
                    CHRONYX
                  </span>
                  <span className="text-muted-foreground/50 text-[10px] tracking-[0.2em] uppercase">
                    Studio
                  </span>
                </div>
              </a>

              <p className="text-muted-foreground/70 text-sm leading-relaxed max-w-xs">
                Building long-term IPs through deep progression systems, strong player identity,
                and competitive gameplay experiences.
              </p>

              <div>
                <h4 className="text-gold/60 text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                  Contact
                </h4>
                <a
                  href="mailto:contact@chronyxstudio.com"
                  className="text-muted-foreground text-sm hover:text-gold transition-colors duration-200"
                >
                  contact@chronyxstudio.com
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 bg-white/[0.04] border border-white/[0.06] rounded-lg flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/20 hover:bg-gold/[0.06] transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-gold/60 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
                  {category}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground/60 text-sm hover:text-foreground transition-colors duration-200"
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
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/50 text-sm">
            &copy; 2026 Chronyx Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground/50 text-sm hover:text-foreground transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground/50 text-sm hover:text-foreground transition-colors duration-200">
              Terms of Service
            </a>
            <motion.button
              onClick={scrollToTop}
              className="w-8 h-8 bg-gold/[0.08] border border-gold/15 rounded-lg flex items-center justify-center text-gold hover:bg-gold/[0.15] transition-all duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
