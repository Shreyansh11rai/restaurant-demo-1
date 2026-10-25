import { content } from "@/data/content";
import { createPageMetadata } from "@/lib/metadata";
import About from "@/components/sections/about";

export function generateMetadata() { return createPageMetadata("about", "/about/"); }

export default function AboutPage() {
  return <main id="main-content" className="page-main [&.page-main]:[min-height:60vh]">
    <header className="page-intro [&.page-intro]:[width:min(100%_-_2.5rem,_1180px)] [&.page-intro]:[margin:auto] [&.page-intro]:[padding:4rem_0_0] [&.page-intro_h1]:[max-width:860px] [&.page-intro_h1]:[font-size:clamp(2.8rem,_10vw,_5rem)] min-[700px]:[&.page-intro]:[width:min(100%_-_4rem,_1180px)] min-[700px]:[&.page-intro]:[padding-top:5rem]"><p className="eyebrow [&.eyebrow]:[margin-bottom:0.85rem] [&.eyebrow]:[color:var(--theme-primary)] [&.eyebrow]:[font-size:0.76rem] [&.eyebrow]:[font-weight:700] [&.eyebrow]:[letter-spacing:0.14em] [&.eyebrow]:[text-transform:uppercase] [&.eyebrow]:[font-size:0.875rem]">{content.brand.name}</p><h1>{content.about.title}</h1></header>
    <About />
  </main>;
}
