import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Hours from "@/components/ui/Hours";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero2() {
  return (
    <section className="hero hero-split" aria-labelledby="home-title">
      <div className="hero-split-copy">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1 id="home-title">{content.hero.headline}</h1>
        <p>{content.hero.subtext}</p>
        <div className="hero-chips"><span>{content.brand.cuisine}</span><span>{content.contact.hours[0]?.time}</span></div>
        <div className="hero-actions">
          <Button href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}</Button>
          <Button href={buildWhatsAppUrl(content.contact.whatsappGreeting)} secondary target="_blank">{content.hero.secondaryCta.label}</Button>
        </div>
        <div className="hero-hours"><Hours /></div>
      </div>
      <div className="hero-split-image"><ResponsiveImage src={content.hero.image} alt="" priority className="cover-image" /></div>
    </section>
  );
}
