"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import Link from "next/link";
import { useT } from "@/app/carolina/i18n-provider";
import styles from "./home.module.css";

interface RevealProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}

function Reveal({
  as: Tag = "section",
  className = "",
  children,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      queueMicrotask(() => setVisible(true));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${className} ${visible ? styles.revealed : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

interface Quote {
  text: string;
  source: string;
  href: string;
}

export default function HomePage() {
  const t = useT();
  const quotes = t.raw<Quote[]>("HomePage.quotes");

  return (
    <div className={styles.home}>
      {/* ============ Cabecera ============ */}
      <Reveal className={styles.hero}>
        <span className={styles.kicker}>Poesía y Psicología</span>
        <h1 className={styles.title}>Carolina Massa</h1>
        <p className={styles.subtitle}>{t("HomePage.tagline")}</p>
        <div className={styles.heroActions}>
          <Link href="/carolina/blog" className={styles.ctaPrimary}>
            {t("HomePage.discoverMore")}
          </Link>
          <Link href="/carolina/libros" className={styles.ctaGhost}>
            {t("HomePage.booksTitle")}
          </Link>
        </div>
      </Reveal>

      {/* ============ Frases ============ */}
      {quotes.map((quote, index) => (
        <Reveal
          key={quote.href}
          className={`${styles.quoteBand} ${
            [styles.band1, styles.band2, styles.band3][index % 3]
          }`}
          aria-label={quote.source}
        >
          <blockquote className={styles.quote}>
            <p className={styles.quoteText}>“{quote.text}”</p>
            <footer className={styles.quoteFooter}>
              <cite className={styles.quoteSource}>{quote.source}</cite>
              <Link href={quote.href} className={styles.quoteLink}>
                {t("HomePage.quoteLink")} →
              </Link>
            </footer>
          </blockquote>
        </Reveal>
      ))}

      {/* ============ Cierre ============ */}
      <Reveal className={`${styles.closing} ${styles.band3}`}>
        <h2 className={styles.closingTitle}>{t("HomePage.closingTitle")}</h2>
        <p className={styles.closingNote}>{t("HomePage.closingNote")}</p>
        <div className={styles.heroActions}>
          <Link href="/carolina/blog" className={styles.ctaPrimary}>
            {t("HomePage.discoverMore")}
          </Link>
          <Link href="/carolina/contacto" className={styles.ctaGhost}>
            {t("Navbar.contacto")}
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
