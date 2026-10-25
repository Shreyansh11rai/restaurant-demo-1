import Link from "next/link";
import { content } from "@/data/content";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function About3({ compact = false }: { compact?: boolean }) {
  return <section className="section about-story">
    <div className="about-story-heading"><p className="eyebrow">{content.brand.established}</p><h2>{content.about.title}</h2></div>
    <div className="story-blocks">
      {content.about.story.slice(0, compact ? 1 : undefined).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {!compact ? <ResponsiveImage src={content.about.image} alt={content.brand.name} className="story-photo" /> : null}
    </div>
    {!compact ? <div className="highlight-grid">{content.about.highlights.map((item) => <article key={item.title}><span>✳</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div> : null}
    <Link className="text-link" href="/about">{content.ui.readStory}<span aria-hidden="true"> ↗</span></Link>
  </section>;
}
