import { content } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Actions1() {
  return (
    <div
      className="floating-actions actions-one [&.floating-actions]:[position:fixed] [&.floating-actions]:[z-index:25] [&.floating-actions]:[right:1rem] [&.floating-actions]:[bottom:calc(1rem_+_env(safe-area-inset-bottom))] [&.floating-actions]:[display:flex] [&.floating-actions]:[flex-direction:column] [&.floating-actions]:[flex-wrap:wrap] [&.floating-actions]:[gap:0.6rem]"
      aria-label={content.ui.contactHeading}
    >
      {content.contact.phone ? (
        <a
          className="action-round [&.action-round]:[display:grid] [&.action-round]:[width:3.25rem] [&.action-round]:[height:3.25rem] [&.action-round]:[place-items:center] [&.action-round]:[border:0] [&.action-round]:[border-radius:50%] [&.action-round]:[background:var(--theme-surface)] [&.action-round]:[box-shadow:0_5px_24px_rgba(0,_0,_0,_0.18)] [&.action-round]:[color:var(--theme-foreground)] [&.action-round]:[font-size:1.1rem] [&.action-round]:[font-weight:700] [&.action-round]:[cursor:pointer] [&.action-round_span]:[font-size:0.85rem] [&.action-round_span]:[font-size:0.875rem]"
          href={`tel:${content.contact.phone}`}
          aria-label={content.ui.call}
        >
          ☎
        </a>
      ) : null}
      {content.contact.whatsapp ? (
        <a
          className="action-round action-whatsapp [&.action-round]:[display:grid] [&.action-round]:[width:3.25rem] [&.action-round]:[height:3.25rem] [&.action-round]:[place-items:center] [&.action-round]:[border:0] [&.action-round]:[border-radius:50%] [&.action-round]:[background:var(--theme-surface)] [&.action-round]:[box-shadow:0_5px_24px_rgba(0,_0,_0,_0.18)] [&.action-round]:[color:var(--theme-foreground)] [&.action-round]:[font-size:1.1rem] [&.action-round]:[font-weight:700] [&.action-round]:[cursor:pointer] [&.action-round_span]:[font-size:0.85rem] [&.action-round_span]:[font-size:0.875rem] [&.action-whatsapp]:[background:var(--theme-primary)] [&.action-whatsapp]:[color:var(--theme-primary-foreground)]"
          href={buildWhatsAppUrl(content.contact.whatsappGreeting)}
          target="_blank"
          rel="noreferrer"
          aria-label={content.ui.bookWhatsApp}
        >
          ✉
        </a>
      ) : null}
    </div>
  );
}
