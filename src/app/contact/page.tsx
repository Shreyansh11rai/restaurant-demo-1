import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import Contact from "@/components/sections/contact";

export function generateMetadata() { return createPageMetadata("contact", "/contact/"); }

export default function ContactPage() {
  return <main id="main-content" className="page-main">
    <header className="page-intro"><p className="eyebrow">{content.brand.name}</p><h1>{content.ui.contactHeading}</h1></header>
    <Contact />
  </main>;
}
