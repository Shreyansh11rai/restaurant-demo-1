"use client";

import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function Signature3() {
  return <section className="section mx-auto py-20 signature-carousel w-page max-w-site md:w-page-wide md:max-w-site">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.exploreDishes} />
    <div className="dish-track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 md:gap-5">{content.signature.map((dish) => <article className="dish-card w-4/5 shrink-0 snap-start overflow-hidden rounded-theme border border-border bg-surface shadow-card md:w-1/3" key={dish.name} tabIndex={0}>
      <ResponsiveImage src={dish.image} alt={dish.name} className="dish-image w-full h-60 object-cover bg-surface-muted md:h-68" />
      <div className="dish-copy p-6"><div className="flex items-baseline justify-between gap-4"><h3 className="mb-2">{dish.name}</h3><span className="font-bold text-primary">{dish.price}</span></div><p className="mb-0 text-muted">{dish.description}</p></div>
    </article>)}</div>
  </section>;
}
