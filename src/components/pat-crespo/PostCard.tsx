import Link from "next/link"
import TagBadge from "./TagBadge"
import { formatDate, getExcerpt } from "@/lib/pat-crespo/posts"
import { patCrespo } from "@/lib/pat-crespo/routes"
import type { Post } from "@/lib/pat-crespo/types"

interface PostCardProps {
  post: Post
  index?: number
}

export default function PostCard({ post, index = 0 }: PostCardProps) {
  const delay = Math.min(index * 100, 500)

  return (
    <article
      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-wood-light/10 animate-on-scroll"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link href={patCrespo(`/blog/${post.slug}`)} className="block">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative h-48 sm:h-56 overflow-hidden bg-wood-light/10">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5 sm:p-6">
          {/* Date */}
          <time className="font-body text-xs text-text-muted/60 uppercase tracking-wider">
            {formatDate(post.date)}
          </time>

          {/* Title */}
          <h3 className="font-display text-xl sm:text-2xl text-primary mt-1 mb-3 leading-tight group-hover:text-accent transition-colors duration-200">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="font-body text-sm text-text-muted leading-relaxed line-clamp-3">
            {getExcerpt(post.body, 150)}
          </p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-3 space-y-0.5">
              {post.tags.slice(0, 3).map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  )
}
