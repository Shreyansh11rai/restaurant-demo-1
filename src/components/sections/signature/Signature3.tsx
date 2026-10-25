"use client";

import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function Signature3() {
  return <section className="section signature-carousel [&.section]:[width:min(100%_-_2.5rem,_1180px)] [&.section]:[margin:0_auto] [&.section]:[padding:5rem_0] min-[700px]:[&.section]:[width:min(100%_-_4rem,_1180px)] min-[700px]:[&.section]:[padding:6.5rem_0]">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.exploreDishes} />
    <div className="dish-track [&.dish-track]:[display:grid] [&.dish-track]:[grid-auto-columns:minmax(80%,_1fr)] [&.dish-track]:[grid-auto-flow:column] [&.dish-track]:[gap:1rem] [&.dish-track]:[overflow-x:auto] [&.dish-track]:[padding:0_0_1.25rem] [&.dish-track]:[scroll-snap-type:x_mandatory] [&.dish-track_>_*]:[scroll-snap-align:start] min-[700px]:[&.dish-track]:[grid-auto-columns:44%] min-[700px]:[&.dish-track]:[gap:1.25rem]">{content.signature.map((dish) => <article className="dish-card [&.dish-card]:[overflow:hidden] [&.dish-card]:[border:1px_solid_var(--theme-border)] [&.dish-card]:[border-radius:var(--radius)] [&.dish-card]:[background:var(--theme-surface)] [&.dish-card]:[box-shadow:0_8px_28px_rgba(0,_0,_0,_0.045)]" key={dish.name} tabIndex={0}>
      <ResponsiveImage src={dish.image} alt={dish.name} className="dish-image [&.dish-image]:[width:100%] [&.dish-image]:[height:15rem] [&.dish-image]:[object-fit:cover] [&.dish-image]:[background:var(--theme-surface-muted)] min-[700px]:[&.dish-image]:[height:17rem]" />
      <div className="dish-copy [&.dish-copy]:[padding:1.2rem] [&.dish-copy_>_div]:[display:flex] [&.dish-copy_>_div]:[align-items:baseline] [&.dish-copy_>_div]:[justify-content:space-between] [&.dish-copy_>_div]:[gap:1rem] [&.dish-copy_h3]:[margin:0] [&.dish-copy_h3]:[font-size:1.55rem] [&.dish-copy_span]:[color:var(--theme-primary)] [&.dish-copy_span]:[font-weight:700] [&.dish-copy_span]:[white-space:nowrap] [&.dish-copy_strong]:[color:var(--theme-primary)] [&.dish-copy_strong]:[font-weight:700] [&.dish-copy_strong]:[white-space:nowrap] [&.dish-copy_p]:[margin:0.65rem_0_0] [&.dish-copy_p]:[color:var(--theme-muted)] [&.dish-copy_p]:[font-size:0.9rem] [&.dish-copy_p]:[font-size:0.875rem] [&.dish-copy]:[padding:1.4rem]"><div><h3>{dish.name}</h3><span>{dish.price}</span></div><p>{dish.description}</p></div>
    </article>)}</div>
  </section>;
}
