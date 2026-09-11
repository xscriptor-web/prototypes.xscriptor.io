"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { isActivePath, patCrespo } from "@/lib/pat-crespo/routes"

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  const navLinks = [
    { href: "", label: "Inicio" },
    { href: "/obras", label: "Obras" },
    { href: "/blog", label: "Blog" },
    { href: "/bio", label: "Bio" },
    { href: "/contacto", label: "Contacto" },
  ]

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    const onClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("mousedown", onClickOutside)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("mousedown", onClickOutside)
    }
  }, [isOpen])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={patCrespo("/")} className="font-display text-xl text-primary font-bold tracking-tight">
            Patricia Crespo Alcalá
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const target = patCrespo(link.href)
              const isActive = isActivePath(pathname, target)
              return (
                <Link
                  key={link.href}
                  href={target}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-body text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-text-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-primary hover:bg-primary/5 transition-colors duration-200"
          >
            <span className="relative block w-5 h-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-5 bg-current rounded-full transition-all duration-300 ${
                  isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-primary/10 bg-white/95 backdrop-blur-sm transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 sm:px-6 py-4 flex flex-col" aria-label="Menú principal">
          {navLinks.map((link) => {
            const target = patCrespo(link.href)
            const isActive = isActivePath(pathname, target)
            return (
              <Link
                key={link.href}
                href={target}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={`font-body text-base py-3 px-2 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-medium bg-primary/5"
                    : "text-text-muted hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
