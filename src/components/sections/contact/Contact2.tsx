import { content } from "@/data/content";
import { ContactInfo, MapEmbed, ReservationForm } from "./ContactPieces";

export default function Contact2({ compact = false }: { compact?: boolean }) {
  return <section className={`section mx-auto w-page max-w-site py-20 contact-section contact-two ${compact ? "contact-compact" : ""}`}>
    {compact ? <><ContactInfo showActions={false} /><div className="contact-actions flex flex-wrap gap-2 mt-6">
      {content.contact.phone ? <a className="button inline-flex min-h-12 items-center justify-center gap-2 border border-primary rounded-theme p-3 bg-primary text-primary-foreground text-base font-bold text-center transition-all cursor-pointer hover:border-primary-hover hover:bg-primary-hover hover:-translate-y-0.5" href={`tel:${content.contact.phone}`}>{content.ui.call}</a> : null}
      {content.contact.whatsapp ? <a className="button button-secondary inline-flex min-h-12 items-center justify-center gap-2 rounded-theme border border-border bg-transparent px-5 py-3 text-center text-base font-bold text-foreground transition-colors hover:border-primary hover:bg-surface" href={`https://wa.me/${content.contact.whatsapp}`} target="_blank" rel="noreferrer">{content.ui.bookWhatsApp}</a> : null}
    </div></> : <>
      <div className="contact-stacked-actions"><ContactInfo /></div>
      <ReservationForm />
      <MapEmbed />
    </>}
  </section>;
}
