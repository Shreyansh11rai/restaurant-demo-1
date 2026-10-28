import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import About from "@/components/sections/about";

export function generateMetadata() {
  return createPageMetadata("about", "/about/");
}

export default function AboutPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-intro w-page max-w-site m-auto md:w-page-wide md:max-w-site pt-20">
        <p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">
          {content.brand.name}
        </p>
        <h1>{content.about.title}</h1>
      </header>
      <About />
    </main>
  );
}
