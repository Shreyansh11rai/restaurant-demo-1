import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import GalleryGrid from "./GalleryGrid";

export default function Gallery3({ compact = false }: { compact?: boolean }) {
  return <section className="section mx-auto py-20 gallery-section w-page max-w-site md:w-page-wide md:max-w-site">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.galleryHeading} centered />
    <GalleryGrid variant={3} compact={compact} />
  </section>;
}
