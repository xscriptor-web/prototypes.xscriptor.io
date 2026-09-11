import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Patricia Crespo Alcalá a través de sus redes sociales",
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46L20 4" />
    </svg>
  )
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M19 7.5c-1.5-4-6.5-4.5-9-2.5s-3 5.5 0 7.5c2 1.3 5 1 7 0 2-1 2.5-3.5 1-5.5" />
      <path d="M12 12c-1.5 0-2.5 1-2 2.5s2 2 3.5 1.5" />
      <path d="M8.5 16c.5 2 2.5 3.5 5.5 3 3-.5 4.5-2.5 4-5" />
    </svg>
  )
}

function BlueskyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 13.074c2.229-3.674 5.932-6.003 9.93-6.074 2.926-.052 4.07 1.958 4.07 3.864 0 2.97-2.708 7.334-5.257 8.724-2.087 1.136-3.798-.157-4.538-1.188-.286-.398-.407-.598-.405-.598s-.119.2-.405.598c-.74 1.031-2.451 2.324-4.538 1.188C5.708 18.198 3 13.834 3 10.864 3 8.958 4.144 6.948 7.07 7c3.998.07 7.701 2.4 9.93 6.074z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  )
}

export default function ContactoPage() {
  const socialLinks = [
    {
      name: "Instagram",
      handle: "@pat.crespo",
      url: "https://instagram.com/pat.crespo",
      icon: InstagramIcon,
    },
    {
      name: "X (Twitter)",
      handle: "@pat.crespo",
      url: "https://x.com/pat.crespo",
      icon: TwitterIcon,
    },
    {
      name: "Threads",
      handle: "@pat.crespo",
      url: "https://threads.net/@pat.crespo",
      icon: ThreadsIcon,
    },
    {
      name: "Bluesky",
      handle: "@pat.crespo",
      url: "https://bsky.app/profile/pat.crespo",
      icon: BlueskyIcon,
    },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl text-primary">Contacto</h1>
        <div className="w-16 h-px bg-wood-medium mt-4" />
      </div>

      <p className="font-body text-lg text-text-muted leading-relaxed mb-10">
        Puedes seguir a Patricia Crespo Alcalá en sus redes sociales o escribirle
        a través de los siguientes canales:
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-background-light rounded-lg p-5 border border-primary/10 hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
            >
              <div className="text-text-muted group-hover:text-accent transition-colors duration-200 shrink-0">
                <Icon />
              </div>
              <div>
                <p className="font-display text-base text-primary group-hover:text-accent transition-colors">
                  {link.name}
                </p>
                <p className="font-body text-sm text-text-muted">{link.handle}</p>
              </div>
            </a>
          )
        })}

        <a
          href="mailto:placeholder@patriciacrespoalcala.com"
          className="group flex items-center gap-4 bg-background-light rounded-lg p-5 border border-primary/10 hover:border-accent/30 hover:bg-accent/5 transition-all duration-200 sm:col-span-2"
        >
          <div className="text-text-muted group-hover:text-accent transition-colors duration-200 shrink-0">
            <EmailIcon />
          </div>
          <div>
            <p className="font-display text-base text-primary group-hover:text-accent transition-colors">
              Correo electrónico
            </p>
            <p className="font-body text-sm text-text-muted">placeholder@patriciacrespoalcala.com</p>
          </div>
        </a>
      </div>

      <div className="decorative-divider my-12" />
      <p className="font-body text-sm text-text-muted/60 text-center">
        Todos los enlaces abren en una nueva ventana.
      </p>
    </div>
  )
}
