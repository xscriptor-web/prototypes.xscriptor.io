import Link from "next/link";
import type { PrototypeProject } from "@/lib/projects";
import { homeCopy, type HomeLocale } from "@/lib/home-copy";
import styles from "@/app/hub.module.css";

interface ProjectCardProps {
  project: PrototypeProject;
  locale: HomeLocale;
}

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  const copy = homeCopy[locale];

  if (project.status !== "live" || !project.href) {
    return (
      <li className={styles.item}>
        <div className={styles.soonItem}>
          <span className={styles.soonIndex}>{project.index}</span>
          <span className={styles.soonLabel}>{copy.index.soonLabel}</span>
          <span className={styles.soonDots} aria-hidden="true" />
        </div>
      </li>
    );
  }

  const isExternal = project.external ?? /^https?:\/\//.test(project.href);

  const content = (
    <>
      <span className={styles.itemIndex}>{project.index}</span>
      <div className={styles.itemBody}>
        <span className={styles.itemCategory}>{project.category}</span>
        <h3 className={styles.itemTitle}>{project.title}</h3>
        <p className={styles.itemAuthor}>{project.author}</p>
        <p className={styles.itemDesc}>{project.description}</p>
      </div>
      <div className={styles.itemStack}>
        <span className={styles.itemStackLabel}>{copy.stackLabel}</span>
        {project.stack.map((tech) => (
          <span key={tech} className={styles.chip}>
            {tech}
          </span>
        ))}
      </div>
      <span className={styles.itemArrow} aria-hidden="true">
        {isExternal ? "↗" : "→"}
      </span>
    </>
  );

  if (isExternal) {
    return (
      <li className={styles.item}>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.itemLink}
        >
          {content}
          <span className="sr-only">{copy.externalLabel}</span>
        </a>
      </li>
    );
  }

  return (
    <li className={styles.item}>
      <Link href={project.href} className={styles.itemLink}>
        {content}
      </Link>
    </li>
  );
}
