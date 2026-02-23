import { FadeIn } from "@/components/motion"

/**
 * Technology partners & tools — infinite scroll text strip
 * Sits directly below the hero section as a trust signal.
 */

const partners = [
  { name: "Unreal Engine 5" },
  { name: "Blender" },
  { name: "Substance 3D" },
  { name: "Houdini" },
  { name: "Wwise" },
  { name: "Perforce" },
  { name: "Quixel" },
  { name: "ZBrush" },
]

export function PartnersSection() {
  // Duplicate the list so the marquee loops seamlessly
  const doubled = [...partners, ...partners]

  return (
    <section className="relative bg-[#0a0a0f] py-10 overflow-hidden">
      {/* Eyebrow label */}
      <FadeIn>
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-gold/30" />
            <span className="text-gold/50 text-xs font-semibold tracking-[0.3em] uppercase">
              Our Technology Stack
            </span>
            <div className="w-12 h-px bg-gold/30" />
          </div>
        </div>
      </FadeIn>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d14] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d14] to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee-partners whitespace-nowrap">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="inline-flex items-center gap-3 mx-12 group cursor-default select-none"
            >
              <span className="text-muted-foreground/50 text-base font-semibold tracking-wide transition-colors duration-300 group-hover:text-foreground/80">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
