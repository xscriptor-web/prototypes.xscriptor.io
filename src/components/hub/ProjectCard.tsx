import Link from "next/link";
import type { PrototypeProject } from "@/lib/projects";
import styles from "@/app/hub.module.css";

interface ProjectCardProps {
  project: PrototypeProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  if (project.status !== "live" || !project.href) {
    return (
      <li className={styles.item}>
        <div className={styles.soonItem}>
          <span className={styles.soonIndex}>{project.index}</span>
          <span className={styles.soonLabel}>Nuevo prototipo en preparación</span>
          <span className={styles.soonDots} aria-hidden="true" />
        </div>
      </li>
    );
  }

  return (
    <li className={styles.item}>
      <Link href={project.href} className={styles.itemLink}>
        <span className={styles.itemIndex}>{project.index}</span>
        <div className={styles.itemBody}>
          <span className={styles.itemCategory}>{project.category}</span>
          <h3 className={styles.itemTitle}>{project.title}</h3>
          <p className={styles.itemAuthor}>{project.author}</p>
          <p className={styles.itemDesc}>{project.description}</p>
        </div>
        <div className={styles.itemStack}>
          <span className={styles.itemStackLabel}>Stack</span>
          {project.stack.map((tech) => (
            <span key={tech} className={styles.chip}>
              {tech}
            </span>
          ))}
        </div>
        <span className={styles.itemArrow} aria-hidden="true">
          →
        </span>
      </Link>
    </li>
  );
}
