import { content } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Actions2() {
  return <div className="floating-actions actions-two" aria-label={content.ui.contactHeading}>
    {content.contact.phone ? <a className="action-round" href={`tel:${content.contact.phone}`} aria-label={content.ui.call}>☎<span>{content.ui.call}</span></a> : null}
    {content.contact.whatsapp ? <a className="action-round action-whatsapp" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">✉<span>{content.ui.bookWhatsApp}</span></a> : null}
  </div>;
}
