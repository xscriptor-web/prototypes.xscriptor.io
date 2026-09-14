"use client";

import { useState } from "react";
import type { ProjectKind, PrototypeProject } from "@/lib/projects";
import { localizeProject } from "@/lib/projects";
import { homeCopy, type HomeLocale } from "@/lib/home-copy";
import ProjectCard from "./ProjectCard";
import styles from "@/app/hub.module.css";

type Filter = "all" | ProjectKind;

interface ProjectExplorerProps {
  projects: PrototypeProject[];
  soonProjects: PrototypeProject[];
  locale: HomeLocale;
}

export default function ProjectExplorer({
  projects,
  soonProjects,
  locale,
}: ProjectExplorerProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const copy = homeCopy[locale].index;

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: copy.all },
    { id: "literatura", label: copy.literatura },
    { id: "tech", label: copy.tech },
    { id: "ai", label: copy.ai },
  ];

  const liveProjects = projects
    .filter(
      (project) => project.status === "live" && (filter === "all" || project.kind === filter)
    )
    .map((project) => localizeProject(project, locale));
  const visibleSoon = soonProjects.filter(
    (project) => filter === "all" || project.kind === filter
  );

  const publishedLabel =
    liveProjects.length === 1 ? copy.publishedSingular : copy.publishedPlural;

  return (
    <section className={styles.index} aria-labelledby="indice-title">
      <div className={styles.indexHead}>
        <div className={styles.indexMeta}>
          <h2 id="indice-title" className={styles.indexTitle}>
            {copy.title}
          </h2>
          <div className={styles.filters} role="group" aria-label={copy.filterLabel}>
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={filter === item.id}
                className={`${styles.filter} ${filter === item.id ? styles.filterActive : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <span className={styles.indexCount}>
          {String(liveProjects.length).padStart(2, "0")} {publishedLabel}
          {visibleSoon.length > 0 && (
            <> · {String(visibleSoon.length).padStart(2, "0")} {copy.soonSuffix}</>
          )}
        </span>
      </div>
      <ul className={styles.list}>
        {liveProjects.map((project) => (
          <ProjectCard key={project.id} project={project} locale={locale} />
        ))}
        {visibleSoon.map((project) => (
          <ProjectCard key={project.id} project={project} locale={locale} />
        ))}
      </ul>
    </section>
  );
}
