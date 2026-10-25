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
      <div className="section-link-wrap"><Link className="button button-secondary" href="/gallery">{content.ui.viewGallery}</Link></div>
      <Contact compact />
    </main>
  </>;
}
