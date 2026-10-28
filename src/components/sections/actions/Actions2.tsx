import { content } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Actions2() {
  return (
    <div
      className="floating-actions actions-two fixed inset-x-0 bottom-0 z-25 flex flex-row gap-2 bg-surface p-2 pb-action-bar-safe shadow-lg lg:bottom-action-safe lg:left-auto lg:right-6 lg:w-auto lg:flex-col lg:bg-transparent lg:p-0 lg:pb-0 lg:shadow-none"
      aria-label={content.ui.contactHeading}
    >
      {content.contact.phone ? (
        <a
          className="action-round flex min-h-12 flex-1 items-center justify-center gap-2 rounded-theme border-0 bg-surface px-3 text-lg font-bold text-foreground shadow-card cursor-pointer lg:size-13 lg:flex-none lg:rounded-full lg:px-0"
          href={`tel:${content.contact.phone}`}
          aria-label={content.ui.call}
        >
          ☎<span>{content.ui.call}</span>
        </a>
      ) : null}
      {content.contact.whatsapp ? (
        <a
          className="action-round action-whatsapp flex min-h-12 flex-1 items-center justify-center gap-2 rounded-theme border-0 bg-primary px-3 text-lg font-bold text-primary-foreground shadow-card cursor-pointer lg:size-13 lg:flex-none lg:rounded-full lg:px-0"
          href={buildWhatsAppUrl(content.contact.whatsappGreeting)}
          target="_blank"
          rel="noreferrer"
          aria-label={content.ui.bookWhatsApp}
        >
          ✉<span>{content.ui.bookWhatsApp}</span>
        </a>
      ) : null}
    </div>
  );
}
