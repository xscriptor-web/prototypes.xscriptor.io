"use client"

import Link from "next/link"
import { patCopy } from "@/lib/pat-crespo/i18n"
import { usePatLocale } from "./LocaleProvider"
import type { SiteInfo } from "@/lib/pat-crespo/types"

export default function Footer({ navLinks }: { navLinks: SiteInfo["navLinks"] }) {
  const currentYear = new Date().getFullYear()
  const { locale } = usePatLocale()
  const copy = patCopy[locale]

  return (
    <footer className="bg-primary/5 border-t border-primary/10 mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* External links */}
        {navLinks.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-text-muted hover:text-accent transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="w-16 h-px bg-wood-medium/40 mx-auto mb-6" />

        {/* Copyright and credit */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-center">
          <p className="font-body text-sm text-text-muted">
            &copy; {currentYear} {copy.footer.rights}
          </p>
          <span className="hidden sm:inline text-text-muted/40 mx-1">·</span>
          <p className="font-body text-sm text-text-muted">
            {copy.footer.developer}{" "}
            <a href="https://xscriptor.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light transition-colors">
              Xscriptor
            </a>
          </p>
          <span className="hidden sm:inline text-text-muted/40 mx-1">·</span>
          <p className="font-body text-sm text-text-muted">
            <Link href="/" className="text-accent hover:text-accent-light transition-colors">
              {copy.footer.prototypes}
            </Link>
          </p>
        </div>

        {/* Decorative */}
        <div className="mt-6 text-center">
          <span className="text-wood-light/30 text-xs font-accent tracking-widest">
            {copy.footer.tagline}
          </span>
        </div>
      </div>
    </footer>
  )
}
