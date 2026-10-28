import Link from "next/link";
import { content } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer3() {
  return <footer className="site-footer footer-three border-t border-border bg-surface">
    <div className="footer-cta flex flex-col gap-4 bg-primary px-5 py-12 text-primary-foreground md:flex-row md:items-center md:justify-between md:px-10 md:py-16"><div><p className="eyebrow mb-3 text-sm font-bold tracking-widest text-primary-foreground/80 uppercase">{content.brand.tagline}</p><h2 className="mb-0">{content.ui.book}</h2></div>
      <a className="button inline-flex min-h-12 items-center justify-center gap-2 rounded-theme border border-primary-foreground bg-surface px-5 py-3 text-center text-base font-bold text-foreground transition-colors hover:bg-surface-muted" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">{content.ui.bookWhatsApp}</a>
    </div>
    <div className="footer-compact mx-auto grid w-page max-w-site gap-2 py-6 md:grid-cols-2 md:items-center"><Link className="footer-brand font-display text-3xl font-semibold leading-tight" href="/">{content.brand.name}</Link><SocialLinks />
      <p className="copyright w-full border-t border-border pt-4 text-sm text-muted">© {new Date().getFullYear()} {content.footer.copyright}. {content.ui.allRights}</p>
    </div>
  </footer>;
}
