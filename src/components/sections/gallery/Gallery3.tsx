import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import GalleryGrid from "./GalleryGrid";

export default function Gallery3({ compact = false }: { compact?: boolean }) {
  return <section className="section gallery-section [&.section]:[width:min(100%_-_2.5rem,_1180px)] [&.section]:[margin:0_auto] [&.section]:[padding:5rem_0] min-[700px]:[&.section]:[width:min(100%_-_4rem,_1180px)] min-[700px]:[&.section]:[padding:6.5rem_0]">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.galleryHeading} centered />
    <GalleryGrid variant={3} compact={compact} />
  </section>;
}
