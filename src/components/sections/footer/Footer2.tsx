import Link from "next/link";
import { content } from "@/data/content";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer2() {
  return <footer className="site-footer footer-two [&.site-footer]:[border-top:1px_solid_var(--theme-border)] [&.site-footer]:[background:var(--theme-surface)] [&.footer-two_>_p]:[color:var(--theme-muted)] [&.footer-two]:[padding:3.5rem_1.25rem_1rem] [&.footer-two]:[text-align:center] [&.footer-two_.social-links]:[justify-content:center] [&.footer-two_nav]:[justify-content:center] [&.footer-two_nav]:[display:flex] [&.footer-two_nav]:[flex-wrap:wrap] [&.footer-two_nav]:[gap:1rem] [&.footer-two_nav]:[margin:1.4rem_0] [&.footer-two_.copyright]:[margin-top:2.5rem] [&.footer-two_.copyright]:[text-align:left]">
    <Link className="footer-brand [&.footer-brand]:[font-family:var(--font-display)] [&.footer-brand]:[font-weight:600] [&.footer-brand]:[line-height:1.08] [&.footer-brand]:[font-size:1.8rem]" href="/">{content.brand.name}</Link>
    <p>{content.brand.tagline}</p>
    <nav aria-label={content.ui.navigation}>{content.navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
    <SocialLinks />
    <p className="copyright [&.copyright]:[width:min(100%_-_2.5rem,_1180px)] [&.copyright]:[margin:0_auto] [&.copyright]:[border-top:1px_solid_var(--theme-border)] [&.copyright]:[padding:1rem_0] [&.copyright]:[color:var(--theme-muted)] [&.copyright]:[font-size:0.75rem] [&.copyright]:[font-size:0.875rem]">© {new Date().getFullYear()} {content.footer.copyright}. {content.ui.allRights}</p>
  </footer>;
}
