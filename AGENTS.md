# SoulWithQuran — Engineering Instructions

This file defines the permanent engineering and collaboration rules for AI coding agents working in this repository.

Follow these instructions for every task unless the user explicitly gives a conflicting instruction for the current task.

---

## 1. Project Identity

SoulWithQuran is a premium, tutor-led online Quran education website for English-speaking families and adult learners.

The website exists to:

- Build trust in the tutor and teaching approach.
- Explain available courses and class structure.
- Help visitors choose the right learning path.
- Generate qualified free-trial bookings and enquiries.
- Support long-term content marketing and organic search growth.

This project is primarily a marketing, content, trust-building, and lead-generation website.

It is not:

- A learning management system.
- A student dashboard.
- A SaaS product.
- A tutor marketplace.
- A multi-tenant application.
- A WordPress website.
- A mobile application.
- A student authentication platform.

Do not introduce LMS, dashboard, authentication, database, payment, or multi-tutor architecture unless the user explicitly expands the product scope.

---

## 2. Required Reading

Before making product, design, content, or architecture decisions, inspect the relevant project sources.

### For every meaningful task

Read:

1. `AGENTS.md`
2. `docs/project/PROJECT.md`
3. `docs/project/ROADMAP.md`

### Before visual or UI work

Also read:

1. `DESIGN.md`
2. Relevant files inside `docs/design/references/`
3. Existing related components and data files

### Before using a specialized workflow

Inspect the relevant skill under:

```text
.agents/skills/
```

Do not make assumptions when an approved source of truth already exists.

If two project documents conflict:

1. Follow the user’s latest explicit instruction.
2. Follow the most recently approved source of truth.
3. Report the conflict before making a destructive or broad change.
4. Do not silently combine incompatible directions.

---

## 3. Current Technology Stack

Use the existing stack unless the user explicitly approves a change:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- pnpm
- Lucide React
- React Server Components by default
- Vercel for deployment
- Cloudflare DNS later
- MDX for blog content later
- React Hook Form and Zod when forms are implemented
- Route Handlers for server-side form processing
- Resend for email delivery
- Cloudflare Turnstile for spam protection

Do not migrate the project to another framework, router, styling system, package manager, or hosting platform without explicit approval.

---

## 4. Package Manager and Commands

Use `pnpm` only.

Do not use:

- `npm install`
- `npm run`
- `yarn`
- `bun`

Use scripts defined in `package.json`.

Common commands may include:

```bash
pnpm dev
pnpm lint
pnpm build
```

Before adding a dependency:

1. Confirm that the feature cannot reasonably be implemented with the existing stack.
2. Explain why the dependency is required.
3. Prefer small, maintained, focused packages.
4. Check compatibility with the installed Next.js and React versions.
5. Ask for approval unless the dependency was explicitly requested.

Do not install packages speculatively.

Do not install multiple libraries that solve the same problem.

---

## 5. Repository Architecture

Use the existing project structure:

```text
src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
├── lib/
├── styles/
└── types/

public/
├── brand/
└── images/
    ├── courses/
    ├── homepage/
    ├── references/
    ├── testimonials/
    └── tutor/

docs/
├── brand/
├── design/
└── project/

.agents/
└── skills/
```

### `src/app`

Use for:

- Routes
- Layouts
- Metadata
- Route-specific composition
- Route Handlers
- Loading, error, not-found, sitemap, and robots files

Keep route files focused on page composition.

Do not place large reusable sections or extensive business data directly inside `page.tsx`.

### `src/components/layout`

Use for site-wide structural components such as:

- Header
- Navigation
- Mobile navigation
- Footer
- Container
- Page shell
- Announcement bar, if approved

### `src/components/sections`

Use for substantial page sections such as:

- Hero
- Trust indicators
- Course overview
- Learning process
- Tutor introduction
- Testimonials
- FAQ
- Final CTA

A section should represent a meaningful page-level composition, not a tiny UI primitive.

### `src/components/ui`

Use for small reusable UI primitives such as:

- Button
- Card
- Badge
- Section heading
- Input
- Textarea
- Accordion primitive
- Icon wrapper

Do not create a large abstract component library before recurring patterns actually exist.

### `src/data`

Use for structured, repeated, or editorially managed content such as:

- Navigation items
- Course summaries
- Testimonials
- FAQ entries
- Footer links
- Trust points
- Process steps

Prefer typed data modules over copying repeated content into several components.

Do not move one-off content into data files when doing so reduces readability.

### `src/lib`

Use for:

- Shared utilities
- Formatting helpers
- Server-only integrations
- Validation schemas
- Email configuration
- Environment validation
- Metadata helpers

Do not turn `lib` into a miscellaneous dumping ground.

### `src/types`

Use only for genuinely shared TypeScript types.

Keep component-local types near the component when they are not reused.

### `src/styles`

Use only for shared style resources that do not belong in `globals.css` or component classes.

Do not add CSS modules or another styling methodology without a concrete need.

---

## 6. Scope Control

Implement one clearly defined task at a time.

For UI work, normally implement only:

- One section
- One reusable component family
- One route
- One tightly related interaction

Do not generate the entire website in one task unless explicitly instructed.

Do not implement future roadmap items “while you are already there.”

Do not:

- Add unrequested pages.
- Add speculative features.
- Add authentication.
- Add a database.
- Add payment handling.
- Add a CMS.
- Add unnecessary animations.
- Rewrite unrelated files.
- Rename major folders.
- Change approved content without notice.
- Update dependency versions unrelated to the task.

When a requested change creates a reasonable opportunity for future improvement, mention it in the completion summary instead of implementing it automatically.

---

## 7. Implementation Workflow

For every meaningful task, follow this sequence.

### Before editing

1. Read the relevant project documents.
2. Inspect all files directly related to the task.
3. Inspect the relevant reference image when visual work is involved.
4. Check whether an existing component or utility already solves part of the problem.
5. Identify the smallest correct implementation scope.
6. State a concise implementation plan before making changes.

### During implementation

1. Modify only files required by the task.
2. Preserve existing approved behavior.
3. Reuse existing design tokens and primitives.
4. Keep implementation straightforward.
5. Avoid premature abstractions.
6. Handle responsive behavior during initial implementation, not as a later afterthought.
7. Maintain semantic HTML and accessibility.
8. Keep server and client boundaries deliberate.
9. Do not suppress errors instead of fixing their cause.

### After implementation

1. Review the diff.
2. Run relevant checks.
3. Fix errors introduced by the task.
4. Summarize every created, modified, moved, or deleted file.
5. Report validation results honestly.
6. Identify any limitation or unresolved issue.
7. Wait for user review before moving to the next major section.

---

## 8. React and Next.js Rules

Keep components server-rendered unless browser state, event handlers, effects, or browser-only APIs genuinely require a Client Component.

### Server Components

Prefer Server Components for:

- Static marketing sections
- Course content
- Page composition
- Metadata-driven content
- Data loading
- SEO-critical content
- Non-interactive layouts

### Client Components

Add `"use client"` only when required for:

- Interactive mobile navigation
- Accordions
- Form state
- Browser APIs
- Stateful interactions
- Effects
- Event listeners

Keep Client Components as small and low in the component tree as practical.

Do not mark an entire page or large section as a Client Component merely because one small control is interactive.

### Routing and navigation

Use:

- `next/link` for internal navigation
- Native anchor elements for external links when appropriate
- App Router conventions
- Descriptive page metadata
- Stable, readable URLs

Do not use plain `<a>` elements for normal internal navigation without a specific reason.

### Images

Use `next/image` for meaningful raster images whenever appropriate.

Provide:

- Accurate `alt` text for informative images
- Empty `alt=""` for purely decorative images
- Correct dimensions or responsive sizing
- Suitable `sizes`
- Priority loading only for genuinely above-the-fold critical images

Do not mark every image as `priority`.

Do not stretch low-resolution assets.

### Metadata

Every public page should eventually have:

- A unique title
- A useful description
- Canonical handling where required
- Appropriate social metadata
- A clear page-level heading

---

## 9. TypeScript Rules

Use strict, meaningful TypeScript.

Requirements:

- Avoid `any`.
- Avoid unsafe type assertions.
- Prefer explicit domain types for structured data.
- Infer types where inference is clear.
- Use discriminated unions where they simplify real variants.
- Type component props close to the component.
- Share types only when reused across boundaries.
- Validate untrusted external input at runtime.
- Do not confuse TypeScript types with runtime validation.

Never silence a type error solely to make the build pass.

If a third-party package has incomplete types, isolate the workaround and document why it is necessary.

---

## 10. Styling and Design-System Rules

`DESIGN.md` is the visual source of truth.

Do not invent or substitute:

- Brand colors
- Typefaces
- Spacing values
- Radius values
- Shadows
- Button styles
- Card styles
- Icon style
- Motion language

unless the user explicitly approves the change.

### Theme

The product uses one light visual theme only.

Do not add:

- Dark mode
- Theme switching
- System-theme detection
- Dark variants
- Duplicate dark-theme assets

unless explicitly requested later.

### Tailwind

Use Tailwind CSS according to the existing project version and configuration.

Prefer:

- Approved semantic tokens
- Reusable utilities
- Consistent responsive patterns
- Clear class composition
- Theme variables for project-wide design values

Avoid:

- Long collections of unexplained arbitrary values
- Repeated magic numbers
- One-off colors not in the approved system
- Excessive class abstraction
- Creating wrappers solely to shorten class names

An arbitrary value is acceptable when the visual reference genuinely requires it and no approved token represents the value. Repeated arbitrary values should usually become tokens or shared primitives.

### Visual restrictions

Do not introduce:

- Glassmorphism
- Neumorphism
- Heavy gradients
- Glow effects
- Excessive decoration
- Dense pattern backgrounds
- Repetitive mosque or crescent motifs
- Decorative Arabic text
- Dark-theme sections that conflict with the approved direction
- Flashy animation
- Generic SaaS dashboard styling

The design should remain:

- Calm
- Warm
- Premium
- Trustworthy
- Minimal
- Human
- Educational
- Spacious

---

## 11. Reference-Driven UI Implementation

Approved visual references are stored in:

```text
docs/design/references/
```

Before implementing a referenced section:

1. Open and inspect the image.
2. Identify its content hierarchy.
3. Identify section width and alignment.
4. Identify spacing rhythm.
5. Identify image-to-content balance.
6. Identify typography scale.
7. Identify card and button treatment.
8. Determine responsive intent.
9. Compare it with `DESIGN.md`.
10. Implement the approved direction rather than blindly tracing pixels.

Reference images guide:

- Composition
- Hierarchy
- Rhythm
- Density
- Proportion
- Visual tone

They do not override:

- Accessibility
- Semantic HTML
- Mobile usability
- Content accuracy
- Performance
- Approved brand tokens
- Engineering maintainability

Do not reproduce visible mistakes, illegible text, broken proportions, or unsuitable stock content from a reference.

Do not claim pixel-perfect matching unless a careful comparison supports that claim.

---

## 12. Responsive Design Rules

Build mobile-first.

Every UI task must account for:

- Small mobile
- Large mobile
- Tablet
- Laptop
- Wide desktop

Requirements:

- No horizontal overflow.
- No clipped content.
- No unreadably small text.
- No fixed heights that break with real content.
- No desktop-only hover dependency.
- No cramped touch targets.
- No essential information hidden only for visual convenience.
- Navigation must remain usable without a mouse.
- Images must preserve sensible composition at each breakpoint.
- Section spacing should scale intentionally rather than mechanically.

Prefer content-driven sizing over rigid fixed heights.

When desktop and mobile compositions differ significantly, implement the simplest accessible adaptation rather than forcing the desktop layout to shrink.

---

## 13. Accessibility Rules

Accessibility is a baseline requirement, not a final polish task.

Use:

- Semantic landmarks
- Logical heading order
- Descriptive links
- Native controls where possible
- Visible keyboard focus
- Accessible labels
- Sufficient color contrast
- Large enough tap targets
- Meaningful alternative text
- Error messages connected to form fields
- Reduced-motion support where animation exists

Do not:

- Use clickable `<div>` elements for buttons.
- Remove focus outlines without an accessible replacement.
- Rely only on color to communicate state.
- Add ARIA when native HTML already provides the correct semantics.
- Duplicate accessible names.
- Place interactive controls inside other interactive controls.
- Use vague labels such as “Click here.”
- Hide focusable content visually without correct handling.

---

## 14. Content Rules

The website uses English only.

Do not introduce:

- Arabic navigation labels
- Arabic paragraphs
- Decorative Arabic calligraphy
- Machine-generated religious quotations
- Unsupported Quran verses or translations

unless the user explicitly provides or approves them.

### Tone

Content should feel:

- Calm
- Clear
- Warm
- Respectful
- Trustworthy
- Professional
- Human
- Reassuring

Avoid:

- Aggressive sales language
- False urgency
- Unsupported claims
- “Best academy” language
- Guaranteed outcomes
- Exaggerated testimonials
- Generic AI filler
- Corporate jargon
- Childish language unless writing specifically for children

Do not replace approved project copy with generic placeholders.

When copy is missing, clearly mark temporary copy and keep it realistic, concise, and easy to replace.

Do not invent:

- Tutor qualifications
- Student counts
- Years of experience
- Ratings
- Testimonials
- Countries served
- Certifications
- Contact details

Use placeholders only when explicitly identified as placeholders.

---

## 15. Data and Content Separation

Store repeated structured content in `src/data`.

Examples:

- Navigation links
- Course cards
- Process steps
- Benefits
- Testimonials
- FAQs
- Footer groups

Use:

- Stable identifiers
- Meaningful slugs
- Typed objects
- Clear field names
- Predictable ordering

Do not over-engineer a content layer for a single static sentence.

Do not create a CMS abstraction because content might change later.

The project intentionally has no CMS or database at launch.

---

## 16. Forms and Server-Side Work

Do not implement forms until the relevant roadmap phase or explicit user request.

When forms are implemented:

- Use React Hook Form where client-side form state is beneficial.
- Use Zod for shared validation.
- Validate again on the server.
- Treat all client input as untrusted.
- Use Route Handlers or another approved Next.js server pattern.
- Use Cloudflare Turnstile for spam protection.
- Use Resend for email delivery.
- Return clear success and error states.
- Do not expose secrets to the browser.
- Do not log sensitive message content unnecessarily.
- Apply reasonable abuse protection.
- Keep recipient addresses and secrets in environment variables.

Never commit:

- API keys
- Secret tokens
- Private email credentials
- Real `.env.local` files
- Turnstile secret keys

Keep documented variable names in `.env.example`.

---

## 17. Security Rules

Apply secure defaults.

Requirements:

- Never trust browser input.
- Never expose server secrets through `NEXT_PUBLIC_` variables.
- Escape or safely render user-controlled content.
- Avoid raw HTML.
- Avoid `dangerouslySetInnerHTML` unless the content source and sanitization strategy are explicitly approved.
- Validate redirects and URLs.
- Use secure external link attributes where appropriate.
- Do not weaken framework security checks for convenience.
- Do not add broad CORS rules without a concrete requirement.
- Do not leak stack traces or internal implementation details to users.

If a requested feature has security implications, mention them before implementation.

---

## 18. Performance Rules

The website should remain fast and lightweight.

Prefer:

- Server Components
- Static rendering where suitable
- Minimal client JavaScript
- Optimized images
- Localized interactivity
- Built-in Next.js features
- CSS transitions over animation libraries for simple interactions
- Sensible font loading
- Stable layout dimensions

Avoid:

- Large dependency bundles
- Client-rendering static sections
- Unnecessary effects
- Unnecessary context providers
- Multiple icon libraries
- Background videos without approval
- Large unoptimized images
- Loading every image eagerly
- Complex animation libraries for basic hover states

Performance should not come at the expense of accessibility or correct content.

---

## 19. SEO Rules

Public content should be rendered in a search-friendly manner.

Requirements:

- Use semantic headings.
- Keep one clear primary page topic.
- Use descriptive metadata.
- Use readable URL slugs.
- Add meaningful internal links.
- Keep primary content available without client-only rendering.
- Use appropriate image alt text.
- Avoid duplicated page copy.
- Avoid keyword stuffing.
- Preserve the planned information architecture.

Do not generate mass pages or thin SEO content.

Do not add structured data that does not truthfully describe visible page content.

---

## 20. Icons and Assets

Use Lucide React as the default icon library.

Do not install another icon library unless an approved design requirement cannot reasonably be met.

Rules:

- Use icons to support meaning.
- Keep stroke weights visually consistent.
- Use accessible text labels for icon-only controls.
- Avoid excessive decorative icons.
- Avoid mixing filled, outline, and hand-drawn icon styles.
- Reuse approved brand assets from `public/brand/`.

Do not recreate or redraw the approved logo in CSS.

Do not modify brand assets without explicit approval.

---

## 21. Code Quality

Write code that is:

- Clear
- Typed
- Focused
- Maintainable
- Predictable
- Easy to review

Prefer simple composition over clever abstraction.

Avoid:

- Giant components
- Deep prop drilling created by poor composition
- Premature generic systems
- Duplicate logic
- Dead code
- Commented-out old implementations
- Unexplained constants
- Hidden side effects
- Broad catch blocks that discard useful errors

Comments should explain why, not restate obvious code.

Do not refactor unrelated code during a scoped feature task.

---

## 22. Validation Requirements

After meaningful code changes, run:

```bash
pnpm lint
pnpm build
```

Also run any task-specific checks that exist.

For UI work, manually consider:

- Desktop layout
- Tablet layout
- Mobile layout
- Keyboard navigation
- Focus visibility
- Horizontal overflow
- Image behavior
- Long-content behavior
- Empty or missing optional content
- Reduced-motion behavior where relevant

Do not claim that a command passed unless it was actually executed successfully.

If a check cannot run:

1. Explain why.
2. Show the exact error or limitation.
3. Distinguish existing issues from issues introduced by the task.
4. Do not hide or misrepresent failures.

Do not fix unrelated pre-existing warnings unless requested or necessary for the current task.

---

## 23. Git Rules

Do not:

- Connect or change the remote repository without instruction.
- Push automatically.
- Force-push.
- Rewrite history.
- Delete branches.
- Reset user work.
- Commit secrets.
- Commit generated caches.
- Commit build output.
- Commit before the user requests it, unless the current task explicitly includes committing.

Before committing:

1. Review `git status`.
2. Review the diff.
3. Confirm that only intended files changed.
4. Run required validation.
5. Use a clear conventional commit message.

Examples:

```text
chore: configure design tokens
feat: build homepage header
feat: add course overview section
fix: correct mobile navigation focus behavior
docs: add SoulWithQuran project brief
```

Do not combine unrelated work into one commit.

---

## 24. File Safety

Never delete or overwrite a user-provided asset, reference, document, or implementation without explicit justification.

Before replacing a substantial file:

1. Read the existing file fully.
2. Identify whether it contains user-approved work.
3. Preserve relevant content.
4. Describe the intended replacement.

Do not modify:

- Lockfiles manually
- Generated framework output
- `.next/`
- `node_modules/`
- Binary design files

unless the task specifically requires a supported operation.

---

## 25. Roadmap Discipline

`docs/project/ROADMAP.md` defines the implementation order and status.

Do not mark a task as completed unless:

- The requested work is implemented.
- Validation has been performed.
- Known limitations are documented.
- The user has approved it when approval is part of the workflow.

Do not begin later phases automatically.

The normal homepage order is:

1. Design tokens and typography
2. Base UI primitives
3. Header and navigation
4. Hero
5. Trust indicators
6. Course overview
7. How learning works
8. Meet the tutor
9. Why SoulWithQuran
10. Testimonials
11. Pricing and free-trial section
12. FAQ
13. Final CTA
14. Footer
15. Responsive refinement
16. Accessibility review
17. Performance review

Follow the latest approved roadmap if this order changes.

---

## 26. Communication Format

Before implementation, provide:

### Plan

A short explanation of:

- What you inspected
- What you intend to change
- Which files will be affected
- Any important assumption

After implementation, provide:

### Completed

- What was implemented
- What behavior changed

### Files changed

- Created files
- Modified files
- Moved files
- Deleted files

### Validation

- Lint result
- Build result
- Other checks performed

### Notes

- Limitations
- Assumptions
- Suggested next task

Keep updates concise and factual.

Do not claim that the design is “perfect,” “pixel-perfect,” “fully accessible,” or “production-ready” unless the required verification supports that statement.

---

## 27. Decision-Making Rules

When several valid implementations exist, prefer the option that is:

1. Consistent with approved project documents
2. Native to Next.js and the web platform
3. Accessible
4. Easy to maintain
5. Lightweight
6. Easy to understand
7. Appropriate for the current scope

Ask for clarification only when ambiguity would materially affect:

- Product behavior
- Visual direction
- Data handling
- Security
- Public content
- Architecture
- Destructive changes

For small implementation details, make the safest reasonable choice and report it.

---

## 28. Definition of Done

A task is complete only when:

- The requested scope is implemented.
- No unrelated scope was added.
- The implementation follows `PROJECT.md`.
- Visual work follows `DESIGN.md`.
- Relevant references were inspected.
- TypeScript remains correct.
- Accessibility basics are present.
- Responsive behavior was considered.
- No secrets were exposed.
- Lint passes, unless an external blocker is documented.
- Production build passes, unless an external blocker is documented.
- The diff contains only intentional changes.
- The completion summary is accurate.
- The agent stops and waits for the next instruction.

---

## 29. Final Principle

Build SoulWithQuran deliberately, one approved layer at a time.

Prioritize:

- Trust before persuasion
- Clarity over decoration
- Human connection over corporate presentation
- Quality over quantity
- Accessibility over visual shortcuts
- Maintainability over cleverness
- Real progress over unnecessary documentation
