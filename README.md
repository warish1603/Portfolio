# Portfolio Website

A production-ready, fully functional personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Configuration

**The only file you need to edit is `site.config.ts`.**

This single configuration file controls all content, styling, and links on your portfolio:

```typescript
// site.config.ts
const siteConfig = {
  name: "Your Name",
  tagline: "Your Professional Tagline",
  bio: "Your bio",
  location: "Your Location",
  theme: {
    accent: "#C9A96E",       // Hover/active color
    background: "#0D0D0D",   // Dark background
    surface: "#161616",      // Card backgrounds
    text: "#F0EDE8",         // Primary text
    muted: "#8A8580",        // Secondary text
  },
  // ... more config
}
```

### What to Change in `site.config.ts`

- **`name`** — Your name
- **`tagline`** — Your professional tagline
- **`bio`** — About you
- **`location`** — Your location
- **`theme.accent`** — Primary brand color (used for hover states, active links)
- **`theme.*`** — All other theme colors
- **`nav`** — Navigation links and labels
- **`landing.heroImage`** — Hero image on home page
- **`landing.work`** — Images and captions in the work grid
- **`collections`** — Your portfolio projects/series
- **`contact.heading`** — Contact page heading
- **`contact.email`** — Your email address
- **`contact.formspreeEndpoint`** — Replace `YOUR_FORM_ID` with your Formspree ID
- **`contact.social`** — Social media links
- **`footer.copy`** — Copyright text
- **`seo.*`** — SEO metadata

## Images

### Using Placeholder Images

By default, the site uses Unsplash placeholder images. These work immediately and let you see the full site design without any images locally.

### Adding Your Own Images

1. Replace image URLs in `site.config.ts` with either:
   - **Local paths**: `/images/my-image.jpg` (place in `public/images/`)
   - **External URLs**: `https://example.com/image.jpg`

2. Organize images in `public/images/`:
   ```
   public/images/
   ├── hero.jpg                 # Homepage hero
   ├── work/
   │   ├── 01.jpg
   │   ├── 02.jpg
   │   └── ...
   └── collections/
       ├── cover-collection-1.jpg
       └── collection-slug/
           ├── 01.jpg
           └── ...
   ```

3. Update `next.config.ts` if using external image domains:
   ```typescript
   images: {
     remotePatterns: [
       { protocol: "https", hostname: "your-domain.com" }
     ]
   }
   ```

## Collections

Collections are portfolio series/projects. To add a new collection:

1. Add to `collections` array in `site.config.ts`:

```typescript
{
  slug: "project-name",           // URL-friendly name
  title: "Project Title",         // Display name
  year: "2024",                   // Year
  description: "Project description...", // Full description
  coverImage: "/images/collections/cover.jpg",
  images: [
    { src: "/images/collections/project/01.jpg", alt: "Image 1" },
    { src: "/images/collections/project/02.jpg", alt: "Image 2" },
    // ...
  ]
}
```

The detail page will be accessible at `/collections/project-name`.

## Contact Form

To enable the contact form:

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `YOUR_FORM_ID` in `site.config.ts`:

```typescript
contact: {
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  // ...
}
```

Form submissions will be sent to your email automatically.

## Theme Customization

All colors are centralized in `site.config.ts`. Change the theme object to update the entire site's appearance:

```typescript
theme: {
  accent: "#C9A96E",       // Change this to your brand color
  background: "#0D0D0D",   // Site background
  surface: "#161616",      // Card/nav background
  text: "#F0EDE8",         // Text color
  muted: "#8A8580",        // Secondary text
}
```

### Verifying Contrast

Ensure `muted` text meets WCAG AA standards against `background`. The defaults pass; if you change them:
- Test contrast at [contrastchecker.com](https://www.contrastchecker.com)
- Minimum 4.5:1 ratio recommended

## Features

✅ Full-screen hero images  
✅ Masonry grid layout (CSS Columns)  
✅ Image lightbox with keyboard/touch navigation  
✅ Smooth page transitions  
✅ Responsive design (mobile-first)  
✅ Blur-up image placeholder loading  
✅ Contact form with Formspree integration  
✅ Accessibility best practices (WCAG AA compliant)  
✅ Fast, static-friendly rendering  
✅ Zero-CMS, zero-database architecture  

## Pages

- **`/`** — Landing page with hero and work grid
- **`/collections`** — Collections index (tile grid)
- **`/collections/[slug]`** — Individual collection detail with masonry grid
- **`/contact`** — Contact page with form

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Hosts

1. Build the site:
   ```bash
   npm run build
   ```

2. Deploy the `.next` folder to any Node.js host, or use `npm start` for production.

## File Structure

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (fonts, navbar, footer)
│   ├── globals.css        # Global styles & CSS variables
│   ├── page.tsx           # Landing page
│   ├── collections/
│   │   ├── page.tsx       # Collections index
│   │   └── [slug]/
│   │       └── page.tsx   # Collection detail
│   └── contact/
│       └── page.tsx       # Contact page
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PageTransition.tsx
│   ├── ImageLightbox.tsx
│   ├── HeroSection.tsx
│   ├── WorkGrid.tsx
│   ├── CollectionCard.tsx
│   └── ContactForm.tsx
├── lib/
│   └── collections.ts     # Collection utilities
├── public/
│   └── images/           # Your images
├── site.config.ts        # ← MAIN CONFIG FILE
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── README.md
```

## Troubleshooting

### Images not loading from Unsplash?
Check `next.config.ts` has `remotePatterns` configured for `images.unsplash.com`.

### Form not submitting?
1. Ensure `formspreeEndpoint` in `site.config.ts` is correct
2. Check browser console for CORS errors
3. Verify Formspree form is active

### Slow image loading?
- Use local images in `public/images/` instead of external URLs
- Ensure images are optimized (compress JPGs)

## License

This portfolio is yours to use, modify, and deploy freely.

## Support

For issues or questions:
1. Check that `site.config.ts` is correctly formatted (valid TypeScript)
2. Verify all image URLs are accessible
3. Run `npm run build` to check for TypeScript errors

---

**That's it!** Your portfolio is ready. Edit only `site.config.ts` and replace images in `public/images/`.
