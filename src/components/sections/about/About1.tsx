import Link from "next/link";
import { content } from "@/data/content";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function About1({ compact = false }: { compact?: boolean }) {
  return <section className="section about-split">
    <ResponsiveImage src={content.about.image} alt={content.brand.name} className="about-photo" />
    <div className="about-copy">
      <SectionTitle eyebrow={content.brand.established} title={content.about.title} />
      <p>{content.about.story[0]}</p>
      {!compact ? <p>{content.about.story[1]}</p> : null}
      <Link className="text-link" href="/about">{content.ui.readStory}<span aria-hidden="true"> ↗</span></Link>
      {!compact ? <div className="stats-row">{content.about.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div> : null}
    </div>
  </section>;
}
