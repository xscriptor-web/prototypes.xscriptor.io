"use client";

import {
  memo,
  useEffect,
  useMemo,
  useRef,
} from "react";
import styles from "./XBlogDecrypt.module.css";

const SCRAMBLE = "·:;,.<>|/\\@#$%&*+=";

interface XBlogDecryptProps {
  contentHtml: string;
  title: string;
  image?: string;
  author?: string;
  date?: string;
  isoDate?: string;
  categories?: string[];
  keywords?: string[];
  readingTime?: number;
  speed?: number;
  revealColor?: string;
  scrambleColor?: string;
  startDelay?: number;
}

function wrapTextNodes(root: HTMLElement, scrambleColor: string): void {
  if (root.querySelector("script")) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent || !node.textContent.trim()) {
        return NodeFilter.FILTER_REJECT;
      }
      let parent: HTMLElement | null = node.parentElement;
      while (parent && parent !== root) {
        if (
          parent.tagName === "PRE" ||
          parent.tagName === "CODE" ||
          parent.classList.contains("katex") ||
          parent.classList.contains("xblog-text")
        ) {
          return NodeFilter.FILTER_REJECT;
        }
        parent = parent.parentElement;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }

  const spanByNode = new Map<Text, HTMLSpanElement>();

  nodes.forEach((textNode) => {
    const full = textNode.textContent ?? "";
    const span = document.createElement("span");
    span.className = "xblog-text";
    span.setAttribute("data-full", full);
    span.setAttribute("data-progress", "0");
    span.style.color = scrambleColor;
    span.textContent = full
      .split("")
      .map((c) => (c === " " ? " " : SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)]))
      .join("");
    textNode.parentNode?.replaceChild(span, textNode);
    spanByNode.set(textNode, span);
  });

  if (nodes.length === 0) return;

  const spans = Array.from(
    root.querySelectorAll<HTMLSpanElement>("span.xblog-text")
  );

  const revealSpan = (span: HTMLSpanElement) => {
    const full = span.getAttribute("data-full") ?? "";
    if (span.getAttribute("data-revealing") === "1") return;
    span.setAttribute("data-revealing", "1");
    span.style.color = "";
    let progress = 0;
    const tick = () => {
      progress += 1;
      if (progress >= full.length) {
        span.textContent = full;
        span.setAttribute("data-progress", String(full.length));
        return;
      }
      span.setAttribute("data-progress", String(progress));
      span.textContent =
        full.slice(0, progress) +
        full
          .slice(progress)
          .split("")
          .map((c) =>
            c === " "
              ? " "
              : SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)]
          )
          .join("");
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealSpan(entry.target as HTMLSpanElement);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
  );

  spans.forEach((span) => {
    const rect = span.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      revealSpan(span);
    } else {
      observer.observe(span);
    }
  });

  (root as HTMLElement & { __xblogObserver?: IntersectionObserver }).__xblogObserver =
    observer;
}

const XBlogBody = memo(function XBlogBody({
  contentHtml,
  speed,
  scrambleColor,
  startDelay,
}: {
  contentHtml: string;
  speed: number;
  scrambleColor: string;
  startDelay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (root.getAttribute("data-xblog-done") === "1") return;
    root.setAttribute("data-xblog-done", "1");

    const run = () => {
      if (root.querySelector(".xblog-text")) return;
      wrapTextNodes(root, scrambleColor);
    };

    const timeout = window.setTimeout(run, startDelay);
    return () => {
      window.clearTimeout(timeout);
      const obs = (root as HTMLElement & { __xblogObserver?: IntersectionObserver })
        .__xblogObserver;
      obs?.disconnect();
    };
  }, [contentHtml, speed, scrambleColor, startDelay]);

  return (
    <div
      ref={ref}
      className={`article-content ${styles.body}`}
      dangerouslySetInnerHTML={{ __html: contentHtml }}
    />
  );
});

export function XBlogDecrypt({
  contentHtml,
  title,
  image,
  author,
  date,
  isoDate,
  categories = [],
  keywords = [],
  readingTime,
  speed = 50,
  revealColor = "var(--accent, #e3342f)",
  scrambleColor = "#b8a8ff",
  startDelay = 450,
}: XBlogDecryptProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    const timeout = window.setTimeout(() => {
      el.style.opacity = "1";
    }, startDelay * 0.6);
    return () => window.clearTimeout(timeout);
  }, [startDelay]);

  const pills = useMemo(() => {
    const merged = Array.from(
      new Set([...categories, ...(keywords ?? [])])
    ).slice(0, 4);
    return merged;
  }, [categories, keywords]);

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1
          ref={titleRef}
          className={styles.title}
          style={{ color: revealColor, transition: "opacity 0.6s ease" }}
        >
          {title}
        </h1>
        {(author || date || readingTime !== undefined) && (
          <p className={styles.meta}>
            {author && <span className="marker-chip">{author}</span>}
            {date && (
              <time className="marker-chip" dateTime={isoDate ?? date}>
                {date}
              </time>
            )}
            {readingTime !== undefined && (
              <span className="marker-chip">{readingTime} min</span>
            )}
          </p>
        )}
        {pills.length > 0 && (
          <div className={styles.pills}>
            {pills.map((pill) => (
              <span key={pill} className={styles.pill}>
                {pill}
              </span>
            ))}
          </div>
        )}
        {image && (
          <img
            className={styles.image}
            src={image}
            alt={`Imagen de portada: ${title}`}
            loading="eager"
          />
        )}
      </header>
      <XBlogBody
        contentHtml={contentHtml}
        speed={speed}
        scrambleColor={scrambleColor}
        startDelay={startDelay}
      />
    </article>
  );
}

export default XBlogDecrypt;
