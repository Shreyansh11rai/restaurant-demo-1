import Link from "next/link";
import { content } from "@/data/content";
import Hours from "@/components/ui/Hours";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer1() {
  return <footer className="site-footer footer-one [&.site-footer]:[border-top:1px_solid_var(--theme-border)] [&.site-footer]:[background:var(--theme-surface)]"><div className="footer-columns [&.footer-columns]:[display:grid] [&.footer-columns]:[gap:2rem] [&.footer-columns]:[width:min(100%_-_2.5rem,_1180px)] [&.footer-columns]:[margin:auto] [&.footer-columns]:[padding:3.5rem_0_2rem] [&.footer-columns_>_div_>_p]:[color:var(--theme-muted)] [&.footer-columns_nav]:[display:grid] [&.footer-columns_nav]:[align-content:start] [&.footer-columns_nav]:[gap:0.6rem] [&.footer-columns_nav_h2]:[margin-bottom:0.4rem] [&.footer-columns_nav_h2]:[font-family:var(--font-body)] [&.footer-columns_nav_h2]:[font-size:0.8rem] [&.footer-columns_nav_h2]:[letter-spacing:0.1em] [&.footer-columns_nav_h2]:[text-transform:uppercase] [&.footer-columns_nav_h2]:[font-size:0.875rem] min-[700px]:[&.footer-columns]:[grid-template-columns:1.2fr_0.8fr_1fr] min-[700px]:[&.footer-columns]:[gap:3rem] min-[700px]:[&.footer-columns]:[padding:4rem_0_2.5rem]">
    <div><Link className="footer-brand [&.footer-brand]:[font-family:var(--font-display)] [&.footer-brand]:[font-weight:600] [&.footer-brand]:[line-height:1.08] [&.footer-brand]:[font-size:1.8rem]" href="/">{content.brand.name}</Link><p>{content.brand.tagline}</p><SocialLinks /></div>
    <nav aria-label={content.ui.navigation}><h2>{content.ui.navigation}</h2>{content.navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}{content.footer.extraLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
    <Hours />
  </div><p className="copyright [&.copyright]:[width:min(100%_-_2.5rem,_1180px)] [&.copyright]:[margin:0_auto] [&.copyright]:[border-top:1px_solid_var(--theme-border)] [&.copyright]:[padding:1rem_0] [&.copyright]:[color:var(--theme-muted)] [&.copyright]:[font-size:0.75rem] [&.copyright]:[font-size:0.875rem]">© {new Date().getFullYear()} {content.footer.copyright}. {content.ui.allRights}</p></footer>;
}
