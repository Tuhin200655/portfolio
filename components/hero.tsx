import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container mx-auto px-4 pt-10 md:pt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1
            className="text-3xl md:text-4xl font-semibold text-balance gradient-text animate-gradient-text transition-opacity"
            data-scroll-fade
          >
            Hi, I’m Tuhin — CSE student, web dev enthusiast, and AI/ML explorer.
          </h1>
          <p className="leading-relaxed text-white/80">
            2nd-year B.Tech in Computer Science & Engineering at MCKV Institute of Engineering. I love building useful
            things on the web and experimenting with intelligent systems. Open-source contributions keep me curious and
            collaborative.
          </p>

          <ul className="text-sm leading-relaxed text-white/80">
            <li>
              <span className="font-medium text-white">Location:</span> West Bengal, India
            </li>
            <li>
              <span className="font-medium text-white">Email:</span>{" "}
              <a className="underline-offset-4 hover:underline" href="mailto:tuhinsantra200655@gmail.com">
                tuhinsantra200655@gmail.com
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-sm px-4 py-2 shadow-sm hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://github.com/Tuhin200655"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tuhin-santra-b64484345?trk=contact-info"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href="mailto:tuhinsantra200655@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Mail className="size-4" /> Email
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-xl border">
          <Image
            alt="Abstract technology background"
            src="/abstract-tech-pattern.png"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}
