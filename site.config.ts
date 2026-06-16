const siteConfig = {
  /* ─── Identity ─────────────────────────────────── */
  name: "cobraghai",
  tagline: "Visual Work",
  bio: "In pursuit of immortalizing feelings of community and love.",
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
    heroImage: "/images/000029.JPG",
    heroAlt: "landscape photograph of autumn leaves",
    heroWidth: 5397,
    heroHeight: 3649,
    portfolio: [
      {
        src: "/images/09C70341-758E-4F2B-89A3-41A5134031F9.jpeg",
        alt: "Portrait of two people in a light filled street",
        caption: "April First Thursdays Longkloof",
        width: 4096, height: 2769,
      },
      {
        src: "/images/92F90F9F-1059-4B16-8143-AA77E7861710.jpeg",
        alt: "Two men sat in an vintage lounge",
        caption: "Awonke Moko and Vaice at prettygirlslikeevents",
        width: 4096, height: 2769,
      },
      {
        src: "/images/98B333A5-07A2-479D-8AED-D387494CDDDC.jpeg",
        alt: "Man by a pool eating watermelon",
        caption: "Archer House",
        width: 4096, height: 2769,
      },
      {
        src: "/images/A3BA098C-E0B1-4B12-B1E0-AF530D47C6EF.jpeg",
        alt: "Palm trees",
        caption: "Malindi",
        width: 4096, height: 2769,
      },
      {
        src: "/images/DEFD3B21-EAAF-4049-BC21-F8A31CD75034.jpeg",
        alt: "Beach Cabanas",
        caption: "Hold down the fort",
        width: 4096, height: 2769,
      },
      {
        src: "/images/BB6DC97B-7DFC-417A-9013-891E784531D9.jpeg",
        alt: "City at night",
        caption: "Crowded nights",
        width: 2324, height: 3438,
      },
      {
        src: "/images/E38DFDDA-33AD-4BEF-B01A-F8FE616725A2.jpeg",
        alt: "Bassist playing in a band",
        caption: "Kokoroko",
        width: 2324, height: 3438,
      },
      {
        src: "/images/837A323E-9429-4043-83C4-BC60655C7559.jpeg",
        alt: "Marathon runners at midday",
        caption: "Sanlam marathon",
        width: 2324, height: 3438,
      },
      {
        src: "/images/BB81501A-327C-4AFB-9E4B-48E785ACCE68.jpeg",
        alt: "Man walking down graduation steps",
        caption: "Walk of glory",
        width: 2324, height: 3438,
      }
    ],
  },

  /* ─── Collections page ────────────────────────────── */
  collectionsHero: {
    heroImage: "/images/1AF50B8E-D388-4506-815C-BCFE025E87FD.jpeg",
    heroAlt: "collections hero image",
    heroWidth: 1565,
    heroHeight: 2783,
  },

  /* ─── Collections ───────────────────────────────── */
  collections: [
    {
      slug: "cof-2026",
      title: "Captured on Film 2026",
      year: "2026",
      description: "Series of memories throughout the year, captured on 35mm film.",
      coverImage:{ src: "/images/1AF50B8E-D388-4506-815C-BCFE025E87FD.jpeg", alt: "Cover image for Captured on Film 2026"
        , width: 1565, height: 2783
       },
      heroImage: { src: "/images/1AF50B8E-D388-4506-815C-BCFE025E87FD.jpeg", alt: "Captured on Film 2026 hero", width: 1565, height: 2783 },
      images: [
        {
          src: "/images/C6B24775-4DDE-4B76-854E-E89DD9C50F9E.jpeg",
          alt: "Signal Hill at dusk",
          width: 2324, height: 3438,
        },
        {
          src: "/images/530CC08B-0645-4E3D-BD77-4D92C160F2BF.jpeg",
          alt: "Bo-Kaap colour",
          width: 2324, height: 3438,
        },
        {
          src: "/images/0CD18E22-EBBF-4E61-8B6A-1000FF875EC7.jpeg",
          alt: "V&A Waterfront",
          width: 2324, height: 3438,
        },
        {
          src: "/images/38021421-B9C0-42B1-8530-1103CC64B188.jpeg",
          alt: "Clifton beach",
          width: 2324, height: 3438,
        },
        {
          src: "/images/697525F0-6AB7-4385-B023-5D118213015A.jpeg",
          alt: "Table Mountain cloud",
          width: 2324, height: 3438,
        },
        {
          src: "/images/183D8265-F037-4D54-B001-F5EA64DC887C.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/09C70341-758E-4F2B-89A3-41A5134031F9.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/4ADE82FD-53B6-4A42-A420-09A31397F742.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/F1C723F0-824B-4E8E-8E5F-A6DE77FCA4F6.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/BB6DC97B-7DFC-417A-9013-891E784531D9.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/3535CCAA-1753-465B-B84E-9FA23AD9F4ED.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/0584A743-55A1-4744-B71B-CFFCAC59EA10.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/57D5599A-6DF0-4B37-9A40-637891DC9FB5.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/899B9991-7BF7-4632-AD25-0FC9010D4A43.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/E0BC9EE0-E9CA-4F47-97E3-F98C819C026E.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/E03E4982-F115-4137-B43A-840F04F08159.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/E38DFDDA-33AD-4BEF-B01A-F8FE616725A2.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/F0CAFA2F-71FD-4155-8C69-775FE9EAF717.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/86AC3A72-C2BF-4980-8CC1-7FA2276A83C9.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/837A323E-9429-4043-83C4-BC60655C7559.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
        },
        {
          src: "/images/7F1E6270-1A9A-4CFD-8AC2-FC7F9344CA7D.jpeg",
          alt: "Long Street night",
          width: 2324, height: 3438,
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
    copy: "© 2026 cobraghai. All rights reserved.",
  },

  /* ─── SEO / metadata ────────────────────────────── */
  seo: {
    title: "cobraghai — Photographer",
    description:
      "Portfolio of cobraghai, photographer and visual storyteller based in Cape Town.",
    ogImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80&auto=format",
    favicon:"https://example.com/favicon.icon",  
  },
} as const;

export default siteConfig;
export type SiteConfig = typeof siteConfig;
