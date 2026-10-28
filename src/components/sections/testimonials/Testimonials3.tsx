import { content } from "@/data/content";

export default function Testimonials3() {
  return (
    <section
      className="section mx-auto w-page max-w-site py-12 md:w-page-wide md:py-20"
      aria-label={content.ui.testimonialsHeading}
    >
      <div className="divide-y divide-border border-y border-border">
        {content.testimonials.map((testimonial, index) => (
          <article
            className="grid gap-4 py-8 md:grid-cols-[5rem_1fr_15rem] md:items-start md:gap-8 md:py-10"
            key={`${testimonial.name}-${testimonial.detail}-${index}`}
          >
            <span
              className="font-display text-3xl text-primary"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <blockquote className="m-0 max-w-wide-copy font-display text-2xl leading-snug md:text-3xl">
              {testimonial.quote}
            </blockquote>
            <footer className="md:pt-2">
              <p className="mb-1 font-bold">{testimonial.name}</p>
              <p className="mb-0 text-sm text-muted">{testimonial.detail}</p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
