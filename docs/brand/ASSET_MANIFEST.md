# SoulWithQuran Asset Manifest

Production assets belong in `public/` or `src/app/`. Original source boards belong in `docs/brand/`. Design references belong in `docs/design/references/`.

Raster-wrapper SVGs are not approved as genuine vector assets. Until true vector artwork is provided, use the validated PNG assets.

| Asset path | Asset type | Intended use | Approval status | Notes |
| --- | --- | --- | --- | --- |
| `public/brand/logos/logo-horizontal-primary.png` | Primary horizontal logo | Header, approved light surfaces | Approved PNG fallback | Tight horizontal canvas; navy artwork with gold details and transparency. |
| `public/brand/logos/logo-horizontal-reversed.png` | Reversed horizontal logo | Footer or approved dark surfaces | Pending corrected asset | Current file was removed because the arrangement places the symbol on the right; a correct symbol-left, wordmark-right version is still required. |
| `public/brand/logos/logo-primary.png` | Square-canvas horizontal logo | None | Removed duplicate | Replaced by the tightly cropped primary horizontal PNG. |
| `public/brand/logos/*.svg` | Raster-wrapper SVGs | None until replaced | Pending genuine vector | Removed from production use because the files embed base64 PNG data. |
| `public/brand/marks/mark-primary.png` | Primary brand mark | Compact logo contexts and application icon source | Approved PNG fallback | Transparent PNG; use without redrawing or altering the mark. |
| `public/brand/marks/mark-reversed.png` | Reversed brand mark | Approved dark surfaces and compact contexts | Approved PNG fallback | White mark with retained gold details on transparency. |
| `src/app/favicon.ico` | Traditional favicon | Browser tab fallback | Approved | Retained as the traditional Next.js favicon. |
| `src/app/icon.png` | Application icon | Next.js application metadata icon | Approved | Retained as the 512px application icon. |
| `src/app/apple-icon.png` | Apple touch icon | Apple home-screen icon | Approved | Retained as the 180px Apple icon. |
| `src/app/icon.svg` | Raster-wrapper application icon | None | Removed; pending genuine vector | PNG equivalent is retained. |
| `public/images/homepage/hero-online-quran-class.jpg` | Homepage photograph | Hero online-learning scene | Approved | Portrait composition; preserve the learner, Quran, and laptop during responsive cropping. |
| `public/images/homepage/child-learning-quran-online.jpg` | Homepage photograph | Learner or course-support section | Approved | Show the learner and study materials without inventing identity or relationship claims. |
| `public/images/homepage/quran-study-desk.jpg` | Homepage photograph | Supporting study/process section | Approved | Quiet Quran and desk scene; use as supporting imagery. |
| `public/images/homepage/tutor-portrait.jpg` | Homepage photograph | Tutor introduction | Approved | Tutor portrait; alt text should describe the visible portrait without adding qualifications. |
| `docs/brand/SoulWithQuran_Brand_Identity_Guide_v1.0.docx.md` | Brand source-board export | Brand reference | Reference only | Markdown export of the supplied brand guide. |
| `docs/brand/SoulWithQuran_Design_Decision_Sheet_v1.0.docx.md` | Design source-board export | Brand and UI reference | Reference only | Markdown export of the supplied design decision sheet. |
| `docs/design/references/homepage.png` | Design reference screenshot | Layout and composition reference | Reference only | Inspiration only; do not copy its complete layout, copy, imagery, or styling. |
