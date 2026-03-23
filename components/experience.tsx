import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    period: "2024 — Present",
    title: "Trainee Business Systems Developer",
    company: "Ipeco Holdings Ltd",
    companyUrl: "https://ipeco.com",
    description:
      "Build and maintain critical components used to construct modern web applications, working across the full stack. Collaborate closely with cross-functional teams to implement and advocate for best practices in web development.",
    technologies: ["SAP", "C#", "JavaScript", "SQL", "Website Development"],
  },
  {
    period: "Summer 2023",
    title: "Junior Business Systems Developer",
    company: "Ipeco Holdings Ltd",
    companyUrl: "https://ipeco.com",
    description:
      "Build and maintain critical components used to construct modern web applications, working across the full stack. Collaborate closely with cross-functional teams to implement and advocate for best practices in web development.",
    technologies: ["SAP", "C#", "JavaScript", "SQL"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-sm font-medium tracking-widest text-muted-foreground mb-12">
          EXPERIENCE
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 p-4 -mx-4 rounded-lg hover:bg-card/50 transition-colors"
            >
              <div className="text-sm text-muted-foreground font-medium">
                {exp.period}
              </div>

              <div className="space-y-3">
                <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                  <Link href={exp.companyUrl} className="inline-flex items-center gap-1">
                    {exp.title} · {exp.company}
                    <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
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
