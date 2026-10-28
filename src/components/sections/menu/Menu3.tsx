"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import DownloadMenuButtons from "@/components/ui/DownloadMenuButtons";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Lightbox from "@/components/ui/Lightbox";

export default function Menu3() {
  const pages = content.menu.files.filter((file) => file.type === "image");
  const [active, setActive] = useState<number | null>(null);
  const images = pages.map((page) => ({ src: page.file, alt: page.label }));
  return <section className="section mx-auto py-20 menu-section menu-viewer w-page max-w-menu md:w-page-wide md:max-w-menu">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.menuHeading} centered />
    <DownloadMenuButtons />
    {pages.length ? <div className="menu-page-grid grid grid-cols-2 gap-4 md:grid-cols-3">{pages.map((page, index) => <button className="grid gap-2 overflow-hidden rounded-theme border border-border bg-surface p-2 text-left shadow-card" type="button" key={page.file} onClick={() => setActive(index)} aria-label={`${content.ui.viewMenuPage}: ${page.label}`}>
      <ResponsiveImage src={page.file} alt={page.label} /><span className="px-2 pb-1 text-sm font-bold">{page.label}</span>
    </button>)}</div> : null}
    <Lightbox images={images} index={active} onChange={setActive} />
    <p className="menu-note mt-6 text-muted text-sm text-center">{content.menu.note}</p>
  </section>;
}
