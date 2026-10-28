import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import Contact from "@/components/sections/contact";

export function generateMetadata() { return createPageMetadata("contact", "/contact/"); }

export default function ContactPage() {
  return <main id="main-content" className="page-main">
    <header className="page-intro w-page max-w-site m-auto md:w-page-wide md:max-w-site md:pt-20"><p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">{content.brand.name}</p><h1>{content.ui.contactHeading}</h1></header>
    <Contact />
  </main>;
}
