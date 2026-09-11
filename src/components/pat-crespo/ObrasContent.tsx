"use client"

import { patCopy } from "@/lib/pat-crespo/i18n"
import { works } from "@/lib/pat-crespo/works"
import { usePatLocale } from "./LocaleProvider"

export interface MediaArticle {
  title: string
  url: string
  excerpt: string
}

export interface MediaGroup {
  source: string
  sourceUrl: string
  articles: MediaArticle[]
}

export default function ObrasContent({ mediaArticles }: { mediaArticles: MediaGroup[] }) {
  const { locale } = usePatLocale()
  const copy = patCopy[locale]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl text-primary">{copy.obras.title}</h1>
        <div className="w-16 h-px bg-wood-medium mt-4" />
      </div>

      <p className="font-body text-lg text-text-muted leading-relaxed mb-12">
        {copy.obras.intro}
      </p>

      <div className="space-y-16 sm:space-y-20">
        {works.map((book, i) => {
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
                {bookCopy.award && (
                  <span className="inline-block font-body text-xs text-accent bg-accent/10 rounded-full px-3 py-1">
                    {bookCopy.award}
                  </span>
                )}
                <p className="font-body text-text text-lg leading-relaxed">
                  &ldquo;{bookCopy.phrase}&rdquo;
                </p>
                <p className="font-body text-text-muted leading-relaxed">
                  {bookCopy.description}
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
      </div>

      <div className="decorative-divider my-16" />

      <h2 className="font-display text-2xl sm:text-3xl text-primary mb-6">{copy.obras.mediaTitle}</h2>

      <p className="font-body text-text-muted leading-relaxed mb-8 max-w-3xl">
        {copy.obras.mediaIntro}
      </p>

      <div className="space-y-10">
        {mediaArticles.map((group) => (
          <div key={group.source}>
            <a
              href={group.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl text-accent hover:text-accent-light transition-colors inline-block mb-4"
            >
              {group.source}
              <svg className="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <div className="space-y-3">
              {group.articles.map((article) => (
                <a
                  key={article.url}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-background-light rounded-lg p-4 border border-primary/10 hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                >
                  <h3 className="font-body text-base text-primary font-medium hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted mt-1 leading-relaxed">
                    {article.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {mediaArticles.length > 0 && (
        <p className="font-body text-sm text-text-muted/60 text-center mt-8">
          {copy.obras.mediaOutro}
        </p>
      )}
    </div>
  )
}
