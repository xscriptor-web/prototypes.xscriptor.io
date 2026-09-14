import Link from "next/link";
import type { PrototypeProject } from "@/lib/projects";
import styles from "@/app/hub.module.css";

interface ProjectTileProps {
  project: PrototypeProject;
}

export default function ProjectTile({ project }: ProjectTileProps) {
  if (project.status !== "live" || !project.href) return null;

  const isExternal = project.external ?? /^https?:\/\//.test(project.href);

  const content = (
    <>
      <div className={styles.cardCover} aria-hidden="true">
        <span className={styles.cardIndex}>{project.index}</span>
        <span className={styles.cardMonogram}>{project.monogram}</span>
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardCategory}>{project.category}</span>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardAuthor}>{project.author}</p>
        <p className={styles.cardDesc}>{project.description}</p>
        <div className={styles.cardStack}>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.chip}>
              {tech}
            </span>
          ))}
        </div>
        <span className={styles.cardCta}>
          {isExternal ? "Visitar sitio" : "Ver prototipo"}
          <span className={styles.cardArrow} aria-hidden="true">
            {isExternal ? "↗" : "→"}
          </span>
        </span>
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.card}
      >
        {content}
        <span className="sr-only">(abre en una nueva pestaña)</span>
      </a>
    );
  }

  return (
    <Link href={project.href} className={styles.card}>
      {content}
    </Link>
  );
}
