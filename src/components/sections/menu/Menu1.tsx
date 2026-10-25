"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import DownloadMenuButtons from "@/components/ui/DownloadMenuButtons";

export default function Menu1() {
  const [selected, setSelected] = useState(0);
  const category = content.menu.categories[selected];
  return <section className="section menu-section [&.section]:[width:min(100%_-_2.5rem,_1180px)] [&.section]:[margin:0_auto] [&.section]:[padding:5rem_0] min-[700px]:[&.section]:[width:min(100%_-_4rem,_1180px)] min-[700px]:[&.section]:[padding:6.5rem_0] [&.menu-section]:[max-width:1040px]">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.menuHeading} centered />
    <DownloadMenuButtons />
    <div className="menu-tabs [&.menu-tabs]:[display:flex] [&.menu-tabs]:[gap:0.5rem] [&.menu-tabs]:[overflow-x:auto] [&.menu-tabs]:[border-bottom:1px_solid_var(--theme-border)] [&.menu-tabs_button]:[flex:0_0_auto] [&.menu-tabs_button]:[border:0] [&.menu-tabs_button]:[border-bottom:2px_solid_transparent] [&.menu-tabs_button]:[padding:0.8rem_0.9rem] [&.menu-tabs_button]:[background:transparent] [&.menu-tabs_button]:[color:var(--theme-muted)] [&.menu-tabs_button]:[font-weight:700] [&.menu-tabs_button]:[cursor:pointer] [&.menu-tabs_button[aria-selected='true']]:[border-color:var(--theme-primary)] [&.menu-tabs_button[aria-selected='true']]:[color:var(--theme-primary)] [&.menu-tabs_button]:[font-size:0.875rem]" role="tablist" aria-label={content.ui.selectCategory}>
      {content.menu.categories.map((item, index) => <button type="button" key={item.name} role="tab" aria-selected={selected === index} onClick={() => setSelected(index)}>{item.name}</button>)}
    </div>
    {category ? <div className="menu-category [&.menu-category]:[padding:1.6rem_0] [&.menu-category_h3]:[margin-bottom:1rem]" role="tabpanel"><h3>{category.name}</h3>
      {category.items.map((item) => <article className="menu-item [&.menu-item]:[display:grid] [&.menu-item]:[grid-template-columns:minmax(0,_1fr)_auto] [&.menu-item]:[align-items:baseline] [&.menu-item]:[gap:0.25rem_0.75rem] [&.menu-item]:[padding:0.85rem_0] [&.menu-item]:[border-bottom:1px_dashed_var(--theme-border)] [&.menu-item_h4]:[margin:0] [&.menu-item_h4]:[font-size:1rem] [&.menu-item_>_strong]:[color:var(--theme-primary)] [&.menu-item_>_p]:[grid-column:1_/_-1] [&.menu-item_>_p]:[margin:0] [&.menu-item_>_p]:[color:var(--theme-muted)] [&.menu-item_>_p]:[font-size:0.83rem] [&.menu-item_>_p]:[font-size:0.875rem]" key={item.name}>
        <div className="menu-item-name [&.menu-item-name]:[display:flex] [&.menu-item-name]:[flex-wrap:wrap] [&.menu-item-name]:[align-items:center] [&.menu-item-name]:[gap:0.4rem]"><h4>{item.name}</h4>{item.tags.map((tag) => <span className="menu-tag [&.menu-tag]:[border-radius:99px] [&.menu-tag]:[padding:0.1rem_0.45rem] [&.menu-tag]:[background:var(--theme-surface-muted)] [&.menu-tag]:[color:var(--theme-accent)] [&.menu-tag]:[font-size:0.62rem] [&.menu-tag]:[font-size:0.875rem]" key={tag}>{tag}</span>)}</div>
        <span className="menu-dots [&.menu-dots]:[display:none]" aria-hidden="true" /><strong>{item.price}</strong>
        <p>{item.description}</p>
      </article>)}
    </div> : null}
    <p className="menu-note [&.menu-note]:[margin-top:1.5rem] [&.menu-note]:[color:var(--theme-muted)] [&.menu-note]:[font-size:0.82rem] [&.menu-note]:[text-align:center] [&.menu-note]:[font-size:0.875rem]">{content.menu.note}</p>
  </section>;
}
