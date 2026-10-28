"use client";

import { FormEvent } from "react";
import { content } from "@/data/content";
import { Button } from "@/components/ui/Button";
import Hours from "@/components/ui/Hours";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MdEmail } from "react-icons/md";

export function ContactInfo({ showActions = true }: { showActions?: boolean }) {
  return (
    <div className="contact-info rounded-theme border border-border bg-surface p-6 shadow-lg">
      <h2 className="mb-4">{content.ui.contactHeading}</h2>
      <p className="text-muted">
        {content.contact.address}
        <br />
        {content.contact.city}
      </p>
      {content.contact.email ? (
        <p className="mt-1">
          <a href={`mailto:${content.contact.email}`} className="gap-1">
            <MdEmail className="mt-1" />
            {content.contact.email}
          </a>
        </p>
      ) : null}
      <Hours />
      {showActions ? (
        <div className="contact-actions flex flex-wrap gap-2 mt-6">
          {content.contact.phone ? (
            <Button href={`tel:${content.contact.phone}`}>
              {content.ui.call}
            </Button>
          ) : null}
          {content.contact.whatsapp ? (
            <Button
              href={buildWhatsAppUrl(content.contact.whatsappGreeting)}
              secondary
              target="_blank"
            >
              {content.ui.bookWhatsApp}
            </Button>
          ) : null}
          {content.contact.mapLink ? (
            <Button href={content.contact.mapLink} secondary target="_blank">
              {content.ui.directions}
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function MapEmbed() {
  if (!content.contact.mapEmbedUrl) return null;
  return (
    <iframe
      className="contact-map block w-full min-h-80 border-0 bg-surface-muted md:min-h-full"
      src={content.contact.mapEmbedUrl}
      loading="lazy"
      title={content.ui.mapTitle}
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export function ReservationForm({ className }: { className?: string }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const [name, date, time, guests] = ["name", "date", "time", "guests"].map(
      (key) => String(form.get(key) ?? ""),
    );
    const note = String(form.get("note") ?? "");
    const message = [
      `${content.ui.reserve}:`,
      `${content.ui.name}: ${name}`,
      `${content.ui.date}: ${date}`,
      `${content.ui.time}: ${time}`,
      `${content.ui.guests}: ${guests}`,
      note ? `${content.ui.note}: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      className={`reservation-form grid gap-4 rounded-theme border border-border bg-surface p-6 shadow-lg md:max-w-form mx-auto md:p-8 ${className}`}
      onSubmit={submit}
    >
      <h2 className="mb-0">{content.ui.reserve}</h2>
      <p className="text-muted">{content.ui.reservationIntro}</p>
      <label className="grid gap-2 text-sm font-bold">
        {content.ui.name}
        <input
          className="min-h-12 w-full rounded-theme border border-border bg-canvas px-3 py-2 text-base font-normal text-foreground"
          name="name"
          autoComplete="name"
          required
        />
      </label>
      <div className="form-row grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold">
          {content.ui.date}
          <input
            className="min-h-12 w-full rounded-theme border border-border bg-canvas px-3 py-2 text-base font-normal text-foreground"
            name="date"
            type="date"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-bold">
          {content.ui.time}
          <input
            className="min-h-12 w-full rounded-theme border border-border bg-canvas px-3 py-2 text-base font-normal text-foreground"
            name="time"
            type="time"
            required
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold">
        {content.ui.guests}
        <input
          className="min-h-12 w-full rounded-theme border border-border bg-canvas px-3 py-2 text-base font-normal text-foreground"
          name="guests"
          type="number"
          min="1"
          max="20"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-bold">
        {content.ui.note}
        <textarea
          className="w-full rounded-theme border border-border bg-canvas px-3 py-2 text-base font-normal text-foreground"
          name="note"
          rows={3}
        />
      </label>
      <button
        className="button inline-flex min-h-12 items-center justify-center gap-2 rounded-theme border border-primary bg-primary px-5 py-3 text-center text-base font-bold text-primary-foreground transition-colors hover:border-primary-hover hover:bg-primary-hover"
        type="submit"
      >
        {content.ui.sendReservation}
      </button>
    </form>
  );
}
