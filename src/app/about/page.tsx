import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import About from "@/components/sections/about";

export function generateMetadata() { return createPageMetadata("about", "/about/"); }

export default function AboutPage() {
  return <main id="main-content" className="page-main">
    <header className="page-intro"><p className="eyebrow">{content.brand.name}</p><h1>{content.about.title}</h1></header>
    <About />
  </main>;
}
