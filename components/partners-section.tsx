import { FadeIn } from "@/components/motion"

/**
 * Technology partners & tools — infinite scroll logo strip
 * Sits directly below the hero section as a trust signal.
 *
 * Uses text-based "logos" with inline SVG icons to avoid
 * external asset dependencies while keeping things crisp.
 */

const partners = [
  { name: "Unreal Engine 5", icon: UnrealIcon },
  { name: "Blender", icon: BlenderIcon },
  { name: "Substance 3D", icon: SubstanceIcon },
  { name: "Houdini", icon: HoudiniIcon },
  { name: "Wwise", icon: WwiseIcon },
  { name: "Perforce", icon: PerforceIcon },
  { name: "Quixel", icon: QuixelIcon },
  { name: "ZBrush", icon: ZBrushIcon },
]

export function PartnersSection() {
  // Duplicate the list so the marquee loops seamlessly
  const doubled = [...partners, ...partners]

  return (
    <section className="relative bg-[#0a0a0f] border-b border-white/[0.06] py-10 overflow-hidden">
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
              <partner.icon className="w-7 h-7 text-muted-foreground/40 transition-colors duration-300 group-hover:text-gold" />
              <span className="text-muted-foreground/40 text-base font-semibold tracking-wide transition-colors duration-300 group-hover:text-foreground/80">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Inline SVG Icons ──────────────────────────────────────────────── */
/* Minimal iconic shapes — not official logos, just recognisable motifs  */

function UnrealIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M9 8v8l3-2.5V16l4-4-4-4v2.5L9 8z"
        fill="currentColor"
      />
    </svg>
  )
}

function BlenderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse cx="12" cy="14" rx="7" ry="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="14" r="2" fill="currentColor" />
      <path d="M3 12l5-6h4L7 12" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

function SubstanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="15" cy="15" r="2.5" fill="currentColor" opacity="0.6" />
      <path d="M9 15l6-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function HoudiniIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2v20M7 6l10 12M17 6L7 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
    </svg>
  )
}

function WwiseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 12h2l2-4 2 8 2-6 2 4 2-2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 18c3-1 5-3 7-3s4 2 7 3" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
    </svg>
  )
}

function PerforceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3C7.03 3 3 7.03 3 12h9V3z" fill="currentColor" opacity="0.5" />
      <path d="M12 3v9h9c0-4.97-4.03-9-9-9z" fill="currentColor" opacity="0.3" />
      <path d="M12 12v9c4.97 0 9-4.03 9-9h-9z" fill="currentColor" opacity="0.6" />
    </svg>
  )
}

function QuixelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7l4 2.5v5L12 17l-4-2.5v-5L12 7z" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

function ZBrushIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 6h16L4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  )
}
