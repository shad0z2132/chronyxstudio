"use client"

import { Send, MessageSquare, Shield, Youtube, Gamepad2, Mail } from "lucide-react"
import { useState } from "react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const communityLinks = [
  { icon: Gamepad2, label: "Discord", description: "Join the community", href: "#" },
  { icon: MessageSquare, label: "Twitter / X", description: "Follow development updates", href: "#" },
  { icon: Youtube, label: "YouTube", description: "Watch dev logs & trailers", href: "#" },
]

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
    <section id="contact" className="relative py-24 lg:py-36 overflow-hidden ambient-glow-gold">
      {/* ── Golden flare orbs ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          right: "10%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.10) 0%, rgba(212,168,83,0) 70%)",
          animation: "flare-breathe 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "15%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,168,83,0.07) 0%, rgba(212,168,83,0) 65%)",
          animation: "flare-breathe-slow 10s ease-in-out infinite",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                  Join the Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight">
                Be Part of
                <br />
                <span className="text-gold">Something Legendary</span>
              </h2>

              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                Whether you're a player waiting for our first release, a creator interested
                in collaboration, or a developer who shares our vision — we want to hear from you.
              </p>

              {/* Promise card */}
              <motion.div
                className="relative bg-card border border-white/[0.06] rounded-xl p-8 group hover:border-white/[0.1] transition-all duration-500 overflow-hidden"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-gold" />
                    <span className="text-gold text-sm font-heading font-semibold tracking-wide uppercase">
                      Our Promise
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    No pay-to-win. No predatory monetization. No shortcuts to progression.
                    Every game we build respects your time and rewards your commitment.
                  </p>
                </div>
              </motion.div>

              {/* Direct contact */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-gold/60" />
                <a href="mailto:contact@chronyxstudio.com" className="text-sm hover:text-gold transition-colors duration-200">
                  contact@chronyxstudio.com
                </a>
              </div>

              {/* Community links */}
              <StaggerContainer className="flex flex-col gap-3 mt-2" staggerDelay={0.08}>
                {communityLinks.map((link) => (
                  <StaggerItem key={link.label}>
                    <a href={link.href} className="flex items-center gap-4 group/link cursor-pointer">
                      <div className="w-11 h-11 bg-gold/[0.06] border border-white/[0.06] rounded-lg flex items-center justify-center group-hover/link:bg-gold/[0.1] group-hover/link:border-gold/15 transition-all duration-300">
                        <link.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="text-foreground text-sm font-semibold group-hover/link:text-gold transition-colors duration-200">
                          {link.label}
                        </div>
                        <div className="text-muted-foreground/60 text-xs">{link.description}</div>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-card border border-white/[0.06] rounded-xl p-8 lg:p-10">
              <h3 className="text-foreground font-heading font-bold text-lg mb-1">Get in Touch</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Interested in Chronyx? Drop us a message.
              </p>

              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted border border-white/[0.06] rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-muted border border-white/[0.06] rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    I am a...
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="bg-muted border border-white/[0.06] rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-200 appearance-none"
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
                  <label htmlFor="message" className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-muted border border-white/[0.06] rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all duration-200 resize-none"
                    placeholder="Tell us what you're interested in..."
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  <motion.button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-background px-6 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send Message
                  </motion.button>
                  <motion.button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 border border-white/[0.1] hover:border-gold/30 text-foreground hover:text-gold px-6 py-3 rounded-lg font-semibold text-sm tracking-wide uppercase transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Gamepad2 className="w-3.5 h-3.5" />
                    Join Discord
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
