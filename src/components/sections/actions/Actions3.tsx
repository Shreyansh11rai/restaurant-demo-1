"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Actions3() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="floating-actions actions-three fixed bottom-action-safe right-4 z-25 flex flex-col gap-2"
    >
      {open ? (
        <>
          {content.contact.phone ? (
            <a
              className="action-round grid w-13 h-13 place-items-center border-0 rounded-full bg-surface shadow-lg text-foreground text-lg font-bold cursor-pointer"
              href={`tel:${content.contact.phone}`}
              aria-label={content.ui.call}
            >
              ☎
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
              ✉
            </a>
          ) : null}
        </>
      ) : null}
      <button
        className="action-round action-trigger grid w-13 h-13 place-items-center border-0 rounded-full bg-surface shadow-lg text-foreground text-lg font-bold cursor-pointer bg-primary text-primary-foreground text-2xl"
        type="button"
        aria-expanded={open}
        aria-label={open ? content.ui.close : content.ui.book}
        onClick={() => setOpen(!open)}
      >
        {open ? "×" : "+"}
      </button>
    </div>
  );
}
