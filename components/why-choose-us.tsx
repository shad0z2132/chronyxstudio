import { Handshake, Shield, Gamepad2, Award } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion"

const features = [
  {
    icon: Handshake,
    title: "COMMITTED LONG-TERM PARTNERSHIP",
    description:
      "With 13 years of experience as a game development studio and art production studio, we foster long-term partnerships with leading clients such as EA, Housemarque, and Bandai Namco, maintaining an average collaboration of over 3 years per client.",
  },
  {
    icon: Gamepad2,
    title: "CUSTOMIZED FULL-CYCLE GAME DEVELOPMENT",
    description:
      "At Chronyx Studio, each team is carefully assembled with specialists who excel in the specific genre and artistic style required for your project. We adapt to your unique needs, ensuring a smooth process from concept to release.",
  },
  {
    icon: Shield,
    title: "ADHERENCE TO THE BEST SECURITY PRACTICES",
    description:
      "Our game dev studio prioritizes safeguarding your data, systems, and infrastructure. We adhere to strict protection policies and continuously update our security measures to align with the latest technologies.",
  },
  {
    icon: Award,
    title: "EPIC GAMES' TRUSTED PARTNER",
    description:
      "We are a trusted game development studio acknowledged by a leading game publisher, earning us recognition as an official Epic Games service partner.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-28 lg:py-40 pb-44 lg:pb-56 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Left content margin line — full height with pink neon glow accent */}
        <div className="absolute top-0 left-0 w-[1px] h-full z-20 bg-gradient-to-b from-[hsl(220,10%,18%)] via-[hsl(220,10%,22%)] to-[hsl(220,10%,18%)]" />
        {/* Pink glow bleed on left line */}
        <div className="absolute top-[50%] left-0 w-[30px] h-[200px] -translate-y-1/2 z-10 pointer-events-none bg-pink/30 blur-[20px] rounded-full" />
        <div className="absolute top-[50%] left-0 w-[6px] h-[120px] -translate-y-1/2 z-20 pointer-events-none bg-pink/80 blur-[4px] rounded-full" />

        {/* Right content margin line — full height with subtle pink glow */}
        <div className="absolute top-0 right-0 w-[1px] h-full z-20 bg-gradient-to-b from-[hsl(220,10%,18%)] via-[hsl(220,10%,22%)] to-[hsl(220,10%,18%)]" />
        <div className="absolute top-[50%] right-0 w-[20px] h-[150px] -translate-y-1/2 z-10 pointer-events-none bg-pink/15 blur-[15px] rounded-full" />

        {/* Header row: large heading left, description right */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-24">
          <FadeIn direction="left">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.08] max-w-2xl font-display tracking-tight italic">
              WHAT MAKES CHRONYX
              <br />
              A LEADING GAME
              <br />
              DEVELOPMENT STUDIO
            </h2>
          </FadeIn>
          <FadeIn direction="right" delay={0.2}>
            <p className="text-muted-foreground max-w-[320px] text-[13px] leading-[1.85] lg:pt-1 font-mono tracking-wide">
              Our studio is dedicated to creating standout games that captivate players worldwide. With a team of 300+ professionals experienced in game development, art production, and cutting-edge technologies, we deliver quality and innovation tailored to your vision.
            </p>
          </FadeIn>
        </div>

        {/* Cards + watermark area */}
        <div className="relative">
          {/* Feature cards — 4-column grid */}
          <StaggerContainer
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.1}
          >
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="feature-card group relative bg-card border border-[hsl(220,10%,18%)] px-7 pt-8 pb-10 lg:px-8 lg:pt-10 lg:pb-12 h-full transition-all duration-500 hover:border-[hsl(220,10%,25%)]">
                  <div className="relative z-10">
                    {/* Icon — pink, no container */}
                    <div className="mb-12">
                      <feature.icon className="w-8 h-8 text-pink" strokeWidth={1.5} />
                    </div>

                    {/* Title — white, bold, uppercase, display font */}
                    <h3 className="text-[13px] font-bold text-foreground tracking-[0.08em] mb-5 leading-snug font-display uppercase">
                      {feature.title}
                    </h3>

                    {/* Description — muted */}
                    <p className="text-muted-foreground text-[13px] leading-[1.8]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CHRONYX watermark — below cards, full width */}
          <div className="pointer-events-none select-none mt-[-1rem] relative z-0">
            <div
              className="text-center font-display font-black text-[clamp(6rem,18vw,15rem)] leading-none tracking-[0.2em] text-transparent uppercase"
              style={{ WebkitTextStroke: '1.5px hsl(220, 10%, 14%)' }}
            >
              CHRONYX
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
