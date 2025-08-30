import Link from "next/link"
import { SectionShell } from "./section-shell"

const projects = [
  {
    title: "Chat Bot",
    description:
      "A personal chatbot tailored for coding-related tasks and quick assistance while learning and building.",
    link: "https://github.com/Tuhin200655/Chatbot-Ai.git",
    tags: ["JavaScript", "AI/ML", "Productivity"],
  },
]

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      title="Projects"
      description="Card-style layout with clean details and direct links to repositories."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-lg border border-slate-700 bg-slate-900/70 p-5 flex flex-col text-white"
          >
            <h3 className="font-medium text-lg">{p.title}</h3>
            <p className="text-sm text-white/80 leading-relaxed mt-2 flex-1">{p.description}</p>
            <ul className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
              {p.tags.map((t) => (
                <li key={t} className="rounded bg-white/20 px-2 py-1">
                  {t}
                </li>
              ))}
            </ul>
            <Link
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm text-blue-600 hover:text-blue-700 transition-colors underline-offset-4 hover:underline"
            >
              View on GitHub →
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
