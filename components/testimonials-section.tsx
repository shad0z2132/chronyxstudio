import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Chronyx Studio's flexibility and willingness to work quickly despite all issues resulted in a successful product upon first review. They produced good work, and the end product has positive reviews and no major crashes. They provided good feedback, and weren't afraid of making suggestions that would improve the end product.",
    name: "James Kucera",
    role: "Former Head of Mobile Development",
    company: "Bandai Namco America",
    initials: "JK",
  },
  {
    quote:
      "It was a pleasure working with Chronyx Studio. They're very professional and understand the slot business very well. On top of that they had good suggestions regarding the animations and art style which we incorporated into our games. I will definitely work with them in the future.",
    name: "Amichai Naveh Marmor",
    role: "Games Director",
    company: "Techona",
    initials: "AM",
  },
  {
    quote:
      "We found Chronyx for animation via an extensive animation test comparing many vendors. Chronyx's work stood out with realism in all details. They kept it up since then doing most of character animations for Stormdivers summer 2018 release and the closed beta. Everything within a tight schedule.",
    name: "Niko Makela",
    role: "Art Manager",
    company: "Housemarque",
    initials: "NM",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-card overflow-hidden">
      {/* Edge glow */}
      <div className="edge-glow-left" />
      <div className="edge-glow-right" />

      {/* Watermark */}
      <div className="watermark-text right-[-3%] top-[10%]">REVIEWS</div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <FadeIn direction="left">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-pink" />
                <span className="text-pink text-xs font-mono tracking-[0.3em] uppercase">Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-xl text-balance font-display">
                WHAT CLIENTS SAY ABOUT US
              </h2>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed lg:pt-8">
              We prioritize our client{"'"}s success as our success. Our commitment to delivering high-quality results, tailored solutions, and innovative approaches has earned us trust of top video game companies worldwide.
            </p>
          </FadeIn>
        </div>

        {/* Testimonial cards - staggered masonry-like layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start" staggerDelay={0.15}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.name}>
              <motion.div
                className={`group bg-background border border-border p-6 lg:p-8 card-glow-border transition-colors duration-300 hover:border-border/80 ${
                  index === 1 ? "md:-mt-10" : index === 2 ? "md:mt-10" : ""
                }`}
                whileHover={{ y: -6, borderColor: "hsl(174, 100%, 50%, 0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Quote mark */}
                <div className="text-cyan/20 text-5xl font-serif leading-none mb-2">{'"'}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="h-px w-full bg-border mb-5" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan/20 to-pink/20 flex items-center justify-center border border-border group-hover:border-cyan/30 transition-colors duration-300">
                    <span className="text-foreground text-xs font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="text-foreground text-sm font-semibold">{testimonial.name}</div>
                    <div className="text-cyan text-xs">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
