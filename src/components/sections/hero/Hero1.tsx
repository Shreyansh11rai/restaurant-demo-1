import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero1() {
  return (
    <section className="hero hero-full [&.hero]:[position:relative] [&.hero]:[overflow:hidden] [&.hero-full]:[display:grid] [&.hero-full]:[min-height:min(760px,_calc(100svh_-_4.5rem))] [&.hero-full]:[place-items:center] [&.hero-full]:[color:#fff] [&.hero-full]:[background:#211d18] min-[960px]:[&.hero-full]:[min-height:min(800px,_92svh)]" aria-labelledby="home-title">
      <ResponsiveImage src={content.hero.image} alt="" priority className="hero-photo [&.hero-photo]:[position:absolute] [&.hero-photo]:[inset:0] [&.hero-photo]:[width:100%] [&.hero-photo]:[height:100%] [&.hero-photo]:[object-fit:cover]" />
      <div className="hero-shade [&.hero-shade]:[position:absolute] [&.hero-shade]:[inset:0] [&.hero-shade]:[width:100%] [&.hero-shade]:[height:100%] [&.hero-shade]:[background:linear-gradient(90deg,_var(--theme-overlay),_rgba(0,_0,_0,_0.18))]" />
      <div className="hero-copy [&.hero-copy]:[position:relative] [&.hero-copy]:[z-index:1] [&.hero-copy]:[width:min(100%_-_2.5rem,_840px)] [&.hero-copy]:[padding:5rem_0] [&.hero-copy_h1]:[max-width:760px] [&.hero-copy_h1]:[margin-bottom:1rem] [&.hero-copy_>_p:not(.eyebrow)]:[max-width:36rem] [&.hero-copy_>_p:not(.eyebrow)]:[color:rgba(255,_255,_255,_0.88)] [&.hero-copy_>_p:not(.eyebrow)]:[font-size:1.1rem]">
        <p className="eyebrow [&.eyebrow]:[margin-bottom:0.85rem] [&.eyebrow]:[color:var(--theme-primary)] [&.eyebrow]:[font-size:0.76rem] [&.eyebrow]:[font-weight:700] [&.eyebrow]:[letter-spacing:0.14em] [&.eyebrow]:[text-transform:uppercase] [&.eyebrow]:[font-size:0.875rem]">{content.hero.eyebrow}</p>
        <h1 id="home-title">{content.hero.headline}</h1>
        <p>{content.hero.subtext}</p>
        <div className="hero-actions [&.hero-actions]:[display:flex] [&.hero-actions]:[flex-wrap:wrap] [&.hero-actions]:[gap:0.75rem] [&.hero-actions]:[margin-top:1.6rem] [&.hero-actions_.button-secondary]:[border-color:rgba(255,_255,_255,_0.6)] [&.hero-actions_.button-secondary]:[color:white]">
          <Button href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}</Button>
          <Button href={buildWhatsAppUrl(content.contact.whatsappGreeting)} secondary target="_blank">{content.hero.secondaryCta.label}</Button>
        </div>
      </div>
      <span className="hero-side-note [&.hero-side-note]:[position:absolute] [&.hero-side-note]:[right:1.25rem] [&.hero-side-note]:[bottom:1.5rem] [&.hero-side-note]:[z-index:1] [&.hero-side-note]:[color:rgba(255,_255,_255,_0.75)] [&.hero-side-note]:[font-size:0.75rem] [&.hero-side-note]:[letter-spacing:0.12em] [&.hero-side-note]:[text-transform:uppercase] [&.hero-side-note]:[font-size:0.875rem]">{content.brand.established}</span>
    </section>
  );
}
