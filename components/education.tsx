import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const educations = [
  {
    period: "2025 — Present",
    title: "BSc Computer Science",
    institution: "University of London",
    description:
      "Ipeco Holdings Ltd is sponsoring me to complete a part-time degree in Computer Science with the University of London, which will allow me to further deepen my knowledge and skills in Computer Science.",
    technologies: ["Mathematics", "Programming", "Data Structures & Algorithms"],
  },
  {
    period: "2022 — 2024",
    title: "A-Levels",
    institution: "The Sixth Form College Colchester",
    description:
      "I studied for A-Levels at college which provided me with a strong foundation in programming, problem-solving, and analytical thinking.",
    technologies: ["Computer Science (A)", "Business (A)", "Mathematics (B)"],
  },
]

export function Education() {
  return (
    <section id="education" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-sm font-medium tracking-widest text-muted-foreground mb-12">
          EDUCATION
        </h2>

        <div className="space-y-12">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-4 -mx-4 rounded-lg hover:bg-card/50 transition-colors"
            >
              <div className="text-sm text-muted-foreground font-medium">
                {edu.period}
              </div>

              <div className="space-y-3">
                <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                  <span className="inline-flex items-center gap-1">
                    {edu.title} · {edu.institution}
                  </span>
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {edu.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="/cv.pdf"
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            target="_blank"
          >
            Download CV
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
