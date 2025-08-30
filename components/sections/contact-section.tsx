"use client"

import type React from "react"
import { Mail, Github, Linkedin, MapPin } from "lucide-react"
import { useState } from "react"
import { SectionShell } from "./section-shell"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Someone"}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    const mailto = `mailto:tuhinsantra200655@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailto
  }

  return (
    <SectionShell
      id="contact"
      title="Contact"
      description="Have an opportunity, collaboration, or idea? I’d love to hear from you."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-slate-700 bg-slate-900/70 p-5 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              placeholder="Your name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-white/60 outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              placeholder="Tell me about your project or idea..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white text-sm px-4 py-2 shadow-sm hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="rounded-lg border border-slate-700 bg-slate-900/70 p-5">
          <h3 className="font-medium mb-2 text-white">Contact Info</h3>
          <ul className="text-sm text-white/80 space-y-3">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600 dark:text-cyan-400" aria-hidden="true" />
              <span className="font-medium text-white">Email:</span>
              <a className="underline-offset-4 hover:underline" href="mailto:tuhinsantra200655@gmail.com">
                tuhinsantra200655@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="h-4 w-4 text-blue-600 dark:text-cyan-400" aria-hidden="true" />
              <span className="font-medium text-white">GitHub:</span>
              <a
                className="underline-offset-4 hover:underline"
                href="https://github.com/Tuhin200655"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Tuhin200655
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-blue-600 dark:text-cyan-400" aria-hidden="true" />
              <span className="font-medium text-white">LinkedIn:</span>
              <a
                className="underline-offset-4 hover:underline"
                href="https://www.linkedin.com/in/tuhin-santra-b64484345?trk=contact-info"
                target="_blank"
                rel="noreferrer"
              >
                Tuhin Santra
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-blue-600 dark:text-cyan-400" aria-hidden="true" />
              <span className="font-medium text-white">Location:</span>
              <span>West Bengal, India</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}
