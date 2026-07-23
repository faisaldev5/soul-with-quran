# ROADMAP.md

**SoulWithQuran implementation roadmap**
**Version:** 1.0
**Status:** Approved execution plan

## 1. Purpose

This document is the official implementation roadmap for SoulWithQuran. It explains what should be built, the order in which it should be built, why that order matters, and the conditions that must be met before a phase can begin or be considered complete.

SoulWithQuran is a premium, tutor-led online Quran education marketing and content website for English-speaking families and adults. The website exists to build trust, explain the teaching experience, introduce the tutor, present courses, support SEO, and convert qualified visitors into free-trial bookings.

This is an execution plan, not a loose list of ideas. Implementation must follow the active phase. Work must not jump ahead to a later phase simply because its UI appears straightforward, and future features must not be introduced into the MVP without explicit scope approval.

Every phase records:

- **Priority:** how important the phase is to the product and delivery sequence.
- **Estimated Effort:** relative implementation size, not a promise of calendar duration.
- **Blocking:** the work or decision that must be complete before the phase can begin.
- **Dependencies:** related phases, content, assets, services, or decisions required for reliable completion.

### Priority scale

- **Critical:** Required for the product's core purpose, safety, launch path, or a phase dependency.
- **High:** Important to trust, usability, discoverability, or launch quality, but not the first blocker.
- **Medium:** Valuable planned work that should follow the higher-impact product and quality requirements.
- **Low:** Useful refinement or optional improvement that should not delay a committed milestone.

### Effort scale

- **Small:** A focused change with limited surface area and few dependencies.
- **Medium:** A related group of changes across several files or one meaningful workflow.
- **Large:** A cross-cutting feature, route family, integration, or audit requiring substantial validation.

Effort estimates assume one experienced engineer working within the existing repository, with approved copy and assets available when noted. They should be revisited if scope or integrations change.

## 2. Development Principles

### One phase at a time

Only the current active phase should be implemented. A phase may contain several related deliverables, but work should stop for review before moving to the next major phase.

### Never skip dependencies

Do not implement a page that depends on missing tokens, content, assets, validation, or infrastructure. Record the blocker and resolve it through the current phase or an explicit project decision.

### Finish before expanding

Complete the acceptance criteria and definition of done for the current scope before adding refinements, future features, or speculative abstractions.

### Quality over speed

The site is trust-sensitive. Clear content, accurate claims, accessible interaction, responsive layout, and maintainable code matter more than the number of sections shipped in a single pass.

### Mobile-first

Design and implement for small mobile first, then adapt to large mobile, tablet, laptop, and wide desktop. No phase is complete if it works only at desktop widths.

### Accessibility-first

Semantic HTML, keyboard support, visible focus, sufficient contrast, readable type, accessible forms, and reduced-motion support are implementation requirements in every phase, not only Phase 11.

### SEO-friendly by construction

Keep important content server-rendered, use semantic headings, choose readable URLs, create useful internal links, and avoid thin or duplicated pages. SEO work should support human usefulness rather than replace it.

### Reuse components after patterns are proven

Use existing primitives before creating new ones. Extract a reusable component when a pattern genuinely recurs, but do not create a large abstraction layer for a single page or a hypothetical future use case.

### Keep architecture clean

Use the existing Next.js App Router, React, TypeScript, Tailwind CSS, pnpm, and Lucide React stack. Prefer Server Components and keep client-side state localized to interactions that require it.

### Preserve approved content and brand decisions

Do not invent tutor qualifications, testimonials, student counts, ratings, countries served, religious quotations, pricing claims, or contact details. Use `DESIGN.md` as the visual source of truth and `PROJECT.md` as the product source of truth.

### Validate proportionally

Run relevant checks after each meaningful phase. Code phases require linting and a production build. UI phases also require responsive, keyboard, focus, contrast, image, long-content, and reduced-motion review where relevant.

## 3. Current Project Status

### Repository foundation

The repository foundation is in place. It contains a Next.js App Router application, TypeScript configuration, Tailwind CSS integration, ESLint, pnpm configuration, and the initial application shell.

### Source-of-truth documents

| Document | Role | Status |
| --- | --- | --- |
| `AGENTS.md` | Permanent engineering and collaboration rules for coding agents. | Present and authoritative. |
| `docs/project/PROJECT.md` | Product vision, scope, audience, teaching model, and business goals. | Present and authoritative. |
| `docs/project/INFORMATION_ARCHITECTURE.md` | Approved sitemap, navigation, user journeys, page architecture, content models, CTA placement, and internal-linking structure. | Present and authoritative for structure. |
| `DESIGN.md` | Visual source of truth for brand, tokens, components, accessibility, and responsive behavior. | Approved. |
| `docs/project/ROADMAP.md` | Implementation sequence, dependencies, acceptance criteria, and completion rules. | This document; approved execution plan. |
| `README.md` | Repository orientation and local development commands. | Present. |

### Current implementation status

- The project is at the foundation stage with a minimal page shell.
- Design decisions and brand tokens are documented, but the design system has not yet been implemented as reusable code.
- The public marketing pages, forms, blog, SEO system, and production polish are not yet implemented.
- No database, authentication, payment system, student dashboard, LMS, CMS, or multi-tenant architecture should be introduced for the MVP.
- Phase 0 is complete. Phase 1 and Phase 2 are complete after implementation and review approval. Phase 3 is the active implementation phase.

## 4. Milestone Overview

| Phase | Name | Priority | Estimated Effort | Status | Blocking / Dependencies |
| --- | --- | --- | --- | --- | --- |
| 0 | Repository Foundation | Critical | Small | Completed | None; repository and source documents established. |
| 1 | Design System | Critical | Large | Completed | Phase 0, approved `DESIGN.md`, available brand assets, and implemented primitives. |
| 2 | Core Layout | High | Medium | Completed | Phase 1 and approved navigation/content structure. |
| 3 | Homepage | Critical | Large | In Progress | Phases 1–2, approved homepage copy, tutor content, and imagery. |
| 4 | Courses | High | Large | Pending | Phases 1–2, course content, and approved course assets. |
| 5 | Tutor | High | Medium | Pending | Phases 1–2 and verified tutor copy, qualifications, and photography. |
| 6 | Free Trial | Critical | Large | Pending | Phase 2, approved form fields, recipient workflow, Resend, and Turnstile decisions. |
| 7 | Contact | High | Medium | Pending | Phase 2 and reusable form/server validation patterns from Phase 6. |
| 8 | Blog | Medium | Large | Pending | Phase 2, MDX/content workflow decision, and initial editorial content. |
| 9 | SEO | High | Medium | Pending | Public routes and content from Phases 3–8 sufficiently stable for a site-wide audit. |
| 10 | Performance | High | Medium | Pending | Main routes, images, fonts, and client behavior implemented. |
| 11 | Accessibility | Critical | Medium | Pending | All MVP routes and interactions implemented; baseline accessibility remains required earlier. |
| 12 | Final Polish | High | Large | Pending | Phases 1–11 complete, approved final copy/assets, and deployment readiness. |

The phase sequence is intentionally conservative: foundations establish consistency, core layout establishes site-wide structure, content routes establish the public experience, and cross-cutting audits follow stable implementation. Phase 9–11 are audits and refinements, not permission to defer basic SEO, accessibility, or performance practices from earlier phases.

## 5. Phase 0 — Repository Foundation

**Priority:** Critical
**Estimated Effort:** Small
**Blocking:** Nothing. This phase establishes the repository and documentation required by every later phase.

**Status:** Completed

### Purpose

Create a predictable, documented starting point so future agents can make small, reviewable changes within the approved stack and product scope.

### Dependencies

None.

### Deliverables

- Next.js App Router project skeleton.
- React and TypeScript configuration.
- Tailwind CSS and PostCSS configuration.
- ESLint configuration and a working pnpm command set.
- Repository structure for `src/app`, components, data, libraries, types, styles, public assets, and docs.
- `.env.example` without secrets.
- `AGENTS.md` engineering instructions.
- `docs/project/PROJECT.md` product overview.
- Approved root-level `DESIGN.md` visual source of truth.
- This `docs/project/ROADMAP.md` execution plan.
- Git hygiene that excludes generated output, dependencies, secrets, and local environment files.

### Acceptance Criteria

- The project can be installed and run using pnpm commands documented in `README.md`.
- The App Router renders a minimal page without introducing product features outside the current scope.
- TypeScript and ESLint configuration are present and understandable.
- The source-of-truth documents agree on the product being a tutor-led marketing/content website.
- No authentication, database, payment, LMS, dashboard, CMS, or multi-tenant architecture has been added.

### Definition of Done

- Repository structure is present and readable.
- Required project and design documents are available.
- No secrets or generated build output are committed.
- `pnpm lint` passes for the foundation, or any pre-existing blocker is documented.
- `pnpm build` passes for the foundation, or any pre-existing blocker is documented.

## 6. Phase 1 — Design System

**Priority:** Critical
**Estimated Effort:** Large
**Blocking:** Phase 0 must be complete; `DESIGN.md` must be approved; approved logo and image assets must be available before implementing asset-dependent primitives.

**Status:** Completed

### Purpose

Turn the approved visual direction into a small, reusable, accessible foundation for every public route. This phase prevents page-specific styling from drifting away from the SoulWithQuran brand.

### Dependencies

- Phase 0 repository structure and tooling.
- `DESIGN.md` color, typography, spacing, radius, shadow, icon, motion, accessibility, and responsive rules.
- Approved assets in `public/brand/` when logo primitives are implemented.
- Existing Tailwind version and configuration.

### Deliverables

- Semantic color tokens for Deep Navy, Soft Sage, Warm Gold, warm off-white, surface white, Charcoal, muted gray, and status colors.
- Implementation scales for Primary, Neutral, Sage, and Gold derived from the approved core colors.
- Plus Jakarta Sans heading and Inter body typography strategy, with documented fallbacks.
- Spacing tokens based on the 8px system.
- Container, grid, and responsive layout primitives.
- Button variants and states, including focus-visible and disabled states.
- Card, badge, alert, and section-heading primitives.
- Input, textarea, checkbox, radio, and validation presentation primitives.
- Logo presentation primitive that uses approved repository assets without recreating the mark.
- Lucide icon wrapper or conventions with consistent sizes and stroke weights.
- Focus ring, reduced-motion, and interaction-state conventions.
- Base typography and page-canvas styles without adding dark mode.

### Acceptance Criteria

- All core brand values match `DESIGN.md` exactly.
- No one-off colors, arbitrary repeated spacing values, or competing radius systems are introduced.
- Buttons, inputs, cards, and focus states meet the documented target sizes and contrast requirements.
- The design system works at small mobile, large mobile, tablet, laptop, and wide desktop widths.
- Primitives are semantic and do not require a large client-side bundle.
- The logo is loaded from an approved asset rather than redrawn with text, icons, or CSS.
- Reduced-motion behavior is defined for any motion introduced in this phase.

### Definition of Done

- Repeated visual decisions are represented by understandable tokens or focused primitives.
- Primitive states are reviewed with keyboard navigation and visible focus.
- No page-specific feature code is mixed into the design-system layer.
- `pnpm lint` passes.
- `pnpm build` passes.
- The changed files and any design decisions are documented for review.

## 7. Phase 2 — Core Layout

**Priority:** High
**Estimated Effort:** Medium
**Blocking:** Phase 1 must be complete; navigation labels, primary conversion destination, legal-link requirements, and approved logo assets must be known.

**Status:** Completed

### Purpose

Establish the site-wide structure that every public page can reuse: header, navigation, page shell, container behavior, footer, and framework-level loading and error states.

### Dependencies

- Phase 1 design primitives and tokens.
- Navigation information architecture from `PROJECT.md` and approved content.
- Approved full logo and compact/reversed logo variants where applicable.
- Confirmed primary CTA destination: the dedicated `/free-trial` route for the custom free-trial enquiry form.

### Deliverables

- Site header with logo, primary navigation, and one clear primary CTA.
- Accessible mobile navigation with keyboard operation, focus management, and predictable close behavior.
- Container and page-shell composition using the documented maximum width and gutters.
- Footer with approved Deep Navy treatment, meaningful link groups, and legal-link placeholders only where approved.
- Sticky-header behavior with restrained border/shadow treatment.
- Shared responsive layout rules for pages and sections.
- Root loading state that preserves layout stability.
- Root error state that provides a useful recovery path without leaking internal details.
- Not-found page with a clear route back to the main site.
- Base metadata and language configuration for the application shell.

### Acceptance Criteria

- Header and footer remain usable at every documented breakpoint.
- Mobile navigation does not depend on hover and does not trap keyboard users unexpectedly.
- The logo uses approved assets and remains legible on its actual surface.
- Sticky navigation does not obscure focused content or create excessive visual weight.
- The page shell has no horizontal overflow and supports long page titles and link labels.
- Loading, error, and not-found states are accessible, calm, and consistent with the brand.
- All internal navigation uses Next.js routing conventions.

### Definition of Done

- Layout primitives are reused by routes rather than copied into page files.
- Header, footer, loading, error, and not-found states are reviewed on mobile and desktop.
- Keyboard focus order and visible focus are verified.
- `pnpm lint` passes.
- `pnpm build` passes.

## 8. Phase 3 — Homepage

**Priority:** Critical
**Estimated Effort:** Large
**Blocking:** Phases 1–2 must be complete; approved homepage copy, tutor information, course summaries, testimonials, pricing/trial decisions, and suitable imagery must be available.

**Status:** In Progress

### Purpose

Build the primary trust and conversion journey. The homepage should help a visitor understand the teaching model, see evidence of care and credibility, explore learning paths, and book a free trial without feeling pressured.

### Dependencies

- Phase 1 design system.
- Phase 2 header, footer, shell, and error/loading states.
- `PROJECT.md` homepage structure and conversion goals.
- Verified project copy and approved visual assets.
- No unsupported testimonials, qualifications, ratings, or outcomes.

### Deliverables

- A complete homepage route composed from the approved section sequence below.
- Responsive, accessible integration of each homepage section into the shared page shell.
- Clear primary and secondary conversion paths without speculative content or features.

### Homepage sections

#### Hero

**Purpose:** Explain the tutor-led offer and primary value proposition immediately.

**Dependencies:** Phase 2 shell, approved hero copy, approved tutor or learning image, and a confirmed free-trial destination.

**Deliverables:** Page-level H1, concise supporting copy, primary free-trial CTA, secondary exploration path where useful, and responsive hero media.

**Acceptance Criteria:** The teaching model and audience are clear without scrolling; the CTA has a descriptive label; the composition works without relying on the image; mobile reading order is logical.

#### Trust indicators

**Purpose:** Reduce uncertainty with truthful, scannable evidence about the learning experience.

**Dependencies:** Approved trust claims and verified source content.

**Deliverables:** A restrained set of trust points covering personalization, structured lessons, flexibility, progress support, or other approved evidence.

**Acceptance Criteria:** Each indicator is specific and supportable; no invented ratings or numerical claims are used; icons support meaning rather than decorate every item.

#### Courses overview

**Purpose:** Help visitors identify an appropriate learning path without needing to understand the full site structure.

**Dependencies:** Approved course list and summaries from `PROJECT.md`.

**Deliverables:** Course overview cards or links for Qaida, Nazra, Tajweed, Hifz, and Islamic Studies where content is approved.

**Acceptance Criteria:** Course names and descriptions are accurate; each item has a meaningful next step; the layout remains readable at mobile widths; later course pages can be linked without changing the card contract.

#### How learning works

**Purpose:** Make the class experience understandable before the visitor enquires.

**Dependencies:** Verified teaching process and class details.

**Deliverables:** A concise sequence covering enquiry/trial, matching or goal-setting, live lessons, feedback, and next steps as approved.

**Acceptance Criteria:** The sequence communicates primarily one-to-one learning while allowing carefully matched small groups where appropriate; it never suggests a large classroom academy or marketplace; each step has a clear relationship to the next.

#### Meet the tutor

**Purpose:** Build human trust by showing who teaches and how they approach learners.

**Dependencies:** Approved tutor biography, qualifications, photography, and teaching philosophy.

**Deliverables:** Tutor introduction, approved portrait or teaching image, teaching approach, and link to the future tutor page.

**Acceptance Criteria:** No claim is presented without an approved source; the copy feels personal and professional; imagery remains authentic and accessible; the section leads naturally to more detail.

#### Benefits / Why SoulWithQuran

**Purpose:** Connect product qualities to the needs of parents and adult learners.

**Dependencies:** Approved value proposition and benefit claims.

**Deliverables:** Focused benefits covering personal attention, patience, structure, flexibility, progress, and trust where approved.

**Acceptance Criteria:** Benefits describe learner value rather than generic marketing adjectives; the section does not duplicate the trust indicators word-for-word; content remains concise and scannable.

#### Testimonials

**Purpose:** Provide social proof from real, approved learner or parent experiences.

**Dependencies:** Approved testimonials, attribution rules, and permissions.

**Deliverables:** Testimonial cards or a restrained testimonial composition with approved attribution and context.

**Acceptance Criteria:** Every quote is truthful and approved; attribution is not fabricated; no star ratings or outcomes are implied without evidence; the component remains readable and accessible.

#### Pricing and free trial

**Purpose:** Explain the available next step and any approved price or class details without creating pressure.

**Dependencies:** Approved price, duration, frequency, inclusions, trial terms, and booking destination.

**Deliverables:** Pricing/trial explanation, inclusion summary, primary booking CTA, and concise reassurance about what happens next.

**Acceptance Criteria:** Prices and terms are accurate; there is no fake urgency or crossed-out pricing; the primary CTA is visually clear; sensitive or variable details are not hard-coded into misleading promises.

#### FAQ

**Purpose:** Resolve common objections and practical questions before enquiry.

**Dependencies:** Approved FAQ content and any form/trial policy decisions.

**Deliverables:** Accessible accordion or readable FAQ layout with questions about class format, learner suitability, scheduling, trial process, and next steps where approved.

**Acceptance Criteria:** Answers are available to keyboard and assistive-technology users; important information is not exclusively hidden behind interaction; content does not make unsupported claims.

#### Final CTA

**Purpose:** Give visitors who have reached the end of the page a clear, calm route to action.

**Dependencies:** Confirmed booking or enquiry destination and approved CTA copy.

**Deliverables:** A focused CTA block with a clear explanation and primary action.

**Acceptance Criteria:** The CTA does not introduce a new claim or competing objective; it has sufficient contrast and touch size; it is distinct from but consistent with the hero CTA.

#### Footer integration

**Purpose:** Close the homepage with orientation, supporting navigation, and required legal paths.

**Dependencies:** Phase 2 footer implementation and approved link groups.

**Deliverables:** Homepage integration and final content review of the shared footer.

**Acceptance Criteria:** Footer links are accurate, the approved navy surface is preserved, and no duplicate or placeholder navigation is exposed unintentionally.

### Acceptance Criteria

- The homepage follows the approved order in `PROJECT.md`.
- One clear H1 and a coherent heading hierarchy are present.
- The primary conversion goal, Book a Free Trial, is clear without aggressive repetition.
- The one-to-one teaching model is understandable, with carefully matched small groups described only where appropriate.
- All public copy, testimonials, pricing, tutor information, and course claims are approved or explicitly marked as temporary.
- Every section works at small mobile, tablet, and desktop widths without horizontal overflow.
- Static content is server-rendered and images use appropriate optimization and alt text.
- Keyboard navigation, focus-visible treatment, contrast, and reduced-motion behavior are reviewed.

### Definition of Done

- Every homepage section has been reviewed against `DESIGN.md`.
- The page has no duplicated content or speculative features.
- Internal links point to real routes or approved temporary destinations.
- `pnpm lint` passes.
- `pnpm build` passes.
- Responsive and accessibility review findings are resolved or documented.

## 9. Phase 4 — Courses

**Priority:** High
**Estimated Effort:** Large
**Blocking:** Phases 1–2 must be complete; course goals, audience, descriptions, outcomes, imagery, and approved URL structure must be available.

**Status:** Pending

### Purpose

Create a clear learning-path structure that supports both conversion and long-term search. Visitors should be able to understand the available courses, choose a relevant path, and navigate between related content without encountering thin or duplicated pages.

### Dependencies

- Phase 1 design system and Phase 2 shell.
- Course list in `PROJECT.md`: Qaida, Nazra, Tajweed, Hifz, and Islamic Studies.
- Approved course copy, intended audience, teaching scope, and visual assets.
- Final or provisional readable slugs.

### Deliverables

- Courses overview page.
- Reusable course-detail template.
- Individual course pages for approved courses.
- Shared course metadata and content types.
- Course cards and related-course links.
- Internal links from homepage, tutor content, FAQ, and blog where contextually useful.
- Course-specific FAQs or next-step blocks where approved.
- SEO-friendly headings, metadata, and canonical route behavior.

### Acceptance Criteria

- Each course page has a distinct purpose and is not a lightly modified copy of another page.
- Course descriptions are understandable to parents and adult learners without unnecessary terminology.
- The page explains suitability, class approach, and next step only using approved information.
- Course templates support missing optional content without broken layout or empty labels.
- Internal links are descriptive and useful rather than keyword-stuffed.
- Course pages remain server-rendered, responsive, accessible, and visually consistent.

### Definition of Done

- Overview and detail routes use reusable composition without hiding important content behind client-only rendering.
- Metadata and URL decisions are recorded for every published course.
- Images have appropriate dimensions, sizes, and alt text.
- `pnpm lint` passes.
- `pnpm build` passes.
- A content review confirms no unsupported course claims or duplicated SEO copy.

## 10. Phase 5 — Tutor

**Priority:** High
**Estimated Effort:** Medium
**Blocking:** Phases 1–2 must be complete; verified tutor biography, qualifications, teaching philosophy, approved portrait assets, and permitted trust claims must be available.

**Status:** Pending

### Purpose

Make the tutor-led nature of the service tangible. The page should show the person behind the teaching without becoming a personal résumé, unsupported authority claim, or generic academy profile.

### Dependencies

- Phase 1 design system and Phase 2 core layout.
- Verified tutor content and approved photography.
- Clear distinction between confirmed qualifications and general teaching approach.
- Homepage Meet the Tutor link from Phase 3 may be integrated when available, but Phase 3 is not a technical blocker.

### Deliverables

- Tutor profile page.
- Teaching philosophy section.
- Qualifications and experience section using only verified claims.
- Teaching process and learner-support explanation.
- Trust signals that can be substantiated.
- Related links to courses, FAQ, and free-trial path.

### Acceptance Criteria

- The page feels human, calm, and credible rather than corporate or boastful.
- Qualifications are precise and sourced from approved project content.
- Photography is authentic, respectful, and optimized for mobile crops.
- The page communicates personal attention and one-to-one learning without implying a marketplace or large academy.
- The tutor page has one clear next step and useful links to relevant learning paths.

### Definition of Done

- No invented biography, qualification, country, rating, or student result appears.
- Content and image alt text are reviewed for accuracy and dignity.
- Responsive, keyboard, focus, and contrast checks are complete.
- `pnpm lint` passes.
- `pnpm build` passes.

## 11. Phase 6 — Free Trial

**Priority:** Critical
**Estimated Effort:** Large
**Blocking:** Phase 2 must be complete; the approved form fields, recipient workflow, success/error copy, Resend configuration, Cloudflare Turnstile configuration, optional Cal.com scheduling step, privacy requirements, and environment-variable names must be decided.

**Status:** Pending

### Purpose

Implement the primary conversion flow for booking or requesting a free trial while protecting user data, preventing abuse, and giving visitors clear feedback.

### Dependencies

- Phase 1 form primitives and Phase 2 page shell.
- Dedicated `/free-trial` route with a custom enquiry form.
- Approved field list and validation rules.
- Route Handler or approved server-side submission pattern.
- Resend account and sender/recipient decisions.
- Cloudflare Turnstile site/secret configuration and privacy review.
- Approved optional Cal.com scheduling link for the post-enquiry next step.
- Approved success, failure, and recovery copy.

### Deliverables

- Dedicated `/free-trial` booking/enquiry page.
- Accessible booking form with visible labels and field-level validation.
- Client-side form structure and validation through React Hook Form and Zod where appropriate.
- Shared runtime validation using the approved Zod strategy when dependencies are approved.
- Server-side validation that treats all browser input as untrusted.
- Spam protection with Cloudflare Turnstile.
- Email delivery through Resend without exposing secrets to the browser.
- Optional approved Cal.com scheduling link after a successful enquiry.
- WhatsApp as a secondary direct-enquiry option.
- No payment or account creation.
- Clear success state and next-step explanation.
- Clear recoverable error state that preserves entered values where safe.
- Reasonable abuse protection and non-sensitive server logging.
- Form metadata and conversion tracking only if explicitly approved.

### Acceptance Criteria

- Required and optional fields are clear.
- Invalid input produces helpful, accessible messages connected to the relevant controls.
- Validation runs on the server even when client-side validation is present.
- Secrets are server-only and no sensitive content is unnecessarily logged.
- Turnstile failures, email delivery failures, and unexpected server errors produce safe user-facing states.
- The form works by keyboard, supports reduced motion, and has sufficient contrast and target sizes.
- A successful submission clearly explains what happens next without making unsupported timing promises.

### Definition of Done

- Form handling has been tested with valid, invalid, empty, oversized, and unexpected input.
- Spam-protection and email configuration are documented without committing secrets.
- Error states do not leak stack traces or internal details.
- Accessibility checks cover labels, descriptions, errors, focus movement, and success state.
- `pnpm lint` passes.
- `pnpm build` passes.

## 12. Phase 7 — Contact

**Priority:** High
**Estimated Effort:** Medium
**Blocking:** Phase 2 must be complete; Phase 6's approved form validation and server-submission patterns must be reusable; contact email, WhatsApp destination, and privacy copy must be confirmed.

**Status:** Pending

### Purpose

Provide a lower-commitment route for visitors who have questions or are not ready to book a trial, while keeping the enquiry experience trustworthy and operationally simple.

### Dependencies

- Phase 2 core layout.
- Reusable field, validation, and submission patterns from Phase 6.
- Approved contact email and WhatsApp link.
- Approved contact form fields, response expectations, and privacy text.
- FAQ and course routes for useful internal links.

### Deliverables

- Contact page.
- Contact form using approved validation and spam-protection patterns.
- WhatsApp enquiry action with an accessible label and safe external-link behavior where applicable.
- Email contact path.
- Links to relevant FAQ, courses, tutor, and free-trial content.
- Success, error, and fallback states.

### Acceptance Criteria

- Visitors can choose between form, WhatsApp, email, and relevant self-service content without confusion.
- Contact destinations are real and approved before launch.
- Form errors and success states are as clear and safe as the free-trial flow.
- External links are labeled appropriately and do not expose private data.
- The page does not duplicate the free-trial page or create competing primary actions.

### Definition of Done

- Form and external-contact paths are tested on mobile and desktop.
- Validation, spam protection, success, and failure behaviors are reused rather than copied.
- Accessibility and security checks are complete.
- `pnpm lint` passes.
- `pnpm build` passes.

## 13. Phase 8 — Blog

**Priority:** Medium
**Estimated Effort:** Large
**Blocking:** Phase 2 must be complete; the MDX/content workflow, editorial ownership, initial articles, categories, author information, image policy, and publishing metadata must be decided.

**Status:** Pending

### Purpose

Create a useful educational content platform that supports trust, parent/adult learner education, and long-term organic discovery without producing thin pages for search engines.

### Dependencies

- Phase 1 typography, content, card, and layout primitives.
- Phase 2 header, footer, shell, loading, and error states.
- Approved MDX implementation and content conventions.
- Editorially reviewed article content and image assets.
- Metadata, category, slug, and internal-linking rules.

### Deliverables

- MDX content structure and frontmatter contract.
- Blog listing page with useful category or topic navigation.
- Article page template with readable long-form typography.
- Article metadata, author attribution, date, and updated-date behavior where approved.
- Categories or topic taxonomy that reflects real content rather than keyword variants.
- Related-content and contextual internal links.
- Article image handling, captions, and alt-text guidance.
- Empty, not-found, and missing-content states.

### Acceptance Criteria

- Articles are useful, original, accurate, and written in the approved English tone.
- Long-form content remains readable at mobile and desktop widths.
- MDX content is safe and does not require unsafe raw HTML by default.
- Categories and related links help the reader rather than overwhelm the page.
- Article pages expose a clear next step without interrupting reading.
- Draft or missing content is not accidentally published as a public page.

### Definition of Done

- At least the approved initial content set is available and reviewed.
- Article routes have stable, readable slugs and metadata inputs.
- Images, headings, links, code where relevant, and quotations are accessible and styled consistently.
- `pnpm lint` passes.
- `pnpm build` passes with the approved content set.

## 14. Phase 9 — SEO

**Priority:** High
**Estimated Effort:** Medium
**Blocking:** Public routes and core content from Phases 2–8 must be implemented or explicitly excluded; page titles, descriptions, canonical URL strategy, site identity, and truthful schema inputs must be approved.

**Status:** Pending

### Purpose

Make the public website discoverable, understandable, and technically coherent for search engines while preserving the human reading experience and approved information architecture.

### Dependencies

- Stable public routes from the homepage, courses, tutor, free trial, contact, and blog work.
- Approved site name, description, social image, canonical domain, and business/contact details.
- Visible page content that truthfully supports any structured data.
- Deployment domain decision for canonical and sitemap URLs.

### Deliverables

- Unique page metadata for every public route.
- Open Graph and social metadata.
- Canonical URL handling where required.
- `robots.txt` and sitemap generation.
- Schema/structured data only for visible, truthful content.
- Semantic heading and landmark audit.
- Internal-linking audit across courses, tutor, blog, FAQ, contact, and trial routes.
- 404 and redirect behavior for removed or changed routes where needed.
- Search-friendly image alt text and dimensions.

### Acceptance Criteria

- Each public page has one clear primary topic, unique title, useful description, and readable URL.
- Canonicals, sitemap, robots, and Open Graph values point to the intended production domain.
- Structured data does not claim ratings, prices, organizations, people, or services that the visible page does not support.
- Primary content is available without client-only rendering.
- Internal links use descriptive labels and avoid keyword stuffing.
- No mass-generated, duplicate, or thin pages are introduced.

### Definition of Done

- Metadata and technical SEO are tested on representative route types.
- Social previews and canonical values are reviewed in the production-like environment.
- Sitemap and robots output are valid and exclude non-public routes.
- `pnpm lint` passes.
- `pnpm build` passes.
- Remaining SEO limitations are documented rather than hidden.

## 15. Phase 10 — Performance

**Priority:** High
**Estimated Effort:** Medium
**Blocking:** Main MVP routes, images, fonts, and client interactions must be implemented; production-like assets and a deployable environment must be available for meaningful measurement.

**Status:** Pending

### Purpose

Keep the marketing website fast, lightweight, stable, and pleasant on mobile networks and lower-powered devices.

### Dependencies

- Implemented routes and representative content.
- Approved image inventory and image dimensions.
- Final or near-final font loading strategy.
- Access to a production-like build and performance measurement environment.

### Deliverables

- Image optimization, responsive sizing, and appropriate loading priorities.
- Font loading review and prevention of avoidable layout shift.
- Bundle-size and client-JavaScript review.
- Code splitting or lazy loading where it provides a measurable benefit.
- Caching and static-rendering review.
- Removal of unused dependencies, effects, and duplicated client logic.
- Core Web Vitals review on representative mobile and desktop routes.
- Performance notes for future content and image additions.

### Acceptance Criteria

- Above-the-fold content does not wait on non-critical images or client JavaScript.
- Images have stable dimensions and do not create avoidable layout shift.
- Static marketing content remains server-rendered wherever possible.
- No large dependency has been introduced for a small interaction.
- Loading behavior remains accessible and does not hide important content.
- Performance issues are measured and prioritized rather than optimized by guesswork.

### Definition of Done

- A production build has been measured on representative routes.
- Highest-impact performance issues are resolved or documented with an owner and reason.
- Core Web Vitals and image/font behavior have been reviewed at mobile and desktop widths.
- `pnpm lint` passes.
- `pnpm build` passes.

## 16. Phase 11 — Accessibility

**Priority:** Critical
**Estimated Effort:** Medium
**Blocking:** All MVP routes and interactions must exist in a reviewable state. Baseline accessibility must already be present in every prior phase; this phase is the structured site-wide audit and remediation pass.

**Status:** Pending

### Purpose

Verify that the complete MVP can be understood and operated by users with different access needs, input methods, devices, and motion preferences.

### Dependencies

- Completed or reviewable implementations from Phases 1–10.
- Representative content including long headings, form errors, long FAQ answers, images, and empty states.
- Keyboard, zoom, screen-reader, reduced-motion, and contrast testing capability.
- Approved focus treatment and semantic interaction patterns from `DESIGN.md`.

### Deliverables

- Keyboard navigation audit across all routes and interactive controls.
- ARIA and native-semantics review.
- Focus-visible and focus-order verification.
- Screen-reader review of navigation, headings, landmarks, forms, accordions, dialogs, and status messages.
- Contrast review for text, borders, buttons, focus rings, status states, and imagery overlays.
- Reduced-motion review for all transitions, accordions, navigation, loading, and page effects.
- Touch-target, zoom, reflow, and text-resizing review.
- Accessible image alt-text and decorative-image review.
- Remediation of confirmed issues and documented known limitations.

### Acceptance Criteria

- All primary flows can be completed by keyboard without a mouse.
- Focus is visible, logical, and never removed without an approved replacement.
- Forms expose labels, descriptions, errors, required states, and success states correctly.
- Headings and landmarks form a meaningful document outline.
- Color is not the only way to understand state or meaning.
- Content remains usable at increased text size and small viewport widths.
- Reduced-motion preferences are respected.
- No critical or serious accessibility issue remains undocumented.

### Definition of Done

- Accessibility findings are recorded and resolved or explicitly accepted with rationale.
- Representative routes and all primary conversion flows have been tested.
- `pnpm lint` passes.
- `pnpm build` passes.
- The final handoff includes known limitations and suggested follow-up work.

## 17. Phase 12 — Final Polish

**Priority:** High
**Estimated Effort:** Large
**Blocking:** Phases 1–11 must be complete; final approved copy, assets, legal links, deployment configuration, and stakeholder review availability must be in place.

**Status:** Pending

### Purpose

Prepare the MVP for a deliberate public launch by resolving cross-page inconsistencies, content gaps, responsive issues, and deployment risks that remain after feature implementation and audits.

### Dependencies

- All MVP routes and primary interactions implemented.
- Performance and accessibility findings from Phases 10–11.
- Final approved copy, testimonials, pricing/trial terms, tutor content, and image assets.
- Production domain, environment variables, sender identities, and legal pages confirmed.
- Vercel deployment and DNS plan available for verification.

### Deliverables

- Subtle, purposeful animations and micro-interactions aligned with `DESIGN.md`.
- Copy review for clarity, accuracy, tone, grammar, and unsupported claims.
- Spacing, typography, color, radius, shadow, and component-consistency review.
- Responsive review across small mobile, large mobile, tablet, laptop, and wide desktop.
- Cross-browser smoke testing for supported modern browsers.
- Link, form, image, metadata, sitemap, robots, and error-state QA.
- Final security review for secrets, redirects, external links, form input, and error exposure.
- Deployment checklist covering Vercel, environment variables, domain, DNS, email, Turnstile, and rollback awareness.
- Launch handoff that distinguishes complete MVP behavior from future roadmap items.

### Acceptance Criteria

- The public experience is visually consistent with `DESIGN.md` and product-consistent with `PROJECT.md`.
- Every primary CTA reaches a real, tested destination.
- No placeholder copy, broken link, missing image, or unapproved claim remains on launch routes.
- Responsive, accessibility, SEO, and performance findings are resolved or documented.
- Production configuration does not expose secrets.
- No future feature has been included accidentally.
- Stakeholder review has approved the launch scope.

### Definition of Done

- Final QA checklist is complete.
- `pnpm lint` passes.
- `pnpm build` passes.
- Production-like smoke test passes.
- Deployment and rollback notes are available.
- The user has reviewed and approved the current milestone before work proceeds beyond the MVP roadmap.

## 18. Future Roadmap

The following ideas are intentionally outside the MVP. They require a new scope decision, updated product documentation, security review, and a new roadmap phase before implementation.

### Possible future capabilities

- Student dashboard.
- Student authentication and account management.
- Online payments and subscriptions.
- Tutor dashboard.
- Learner progress tracking.
- Certificates or completion records.
- Parent dashboard.
- Additional tutor support or carefully matched group-class operations, if the brand and service model explicitly approve them.
- Multi-language support.
- Admin CMS.
- Advanced scheduling and availability management.
- Automated reminders and notifications.
- Safeguarding workflow tooling beyond the launch requirements.

These ideas must not be smuggled into MVP work through speculative data models, authentication scaffolding, payment abstractions, dashboard routes, or multi-tenant architecture.

## 19. Out of Scope for MVP

The MVP is a fast, accessible, tutor-led marketing and content website. The following are excluded unless the project scope is explicitly changed:

- LMS functionality.
- Student login or authentication.
- Student dashboard.
- Parent dashboard.
- Tutor dashboard.
- Online payments, billing, or subscriptions.
- Progress dashboards or automated grading.
- Certificates or gamification.
- Multi-tenancy.
- Tutor marketplace or tutor directory.
- Self-service multi-tutor booking platform.
- Community, social feed, or messaging platform.
- Mobile application.
- Native desktop application.
- Admin CMS or database-backed editorial platform.
- Unapproved multi-language support.
- Unapproved course marketplace or membership system.
- Large classroom academy positioning.
- Unsupported analytics or behavioral tracking.
- Features that require a new backend architecture without explicit approval.

Carefully matched small-group classes may be offered as part of the approved teaching model, but the MVP website must present SoulWithQuran as a personal tutor-led service, not as a large classroom academy or marketplace.

## 20. Definition of Done

Every completed phase must satisfy the relevant criteria below in addition to its phase-specific definition of done:

- [ ] Matches the approved `DESIGN.md` visual and interaction system.
- [ ] Matches the approved `docs/project/PROJECT.md` product scope and teaching model.
- [ ] Follows `AGENTS.md` engineering and collaboration rules.
- [ ] Implements only the current phase and approved scope.
- [ ] Works at mobile, tablet, desktop, and wide desktop widths where relevant.
- [ ] Has semantic HTML and a logical heading hierarchy.
- [ ] Has keyboard operation and visible focus for interactive controls.
- [ ] Meets intended contrast and touch-target requirements.
- [ ] Respects reduced-motion preferences where motion exists.
- [ ] Uses accurate image alt text and optimized media where relevant.
- [ ] Keeps primary content available to search engines without unnecessary client-only rendering.
- [ ] Has validated metadata, links, and URLs where relevant.
- [ ] Has no TypeScript errors.
- [ ] Has no ESLint errors.
- [ ] Uses reusable components when a pattern genuinely recurs.
- [ ] Avoids duplicated logic and unexplained one-off tokens.
- [ ] Exposes no secrets or sensitive implementation details.
- [ ] Has `pnpm lint` passing after meaningful code changes.
- [ ] Has `pnpm build` passing after meaningful code changes.
- [ ] Has a reviewed diff containing only intentional changes.
- [ ] Has known limitations documented honestly.
- [ ] Has user review completed when the workflow requires approval before the next major phase.

## 21. AI Working Rules

### Before any implementation

1. Read `AGENTS.md`.
2. Read `docs/project/PROJECT.md`.
3. Read `DESIGN.md` before visual or UI work.
4. Read this `ROADMAP.md` and identify the active phase.
5. Inspect relevant existing components, data files, routes, and approved assets.
6. State a concise plan, affected files, assumptions, and any blocking condition.

### During implementation

- Implement only the active phase and the approved task within that phase.
- Do not jump ahead because a later feature appears easy.
- Do not refactor unrelated code, rename major folders, or update unrelated dependencies.
- Prefer composition and existing primitives over premature abstraction.
- Prefer Server Components; use Client Components only when browser state, events, effects, or browser APIs require them.
- Keep static marketing content server-rendered and SEO-readable.
- Use `next/link` for internal navigation and `next/image` for meaningful raster assets.
- Use Lucide React rather than introducing another icon library.
- Use pnpm only.
- Do not add dependencies without confirming the need and following the repository approval rule.
- Treat all form input as untrusted and keep secrets server-side.
- Do not invent public content, claims, credentials, testimonials, pricing, or contact details.
- Make responsive behavior, semantic structure, focus, contrast, touch targets, and reduced motion part of the initial implementation.
- When a dependency or content blocker is discovered, stop at the current phase and report it rather than bypassing the roadmap.

### After implementation

1. Review the diff and confirm only intended files changed.
2. Run relevant task-specific checks.
3. Run `pnpm lint` and `pnpm build` after meaningful code changes.
4. Review responsive behavior and accessibility for UI work.
5. Fix errors introduced by the task.
6. Report completed deliverables, files changed, validation results, limitations, and the next approved phase.
7. Wait for user review before beginning the next major phase.

### Phase control

- Only one phase may be active at a time.
- A phase cannot begin until its **Blocking** field is satisfied.
- A phase cannot be marked complete until its acceptance criteria and definition of done are satisfied.
- If the required blocker is external, document the exact missing decision, asset, credential, or approval.
- Do not mark a phase complete because the code compiles if content, accessibility, responsive behavior, or validation remains incomplete.
- If a user explicitly changes product scope, update `PROJECT.md`, `DESIGN.md`, or this roadmap as appropriate before implementing the expanded scope.
