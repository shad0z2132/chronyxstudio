"use client"

import { Star, Send, Phone, MessageSquare } from "lucide-react"
import { useState } from "react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Edge glow */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Featured testimonial */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-10 bg-cyan" />
                <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase">Get in Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance font-display">
                LET{"'"}S BUILD YOUR GAME TOGETHER
              </h2>

              <motion.div
                className="bg-background border border-border p-8 mt-4 group hover:border-cyan/20 transition-colors duration-300"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan text-cyan" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {`"Chronyx Studio has been an incredible partner for our team. Their attention to detail, creative problem-solving, and ability to deliver on tight deadlines has made them our go-to studio for game art and animation. I highly recommend them to anyone looking for a reliable development partner."`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm font-bold">SL</span>
                  </div>
                  <div>
                    <div className="text-foreground text-sm font-semibold">Sarah Lancaster</div>
                    <div className="text-muted-foreground text-xs">VP of Business Development, MajorStudio</div>
                  </div>
                </div>
              </motion.div>

              <StaggerContainer className="flex flex-col gap-4 mt-4" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="flex items-center gap-4 group cursor-default">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center group-hover:bg-cyan/10 transition-colors duration-300">
                      <Phone className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">Phone</div>
                      <div className="text-foreground text-sm">+1-424-413-5692</div>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex items-center gap-4 group cursor-default">
                    <div className="w-12 h-12 bg-muted flex items-center justify-center group-hover:bg-cyan/10 transition-colors duration-300">
                      <MessageSquare className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">Email</div>
                      <div className="text-foreground text-sm">contact@chronyxstudio.com</div>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Right: Contact form */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-card border border-border p-8 lg:p-10 card-glow-border">
              <h3 className="text-foreground text-lg font-bold mb-6 font-display">Send us a message</h3>
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      className="bg-muted border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan focus:shadow-[0_0_0_1px_hsl(174,100%,50%,0.3)] transition-all duration-300"
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
                      className="bg-muted border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan focus:shadow-[0_0_0_1px_hsl(174,100%,50%,0.3)] transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-muted border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan focus:shadow-[0_0_0_1px_hsl(174,100%,50%,0.3)] transition-all duration-300"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-muted border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan focus:shadow-[0_0_0_1px_hsl(174,100%,50%,0.3)] transition-all duration-300"
                      placeholder="Company name"
                    />
                  </div>
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
                    className="bg-muted border border-border px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan focus:shadow-[0_0_0_1px_hsl(174,100%,50%,0.3)] transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                  <motion.button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-cyan text-background px-5 py-3 text-xs font-bold tracking-wide hover:bg-cyan-dark transition-colors duration-300 hover:shadow-lg hover:shadow-cyan/20"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-3.5 h-3.5" />
                    SEND FORM
                  </motion.button>
                  <motion.button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-muted text-foreground px-5 py-3 text-xs font-bold tracking-wide hover:bg-border transition-colors duration-300 border border-border"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    GET AI CALL
                  </motion.button>
                  <motion.button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-muted text-foreground px-5 py-3 text-xs font-bold tracking-wide hover:bg-border transition-colors duration-300 border border-border"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    CHAT WITH AI
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
