import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import DownloadMenuButtons from "@/components/ui/DownloadMenuButtons";

export default function Menu2() {
  return (
    <section className="section mx-auto py-20 menu-section menu-two w-page max-w-menu md:w-page-wide md:max-w-menu">
      <SectionTitle
        eyebrow={content.brand.name}
        title={content.ui.menuHeading}
      />
      <DownloadMenuButtons />
      <nav className="menu-jump sticky z-5 top-18 flex gap-1 overflow-x-auto bg-canvas" aria-label={content.ui.selectCategory}>
        {content.menu.categories.map((category, index) => (
          <a className="shrink-0 rounded-theme border border-border px-3 py-2 text-sm" href={`#menu-category-${index}`} key={category.name}>
            {category.name}
          </a>
        ))}
      </nav>
      <div className="menu-columns grid gap-4 md:grid-cols-2">
        {content.menu.categories.map((category, index) => (
          <section
            className="menu-category menu-card scroll-mt-24 border border-border rounded-theme p-5 bg-surface shadow-lg"
            id={`menu-category-${index}`}
            key={category.name}
          >
            <h3 className="mb-5">{category.name}</h3>
            {category.items.map((item) => (
              <article className="menu-item grid grid-cols-2 items-baseline gap-1 border-b border-dashed border-border" key={item.name}>
                <div className="menu-item-name flex flex-wrap items-center gap-2">
                  <h4 className="mb-0 text-base font-bold">{item.name}</h4>
                  {item.tags.map((tag) => (
                    <span className="menu-tag rounded-full bg-surface-muted px-2 py-0.5 text-xs text-accent" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="menu-price-row col-span-full flex justify-between gap-3 py-2 text-sm text-muted">
                  <span>{item.description}</span>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </section>
        ))}
      </div>
      <p className="menu-note mt-6 text-muted text-sm text-center">{content.menu.note}</p>
    </section>
  );
}
