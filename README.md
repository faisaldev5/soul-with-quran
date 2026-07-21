# SoulWithQuran

Premium tutor-led online Quran education marketing website. Built to establish trust, explain courses, introduce the tutor, and convert visitors into free-trial bookings.

## Project Stage

**Initial foundation** — the project skeleton is in place. Design assets and section implementation will follow.

## Technology Stack

- [Next.js](https://nextjs.org/) (App Router)
- React
- TypeScript
- Tailwind CSS
- ESLint
- Turbopack (development)
- pnpm

## Local Development

```bash
# Install dependencies
pnpm install

# Start development server (Turbopack)
pnpm dev

# Lint
pnpm lint

# Production build
pnpm build

# Start production server
pnpm start
```

## Folder Structure

```
public/
├── brand/              # Logo, favicon assets
├── images/
│   ├── homepage/
│   ├── tutor/
│   ├── courses/
│   ├── testimonials/
│   └── references/     # Design reference images

src/
├── app/                # Routing, layouts, metadata, page composition
├── components/
│   ├── layout/         # Header, footer, container
│   ├── sections/       # Full page sections (Hero, Courses, etc.)
│   └── ui/             # Reusable primitives (Button, Card, etc.)
├── data/               # Structured content (nav, courses, FAQs)
├── lib/                # Shared utilities and configuration
├── types/              # Shared TypeScript types
└── styles/             # Optional non-global styling resources

docs/
├── brand/              # Brand guidelines
├── design/             # Design documents
└── project/            # Project documentation
```

## Next Steps

- Design assets and project documentation will be added next.
- GitHub remote connection will be handled manually.

## Key Files

- `AGENTS.md` — Engineering rules for AI coding agents
- `DESIGN.md` — Design system specification (pending)
- `.env.example` — Environment variable template
