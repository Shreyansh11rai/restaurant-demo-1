import { content } from "@/data/content";

export default function Hours() {
  return (
    <div className="hours-block">
      <h3>{content.ui.hours}</h3>
      <dl>
        {content.contact.hours.map((entry) => (
          <div key={entry.days}><dt>{entry.days}</dt><dd>{entry.time}</dd></div>
        ))}
      </dl>
    </div>
  );
}
