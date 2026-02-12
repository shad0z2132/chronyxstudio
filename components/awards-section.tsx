import { Globe, Trophy, Award, Star } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, Counter } from "@/components/motion"
import { motion } from "framer-motion"

const clientRegions = [
  "North America",
  "Europe",
  "Asia Pacific",
  "Middle East",
  "South America",
]

const awards = [
  { icon: Trophy, label: "Epic Games Service Partner" },
  { icon: Award, label: "Clutch Top B2B Company" },
  { icon: Star, label: "GoodFirms Top Game Developer" },
  { icon: Globe, label: "Clients in 20+ Countries" },
]

const stats = [
  { target: 300, suffix: "+", label: "Team Members" },
  { target: 13, suffix: "+", label: "Years Experience" },
  { target: 200, suffix: "+", label: "Projects Delivered" },
]

export function AwardsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Edge glow */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      {/* Top neon divider */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <FadeIn direction="left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-cyan" />
                <span className="text-cyan text-xs font-mono tracking-[0.3em] uppercase">Recognition</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-6 font-display">
                OUR AWARDS & RECOGNITION
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Our dedication to excellence has earned us global recognition and numerous industry awards. The company{"'"}s achievements highlight the team{"'"}s commitment to quality and innovation, gaining the trust of top-tier clients worldwide.
              </p>
            </FadeIn>

            {/* Awards badges */}
            <StaggerContainer className="grid grid-cols-2 gap-4 mt-10" staggerDelay={0.1}>
              {awards.map((award) => (
                <StaggerItem key={award.label}>
                  <motion.div
                    className="group flex items-center gap-3 bg-card border border-border p-4 card-glow-border transition-colors duration-300 hover:border-cyan/20"
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-cyan/10 border border-cyan/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <award.icon className="w-5 h-5 text-cyan" strokeWidth={1.5} />
                    </div>
                    <span className="text-foreground text-xs font-semibold">{award.label}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right: Client regions */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              <span className="text-pink text-xs font-mono tracking-[0.3em] uppercase">OUR <span className="font-bold text-foreground">CLIENTS</span> FROM:</span>

              {/* World map placeholder */}
              <div className="relative bg-card border border-border p-8 mt-6 overflow-hidden">
                {/* Dot pattern inside */}
                <div className="absolute inset-0 dot-pattern" />
                <div className="absolute inset-0 opacity-[0.03]">
                  <Globe className="w-full h-full text-cyan" strokeWidth={0.3} />
                </div>
                <div className="relative z-10 flex flex-col gap-4">
                  {clientRegions.map((region, i) => (
                    <motion.div
                      key={region}
                      className="flex items-center gap-3 group cursor-default"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <div className="w-2 h-2 bg-cyan rounded-full group-hover:shadow-[0_0_12px_hsl(174,100%,50%)] transition-shadow duration-300" />
                      <span className="text-foreground text-sm group-hover:text-cyan transition-colors duration-300">{region}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats with animated counters */}
                <div className="mt-8 pt-6 border-t border-border relative z-10">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <div className="text-cyan text-3xl font-black font-display">
                          <Counter target={stat.target} suffix={stat.suffix} />
                        </div>
                        <div className="text-muted-foreground text-xs mt-1 tracking-wide uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
