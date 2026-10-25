import Link from "next/link";
import { content } from "@/data/content";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function About3({ compact = false }: { compact?: boolean }) {
  return <section className="section about-story [&.section]:[width:min(100%_-_2.5rem,_1180px)] [&.section]:[margin:0_auto] [&.section]:[padding:5rem_0] min-[700px]:[&.section]:[width:min(100%_-_4rem,_1180px)] min-[700px]:[&.section]:[padding:6.5rem_0]">
    <div className="about-story-heading [&.about-story-heading]:[max-width:720px]"><p className="eyebrow [&.eyebrow]:[margin-bottom:0.85rem] [&.eyebrow]:[color:var(--theme-primary)] [&.eyebrow]:[font-size:0.76rem] [&.eyebrow]:[font-weight:700] [&.eyebrow]:[letter-spacing:0.14em] [&.eyebrow]:[text-transform:uppercase] [&.eyebrow]:[font-size:0.875rem]">{content.brand.established}</p><h2>{content.about.title}</h2></div>
    <div className="story-blocks [&.story-blocks]:[display:grid] [&.story-blocks]:[gap:1.5rem] [&.story-blocks]:[align-items:center] [&.story-blocks_p]:[color:var(--theme-muted)] min-[700px]:[&.story-blocks]:[grid-template-columns:1fr_0.9fr] min-[700px]:[&.story-blocks]:[gap:3rem]">
      {content.about.story.slice(0, compact ? 1 : undefined).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {!compact ? <ResponsiveImage src={content.about.image} alt={content.brand.name} className="story-photo [&.story-photo]:[width:100%] [&.story-photo]:[height:20rem] [&.story-photo]:[object-fit:cover] min-[700px]:[&.story-photo]:[height:26rem]" /> : null}
    </div>
    {!compact ? <div className="highlight-grid [&.highlight-grid]:[display:grid] [&.highlight-grid]:[gap:1rem] [&.highlight-grid]:[margin:2.5rem_0] [&.highlight-grid_article]:[border-top:1px_solid_var(--theme-border)] [&.highlight-grid_article]:[padding:1rem_0] [&.highlight-grid_article_>_span]:[color:var(--theme-primary)] [&.highlight-grid_h3]:[margin:0.4rem_0] [&.highlight-grid_p]:[margin:0] [&.highlight-grid_p]:[color:var(--theme-muted)] min-[700px]:[&.highlight-grid]:[grid-template-columns:repeat(3,_minmax(0,_1fr))] min-[700px]:[&.highlight-grid]:[gap:2rem]">{content.about.highlights.map((item) => <article key={item.title}><span>✳</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div> : null}
    <Link className="text-link [&.text-link]:[display:inline-flex] [&.text-link]:[gap:0.4rem] [&.text-link]:[margin-top:0.65rem] [&.text-link]:[color:var(--theme-primary)] [&.text-link]:[font-weight:700] [&.text-link:hover]:[color:var(--theme-primary-hover)]" href="/about">{content.ui.readStory}<span aria-hidden="true"> ↗</span></Link>
  </section>;
}
