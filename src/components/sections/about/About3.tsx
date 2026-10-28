import Link from "next/link";
import { content } from "@/data/content";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function About3({ compact = false }: { compact?: boolean }) {
  return <section className="section mx-auto py-20 about-story w-page max-w-site md:w-page-wide md:max-w-site">
    <div className="about-story-heading max-w-180"><p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">{content.brand.established}</p><h2>{content.about.title}</h2></div>
    <div className="story-blocks grid gap-6 items-center md:grid-cols-2 md:gap-12">
      {content.about.story.slice(0, compact ? 1 : undefined).map((paragraph, index) => <p className="text-muted" key={index}>{paragraph}</p>)}
      {!compact ? <ResponsiveImage src={content.about.image} alt={content.brand.name} className="story-photo w-full h-80 object-cover md:h-104" /> : null}
    </div>
    {!compact ? <div className="highlight-grid grid gap-4 md:grid-cols-3 md:gap-8">{content.about.highlights.map((item) => <article className="rounded-theme border border-border bg-surface p-5" key={item.title}><span className="text-2xl text-primary">✳</span><h3 className="mt-3">{item.title}</h3><p className="mb-0 text-muted">{item.text}</p></article>)}</div> : null}
    <Link className="text-link inline-flex gap-2 mt-3 text-primary font-bold hover:text-primary-hover" href="/about">{content.ui.readStory}<span aria-hidden="true"> ↗</span></Link>
  </section>;
}
