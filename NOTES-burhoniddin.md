# Burhoniddin's part — status

## Done (code written, not yet run — see "Blocked" below)

Project setup:
- `package.json` — added Tailwind v4 (`tailwindcss` + `@tailwindcss/vite`) and `react-router-dom`
- `vite.config.js` — Tailwind plugin
- `src/index.css` — Tailwind import, design tokens from Figma (`@theme`), Museo Sans `@font-face`, `container-1200` utility
- `src/App.jsx` — minimal router (⚠ coordinate with whoever owns App.jsx / Layout / Footer / 404)
- `src/pages/HomePage.jsx` — assembles the sections in page order

Components:
- `components/layout/Header.jsx` — get-help top bar + nav
- `components/ui/` — `Button`, `FeatureList`, `SectionHeading`, `Figure` (img + placeholder), `Logo`
- `components/sections/`:
  - `HeroSection`
  - `JourneySection` — Enrich Your Child's Education Journey
  - `SolutionSection` — Your Complete All-In-One Solution
  - `PromoSection` — Unlimited 7-day free trial
  - `WellBeingSection` — Where Academics And Well-Being Meet
  - `LearningPathSection` — Individualized Learning Path
  - `LibrarySection` — A Library That Grows With Your Learner
  - `UniqueNeedsSection` — Have a Unique Needs Learner?

## Blocked

- `npm install` fails — C: drive is full (~0.17 GB free). Needs cleanup first.
- Figma REST API rate-limited (starter plan) until ~2026-09-08 — could only pull
  the global style system + Hero. Other sections built from the two screenshots,
  so spacing/positioning is approximate and needs a Figma-accurate pass later.

## To do after unblocking

1. Free disk space, `npm install`, `npm run dev` — fix whatever the build complains about.
2. Export images from Figma → `src/assets/images/` (see that folder's README).
3. Add Museo Sans woff2 files → `src/assets/fonts/` (see README).
4. Figma-accurate pass: exact paddings, decorative squiggles/stars, hero line-art bg.
5. Wire text through i18n once the locales are set up (currently hardcoded English).
6. Responsive review on mobile.
