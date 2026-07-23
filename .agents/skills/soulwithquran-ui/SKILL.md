---
name: soulwithquran-ui
description: Build, refine, review, or repair SoulWithQuran marketing pages, page sections, and reusable UI components in the Next.js repository. Use for homepage, course, tutor, free-trial, contact, FAQ, testimonial, pricing, blog presentation, responsive styling, design-system implementation, visual QA, and accessibility-focused frontend work. Do not use for unrelated projects, general backend infrastructure, LMS features, authentication, payments, dashboards, or work outside the approved SoulWithQuran roadmap.
---

# SoulWithQuran UI Implementation Skill

## Purpose

Implement SoulWithQuran frontend work consistently, safely, and in small reviewable increments.

This skill translates the repository's approved product, design, engineering, and roadmap decisions into a repeatable implementation workflow. It does not replace those source documents and must not duplicate or override them.

Use this skill to build or refine the public-facing SoulWithQuran marketing and content experience while preserving:

- the approved tutor-led product scope;
- the premium, calm, warm, trustworthy visual direction;
- the Next.js App Router architecture;
- accessibility, performance, and SEO requirements;
- the currently active roadmap phase;
- the smallest reasonable implementation scope.

## Use This Skill When

Activate this skill for tasks such as:

- implementing a homepage section;
- assembling a complete approved marketing page;
- building or refining the header, footer, page shell, or navigation;
- creating reusable buttons, cards, form controls, badges, accordions, or content primitives;
- implementing course, tutor, testimonial, pricing, FAQ, contact, or free-trial presentation;
- translating an approved Google Stitch design or screenshot into the repository;
- improving visual hierarchy, spacing, typography, responsive behavior, or interaction quality;
- reviewing a page against `DESIGN.md`;
- fixing frontend accessibility or responsive defects;
- polishing an existing SoulWithQuran section without redesigning unrelated areas;
- integrating approved copy, photography, icons, and logo assets into public pages.

## Do Not Use This Skill When

Do not activate this skill for:

- unrelated repositories or brands;
- general infrastructure, DevOps, hosting, DNS, or CI work;
- authentication, student accounts, tutor dashboards, payments, LMS features, marketplaces, or multi-tenant systems;
- database design or backend architecture unrelated to an approved public form;
- content strategy or business decisions that have not been approved;
- mass SEO page generation;
- arbitrary redesigns that conflict with approved project sources;
- speculative future features outside the active roadmap phase.

When a task contains both UI work and unrelated infrastructure, apply this skill only to the UI portion and keep the scopes separate.

## Required Sources of Truth

Before editing code, read the relevant repository guidance in this order:

1. `AGENTS.md`
2. `docs/project/PROJECT.md` or the repository's approved `PROJECT.md`
3. `DESIGN.md`
4. `docs/project/ROADMAP.md` or the repository's approved `ROADMAP.md`
5. Existing components, data modules, styles, assets, and route conventions related to the task
6. Approved screenshots, Stitch exports, copy, or user instructions supplied for the current task

The user's latest explicit instruction has the highest priority.

When two repository sources conflict:

1. follow the latest explicit user instruction;
2. follow the most recently approved project or brand decision;
3. follow `DESIGN.md`;
4. follow `AGENTS.md` and the active roadmap phase;
5. preserve existing implementation conventions where they do not conflict.

Do not silently resolve a material contradiction. State the conflict and choose the safest minimal interpretation, or request approval when it affects public content, business scope, branding, security, or accessibility.

## Core Product Boundaries

SoulWithQuran is a premium tutor-led online Quran education marketing and content website.

The site exists to:

- build trust;
- explain the teaching experience;
- introduce the tutor;
- present approved courses;
- answer common questions;
- support useful educational content;
- generate free-trial and contact enquiries.

The site is not:

- an LMS;
- a student portal;
- a tutor marketplace;
- a SaaS dashboard;
- a membership platform;
- a self-service course platform;
- a mobile app;
- an authentication system.

Do not introduce out-of-scope product behavior while implementing frontend work.

## Approved Experience Direction

Every implementation should feel:

- premium;
- calm;
- warm;
- trustworthy;
- human;
- minimal;
- editorial;
- spacious;
- modern;
- structured;
- readable;
- tutor-led.

Avoid:

- generic Quran academy templates;
- corporate SaaS styling;
- glassmorphism;
- neumorphism;
- dark mode;
- large unapproved dark sections;
- heavy gradients;
- glow effects;
- excessive animation;
- repeated mosque, crescent, star, or ornamental motifs;
- childish illustration;
- crowded icon grids;
- artificial urgency;
- invented proof or claims.

The approved Deep Navy footer and specifically approved navy CTA treatments are valid exceptions to the light-only direction.

## Mandatory Workflow

### 1. Establish the exact scope

Restate the requested task internally as one bounded unit, for example:

- one homepage section;
- one reusable component family;
- one route;
- one responsive defect;
- one visual-review pass.

Identify:

- the active roadmap phase;
- dependencies already completed;
- files likely to change;
- approved copy and assets;
- whether interaction requires a Client Component;
- whether the task can be completed without changing unrelated code.

Do not begin a future roadmap phase or refactor unrelated files.

### 2. Inspect before creating

Before adding a component or token:

- search for an existing primitive or pattern;
- inspect nearby routes and components;
- inspect data and content modules;
- inspect global styles and token definitions;
- inspect image and logo assets;
- inspect the current responsive behavior;
- confirm the package and framework versions from the repository.

Reuse a suitable existing primitive. Extend it only when the change benefits the same component family and does not create regressions.

### 3. Plan the smallest coherent change

Prefer the smallest file set that produces a complete, reviewable result.

A normal plan should specify:

- component or route to create or edit;
- data or copy source;
- responsive layout;
- interaction behavior;
- accessibility behavior;
- validation commands.

Do not create abstractions for a single trivial use. Do not place an entire page in one oversized component when meaningful composition improves clarity.

### 4. Implement structure before polish

Build in this order:

1. semantic content structure;
2. data and copy wiring;
3. mobile layout;
4. tablet and desktop composition;
5. component states and interactions;
6. typography, spacing, surfaces, and imagery;
7. accessibility refinements;
8. motion and final polish;
9. validation.

A section is not complete merely because it resembles a screenshot at one viewport.

### 5. Review the diff

Before finishing:

- inspect all changed files;
- remove accidental edits;
- remove dead code and temporary debug output;
- confirm no unrelated dependency or lockfile changes;
- confirm public copy and claims are approved;
- confirm the implementation remains inside the active phase.

## Architecture Rules

### Server and Client Components

Use React Server Components by default.

Add `"use client"` only when the component genuinely requires:

- local interactive state;
- browser APIs;
- effects;
- event-driven disclosure;
- mobile navigation state;
- form behavior that cannot remain server-driven;
- another client-only library already approved by the repository.

Keep the client boundary as low and small as practical. Do not convert a full route or large static section into a Client Component for one interactive control.

### Component composition

Prefer:

- small semantic components;
- explicit props;
- typed data structures;
- composition over condition-heavy mega-components;
- content stored in approved data modules when repeated or maintained separately;
- route-specific components near their route when not broadly reusable;
- shared primitives only for patterns that are genuinely shared.

Avoid:

- premature generic component systems;
- deeply nested prop drilling;
- duplicated markup across repeated cards;
- hidden behavior controlled by unclear boolean combinations;
- components that mix content decisions, data fetching, and complex presentation without need.

### Next.js conventions

Use:

- `next/link` for internal navigation;
- `next/image` for meaningful raster images;
- route metadata through the approved App Router pattern;
- semantic route and folder names;
- Server Components for static marketing content;
- Route Handlers only when an approved server interaction requires them.

For images:

- provide correct dimensions or a stable responsive fill container;
- provide accurate `sizes`;
- preserve the focal point;
- write meaningful alt text for informative images;
- use empty alt text for decorative imagery;
- avoid eager loading except for the true above-the-fold priority image;
- do not use CSS background images for meaningful content.

### Dependencies

Do not add a dependency when platform APIs, React, Next.js, Tailwind, or existing packages can solve the task cleanly.

Before adding a package:

- verify that the task genuinely needs it;
- inspect repository conventions;
- consider bundle and maintenance cost;
- use an actively maintained package only;
- document why it was necessary.

Never add a large animation or component library for one small interaction.

## Design-System Application

`DESIGN.md` is the authoritative visual specification. Do not invent nearby colors, arbitrary spacing, new radii, unapproved shadows, or alternate typefaces.

### Color

Use approved tokens for:

- Deep Navy;
- Soft Sage;
- Warm Gold;
- Warm Off White;
- White surfaces;
- Charcoal text;
- semantic feedback.

Treat the derived 50–950 scales as implementation scales. Core brand assets must continue to use the approved identity colors.

Warm Gold and Soft Sage are supporting accents. They are not default body-text colors or substitutes for the primary navy action.

### Typography

Use:

- Plus Jakarta Sans for headings and display;
- Inter for body, navigation, labels, and controls;
- the repository's approved monospace font only where code is genuinely shown.

Maintain the approved scale, line heights, reading widths, sentence case, and heading hierarchy. Do not compress typography to force content into a fixed layout.

### Spacing and layout

Use the approved 8px rhythm and responsive container rules.

Default section rhythm:

- approximately `80px` on mobile;
- approximately `96px` on tablet;
- approximately `128px` on desktop.

Use:

- one-column mobile flow;
- an 8-column tablet intent;
- a 12-column desktop intent;
- a content container capped at `1280px`.

Do not stretch body copy across wide containers. Keep long-form reading content near the approved character measure.

### Radius, border, and shadow

Use only approved radius tokens:

- `8px`;
- `12px`;
- `16px`;
- pill.

Prefer a restrained border before elevation. Use approved shadows only where separation or interactivity requires them. Do not apply large shadows to every card.

### Iconography

Use Lucide React.

Keep icon sizes and stroke weights consistent with `DESIGN.md`. Add icons only when they improve recognition, state, direction, or control meaning.

Do not introduce another icon family, emoji UI, decorative religious glyphs, or an icon beside every heading.

### Logo

Use approved repository logo assets only.

Never:

- recreate the logo in CSS or text;
- change its colors or proportions;
- crop, rotate, stretch, animate, or decorate it;
- place it over visually noisy imagery;
- invent an unapproved reversed or monochrome variant.

## Content Integrity

Do not invent:

- tutor qualifications;
- certifications;
- testimonials;
- ratings;
- student counts;
- countries served;
- outcomes;
- schedules;
- fees;
- religious quotations;
- Quran translations;
- Arabic wording;
- urgency;
- scarcity.

When approved content is missing:

- use clearly identifiable neutral placeholder copy only when the task explicitly permits placeholders;
- keep placeholder content easy to replace;
- do not present placeholders as verified public facts;
- flag the missing content in the completion report.

Use English only unless the user explicitly approves another language for a specific piece of content.

## Conversion Rules

The primary conversion is normally “Book a free trial.”

For each section:

- identify its single primary purpose;
- use no more than one visually dominant CTA in one action group;
- keep supporting actions clearly secondary;
- explain what happens next near high-intent CTAs;
- avoid pressure, fake scarcity, countdowns, and exaggerated outcomes;
- keep trust and clarity before persuasion.

A CTA block should communicate:

1. what the visitor can do;
2. why the action is useful;
3. what happens next.

## Responsive Implementation

Build mobile-first.

Verify at minimum:

- narrow mobile around `320–375px`;
- standard mobile around `390–430px`;
- tablet around `768px`;
- laptop around `1024–1280px`;
- wide desktop at `1440px` or above.

Check:

- heading wrapping;
- reading order;
- CTA width and grouping;
- image focal points;
- navigation behavior;
- card stacking;
- long labels and real copy;
- table or comparison overflow;
- absence of page-level horizontal scrolling;
- appropriate section spacing at each range.

Do not preserve a desktop composition when a simpler mobile reading flow is clearer.

## Accessibility Requirements

Target WCAG 2.2 AA.

Every completed task must consider:

- semantic landmarks;
- logical heading order;
- keyboard operation;
- visible `:focus-visible` states;
- sufficient contrast;
- `44 × 44px` effective touch targets where practical;
- accessible names for icon-only controls;
- correct labels and descriptions for form controls;
- state exposure for accordions, menus, and dialogs;
- meaningful alt text;
- reduced-motion preferences;
- zoom and text resizing;
- errors that explain how to recover.

Use native HTML before ARIA.

Do not:

- use clickable non-semantic elements;
- remove focus styling;
- rely on color alone;
- make hover essential;
- put interactive controls inside another interactive control;
- use a placeholder as the only input label.

## Interaction and Motion

Motion must explain state or improve continuity.

Use the timing and easing rules from `DESIGN.md`.

Allowed examples:

- restrained button state transitions;
- a maximum `2px` card lift;
- short icon movement indicating direction;
- accessible accordion disclosure;
- quick mobile-navigation transitions;
- quiet loading feedback that preserves layout.

Respect `prefers-reduced-motion`.

Do not add:

- scroll hijacking;
- parallax;
- autoplay background video;
- animation that delays content;
- looping decorative motion;
- large spring effects;
- page transitions that make navigation feel slower.

## Visual Reference Protocol

When an approved screenshot, Stitch output, or reference is provided:

1. identify the layout hierarchy, grid, spacing, typography, media placement, and interaction intent;
2. separate transferable structure from reference-specific branding;
3. preserve SoulWithQuran colors, typography, voice, assets, and component rules;
4. adapt the design responsively rather than reproducing a fixed screenshot;
5. do not copy unapproved text, claims, logos, icons, or imagery;
6. do not treat visual similarity at one viewport as completion.

Refine the existing implementation instead of redesigning unrelated sections.

## Forms

Apply this section when implementing the approved free-trial or contact workflow.

Use:

- React Hook Form and Zod only when they are part of the approved repository plan;
- visible labels;
- clear required and optional indicators;
- concise helper text;
- field-level errors;
- a form-level summary when multiple errors would otherwise be hard to find;
- preserved values after validation failure;
- server-side validation for submitted data;
- accessible success and failure states;
- spam protection only through the approved approach;
- no client-exposed secrets.

Ask only for information necessary to respond or arrange the trial.

Disabled controls must:

- use an approved low-emphasis surface;
- retain readable text;
- remove hover, pressed, lift, and motion effects;
- use `cursor-not-allowed` only as a supporting cue;
- never communicate disabled state through opacity alone.

Do not mark a form complete until success, validation, network failure, duplicate submission, and spam-protection behavior are handled or explicitly deferred by the roadmap.

## SEO and Public Page Semantics

When building a route or page, preserve:

- one clear H1;
- descriptive title and metadata;
- semantic sections and landmarks;
- crawlable static content;
- internal links using meaningful anchor text;
- canonical behavior defined by the project;
- structured data only when accurate, approved, and visible in equivalent page content.

Do not:

- create thin keyword pages;
- hide meaningful content in client-only rendering;
- invent review or FAQ schema;
- use misleading metadata;
- repeat headings purely for keywords.

## Performance Requirements

Prefer the simplest rendering model and smallest client bundle.

Check:

- image dimensions and responsive sizing;
- font loading through the approved Next.js approach;
- lazy loading below-the-fold media;
- minimal Client Components;
- dependency cost;
- layout stability;
- unnecessary re-renders;
- unused code;
- large assets;
- animation cost.

Do not claim a performance result without running the relevant check.

## Task Patterns

### Build a new section

1. Read the active roadmap item.
2. Confirm approved content and reference assets.
3. inspect reusable primitives.
4. create the semantic structure.
5. implement mobile layout.
6. extend to tablet and desktop.
7. add only necessary interaction.
8. verify accessibility and visual consistency.
9. run checks and report.

### Refine an existing section

1. identify the specific defects;
2. preserve approved content and working behavior;
3. change the smallest relevant component or token;
4. compare before and after across breakpoints;
5. confirm no unrelated regression;
6. report exactly what improved.

### Build a reusable component

1. confirm at least two credible usages or an explicit design-system requirement;
2. define a small typed API;
3. implement all required states;
4. preserve semantic elements;
5. avoid style-prop sprawl;
6. document usage through clear code and naming rather than a separate document unless requested.

### Perform a UI review

Review against:

- `PROJECT.md`;
- `DESIGN.md`;
- the active roadmap phase;
- mobile and desktop composition;
- accessibility;
- content integrity;
- conversion hierarchy;
- performance risks;
- code maintainability.

Prioritize findings as:

- Critical: blocks use, creates incorrect public claims, or causes severe accessibility/security problems.
- High: major responsive, interaction, or design-system failure.
- Medium: visible inconsistency or maintainability issue.
- Low: optional polish that does not block approval.

Do not modify code during a review-only task unless explicitly asked.

## Validation

After meaningful code changes, run the repository-approved commands, normally including:

```bash
pnpm lint
pnpm build
```

Also run relevant tests or type checks defined in `AGENTS.md` or the package scripts.

For UI changes, manually inspect:

- mobile;
- tablet;
- desktop;
- keyboard navigation;
- focus visibility;
- reduced motion where relevant;
- long content;
- empty or error states where relevant;
- console output;
- image loading and layout stability.

If a command cannot be run, state why. Never report a check as passing when it was not executed.

## Completion Report

Finish with a compact report containing:

### Completed

- the requested route, section, component, or fix;
- the user-visible result.

### Files changed

- each changed file and its purpose.

### Validation

- commands executed;
- manual checks completed;
- pass or failure status.

### Remaining or blocked

- missing approved content or assets;
- intentionally deferred roadmap work;
- pre-existing issues;
- decisions requiring user approval.

Do not describe future work as completed.

## Definition of Done

A task using this skill is done only when:

- it stays within the requested scope and active roadmap phase;
- it follows `AGENTS.md`, `PROJECT.md`, `DESIGN.md`, and `ROADMAP.md`;
- public content is approved or clearly identified as temporary;
- mobile, tablet, and desktop behavior are intentional;
- semantic structure and keyboard access are correct;
- focus, contrast, and reduced-motion requirements are respected;
- images and icons follow repository conventions;
- no unrelated code or dependency changes remain;
- lint and production build pass, or failures are reported accurately;
- the final report names the exact changes and validation performed.

## Final Guardrail

Do not optimize for the amount of code produced.

Optimize for a complete, accurate, accessible, reviewable implementation of the smallest approved SoulWithQuran UI scope.
