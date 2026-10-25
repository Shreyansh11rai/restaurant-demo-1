# AGENTS.md: Restaurant Static Website (config-driven layouts)

## Goal

Build a static, mobile-first restaurant website in Next.js. Every section has 3 interchangeable layout variants. The owner of the repo (the developer) switches variants and the theme in one config file, rebuilds, and the output changes. All text, images and links come from one data file. No CMS, no backend, no database.

## Stack and constraints

- Next.js (App Router), TypeScript, React, Tailwind CSS (core utilities, colours via CSS variables).
- Static export: `output: "export"`, `trailingSlash: true`, `images: { unoptimized: true }` in `next.config`.
- No UI libraries, no animation libraries, no external scripts. Fonts via `next/font/google`.
- No localStorage or sessionStorage. No API routes. No server actions.
- Mobile-first CSS. Use `min-width` media queries only (Tailwind `md:` `lg:`).
- Support a base path: all local asset URLs (images, PDFs) go through `withBase()` in `src/lib/withBase.ts`, which prefixes `process.env.NEXT_PUBLIC_BASE_PATH ?? ""`.

## Pages (exactly these 5, nothing else)

| Route      | Contents                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------- |
| `/` Home   | Hero, Signature dishes, About (compact), Gallery (first 6, link to /gallery), Contact (compact) |
| `/menu`    | Menu section + download buttons                                                                 |
| `/gallery` | Gallery section (all images)                                                                    |
| `/about`   | About section (full)                                                                            |
| `/contact` | Contact section (full: info, reservation form, map)                                             |

Every page also renders Header, Footer and Floating Actions. Do not add other pages (no blog, no offers page, no cart, no login).

## Files and folders

```
src/
  config/site.config.ts      <- the ONLY file the developer edits to switch looks
  data/content.ts            <- the ONLY file holding content (text, images, links)
  lib/
    themes.ts                <- 3 theme presets (CSS variables)
    withBase.ts
    whatsapp.ts              <- builds wa.me links
  components/
    sections/
      header/    Header1.tsx Header2.tsx Header3.tsx index.tsx
      hero/      Hero1.tsx Hero2.tsx Hero3.tsx index.tsx
      signature/ Signature1.tsx Signature2.tsx Signature3.tsx index.tsx
      about/     About1.tsx About2.tsx About3.tsx index.tsx
      menu/      Menu1.tsx Menu2.tsx Menu3.tsx index.tsx
      gallery/   Gallery1.tsx Gallery2.tsx Gallery3.tsx index.tsx
      contact/   Contact1.tsx Contact2.tsx Contact3.tsx index.tsx
      footer/    Footer1.tsx Footer2.tsx Footer3.tsx index.tsx
      actions/   Actions1.tsx Actions2.tsx Actions3.tsx index.tsx
    ui/          Lightbox.tsx, Button.tsx, DownloadMenuButtons.tsx, SectionTitle.tsx
  app/
    layout.tsx, page.tsx, sitemap.ts, robots.ts
    menu/page.tsx, gallery/page.tsx, about/page.tsx, contact/page.tsx
public/
  images/    <- all site images
  menu/      <- menu.pdf and menu page images (menu-1.jpg, menu-2.jpg ...)
```

## Config file (`src/config/site.config.ts`)

```ts
export type Variant = 1 | 2 | 3;

export const siteConfig = {
  theme: "royal" as "royal" | "modern" | "bold",
  layout: {
    header: 1 as Variant,
    hero: 1 as Variant,
    signature: 1 as Variant,
    about: 1 as Variant,
    menu: 1 as Variant,
    gallery: 1 as Variant,
    contact: 1 as Variant,
    footer: 1 as Variant,
    actions: 1 as Variant,
  },
};
```

Selector pattern for every section (`index.tsx`). An unknown or missing value falls back to variant 1:

```tsx
import { siteConfig } from "@/config/site.config";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
const variants = { 1: Hero1, 2: Hero2, 3: Hero3 } as const;
export default function Hero() {
  const V = variants[siteConfig.layout.hero] ?? Hero1;
  return <V />;
}
```

Variants import content from `@/data/content` themselves. Sections used on the Home page accept `compact?: boolean`.

## Data file (`src/data/content.ts`)

All content is here. Components must contain zero hardcoded business text, phone numbers, prices or image paths. Shape:

```ts
export const content = {
  brand: {
    name: "",
    tagline: "",
    logo: "/images/logo.svg",
    cuisine: "",
    established: "",
  },
  contact: {
    phone: "+91XXXXXXXXXX",
    whatsapp: "91XXXXXXXXXX", // digits only, with country code
    whatsappGreeting: "Hello, I'd like to book a table.",
    email: "",
    address: "",
    city: "",
    mapEmbedUrl: "", // Google Maps embed src
    mapLink: "", // "Get directions" link
    hours: [{ days: "Mon-Sun", time: "12:00 PM - 11:00 PM" }],
  },
  social: { facebook: "", instagram: "", linkedin: "", x: "" }, // empty string = hide icon
  hero: {
    headline: "",
    subtext: "",
    image: "/images/hero-1.jpg",
    slides: ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"], // used by Hero3
    primaryCta: { label: "View Menu", href: "/menu" },
    secondaryCta: { label: "Book on WhatsApp", action: "whatsapp" },
  },
  signature: [{ name: "", description: "", price: "", image: "", veg: true }],
  about: {
    title: "",
    story: ["paragraph 1", "paragraph 2"],
    image: "/images/about.jpg",
    quote: "",
    highlights: [{ title: "", text: "" }],
    stats: [{ value: "", label: "" }],
  },
  menu: {
    note: "Prices inclusive of taxes.",
    categories: [
      {
        name: "Starters",
        items: [
          {
            name: "",
            description: "",
            price: "",
            veg: true,
            tags: ["chef's pick"],
          },
        ],
      },
    ],
    files: [
      // downloadable menu
      { label: "Download Menu (PDF)", file: "/menu/menu.pdf", type: "pdf" },
      { label: "Menu Page 1", file: "/menu/menu-1.jpg", type: "image" },
    ],
  },
  gallery: [{ src: "/images/g-1.jpg", alt: "", category: "food" }],
  seo: {
    siteUrl: "https://example.com",
    pages: {
      home: { title: "", description: "" },
      menu: { title: "", description: "" },
      gallery: { title: "", description: "" },
      about: { title: "", description: "" },
      contact: { title: "", description: "" },
    },
    ogImage: "/images/og.jpg",
  },
  footer: {
    copyright: "",
    extraLinks: [] as { label: string; href: string }[],
  },
};
```

Rules: empty optional fields hide their UI (no empty icons, no empty headings). Placeholder content must be obvious (for example "Add your tagline") so nothing fake ships by accident.

## Themes (`src/lib/themes.ts`)

Inject the chosen theme's CSS variables server-side in `layout.tsx` with a `<style>` tag (no flash). Light only. Variables per theme: `--theme-canvas, --theme-surface, --theme-surface-muted, --theme-foreground, --theme-muted, --theme-border, --theme-primary, --theme-primary-hover, --theme-primary-foreground, --theme-accent, --theme-overlay, --radius`.

| Theme    | Direction                                                                                                               | Palette                                                                                                                                        | Fonts (`next/font/google`)                        |
| -------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `royal`  | Premium North Indian fine dining: black, gold, ivory. Optional subtle jaali pattern as a CSS/SVG background in dividers | canvas `#0e0c0a`, surface `#1a1612`, foreground `#f5efe4`, primary `#c9a24b`, accent `#8a6a1f`, border `#3a3226`, primary-foreground `#0e0c0a` | Cormorant Garamond (display) + Inter (body)       |
| `modern` | Modern Indian bistro: warm off-white, terracotta, deep green                                                            | canvas `#faf6f0`, surface `#ffffff`, foreground `#231f1a`, primary `#b8472a`, accent `#2f5d50`, border `#e6dccd`, primary-foreground `#ffffff` | Fraunces (display) + DM Sans (body)               |
| `bold`   | High-energy casual and grill: charcoal, saffron-orange                                                                  | canvas `#fff8ee`, surface `#ffffff`, foreground `#16130f`, primary `#e8590c`, accent `#16130f`, border `#f0dcc0`, primary-foreground `#ffffff` | Poppins (display, heavy weights) + Poppins (body) |

Derive `--theme-primary-hover`, `--theme-surface-muted`, `--theme-muted` and `--theme-overlay` sensibly per theme. Text must meet WCAG AA contrast on its background.

## Section variants (build all 3 for each)

**Header**

1. Classic: logo left, links right, "Book on WhatsApp" button, sticky solid bar.
2. Centered logo, links split on both sides, transparent over the hero and solid after scrolling 40px.
3. Minimal: logo plus menu button on every screen size, full-screen overlay menu.
   Mobile for 1 and 2: hamburger with accessible slide-down menu (focus trap, Esc closes).

**Hero**

1. Full-screen image, dark overlay, centered headline and 2 buttons.
2. Split layout: text left, image right (stacked on mobile), with chips for cuisine and opening hours.
3. Auto-crossfading image slideshow (CSS only, 3 images from `hero.slides`) with a bottom info bar (hours, address, call button). Respect `prefers-reduced-motion`.

**Signature dishes**

1. 3-column cards: image, name, short description, price.
2. Alternating image/text rows.
3. Horizontal scroll-snap carousel (no library).

**About** (`compact` shows the first paragraph plus a "Read our story" link)

1. Image beside text, with a stats row.
2. Centered quote band with text below and an image strip.
3. Story blocks with a highlights grid.

**Menu** (all variants show `DownloadMenuButtons` at the top)

1. Tabs by category, item rows with name, description, a dotted leader and price.
2. All categories on one page in 2 columns, with a sticky category jump bar.
3. Menu image viewer: shows `menu.files` where `type === "image"` in a lightbox, plus the download buttons.

**Gallery** (`compact` shows the first 6 images)

1. Uniform grid with lightbox.
2. Masonry (CSS columns) with lightbox.
3. One featured large image with a thumbnail strip, plus lightbox.
   Lightbox: keyboard (arrows, Esc), focus management, close button, `alt` text shown. No library.

**Contact** (`compact` shows address, hours and 2 CTA buttons only)

1. Split: info card with a map beside it, and the reservation form below.
2. Stacked: large Call, WhatsApp and Directions buttons, hours table, form, then a full-width map.
3. Map as a background with a floating info card, and the form below.
   Reservation form (no backend): fields name, date, time, guests, note. On submit, open `https://wa.me/{whatsapp}?text={encoded message built from the fields}` in a new tab. Validate required fields. Map is an `<iframe loading="lazy" title="...">`.

**Footer**

1. 3 columns: brand, links, hours, with social icons.
2. Centered logo, links in a row, social icons, copyright.
3. Large "Book a table on WhatsApp" band above a compact footer.

**Floating actions (WhatsApp and Call)**

1. Two round buttons, bottom-right.
2. Full-width bottom bar on mobile (Call | WhatsApp), round buttons on desktop. Respect `env(safe-area-inset-bottom)`.
3. One expandable button revealing both options.

## Menu downloads

- `DownloadMenuButtons` renders one button per entry in `content.menu.files`: `<a href={withBase(file)} download>`. PDF entries show a "PDF" tag, image entries "Image".
- If `menu.files` is empty, hide the download area.
- Files are served from `public/menu/`. Do not generate PDFs in code.

## SEO and performance

- Per-page `generateMetadata` from `content.seo`. Add canonical, Open Graph and Twitter tags.
- `sitemap.ts` and `robots.ts` for the 5 pages, using `seo.siteUrl`.
- Add `Restaurant` JSON-LD (name, address, phone, hours, cuisine, menu URL) on the Home page, built from the data file.
- Hero image: `fetchPriority="high"`, no lazy loading. All other images: `loading="lazy"`, `decoding="async"`, explicit `width` and `height`.
- No layout shift. Accessible names on all buttons and links. One `<h1>` per page.

## Rules for the agent

1. Never hardcode content inside components. Everything comes from `content.ts`.
2. Never add pages, features or dependencies not listed here. No CMS, forms backend or payments.
3. Each variant must be a real structural difference, not a recolour. Colours come only from theme variables.
4. Every section works with any theme and any variant combination. Do not couple a variant to a theme.
5. Every component works at 360px width first. No horizontal page scroll.
6. Keep each variant file self-contained and under about 150 lines. Shared pieces go in `components/ui`.
7. Use placeholder images from `public/images` with descriptive `alt` text. Do not hotlink or copy any real restaurant's assets.
8. If the project has a `ScrollAnimations` component using IDs that start with `slide-left`, `slide-right` or `slide-bottom`, apply those IDs to section wrappers. Otherwise skip animations.

## Done when

- `npm run build` succeeds for the default config and for each of these: every `layout` key set to 2, then to 3, and each `theme` value.
- All 5 pages render with sample data and no console errors.
- Menu PDF and image downloads work, including under a non-empty `NEXT_PUBLIC_BASE_PATH`.
- Searching `src/components` finds no hardcoded phone numbers, prices or business names.
- Lighthouse mobile: Performance 90+, Accessibility 95+, SEO 95+ on the Home page.
