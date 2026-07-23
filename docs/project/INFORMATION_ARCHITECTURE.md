# **SoulWithQuran — Information Architecture & Content Blueprint v1.0**

**Purpose**  
This document is the approved structural source of truth for sitemap, navigation, user journeys, page architecture, content models, CTA placement, and internal-linking structure.

Product scope is governed by `PROJECT.md`.
Visual implementation is governed by `DESIGN.md`.
Execution order is governed by `ROADMAP.md`.
Agent behavior is governed by `AGENTS.md` and the repository skill.

## **1\. Product Goals**

Business Goals  
• Generate qualified free-trial bookings  
• Build trust with international Muslim families  
• Present a premium tutor-led brand

User Goals  
• Understand available courses  
• Trust the tutor  
• Book a free trial quickly  
• Find answers to common questions

## **2\. Final Sitemap**

Home  
About (Meet Your Tutor)  
Courses  
  \- Qaida  
  \- Nazra  
  \- Tajweed  
  \- Hifz  
  \- Islamic Studies  
Free Trial  
Testimonials  
Blog  
Blog Article  
FAQ  
Contact  
Privacy Policy  
Terms & Conditions  
Safeguarding  
404

## **3\. Navigation**

Primary Navigation:  
Home | About | Courses | Testimonials | Blog | FAQ | Contact

Primary Action Button:  
Book a free trial

Footer:  
Courses, Policies, Contact, Social Links

## **4\. User Journeys**

Parent Journey:  
Homepage → Tutor → Courses → Testimonials → Free Trial

Adult Journey:  
Google Search → Blog → Course → FAQ → Free Trial

Referral Journey:  
Homepage → Testimonials → Contact

## **5\. Homepage Architecture**

1\. Hero  
2\. Trust Indicators  
3\. Course Overview  
4\. How It Works  
5\. Meet Your Tutor  
6\. Why Choose SoulWithQuran  
7\. Testimonials  
8\. Class Information & Pricing  
9\. FAQ  
10\. Final CTA  
11\. Footer

## **6\. Page Specifications**

Home: Build trust → CTA: Book a free trial  
About: Establish credibility → CTA: Book a free trial  
Course Pages: Explain outcomes → CTA: Book a free trial  
Testimonials: Reinforce trust → CTA: Book a free trial  
Blog: SEO & education → CTA: Book a free trial  
FAQ: Remove objections → CTA: Book a free trial  
Contact: Communication → CTA: Book a free trial or send an enquiry

## **7\. Content Models**

Course:  
Name, Summary, Audience, Outcomes, Prerequisites, FAQ, CTA.

Tutor:  
Biography, Qualifications, Teaching Philosophy, Experience, Languages.

Testimonial:  
Name, Country, Parent/Student, Quote, Course, Optional Photo.

Blog:  
Title, Slug, Author, Date, Reading Time, Category, Cover Image, MDX, SEO Metadata.

## **8\. CTA Framework**

Hero: Book a free trial  
Courses: Book a free trial  
Blog: Book a free trial  
FAQ: Book a free trial  
Footer: Book a free trial

## **9\. Internal Linking**

Homepage → Courses, About, Trial  
Courses → Trial  
Blog → Relevant Course  
FAQ → Trial  
Tutor → Trial  
Footer → Policies & Contact

## **10\. SEO Architecture**

URL Structure:  
/courses/qaida  
/courses/nazra  
/blog/slug

Implement:  
Title tags  
Meta descriptions  
Open Graph  
JSON-LD  
Breadcrumbs  
Internal linking

## **11\. Component Inventory**

Hero  
Section Heading  
Primary Button  
Secondary Button  
Course Card  
Feature Card  
Testimonial Card  
FAQ Accordion  
Pricing Card  
Tutor Card  
Blog Card  
Contact Form  
Newsletter Block  
Footer

## **12\. MVP Scope**

Included in the planned MVP:  
Marketing website  
MDX Blog  
Dedicated `/free-trial` page and custom free-trial enquiry form  
WhatsApp as a secondary direct-enquiry option  
Cal.com scheduling link after a successful enquiry, when approved  
Responsive UI  
SEO

Deferred:  
Student portal  
Payments  
CMS  
Authentication  
Admin dashboard

## **13. Free-Trial Workflow**

The primary CTA links to the dedicated `/free-trial` page. That page will contain a custom free-trial enquiry form; form implementation is deferred until the approved roadmap phase.

The future workflow uses React Hook Form and Zod for client-side structure and validation where appropriate, a Next.js Route Handler for server-side validation and submission, Cloudflare Turnstile for spam protection, and Resend for enquiry notification delivery. After a successful enquiry, the visitor may be offered an approved Cal.com scheduling link.

WhatsApp remains a secondary direct-enquiry option. No payment or account creation is involved. Environment values are placeholders until the relevant implementation phase.

## **14\. Success Metrics**

Primary KPI: Free Trial Bookings  
Secondary: WhatsApp Clicks, Contact Forms, Organic Traffic, Conversion Rate, Core Web Vitals.

## **Design Readiness Checklist**

✓ Information Architecture Approved  
✓ Brand Strategy Approved  
Next:  
1\. Phase 1 — Design System  
2\. Core Layout  
3\. Page implementation according to `ROADMAP.md`
