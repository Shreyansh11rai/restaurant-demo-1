import { content } from "@/data/content";

export default function Testimonials2() {
  const [featured, ...others] = content.testimonials;

  return (
    <section
      className="section mx-auto w-page max-w-site py-12 md:w-page-wide md:py-20"
      aria-label={content.ui.testimonialsHeading}
    >
      {featured ? (
        <div className="grid gap-8 border-y border-border py-8 md:grid-cols-[1.4fr_1fr] md:gap-16 md:py-14">
          <blockquote className="m-0 max-w-wide-copy font-display text-3xl leading-tight md:text-5xl">
            {featured.quote}
          </blockquote>
          <footer className="flex flex-col justify-end border-l-2 border-primary pl-5">
            <p className="mb-1 font-bold">{featured.name}</p>
            <p className="mb-0 text-sm text-muted">{featured.detail}</p>
          </footer>
        </div>
      ) : null}
      <div className="grid gap-x-12 md:grid-cols-2">
        {others.map((testimonial, index) => (
          <article
            className="border-b border-border py-7"
            key={`${testimonial.name}-${testimonial.detail}-${index}`}
          >
            <blockquote className="mb-5 text-lg leading-relaxed">
              {testimonial.quote}
            </blockquote>
            <footer>
              <span className="font-bold">{testimonial.name}</span>
              <span className="text-muted"> · {testimonial.detail}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
