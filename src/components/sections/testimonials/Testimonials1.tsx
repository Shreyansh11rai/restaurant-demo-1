import { content } from "@/data/content";

export default function Testimonials1() {
  return (
    <section
      className="section mx-auto w-page max-w-site py-12 md:w-page-wide md:py-20"
      aria-label={content.ui.testimonialsHeading}
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {content.testimonials.map((testimonial, index) => (
          <article
            className="flex flex-col justify-between gap-8 border border-border bg-surface p-6 md:p-8"
            key={`${testimonial.name}-${testimonial.detail}-${index}`}
          >
            <blockquote className="font-display text-2xl leading-snug">
              {testimonial.quote}
            </blockquote>
            <footer className="border-t border-border pt-4">
              <p className="mb-1 font-bold">{testimonial.name}</p>
              <p className="mb-0 text-sm text-muted">{testimonial.detail}</p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
