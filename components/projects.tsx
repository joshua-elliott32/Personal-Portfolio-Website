import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export const projects = [
  {
    title: "Portfolio Site",
    description:
      "My portfolio website built with Next.js and Tailwind CSS.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Vercel"],
    link: "https://joshuaelliott.dev",
    repo: "https://github.com/joshua-elliott32/Personal-Portfolio-Website",
    slug: "portfolio-site",
    fullDescription:
      "This portfolio website is built using Next.js and Tailwind CSS, showcasing my projects, experience, and skills. It features a clean and modern design with responsive layouts, dark mode support, and smooth animations. The site is deployed on Vercel for optimal performance and scalability.",
  },
  {
    title: "Spacecraft Evolution",
    description:
      "An engaging browser-based game where players evolve and upgrade their spacecraft. Navigate through space, collect resources, and enhance your ship's capabilities.",
    image: "/projects/spacecraft.jpg",
    technologies: ["JavaScript", "p5.js", "Socket.io"],
    link: "#",
    repo: "https://github.com/joshua-elliott32/Spacecraft-Evolution-2024",
    slug: "spacecraft-evolution",
    fullDescription:
      "Spacecraft Evolution is a browser-based game developed using JavaScript and the p5.js library. Players start with a basic spacecraft and can evolve it by collecting resources scattered throughout space. The game features various upgrades, allowing players to enhance their ship's speed, durability, and firepower. With multiplayer support via Socket.io, players can compete or collaborate with friends in real-time.",
  },
  {
    title: "Multiplayer Snake",
    description:
      "A multiplayer snake game with customisation options and a leaderboard. Supports up to 8 players in a single session.",
    image: "/projects/snake.jpg",
    technologies: ["JavaScript", "p5.js", "Socket.io"],
    link: "#",
    repo: "https://github.com/joshua-elliott32/Multiplayer-Snake-2023",
    slug: "multiplayer-snake",
    fullDescription:
      "Multiplayer Snake is a modern take on the classic snake game, developed using JavaScript and p5.js. The game supports up to 8 players in a single session, allowing for competitive gameplay. Players can customize their snakes with different colors and patterns, and compete for the top spot on the leaderboard. Real-time multiplayer functionality is enabled through Socket.io, providing a seamless gaming experience.",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-sm font-medium tracking-widest text-muted-foreground mb-12">
          PROJECTS
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="group grid md:grid-cols-[280px_1fr] gap-6 md:gap-8 p-4 -mx-4 rounded-lg hover:bg-card/50 transition-colors"
            >
              <div className="relative aspect-video md:aspect-[4/3] rounded-lg overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-foreground font-medium group-hover:text-primary transition-colors inline-flex items-center gap-1">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            View All Projects
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
