"use client";

import { FormEvent } from "react";
import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import Hours from "@/components/ui/Hours";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactInfo({ showActions = true }: { showActions?: boolean }) {
  return <div className="contact-info">
    <h2>{content.ui.contactHeading}</h2>
    <p>{content.contact.address}<br />{content.contact.city}</p>
    {content.contact.email ? <p><a href={`mailto:${content.contact.email}`}>{content.contact.email}</a></p> : null}
    <Hours />
    {showActions ? <div className="contact-actions">
      {content.contact.phone ? <Button href={`tel:${content.contact.phone}`}>{content.ui.call}</Button> : null}
      {content.contact.whatsapp ? <Button href={buildWhatsAppUrl(content.contact.whatsappGreeting)} secondary target="_blank">{content.ui.bookWhatsApp}</Button> : null}
      {content.contact.mapLink ? <Button href={content.contact.mapLink} secondary target="_blank">{content.ui.directions}</Button> : null}
    </div> : null}
  </div>;
}

export function MapEmbed() {
  if (!content.contact.mapEmbedUrl) return null;
  return <iframe className="contact-map" src={content.contact.mapEmbedUrl} loading="lazy" title={content.ui.mapTitle} referrerPolicy="no-referrer-when-downgrade" />;
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

  return <form className="reservation-form" onSubmit={submit}>
    <h2>{content.ui.reserve}</h2>
    <p>{content.ui.reservationIntro}</p>
    <label>{content.ui.name}<input name="name" autoComplete="name" required /></label>
    <div className="form-row">
      <label>{content.ui.date}<input name="date" type="date" required /></label>
      <label>{content.ui.time}<input name="time" type="time" required /></label>
    </div>
    <label>{content.ui.guests}<input name="guests" type="number" min="1" max="20" required /></label>
    <label>{content.ui.note}<textarea name="note" rows={3} /></label>
    <button className="button" type="submit">{content.ui.sendReservation}</button>
  </form>;
}
