import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import Menu from "@/components/sections/menu";

export function generateMetadata() { return createPageMetadata("menu", "/menu/"); }

export default function MenuPage() {
  return <main id="main-content" className="page-main">
    <header className="page-intro"><p className="eyebrow">{content.brand.name}</p><h1>{content.ui.menuHeading}</h1></header>
    <Menu />
  </main>;
}
