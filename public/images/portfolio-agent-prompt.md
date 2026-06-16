# Portfolio Website — VS Code Agent Prompt

---

## GOAL

Build a complete, production-ready personal portfolio website. It must be fully functional out of the box with placeholder content — the only thing the owner should ever need to touch is a single config file (`site.config.ts`) and the `public/images/` folder.

---

## TECH STACK

- **Frameportfolio**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Image handling**: Next.js `<Image>` component (optimised, lazy-loaded)
- **Form**: React Hook Form + basic fetch to a Formspree endpoint (configurable)
- **Fonts**: Next.js `next/font/google` — use `Inter` as base, `Playfair Display` for display headings

No database. No CMS. No auth. Pure static-friendly Next.js.

---

## FILE STRUCTURE

```
/
├── app/
│   ├── layout.tsx              # Root layout — font injection, metadata, Navbar, Footer
│   ├── page.tsx                # Landing / home page
│   ├── collections/
│   │   ├── page.tsx            # Collections index (tile grid)
│   │   └── [slug]/
│   │       └── page.tsx        # Single collection page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── portfolioGrid.tsx            # Masonry/grid for landing page images
│   ├── CollectionCard.tsx      # Tile card used on /collections
│   ├── ImageLightbox.tsx       # Full-screen image viewer with prev/next
│   ├── ContactForm.tsx
│   └── PageTransition.tsx      # Framer Motion page fade wrapper
├── lib/
│   └── collections.ts          # Helper — reads collections from site.config
├── public/
│   └── images/
│       ├── hero.jpg            # Landing hero image (full width)
│       ├── portfolio/               # Images shown in the landing portfolio grid
│       │   └── *.jpg
│       └── collections/
│           ├── cover-*.jpg     # Cover image for each collection tile
│           └── [slug]/
│               └── *.jpg       # Images inside each collection
├── site.config.ts              # ← THE ONLY FILE THE OWNER EDITS
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## `site.config.ts` — THE CONFIG FILE

This is the single source of truth. Generate it fully typed. Every piece of visible text, every image path, every link, and every colour lives here.

```ts
// site.config.ts
const siteConfig = {

  /* ─── Identity ─────────────────────────────────── */
  name: "Alex Morgan",
  tagline: "Photographer & Visual Storyteller",
  bio: "I shoot people, places, and the quiet moments in between. Based in Cape Town.",
  location: "Cape Town, South Africa",

  /* ─── Brand colours (CSS custom properties injected into :root) ─── */
  theme: {
    accent: "#C9A96E",          // warm gold — used for hover states, active nav
    background: "#0D0D0D",      // near-black site bg
    surface: "#161616",         // card / nav bg
    text: "#F0EDE8",            // primary text
    muted: "#7A7570",           // secondary / caption text
  },

  /* ─── Navigation ───────────────────────────────── */
  nav: [
    { label: "portfolio",        href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "Contact",     href: "/contact" },
  ],

  /* ─── Landing page ─────────────────────────────── */
  landing: {
    heroImage: "/images/hero.jpg",
    heroAlt: "A wide landscape photograph",
    // Images shown in the portfolio grid below the hero
    portfolio: [
      { src: "/images/portfolio/01.jpg", alt: "Portrait in golden hour", caption: "Golden Hour" },
      { src: "/images/portfolio/02.jpg", alt: "Urban architecture", caption: "Geometry" },
      { src: "/images/portfolio/03.jpg", alt: "Ocean coastline", caption: "Coastline" },
      { src: "/images/portfolio/04.jpg", alt: "Portrait close up", caption: "Quiet" },
      { src: "/images/portfolio/05.jpg", alt: "Desert dunes", caption: "Sand & Light" },
      { src: "/images/portfolio/06.jpg", alt: "City at night", caption: "After Dark" },
    ],
  },

  /* ─── Collections ───────────────────────────────── */
  collections: [
    {
      slug: "cape-town-series",
      title: "Cape Town Series",
      year: "2024",
      description: "A documentary study of light and space across the Mother City.",
      coverImage: "/images/collections/cover-cape-town.jpg",
      images: [
        { src: "/images/collections/cape-town-series/01.jpg", alt: "Signal Hill at dusk" },
        { src: "/images/collections/cape-town-series/02.jpg", alt: "Bo-Kaap colour" },
        { src: "/images/collections/cape-town-series/03.jpg", alt: "V&A Waterfront" },
        { src: "/images/collections/cape-town-series/04.jpg", alt: "Clifton beach" },
        { src: "/images/collections/cape-town-series/05.jpg", alt: "Table Mountain cloud" },
        { src: "/images/collections/cape-town-series/06.jpg", alt: "Long Street night" },
      ],
    },
    {
      slug: "solitude",
      title: "Solitude",
      year: "2023",
      description: "Portraits of stillness — remote places, single figures, absence.",
      coverImage: "/images/collections/cover-solitude.jpg",
      images: [
        { src: "/images/collections/solitude/01.jpg", alt: "Figure in fog" },
        { src: "/images/collections/solitude/02.jpg", alt: "Empty chair on pier" },
        { src: "/images/collections/solitude/03.jpg", alt: "Lone tree in field" },
        { src: "/images/collections/solitude/04.jpg", alt: "Abandoned building" },
      ],
    },
    {
      slug: "neon-and-rain",
      title: "Neon & Rain",
      year: "2023",
      description: "Night photography — cities after midnight, wet streets, neon glow.",
      coverImage: "/images/collections/cover-neon-rain.jpg",
      images: [
        { src: "/images/collections/neon-and-rain/01.jpg", alt: "Wet street reflection" },
        { src: "/images/collections/neon-and-rain/02.jpg", alt: "Neon signs in rain" },
        { src: "/images/collections/neon-and-rain/03.jpg", alt: "Night market" },
        { src: "/images/collections/neon-and-rain/04.jpg", alt: "Street light bokeh" },
        { src: "/images/collections/neon-and-rain/05.jpg", alt: "Taxi stand at 2am" },
      ],
    },
  ],

  /* ─── Contact page ──────────────────────────────── */
  contact: {
    heading: "Let's portfolio together.",
    subheading: "Available for commissions, editorial, and commercial projects.",
    email: "hello@alexmorgan.com",
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // replace with real ID
    social: [
      { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
      { label: "LinkedIn",  href: "https://linkedin.com/",  icon: "linkedin" },
    ],
  },

  /* ─── Footer ────────────────────────────────────── */
  footer: {
    copy: "© 2024 Alex Morgan. All rights reserved.",
  },

  /* ─── SEO / metadata ────────────────────────────── */
  seo: {
    title: "Alex Morgan — Photographer",
    description: "Portfolio of Alex Morgan, photographer and visual storyteller based in Cape Town.",
    ogImage: "/images/hero.jpg",
  },

} as const;

export default siteConfig;
export type SiteConfig = typeof siteConfig;
```

---

## PAGE DESIGNS

### `/` — Landing Page

**Layout**: Full-viewport hero image → name + tagline overlaid (bottom-left, large serif font) → scrolling portfolio grid below.

**Hero section**:
- Full-width, full-height (`100svh`) `<Image>` with `object-fit: cover`
- Gradient overlay (bottom: black → transparent) so text is always legible
- `name` in Playfair Display, ~64px, white
- `tagline` in Inter Light, ~18px, muted white
- Subtle fade-up animation on mount (Framer Motion)

**portfolio grid**:
- CSS Columns (2 cols desktop, 1 col mobile) — true masonry with no JS library needed
- Each image reveals a caption on hover (slide up from bottom, opacity 0→1)
- Click any image → opens `ImageLightbox` (full screen, arrow key navigation, click-outside or Esc to close)
- Image load: blurred placeholder using Next.js `placeholder="blur"` + `blurDataURL`

---

### `/collections` — Collections Index

**Layout**: Page title "Collections" (top, minimal) → responsive tile grid of collection cards.

**CollectionCard**:
- Fixed aspect ratio (`aspect-[3/4]` portrait card)
- Cover image fills the card with `object-fit: cover`
- Hover: image scales up slightly (scale 1.03, transition 400ms) + overlay fades in
- Overlay shows: collection `title` (Playfair, white, large), `year` (small, muted), arrow icon
- Cards link to `/collections/[slug]`
- Grid: 3 cols desktop, 2 cols tablet, 1 col mobile with `gap-4`
- Staggered entrance animation (Framer Motion, each card delays by index × 80ms)

---

### `/collections/[slug]` — Single Collection Page

**Layout**: Same feel as the landing page — minimal top bar with back arrow + collection title → full-width hero (first image of the collection, same 100svh treatment as landing) → masonry grid of remaining images below.

**Top bar**: Back arrow + collection title (centered) + year (right-aligned) — all on one line, sticky on scroll (very subtle background blur via `backdrop-filter`)

**Hero image**: First image in the collection's `images[]` array, same hero treatment as landing (gradient overlay, title text bottom-left: collection `title` in Playfair + `description` in Inter Light below it)

**Image grid**: Same CSS columns masonry as landing, remaining images (index 1+). Click any → opens `ImageLightbox` across ALL images in the collection (including hero at index 0).

**Description block**: After the grid — `description` text centred, max-width 600px, elegant serif font, generous padding.

---

### `/contact` — Contact Page

**Layout**: Split — left side is a large, minimal text block; right side has the form. On mobile: stacked.

**Left side**:
- `heading` in Playfair Display, ~48px
- `subheading` in Inter, muted
- `email` as a mailto link with hover underline
- Social links as icon+label rows

**Right side (ContactForm)**:
- Fields: Name, Email, Message (textarea)
- Minimal styling: no card, just underline-style inputs (bottom border only, transparent bg)
- Submit button: solid accent-colour background, full-width on mobile
- On submit: loading spinner → success message ("Thanks, I'll be in touch.") or error state
- Posts to `formspreeEndpoint` from config

---

## COMPONENTS TO BUILD

### `Navbar.tsx`
- Fixed top, full width
- Transparent on hero scroll position → `surface` colour after scroll threshold (20px)
- Left: `name` from config (small, light weight)
- Right: nav links from config
- Active link styled with `accent` colour
- Hamburger menu on mobile (Framer Motion animated open/close)
- `backdrop-filter: blur(12px)` when scrolled

### `ImageLightbox.tsx`
- Portal to `document.body` (use `createPortal`)
- Black background (`rgba(0,0,0,0.95)`)
- Image centred with `max-height: 90vh`, `max-width: 90vw`
- Left/right arrow buttons (keyboard: ← →, Esc to close)
- Image counter: "3 / 8" bottom centre
- Alt text shown as caption below image
- Swipe support: detect `touchstart`/`touchend` delta for mobile swipe navigation
- Opening animation: scale 0.95 → 1 + opacity 0 → 1

### `PageTransition.tsx`
- Wrap every page's content: opacity 0 → 1, translateY 8px → 0, duration 350ms

### `Footer.tsx`
- One line, centred, small text, muted colour
- `copy` from config

---

## STYLING RULES

Implement these as Tailwind config extensions + CSS custom properties:

```css
/* globals.css */
:root {
  --accent: /* from config */;
  --bg: /* from config */;
  --surface: /* from config */;
  --text: /* from config */;
  --muted: /* from config */;
}
```

Inject config theme values into CSS variables dynamically in `app/layout.tsx` using a `<style>` tag with template literals — so changing `site.config.ts` theme values immediately changes the site colours.

**Design principles**:
- Dark by default (from config)
- No borders except subtle (`1px solid rgba(255,255,255,0.06)`)
- Generous whitespace — section padding `py-24` desktop, `py-16` mobile
- All text transitions have `transition-opacity duration-300`
- Hover states never jump — always ease-in-out transitions ≥ 200ms
- No box shadows except `0 0 0 1px` focus rings on form inputs
- Images are always `object-fit: cover` — never distorted

---

## PLACEHOLDER IMAGES

Since real images won't exist yet, use **Unsplash Source URLs** as placeholder `src` values everywhere in `site.config.ts` defaults. Format:

```
https://images.unsplash.com/photo-[ID]?w=1200&q=80&auto=format
```

Pick appropriate photography-themed Unsplash photos for each slot (landscapes, portraits, urban). The owner replaces these URLs (or adds local files to `public/images/`) when ready.

For Next.js `<Image>` with external URLs, add the Unsplash domain to `next.config.ts`:

```ts
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};
export default nextConfig;
```

For `blurDataURL`, generate a tiny 8×8 pixel base64 placeholder (dark grey) and use it universally.

---

## RESPONSIVE BREAKPOINTS

Use Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Every layout must look intentional at all breakpoints. Test mentally at 375px (mobile), 768px (tablet), 1440px (desktop).

---

## ACCESSIBILITY

- All `<Image>` components have meaningful `alt` text (from config)
- Navbar has `aria-label="Main navigation"`
- Lightbox has `role="dialog"`, `aria-modal="true"`, `aria-label="Image viewer"`, focus trap
- Contact form has proper `<label>` for every input
- Colour contrast: muted text on dark bg must pass AA (check `#7A7570` on `#0D0D0D` — if it fails, lighten muted to `#8A8580`)
- Skip-to-content link as first element in `<body>`

---

## WHAT TO GENERATE (in order)

1. `package.json` — with all dependencies listed above
2. `tailwind.config.ts` — extend with `fontFamily: { serif: ['Playfair Display', 'serif'], sans: ['Inter', 'sans-serif'] }`
3. `next.config.ts`
4. `site.config.ts` — full file as shown above with Unsplash placeholder URLs
5. `app/globals.css` — CSS variables + minimal resets
6. `app/layout.tsx` — injects theme CSS vars, loads fonts, renders Navbar + Footer + PageTransition
7. `components/Navbar.tsx`
8. `components/Footer.tsx`
9. `components/PageTransition.tsx`
10. `components/ImageLightbox.tsx`
11. `components/HeroSection.tsx`
12. `components/portfolioGrid.tsx`
13. `components/CollectionCard.tsx`
14. `components/ContactForm.tsx`
15. `lib/collections.ts`
16. `app/page.tsx`
17. `app/collections/page.tsx`
18. `app/collections/[slug]/page.tsx`
19. `app/contact/page.tsx`
20. `README.md` — explains exactly which files to edit and how to add new collections

After generating all files, run:
```bash
npm install && npm run build
```
Fix any TypeScript or build errors before finishing.

---

## DEFINITION OF DONE

- `npm run build` completes with zero errors
- All three routes (`/`, `/collections`, `/contact`) render with placeholder content
- Clicking a collection tile navigates to its detail page
- Lightbox opens, navigates prev/next with arrows and keyboard, closes with Esc
- Contact form submits (to placeholder Formspree endpoint) and shows success state
- Site looks intentional and complete on mobile (375px) and desktop (1440px)
- The only files an owner ever needs to touch are `site.config.ts` and `public/images/`
