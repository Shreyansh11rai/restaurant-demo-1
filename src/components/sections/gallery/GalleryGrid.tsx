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
    {variant === 3 && images.length > 0 ? <div className="gallery-featured [&.gallery-featured_button:hover_img]:[transform:scale(1.035)] [&.gallery-featured]:[display:grid] [&.gallery-featured]:[gap:0.65rem] min-[700px]:[&.gallery-featured]:[grid-template-columns:1.6fr_0.8fr] min-[700px]:[&.gallery-featured]:[align-items:stretch]">
      <button className="gallery-featured-main [&.gallery-featured-main]:[overflow:hidden] [&.gallery-featured-main]:[border:0] [&.gallery-featured-main]:[padding:0] [&.gallery-featured-main]:[background:var(--theme-surface-muted)] [&.gallery-featured-main]:[cursor:zoom-in] [&.gallery-featured-main_img]:[width:100%] [&.gallery-featured-main_img]:[height:20rem] [&.gallery-featured-main_img]:[object-fit:cover] [&.gallery-featured-main_img]:[transition:transform_220ms_ease] min-[700px]:[&.gallery-featured-main_img]:[height:34rem]" type="button" onClick={() => setActive(0)} aria-label={`${content.ui.viewGallery}: ${images[0].alt}`}>
        <ResponsiveImage src={images[0].src} alt={images[0].alt} />
      </button>
      <div className="gallery-thumbnails [&.gallery-thumbnails_button]:[overflow:hidden] [&.gallery-thumbnails_button]:[border:0] [&.gallery-thumbnails_button]:[padding:0] [&.gallery-thumbnails_button]:[background:var(--theme-surface-muted)] [&.gallery-thumbnails_button]:[cursor:zoom-in] [&.gallery-thumbnails]:[display:grid] [&.gallery-thumbnails]:[grid-template-columns:repeat(4,_minmax(0,_1fr))] [&.gallery-thumbnails]:[gap:0.5rem] [&.gallery-thumbnails_img]:[width:100%] [&.gallery-thumbnails_img]:[height:5rem] [&.gallery-thumbnails_img]:[object-fit:cover] [&.gallery-thumbnails_img]:[transition:transform_220ms_ease] min-[700px]:[&.gallery-thumbnails]:[grid-template-columns:1fr_1fr] min-[700px]:[&.gallery-thumbnails_img]:[height:100%] min-[700px]:[&.gallery-thumbnails_img]:[min-height:8rem]">{images.slice(1).map((image, index) => <button type="button" key={image.src + image.alt} onClick={() => setActive(index + 1)} aria-label={image.alt}>
        <ResponsiveImage src={image.src} alt="" />
      </button>)}</div>
    </div> : <div className={`gallery-grid gallery-layout-${variant} [&.gallery-grid]:[display:grid] [&.gallery-grid]:[grid-template-columns:repeat(2,_minmax(0,_1fr))] [&.gallery-grid]:[gap:0.65rem] min-[700px]:[&.gallery-grid]:[grid-template-columns:repeat(3,_minmax(0,_1fr))] min-[700px]:[&.gallery-grid]:[gap:1rem] min-[960px]:[&.gallery-grid]:[grid-template-columns:repeat(3,_minmax(0,_1fr))] [&.gallery-layout-2]:[columns:2] [&.gallery-layout-2]:[display:block] [&.gallery-layout-2_.gallery-item]:[width:100%] [&.gallery-layout-2_.gallery-item]:[margin-bottom:0.65rem] [&.gallery-layout-2_.gallery-item]:[break-inside:avoid] [&.gallery-layout-2_.gallery-item_img]:[height:auto] [&.gallery-layout-2_.gallery-item_img]:[min-height:10rem] min-[700px]:[&.gallery-layout-2]:[columns:3] min-[700px]:[&.gallery-layout-2_.gallery-item]:[margin-bottom:1rem] min-[960px]:[&.gallery-layout-2]:[columns:3]`}>
      {images.map((image, index) => <button className="gallery-item [&.gallery-item]:[overflow:hidden] [&.gallery-item]:[border:0] [&.gallery-item]:[padding:0] [&.gallery-item]:[background:var(--theme-surface-muted)] [&.gallery-item]:[cursor:zoom-in] [&.gallery-item_img]:[width:100%] [&.gallery-item_img]:[height:11rem] [&.gallery-item_img]:[object-fit:cover] [&.gallery-item_img]:[transition:transform_220ms_ease] [&.gallery-item:hover_img]:[transform:scale(1.035)] min-[700px]:[&.gallery-item_img]:[height:17rem]" type="button" key={image.src + image.alt} onClick={() => setActive(index)} aria-label={`${content.ui.galleryImage}: ${image.alt}`}>
        <ResponsiveImage src={image.src} alt={image.alt} />
      </button>)}
    </div>}
    <Lightbox images={images} index={active} onChange={setActive} />
  </>;
}
