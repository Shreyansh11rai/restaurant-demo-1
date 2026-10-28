import Link from "next/link";
import { content } from "@/data/content";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function About1({ compact = false }: { compact?: boolean }) {
  return <section className="section mx-auto py-20 about-split w-page max-w-site md:w-page-wide md:max-w-site grid gap-8 items-center md:grid-cols-2 md:gap-12">
    <ResponsiveImage src={content.about.image} alt={content.brand.name} className="about-photo w-full h-88 object-cover md:h-136" />
    <div className="about-copy">
      <SectionTitle eyebrow={content.brand.established} title={content.about.title} />
      <p className="text-muted">{content.about.story[0]}</p>
      {!compact ? <p className="text-muted">{content.about.story[1]}</p> : null}
      <Link className="text-link inline-flex gap-2 mt-3 text-primary font-bold hover:text-primary-hover" href="/about">{content.ui.readStory}<span aria-hidden="true"> ↗</span></Link>
      {!compact ? <div className="stats-row mt-8 flex flex-wrap gap-5 border-t border-border pt-6">{content.about.stats.map((stat) => <div className="flex flex-col gap-1" key={stat.label}><strong className="font-display text-3xl text-primary">{stat.value}</strong><span className="text-sm text-muted">{stat.label}</span></div>)}</div> : null}
    </div>
  </section>;
}
