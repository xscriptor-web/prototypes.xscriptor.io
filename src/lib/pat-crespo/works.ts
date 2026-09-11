import type { Locale } from "./i18n"

export interface WorkCopy {
  phrase: string
  description: string
  award?: string
}

export interface Work {
  id: string
  title: string
  year: string
  publisher: string
  cover: string
  link: string
  copy: Record<Locale, WorkCopy>
}

export const works: Work[] = [
  {
    id: "erosgrafias",
    title: "Erosgrafías",
    year: "2018",
    publisher: "Bohodón Ediciones",
    cover: "/images/pat-crespo/erosgrafias.webp",
    link: "https://www.bohodon.es/",
    copy: {
      es: {
        phrase: "Eros se dibuja a través de las palabras en estas prosas poéticas.",
        description:
          "Prosas poéticas ilustradas por Santi Cervera. Un libro que transita por el deseo, el cuerpo y la memoria. Palabras sin filtro dichas desde la sinceridad del cuerpo, acompañadas de imágenes que introducen aún más en las sensaciones que transmite.",
      },
      va: {
        phrase: "Eros es dibuixa a través de les paraules en aquestes proses poètiques.",
        description:
          "Proses poètiques il·lustrades per Santi Cervera. Un llibre que transita pel desig, el cos i la memòria. Paraules sense filtre dites des de la sinceritat del cos, acompanyades d'imatges que introduïxen encara més en les sensacions que transmet.",
      },
    },
  },
  {
    id: "cantos-de-la-desesperanza",
    title: "Cantos de la desesperanza",
    year: "2020",
    publisher: "Bohodón Ediciones",
    cover: "/images/pat-crespo/cantos-de-la-desesperanza.webp",
    link: "https://www.bohodon.es/",
    copy: {
      es: {
        phrase: "Un individuo cualquiera se halla caminando dirección a ningún lado.",
        description:
          "Poemario que transita por la desesperanza y la búsqueda de sentido a través de una voz poética que deambula sin rumbo, en un viaje interior hacia ningún lado.",
      },
      va: {
        phrase: "Un individu qualsevol es troba caminant en direcció a cap lloc.",
        description:
          "Poemari que transita per la desesperança i la busca de sentit a través d'una veu poètica que deambula sense rumb, en un viatge interior cap a cap lloc.",
      },
    },
  },
  {
    id: "manifiesto-de-incertidumbre",
    title: "Manifiesto de Incertidumbre",
    year: "2022",
    publisher: "Ed. Olélibros",
    cover: "/images/pat-crespo/manifiesto-de-incertidumbre.webp",
    link: "https://www.vallejoandcompany.com/2023/11/23/5-poemas-de-manifiesto-de-incertidumbre-2022-de-patricia-crespo-alcala/",
    copy: {
      es: {
        phrase: "La incertidumbre como espacio donde la palabra busca su sentido.",
        description:
          "Un poemario que indaga en la incertidumbre como espacio donde la palabra busca su sentido, reconocido por la crítica valenciana como una de las obras poéticas más destacadas del año.",
        award: "Finalista Premios de la Crítica Literaria Valenciana",
      },
      va: {
        phrase: "La incertidumbre com a espai on la paraula busca el seu sentit.",
        description:
          "Un poemari que indaga en la incertidumbre com a espai on la paraula busca el seu sentit, reconegut per la crítica valenciana com una de les obres poètiques més destacades de l'any.",
        award: "Finalista Premis de la Crítica Literària Valenciana",
      },
    },
  },
  {
    id: "un-solo-arbol",
    title: "un solo árbol (Thimmamma Marrimanu)",
    year: "2024",
    publisher: "Ed. Milenio",
    cover: "/images/pat-crespo/un-solo-arbol.webp",
    link: "https://www.vallejoandcompany.com/2025/01/16/5-poemas-de-un-solo-arbol-thimmamma-marrimanu-2024-de-patricia-crespo/",
    copy: {
      es: {
        phrase:
          "Se posa un pensamiento en la rama, anida versos, oscila: el cuerpo se hace bosque y un pájaro te nombra.",
        description:
          "Poemario que toma su título del bosque sagrado de la India germinado a partir de un único baniano. Un libro donde de un solo árbol, un cuerpo, brota un bosque y su ecosistema. Atravesar los lindes del cuerpo y deambular por el bosque es cartografiar la vida.",
      },
      va: {
        phrase:
          "Es posa un pensament en la branca, nia versos, oscil·la: el cos es fa bosc i un ocell et nomena.",
        description:
          "Poemari que pren el títol del bosc sagrat de l'Índia germinat a partir d'un únic banian. Un llibre on, d'un sol arbre, un cos, brolla un bosc i el seu ecosistema. Travessar els límits del cos i deambular pel bosc és cartografiar la vida.",
      },
    },
  },
]
