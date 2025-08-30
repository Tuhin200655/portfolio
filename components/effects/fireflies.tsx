"use client"

import { useEffect, useRef } from "react"

type Firefly = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  phase: number
  flicker: number
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function Fireflies({
  density = 28,
  color = "hsl(182 72% 60%)", // teal/cyan glow to match your palette
  maxRadius = 2.2,
}: {
  density?: number
  color?: string
  maxRadius?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")

    let width = 0
    let height = 0
    let fireflies: Firefly[] = []

    const resize = () => {
      const { innerWidth, innerHeight } = window
      width = innerWidth
      height = innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Density scales with viewport; capped by prop
      const count = (width * height) / (mql.matches ? 90000 : 35000)
      const target = Math.max(12, Math.min(density, Math.floor(count)))
      fireflies = new Array(target).fill(0).map(
        (): Firefly => ({
          x: rand(0, width),
          y: rand(0, height),
          vx: rand(-0.08, 0.08),
          vy: rand(-0.08, 0.08),
          r: rand(0.8, maxRadius),
          phase: rand(0, Math.PI * 2),
          flicker: rand(0.6, 1.2),
        }),
      )
    }

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = "lighter"

      for (let i = 0; i < fireflies.length; i++) {
        const f = fireflies[i]

        // Flicker based on time
        const t = (now / 1000) * f.flicker + f.phase
        const intensity = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t))

        // Gentle random drift
        f.vx += rand(-0.005, 0.005)
        f.vy += rand(-0.005, 0.005)
        const maxV = 0.18
        f.vx = Math.max(-maxV, Math.min(maxV, f.vx))
        f.vy = Math.max(-maxV, Math.min(maxV, f.vy))
        f.x += f.vx
        f.y += f.vy

        // Wrap around edges
        if (f.x < -10) f.x = width + 10
        if (f.x > width + 10) f.x = -10
        if (f.y < -10) f.y = height + 10
        if (f.y > height + 10) f.y = -10

        const r = f.r * (0.8 + 0.4 * intensity)
        const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, r * 6)
        gradient.addColorStop(0, color)
        gradient.addColorStop(0.15, color)
        gradient.addColorStop(1, "rgba(0,0,0,0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(f.x, f.y, r * 6, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalCompositeOperation = "source-over"
    }

    const loop = (time: number) => {
      draw(time)
      rafRef.current = requestAnimationFrame(loop)
    }

    const start = () => {
      if (rafRef.current != null) return
      resize()
      rafRef.current = requestAnimationFrame(loop)
    }

    const stop = () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    const handleMotion = () => {
      if (mql.matches) {
        stop()
        resize()
        draw(0) // Static field when reduced motion is preferred
      } else {
        start()
      }
    }

    handleMotion()
    window.addEventListener("resize", resize)
    // Compat for older browsers
    // @ts-expect-error - addEventListener may not exist on some MediaQueryList
    mql.addEventListener?.("change", handleMotion)
    // @ts-expect-error - addListener is deprecated but used as fallback
    mql.addListener?.(handleMotion)

    return () => {
      stop()
      window.removeEventListener("resize", resize)
      // @ts-expect-error - removeEventListener may not exist on some MediaQueryList
      mql.removeEventListener?.("change", handleMotion)
      // @ts-expect-error - removeListener fallback
      mql.removeListener?.(handleMotion)
    }
  }, [density, color, maxRadius])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
}
