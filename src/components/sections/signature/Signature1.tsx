import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function Signature1() {
  return <section className="section signature-section" aria-labelledby="signature-title">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.exploreDishes} centered />
    <div className="signature-grid">{content.signature.map((dish) => <article className="dish-card" key={dish.name}>
      <ResponsiveImage src={dish.image} alt={dish.name} className="dish-image" />
      <div className="dish-copy"><div><h3>{dish.name}</h3><span>{dish.price}</span></div><p>{dish.description}</p></div>
    </article>)}</div>
  </section>;
}
