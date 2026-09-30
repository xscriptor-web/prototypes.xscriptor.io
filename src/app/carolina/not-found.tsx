"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/app/carolina/i18n-provider";

export default function NotFound() {
  const pathname = usePathname();
  const t = useT("NotFoundPage");

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.2rem",
        textAlign: "center",
        padding: "2rem 1rem",
      }}
    >
      <svg
        width="90"
        height="90"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
      <h1 style={{ fontSize: "clamp(40px, 10vw, 64px)", margin: 0 }}>
        {t("title")}
      </h1>
      <p
        style={{
          fontStyle: "italic",
          color: "var(--text-muted)",
          margin: 0,
        }}
      >
        {t("message")}
        {pathname && pathname !== "/" && (
          <span
            style={{
              display: "block",
              fontSize: "0.85rem",
              opacity: 0.7,
              marginTop: "0.4rem",
            }}
          >
            {pathname}
          </span>
        )}
      </p>
      <Link
        href="/carolina"
        className="marker-chip"
        style={{
          display: "inline-block",
          padding: "0.5em 1.4em",
          border: "1px solid var(--accent)",
          color: "var(--accent)",
        }}
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
