import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function Signature2() {
  return <section className="section mx-auto py-20 signature-rows w-page max-w-site md:w-page-wide md:max-w-site">
    <SectionTitle eyebrow={content.brand.name} title={content.ui.exploreDishes} />
    {content.signature.map((dish, index) => <article className={`dish-row flex flex-col gap-6 border-t border-border py-6 md:flex-row md:items-center md:gap-12 ${index % 2 ? "md:flex-row-reverse" : ""}`} key={dish.name}>
      <ResponsiveImage src={dish.image} alt={dish.name} className="dish-row-image w-full h-68 object-cover" />
      <div><p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">{dish.veg ? content.ui.veg : content.ui.nonVeg}</p><h3>{dish.name}</h3><p className="text-muted">{dish.description}</p><strong className="text-primary">{dish.price}</strong></div>
    </article>)}
  </section>;
}
