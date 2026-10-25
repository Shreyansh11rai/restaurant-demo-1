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
    {variant === 3 && images.length > 0 ? <div className="gallery-featured">
      <button className="gallery-featured-main" type="button" onClick={() => setActive(0)} aria-label={`${content.ui.viewGallery}: ${images[0].alt}`}>
        <ResponsiveImage src={images[0].src} alt={images[0].alt} />
      </button>
      <div className="gallery-thumbnails">{images.slice(1).map((image, index) => <button type="button" key={image.src + image.alt} onClick={() => setActive(index + 1)} aria-label={image.alt}>
        <ResponsiveImage src={image.src} alt="" />
      </button>)}</div>
    </div> : <div className={`gallery-grid gallery-layout-${variant}`}>
      {images.map((image, index) => <button className="gallery-item" type="button" key={image.src + image.alt} onClick={() => setActive(index)} aria-label={`${content.ui.galleryImage}: ${image.alt}`}>
        <ResponsiveImage src={image.src} alt={image.alt} />
      </button>)}
    </div>}
    <Lightbox images={images} index={active} onChange={setActive} />
  </>;
}
