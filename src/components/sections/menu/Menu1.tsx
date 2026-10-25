"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import DownloadMenuButtons from "@/components/ui/DownloadMenuButtons";

export default function Menu1() {
  const [selected, setSelected] = useState(0);
  const category = content.menu.categories[selected];
  return <section className="section menu-section">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.menuHeading} centered />
    <DownloadMenuButtons />
    <div className="menu-tabs" role="tablist" aria-label={content.ui.selectCategory}>
      {content.menu.categories.map((item, index) => <button type="button" key={item.name} role="tab" aria-selected={selected === index} onClick={() => setSelected(index)}>{item.name}</button>)}
    </div>
    {category ? <div className="menu-category" role="tabpanel"><h3>{category.name}</h3>
      {category.items.map((item) => <article className="menu-item" key={item.name}>
        <div className="menu-item-name"><h4>{item.name}</h4>{item.tags.map((tag) => <span className="menu-tag" key={tag}>{tag}</span>)}</div>
        <span className="menu-dots" aria-hidden="true" /><strong>{item.price}</strong>
        <p>{item.description}</p>
      </article>)}
    </div> : null}
    <p className="menu-note">{content.menu.note}</p>
  </section>;
}
