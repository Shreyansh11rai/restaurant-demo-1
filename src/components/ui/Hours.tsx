import { content } from "@/data/content";

export default function Hours() {
  return (
    <div className="mt-4">
      <h3 className=" font-body text-lg">{content.ui.hours}</h3>
      <dl className="m-0">
        {content.contact.hours.map((entry) => (
          <div className="flex justify-between gap-3 py-2" key={entry.days}>
            <dt>{entry.days}</dt>
            <dd className="m-0 text-right">{entry.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
