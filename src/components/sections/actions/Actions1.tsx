import { content } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Actions1() {
  return <div className="floating-actions actions-one" aria-label={content.ui.contactHeading}>
    {content.contact.phone ? <a className="action-round" href={`tel:${content.contact.phone}`} aria-label={content.ui.call}>☎</a> : null}
    {content.contact.whatsapp ? <a className="action-round action-whatsapp" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer" aria-label={content.ui.bookWhatsApp}>✉</a> : null}
  </div>;
}
