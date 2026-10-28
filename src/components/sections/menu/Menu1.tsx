"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import DownloadMenuButtons from "@/components/ui/DownloadMenuButtons";

export default function Menu1() {
  const [selected, setSelected] = useState(0);
  const category = content.menu.categories[selected];
  return (
    <section className="section mx-auto py-20 menu-section w-page max-w-menu md:w-page-wide md:max-w-menu">
      <DownloadMenuButtons />
      <div
        className="menu-tabs flex gap-2 overflow-x-auto border-b border-border"
        role="tablist"
        aria-label={content.ui.selectCategory}
      >
        {content.menu.categories.map((item, index) => (
          <button
            className="shrink-0 border-0 border-b-2 border-transparent bg-transparent px-4 py-3 text-sm font-bold text-muted aria-selected:border-primary aria-selected:text-primary"
            type="button"
            key={item.name}
            role="tab"
            aria-selected={selected === index}
            onClick={() => setSelected(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {category ? (
        <div className="menu-category py-6" role="tabpanel">
          {/* <h3 className="mb-5">{category.name}</h3> */}
          {category.items.map((item) => (
            <article
              className="menu-item grid grid-cols-2 items-baseline gap-1 border-b border-dashed border-border"
              key={item.name}
            >
              <div className="menu-item-name flex flex-wrap items-center gap-2">
                <h4 className="mb-0 text-base font-bold">{item.name}</h4>
                {item.tags.map((tag) => (
                  <span
                    className="menu-tag rounded-full bg-surface-muted px-2 py-0.5 text-xs text-accent"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="menu-dots hidden" aria-hidden="true" />
              <strong>{item.price}</strong>
              <p className="col-span-full mb-0 py-2 text-sm text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      ) : null}
      <p className="menu-note mt-6 text-muted text-sm text-center">
        {content.menu.note}
      </p>
    </section>
  );
}
