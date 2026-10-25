import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import DownloadMenuButtons from "@/components/ui/DownloadMenuButtons";

export default function Menu2() {
  return (
    <section className="section menu-section menu-two [&.section]:[width:min(100%_-_2.5rem,_1180px)] [&.section]:[margin:0_auto] [&.section]:[padding:5rem_0] min-[700px]:[&.section]:[width:min(100%_-_4rem,_1180px)] min-[700px]:[&.section]:[padding:6.5rem_0] [&.menu-section]:[max-width:1040px]">
      <SectionTitle
        eyebrow={content.brand.name}
        title={content.ui.menuHeading}
      />
      <DownloadMenuButtons />
      <nav className="menu-jump [&.menu-jump_a]:[flex:0_0_auto] [&.menu-jump_a]:[border:0] [&.menu-jump_a]:[border-bottom:2px_solid_transparent] [&.menu-jump_a]:[padding:0.8rem_0.9rem] [&.menu-jump_a]:[background:transparent] [&.menu-jump_a]:[color:var(--theme-muted)] [&.menu-jump_a]:[font-weight:700] [&.menu-jump_a]:[cursor:pointer] [&.menu-jump]:[position:sticky] [&.menu-jump]:[z-index:5] [&.menu-jump]:[top:4.5rem] [&.menu-jump]:[display:flex] [&.menu-jump]:[gap:0.25rem] [&.menu-jump]:[overflow-x:auto] [&.menu-jump]:[background:var(--theme-canvas)] [&.menu-jump_a]:[font-size:0.875rem]" aria-label={content.ui.selectCategory}>
        {content.menu.categories.map((category, index) => (
          <a href={`#menu-category-${index}`} key={category.name}>
            {category.name}
          </a>
        ))}
      </nav>
      <div className="menu-columns [&.menu-columns]:[display:grid] [&.menu-columns]:[gap:1rem] min-[700px]:[&.menu-columns]:[grid-template-columns:repeat(2,_minmax(0,_1fr))] min-[700px]:[&.menu-columns]:[align-items:start]">
        {content.menu.categories.map((category, index) => (
          <section
            className="menu-category menu-card [&.menu-category]:[padding:1.6rem_0] [&.menu-category_h3]:[margin-bottom:1rem] [&.menu-card]:[scroll-margin-top:6rem] [&.menu-card]:[border:1px_solid_var(--theme-border)] [&.menu-card]:[border-radius:var(--radius)] [&.menu-card]:[padding:1.25rem] [&.menu-card]:[background:var(--theme-surface)] [&.menu-card]:[box-shadow:0_8px_28px_rgba(0,_0,_0,_0.045)]"
            id={`menu-category-${index}`}
            key={category.name}
          >
            <h3>{category.name}</h3>
            {category.items.map((item) => (
              <article className="menu-item [&.menu-item]:[display:grid] [&.menu-item]:[grid-template-columns:minmax(0,_1fr)_auto] [&.menu-item]:[align-items:baseline] [&.menu-item]:[gap:0.25rem_0.75rem] [&.menu-item]:[padding:0.85rem_0] [&.menu-item]:[border-bottom:1px_dashed_var(--theme-border)] [&.menu-item_h4]:[margin:0] [&.menu-item_h4]:[font-size:1rem] [&.menu-item_>_strong]:[color:var(--theme-primary)] [&.menu-item_>_p]:[grid-column:1_/_-1] [&.menu-item_>_p]:[margin:0] [&.menu-item_>_p]:[color:var(--theme-muted)] [&.menu-item_>_p]:[font-size:0.83rem] [&.menu-item_>_p]:[font-size:0.875rem]" key={item.name}>
                <div className="menu-item-name [&.menu-item-name]:[display:flex] [&.menu-item-name]:[flex-wrap:wrap] [&.menu-item-name]:[align-items:center] [&.menu-item-name]:[gap:0.4rem]">
                  <h4>{item.name}</h4>
                  {item.tags.map((tag) => (
                    <span className="menu-tag [&.menu-tag]:[border-radius:99px] [&.menu-tag]:[padding:0.1rem_0.45rem] [&.menu-tag]:[background:var(--theme-surface-muted)] [&.menu-tag]:[color:var(--theme-accent)] [&.menu-tag]:[font-size:0.62rem] [&.menu-tag]:[font-size:0.875rem]" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="menu-price-row [&.menu-price-row]:[display:flex] [&.menu-price-row]:[grid-column:1_/_-1] [&.menu-price-row]:[justify-content:space-between] [&.menu-price-row]:[gap:0.75rem] [&.menu-price-row]:[color:var(--theme-muted)] [&.menu-price-row]:[font-size:0.8rem] [&.menu-price-row_strong]:[color:var(--theme-primary)] [&.menu-price-row]:[font-size:0.875rem]">
                  <span>{item.description}</span>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </section>
        ))}
      </div>
      <p className="menu-note [&.menu-note]:[margin-top:1.5rem] [&.menu-note]:[color:var(--theme-muted)] [&.menu-note]:[font-size:0.82rem] [&.menu-note]:[text-align:center] [&.menu-note]:[font-size:0.875rem]">{content.menu.note}</p>
    </section>
  );
}
