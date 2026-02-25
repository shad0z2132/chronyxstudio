import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"

/**
 * Preloader — Cinematic "Console Boot"
 *
 * Sequence:
 *   0.0s  — Pitch black, subtle golden ambient wash fades in.
 *   0.3s  — Logo illuminates with a soft golden flare, scaling down slightly for depth.
 *   0.7s  — "CHRONYX" appears via cinematic tracking (letter-spacing expansion) + fade in.
 *   1.1s  — "GAME DEVELOPMENT STUDIO" subtitle fades in below.
 *   1.4s  — Tactical data stream / scrambling percentage counter begins.
 *   ~2.8s — The 4 corner brackets physically slide outwards (like a blast door opening).
 *   ~3.2s — Everything fades out, revealing the hero section.
 */

interface PreloaderProps {
  onComplete: () => void
  minimumDuration?: number
}

export function Preloader({ onComplete, minimumDuration = 3200 }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading")
  const [displayValue, setDisplayValue] = useState("00")

  // Check reduced motion preference via Framer Motion hook (safe, no window access at render time)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setPhase("done")
        onComplete()
      }, 300)
      return () => clearTimeout(timer)
    }

    // Organic loading steps
    const steps = [
      { target: 12, delay: 300 },
      { target: 34, delay: 700 },
      { target: 58, delay: 1200 },
      { target: 89, delay: 1800 },
      { target: 100, delay: 2400 },
    ]

    const timers: ReturnType<typeof setTimeout>[] = []

    steps.forEach(({ target, delay }) => {
      timers.push(setTimeout(() => setProgress(target), delay))
    })

    // Begin exit sequence (corner brackets expand)
    timers.push(
      setTimeout(() => setPhase("exiting"), minimumDuration)
    )

    // Complete and unmount
    timers.push(
      setTimeout(() => {
        setPhase("done")
        onComplete()
      }, minimumDuration + 600)
    )

    return () => timers.forEach(clearTimeout)
  }, [minimumDuration, onComplete, prefersReducedMotion])

  // Rapid scrambling numbers effect
  useEffect(() => {
    if (progress === 100) {
      setDisplayValue("100")
      return
    }
    
    let interval: ReturnType<typeof setInterval>
    if (progress > 0 && phase === "loading") {
      interval = setInterval(() => {
        // Generate random 2-digit string
        const randomNum = Math.floor(Math.random() * 90) + 10
        setDisplayValue(randomNum.toString())
      }, 50)
    }
    
    // Periodically snap to actual progress
    const syncTimeout = setTimeout(() => {
      setDisplayValue(progress.toString().padStart(2, '0'))
    }, 150)

    return () => {
      clearInterval(interval)
      clearTimeout(syncTimeout)
    }
  }, [progress, phase])

  // Lock scroll during preloader
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [phase])

  if (phase === "done") return null

  // Corner bracket animations based on phase
  const bracketVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, x: 0, y: 0 },
    exitTL: { opacity: 0, x: -60, y: -60, transition: { duration: 0.5, ease: "easeIn" as const } },
    exitTR: { opacity: 0, x: 60, y: -60, transition: { duration: 0.5, ease: "easeIn" as const } },
    exitBL: { opacity: 0, x: -60, y: 60, transition: { duration: 0.5, ease: "easeIn" as const } },
    exitBR: { opacity: 0, x: 60, y: 60, transition: { duration: 0.5, ease: "easeIn" as const } }
  }

  return (
    <AnimatePresence>
      {(phase === "loading" || phase === "exiting") && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#050508] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* ── Background: Subtle Cinematic Wash ── */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{
              background: `
                radial-gradient(circle at 50% -20%, rgba(212,168,83,0.08) 0%, transparent 50%),
                radial-gradient(circle at 100% 100%, rgba(212,168,83,0.04) 0%, transparent 50%),
                radial-gradient(circle at 0% 100%, rgba(212,168,83,0.03) 0%, transparent 50%)
              `
            }}
          />

          {/* ── Main Content Container ── */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-8"
            animate={phase === "exiting" ? { opacity: 0, scale: 1.05, filter: 'blur(10px)' } : { opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-50 rounded-2xl" />
              <img
                src="/logo.webp"
                alt="Chronyx Studio"
                className="w-16 h-16 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              />
            </motion.div>

            {/* Typography Group */}
            <div className="flex flex-col items-center gap-2">
              {/* Cinematic Letter Spacing Title */}
              <motion.h1
                className="text-foreground font-heading font-bold text-4xl md:text-5xl uppercase"
                initial={{ opacity: 0, letterSpacing: "0em" }}
                animate={{ opacity: 1, letterSpacing: "0.25em" }}
                transition={{ duration: 1.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
              >
                Chronyx
              </motion.h1>

              {/* Subtitle / Tagline */}
              <motion.div
                className="flex items-center gap-3 mt-1"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              >
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold/50" />
                <span className="text-gold/70 text-[10px] font-medium tracking-[0.4em] uppercase">
                  Game Development Studio
                </span>
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-gold/50" />
              </motion.div>
            </div>

            {/* Tactical Loading UI */}
            <motion.div
              className="flex flex-col items-center mt-6 w-full max-w-[200px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <div className="flex justify-between items-end w-full mb-2">
                <span className="text-muted-foreground/40 text-[9px] font-mono uppercase tracking-[0.2em] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/50 animate-pulse" />
                  System Init
                </span>
                <span className="text-gold text-xs font-mono font-bold tracking-widest tabular-nums">
                  {displayValue}%
                </span>
              </div>
              
              {/* Progress Bar (Fragmented/Tactical look) */}
              <div className="w-full h-[2px] bg-white/[0.05] rounded-full overflow-hidden flex gap-[2px]">
                <motion.div
                  className="h-full bg-gold rounded-full shadow-[0_0_10px_rgba(212,168,83,0.5)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ── Expanding Corner Brackets ── */}
          <motion.div
            className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-gold/20"
            variants={bracketVariants}
            initial="initial"
            animate={phase === "exiting" ? "exitTL" : "animate"}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          />
          <motion.div
            className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-gold/20"
            variants={bracketVariants}
            initial="initial"
            animate={phase === "exiting" ? "exitTR" : "animate"}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-gold/20"
            variants={bracketVariants}
            initial="initial"
            animate={phase === "exiting" ? "exitBL" : "animate"}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-gold/20"
            variants={bracketVariants}
            initial="initial"
            animate={phase === "exiting" ? "exitBR" : "animate"}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
