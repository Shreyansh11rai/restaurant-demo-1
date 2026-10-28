import Link from "next/link";
import { content } from "@/data/content";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function About2({ compact = false }: { compact?: boolean }) {
  const images = content.gallery.slice(0, compact ? 3 : 4);
  return <section className="about-quote-section">
    <div className="quote-band bg-surface-muted px-5 py-16 text-center"><p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">{content.brand.name}</p><blockquote className="mx-auto mb-0 max-w-heading font-display text-3xl font-semibold leading-tight md:text-5xl">“{content.about.quote}”</blockquote></div>
    <div className="section mx-auto w-page max-w-about-copy py-20 text-center md:w-page-wide"><h2>{content.about.title}</h2><p className="text-muted">{content.about.story[0]}</p>
      {!compact ? <p className="text-muted">{content.about.story[1]}</p> : null}<Link className="text-link mt-3 inline-flex gap-2 font-bold text-primary hover:text-primary-hover" href="/about">{content.ui.readStory}<span aria-hidden="true"> ↗</span></Link>
    </div>
    <div className="about-image-strip grid grid-cols-3 gap-2">{images.map((image) => <ResponsiveImage key={image.src + image.alt} src={image.src} alt={image.alt} />)}</div>
  </section>;
}
