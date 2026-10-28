import { content } from "@/data/content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

export default function Signature1() {
  return (
    <section
      className="section mx-auto w-page max-w-site py-20 signature-section md:w-page-wide"
      aria-labelledby="signature-title"
    >
      <SectionTitle
        eyebrow={content.brand.name}
        title={content.ui.exploreDishes}
        centered
      />
      <div className="signature-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5">
        {content.signature.map((dish) => (
          <article
            className="dish-card overflow-hidden rounded-theme border border-border bg-surface shadow-card"
            key={dish.name}
          >
            <ResponsiveImage
              src={dish.image}
              alt={dish.name}
              className="dish-image w-full h-60 object-cover bg-surface-muted md:h-68"
            />
            <div className="dish-copy p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="mb-2">{dish.name}</h3>
                <span className="font-bold text-primary">{dish.price}</span>
              </div>
              <p className="mb-0 text-muted">{dish.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
