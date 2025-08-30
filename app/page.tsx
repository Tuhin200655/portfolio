import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { BackToTop } from "@/components/back-to-top"

export default function HomePage() {
  return (
    <main className="font-sans text-foreground min-h-dvh">
      <SiteHeader />
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-16 md:py-16">
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <BackToTop />
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            {"© "}
            {new Date().getFullYear()} Tuhin Santra · West Bengal, India
          </p>
        </div>
      </footer>
    </main>
  )
}
