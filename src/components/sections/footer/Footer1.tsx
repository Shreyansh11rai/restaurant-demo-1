import Link from "next/link";
import { content } from "@/data/content";
import Hours from "@/components/ui/Hours";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer1() {
  return <footer className="site-footer footer-one border-t border-border bg-surface"><div className="footer-columns mx-auto grid w-page max-w-site gap-8 py-14 md:grid-cols-2 md:gap-12 md:py-16 lg:grid-cols-3">
    <div><Link className="footer-brand font-display font-semibold leading-tight text-3xl" href="/">{content.brand.name}</Link><p>{content.brand.tagline}</p><SocialLinks /></div>
    <nav className="grid content-start gap-2" aria-label={content.ui.navigation}><h2 className="mb-2 font-body text-xs uppercase tracking-widest">{content.ui.navigation}</h2>{content.navigation.map((item) => <Link className="w-fit hover:text-primary" href={item.href} key={item.href}>{item.label}</Link>)}{content.footer.extraLinks.map((item) => <Link className="w-fit hover:text-primary" href={item.href} key={item.href}>{item.label}</Link>)}</nav>
    <Hours />
  </div><p className="copyright mx-auto w-page max-w-site border-t border-border py-4 text-sm text-muted">© {new Date().getFullYear()} {content.footer.copyright}. {content.ui.allRights}</p></footer>;
}
