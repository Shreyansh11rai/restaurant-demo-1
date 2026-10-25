import Link from "next/link";
import { content } from "@/data/content";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function About2({ compact = false }: { compact?: boolean }) {
  const images = content.gallery.slice(0, compact ? 3 : 4);
  return <section className="about-quote-section">
    <div className="quote-band [&.quote-band]:[padding:4rem_1.25rem] [&.quote-band]:[background:var(--theme-surface-muted)] [&.quote-band]:[text-align:center] [&.quote-band_blockquote]:[max-width:820px] [&.quote-band_blockquote]:[margin:auto] [&.quote-band_blockquote]:[font-family:var(--font-display)] [&.quote-band_blockquote]:[font-size:clamp(2rem,_7vw,_4rem)] [&.quote-band_blockquote]:[line-height:1.12]"><p className="eyebrow [&.eyebrow]:[margin-bottom:0.85rem] [&.eyebrow]:[color:var(--theme-primary)] [&.eyebrow]:[font-size:0.76rem] [&.eyebrow]:[font-weight:700] [&.eyebrow]:[letter-spacing:0.14em] [&.eyebrow]:[text-transform:uppercase] [&.eyebrow]:[font-size:0.875rem]">{content.brand.name}</p><blockquote>“{content.about.quote}”</blockquote></div>
    <div className="section about-quote-copy [&.section]:[width:min(100%_-_2.5rem,_1180px)] [&.section]:[margin:0_auto] [&.section]:[padding:5rem_0] min-[700px]:[&.section]:[width:min(100%_-_4rem,_1180px)] min-[700px]:[&.section]:[padding:6.5rem_0] [&.about-quote-copy]:[max-width:760px] [&.about-quote-copy]:[text-align:center] [&.about-quote-copy_p]:[color:var(--theme-muted)]"><h2>{content.about.title}</h2><p>{content.about.story[0]}</p>
      {!compact ? <p>{content.about.story[1]}</p> : null}<Link className="text-link [&.text-link]:[display:inline-flex] [&.text-link]:[gap:0.4rem] [&.text-link]:[margin-top:0.65rem] [&.text-link]:[color:var(--theme-primary)] [&.text-link]:[font-weight:700] [&.text-link:hover]:[color:var(--theme-primary-hover)]" href="/about">{content.ui.readStory}<span aria-hidden="true"> ↗</span></Link>
    </div>
    <div className="about-image-strip [&.about-image-strip]:[display:grid] [&.about-image-strip]:[grid-template-columns:repeat(3,_1fr)] [&.about-image-strip]:[gap:0.5rem] [&.about-image-strip_img]:[width:100%] [&.about-image-strip_img]:[height:10rem] [&.about-image-strip_img]:[object-fit:cover]">{images.map((image) => <ResponsiveImage key={image.src + image.alt} src={image.src} alt={image.alt} />)}</div>
  </section>;
}
