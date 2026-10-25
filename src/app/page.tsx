import Link from "next/link";
import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/hero";
import Signature from "@/components/sections/signature";
import About from "@/components/sections/about";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import { withBase } from "@/lib/withBase";

export function generateMetadata() {
  return createPageMetadata("home", "/");
}

function RestaurantJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: content.brand.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: content.contact.address,
      addressLocality: content.contact.city,
    },
    telephone: content.contact.phone,
    servesCuisine: content.brand.cuisine,
    openingHours: content.contact.hours.map((entry) => `${entry.days} ${entry.time}`),
    menu: new URL(withBase("/menu/"), `${content.seo.siteUrl.replace(/\/$/, "")}/`).toString(),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}

export default function Home() {
  return <>
    <RestaurantJsonLd />
    <main id="main-content">
      <Hero />
      <Signature />
      <About compact />
      <Gallery compact />
      <div className="section-link-wrap [&.section-link-wrap]:[display:flex] [&.section-link-wrap]:[justify-content:center] [&.section-link-wrap]:[padding:0_1rem_3rem]"><Link className="button button-secondary [&.button]:[display:inline-flex] [&.button]:[min-height:3rem] [&.button]:[align-items:center] [&.button]:[justify-content:center] [&.button]:[gap:0.5rem] [&.button]:[border:1px_solid_var(--theme-primary)] [&.button]:[border-radius:var(--radius)] [&.button]:[padding:0.75rem_1.15rem] [&.button]:[background:var(--theme-primary)] [&.button]:[color:var(--theme-primary-foreground)] [&.button]:[font-size:0.9rem] [&.button]:[font-weight:700] [&.button]:[text-align:center] [&.button]:[transition:background-color_160ms_ease,_border-color_160ms_ease,_transform_160ms_ease] [&.button]:[cursor:pointer] [&.button:hover]:[border-color:var(--theme-primary-hover)] [&.button:hover]:[background:var(--theme-primary-hover)] [&.button:hover]:[transform:translateY(-1px)] [&.button]:[font-size:1rem] [&.button-secondary]:[border-color:var(--theme-border)] [&.button-secondary]:[background:transparent] [&.button-secondary]:[color:var(--theme-foreground)] [&.button-secondary:hover]:[border-color:var(--theme-primary)] [&.button-secondary:hover]:[background:var(--theme-surface)]" href="/gallery">{content.ui.viewGallery}</Link></div>
      <Contact compact />
    </main>
  </>;
}
