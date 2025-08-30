"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header
      className={cn("sticky top-0 z-50", "backdrop-blur supports-[backdrop-filter]:bg-transparent border-b")}
      role="banner"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight text-white">
          Tuhin Santra
          <span className="sr-only">Home</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Tuhin200655"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="inline-flex p-2 rounded-md hover:bg-muted transition-colors text-white/80 hover:text-white"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tuhin-santra-b64484345?trk=contact-info"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="inline-flex p-2 rounded-md hover:bg-muted transition-colors text-white/80 hover:text-white"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>

      <div className="md:hidden border-t">
        <nav
          aria-label="Primary Mobile"
          className="container mx-auto px-4 py-2 flex items-center gap-4 overflow-x-auto"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
