"use client";

import { useCallback, useEffect, useRef } from "react";
import { content } from "@/data/content";
import ResponsiveImage from "./ResponsiveImage";

export type LightboxImage = { src: string; alt: string };
type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onChange: (index: number | null) => void;
};

export default function Lightbox({ images, index, onChange }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const move = useCallback((step: number) => {
    if (index === null || images.length === 0) return;
    onChange((index + step + images.length) % images.length);
  }, [images.length, index, onChange]);

  useEffect(() => {
    if (index === null) return;
    previousFocus.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onChange(null);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previousFocus.current?.focus();
    };
  }, [index, move, onChange]);

  if (index === null) return null;
  const image = images[index];
  return (
    <div className="lightbox [&.lightbox]:[position:fixed] [&.lightbox]:[z-index:80] [&.lightbox]:[inset:0] [&.lightbox]:[display:grid] [&.lightbox]:[place-items:center] [&.lightbox]:[padding:1rem] [&.lightbox]:[background:rgba(0,_0,_0,_0.92)] [&.lightbox]:[color:white]" role="dialog" aria-modal="true" aria-label={image.alt} onClick={() => onChange(null)}>
      <div className="lightbox-panel [&.lightbox-panel]:[position:relative] [&.lightbox-panel]:[display:grid] [&.lightbox-panel]:[width:min(100%,_1000px)] [&.lightbox-panel]:[justify-items:center] [&.lightbox-panel]:[gap:0.75rem] [&.lightbox-panel_p]:[margin:0] [&.lightbox-panel_p]:[text-align:center]" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close [&.lightbox-close]:[position:absolute] [&.lightbox-close]:[z-index:1] [&.lightbox-close]:[display:grid] [&.lightbox-close]:[width:2.8rem] [&.lightbox-close]:[height:2.8rem] [&.lightbox-close]:[place-items:center] [&.lightbox-close]:[border:1px_solid_rgba(255,_255,_255,_0.5)] [&.lightbox-close]:[border-radius:50%] [&.lightbox-close]:[background:rgba(0,_0,_0,_0.55)] [&.lightbox-close]:[color:white] [&.lightbox-close]:[font-size:1.5rem] [&.lightbox-close]:[cursor:pointer] [&.lightbox-close]:[top:0.5rem] [&.lightbox-close]:[right:0.5rem]" type="button" ref={closeRef} onClick={() => onChange(null)} aria-label={content.ui.closeDialog}>×</button>
        {images.length > 1 ? <>
          <button className="lightbox-arrow lightbox-prev [&.lightbox-arrow]:[position:absolute] [&.lightbox-arrow]:[z-index:1] [&.lightbox-arrow]:[display:grid] [&.lightbox-arrow]:[width:2.8rem] [&.lightbox-arrow]:[height:2.8rem] [&.lightbox-arrow]:[place-items:center] [&.lightbox-arrow]:[border:1px_solid_rgba(255,_255,_255,_0.5)] [&.lightbox-arrow]:[border-radius:50%] [&.lightbox-arrow]:[background:rgba(0,_0,_0,_0.55)] [&.lightbox-arrow]:[color:white] [&.lightbox-arrow]:[font-size:1.5rem] [&.lightbox-arrow]:[cursor:pointer] [&.lightbox-arrow]:[top:45%] [&.lightbox-prev]:[left:0.5rem]" type="button" aria-label={content.ui.previous} onClick={() => move(-1)}>‹</button>
          <button className="lightbox-arrow lightbox-next [&.lightbox-arrow]:[position:absolute] [&.lightbox-arrow]:[z-index:1] [&.lightbox-arrow]:[display:grid] [&.lightbox-arrow]:[width:2.8rem] [&.lightbox-arrow]:[height:2.8rem] [&.lightbox-arrow]:[place-items:center] [&.lightbox-arrow]:[border:1px_solid_rgba(255,_255,_255,_0.5)] [&.lightbox-arrow]:[border-radius:50%] [&.lightbox-arrow]:[background:rgba(0,_0,_0,_0.55)] [&.lightbox-arrow]:[color:white] [&.lightbox-arrow]:[font-size:1.5rem] [&.lightbox-arrow]:[cursor:pointer] [&.lightbox-arrow]:[top:45%] [&.lightbox-next]:[right:0.5rem]" type="button" aria-label={content.ui.next} onClick={() => move(1)}>›</button>
        </> : null}
        <ResponsiveImage src={image.src} alt={image.alt} className="lightbox-image [&.lightbox-image]:[width:100%] [&.lightbox-image]:[height:min(75vh,_720px)] [&.lightbox-image]:[object-fit:contain]" />
        <p>{image.alt}</p>
      </div>
    </div>
  );
}
