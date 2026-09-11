import type { Post, SiteInfo } from "./types"
import rawData from "./posts.json"

interface SiteData {
  site: SiteInfo
  posts: Post[]
}

const data = rawData as unknown as SiteData

export function getAllPosts(): Post[] {
  return data.posts
}

export function getPostBySlug(slug: string): Post | undefined {
  return data.posts.find((post) => post.slug === slug)
}

export function getSiteInfo(): SiteInfo {
  return data.site
}

export function getFeaturedPost(): Post | undefined {
  return data.posts[0]
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function getExcerpt(body: string, maxLength: number = 150): string {
  const text = body
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim()

  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + "..."
}
