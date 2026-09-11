"use client"

import { useEffect } from "react"
import { getAllPosts } from "@/lib/pat-crespo/posts"
import { patCopy } from "@/lib/pat-crespo/i18n"
import PostCard from "@/components/pat-crespo/PostCard"
import { usePatLocale } from "@/components/pat-crespo/LocaleProvider"

export default function BlogPage() {
  const posts = getAllPosts()
  const { locale } = usePatLocale()
  const copy = patCopy[locale]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-10">
        <h1 className="font-display text-3xl sm:text-4xl text-primary">{copy.blogIndex.title}</h1>
        <p className="font-body text-text-muted mt-2">{copy.blogIndex.subtitle}</p>
        <div className="w-16 h-px bg-wood-medium mt-4" />
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 bg-background-light rounded-lg border border-primary/10">
          <p className="font-accent text-2xl text-text-muted">{copy.blogIndex.emptyTitle}</p>
          <p className="font-body text-text-muted/60 mt-2">{copy.blogIndex.emptyText}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      )}
    </div>
  )
}
