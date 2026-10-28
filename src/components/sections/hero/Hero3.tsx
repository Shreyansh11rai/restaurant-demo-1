import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { withBase } from "@/lib/withBase";

export default function Hero3() {
  return (
    <section className="hero hero-slideshow relative grid min-h-hero place-items-center overflow-hidden text-overlay-foreground lg:min-h-hero-wide" aria-labelledby="home-title">
      <div className="slide-stack absolute w-full h-full" aria-hidden="true">
        {content.hero.slides.map((src, index) => <img key={src} src={withBase(src)} alt="" width="1600" height="1000" className={`slide-photo absolute h-full w-full object-cover opacity-0 ${index === 0 ? "animate-slide-0" : index === 1 ? "animate-slide-1" : "animate-slide-2"}`} />)}
      </div>
      <div className="hero-shade absolute inset-0 bg-theme-overlay" />
      <div className="hero-copy relative z-1 w-page max-w-hero-copy py-20">
        <p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">{content.hero.eyebrow}</p>
        <h1 className="mb-4 max-w-about-copy" id="home-title">{content.hero.headline}</h1>
        <p className="max-w-xl text-lg">{content.hero.subtext}</p>
        <Button href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}</Button>
      </div>
      <div className="hero-info-bar absolute inset-x-0 bottom-0 z-2 flex flex-wrap items-center justify-between gap-3 bg-theme-overlay p-4 text-sm">
        <span>{content.contact.hours[0]?.time}</span><span>{content.contact.address}</span>
        <Button href={`tel:${content.contact.phone}`}>{content.ui.call}</Button>
      </div>
    </section>
  );
}
