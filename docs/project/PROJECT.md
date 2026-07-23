# SoulWithQuran — Project Overview

> The single source of truth for understanding the SoulWithQuran product.

---

# Project Information

## Project Name

SoulWithQuran

---

## Project Type

Premium tutor-led online Quran education website.

---

## Current Stage

Design & Frontend Development

---

## Status

In Progress

---

# Project Vision

SoulWithQuran exists to provide a premium online Quran learning experience for English-speaking families and adults.

The website should build trust, clearly explain the teaching methodology, showcase the tutor professionally, and convert visitors into free trial bookings.

The overall experience should feel calm, modern, welcoming, and trustworthy rather than looking like a traditional Quran academy.

---

# Mission

Provide high-quality Quran education through personal, structured and engaging one-to-one online classes.

---

# Long-Term Vision

Become one of the most trusted online Quran learning brands for English-speaking Muslims worldwide.

The website should communicate professionalism, authenticity, patience, and educational excellence.

---

# Business Model

SoulWithQuran operates as a tutor-led educational service.

Revenue comes from paid online Quran classes.

The website exists to:

- Build trust
- Generate qualified leads
- Convert visitors into free trial bookings
- Support long-term SEO through educational content

---

# Product Scope

The project is a marketing and content website.

Primary goals:

- Explain services
- Introduce the tutor
- Present available courses
- Build credibility
- Answer common questions
- Generate enquiries
- Book free trial lessons

---

# What This Project Is

✓ Premium educational website

✓ Tutor-led personal brand

✓ Lead generation platform

✓ Content marketing platform

✓ SEO-focused website

✓ Conversion-focused marketing website

✓ Fast, modern web application

---

# What This Project Is NOT

This project is NOT:

- LMS
- Student dashboard
- SaaS
- Multi-tenant platform
- Marketplace
- Course portal
- Membership website
- WordPress website
- Mobile application

Do not introduce these features unless the project scope changes.

---

# Target Audience

Primary audience:

- Muslim parents searching for Quran education for their children.

Secondary audience:

- Adults beginning Quran learning.
- Adults improving Tajweed.
- Reverts.
- Busy professionals seeking flexible online classes.

---

# Primary Countries

- United Kingdom
- United States
- Canada
- Australia
- United Arab Emirates

---

# Language

English only.

The website should use clear, professional and conversational English.

Avoid complicated religious terminology where simpler language communicates the same meaning.

---

# Courses

The website currently offers:

- Qaida
- Nazra
- Tajweed
- Hifz
- Islamic Studies

Each course will eventually have its own dedicated landing page.

---

# Teaching Model

Classes are:

- Tutor-led
- Personalized
- One-to-one
- Carefully matched small groups
- Online
- Live

Typical class duration:

30–40 minutes

Frequency:

5 classes per week

Monthly fee:

USD $80

Free trial lesson available.

---

# Primary Conversion Goal

Book a free trial.

Every page should ultimately guide visitors toward this action.

---

# Secondary Conversion Goals

- WhatsApp enquiry
- Contact form submission
- Explore courses
- Read about the tutor
- Read educational blog content

---

# Free-Trial Workflow

The primary call to action links to the dedicated `/free-trial` page. The page will contain a custom free-trial enquiry form; form implementation is deferred until its approved roadmap phase.

The approved future workflow uses React Hook Form and Zod for client-side form structure and validation where appropriate, a Next.js Route Handler for server-side validation and submission, Cloudflare Turnstile for spam protection, and Resend for enquiry notification delivery. After a successful enquiry, the visitor may be offered an approved Cal.com scheduling link.

WhatsApp remains a secondary direct-enquiry option. No payment or account creation is involved. Environment values remain placeholders until the relevant implementation phase.

---

# Core Value Proposition

Parents and learners should immediately understand:

- Learning is personal.
- Teaching is patient.
- Lessons are structured.
- Classes are flexible.
- Progress is monitored.
- Trust comes before selling.

---

# Brand Personality

The website should feel:

- Premium
- Calm
- Warm
- Trustworthy
- Human
- Educational
- Structured
- Minimal
- Modern
- Personal

Avoid looking:

- Corporate
- Aggressive
- Overly traditional
- Generic
- Over-designed

---

# Content Tone

Write like an experienced teacher.

Tone should be:

- Friendly
- Respectful
- Calm
- Confident
- Helpful
- Human

Avoid:

- Clickbait
- Marketing hype
- Fear-based copy
- Fake urgency
- Exaggerated claims

---

# Design Direction

The visual identity should be inspired by modern digital products.

Reference brands include:

- Apple
- Stripe
- Linear
- Headspace
- Notion

Do not copy their designs.

Only adopt their clarity, typography, spacing and simplicity.

---

# Technology Stack

Frontend:

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

Icons:

- Lucide React

Future additions:

- React Hook Form
- Zod
- Route Handlers
- Resend
- Cloudflare Turnstile
- MDX

Deployment:

- Vercel

DNS:

- Cloudflare

---

# Architecture Principles

The codebase should prioritize:

- Simplicity
- Readability
- Reusability
- Accessibility
- Performance
- Maintainability

Prefer Server Components whenever possible.

Use Client Components only when interaction requires them.

---

# Website Structure

Planned pages:

- Home
- Meet Your Tutor
- Courses
- Individual Course Pages
- Testimonials
- Blog
- FAQ
- Contact
- Free Trial
- Privacy Policy
- Terms & Conditions
- Safeguarding
- 404

---

# Homepage Structure

The homepage should include:

1. Header
2. Hero
3. Trust Indicators
4. Courses Overview
5. How Learning Works
6. Meet the Tutor
7. Why SoulWithQuran
8. Testimonials
9. Pricing & Free Trial
10. FAQ
11. Final CTA
12. Footer

---

# SEO Strategy

The website should prioritize:

- High-quality educational content
- Helpful course pages
- Internal linking
- Structured metadata
- Fast loading
- Accessibility
- Semantic HTML

Avoid creating thin or AI-generated content purely for rankings.

---

# Accessibility

Accessibility is a core requirement.

Every page should support:

- Keyboard navigation
- Proper heading hierarchy
- Accessible forms
- Sufficient contrast
- Responsive layouts
- Reduced motion preferences

---

# Performance Goals

The website should be:

- Fast
- Lightweight
- Optimized
- Mobile-first

Avoid unnecessary JavaScript and large dependencies.

---

# Future Features (Not Included in MVP)

These features are intentionally out of scope:

- Student login
- Tutor dashboard
- Online payments
- Progress dashboard
- LMS
- Multi-language support
- Mobile application

Do not implement these features unless specifically requested.

---

# Development Workflow

Every implementation should follow this process:

1. Read AGENTS.md
2. Read PROJECT.md
3. Read DESIGN.md
4. Inspect visual references
5. Implement only the requested scope
6. Validate responsiveness
7. Run lint
8. Run production build
9. Wait for review before continuing

---

# Success Criteria

SoulWithQuran should become:

- A trustworthy educational brand.
- A premium tutor-led online learning platform.
- A high-converting marketing website.
- A scalable SEO content platform.
- A maintainable Next.js codebase.

Every design and engineering decision should support these objectives.
