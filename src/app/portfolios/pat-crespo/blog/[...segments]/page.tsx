import Link from "next/link"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/pat-crespo/posts"
import { patCrespo } from "@/lib/pat-crespo/routes"
import PostContent from "@/components/pat-crespo/PostContent"
import TagBadge from "@/components/pat-crespo/TagBadge"
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

  // Strip featured image from body to avoid duplicate rendering
  let body = post.body
  if (post.featuredImage) {
    const escapedUrl = post.featuredImage.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    body = body.replace(
      new RegExp(
        `<a[^>]*imageanchor[^>]*>\\s*<img[^>]*src=["']${escapedUrl}["'][^>]*>\\s*</a>\\s*`,
        "i"
      ),
      ""
    )
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Back link */}
      <Link
        href={patCrespo("/blog")}
        className="inline-flex items-center gap-1 font-body text-sm text-text-muted hover:text-primary transition-colors mb-8"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Volver al blog
      </Link>

      {/* Header */}
      <header className="mb-8 sm:mb-10">
        {/* Date */}
        <time className="font-body text-sm text-text-muted/60 uppercase tracking-wider">
          {formatDate(post.date)}
        </time>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mt-2 leading-tight">
          {post.title}
        </h1>

        {/* Decorative line */}
        <div className="w-20 h-px bg-wood-medium mt-4" />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-4 space-y-0.5">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="mb-8 sm:mb-10 rounded-lg overflow-hidden shadow-md bg-wood-light/10">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>
      )}

      {/* Body Content */}
      <div className="bg-white rounded-lg p-6 sm:p-8 md:p-10 shadow-sm border border-wood-light/10">
        <PostContent body={body} />
      </div>

      {/* Clear float and decorative divider */}
      <div className="clear-both" />
      <div className="decorative-divider my-12" />

      {/* Navigation */}
      <div className="flex justify-center">
        <Link
          href={patCrespo("/blog")}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-body text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver al blog
        </Link>
      </div>
    </article>
  )
}
