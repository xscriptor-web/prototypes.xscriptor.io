"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { useT } from "@/app/carolina/i18n-provider";
import styles from "./Navbar.module.css";

interface NavLink {
  url: string;
  title: string;
}

interface NavbarProps {
  links: NavLink[];
  logo: ReactNode;
  storageKey?: string;
}

const SITE_BASE = "/carolina";

function relativePath(pathname: string): string {
  if (pathname === SITE_BASE) return "/";
  if (pathname.startsWith(`${SITE_BASE}/`)) return pathname.slice(SITE_BASE.length);
  return pathname;
}

function isActive(pathname: string, url: string): boolean {
  const rel = relativePath(pathname);
  const target = relativePath(url);
  if (target === "/") return rel === "/";
  return rel === target || rel.startsWith(`${target}/`);
}

function useTheme(storageKey: string) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      const stored = window.localStorage.getItem(storageKey);
      setTheme(stored === "dark" ? "dark" : "light");
      setReady(true);
    });
  }, [storageKey]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(storageKey, next);
      } catch {
        /* noop */
      }
      if (next === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      return next;
    });
  }, [storageKey]);

  return { theme, ready, toggle };
}

export default function Navbar({
  links,
  logo,
  storageKey = "theme",
}: NavbarProps) {
  const pathname = usePathname();
  const t = useT("Navbar");
  const { theme, ready, toggle } = useTheme(storageKey);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMenuOpen(false));
  }, [pathname]);

  useEffect(() => {
    const root = document.getElementById("carolina-root");
    if (!root) return;
    if (menuOpen) {
      root.classList.add("menu-open");
    } else {
      root.classList.remove("menu-open");
    }
    return () => root.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={styles.header}>
      <nav aria-label={t("navLabel")} className={styles.nav}>
        <div className={styles.logoRow}>
          <button
            type="button"
            onClick={toggle}
            className={styles.logo}
            aria-label={theme === "dark" ? t("labelLight") : t("labelDark")}
            title={theme === "dark" ? t("labelLight") : t("labelDark")}
            aria-pressed={theme === "dark"}
            disabled={!ready}
          >
            {logo}
          </button>
        </div>

        <div className={styles.desktopLinks}>
          {links.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={`${styles.link} ${
                isActive(pathname, link.url) ? styles.linkActive : ""
              }`}
              aria-current={isActive(pathname, link.url) ? "page" : undefined}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? t("labelClose") : t("labelOpen")}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span className={`${styles.menuBar} ${styles.barTop}`} />
            <span className={`${styles.menuBar} ${styles.barMiddle}`} />
            <span className={`${styles.menuBar} ${styles.barBottom}`} />
            <svg
              className={styles.menuRing}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="9" pathLength="100" />
            </svg>
          </span>
        </button>
      </nav>

      <div
        id="site-menu"
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.overlayLinks}>
          {links.map((link, index) => (
            <Link
              key={link.url}
              href={link.url}
              tabIndex={menuOpen ? 0 : -1}
              className={`${styles.overlayLink} ${
                isActive(pathname, link.url) ? styles.overlayLinkActive : ""
              }`}
              style={{ animationDelay: `${0.06 * index}s` }}
              aria-current={isActive(pathname, link.url) ? "page" : undefined}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
