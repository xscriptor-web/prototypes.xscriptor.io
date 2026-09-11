"use client";

import { useEffect, useState } from "react";
import type { PrototypeProject } from "@/lib/projects";
import { homeCopy, type HomeLocale } from "@/lib/home-copy";
import ProjectExplorer from "./ProjectExplorer";
import styles from "@/app/hub.module.css";

interface HomeContentProps {
  projects: PrototypeProject[];
  soonProjects: PrototypeProject[];
}

export default function HomeContent({ projects, soonProjects }: HomeContentProps) {
  const [locale, setLocale] = useState<HomeLocale>("es");
  const copy = homeCopy[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    return () => {
      document.documentElement.lang = "es";
    };
  }, [locale]);

  const liveProjects = projects.filter((project) => project.status === "live");
  const categoryCount = new Set(liveProjects.map((project) => project.kind)).size;

  return (
    <>
      <section className={styles.hero}>
        <div>
          <div className={styles.heroHead}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <div className={styles.filters} role="group" aria-label={copy.languageLabel}>
              <button
                type="button"
                onClick={() => setLocale("es")}
                aria-pressed={locale === "es"}
                className={`${styles.filter} ${locale === "es" ? styles.filterActive : ""}`}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
                className={`${styles.filter} ${locale === "en" ? styles.filterActive : ""}`}
              >
                EN
              </button>
            </div>
          </div>
          <h1 className={styles.title}>
            {copy.titleLead}
            <br />
            <em>{copy.titleAccent}</em>
            <span className={styles.titleDot}>.</span>
          </h1>
        </div>
        <div className={styles.heroAside}>
          <p className={styles.lede}>{copy.lede}</p>
          <dl className={styles.stats}>
            <div className={styles.stat}>
              <dt className={styles.statLabel}>{copy.stats.published}</dt>
              <dd className={styles.statValue}>
                {String(liveProjects.length).padStart(2, "0")}
              </dd>
            </div>
            <div className={styles.stat}>
              <dt className={styles.statLabel}>{copy.stats.categories}</dt>
              <dd className={styles.statValue}>{String(categoryCount).padStart(2, "0")}</dd>
            </div>
            <div className={styles.stat}>
              <dt className={styles.statLabel}>{copy.stats.output}</dt>
              <dd className={styles.statValue}>100%</dd>
            </div>
          </dl>
        </div>
      </section>

      <ProjectExplorer projects={projects} soonProjects={soonProjects} locale={locale} />

      <section className={styles.notice}>
        <div className={styles.noticeCard}>
          <h2 className={styles.noticeTitle}>{copy.collection.title}</h2>
          <p className={styles.noticeText}>{copy.collection.first}</p>
          <p className={styles.noticeText}>{copy.collection.second}</p>
        </div>
        <div className={styles.noticeCard}>
          <h2 className={styles.noticeTitle}>{copy.legal.title}</h2>
          <p className={styles.noticeText}>{copy.legal.first}</p>
          <p className={styles.noticeText}>
            {copy.legal.contactBefore}
            <a href="https://xscriptor.io" target="_blank" rel="noopener noreferrer">
              xscriptor.io
            </a>
            {copy.legal.contactAfter}
          </p>
        </div>
      </section>
    </>
  );
}
