"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Actions3() {
  const [open, setOpen] = useState(false);
  return <div className={`floating-actions actions-three${open ? " actions-expanded" : ""}`}>
    {open ? <>
      {content.contact.phone ? <a className="action-round" href={`tel:${content.contact.phone}`} aria-label={content.ui.call}>☎</a> : null}
      {content.contact.whatsapp ? <a className="action-round action-whatsapp" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer" aria-label={content.ui.bookWhatsApp}>✉</a> : null}
    </> : null}
    <button className="action-round action-trigger" type="button" aria-expanded={open} aria-label={open ? content.ui.close : content.ui.book} onClick={() => setOpen(!open)}>{open ? "×" : "+"}</button>
  </div>;
}
