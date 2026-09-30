export interface BookInfo {
  slug: string;
  key: string;
  title: string;
  description: string;
  price: number;
  cover: string;
  published: string;
}

export const BOOKS: BookInfo[] = [
  {
    slug: "ambedo-mistico-y-subliminal",
    key: "ambedo",
    title: "Ambedo, Místico y Subliminal",
    description:
      "Interrogantes existenciales, memoria y asombro reunidos en una sola obra.",
    price: 15,
    cover: "/images/libros/ambedo-mistico-y-subliminal.webp",
    published: "2025",
  },
  {
    slug: "insondable-despertar",
    key: "insondable",
    title: "Insondable Despertar",
    description:
      "Versos para atravesar los momentos oscuros y volver a la luz.",
    price: 17,
    cover: "/images/libros/insondable-despertar.webp",
    published: "2025",
  },
];

export function getBookBySlug(slug: string): BookInfo | undefined {
  return BOOKS.find((b) => b.slug === slug);
}
