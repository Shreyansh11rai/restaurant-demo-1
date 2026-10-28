import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import Contact from "@/components/sections/contact";

export function generateMetadata() {
  return createPageMetadata("contact", "/contact/");
}

export default function ContactPage() {
  return (
    <main id="main-content" className="page-main">
      <Contact />
    </main>
  );
}
