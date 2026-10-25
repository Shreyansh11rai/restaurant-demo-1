import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function Signature2() {
  return <section className="section signature-rows">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.exploreDishes} />
    {content.signature.map((dish, index) => <article className={`dish-row${index % 2 ? " dish-row-reverse" : ""}`} key={dish.name}>
      <ResponsiveImage src={dish.image} alt={dish.name} className="dish-row-image" />
      <div><p className="eyebrow">{dish.veg ? content.ui.veg : content.ui.nonVeg}</p><h3>{dish.name}</h3><p>{dish.description}</p><strong>{dish.price}</strong></div>
    </article>)}
  </section>;
}
