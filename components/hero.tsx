import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { calculateAge } from "@/lib/utils"


const socialLinks = [
  { icon: Github, href: "https://github.com/joshua-elliott32", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/joshua-elliott-448005277", label: "LinkedIn" },
  { icon: Mail, href: "mailto:joshua.elliott0302@gmail.com", label: "Email" },
]

// Parse DOB from environment variable
const dobString = process.env.NEXT_PUBLIC_DOB?.toString();
const birthDate = dobString ? new Date(dobString) : new Date();

export function Hero() {
  const age = calculateAge(birthDate);
  return (
    <section id="about" className="min-h-screen flex items-center pt-0">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-24 lg:py-32">
        
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Joshua Elliott
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-primary">
              Business Systems Developer
            </h2>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Essex, United Kingdom</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I am currently a Business Systems Developer who enjoys solving problems and developing solutions. I am <span>{age}</span> years old and I consistently challenge myself and develop new skills.
            </p>

            <div className="flex gap-5 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden bg-secondary">
              <Image
                src="/profileImage.jpeg"
                alt="Joshua Elliott"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
