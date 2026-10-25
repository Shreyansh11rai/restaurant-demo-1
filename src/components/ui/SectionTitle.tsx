type SectionTitleProps = { eyebrow?: string; title: string; centered?: boolean };

export function SectionTitle({ eyebrow, title, centered = false }: SectionTitleProps) {
  return (
    <div className={`section-title${centered ? " section-title-centered" : ""} [&.section-title]:[max-width:740px] [&.section-title]:[margin-bottom:2rem] [&.section-title_h2]:[margin-bottom:0] [&.section-title]:[margin-bottom:2.5rem] [&.section-title-centered]:[text-align:center] [&.section-title-centered]:[margin-inline:auto]`}>
      {eyebrow ? <p className="eyebrow [&.eyebrow]:[margin-bottom:0.85rem] [&.eyebrow]:[color:var(--theme-primary)] [&.eyebrow]:[font-size:0.76rem] [&.eyebrow]:[font-weight:700] [&.eyebrow]:[letter-spacing:0.14em] [&.eyebrow]:[text-transform:uppercase] [&.eyebrow]:[font-size:0.875rem]">{eyebrow}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}
