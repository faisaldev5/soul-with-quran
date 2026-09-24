# SoulWithQuran Asset Manifest

Production assets belong in `public/` or `src/app/`. Original source boards belong in `docs/brand/`. Design references belong in `docs/design/references/`.

Raster-wrapper SVGs are not approved as genuine vector assets. Until true vector artwork is provided, use the validated PNG assets.

| Asset path | Asset type | Intended use | Approval status | Notes |
| --- | --- | --- | --- | --- |
| `public/brand/logos/soulwithquran-logo-primary.png` | Primary horizontal logo | Header and approved light surfaces | Approved PNG | 1600 x 400 transparent master; displayed at responsive header dimensions without distortion. |
| `public/brand/logos/soulwithquran-white-primary.png` | Reversed horizontal logo | Footer and approved dark surfaces | Approved PNG | 1600 x 400 transparent master with white artwork. |
| Supplied `public/brand/logos/*.svg` exports | Embedded brand-board images | None | Rejected for runtime use | Each SVG has a square viewBox and embeds the same large raster brand board rather than a clean horizontal logo; excluded from production until genuine vector exports are supplied. |
| `public/brand/marks/mark-512x512.png` | Primary brand mark | Favicon and application icon source | Approved PNG | 512 x 512 transparent master; artwork padding is preserved in derivatives. |
| `public/brand/marks/mark-512x512-white.png` | Reversed brand mark | Future approved dark-surface contexts | Approved PNG, currently unused | 512 x 512 transparent master with white artwork. |
| `public/brand/icons/favicon-16x16.png` | Small favicon source | 16px ICO entry | Approved PNG | Supplied size-specific transparent raster. |
| `public/brand/icons/favicon-32x32.png` | Standard favicon source | 32px ICO entry | Approved PNG | Supplied size-specific transparent raster. |
| `public/brand/icons/favicon-48x48.png` | Large favicon source | 48px ICO entry | Approved PNG | Supplied size-specific transparent raster. |
| `public/brand/social/og-default-1200x630.png` | Default social image | Open Graph and large Twitter card | Approved PNG | Production metadata uses the absolute canonical-domain URL. |
| `public/brand/email/email-logo-600x150.png` | Email-safe horizontal logo | Contact and free-trial HTML emails | Approved PNG | Served from the canonical production URL and displayed at 200 x 50. |
| `src/app/favicon.ico` | Multi-size favicon | Browser tab fallback | Generated from approved sources | Contains the supplied 16, 32, and 48px PNG entries. |
| `src/app/icon.png` | Application icon | Next.js application metadata icon | Generated from approved source | 512 x 512 optimized PNG derived from the primary mark. |
| `src/app/apple-icon.png` | Apple touch icon | Apple home-screen icon | Generated from approved source | 180 x 180 optimized PNG derived from the primary mark. |
| `src/app/icon.svg` | Raster-wrapper application icon | None | Removed; pending genuine vector | PNG equivalent is retained. |
| `public/images/homepage/hero-online-quran-class.jpg` | Homepage photograph | Hero online-learning scene | Approved | Portrait composition; preserve the learner, Quran, and laptop during responsive cropping. |
| `public/images/homepage/child-learning-quran-online.jpg` | Homepage photograph | Learner or course-support section | Approved | Show the learner and study materials without inventing identity or relationship claims. |
| `public/images/homepage/quran-study-desk.jpg` | Homepage photograph | Supporting study/process section | Approved | Quiet Quran and desk scene; use as supporting imagery. |
| `public/images/homepage/tutor-portrait.jpg` | Homepage photograph | Tutor introduction | Approved | Tutor portrait; alt text should describe the visible portrait without adding qualifications. |
| `public/images/tutor/tutor.webp` | Tutor portrait | Meet Your Quran Tutor section | Temporary approved production asset | Use as the responsive tutor portrait with concise, non-identifying alt text. |
| `public/images/tutor/meet-tutor-bg.png` | Decorative background motif | Meet Your Quran Tutor section | Approved decorative asset | Use once at low opacity behind the portrait; decorative only. |
| `docs/brand/SoulWithQuran_Brand_Identity_Guide_v1.0.docx.md` | Brand source-board export | Brand reference | Reference only | Markdown export of the supplied brand guide. |
| `docs/brand/SoulWithQuran_Design_Decision_Sheet_v1.0.docx.md` | Design source-board export | Brand and UI reference | Reference only | Markdown export of the supplied design decision sheet. |
| `docs/design/references/homepage.png` | Design reference screenshot | Layout and composition reference | Reference only | Inspiration only; do not copy its complete layout, copy, imagery, or styling. |
