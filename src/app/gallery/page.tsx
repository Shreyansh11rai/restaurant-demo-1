import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import Gallery from "@/components/sections/gallery";

export function generateMetadata() {
  return createPageMetadata("gallery", "/gallery/");
}

export default function GalleryPage() {
  return (
    <main id="main-content" className="page-main">
      <Gallery />
    </main>
  );
}
