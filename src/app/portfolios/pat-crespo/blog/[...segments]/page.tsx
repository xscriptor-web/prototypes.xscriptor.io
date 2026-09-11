import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/pat-crespo/posts"
import { sanitizePostBody, stripFeaturedImage } from "@/lib/pat-crespo/sanitize"
import PostView from "@/components/pat-crespo/PostView"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ segments: string[] }>
}

export const dynamicParams = false

export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    segments: post.slug.split("/"),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { segments } = await params
  const slug = segments.join("/")
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Post no encontrado" }
  }

  return {
    title: post.title,
    description: post.body
      ? post.body.replace(/<[^>]*>/g, "").substring(0, 160).trim()
      : "Patricia Crespo Alcalá - Poesía",
    openGraph: {
      title: post.title,
      description: post.body
        ? post.body.replace(/<[^>]*>/g, "").substring(0, 160).trim()
        : undefined,
      type: "article",
      publishedTime: post.date,
      images: post.featuredImage
        ? [{ url: post.featuredImage, width: 1200, height: 630 }]
        : undefined,
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { segments } = await params
  const slug = segments.join("/")
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const bodyEs = sanitizePostBody(stripFeaturedImage(post.body, post.featuredImage))
  const bodyVa = post.bodyVa
    ? sanitizePostBody(stripFeaturedImage(post.bodyVa, post.featuredImage))
    : bodyEs

  return <PostView post={post} bodyEs={bodyEs} bodyVa={bodyVa} />
}
