import { Shield, Swords, Trophy, Users, Gamepad2, Target } from "lucide-react"
import { FadeIn, Counter } from "@/components/motion"
import { motion } from "framer-motion"

const highlights = [
  { icon: Gamepad2, label: "Original IPs", value: 2 },
  { icon: Users, label: "Team Members", value: 15, suffix: "+" },
  { icon: Target, label: "Years Building", value: 3 },
]

const principles = [
  {
    icon: Shield,
    title: "Player-First Design",
    description: "No pay-to-win mechanics, ever. We respect your time and investment.",
  },
  {
    icon: Swords,
    title: "Deep Progression",
    description: "Meaningful rewards earned through genuine gameplay and skill.",
  },
  {
    icon: Trophy,
    title: "Competitive Integrity",
    description: "A fair, balanced foundation for both PvE and PvP ecosystems.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-36 bg-[#0a0a0f] overflow-hidden">
      {/* 5. Seamless Background Lighting */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Ambient Glows using top/bottom or radial gradients (No side-to-side large fades) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(212,168,83,0.05)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_left,rgba(212,168,83,0.03)_0%,transparent_60%)] pointer-events-none" />

      {/* 3. Editorial Typography & Watermarks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden pointer-events-none flex justify-center z-0 opacity-[0.02]">
        <span className="text-[15vw] font-heading font-black whitespace-nowrap text-white select-none">
          CONVICTION
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column — 1. Cinematic Image Framing ("The Intel Window") */}
          <FadeIn>
            <div className="relative">
              {/* The "Intel Window" Glassmorphic Container */}
              <div className="relative p-2 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <div className="relative rounded-xl overflow-hidden bg-black group">
                  <img
                    src="/new medieval/HighresScreenshot00035 (1).webp"
                    alt="Chronyx Studio — in-engine screenshot"
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-[3s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                  {/* Vertical fade to avoid harsh edges, top-to-bottom only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80" />
                  
                  {/* Subtle scanline overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay" />

                  {/* Built in UE5 Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <img
                      src="/unreal-engine-xwo7bd8vu6fzpnkcifgtu.webp"
                      alt="Unreal Engine"
                      className="w-4 h-4 rounded-full object-cover invert"
                    />
                    <span className="text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase">
                      Unreal Engine 5
                    </span>
                  </div>
                </div>
              </div>

              {/* 4. Floating Glassmorphic Stat Bar */}
              <motion.div
                className="absolute -bottom-8 -right-8 lg:-right-12 hidden md:flex items-center gap-8 bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                {highlights.map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    {i > 0 && <div className="w-px h-8 bg-white/10" />}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                        <stat.icon className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <Counter
                          target={stat.value}
                          suffix={stat.suffix ?? ""}
                          className="text-white font-heading font-bold text-2xl drop-shadow-md"
                        />
                        <span className="text-white/50 text-[10px] font-bold tracking-widest uppercase block mt-1">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </FadeIn>

          {/* Right Column — Text Content & Interactive Cards */}
          <div className="lg:pl-8 flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold/50" />
                <span className="text-gold/80 text-xs font-bold tracking-[0.3em] uppercase">
                  Studio Identity
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
                Forged By <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold to-amber-700">Conviction</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-6 text-white/70 text-base md:text-lg leading-relaxed mb-10">
                <p>
                  Chronyx Studio is an independent game development studio focused on building
                  long-term intellectual properties. We believe the best games are the ones
                  that respect players' time and reward genuine skill.
                </p>
                <p className="text-sm md:text-base opacity-80">
                  Our team brings experience from competitive gaming, systems design, and
                  world-building — united by a shared frustration with predatory monetization
                  and shallow progression loops. We're here to build something different.
                </p>
              </div>
            </FadeIn>

            {/* 2. Interactive Mini-Cards for Studio Principles */}
            <FadeIn delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 md:mb-0">
                {principles.map((principle, idx) => (
                  <div 
                    key={principle.title} 
                    className={`group relative p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300 ${idx === 2 ? 'sm:col-span-2' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                    <principle.icon className="w-5 h-5 text-gold/60 mb-3 group-hover:text-gold transition-colors duration-300" />
                    <h4 className="text-white text-sm font-bold tracking-wide mb-1.5 group-hover:text-gold/90 transition-colors">
                      {principle.title}
                    </h4>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Mobile Stat Bar (since the floating one is hidden on md down) */}
            <FadeIn delay={0.5}>
              <div className="flex md:hidden flex-col gap-4 mt-8 pt-8 border-t border-white/10">
                {highlights.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                        <stat.icon className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">
                        {stat.label}
                      </span>
                    </div>
                    <Counter
                      target={stat.value}
                      suffix={stat.suffix ?? ""}
                      className="text-white font-heading font-bold text-xl"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  )
}
