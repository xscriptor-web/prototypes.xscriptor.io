"use client"

import { patCopy, type Rich } from "@/lib/pat-crespo/i18n"
import { works } from "@/lib/pat-crespo/works"
import { usePatLocale } from "./LocaleProvider"

function RichText({ segments }: { segments: Rich[] }) {
  return (
    <>
      {segments.map((segment, index) => {
        if (typeof segment === "string") {
          return <span key={index}>{segment}</span>
        }
        if ("em" in segment) {
          return (
            <em key={index} className="text-accent">
              {segment.em}
            </em>
          )
        }
        return (
          <strong key={index} className="font-display text-primary">
            {segment.strong}
          </strong>
        )
      })}
    </>
  )
}

export default function BioContent() {
  const { locale } = usePatLocale()
  const copy = patCopy[locale]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl text-primary">{copy.bio.title}</h1>
        <div className="w-16 h-px bg-wood-medium mt-4" />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start mb-8">
        <div className="w-full sm:w-56 shrink-0 rounded-2xl overflow-hidden shadow-md bg-primary/5">
          <img
            src="/images/pat-crespo/patricia-crespo-alcala.webp"
            alt="Patricia Crespo Alcalá"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="font-body text-text leading-relaxed space-y-6 flex-1">
          {copy.bio.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-[1.8]">
              <RichText segments={paragraph} />
            </p>
          ))}
        </div>
      </div>

      <div className="decorative-divider my-12" />

      <h2 className="font-display text-2xl sm:text-3xl text-primary mb-6">{copy.bio.worksTitle}</h2>

      <div className="space-y-6">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-background-light rounded-lg p-6 border border-primary/10 hover:border-accent/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <span className="text-accent font-display text-3xl leading-none mt-1">&ldquo;</span>
              <div>
                <h3 className="font-display text-xl text-primary">{work.title}</h3>
                <p className="text-text-muted text-sm mt-1">
                  {work.publisher}, {work.year}
                  {work.copy[locale].award ? ` — ${work.copy[locale].award}` : ""}
                </p>
                <p className="mt-3 leading-relaxed">{work.copy[locale].description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="decorative-divider my-12" />

      <h2 className="font-display text-2xl sm:text-3xl text-primary mb-6">{copy.bio.awardsTitle}</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {copy.bio.awards.map((award, index) => (
          <div key={index} className="bg-primary/5 rounded-lg p-5 border border-primary/10">
            <span className="font-display text-lg text-primary">{award.title}</span>
            {award.detail && <p className="text-text-muted text-sm mt-1">{award.detail}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
