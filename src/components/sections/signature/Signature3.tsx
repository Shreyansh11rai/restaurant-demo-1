"use client";

import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function Signature3() {
  return <section className="section signature-carousel">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.exploreDishes} />
    <div className="dish-track">{content.signature.map((dish) => <article className="dish-card" key={dish.name} tabIndex={0}>
      <ResponsiveImage src={dish.image} alt={dish.name} className="dish-image" />
      <div className="dish-copy"><div><h3>{dish.name}</h3><span>{dish.price}</span></div><p>{dish.description}</p></div>
    </article>)}</div>
  </section>;
}
