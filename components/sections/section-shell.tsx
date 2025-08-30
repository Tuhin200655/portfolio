import type { ReactNode } from "react"

export function SectionShell({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="space-y-3 mb-6">
        <h2
          className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent dark:from-sky-400 dark:via-cyan-300 dark:to-teal-300 transition-opacity"
          data-scroll-fade
        >
          {title}
        </h2>
        {description ? <p className="leading-relaxed text-pretty text-white/80">{description}</p> : null}
      </div>
      <div>{children}</div>
    </section>
  )
}
