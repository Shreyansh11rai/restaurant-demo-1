import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Hours from "@/components/ui/Hours";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Hero2() {
  return (
    <section className="hero hero-split [&.hero]:[position:relative] [&.hero]:[overflow:hidden] [&.hero-split]:[display:flex] [&.hero-split]:[flex-direction:column] min-[960px]:[&.hero-split]:[min-height:690px] min-[960px]:[&.hero-split]:[flex-direction:row] min-[960px]:[&.hero-split]:[align-items:stretch]" aria-labelledby="home-title">
      <div className="hero-split-copy [&.hero-split-copy]:[padding:4.5rem_1.25rem] [&.hero-split-copy_h1]:[font-size:clamp(3rem,_12vw,_5.4rem)] [&.hero-split-copy_>_p:not(.eyebrow)]:[max-width:34rem] [&.hero-split-copy_>_p:not(.eyebrow)]:[color:var(--theme-muted)] min-[960px]:[&.hero-split-copy]:[display:flex] min-[960px]:[&.hero-split-copy]:[width:50%] min-[960px]:[&.hero-split-copy]:[flex-direction:column] min-[960px]:[&.hero-split-copy]:[justify-content:center] min-[960px]:[&.hero-split-copy]:[padding:5rem_max(2rem,_calc((100vw_-_1180px)_/_2))] min-[960px]:[&.hero-split-copy]:[padding-right:3rem]">
        <p className="eyebrow [&.eyebrow]:[margin-bottom:0.85rem] [&.eyebrow]:[color:var(--theme-primary)] [&.eyebrow]:[font-size:0.76rem] [&.eyebrow]:[font-weight:700] [&.eyebrow]:[letter-spacing:0.14em] [&.eyebrow]:[text-transform:uppercase] [&.eyebrow]:[font-size:0.875rem]">{content.hero.eyebrow}</p>
        <h1 id="home-title">{content.hero.headline}</h1>
        <p>{content.hero.subtext}</p>
        <div className="hero-chips [&.hero-chips]:[display:flex] [&.hero-chips]:[flex-wrap:wrap] [&.hero-chips]:[gap:0.5rem] [&.hero-chips]:[margin-top:1.3rem] [&.hero-chips_span]:[border:1px_solid_var(--theme-border)] [&.hero-chips_span]:[border-radius:99px] [&.hero-chips_span]:[padding:0.35rem_0.75rem] [&.hero-chips_span]:[color:var(--theme-accent)] [&.hero-chips_span]:[font-size:0.78rem] [&.hero-chips_span]:[font-size:0.875rem]"><span>{content.brand.cuisine}</span><span>{content.contact.hours[0]?.time}</span></div>
        <div className="hero-actions [&.hero-actions]:[display:flex] [&.hero-actions]:[flex-wrap:wrap] [&.hero-actions]:[gap:0.75rem] [&.hero-actions]:[margin-top:1.6rem] [&.hero-actions_.button-secondary]:[border-color:rgba(255,_255,_255,_0.6)] [&.hero-actions_.button-secondary]:[color:white]">
          <Button href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}</Button>
          <Button href={buildWhatsAppUrl(content.contact.whatsappGreeting)} secondary target="_blank">{content.hero.secondaryCta.label}</Button>
        </div>
        <div className="hero-hours [&.hero-hours]:[margin-top:2rem] [&.hero-hours_.hours-block_h3]:[font-family:var(--font-body)] [&.hero-hours_.hours-block_h3]:[font-size:0.8rem] [&.hero-hours_.hours-block_dl]:[max-width:22rem] [&.hero-hours_.hours-block_h3]:[font-size:0.875rem] min-[960px]:[&.hero-hours]:[display:block]"><Hours /></div>
      </div>
      <div className="hero-split-image [&.hero-split-image]:[min-height:22rem] [&.hero-split-image]:[overflow:hidden] [&.hero-split-image]:[background:var(--theme-surface-muted)] min-[960px]:[&.hero-split-image]:[width:50%] min-[960px]:[&.hero-split-image]:[min-height:100%]"><ResponsiveImage src={content.hero.image} alt="" priority className="cover-image [&.cover-image]:[width:100%] [&.cover-image]:[height:100%] [&.cover-image]:[min-height:22rem] [&.cover-image]:[object-fit:cover] min-[960px]:[&.cover-image]:[min-height:100%]" /></div>
    </section>
  );
}
