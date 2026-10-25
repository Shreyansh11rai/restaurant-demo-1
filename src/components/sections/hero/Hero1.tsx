import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero1() {
  return (
    <section className="hero hero-full" aria-labelledby="home-title">
      <ResponsiveImage src={content.hero.image} alt="" priority className="hero-photo" />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow">{content.hero.eyebrow}</p>
        <h1 id="home-title">{content.hero.headline}</h1>
        <p>{content.hero.subtext}</p>
        <div className="hero-actions">
          <Button href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}</Button>
          <Button href={buildWhatsAppUrl(content.contact.whatsappGreeting)} secondary target="_blank">{content.hero.secondaryCta.label}</Button>
        </div>
      </div>
      <span className="hero-side-note">{content.brand.established}</span>
    </section>
  );
}
