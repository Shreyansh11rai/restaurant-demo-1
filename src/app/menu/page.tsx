import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import Menu from "@/components/sections/menu";

export function generateMetadata() {
  return createPageMetadata("menu", "/menu/");
}

export default function MenuPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-intro w-page max-w-site m-auto md:w-page-wide md:max-w-site pt-20">
        <p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">
          {content.brand.name}
        </p>
        <h1>{content.ui.menuHeading}</h1>
      </header>
      <Menu />
    </main>
  );
}
