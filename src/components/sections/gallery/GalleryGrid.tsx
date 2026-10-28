"use client";

import { useState } from "react";
import { content } from "@/data/content";
import Lightbox from "@/components/ui/Lightbox";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

type GalleryGridProps = { variant: 1 | 2 | 3; compact?: boolean };

export default function GalleryGrid({ variant, compact = false }: GalleryGridProps) {
  const all = compact ? content.gallery.slice(0, 6) : content.gallery;
  const [active, setActive] = useState<number | null>(null);
  const images = variant === 3 && all.length > 1 ? [all[0], ...all.slice(1)] : all;
  return <>
    {variant === 3 && images.length > 0 ? <div className="gallery-featured grid gap-3 md:grid-cols-2 md:items-stretch">
      <button className="gallery-featured-main overflow-hidden rounded-theme border-0 bg-surface-muted p-0 cursor-zoom-in" type="button" onClick={() => setActive(0)} aria-label={`${content.ui.viewGallery}: ${images[0].alt}`}>
        <ResponsiveImage src={images[0].src} alt={images[0].alt} className="h-80 w-full object-cover" />
      </button>
      <div className="gallery-thumbnails grid grid-cols-4 gap-2 md:grid-cols-2">{images.slice(1).map((image, index) => <button className="overflow-hidden rounded-theme border-0 bg-surface-muted p-0" type="button" key={image.src + image.alt} onClick={() => setActive(index + 1)} aria-label={image.alt}>
        <ResponsiveImage src={image.src} alt="" className="h-20 w-full object-cover" />
      </button>)}</div>
    </div> : <div className={`gallery-grid gallery-layout-${variant} ${variant === 2 ? "columns-2 gap-3 md:columns-3" : "grid grid-cols-2 gap-3 md:grid-cols-3"}`}>
      {images.map((image, index) => <button className={`gallery-item mb-3 w-full overflow-hidden border-0 bg-surface-muted p-0 cursor-zoom-in ${variant === 2 ? "block break-inside-avoid" : ""}`} type="button" key={image.src + image.alt} onClick={() => setActive(index)} aria-label={`${content.ui.galleryImage}: ${image.alt}`}>
        <ResponsiveImage src={image.src} alt={image.alt} className={`w-full object-cover ${variant === 2 ? "h-auto" : "h-44"}`} />
      </button>)}
    </div>}
    <Lightbox images={images} index={active} onChange={setActive} />
  </>;
}
