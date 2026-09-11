import Link from "next/link"
import { patCrespo } from "@/lib/pat-crespo/routes"

const books = [
  {
    title: "Manifiesto de Incertidumbre",
    year: "2022",
    publisher: "Ed. Olélibros",
    cover: "/images/pat-crespo/manifiesto-de-incertidumbre.webp",
    phrase: "La incertidumbre como espacio donde la palabra busca su sentido.",
    link: "https://www.vallejoandcompany.com/2023/11/23/5-poemas-de-manifiesto-de-incertidumbre-2022-de-patricia-crespo-alcala/",
  },
  {
    title: "un solo árbol (Thimmamma Marrimanu)",
    year: "2024",
    publisher: "Ed. Milenio",
    cover: "/images/pat-crespo/un-solo-arbol.webp",
    phrase: "Se posa un pensamiento en la rama, anida versos, oscila: el cuerpo se hace bosque y un pájaro te nombra.",
    link: "https://www.vallejoandcompany.com/2025/01/16/5-poemas-de-un-solo-arbol-thimmamma-marrimanu-2024-de-patricia-crespo/",
  },
]

export default function BooksSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 sm:space-y-16">
      {books.map((book, i) => {
        const isReversed = i % 2 !== 0
        return (
          <a
            key={book.title}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col ${isReversed ? "sm:flex-row-reverse" : "sm:flex-row"} gap-6 sm:gap-10 items-center`}
          >
            <div className="w-full sm:w-1/2 rounded-2xl shadow-lg bg-primary/5 p-4">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-[50vh] sm:h-[60vh] object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="w-full sm:w-1/2 space-y-4">
              <p className="font-accent text-accent text-xl">{book.year}</p>
              <h3 className="font-display text-3xl sm:text-4xl text-primary font-bold leading-tight">
                {book.title}
              </h3>
              <p className="font-body text-text-muted text-sm">{book.publisher}</p>
              <p className="font-body text-text text-lg leading-relaxed">
                &ldquo;{book.phrase}&rdquo;
              </p>
              <span className="inline-flex items-center gap-1 font-body text-sm text-accent font-medium group-hover:gap-2 transition-all">
                Saber más
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
          Ver todas las obras
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
