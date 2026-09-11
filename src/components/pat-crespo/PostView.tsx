"use client"

import Link from "next/link"
import { formatDate } from "@/lib/pat-crespo/posts"
import { patCrespo } from "@/lib/pat-crespo/routes"
import { patCopy } from "@/lib/pat-crespo/i18n"
import { usePatLocale } from "./LocaleProvider"
import PostContent from "./PostContent"
import TagBadge from "./TagBadge"
import type { Post } from "@/lib/pat-crespo/types"

interface PostViewProps {
  post: Post
  bodyEs: string
  bodyVa: string
}

export default function PostView({ post, bodyEs, bodyVa }: PostViewProps) {
  const { locale } = usePatLocale()
  const copy = patCopy[locale]
  const title = locale === "va" ? post.titleVa ?? post.title : post.title
  const tags = locale === "va" ? post.tagsVa ?? post.tags : post.tags
  const body = locale === "va" ? bodyVa : bodyEs

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
        {copy.post.back}
      </Link>

      {/* Header */}
      <header className="mb-8 sm:mb-10">
        {/* Date */}
        <time className="font-body text-sm text-text-muted/60 uppercase tracking-wider">
          {formatDate(post.date, locale)}
        </time>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mt-2 leading-tight">
          {title}
        </h1>

        {/* Decorative line */}
        <div className="w-20 h-px bg-wood-medium mt-4" />

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 space-y-0.5">
            {tags.map((tag) => (
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
            alt={title}
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
          {copy.post.back}
        </Link>
      </div>
    </article>
  )
}
