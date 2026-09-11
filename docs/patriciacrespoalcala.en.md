# Documentation — Patricia Crespo Alcalá

> Portfolio integrated into `prototypes.xscriptor.io` and served at `/portfolios/pat-crespo`.

## Overview

A poetic-literary website that serves as a personal journal, published works portfolio, and contact point. The design prioritizes readability, typographic hierarchy, and a serene atmosphere to accompany the reading experience.

## Project Structure

```
src/
├── app/portfolios/pat-crespo/
│   ├── bio/            # Biography page
│   ├── blog/           # Literary blog (posts)
│   ├── contacto/       # Contact page
│   ├── obras/          # Published works
│   ├── layout.tsx      # Portfolio layout (Header, Footer, transitions)
│   └── page.tsx        # Homepage
├── components/pat-crespo/
│   ├── BooksSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PageTransition.tsx
│   ├── PoetryRotator.tsx
│   ├── PostCard.tsx
│   ├── PostContent.tsx
│   └── TagBadge.tsx
├── lib/pat-crespo/
│   ├── posts.json      # Data extracted from the original site
│   ├── posts.ts        # Blog post utilities
│   ├── routes.ts       # Route prefix under /portfolios/pat-crespo
│   └── types.ts        # Content types
└── app/globals.css     # Tailwind + portfolio styles
```

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.3 | React framework with App Router and static export |
| React | 19.3 | UI library |
| TypeScript | 5.9 | Static typing |
| Tailwind CSS | 3.4 | Utility-first styling |
| PostCSS / Autoprefixer | — | CSS processing |

## Typography

| Role | Font | Style |
|-----|------|-------|
| Headings | Playfair Display | Serif, elegant |
| Body | Lora | Serif, readable |
| Accents | Caveat | Script, handwritten |

Fonts are self-hosted through `next/font/google`, with no runtime requests to external providers.

## Color Palette

- **Primary**: `#2D4A3E` (forest green)
- **Accent**: `#8B5E3C` (leather brown)
- **Background**: `#FFFFFF` / `#FAFAF8` (white / cream)
- **Text**: `#1E332A` (dark green)

## Pages

- `/portfolios/pat-crespo` — Homepage with poetry rotator, featured post, books
- `/portfolios/pat-crespo/bio` — Biographical information
- `/portfolios/pat-crespo/blog` — Literary post archive
- `/portfolios/pat-crespo/obras` — Published works
- `/portfolios/pat-crespo/contacto` — Contact information
