import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import GalleryGrid from "./GalleryGrid";

export default function Gallery2({ compact = false }: { compact?: boolean }) {
  return <section className="section mx-auto py-20 gallery-section w-page max-w-site md:w-page-wide md:max-w-site">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.galleryHeading} />
    <GalleryGrid variant={2} compact={compact} />
  </section>;
}
