import { Instagram, Youtube, Linkedin, Facebook } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const footerLinks = {
  "Game Art": [
    "3D Art",
    "3D Characters Design",
    "AAA",
    "Concept Art",
    "Slots Game Art",
    "2D Art",
    "UI/UX Design",
  ],
  "Game Development": [
    "Unity Development",
    "Unreal Game Development",
    "PC Game Development",
    "Mobile Game Development",
    "Hyper Casual Game Development",
    "Android Game Development",
    "iOS Game Development",
    "3D Game Development",
    "Game Testing",
    "Game Porting",
  ],
  Animation: ["2D Animation", "3D Animation", "VFX"],
  Outstaffing: [
    "Hire Game Developers",
    "Hire Unity Developers",
    "Hire Unreal Developers",
    "Hire 3D Artists",
    "Hire Game Designers",
    "Hire Character Designers",
    "Hire Concept Artists",
    "Hire 2D Artists",
    "Hire 2D Animators",
    "Hire 3D Animators",
  ],
}

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            {/* Logo & Address */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <a href="/" className="flex items-center gap-3 w-fit group">
                <img
                  src="/Untitled design (55)-Photoroom.webp"
                  alt="Chronyx Studio logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-foreground font-bold text-xl tracking-wider font-display">CHRONYX</span>
                  <span className="text-muted-foreground text-[10px] tracking-[0.3em] uppercase">Studio</span>
                </div>
              </a>

              <div className="flex flex-col gap-5 mt-2">
                <div>
                  <h4 className="text-foreground text-sm font-semibold mb-2">Address</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    al. Jana Pawla II 61, lok.241, biuro 1.7,<br />
                    Warsaw, 01-031, Poland<br />
                    Phone: +48 22 419 38 000
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    8 The Green, STE R, Dover,<br />
                    Delaware, 19901, USA<br />
                    Phone: +1-424-413-5692
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    95 3rd Street, 2nd Floor,<br />
                    San Francisco, CA 94103, USA
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <h4 className="text-foreground text-sm font-semibold mb-2">Contact</h4>
                <p className="text-muted-foreground text-xs">
                  E-mail<br />
                  <a href="mailto:contact@chronyxstudio.com" className="text-cyan hover:underline">
                    contact@chronyxstudio.com
                  </a>
                </p>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 mt-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-cyan transition-colors duration-300"
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
                <h4 className="text-cyan text-xs font-bold tracking-wide uppercase mb-4 font-display">{category}</h4>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground text-xs hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block"
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
          <p className="text-muted-foreground text-xs">
            &copy; 2026 Chronyx Studio
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors duration-300">
              Sitemap
            </a>
            <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors duration-300">
              Terms And Conditions
            </a>
            <motion.button
              onClick={scrollToTop}
              className="text-cyan text-xs font-semibold tracking-wide hover:underline"
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
