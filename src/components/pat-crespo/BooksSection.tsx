"use client"

import Link from "next/link"
import { patCrespo } from "@/lib/pat-crespo/routes"
import { works } from "@/lib/pat-crespo/works"
import { patCopy } from "@/lib/pat-crespo/i18n"
import { usePatLocale } from "./LocaleProvider"

export default function BooksSection() {
  const { locale } = usePatLocale()
  const copy = patCopy[locale]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 sm:space-y-16">
      {works.slice(0, 2).map((book, i) => {
        const isReversed = i % 2 !== 0
        const bookCopy = book.copy[locale]
        return (
          <a
            key={book.id}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col ${isReversed ? "sm:flex-row-reverse" : "sm:flex-row"} gap-6 sm:gap-10 items-center sm:justify-center`}
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-auto max-w-full h-[50vh] sm:h-[60vh] object-contain rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105"
            />
            <div className="w-full sm:w-1/2 space-y-4">
              <p className="font-accent text-accent text-xl">{book.year}</p>
              <h3 className="font-display text-3xl sm:text-4xl text-primary font-bold leading-tight">
                {book.title}
              </h3>
              <p className="font-body text-text-muted text-sm">{book.publisher}</p>
              <p className="font-body text-text text-lg leading-relaxed">
                &ldquo;{bookCopy.phrase}&rdquo;
              </p>
              <span className="inline-flex items-center gap-1 font-body text-sm text-accent font-medium group-hover:gap-2 transition-all">
                {copy.books.knowMore}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </a>
        )
      })}
      <div className="text-center">
        <Link
          href={patCrespo("/obras")}
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200 font-body text-sm"
        >
          {copy.books.allWorks}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
