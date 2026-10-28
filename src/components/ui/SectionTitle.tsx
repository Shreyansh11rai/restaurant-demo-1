type SectionTitleProps = { eyebrow?: string; title: string; centered?: boolean };

export function SectionTitle({ eyebrow, title, centered = false }: SectionTitleProps) {
  return (
    <div className={`section-title mb-10 max-w-wide-copy ${centered ? "section-title-centered mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow mb-3 text-primary text-sm font-bold tracking-widest uppercase">{eyebrow}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}
