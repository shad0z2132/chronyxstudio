import { ArrowUp } from "lucide-react"
import { FadeIn } from "@/components/motion"
import { motion } from "framer-motion"

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

const footerLinks = {
  Games: [
    { label: "Sands of Avalon", href: "https://store.steampowered.com/app/4052670/Sands_Of_Avalon_Forge_Your_Legend/?beta=1" },
    { label: "Competitive FPS", href: "#" },
    { label: "Game Updates", href: "#" },
    { label: "Patch Notes", href: "#" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  Studio: [
    { label: "About Chronyx", href: "#about" },
    { label: "Our Philosophy", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Brand Guidelines", href: "#" },
  ],
  Community: [
    { label: "Discord Server", href: "https://discord.gg/y5rFa8vpHH" },
    { label: "Forums", href: "#" },
    { label: "Player Support", href: "#" },
    { label: "Bug Reports", href: "#" },
    { label: "Feedback", href: "#" },
  ],
  Resources: [
    { label: "Developer Blog", href: "#" },
    { label: "Media Gallery", href: "#" },
    { label: "API Documentation", href: "#" },
    { label: "Partner Program", href: "#" },
    { label: "Content Creators", href: "#" },
  ],
}

const socialLinks = [
  { icon: DiscordIcon, label: "Discord", href: "https://discord.gg/y5rFa8vpHH" },
  { icon: XIcon, label: "Twitter / X", href: "https://x.com/ChronyxStudios" },
  { icon: YouTubeIcon, label: "YouTube", href: "https://www.youtube.com/@mummylabs" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#08080d] border-t border-white/[0.06] overflow-hidden mt-20">
      {/* ── Magic Accents / Ambient Flares ── */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[rgba(10,25,47,0.3)] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/5 rounded-[100%] blur-[120px] pointer-events-none" />

      {/* Large watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden mix-blend-screen">
        <img
          src="/Silver 1.png"
          alt=""
          className="w-[120vw] max-w-[1200px] object-contain object-center scale-150 transform-gpu"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* Grand Finale Call to Action */}
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center mb-24 relative">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white tracking-tight mb-6 drop-shadow-2xl">
              Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-amber-600">Legacy</span>
            </h2>
            <p className="text-muted-foreground/80 max-w-xl text-lg md:text-xl mb-10">
              Join our growing community. Be the first to play, test, and shape the future of our worlds.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="https://discord.gg/y5rFa8vpHH" 
                target="_blank" 
                rel="noreferrer"
                className="group relative px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-bold tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(88,101,242,0.4)] flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <DiscordIcon className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Join the Discord</span>
              </a>
              <a 
                href="https://store.steampowered.com/app/4052670/Sands_Of_Avalon_Forge_Your_Legend/?beta=1" 
                target="_blank" 
                rel="noreferrer"
                className="group relative px-8 py-4 bg-transparent border border-gold/40 hover:border-gold text-gold rounded-lg font-bold tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.2)] flex items-center gap-3 overflow-hidden bg-[#0f1115]"
              >
                <div className="absolute inset-0 bg-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Wishlist on Steam</span>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Footer Links & Info */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-16 pt-16 border-t border-white/[0.06]">
            {/* Logo & Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <a href="/" className="flex items-center gap-3 w-fit group">
                <img
                  src="/Silver 1.png"
                  alt="Chronyx Studio logo"
                  width={56}
                  height={56}
                  className="w-14 h-14 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(212,168,83,0.3)]"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-foreground font-heading font-bold text-2xl tracking-[0.15em] drop-shadow-md">
                    CHRONYX
                  </span>
                  <span className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase">
                    Studios
                  </span>
                </div>
              </a>

              <p className="text-muted-foreground/70 text-sm leading-relaxed max-w-sm">
                Building long-term IPs through deep progression systems, strong player identity,
                and competitive gameplay experiences. We don't just make games, we forge worlds.
              </p>

              <div>
                <a
                  href="mailto:contact@chronyxstudio.com"
                  className="text-gold hover:text-white transition-colors duration-300 font-semibold tracking-wide text-sm"
                >
                  contact@chronyxstudio.com
                </a>
              </div>

              {/* Social */}
              <div className="flex items-center gap-4 mt-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0f1115] border border-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-xl flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,168,83,0.15)] transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
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
                <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 drop-shadow-md">
                  {category}
                </h4>
                <ul className="flex flex-col gap-3.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-2 text-muted-foreground/60 text-sm hover:text-gold transition-colors duration-300"
                      >
                        <span className="w-1.5 h-px bg-gold/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        {link.label}
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
      <div className="relative z-10 bg-black/40 border-t border-white/[0.04] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/40 text-xs font-medium tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Chronyx Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-muted-foreground/40 text-xs font-medium tracking-wider uppercase hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground/40 text-xs font-medium tracking-wider uppercase hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
            <motion.button
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 bg-[#0f1115] border border-gold/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] rounded-xl flex items-center justify-center text-gold hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,168,83,0.2)] transition-all duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
