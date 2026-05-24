# Portfolio Rebuild Plan

## Overview

Rebuild personal portfolio on top of the reference codebase (satriabahari structure), replacing
the sidebar layout with a full-width floating navbar layout, adapting all content to Ahmad Reza
Adrian's own data, and keeping the reusable UI components from `common/components/elements/`.

---

## Decisions Summary

| Decision | Choice |
|---|---|
| Layout | Full-width, no sidebar |
| Navigation | Floating top navbar (transparent → backdrop-blur on scroll) |
| Theme | Light + Dark with toggle |
| Language | EN + ID (keep `next-intl`) |
| Pages | Home, About, Projects, Contact, Achievements |

---

## Pages & Routes

```
/[locale]/                    → Home
/[locale]/about               → About (bio + experience + education + certificates)
/[locale]/projects            → Projects list with category filter
/[locale]/projects/[slug]     → Project detail (MDX)
/[locale]/contact             → Contact form + socials
/[locale]/achievements        → Achievements / certifications
```

---

## Layout Architecture

### What changes from the reference
- **Remove** the left sidebar (`common/components/layouts/sidebar/`)
- **Remove** `SessionProvider.tsx`, NextAuth, Firebase (no chat/auth needed)
- **Keep** `SkeletonThemeProvider`, theme store, notif store, i18n routing

### New layout structure
```
app/[locale]/layout.tsx
  └── <Navbar />          ← floating top navbar (fixed position)
  └── <main>              ← full-width, max-w-6xl centered, px-6
      {children}
  └── <Footer />
  └── <Notif />
```

### Navbar component
- **Desktop:** Logo (left) · Nav links (center or right) · Theme toggle + Language toggle (right)
- **Mobile:** Logo (left) · Hamburger icon (right) → slides down a dropdown menu
- **Scroll behavior:** starts transparent, gains `backdrop-blur` + subtle border on scroll
- **Active link:** underline or dot indicator on current page

### Footer
- Simple: name/logo · nav links · social icons · copyright
- No ghost display text (keep it minimal)

---

## Home Page Sections

One long scrollable page, no snap scroll.

### 1. Hero
- Full-screen height
- Headline: name + title (use `RotatingText` or `DecryptedText` for role)
- Short tagline
- Two CTA buttons: **View Projects** + **Download CV**
- Subtle background (gradient or animated — use `Aurora` or CSS gradient)

### 2. About Snippet
- Two-column: short bio text (left) + photo (right) or vice versa
- Stats row using `AnimateCounter`: years of experience, projects built, etc.
- "Read more →" link to `/about`

### 3. Featured Projects
- Show 3 featured projects using `SpotlightCard` or `GlareHover` cards
- Each card: thumbnail, title, short description, tech stack pills, GitHub/live links
- "See all projects →" link to `/projects`

### 4. Tech Stack / Skills
- `MarqueeElement` (two rows, opposite directions) for tech logo pills
- Skills: React, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB,
  PostgreSQL, Python, TensorFlow, Git, Docker, Figma

### 5. Contact CTA
- Simple centered section: headline + short text + email button + social links
- Not a full form (full form is on `/contact`)

---

## About Page Sections

### 1. Page Header
- `PageHeading` component + short intro line

### 2. Bio
- Full bio paragraphs (2–3 paragraphs)

### 3. Experience Timeline
- Work experience entries: role, company, year range, description
- Vertical timeline layout (framer-motion stagger on scroll)

### 4. Education Timeline
- Same vertical timeline style as Experience

### 5. Certificates
- Grid of certificate cards: name, issuer, year, credential link
- Use `Card` component

---

## Projects Page

- Filter tabs: **All** / **Full-Stack** / **Frontend** / **Machine Learning**
- Grid of project cards (2 cols on tablet, 3 cols on desktop)
- Each card: image, title, tech stack pills, category badge, GitHub/live links
- Clicking a card → `/projects/[slug]` (MDX detail page) — optional, add later

### Projects data (adapt from `archived/data/projects.ts`)
| Title | Category |
|---|---|
| Laundry Management | Full-Stack |
| Book Worm | Full-Stack |
| SiJawi | Frontend |
| Task Manager API | Full-Stack |
| MERN Online Shop | Full-Stack |

---

## Contact Page

- Two-column layout: form (left) + contact info + social links (right)
- Form fields: Name, Email, Phone (optional), Message
- Send via email API (`app/api/email/route.ts` — already in reference)
- Social links: GitHub, LinkedIn, Instagram, Facebook

---

## Achievements Page

- Filter by type: **All** / **Certificate** / **Award** / **Competition**
- Card grid: achievement name, issuer, date, description
- Use `AchievementCard` from reference as base, reskin as needed

---

## Components to Reuse (from `common/components/elements/`)

| Component | Used in |
|---|---|
| `AnimateCounter` / `CountUp` | Home → About Snippet stats |
| `MarqueeElement` | Home → Tech Stack section |
| `SpotlightCard` | Home → Featured Projects |
| `GlareHover` | Projects page cards |
| `RotatingText` | Home → Hero title |
| `DecryptedText` / `ScrambleText` | Home → Hero subtitle |
| `ShinyText` / `GradientText` | Section headings accent |
| `MagicBento` | About page or Skills section (optional) |
| `ScrollStack` | Projects page (optional alternative layout) |
| `PageHeading` | All inner pages header |
| `SectionHeading` | All section headers |
| `Card` | Certificates, Achievements |
| `Button` | CTAs everywhere |
| `EmptyState` | Projects/Achievements when no results |
| `SkeletonLoader` | Loading states |
| `Notif` | Form submit feedback |
| `ThemeSwitcher` | Navbar |
| `BackButton` | Project detail page |

---

## What to Remove / Not Use

| Reference item | Action |
|---|---|
| `common/components/layouts/sidebar/` | Delete — replaced by Navbar |
| `modules/chat/` | Remove |
| `modules/contents/` (TikTok) | Remove |
| `modules/smarttalk/` | Remove |
| `modules/dashboard/` | Remove (can add later) |
| `app/api/chat/`, `app/api/tiktok/` | Remove |
| `app/api/wakatime/`, `app/api/monkeytype/`, `app/api/codewars/`, `app/api/umami/` | Remove |
| `app/api/auth/` + NextAuth + Firebase | Remove |
| `SessionProvider.tsx` | Remove |
| `app/[locale]/chat/`, `contents/`, `smart-talk/`, `dashboard/` | Remove |
| `app/[locale]/legal/` | Remove |
| `contents/` (MDX files from reference) | Remove — replace with own projects MDX |
| `modules/about/` (reference bio) | Rebuild with own content |
| `modules/home/` | Rebuild entirely |

---

## Data / Content Layer

All content lives in `messages/en.json` and `messages/id.json` plus constant files.

### Constant files to create/adapt
```
common/constants/
  personal.ts        ← name, title, bio, email, phone, address
  projects.ts        ← project list with featured flag, links, category
  skills.ts          ← tech stack list
  experience.ts      ← work experience entries
  education.ts       ← education entries
  certificates.ts    ← certificate entries
  achievements.ts    ← achievements list
  socialMedia.tsx    ← already exists, update with own links
  menu.tsx           ← update nav items to new pages
```

### i18n files
Adapt `messages/en.json` and `messages/id.json`:
- Remove reference owner's content
- Add Ahmad Reza Adrian's bio, descriptions, page headings

---

## Tech Stack (no changes needed)

| Item | Kept? |
|---|---|
| Next.js 14 (App Router) | Yes |
| TypeScript | Yes |
| Tailwind CSS | Yes |
| Framer Motion | Yes |
| `next-intl` (i18n) | Yes |
| `next-themes` (dark/light) | Yes |
| `aos` (scroll animations) | Yes |
| `react-loading-skeleton` | Yes |
| SWR | Yes (for any async data) |
| Zustand | Yes (theme + notif stores) |
| NextAuth + Firebase | **Removed** |
| Supabase | **Removed** |
| External stat APIs (Wakatime etc.) | **Removed** |

---

## Implementation Phases

---

### Phase 1 — Cleanup & Foundation

#### 1.1 Delete unused files & folders
- [ ] Remove `modules/chat/`
- [ ] Remove `modules/contents/`
- [ ] Remove `modules/smarttalk/`
- [ ] Remove `modules/dashboard/`
- [ ] Remove `app/api/chat/`
- [ ] Remove `app/api/tiktok/`
- [ ] Remove `app/api/auth/`
- [ ] Remove `app/api/wakatime/`, `app/api/monkeytype/`, `app/api/codewars/`, `app/api/umami/`, `app/api/read-stats/`
- [ ] Remove `app/[locale]/chat/`, `app/[locale]/contents/`, `app/[locale]/smart-talk/`, `app/[locale]/dashboard/`, `app/[locale]/legal/`
- [ ] Remove `SessionProvider.tsx`
- [ ] Remove `contents/` (MDX files from reference owner)
- [ ] Remove `common/components/layouts/sidebar/` folder entirely
- [ ] Remove unused dependencies from `package.json`: `next-auth`, `firebase`, `@firebase/firestore`, `@supabase/ssr`, `cloudinary`

#### 1.2 Update root layout (`app/[locale]/layout.tsx`)
- [ ] Remove `NextAuthProvider` wrapper
- [ ] Remove `getServerSession()` call
- [ ] Keep: `NextIntlClientProvider`, `ThemeProviderContext`, `SkeletonThemeProvider`
- [ ] Replace `<Layouts>` import with new layout component

#### 1.3 Rebuild main layout (`common/components/layouts/index.tsx`)
- [ ] Remove sidebar import and render
- [ ] Remove `ChatButton`
- [ ] New structure: `<Navbar />` + `<main>{children}</main>` + `<Footer />`
- [ ] Main content: `max-w-6xl mx-auto px-4 md:px-8 py-6`

#### 1.4 Build Navbar (`common/components/layouts/Navbar.tsx`)
- [ ] Fixed position, full width, `z-50`
- [ ] Scroll state: transparent bg → `backdrop-blur-md` + subtle bottom border on scroll
- [ ] **Desktop layout:** Logo text (left) · Nav links (center/right) · Theme toggle + Language toggle (far right)
- [ ] **Mobile layout:** Logo (left) · Hamburger button (right)
- [ ] **Mobile dropdown:** slides down when hamburger clicked, lists nav links + theme/lang toggles
- [ ] Active page highlight: underline or colored dot on current route
- [ ] Nav links sourced from updated `common/constants/menu.tsx`
- [ ] Language toggle: cycles EN ↔ ID, uses `next-intl` `useRouter` + `usePathname`
- [ ] Theme toggle: uses existing `ThemeSwitcher` component

#### 1.5 Build Footer (`common/components/layouts/Footer.tsx`)
- [ ] Simple two-row layout
- [ ] Row 1: Logo/name (left) · Nav links (center) · Social icon links (right)
- [ ] Row 2: Copyright text centered
- [ ] Top border: thin line separator
- [ ] Social links sourced from `common/constants/socialMedia.tsx` (update with own links)

#### 1.6 Update constants & i18n skeleton
- [ ] Update `common/constants/menu.tsx`: items = Home, About, Projects, Contact, Achievements
- [ ] Update `common/constants/socialMedia.tsx`: own GitHub, LinkedIn, Instagram, Facebook URLs
- [ ] Create `common/constants/personal.ts`: name, title, tagline, bio, email, phone, address
- [ ] Strip `messages/en.json` of reference owner's content, add own page/section key skeleton
- [ ] Strip `messages/id.json` same — fill Indonesian strings or leave as TODO

---

### Phase 2 — Home Page

File: `app/[locale]/page.tsx` → renders `modules/home/components/Home.tsx`

#### 2.1 Home assembly (`modules/home/components/Home.tsx`)
- [ ] Import and stack all 5 section components in order
- [ ] Each section separated by consistent vertical spacing (`py-20` or `py-24`)

#### 2.2 Hero Section (`modules/home/components/HeroSection.tsx`)
- [ ] Full viewport height (`min-h-screen`), centered vertically
- [ ] Background: CSS radial gradient (light: soft warm, dark: deep navy/black)
- [ ] **Left side (or center):** 
  - "Hi, I'm" label (small, muted)
  - Name in large bold font
  - Role line using `RotatingText` — cycles through: "Full-Stack Developer", "Backend Developer", "ML Enthusiast"
  - Short tagline paragraph
  - Two CTA buttons: `View Projects` (primary) + `Download CV` (outline)
  - Social icon row below buttons
- [ ] **Right side (desktop):** profile photo in a styled frame (rounded, with glow ring or border)
- [ ] Scroll-down indicator (animated chevron) at bottom center

#### 2.3 About Snippet (`modules/home/components/AboutSnippetSection.tsx`)
- [ ] Two-column: text content (left) + decorative element or stats (right)
- [ ] Left: `SectionHeading` + 2 short bio paragraphs
- [ ] Right: Stats grid (2×2) using `AnimateCounter`:
  - Years of experience
  - Projects completed
  - Certificates earned
  - Technologies used
- [ ] "More about me →" link to `/about`

#### 2.4 Featured Projects (`modules/home/components/FeaturedProjectsSection.tsx`)
- [ ] `SectionHeading` with label "Selected Work"
- [ ] 3 cards in a grid (1 col mobile, 3 col desktop) using `SpotlightCard`
- [ ] Each card: project thumbnail image, title, short description (1 line), tech stack pills (max 3 shown), GitHub + live link icons
- [ ] Only projects with `featured: true` from `common/constants/projects.ts`
- [ ] "See all projects →" link button below grid

#### 2.5 Tech Stack (`modules/home/components/TechStackSection.tsx`)
- [ ] `SectionHeading` with label "Tech Stack"
- [ ] Two `MarqueeElement` rows:
  - Row 1 (left to right): Frontend + Backend skills
  - Row 2 (right to left): Database + ML + Tools skills
- [ ] Each item: icon/emoji + skill name in a pill chip
- [ ] Data from `common/constants/skills.ts`

#### 2.6 Contact CTA (`modules/home/components/ContactCTASection.tsx`)
- [ ] Centered layout, contained card or full-width band
- [ ] Headline: "Let's Work Together" or similar
- [ ] Short subtext
- [ ] Primary button: "Send me a message" → links to `/contact`
- [ ] Secondary: email address as plain text link (`mailto:`)
- [ ] Social icon row

---

### Phase 3 — Inner Pages

#### 3.1 About Page (`app/[locale]/about/page.tsx` → `modules/about/`)

**3.1.1 Page shell**
- [ ] `PageHeading` at top with title + short intro line

**3.1.2 Bio section (`modules/about/components/Bio.tsx`)**
- [ ] 3 paragraphs of full bio text
- [ ] Profile photo on one side (desktop two-column, mobile stacked)

**3.1.3 Experience Timeline (`modules/about/components/ExperienceTimeline.tsx`)**
- [ ] `SectionHeading` with label "Experience"
- [ ] Vertical timeline: each entry has year/date range, role title, company, description
- [ ] Framer Motion stagger animation on scroll (each item fades in with delay)
- [ ] Data from `common/constants/experience.ts`

**3.1.4 Education Timeline (`modules/about/components/EducationTimeline.tsx`)**
- [ ] Same layout and style as Experience Timeline
- [ ] `SectionHeading` with label "Education"
- [ ] Data from `common/constants/education.ts`

**3.1.5 Certificates Grid (`modules/about/components/CertificatesGrid.tsx`)**
- [ ] `SectionHeading` with label "Certificates"
- [ ] 2–3 column `Card` grid
- [ ] Each card: certificate name, issuing organization, year, credential link (if any)
- [ ] Data from `common/constants/certificates.ts`

#### 3.2 Projects Page (`app/[locale]/projects/page.tsx` → `modules/projects/`)

**3.2.1 Page shell**
- [ ] `PageHeading` with title + description

**3.2.2 Filter tabs (`modules/projects/components/ProjectFilter.tsx`)**
- [ ] Tab buttons: All · Full-Stack · Frontend · Machine Learning
- [ ] Active tab has accent underline or filled background
- [ ] Filter state managed with `useState`

**3.2.3 Project grid (`modules/projects/components/ProjectGrid.tsx`)**
- [ ] Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop
- [ ] Each card uses `GlareHover` wrapper + `Card` inner
- [ ] Card content: thumbnail image, category badge, title, description, tech pills, links row
- [ ] `EmptyState` when filter returns no results
- [ ] Data from `common/constants/projects.ts`

#### 3.3 Contact Page (`app/[locale]/contact/page.tsx` → `modules/contact/`)

**3.3.1 Page shell**
- [ ] `PageHeading` with title + description

**3.3.2 Layout**
- [ ] Two-column desktop: form (left, wider) + contact info (right)
- [ ] Single column on mobile

**3.3.3 Contact form (`modules/contact/components/ContactForm.tsx`)**
- [ ] Fields: Name, Email, Phone (optional), Message (textarea)
- [ ] Validation with `react-hook-form`
- [ ] Submit calls `app/api/email/route.ts`
- [ ] On success/error: fires `Notif` store to show toast notification
- [ ] Submit button with loading state

**3.3.4 Contact info (`modules/contact/components/ContactInfo.tsx`)**
- [ ] Email, phone, address — each with icon
- [ ] Social media links list with icons (GitHub, LinkedIn, Instagram, Facebook)
- [ ] Data from `common/constants/personal.ts` + `socialMedia.tsx`

#### 3.4 Achievements Page (`app/[locale]/achievements/page.tsx` → `modules/achievements/`)

**3.4.1 Page shell**
- [ ] `PageHeading` with title + description

**3.4.2 Filter tabs (`modules/achievements/components/AchievementFilter.tsx`)**
- [ ] Tabs: All · Certificate · Award · Competition
- [ ] Reuse same filter tab pattern from Projects page

**3.4.3 Achievement grid (`modules/achievements/components/AchievementGrid.tsx`)**
- [ ] Card grid (2–3 cols)
- [ ] Each card: achievement name, type badge, issuer, date, short description
- [ ] `EmptyState` when no results
- [ ] Use existing `AchievementCard.tsx` from reference as base, adapt styling
- [ ] Data from `common/constants/achievements.ts`

---

### Phase 4 — Content & Polish

#### 4.1 Personal content
- [ ] Write full bio (EN + ID)
- [ ] Add all projects data with images, descriptions, links
- [ ] Add experience entries (internships, freelance, etc.)
- [ ] Add education entries
- [ ] Add certificates
- [ ] Add achievements
- [ ] Upload own profile photo to `public/images/`
- [ ] Upload CV PDF to `public/cv/`

#### 4.2 Indonesian translations
- [ ] Complete all keys in `messages/id.json`
- [ ] Test language toggle on all pages

#### 4.3 Responsive
- [ ] Test all pages on 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] Fix any overflow, spacing, or layout issues
- [ ] Ensure Navbar mobile dropdown works correctly

#### 4.4 Light/Dark theme
- [ ] Check all components render correctly in both themes
- [ ] Ensure text contrast passes on both modes
- [ ] Check `ThemeSwitcher` persists preference on reload

#### 4.5 Animation polish
- [ ] Review AOS delay values — stagger should feel natural, not too slow
- [ ] Check `AnimateCounter` triggers at right scroll position
- [ ] Ensure `RotatingText` timing feels smooth in Hero
- [ ] Reduce motion: verify `prefers-reduced-motion` is respected

#### 4.6 SEO & Metadata
- [ ] Add `generateMetadata()` to each page route
- [ ] Set `title`, `description`, `og:image`, `canonical` per page
- [ ] Upload og:image to `public/images/og.png`
- [ ] Update `common/constants/metadata.ts` with own details

#### 4.7 Final checks
- [ ] Run `npm run build` — fix any type errors or build warnings
- [ ] Check all internal links work
- [ ] Verify email API route works end-to-end
- [ ] Remove any leftover reference owner content (names, images, MDX)
