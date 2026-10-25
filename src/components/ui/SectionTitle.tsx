type SectionTitleProps = { eyebrow?: string; title: string; centered?: boolean };

export function SectionTitle({ eyebrow, title, centered = false }: SectionTitleProps) {
  return (
    <div className={`section-title${centered ? " section-title-centered" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}
