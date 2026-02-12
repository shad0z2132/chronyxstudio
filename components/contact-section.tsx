"use client"

import { Send, MessageSquare, Swords, Crosshair, Shield } from "lucide-react"
import { useState } from "react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const communityLinks = [
  {
    icon: MessageSquare,
    label: "Discord",
    description: "Join the community",
    href: "#",
    accent: "purple",
  },
  {
    icon: Crosshair,
    label: "Twitter / X",
    description: "Follow development updates",
    href: "#",
    accent: "steel",
  },
  {
    icon: Swords,
    label: "YouTube",
    description: "Watch dev logs & trailers",
    href: "#",
    accent: "gold",
  },
]

const accentMap = {
  gold: { text: "text-gold", bg: "bg-gold/10", border: "border-gold/20", hoverBg: "group-hover:bg-gold/10" },
  steel: { text: "text-steel", bg: "bg-steel/10", border: "border-steel/20", hoverBg: "group-hover:bg-steel/10" },
  purple: { text: "text-purple", bg: "bg-purple/10", border: "border-purple/20", hoverBg: "group-hover:bg-purple/10" },
} as const

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background texture — neutral */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Vision statement + community */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="status-dot status-dot-gold" />
                <span className="text-sm font-mono tracking-[0.3em] text-gold/50 uppercase">
                  Join the Mission
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-gold/30 to-transparent" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] text-balance font-heading tracking-tight">
                BE PART OF
                <br />
                <span className="hero-text-gradient">SOMETHING LEGENDARY</span>
              </h2>

              <p className="text-muted-foreground text-base leading-[1.85] max-w-md font-tactical mt-2">
                Whether you're a player waiting for our first release, a creator interested in collaboration, or a developer who shares our vision — we want to hear from you. Chronyx is built by people who believe games can be better.
              </p>

              {/* Vision card */}
              <motion.div
                className="hud-corners bg-card border border-gold/20 p-8 mt-2 group hover:border-gold/40 transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-gold" />
                  <span className="text-gold text-sm font-bold tracking-[0.15em] uppercase font-heading">Our Promise</span>
                </div>
                <p className="text-muted-foreground text-base leading-[1.85] font-tactical">
                  No pay-to-win. No predatory monetization. No shortcuts to progression. Every game we build respects your time and rewards your commitment. That's not a marketing line — it's the foundation of everything we do.
                </p>
              </motion.div>

              {/* Community links */}
              <StaggerContainer className="flex flex-col gap-4 mt-4" staggerDelay={0.1}>
                {communityLinks.map((link) => {
                  const a = accentMap[link.accent as keyof typeof accentMap]
                  return (
                    <StaggerItem key={link.label}>
                      <a href={link.href} className="flex items-center gap-4 group cursor-pointer">
                        <div className={`w-12 h-12 ${a.bg} border ${a.border} flex items-center justify-center ${a.hoverBg} transition-colors duration-300`}>
                          <link.icon className={`w-5 h-5 ${a.text}`} />
                        </div>
                        <div>
                          <div className={`text-foreground text-sm font-semibold font-heading group-hover:${a.text} transition-colors duration-300`}>{link.label}</div>
                          <div className="text-muted-foreground text-sm font-tactical">{link.description}</div>
                        </div>
                      </a>
                    </StaggerItem>
                  )
                })}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Right: Contact form */}
          <FadeIn direction="right" delay={0.2}>
            <div className="hud-corners bg-card border border-border p-8 lg:p-10">
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              <h3 className="text-foreground text-lg font-bold mb-2 font-heading">GET IN TOUCH</h3>
              <p className="text-muted-foreground text-sm font-tactical mb-6">Interested in Chronyx? Drop us a message.</p>

              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-muted-foreground text-sm font-bold tracking-[0.15em] uppercase font-tactical">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted border border-border px-4 py-3 text-foreground text-sm font-tactical placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold focus:shadow-[0_0_0_1px_hsl(42,65%,55%,0.3)] transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-muted-foreground text-sm font-bold tracking-[0.15em] uppercase font-tactical">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-muted border border-border px-4 py-3 text-foreground text-sm font-tactical placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold focus:shadow-[0_0_0_1px_hsl(42,65%,55%,0.3)] transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="text-muted-foreground text-sm font-bold tracking-[0.15em] uppercase font-tactical">
                    I am a...
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="bg-muted border border-border px-4 py-3 text-foreground text-sm font-tactical focus:outline-none focus:border-gold focus:shadow-[0_0_0_1px_hsl(42,65%,55%,0.3)] transition-all duration-300 appearance-none"
                  >
                    <option value="">Select one...</option>
                    <option value="player">Player / Community Member</option>
                    <option value="developer">Developer / Engineer</option>
                    <option value="artist">Artist / Designer</option>
                    <option value="creator">Content Creator / Streamer</option>
                    <option value="business">Business / Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-muted-foreground text-sm font-bold tracking-[0.15em] uppercase font-tactical">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-muted border border-border px-4 py-3 text-foreground text-sm font-tactical placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold focus:shadow-[0_0_0_1px_hsl(42,65%,55%,0.3)] transition-all duration-300 resize-none"
                    placeholder="Tell us what you're interested in..."
                  />
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  <motion.button
                    type="submit"
                    className="game-btn game-btn-primary flex items-center justify-center gap-2 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-3.5 h-3.5" />
                    SEND MESSAGE
                  </motion.button>
                  <motion.button
                    type="button"
                    className="game-btn game-btn-secondary flex items-center justify-center gap-2 text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    JOIN DISCORD
                  </motion.button>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
