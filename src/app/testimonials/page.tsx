import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import Testimonials from "@/components/sections/testimonials";

export function generateMetadata() {
  return createPageMetadata("testimonials", "/testimonials/");
}

export default function TestimonialsPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-intro w-page max-w-site m-auto md:w-page-wide md:max-w-site pt-20">
        <p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">
          {content.brand.name}
        </p>
        <h1>{content.ui.testimonialsHeading}</h1>
        <p className="max-w-wide-copy text-muted">
          {content.ui.testimonialsIntro}
        </p>
      </header>
      <Testimonials />
    </main>
  );
}
