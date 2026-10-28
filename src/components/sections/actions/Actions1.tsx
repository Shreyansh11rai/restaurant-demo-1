import { content } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BiPhone } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

export default function Actions1() {
  return (
    <div
      className="floating-actions actions-one fixed bottom-action-safe right-4 z-25 flex flex-col gap-2"
      aria-label={content.ui.contactHeading}
    >
      {content.contact.phone ? (
        <a
          className="action-round grid w-13 h-13 place-items-center border-0 rounded-full bg-surface shadow-lg text-foreground text-lg font-bold cursor-pointer"
          href={`tel:${content.contact.phone}`}
          aria-label={content.ui.call}
        >
          <BiPhone />
        </a>
      ) : null}
      {content.contact.whatsapp ? (
        <a
          className="action-round action-whatsapp grid w-13 h-13 place-items-center border-0 rounded-full bg-surface shadow-lg text-foreground text-lg font-bold cursor-pointer bg-primary text-primary-foreground"
          href={buildWhatsAppUrl(content.contact.whatsappGreeting)}
          target="_blank"
          rel="noreferrer"
          aria-label={content.ui.bookWhatsApp}
        >
          <BsWhatsapp fill="green" />
        </a>
      ) : null}
    </div>
  );
}
