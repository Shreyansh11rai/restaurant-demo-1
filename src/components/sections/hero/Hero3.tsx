import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { withBase } from "@/lib/withBase";

export default function Hero3() {
  return (
    <section className="hero hero-slideshow" aria-labelledby="home-title">
      <div className="slide-stack" aria-hidden="true">
        {content.hero.slides.map((src, index) => <img key={src} src={withBase(src)} alt="" width="1600" height="1000" className="slide-photo" style={{ "--slide-index": index } as React.CSSProperties} />)}
      </div>
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1 id="home-title">{content.hero.headline}</h1>
        <p>{content.hero.subtext}</p>
        <Button href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}</Button>
      </div>
      <div className="hero-info-bar">
        <span>{content.contact.hours[0]?.time}</span><span>{content.contact.address}</span>
        <Button href={`tel:${content.contact.phone}`}>{content.ui.call}</Button>
      </div>
    </section>
  );
}
