export interface Post {
  slug: string
  title: string
  date: string
  body: string
  tags: string[]
  images: string[]
  featuredImage: string | null
  titleVa?: string
  bodyVa?: string
  tagsVa?: string[]
}

export interface SiteInfo {
  title: string
  subtitle: string
  navLinks: { href: string; title: string }[]
  featuredPost: {
    title: string
    snippet: string
    image: string | null
    link: string | null
    date: string | null
  } | null
}
