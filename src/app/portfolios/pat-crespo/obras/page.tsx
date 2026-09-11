import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Obras",
  description: "Obras publicadas de Patricia Crespo Alcalá — poesía, literatura y crítica literaria",
}

const books = [
  {
    title: "Erosgrafías",
    year: "2018",
    publisher: "Bohodón Ediciones",
    cover: "/images/pat-crespo/erosgrafias.webp",
    phrase: "Eros se dibuja a través de las palabras en estas prosas poéticas.",
    description:
      "Prosas poéticas ilustradas por Santi Cervera. Un libro que transita por el deseo, el cuerpo y la memoria. Palabras sin filtro dichas desde la sinceridad del cuerpo, acompañadas de imágenes que introducen aún más en las sensaciones que transmite.",
    link: "https://www.bohodon.es/",
  },
  {
    title: "Cantos de la desesperanza",
    year: "2020",
    publisher: "Bohodón Ediciones",
    cover: "/images/pat-crespo/cantos-de-la-desesperanza.webp",
    phrase: "Un individuo cualquiera se halla caminando dirección a ningún lado.",
    description:
      "Poemario que transita por la desesperanza y la búsqueda de sentido a través de una voz poética que deambula sin rumbo, en un viaje interior hacia ningún lado.",
    link: "https://www.bohodon.es/",
  },
  {
    title: "Manifiesto de Incertidumbre",
    year: "2022",
    publisher: "Ed. Olélibros",
    cover: "/images/pat-crespo/manifiesto-de-incertidumbre.webp",
    phrase: "La incertidumbre como espacio donde la palabra busca su sentido.",
    description:
      "Un poemario que indaga en la incertidumbre como espacio donde la palabra busca su sentido, reconocido por la crítica valenciana como una de las obras poéticas más destacadas del año.",
    link: "https://www.vallejoandcompany.com/2023/11/23/5-poemas-de-manifiesto-de-incertidumbre-2022-de-patricia-crespo-alcala/",
    award: "Finalista Premios de la Crítica Literaria Valenciana",
  },
  {
    title: "un solo árbol (Thimmamma Marrimanu)",
    year: "2024",
    publisher: "Ed. Milenio",
    cover: "/images/pat-crespo/un-solo-arbol.webp",
    phrase: "Se posa un pensamiento en la rama, anida versos, oscila: el cuerpo se hace bosque y un pájaro te nombra.",
    description:
      "Poemario que toma su título del bosque sagrado de la India germinado a partir de un único baniano. Un libro donde de un solo árbol, un cuerpo, brota un bosque y su ecosistema. Atravesar los lindes del cuerpo y deambular por el bosque es cartografiar la vida.",
    link: "https://www.vallejoandcompany.com/2025/01/16/5-poemas-de-un-solo-arbol-thimmamma-marrimanu-2024-de-patricia-crespo/",
  },
]

const mediaArticles = [
  {
    source: "Zenda Libros",
    sourceUrl: "https://www.zendalibros.com/author/patriciacrespo/",
    articles: [
      {
        title: "Más allá del umbral",
        url: "https://www.zendalibros.com/mas-alla-del-umbral/",
        excerpt: "Sobre \"Algo más frágil\" (2026) de Teresa Garbí.",
      },
      {
        title: "Cartografía de Un estallido",
        url: "https://www.zendalibros.com/cartografia-de-un-estallido/",
        excerpt: "Reseña de la antología \"Un estallido\" que reúne a 39 voces de la poesía española reciente.",
      },
      {
        title: "Palabras como pájaros asombrándose",
        url: "https://www.zendalibros.com/palabras-como-pajaros-asombrandose/",
        excerpt: "Sobre \"La luz en las ciudades\" (2025) de Mar Busquets-Mataix.",
      },
      {
        title: "Vivir en el poema: Tannat, de Regina Ramos",
        url: "https://www.zendalibros.com/vivir-en-el-poema-tannat-de-regina-ramos/",
        excerpt: "Reseña del poemario \"Tannat\" (2025) de Regina Ramos.",
      },
      {
        title: "Fleur Jaeggy: la malafelicidad",
        url: "https://www.zendalibros.com/fleur-jaeggy-la-malafelicidad/",
        excerpt: "Sobre \"Los hermosos años del castigo\" de Fleur Jaeggy.",
      },
    ],
  },
  {
    source: "Vallejo & Co.",
    sourceUrl: "https://www.vallejoandcompany.com/?s=patricia+crespo",
    articles: [
      {
        title: "El espejo incómodo de «Suya era la noche» (2025), de María Ovelar",
        url: "https://www.vallejoandcompany.com/2025/07/17/el-espejo-incomodo-de-suya-era-la-noche-2025-de-maria-ovelar/",
        excerpt: "Reseña de la primera novela de María Ovelar, una obra que retrata la identidad femenina millennial.",
      },
      {
        title: "Sobre «Atlas en rojo» (2025), de José Luis Díaz Caballero",
        url: "https://www.vallejoandcompany.com/2025/07/04/sobre-atlas-en-rojo-2025-de-jose-luis-diaz-caballero/",
        excerpt: "Un poemario que cartografía el exilio, el desarraigo y el encuentro con uno mismo.",
      },
      {
        title: "Sobre «Procesión» (2024), de Kíril Vasílev",
        url: "https://www.vallejoandcompany.com/2024/08/27/sobre-procesion-2024-por-patricia-crespo-alcala/",
        excerpt: "La poesía como resistencia a la muerte en este poemario del poeta búlgaro traducido por Marco Vidal González.",
      },
      {
        title: "Sobre «La ingravidez que somos» (2024), de Antonio Ríos",
        url: "https://www.vallejoandcompany.com/2024/05/31/sobre-la-ingravidez-que-somos-2024-de-antonio-rios/",
        excerpt: "Reseña del poemario de Antonio Ríos donde la poesía es el lugar desde el que nombrar el mundo.",
      },
      {
        title: "La palabra que orillea la vida: «Jabón de Nablus» de Rodolfo Häsler",
        url: "https://www.vallejoandcompany.com/2024/04/30/la-palabra-que-orillea-la-vida-jabon-de-nablus-de-rodolfo-hasler/",
        excerpt: "Sobre el poemario del poeta cubano-afincado en Suecia, una palabra que nace del exilio.",
      },
    ],
  },
]

export default function ObrasPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl text-primary">Obras</h1>
        <div className="w-16 h-px bg-wood-medium mt-4" />
      </div>

      <p className="font-body text-lg text-text-muted leading-relaxed mb-12">
        A continuación se recogen las obras publicadas de Patricia Crespo Alcalá:
      </p>

      <div className="space-y-16 sm:space-y-20">
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
                {book.award && (
                  <span className="inline-block font-body text-xs text-accent bg-accent/10 rounded-full px-3 py-1">
                    {book.award}
                  </span>
                )}
                <p className="font-body text-text text-lg leading-relaxed">
                  &ldquo;{book.phrase}&rdquo;
                </p>
                <p className="font-body text-text-muted leading-relaxed">
                  {book.description}
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
      </div>

      <div className="decorative-divider my-16" />

      <h2 className="font-display text-2xl sm:text-3xl text-primary mb-6">Colaboraciones en medios</h2>

      <p className="font-body text-text-muted leading-relaxed mb-8 max-w-3xl">
        Patricia Crespo Alcalá colabora habitualmente con medios literarios donde publica reseñas,
        críticas y artículos sobre poesía contemporánea. A continuación, algunas de sus últimas colaboraciones:
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
          Pueden verse más colaboraciones en los respectivos medios.
        </p>
      )}
    </div>
  )
}
