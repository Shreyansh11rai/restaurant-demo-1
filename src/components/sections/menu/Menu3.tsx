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
  return <section className="section menu-section menu-viewer">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.menuHeading} centered />
    <DownloadMenuButtons />
    {pages.length ? <div className="menu-page-grid">{pages.map((page, index) => <button type="button" key={page.file} onClick={() => setActive(index)} aria-label={`${content.ui.viewMenuPage}: ${page.label}`}>
      <ResponsiveImage src={page.file} alt={page.label} /><span>{page.label}</span>
    </button>)}</div> : null}
    <Lightbox images={images} index={active} onChange={setActive} />
    <p className="menu-note">{content.menu.note}</p>
  </section>;
}
