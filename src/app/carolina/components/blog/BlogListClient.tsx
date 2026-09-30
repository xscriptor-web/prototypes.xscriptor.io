"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ArticleMetadata } from "@/app/carolina/lib/articles";
import { useT } from "@/app/carolina/i18n-provider";
import styles from "@/app/carolina/blog/BlogListPage.module.css";

interface BlogListClientProps {
  articles: ArticleMetadata[];
}

export default function BlogListClient({ articles }: BlogListClientProps) {
  const t = useT("BlogPage");
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length === 0) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        (a.description ?? "").toLowerCase().includes(q) ||
        (a.excerpt ?? "").toLowerCase().includes(q) ||
        a.categories.some((c) => c.toLowerCase().includes(q))
    );
  }, [articles, query]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const children = Array.from(
        container.querySelectorAll<HTMLElement>("[data-article-card]")
      );
      if (children.length === 0) return;
      const center = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      children.forEach((child, index) => {
        const rect = child.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = index;
        }
      });
      setActiveIndex(best);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [filtered]);

  const dateFormatter = useMemo(
    () => new Intl.DateTimeFormat("es-ES", { dateStyle: "long" }),
    []
  );

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.subtitle}>{t("subtitle")}</p>
      </header>

      <div className={styles.searchBar}>
        <div className={styles.searchInner}>
          <svg
            className={styles.searchIcon}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            aria-label={t("searchPlaceholder")}
            className={styles.search}
          />
        </div>
      </div>

      <div ref={containerRef} className={styles.stack}>
        {filtered.length === 0 && (
          <p className={styles.empty}>
            {query.trim() ? t("noResults") : t("emptyQuery")}
          </p>
        )}
        {filtered.map((article, index) => (
          <Link
            key={article.slug}
            href={`/carolina/blog/${article.slug}`}
            className={`${styles.card} ${
              index === activeIndex ? styles.cardActive : styles.cardInactive
            }`}
            data-article-card
            aria-current={index === activeIndex ? "true" : undefined}
          >
            <div className={styles.cardBackground}>
              {article.image ? (
                <img
                  src={article.image}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className={styles.cardImage}
                />
              ) : (
                <div className={styles.cardGradient} />
              )}
              <div className={styles.cardOverlay} />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{article.title}</h2>
              {article.excerpt && (
                <p className={styles.cardExcerpt}>{article.excerpt}</p>
              )}
              <div className={styles.cardMeta}>
                {article.categories.slice(0, 2).map((c) => (
                  <span key={c} className={styles.cardPill}>
                    {c}
                  </span>
                ))}
                <time className={styles.cardDate} dateTime={article.date}>
                  {dateFormatter.format(new Date(article.date))}
                </time>
                <span className={styles.cardReadingTime}>
                  {t("readingTime", { minutes: article.readingTime })}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
