"use client";

import { FormEvent } from "react";
import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import Hours from "@/components/ui/Hours";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactInfo({ showActions = true }: { showActions?: boolean }) {
  return <div className="contact-info [&.contact-info]:[border:1px_solid_var(--theme-border)] [&.contact-info]:[border-radius:var(--radius)] [&.contact-info]:[padding:1.4rem] [&.contact-info]:[background:var(--theme-surface)] [&.contact-info_h2]:[font-size:2rem] [&.contact-info_>_p]:[color:var(--theme-muted)] [&.contact-info]:[box-shadow:0_8px_28px_rgba(0,_0,_0,_0.045)]">
    <h2>{content.ui.contactHeading}</h2>
    <p>{content.contact.address}<br />{content.contact.city}</p>
    {content.contact.email ? <p><a href={`mailto:${content.contact.email}`}>{content.contact.email}</a></p> : null}
    <Hours />
    {showActions ? <div className="contact-actions [&.contact-actions]:[display:flex] [&.contact-actions]:[flex-wrap:wrap] [&.contact-actions]:[gap:0.55rem] [&.contact-actions]:[margin-top:1.5rem]">
      {content.contact.phone ? <Button href={`tel:${content.contact.phone}`}>{content.ui.call}</Button> : null}
      {content.contact.whatsapp ? <Button href={buildWhatsAppUrl(content.contact.whatsappGreeting)} secondary target="_blank">{content.ui.bookWhatsApp}</Button> : null}
      {content.contact.mapLink ? <Button href={content.contact.mapLink} secondary target="_blank">{content.ui.directions}</Button> : null}
    </div> : null}
  </div>;
}

export function MapEmbed() {
  if (!content.contact.mapEmbedUrl) return null;
  return <iframe className="contact-map [&.contact-map]:[display:block] [&.contact-map]:[width:100%] [&.contact-map]:[min-height:20rem] [&.contact-map]:[border:0] [&.contact-map]:[background:var(--theme-surface-muted)] min-[700px]:[&.contact-map]:[min-height:100%]" src={content.contact.mapEmbedUrl} loading="lazy" title={content.ui.mapTitle} referrerPolicy="no-referrer-when-downgrade" />;
}

export function ReservationForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const [name, date, time, guests] = ["name", "date", "time", "guests"].map((key) => String(form.get(key) ?? ""));
    const note = String(form.get("note") ?? "");
    const message = [
      `${content.ui.reserve}:`,
      `${content.ui.name}: ${name}`,
      `${content.ui.date}: ${date}`,
      `${content.ui.time}: ${time}`,
      `${content.ui.guests}: ${guests}`,
      note ? `${content.ui.note}: ${note}` : "",
    ].filter(Boolean).join("\n");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return <form className="reservation-form [&.reservation-form]:[border:1px_solid_var(--theme-border)] [&.reservation-form]:[border-radius:var(--radius)] [&.reservation-form]:[padding:1.4rem] [&.reservation-form]:[background:var(--theme-surface)] [&.reservation-form_h2]:[font-size:2rem] [&.reservation-form_>_p]:[color:var(--theme-muted)] [&.reservation-form]:[display:grid] [&.reservation-form]:[gap:0.95rem] [&.reservation-form]:[margin:1.5rem_auto_0] [&.reservation-form_h2]:[margin-bottom:0] [&.reservation-form_>_p]:[margin-bottom:0] [&.reservation-form_label]:[display:grid] [&.reservation-form_label]:[gap:0.35rem] [&.reservation-form_label]:[color:var(--theme-muted)] [&.reservation-form_label]:[font-size:0.82rem] [&.reservation-form_label]:[font-weight:600] [&.reservation-form_input]:[width:100%] [&.reservation-form_input]:[min-height:2.9rem] [&.reservation-form_input]:[border:1px_solid_var(--theme-border)] [&.reservation-form_input]:[border-radius:calc(var(--radius)_/_2)] [&.reservation-form_input]:[padding:0.7rem] [&.reservation-form_input]:[background:var(--theme-canvas)] [&.reservation-form_input]:[color:var(--theme-foreground)] [&.reservation-form_textarea]:[width:100%] [&.reservation-form_textarea]:[min-height:2.9rem] [&.reservation-form_textarea]:[border:1px_solid_var(--theme-border)] [&.reservation-form_textarea]:[border-radius:calc(var(--radius)_/_2)] [&.reservation-form_textarea]:[padding:0.7rem] [&.reservation-form_textarea]:[background:var(--theme-canvas)] [&.reservation-form_textarea]:[color:var(--theme-foreground)] [&.reservation-form_textarea]:[resize:vertical] [&.reservation-form_label]:[font-size:0.875rem] [&.reservation-form]:[box-shadow:0_8px_28px_rgba(0,_0,_0,_0.045)] [&.reservation-form_input]:[font-size:1rem] [&.reservation-form_textarea]:[font-size:1rem] [&.reservation-form_select]:[font-size:1rem] min-[700px]:[&.reservation-form]:[max-width:740px] min-[700px]:[&.reservation-form]:[padding:2rem]" onSubmit={submit}>
    <h2>{content.ui.reserve}</h2>
    <p>{content.ui.reservationIntro}</p>
    <label>{content.ui.name}<input name="name" autoComplete="name" required /></label>
    <div className="form-row [&.form-row]:[display:grid] [&.form-row]:[gap:0.95rem] min-[700px]:[&.form-row]:[grid-template-columns:1fr_1fr]">
      <label>{content.ui.date}<input name="date" type="date" required /></label>
      <label>{content.ui.time}<input name="time" type="time" required /></label>
    </div>
    <label>{content.ui.guests}<input name="guests" type="number" min="1" max="20" required /></label>
    <label>{content.ui.note}<textarea name="note" rows={3} /></label>
    <button className="button [&.button]:[display:inline-flex] [&.button]:[min-height:3rem] [&.button]:[align-items:center] [&.button]:[justify-content:center] [&.button]:[gap:0.5rem] [&.button]:[border:1px_solid_var(--theme-primary)] [&.button]:[border-radius:var(--radius)] [&.button]:[padding:0.75rem_1.15rem] [&.button]:[background:var(--theme-primary)] [&.button]:[color:var(--theme-primary-foreground)] [&.button]:[font-size:0.9rem] [&.button]:[font-weight:700] [&.button]:[text-align:center] [&.button]:[transition:background-color_160ms_ease,_border-color_160ms_ease,_transform_160ms_ease] [&.button]:[cursor:pointer] [&.button:hover]:[border-color:var(--theme-primary-hover)] [&.button:hover]:[background:var(--theme-primary-hover)] [&.button:hover]:[transform:translateY(-1px)] [&.button]:[font-size:1rem]" type="submit">{content.ui.sendReservation}</button>
  </form>;
}
