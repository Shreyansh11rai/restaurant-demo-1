import { content } from "@/data/content";
import { ContactInfo, MapEmbed, ReservationForm } from "./ContactPieces";

export default function Contact1({ compact = false }: { compact?: boolean }) {
  return <section className={`section contact-section contact-one${compact ? " contact-compact" : ""}`}>
    {compact ? <ContactInfo showActions={false} /> : <>
      <div className="contact-split"><ContactInfo /><MapEmbed /></div>
      <ReservationForm />
    </>}
    {compact ? <div className="contact-actions">
      {content.contact.phone ? <a className="button" href={`tel:${content.contact.phone}`}>{content.ui.call}</a> : null}
      <a className="button button-secondary" href={`https://wa.me/${content.contact.whatsapp}`} target="_blank" rel="noreferrer">{content.ui.bookWhatsApp}</a>
    </div> : null}
  </section>;
}
