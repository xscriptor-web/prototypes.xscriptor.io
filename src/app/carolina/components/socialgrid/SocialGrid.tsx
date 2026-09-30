"use client";

import styles from "./SocialGrid.module.css";

interface SocialItem {
  id: string;
  href: string;
  label: string;
  external?: boolean;
}

const ITEMS: SocialItem[] = [
  {
    id: "instagram",
    href: "https://www.instagram.com/cagimass/",
    label: "Instagram @cagimass",
    external: true,
  },
  {
    id: "email",
    href: "mailto:autovigilantes@gmail.com",
    label: "Correo electrónico autovigilantes@gmail.com",
  },
];

function InstagramGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="26"
      height="26"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmailGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="26"
      height="26"
      aria-hidden="true"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      <path d="M3.5 7l7.2 5.2a2 2 0 0 0 2.6 0L20.5 7" />
    </svg>
  );
}

export default function SocialGrid() {
  return (
    <div className={styles.grid}>
      {ITEMS.map((item) => (
        <a
          key={item.id}
          href={item.href}
          aria-label={item.label}
          className={styles.badge}
          {...(item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <span className={styles.badgeInner}>
            {item.id === "instagram" ? <InstagramGlyph /> : <EmailGlyph />}
          </span>
        </a>
      ))}
    </div>
  );
}
