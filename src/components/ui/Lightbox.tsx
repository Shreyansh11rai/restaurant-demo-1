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
    <div className="lightbox fixed inset-0 z-50 grid place-items-center bg-theme-overlay p-4 text-overlay-foreground" role="dialog" aria-modal="true" aria-label={image.alt} onClick={() => onChange(null)}>
      <div className="lightbox-panel relative grid justify-items-center gap-3" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close absolute right-2 top-2 z-1 grid size-11 place-items-center rounded-full border border-primary bg-theme-overlay text-2xl text-overlay-foreground cursor-pointer" type="button" ref={closeRef} onClick={() => onChange(null)} aria-label={content.ui.closeDialog}>×</button>
        {images.length > 1 ? <>
          <button className="lightbox-arrow lightbox-prev absolute left-2 z-1 grid size-11 place-items-center rounded-full border border-primary bg-theme-overlay text-2xl text-overlay-foreground cursor-pointer" type="button" aria-label={content.ui.previous} onClick={() => move(-1)}>‹</button>
          <button className="lightbox-arrow lightbox-next absolute right-2 z-1 grid size-11 place-items-center rounded-full border border-primary bg-theme-overlay text-2xl text-overlay-foreground cursor-pointer" type="button" aria-label={content.ui.next} onClick={() => move(1)}>›</button>
        </> : null}
        <ResponsiveImage src={image.src} alt={image.alt} className="lightbox-image w-full object-contain" />
        <p className="mb-0 text-center">{image.alt}</p>
      </div>
    </div>
  );
}
