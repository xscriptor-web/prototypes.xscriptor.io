import Link from "next/link";
import GridBackground from "./GridBackground";
import ThemeToggle from "./ThemeToggle";
import styles from "@/app/hub.module.css";

export default function HubShell({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <GridBackground />
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>P</span>
            <span className={styles.brandName}>
              prototypes<span>.xscriptor.io</span>
            </span>
          </Link>
          <nav className={styles.topNav} aria-label="Enlaces">
            <Link href="/portfolios" className={styles.topLink}>
              Portfolios
            </Link>
            <a
              className={styles.topLink}
              href="https://xscriptor.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              xscriptor.io ↗
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="main-content" className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© {year} Xscriptor — Prototypes</span>
          <span>
            Hecho con Next.js · Export estático ·{" "}
            <a
              className={styles.footerLink}
              href="https://xscriptor.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              xscriptor.io ↗
            </a>{" "}
            ·{" "}
            <a
              className={styles.footerLink}
              href="https://github.com/xscriptor-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
