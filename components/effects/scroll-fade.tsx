"use client"

import { useEffect } from "react"

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export default function ScrollFadeEffect({ range = 220 }: { range?: number }) {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) return

    let ticking = false

    const update = () => {
      ticking = false
      const nodes = document.querySelectorAll<HTMLElement>("[data-scroll-fade]")
      for (const el of nodes) {
        const rect = el.getBoundingClientRect()
        if (rect.top < 0) {
          const amountAbove = -rect.top
          const opacity = clamp(1 - amountAbove / range, 0, 1)
          el.style.opacity = String(opacity)
          el.style.willChange = "opacity"
        } else {
          el.style.opacity = "1"
          el.style.willChange = "auto"
        }
      }
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    const onResize = () => update()

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return null
}
