"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

/**
 * Preloader — cinematic studio intro
 *
 * Sequence:
 *   0.0s  — Logo fades in + scales up slightly
 *   0.4s  — Studio name reveals letter by letter
 *   0.8s  — Gold underline draws across
 *   1.0s  — Tagline fades in
 *   1.4s  — Progress bar fills (tied to simulated asset load)
 *   ~2.8s — Everything fades out, curtain lifts
 *
 * Respects prefers-reduced-motion: skips to done after 300ms.
 */

interface PreloaderProps {
  onComplete: () => void
  minimumDuration?: number
}

export function Preloader({ onComplete, minimumDuration = 2800 }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading")

  // Check reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(() => {
        setPhase("done")
        onComplete()
      }, 300)
      return () => clearTimeout(timer)
    }

    // Simulate progress in steps that feel organic
    const steps = [
      { target: 25, delay: 200 },
      { target: 45, delay: 600 },
      { target: 68, delay: 1000 },
      { target: 85, delay: 1500 },
      { target: 100, delay: 2000 },
    ]

    const timers: ReturnType<typeof setTimeout>[] = []

    steps.forEach(({ target, delay }) => {
      timers.push(setTimeout(() => setProgress(target), delay))
    })

    // Begin exit
    timers.push(
      setTimeout(() => setPhase("exiting"), minimumDuration)
    )

    // Complete
    timers.push(
      setTimeout(() => {
        setPhase("done")
        onComplete()
      }, minimumDuration + 800)
    )

    return () => timers.forEach(clearTimeout)
  }, [minimumDuration, onComplete, prefersReducedMotion])

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

  return (
    <AnimatePresence>
      {phase === "loading" || phase === "exiting" ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#08080d]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {/* Subtle radial glow behind logo */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(212,168,83,0.06) 0%, rgba(212,168,83,0) 70%)",
            }}
          />

          {/* Main content */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6"
            animate={phase === "exiting" ? { opacity: 0, y: -30, scale: 0.96 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
            >
              <img
                src="/Untitled design (55)-Photoroom.webp"
                alt="Chronyx Studio"
                width={72}
                height={72}
                className="w-[72px] h-[72px]"
              />
              {/* Glow pulse behind logo */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(212,168,83,0.20) 0%, transparent 70%)",
                  animation: "preloader-pulse 2s ease-in-out infinite",
                }}
              />
            </motion.div>

            {/* Studio name — letter reveal */}
            <div className="flex flex-col items-center gap-1">
              <motion.div
                className="flex overflow-hidden"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.04,
                      delayChildren: 0.4,
                    },
                  },
                }}
              >
                {"CHRONYX".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="text-foreground font-heading font-bold text-3xl md:text-4xl tracking-[0.2em]"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.4,
                          ease: [0.25, 0.4, 0.25, 1],
                        },
                      },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>

              {/* Gold underline — draws across */}
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "120px", opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              />

              {/* Tagline */}
              <motion.span
                className="text-gold/60 text-[11px] font-semibold tracking-[0.35em] uppercase mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                Game Development Studio
              </motion.span>
            </div>

            {/* Progress bar */}
            <motion.div
              className="w-48 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold/60 to-gold rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <motion.span
                  className="text-muted-foreground/40 text-[10px] tracking-wider uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  Loading
                </motion.span>
                <motion.span
                  className="text-gold/50 text-[10px] font-heading font-bold tabular-nums"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  {progress}%
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Corner accents — editorial framing */}
          <motion.div
            className="absolute top-8 left-8 w-8 h-8 border-t border-l border-gold/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.div
            className="absolute top-8 right-8 w-8 h-8 border-t border-r border-gold/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-gold/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-gold/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
