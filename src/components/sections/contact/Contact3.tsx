import { content } from "@/data/content";
import { ContactInfo, MapEmbed, ReservationForm } from "./ContactPieces";

export default function Contact3({ compact = false }: { compact?: boolean }) {
  return <section className={`contact-section w-full py-20 contact-three ${compact ? "contact-compact" : ""}`}>
    {compact ? <div className="section mx-auto w-page max-w-site py-20 md:w-page-wide"><ContactInfo showActions={false} /><div className="contact-actions mt-6 flex flex-wrap gap-2">
      {content.contact.phone ? <a className="button inline-flex min-h-12 items-center justify-center gap-2 border border-primary rounded-theme p-3 bg-primary text-primary-foreground text-base font-bold text-center transition-all cursor-pointer hover:border-primary-hover hover:bg-primary-hover hover:-translate-y-0.5" href={`tel:${content.contact.phone}`}>{content.ui.call}</a> : null}
      {content.contact.whatsapp ? <a className="button button-secondary inline-flex min-h-12 items-center justify-center gap-2 rounded-theme border border-border bg-transparent px-5 py-3 text-center text-base font-bold text-foreground transition-colors hover:border-primary hover:bg-surface" href={`https://wa.me/${content.contact.whatsapp}`} target="_blank" rel="noreferrer">{content.ui.bookWhatsApp}</a> : null}
    </div></div> : <>
      <div className="contact-map-background relative"><MapEmbed /><div className="contact-floating-card w-page-header max-w-header relative z-1 lg:absolute lg:w-page-wide lg:max-w-site lg:-translate-y-0.5"><ContactInfo /></div></div>
      <div className="section mx-auto w-page max-w-site py-20 md:w-page-wide"><ReservationForm /></div>
    </>}
  </section>;
}
