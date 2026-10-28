import Link from "next/link";
import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import Hero from "@/components/sections/hero";
import Signature from "@/components/sections/signature";
import About from "@/components/sections/about";
import Gallery from "@/components/sections/gallery";
import Contact from "@/components/sections/contact";
import { withBase } from "@/lib/withBase";
import { ImNewTab } from "react-icons/im";

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
    openingHours: content.contact.hours.map(
      (entry) => `${entry.days} ${entry.time}`,
    ),
    menu: new URL(
      withBase("/menu/"),
      `${content.seo.siteUrl.replace(/\/$/, "")}/`,
    ).toString(),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <RestaurantJsonLd />
      <main id="main-content">
        <Hero />
        <Signature />
        <About compact />
        <Gallery compact />
        <div className="section-link-wrap flex justify-center p-0">
          <Link
            className="button button-secondary inline-flex min-h-12 items-center justify-center gap-2 border border-primary rounded-theme p-3 text-base font-bold text-center transition-all cursor-pointer hover:border-primary-hover hover:bg-primary-hover hover:-translate-y-0.5 border-border bg-transparent text-primary hover:border-primary hover:bg-surface"
            href="/gallery"
          >
            <ImNewTab />
            {content.ui.viewGallery}
          </Link>
        </div>
        <Contact compact />
      </main>
    </>
  );
}
