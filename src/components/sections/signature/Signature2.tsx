import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function Signature2() {
  return <section className="section signature-rows [&.section]:[width:min(100%_-_2.5rem,_1180px)] [&.section]:[margin:0_auto] [&.section]:[padding:5rem_0] min-[700px]:[&.section]:[width:min(100%_-_4rem,_1180px)] min-[700px]:[&.section]:[padding:6.5rem_0] [&.signature-rows_.section-title]:[margin-bottom:2.5rem]">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.exploreDishes} />
    {content.signature.map((dish, index) => <article className={`dish-row${index % 2 ? " dish-row-reverse" : ""} [&.dish-row]:[display:grid] [&.dish-row]:[gap:1.5rem] [&.dish-row]:[padding:1.5rem_0] [&.dish-row]:[border-top:1px_solid_var(--theme-border)] [&.dish-row_>_div]:[align-self:center] [&.dish-row_h3]:[margin-bottom:0.5rem] [&.dish-row_h3]:[font-size:2.3rem] [&.dish-row_p:not(.eyebrow)]:[color:var(--theme-muted)] min-[700px]:[&.dish-row]:[grid-template-columns:1fr_1fr] min-[700px]:[&.dish-row]:[gap:3rem] min-[700px]:[&.dish-row-reverse_.dish-row-image]:[order:2]`} key={dish.name}>
      <ResponsiveImage src={dish.image} alt={dish.name} className="dish-row-image [&.dish-row-image]:[width:100%] [&.dish-row-image]:[height:17rem] [&.dish-row-image]:[object-fit:cover]" />
      <div><p className="eyebrow [&.eyebrow]:[margin-bottom:0.85rem] [&.eyebrow]:[color:var(--theme-primary)] [&.eyebrow]:[font-size:0.76rem] [&.eyebrow]:[font-weight:700] [&.eyebrow]:[letter-spacing:0.14em] [&.eyebrow]:[text-transform:uppercase] [&.eyebrow]:[font-size:0.875rem]">{dish.veg ? content.ui.veg : content.ui.nonVeg}</p><h3>{dish.name}</h3><p>{dish.description}</p><strong>{dish.price}</strong></div>
    </article>)}
  </section>;
}
