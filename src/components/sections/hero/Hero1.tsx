import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero1() {
  return (
    <section
      className="relative grid min-h-hero place-items-center  overflow-hidden text-overlay-foreground"
      aria-labelledby="home-title"
    >
      <ResponsiveImage
        src={content.hero.image}
        alt=""
        priority
        className="hero-photo absolute w-full h-full object-cover"
      />
      <div className="hero-shade absolute inset-0 bg-theme-overlay" />
      <div className="hero-copy relative z-1 w-page max-w-hero-copy py-20">
        <p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">
          {content.hero.eyebrow}
        </p>
        <h1 className="mb-4 max-w-about-copy" id="home-title">
          {content.hero.headline}
        </h1>
        <p className="max-w-xl text-lg">{content.hero.subtext}</p>
        <div className="hero-actions flex flex-wrap gap-3 mt-6">
          <Button href={content.hero.primaryCta.href}>
            {content.hero.primaryCta.label}
          </Button>
          <Button
            href={buildWhatsAppUrl(content.contact.whatsappGreeting)}
            secondary
            target="_blank"
          >
            {content.hero.secondaryCta.label}
          </Button>
        </div>
      </div>
      <span className="hero-side-note absolute right-5 bottom-6 z-1 text-sm tracking-widest uppercase">
        {content.brand.established}
      </span>
    </section>
  );
}
