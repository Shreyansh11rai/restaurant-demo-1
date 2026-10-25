import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { withBase } from "@/lib/withBase";

export default function Hero3() {
  return (
    <section className="hero hero-slideshow [&.hero]:[position:relative] [&.hero]:[overflow:hidden] [&.hero-slideshow]:[display:grid] [&.hero-slideshow]:[min-height:min(760px,_calc(100svh_-_4.5rem))] [&.hero-slideshow]:[place-items:center] [&.hero-slideshow]:[color:#fff] [&.hero-slideshow]:[background:#211d18] [&.hero-slideshow_.slide-stack]:[overflow:hidden] min-[960px]:[&.hero-slideshow]:[min-height:min(800px,_92svh)]" aria-labelledby="home-title">
      <div className="slide-stack [&.slide-stack]:[position:absolute] [&.slide-stack]:[inset:0] [&.slide-stack]:[width:100%] [&.slide-stack]:[height:100%]" aria-hidden="true">
        {content.hero.slides.map((src, index) => <img key={src} src={withBase(src)} alt="" width="1600" height="1000" className="slide-photo [&.slide-photo]:[position:absolute] [&.slide-photo]:[inset:0] [&.slide-photo]:[width:100%] [&.slide-photo]:[height:100%] [&.slide-photo]:[object-fit:cover] [&.slide-photo]:[opacity:0] [&.slide-photo]:[animation:slideshow-fade_15s_infinite] [&.slide-photo]:[animation-delay:calc(var(--slide-index)_*_5s)]" style={{ "--slide-index": index } as React.CSSProperties} />)}
      </div>
      <div className="hero-shade [&.hero-shade]:[position:absolute] [&.hero-shade]:[inset:0] [&.hero-shade]:[width:100%] [&.hero-shade]:[height:100%] [&.hero-shade]:[background:linear-gradient(90deg,_var(--theme-overlay),_rgba(0,_0,_0,_0.18))]" />
      <div className="hero-copy [&.hero-copy]:[position:relative] [&.hero-copy]:[z-index:1] [&.hero-copy]:[width:min(100%_-_2.5rem,_840px)] [&.hero-copy]:[padding:5rem_0] [&.hero-copy_h1]:[max-width:760px] [&.hero-copy_h1]:[margin-bottom:1rem] [&.hero-copy_>_p:not(.eyebrow)]:[max-width:36rem] [&.hero-copy_>_p:not(.eyebrow)]:[color:rgba(255,_255,_255,_0.88)] [&.hero-copy_>_p:not(.eyebrow)]:[font-size:1.1rem]">
        <p className="eyebrow [&.eyebrow]:[margin-bottom:0.85rem] [&.eyebrow]:[color:var(--theme-primary)] [&.eyebrow]:[font-size:0.76rem] [&.eyebrow]:[font-weight:700] [&.eyebrow]:[letter-spacing:0.14em] [&.eyebrow]:[text-transform:uppercase] [&.eyebrow]:[font-size:0.875rem]">{content.hero.eyebrow}</p>
        <h1 id="home-title">{content.hero.headline}</h1>
        <p>{content.hero.subtext}</p>
        <Button href={content.hero.primaryCta.href}>{content.hero.primaryCta.label}</Button>
      </div>
      <div className="hero-info-bar [&.hero-info-bar]:[position:absolute] [&.hero-info-bar]:[z-index:2] [&.hero-info-bar]:[inset:auto_0_0] [&.hero-info-bar]:[display:flex] [&.hero-info-bar]:[flex-wrap:wrap] [&.hero-info-bar]:[align-items:center] [&.hero-info-bar]:[justify-content:space-between] [&.hero-info-bar]:[gap:0.75rem] [&.hero-info-bar]:[padding:1rem_1.25rem] [&.hero-info-bar]:[background:rgba(10,_8,_6,_0.75)] [&.hero-info-bar]:[font-size:0.83rem] [&.hero-info-bar_.button]:[min-height:2.5rem] min-[960px]:[&.hero-info-bar]:[padding-inline:max(2rem,_calc((100vw_-_1180px)_/_2))]">
        <span>{content.contact.hours[0]?.time}</span><span>{content.contact.address}</span>
        <Button href={`tel:${content.contact.phone}`}>{content.ui.call}</Button>
      </div>
    </section>
  );
}
