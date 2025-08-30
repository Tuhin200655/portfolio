import { SectionShell } from "./section-shell"

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      title="About Me"
      description="Friendly yet professional — I love solving real-world problems with technology and bringing ideas to life on the web."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border p-5 text-white">
          <h3 className="font-medium mb-2">Introduction</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Hello! I'm Tuhin, a passionate computer science student with a deep fascination for artificial intelligence
            and website development. Currently pursuing my B.Tech in CSE at MCKV Institute of Engineering. I believe in
            the power of technology to solve real-world problems and create meaningful impact.
          </p>
          <ul className="mt-4 text-sm text-white/80 space-y-1">
            <li>
              <span className="text-white font-medium">Status:</span> 2nd-year B.Tech, CSE
            </li>
            <li>
              <span className="text-white font-medium">Institution:</span> MCKV Institute of Engineering
            </li>
            <li>
              <span className="text-white font-medium">Experience:</span> Fresher
            </li>
            <li>
              <span className="text-white font-medium">Location:</span> West Bengal, India
            </li>
          </ul>
        </div>

        <div className="rounded-lg border p-5 text-white">
          <h3 className="font-medium mb-2">Fun Facts & Hobbies</h3>
          <ul className="text-sm text-white/80 space-y-2 leading-relaxed">
            <li>🚀 Loves exploring tech trends and participating in hackathons</li>
            <li>📚 Enjoys reading about startups and coding challenges</li>
            <li>🧩 Passionate about solving complex puzzles and algorithms</li>
            <li>🌟 Always excited to learn new technologies and frameworks</li>
          </ul>
        </div>
      </div>
    </SectionShell>
  )
}
