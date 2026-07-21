# SoulWithQuran Engineering Rules

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- pnpm
- React Server Components by default

## Architecture
- Build one section at a time.
- Keep page.tsx focused on composition.
- Put full sections in src/components/sections.
- Put reusable primitives in src/components/ui.
- Put repeated structured content in src/data.
- Do not create abstractions without a real repeated use case.
- Do not modify unrelated files.

## Design
- DESIGN.md will be the visual source of truth.
- The final project uses one light visual theme only.
- Do not invent colors, fonts or component styles once design tokens are provided.
- Maintain generous whitespace and accessible contrast.
- Avoid gradients, glassmorphism and excessive decoration unless explicitly approved.

## React
- Prefer Server Components.
- Add "use client" only when interaction requires it.
- Use semantic HTML.
- Use next/image and next/link.
- Avoid unnecessary state, effects and dependencies.

## Quality
- Mobile-first.
- Accessible keyboard and focus behavior.
- Strict TypeScript.
- No ESLint errors.
- Run lint and production build after meaningful changes.
- Explain significant architecture decisions.
- Never expose secrets.
- Keep environment-variable examples in .env.example.

## Workflow
- Inspect relevant files before editing.
- State the intended changes before implementation.
- Complete only the requested scope.
- Summarize modified files afterward.
- Report lint and build results honestly.
