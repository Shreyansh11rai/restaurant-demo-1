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
  return <section className="section menu-section menu-viewer [&.section]:[width:min(100%_-_2.5rem,_1180px)] [&.section]:[margin:0_auto] [&.section]:[padding:5rem_0] min-[700px]:[&.section]:[width:min(100%_-_4rem,_1180px)] min-[700px]:[&.section]:[padding:6.5rem_0] [&.menu-section]:[max-width:1040px]">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.menuHeading} centered />
    <DownloadMenuButtons />
    {pages.length ? <div className="menu-page-grid [&.menu-page-grid]:[display:grid] [&.menu-page-grid]:[grid-template-columns:repeat(2,_minmax(0,_1fr))] [&.menu-page-grid]:[gap:1rem] [&.menu-page-grid_button]:[overflow:hidden] [&.menu-page-grid_button]:[border:1px_solid_var(--theme-border)] [&.menu-page-grid_button]:[border-radius:var(--radius)] [&.menu-page-grid_button]:[padding:0.5rem] [&.menu-page-grid_button]:[background:var(--theme-surface)] [&.menu-page-grid_button]:[text-align:left] [&.menu-page-grid_button]:[cursor:zoom-in] [&.menu-page-grid_img]:[width:100%] [&.menu-page-grid_img]:[aspect-ratio:3_/_4] [&.menu-page-grid_img]:[object-fit:cover] [&.menu-page-grid_span]:[display:block] [&.menu-page-grid_span]:[padding:0.5rem_0.25rem] [&.menu-page-grid_span]:[font-weight:600] min-[700px]:[&.menu-page-grid]:[grid-template-columns:repeat(3,_minmax(0,_1fr))]">{pages.map((page, index) => <button type="button" key={page.file} onClick={() => setActive(index)} aria-label={`${content.ui.viewMenuPage}: ${page.label}`}>
      <ResponsiveImage src={page.file} alt={page.label} /><span>{page.label}</span>
    </button>)}</div> : null}
    <Lightbox images={images} index={active} onChange={setActive} />
    <p className="menu-note [&.menu-note]:[margin-top:1.5rem] [&.menu-note]:[color:var(--theme-muted)] [&.menu-note]:[font-size:0.82rem] [&.menu-note]:[text-align:center] [&.menu-note]:[font-size:0.875rem]">{content.menu.note}</p>
  </section>;
}
