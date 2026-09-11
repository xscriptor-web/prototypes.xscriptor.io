import type { Metadata } from "next"
import ObrasContent, { type MediaGroup } from "@/components/pat-crespo/ObrasContent"

export const metadata: Metadata = {
  title: "Obras",
  description: "Obras publicadas de Patricia Crespo Alcalá — poesía, literatura y crítica literaria",
}

const mediaArticles: MediaGroup[] = [
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
  return <ObrasContent mediaArticles={mediaArticles} />
}
