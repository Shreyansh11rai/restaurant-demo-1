import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import DownloadMenuButtons from "@/components/ui/DownloadMenuButtons";

export default function Menu2() {
  return <section className="section menu-section menu-two">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.menuHeading} />
    <DownloadMenuButtons />
    <nav className="menu-jump" aria-label={content.ui.selectCategory}>{content.menu.categories.map((category, index) => <a href={`#menu-category-${index}`} key={category.name}>{category.name}</a>)}</nav>
    <div className="menu-columns">{content.menu.categories.map((category, index) => <section className="menu-category menu-card" id={`menu-category-${index}`} key={category.name}>
      <h3>{category.name}</h3>
      {category.items.map((item) => <article className="menu-item" key={item.name}>
        <div className="menu-item-name"><h4>{item.name}</h4>{item.tags.map((tag) => <span className="menu-tag" key={tag}>{tag}</span>)}</div>
        <div className="menu-price-row"><span>{item.description}</span><strong>{item.price}</strong></div>
      </article>)}
    </section>)}</div>
    <p className="menu-note">{content.menu.note}</p>
  </section>;
}
