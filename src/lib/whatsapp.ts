import { content } from "@/data/content";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${content.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
