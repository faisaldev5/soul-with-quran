# SoulWithQuran

Premium tutor-led online Quran education marketing website. Built to establish trust, explain courses, introduce the tutor, and convert visitors into free-trial bookings.

## Project Stage

**Repository Foundation complete** — Phase 0 is complete. The initialized Next.js foundation, approved project and design documents, brand assets, homepage imagery, and design references are present. The repository is being prepared for Phase 1 — Design System. Actual page implementation has not started; the homepage remains a temporary foundation page.

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
├── brand/              # Approved production brand assets
│   ├── logos/
│   └── marks/
├── images/
│   ├── homepage/       # Homepage production images
│   ├── tutor/
│   ├── courses/
│   └── testimonials/

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
│   └── source boards and asset guidance
├── design/             # Design documents and references
│   └── references/
└── project/            # Project documentation

.agents/
└── skills/
    └── soulwithquran-ui/
```

## Next Steps

- Review and commit the repository-foundation corrections.
- Begin Phase 1 — Design System after review.
- Keep Git commits and pushes manual.

## Key Files

- `AGENTS.md` — Engineering rules for AI coding agents
- `DESIGN.md` — Approved design-system specification
- `docs/project/PROJECT.md` — Product scope and teaching model
- `docs/project/ROADMAP.md` — Approved implementation sequence
- `docs/project/INFORMATION_ARCHITECTURE.md` — Approved structural blueprint
- `.agents/skills/soulwithquran-ui/SKILL.md` — Repository UI workflow
- `.env.example` — Environment variable template
