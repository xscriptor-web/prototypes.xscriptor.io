"use client"

import Link from "next/link"
import { useEffect } from "react"
import { getAllPosts, getExcerpt, formatDate } from "@/lib/pat-crespo/posts"
import { patCrespo } from "@/lib/pat-crespo/routes"
import PostCard from "@/components/pat-crespo/PostCard"
import PoetryRotator from "@/components/pat-crespo/PoetryRotator"
import BooksSection from "@/components/pat-crespo/BooksSection"

export default function HomePage() {
  const posts = getAllPosts()
  const featured = posts[0]

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
    <div>
      {/* Hero Section */}
      <section className="border-b border-primary/10 bg-gradient-to-b from-primary/[0.02] to-transparent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="font-accent text-5xl sm:text-6xl md:text-7xl text-accent leading-tight">
            De poéticas
          </h1>
          <div className="w-12 h-px bg-wood-medium mx-auto mt-6" />
          <p className="font-body text-lg text-text-muted mt-6 max-w-xl mx-auto leading-relaxed">
            Poesía, literatura y crítica literaria desde Valencia
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href={patCrespo("/blog")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200 font-body text-sm"
            >
              Blog
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={patCrespo("/bio")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200 font-body text-sm"
            >
              Biografía
            </Link>
          </div>
        </div>
      </section>

      {/* Poetry Rotator — interactive */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <PoetryRotator />
      </section>

      {/* Books Section — full-bleed covers */}
      <BooksSection />

      {/* Featured Post */}
      {featured && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="mb-8">
            <h2 className="font-display text-2xl sm:text-3xl text-primary">Última publicación</h2>
            <div className="w-12 h-px bg-wood-medium mt-2" />
          </div>

          <Link href={patCrespo(`/blog/${featured.slug}`)} className="group block">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 bg-background-light rounded-xl p-6 sm:p-8 border border-primary/10 hover:border-accent/30 transition-colors duration-300">
              {featured.featuredImage && (
                <div className="relative h-56 sm:h-full min-h-[200px] rounded-lg overflow-hidden bg-primary/5">
                  <img
                    src={featured.featuredImage}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center">
                <time className="font-body text-xs text-text-muted/60 uppercase tracking-wider">
                  {formatDate(featured.date)}
                </time>
                <h3 className="font-display text-xl sm:text-2xl text-primary mt-2 mb-3 group-hover:text-accent transition-colors duration-200">
                  {featured.title}
                </h3>
                <p className="font-body text-sm text-text-muted leading-relaxed line-clamp-4">
                  {getExcerpt(featured.body, 200)}
                </p>
                <span className="inline-flex items-center gap-1 font-body text-sm text-accent mt-4 group-hover:gap-2 transition-all">
                  Leer más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Recent Posts */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="mb-8">
          <h2 className="font-display text-2xl sm:text-3xl text-primary">Publicaciones recientes</h2>
          <div className="w-12 h-px bg-wood-medium mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.slice(0, 6).map((post, index) => (
            <PostCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {posts.length > 6 && (
          <div className="text-center mt-10">
            <Link
              href={patCrespo("/blog")}
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200 font-body text-sm"
            >
              Ver todas las publicaciones
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}
