import { SectionShell } from "./section-shell"
import { Coffee, Code2 } from "lucide-react"

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      title="Skills & Interests"
      description="A quick overview of my programming languages and passions."
    >
      <div className="grid md:grid-cols-3 gap-6">
        <article className="rounded-lg border p-5 text-white">
          <h3 className="font-medium mb-2">Programming Languages</h3>
          <ul className="text-sm text-white/80 flex flex-col gap-2">
            {/* C */}
            <li className="flex items-center gap-2 leading-none">
              <span
                aria-hidden="true"
                className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-slate-700 text-[10px] font-semibold text-white"
              >
                C
              </span>
              <span className="leading-none">C</span>
            </li>
            {/* Java */}
            <li className="flex items-center gap-2 leading-none">
              <Coffee className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <span className="leading-none">Java</span>
            </li>
            {/* Python */}
            <li className="flex items-center gap-2 leading-none">
              <Code2 className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
              <span className="leading-none">Python</span>
            </li>
          </ul>
        </article>

        <article className="rounded-lg border p-5 text-white">
          <h3 className="font-medium mb-2">Passions</h3>
          <ul className="text-sm text-white/80 space-y-1">
            <li>Website Development</li>
            <li>Open-source Contribution</li>
            <li>Photography</li>
            <li>Photo editing (Adobe Photoshop, Lightroom)</li>
          </ul>
        </article>

        <article className="rounded-lg border p-5 text-white">
          <h3 className="font-medium mb-2">Profiles</h3>
          <ul className="text-sm text-white/80 space-y-2">
            <li>
              <a
                href="https://github.com/Tuhin200655"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                GitHub: github.com/Tuhin200655
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tuhin-santra-b64484345?trk=contact-info"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:underline"
              >
                LinkedIn: Tuhin Santra
              </a>
            </li>
          </ul>
        </article>
      </div>
    </SectionShell>
  )
}
