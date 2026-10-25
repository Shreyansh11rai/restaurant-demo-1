import Link from "next/link";
import { content } from "@/data/content";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function About2({ compact = false }: { compact?: boolean }) {
  const images = content.gallery.slice(0, compact ? 3 : 4);
  return <section className="about-quote-section">
    <div className="quote-band"><p className="eyebrow">{content.brand.name}</p><blockquote>“{content.about.quote}”</blockquote></div>
    <div className="section about-quote-copy"><h2>{content.about.title}</h2><p>{content.about.story[0]}</p>
      {!compact ? <p>{content.about.story[1]}</p> : null}<Link className="text-link" href="/about">{content.ui.readStory}<span aria-hidden="true"> ↗</span></Link>
    </div>
    <div className="about-image-strip">{images.map((image) => <ResponsiveImage key={image.src + image.alt} src={image.src} alt={image.alt} />)}</div>
  </section>;
}
