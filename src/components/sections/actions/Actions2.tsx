import { content } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Actions2() {
  return (
    <div
      className="floating-actions actions-two [&.floating-actions]:[position:fixed] [&.floating-actions]:[z-index:25] [&.floating-actions]:[right:1rem] [&.floating-actions]:[bottom:calc(1rem_+_env(safe-area-inset-bottom))] [&.floating-actions]:[display:flex] [&.floating-actions]:[flex-direction:column] [&.floating-actions]:[flex-wrap:wrap] [&.floating-actions]:[gap:0.6rem] [&.actions-two]:[right:0] [&.actions-two]:[bottom:0] [&.actions-two]:[left:0] [&.actions-two]:[flex-direction:row] [&.actions-two]:[gap:0] [&.actions-two]:[padding:0.55rem_0.5rem_calc(0.55rem_+_env(safe-area-inset-bottom))] [&.actions-two]:[background:var(--theme-surface)] [&.actions-two]:[box-shadow:0_-4px_20px_rgba(0,_0,_0,_0.12)] [&.actions-two_.action-round]:[width:47%] [&.actions-two_.action-round]:[height:2.8rem] [&.actions-two_.action-round]:[border-radius:var(--radius)] [&.actions-two_.action-round]:[box-shadow:none] min-[960px]:[&.actions-two]:[right:1.5rem] min-[960px]:[&.actions-two]:[bottom:calc(1.5rem_+_env(safe-area-inset-bottom))] min-[960px]:[&.actions-two]:[left:auto] min-[960px]:[&.actions-two]:[flex-direction:column] min-[960px]:[&.actions-two]:[padding:0] min-[960px]:[&.actions-two]:[background:transparent] min-[960px]:[&.actions-two]:[box-shadow:none] min-[960px]:[&.actions-two_.action-round]:[width:3.25rem] min-[960px]:[&.actions-two_.action-round]:[height:3.25rem] min-[960px]:[&.actions-two_.action-round]:[border-radius:50%] min-[960px]:[&.actions-two_.action-round]:[box-shadow:0_5px_24px_rgba(0,_0,_0,_0.18)] min-[960px]:[&.actions-two_.action-round_span]:[display:none]"
      aria-label={content.ui.contactHeading}
    >
      {content.contact.phone ? (
        <a
          className="action-round [&.action-round]:[display:grid] [&.action-round]:[width:3.25rem] [&.action-round]:[height:3.25rem] [&.action-round]:[place-items:center] [&.action-round]:[border:0] [&.action-round]:[border-radius:50%] [&.action-round]:[background:var(--theme-surface)] [&.action-round]:[box-shadow:0_5px_24px_rgba(0,_0,_0,_0.18)] [&.action-round]:[color:var(--theme-foreground)] [&.action-round]:[font-size:1.1rem] [&.action-round]:[font-weight:700] [&.action-round]:[cursor:pointer] [&.action-round_span]:[font-size:0.85rem] [&.action-round_span]:[font-size:0.875rem]"
          href={`tel:${content.contact.phone}`}
          aria-label={content.ui.call}
        >
          ☎<span>{content.ui.call}</span>
        </a>
      ) : null}
      {content.contact.whatsapp ? (
        <a
          className="action-round action-whatsapp [&.action-round]:[display:grid] [&.action-round]:[width:3.25rem] [&.action-round]:[height:3.25rem] [&.action-round]:[place-items:center] [&.action-round]:[border:0] [&.action-round]:[border-radius:50%] [&.action-round]:[background:var(--theme-surface)] [&.action-round]:[box-shadow:0_5px_24px_rgba(0,_0,_0,_0.18)] [&.action-round]:[color:var(--theme-foreground)] [&.action-round]:[font-size:1.1rem] [&.action-round]:[font-weight:700] [&.action-round]:[cursor:pointer] [&.action-round_span]:[font-size:0.85rem] [&.action-round_span]:[font-size:0.875rem] [&.action-whatsapp]:[background:var(--theme-primary)] [&.action-whatsapp]:[color:var(--theme-primary-foreground)]"
          href={buildWhatsAppUrl(content.contact.whatsappGreeting)}
          target="_blank"
          rel="noreferrer"
        >
          ✉<span>{content.ui.bookWhatsApp}</span>
        </a>
      ) : null}
    </div>
  );
}
