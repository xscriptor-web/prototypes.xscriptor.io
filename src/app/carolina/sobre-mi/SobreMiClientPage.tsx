"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import Link from "next/link";
import { BOOKS } from "@/app/carolina/lib/books";
import { useT } from "@/app/carolina/i18n-provider";
import styles from "@/app/carolina/sobre-mi/SobreMiPage.module.css";

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
      { threshold: 0.12 }
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

interface TimelineItem {
  year: string;
  text: string;
}

export default function SobreMiClientPage() {
  const t = useT("SobreMiPage");
  const timeline = t.raw<TimelineItem[]>("timeline");

  return (
    <div className={styles.page}>
      {/* ============ Presentación ============ */}
      <Reveal className={`${styles.band} ${styles.band1}`}>
        <div className={styles.inner}>
          <div className={styles.introBody}>
            <span className={styles.kicker}>{t("role")}</span>
            <h1 className={styles.name}>Carolina Massa</h1>
          </div>
        </div>
      </Reveal>

      {/* ============ Bio 1 ============ */}
      <Reveal className={`${styles.band} ${styles.band2}`}>
        <div className={styles.innerNarrow}>
          <p className={styles.paragraph}>{t("bio1")}</p>
        </div>
      </Reveal>

      {/* ============ Bio 2 ============ */}
      <Reveal className={`${styles.band} ${styles.band3}`}>
        <div className={styles.innerNarrow}>
          <p className={`${styles.paragraph} ${styles.paragraphOnAccent}`}>
            {t("bio2")}
          </p>
        </div>
      </Reveal>

      {/* ============ Bio 3 ============ */}
      <Reveal className={`${styles.band} ${styles.band1}`}>
        <div className={styles.innerNarrow}>
          <p className={styles.paragraph}>{t("bio3")}</p>
        </div>
      </Reveal>

      {/* ============ Camino recorrido ============ */}
      <Reveal
        className={`${styles.band} ${styles.band2}`}
        aria-labelledby="camino-recorrido"
      >
        <div className={styles.innerNarrow}>
          <span className={styles.kicker}>Trayectoria</span>
          <h2 id="camino-recorrido" className={styles.sectionTitle}>
            {t("timelineTitle")}
          </h2>
          <ol className={styles.timeline}>
            {timeline.map((item, index) => (
              <li key={index} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{item.year}</span>
                <span className={styles.timelineText}>{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>

      {/* ============ Sello editorial ============ */}
      <Reveal
        className={`${styles.band} ${styles.band3}`}
        aria-labelledby="sello-editorial"
      >
        <div className={styles.inner}>
          <span className={`${styles.kicker} ${styles.kickerOnAccent}`}>
            Publicaciones
          </span>
          <h2 id="sello-editorial" className={styles.sectionTitle}>
            {t("pressTitle")}
          </h2>
          <div className={styles.pressGrid}>
            {BOOKS.map((book) => (
              <Link
                key={book.slug}
                href={`/carolina/libros/${book.slug}`}
                className={styles.pressCard}
              >
                <img
                  src={book.cover}
                  alt={`Portada de ${book.title}`}
                  loading="lazy"
                  className={styles.pressCover}
                />
                <h3 className={styles.pressTitle}>{book.title}</h3>
                <p className={styles.pressText}>{book.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
