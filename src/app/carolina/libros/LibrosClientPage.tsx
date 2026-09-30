"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BOOKS } from "@/app/carolina/lib/books";
import { useT } from "@/app/carolina/i18n-provider";
import styles from "@/app/carolina/libros/ObrasPage.module.css";

export default function LibrosClientPage() {
  const t = useT();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const children = Array.from(
        container.querySelectorAll<HTMLElement>("[data-book-card]")
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
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{t("LibrosPage.title")}</h1>
        <p className={styles.subtitle}>{t("LibrosPage.subtitle")}</p>
      </header>

      <div ref={containerRef} className={styles.stack}>
        {BOOKS.map((book, index) => (
          <Link
            key={book.slug}
            href={`/carolina/libros/${book.slug}`}
            className={`${styles.card} ${
              index === activeIndex ? styles.cardActive : styles.cardInactive
            }`}
            data-book-card
            aria-current={index === activeIndex ? "true" : undefined}
          >
            <div className={styles.cardBg}>
              <img
                src={book.cover}
                alt={`Portada de ${book.title}`}
                loading="lazy"
                className={styles.cover}
              />
              <div className={styles.cardOverlay} />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <p className={styles.bookDescription}>{book.description}</p>
              <span className={styles.bookPrice}>{book.price},00 €</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
