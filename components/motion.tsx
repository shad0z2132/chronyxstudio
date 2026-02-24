"use client"

import { motion, useInView, useMotionValue, useSpring, useReducedMotion, AnimatePresence, type Variants } from "framer-motion"
import { useRef, useEffect, useState, type ReactNode } from "react"

// ─── Fade In on Scroll ───────────────────────────────────────────────────────
interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 40,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })
  const prefersReducedMotion = useReducedMotion()

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }

  const { x, y } = prefersReducedMotion ? { x: 0, y: 0 } : directionMap[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

// ─── Stagger Children ────────────────────────────────────────────────────────
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  delay?: number
  once?: boolean
}

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.12,
  delay = 0,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
            delayChildren: prefersReducedMotion ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// ─── Stagger Item (child of StaggerContainer) ───────────────────────────────
interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
}

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 30,
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion()

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }

  const { x, y } = prefersReducedMotion ? { x: 0, y: 0 } : directionMap[direction]

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x, y },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0.01 : 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// ─── Text Reveal (word by word or character by character) ────────────────────
interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  mode?: "word" | "char"
  once?: boolean
}

export function TextReveal({
  text,
  className,
  delay = 0,
  mode = "word",
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })
  const prefersReducedMotion = useReducedMotion()

  const parts = mode === "word" ? text.split(" ") : text.split("")

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: mode === "word" ? 0.08 : 0.03,
            delayChildren: delay,
          },
        },
      }}
      aria-label={text}
    >
      {parts.map((part, i) => (
        <motion.span
          key={i}
          className="inline-block"
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
          {part}
          {mode === "word" && i < parts.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  )
}

// ─── Animated Counter ────────────────────────────────────────────────────────
interface CounterProps {
  target: number
  prefix?: string
  suffix?: string
  className?: string
  duration?: number
  once?: boolean
}

export function Counter({
  target,
  prefix = "",
  suffix = "",
  className,
  duration = 2,
  once = true,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })
  const prefersReducedMotion = useReducedMotion()
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 100,
    duration: duration * 1000,
  })

  useEffect(() => {
    if (isInView) {
      if (prefersReducedMotion) {
        // Skip animation — show final value immediately
        if (ref.current) {
          ref.current.textContent = `${prefix}${target}${suffix}`
        }
      } else {
        motionValue.set(target)
      }
    }
  }, [isInView, target, motionValue, prefersReducedMotion, prefix, suffix])

  useEffect(() => {
    if (prefersReducedMotion) return
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.round(latest)}${suffix}`
      }
    })
    return unsubscribe
  }, [springValue, prefix, suffix, prefersReducedMotion])

  return (
    <span ref={ref} className={className} aria-live="polite">
      {prefix}0{suffix}
    </span>
  )
}

// ─── Parallax Wrapper ────────────────────────────────────────────────────────
interface ParallaxProps {
  children: ReactNode
  className?: string
  speed?: number // negative = slower, positive = faster
}

export function Parallax({ children, className, speed = -0.2 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const y = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrollY = window.scrollY
        const offsetTop = rect.top + scrollY
        const relativeScroll = scrollY - offsetTop
        y.set(relativeScroll * speed)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, y])

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  )
}

// ─── Scale on Hover ──────────────────────────────────────────────────────────
interface ScaleHoverProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function ScaleHover({ children, className, scale = 1.03 }: ScaleHoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

// ─── Glow Card (hover glow effect) ──────────────────────────────────────────
interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(0, 240, 255, 0.15)",
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className || ""}`}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-inherit opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  )
}

// ─── Line Reveal (horizontal line that draws in) ─────────────────────────────
interface LineRevealProps {
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function LineReveal({
  className,
  delay = 0,
  duration = 0.8,
  once = true,
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      className={`h-px bg-gradient-to-r from-transparent via-primary to-transparent ${className || ""}`}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      style={{ transformOrigin: "left" }}
    />
  )
}

// ─── Rotating Words (cycles through words with animation) ────────────────────
interface RotatingWordsProps {
  words: string[]
  className?: string
  interval?: number
}

export function RotatingWords({
  words,
  className,
  interval = 3000,
}: RotatingWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span className={`relative inline-block ${className || ""}`} aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          className="inline-block"
          initial={prefersReducedMotion ? { opacity: 0 } : { y: 30, opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { y: -30, opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.15 : 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
