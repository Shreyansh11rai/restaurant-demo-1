import { content } from "@/data/content";

export default function Hours() {
  return (
    <div className="hours-block [&.hours-block_h3]:[margin-bottom:0.75rem] [&.hours-block_h3]:[font-family:var(--font-body)] [&.hours-block_h3]:[font-size:0.9rem] [&.hours-block_h3]:[font-weight:700] [&.hours-block_dl]:[margin:0] [&.hours-block_dl_>_div]:[display:flex] [&.hours-block_dl_>_div]:[justify-content:space-between] [&.hours-block_dl_>_div]:[gap:0.75rem] [&.hours-block_dl_>_div]:[padding:0.45rem_0] [&.hours-block_dl_>_div]:[border-bottom:1px_solid_var(--theme-border)] [&.hours-block_dl_>_div]:[font-size:0.79rem] [&.hours-block_dt]:[margin:0] [&.hours-block_dd]:[margin:0] [&.hours-block_dd]:[color:var(--theme-muted)] [&.hours-block_dd]:[text-align:right] [&.hours-block_dl_>_div]:[font-size:0.875rem]">
      <h3>{content.ui.hours}</h3>
      <dl>
        {content.contact.hours.map((entry) => (
          <div key={entry.days}><dt>{entry.days}</dt><dd>{entry.time}</dd></div>
        ))}
      </dl>
    </div>
  );
}
