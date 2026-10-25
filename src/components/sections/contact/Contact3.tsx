import { content } from "@/data/content";
import { ContactInfo, MapEmbed, ReservationForm } from "./ContactPieces";

export default function Contact3({ compact = false }: { compact?: boolean }) {
  return <section className={`contact-section contact-three${compact ? " contact-compact" : ""}`}>
    {compact ? <div className="section"><ContactInfo showActions={false} /><div className="contact-actions">
      {content.contact.phone ? <a className="button" href={`tel:${content.contact.phone}`}>{content.ui.call}</a> : null}
      <a className="button button-secondary" href={`https://wa.me/${content.contact.whatsapp}`} target="_blank" rel="noreferrer">{content.ui.bookWhatsApp}</a>
    </div></div> : <>
      <div className="contact-map-background"><MapEmbed /><div className="contact-floating-card"><ContactInfo /></div></div>
      <div className="section"><ReservationForm /></div>
    </>}
  </section>;
}
