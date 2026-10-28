import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Hours from "@/components/ui/Hours";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero2() {
  return (
    <section className="hero hero-split relative overflow-hidden flex flex-col lg:min-h-173 lg:flex-row lg:items-stretch" aria-labelledby="home-title">
      <div className="hero-split-copy px-5 py-18 lg:flex lg:flex-col lg:justify-center lg:px-12">
        <p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">{content.hero.eyebrow}</p>
        <h1 className="mb-4" id="home-title">{content.hero.headline}</h1>
        <p className="max-w-xl">{content.hero.subtext}</p>
        <div className="hero-chips mt-5 flex flex-wrap gap-2"><span className="rounded-full border border-border px-3 py-1 text-xs text-accent">{content.brand.cuisine}</span><span className="rounded-full border border-border px-3 py-1 text-xs text-accent">{content.contact.hours[0]?.time}</span></div>
        <div className="hero-actions flex flex-wrap gap-3 mt-6">
          <Button href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}</Button>
          <Button href={buildWhatsAppUrl(content.contact.whatsappGreeting)} secondary target="_blank">{content.hero.secondaryCta.label}</Button>
        </div>
        <div className="hero-hours mt-8 lg:block"><Hours /></div>
      </div>
      <div className="hero-split-image min-h-88 overflow-hidden bg-surface-muted lg:min-h-full"><ResponsiveImage src={content.hero.image} alt="" priority className="cover-image w-full h-full min-h-88 object-cover lg:min-h-full" /></div>
    </section>
  );
}
