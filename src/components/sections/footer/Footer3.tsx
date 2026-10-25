import Link from "next/link";
import { content } from "@/data/content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer3() {
  return <footer className="site-footer footer-three">
    <div className="footer-cta"><div><p className="eyebrow">{content.brand.tagline}</p><h2>{content.ui.book}</h2></div>
      <a className="button" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">{content.ui.bookWhatsApp}</a>
    </div>
    <div className="footer-compact"><Link className="footer-brand" href="/">{content.brand.name}</Link><SocialLinks />
      <p className="copyright">© {new Date().getFullYear()} {content.footer.copyright}. {content.ui.allRights}</p>
    </div>
  </footer>;
}
