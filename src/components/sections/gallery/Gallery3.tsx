import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import GalleryGrid from "./GalleryGrid";

export default function Gallery3({ compact = false }: { compact?: boolean }) {
  return <section className="section gallery-section">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.galleryHeading} centered />
    <GalleryGrid variant={3} compact={compact} />
  </section>;
}
