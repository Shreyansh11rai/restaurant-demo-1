import Link from "next/link";
import { content } from "@/data/content";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function About1({ compact = false }: { compact?: boolean }) {
  return <section className="section about-split [&.section]:[width:min(100%_-_2.5rem,_1180px)] [&.section]:[margin:0_auto] [&.section]:[padding:5rem_0] min-[700px]:[&.section]:[width:min(100%_-_4rem,_1180px)] min-[700px]:[&.section]:[padding:6.5rem_0] [&.about-split]:[display:grid] [&.about-split]:[gap:2rem] [&.about-split]:[align-items:center] min-[700px]:[&.about-split]:[grid-template-columns:1.05fr_0.95fr] min-[700px]:[&.about-split]:[gap:3rem]">
    <ResponsiveImage src={content.about.image} alt={content.brand.name} className="about-photo [&.about-photo]:[width:100%] [&.about-photo]:[height:22rem] [&.about-photo]:[object-fit:cover] min-[700px]:[&.about-photo]:[height:34rem]" />
    <div className="about-copy [&.about-copy_>_p]:[color:var(--theme-muted)]">
      <SectionTitle eyebrow={content.brand.established} title={content.about.title} />
      <p>{content.about.story[0]}</p>
      {!compact ? <p>{content.about.story[1]}</p> : null}
      <Link className="text-link [&.text-link]:[display:inline-flex] [&.text-link]:[gap:0.4rem] [&.text-link]:[margin-top:0.65rem] [&.text-link]:[color:var(--theme-primary)] [&.text-link]:[font-weight:700] [&.text-link:hover]:[color:var(--theme-primary-hover)]" href="/about">{content.ui.readStory}<span aria-hidden="true"> ↗</span></Link>
      {!compact ? <div className="stats-row [&.stats-row]:[display:flex] [&.stats-row]:[flex-wrap:wrap] [&.stats-row]:[gap:1.25rem] [&.stats-row]:[margin-top:2rem] [&.stats-row]:[border-top:1px_solid_var(--theme-border)] [&.stats-row]:[padding-top:1.5rem] [&.stats-row_div]:[display:grid] [&.stats-row_div]:[gap:0.2rem] [&.stats-row_strong]:[color:var(--theme-primary)] [&.stats-row_strong]:[font-family:var(--font-display)] [&.stats-row_strong]:[font-size:1.8rem] [&.stats-row_span]:[color:var(--theme-muted)] [&.stats-row_span]:[font-size:0.75rem] [&.stats-row_span]:[font-size:0.875rem]">{content.about.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div> : null}
    </div>
  </section>;
}
