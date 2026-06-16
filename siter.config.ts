const siteConfig = {
  /* ─── Identity ─────────────────────────────────── */
  name: "Alex Morgan",
  tagline: "Photographer & Visual Storyteller",
  bio: "I shoot people, places, and the quiet moments in between. Based in Cape Town.",
  location: "Cape Town, South Africa",

  /* ─── Brand colours (CSS custom properties injected into :root) ─── */
  theme: {
    accent: "#C9A96E",
    background: "#0D0D0D",
    surface: "#161616",
    text: "#F0EDE8",
    muted: "#8A8580",
  },

  /* ─── Navigation ───────────────────────────────── */
  nav: [
    { label: "Portfolio", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "Contact", href: "/contact" },
  ],

  /* ─── Landing page ─────────────────────────────── */
  landing: {
    heroImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1400&q=80&auto=format",
    heroAlt: "A wide landscape photograph",
    portfolio: [
      {
        src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80&auto=format",
        alt: "Portrait in golden hour",
        caption: "Golden Hour",
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80&auto=format",
        alt: "Urban architecture",
        caption: "Geometry",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80&auto=format",
        alt: "Ocean coastline",
        caption: "Coastline",
      },
      {
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&auto=format",
        alt: "Portrait close up",
        caption: "Quiet",
      },
      {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80&auto=format",
        alt: "Desert dunes",
        caption: "Sand & Light",
      },
      {
        src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=80&auto=format",
        alt: "City at night",
        caption: "After Dark",
      },
    ],
  },

  /* ─── Collections ───────────────────────────────── */
  collections: [
    {
      slug: "cape-town-series",
      title: "Cape Town Series",
      year: "2024",
      description: "A documentary study of light and space across the Mother City.",
      coverImage:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format",
      images: [
        {
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format",
          alt: "Signal Hill at dusk",
        },
        {
          src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80&auto=format",
          alt: "Bo-Kaap colour",
        },
        {
          src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&auto=format",
          alt: "V&A Waterfront",
        },
        {
          src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80&auto=format",
          alt: "Clifton beach",
        },
        {
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format",
          alt: "Table Mountain cloud",
        },
        {
          src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80&auto=format",
          alt: "Long Street night",
        },
      ],
    },
    {
      slug: "solitude",
      title: "Solitude",
      year: "2023",
      description: "Portraits of stillness — remote places, single figures, absence.",
      coverImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format",
      images: [
        {
          src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format",
          alt: "Figure in fog",
        },
        {
          src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80&auto=format",
          alt: "Empty chair on pier",
        },
        {
          src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80&auto=format",
          alt: "Lone tree in field",
        },
        {
          src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80&auto=format",
          alt: "Abandoned building",
        },
      ],
    },
    {
      slug: "neon-and-rain",
      title: "Neon & Rain",
      year: "2023",
      description: "Night photography — cities after midnight, wet streets, neon glow.",
      coverImage:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80&auto=format",
      images: [
        {
          src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80&auto=format",
          alt: "Wet street reflection",
        },
        {
          src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80&auto=format",
          alt: "Neon signs in rain",
        },
        {
          src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&q=80&auto=format",
          alt: "Night market",
        },
        {
          src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format",
          alt: "Street light bokeh",
        },
        {
          src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80&auto=format",
          alt: "Taxi stand at 2am",
        },
      ],
    },
  ],

  /* ─── Contact page ──────────────────────────────── */
  contact: {
    heading: "Let's work together.",
    subheading: "Available for commissions, editorial, and commercial projects.",
    email: "hello@alexmorgan.com",
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
    social: [
      { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
      { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
    ],
  },

  /* ─── Footer ────────────────────────────────────── */
  footer: {
    copy: "© 2024 Alex Morgan. All rights reserved.",
  },

  /* ─── SEO / metadata ────────────────────────────── */
  seo: {
    title: "Alex Morgan — Photographer",
    description:
      "Portfolio of Alex Morgan, photographer and visual storyteller based in Cape Town.",
    ogImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80&auto=format",
  },
} as const;

export default siteConfig;
export type SiteConfig = typeof siteConfig;
