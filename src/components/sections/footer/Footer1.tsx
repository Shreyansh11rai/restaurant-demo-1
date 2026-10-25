import Link from "next/link";
import { content } from "@/data/content";
import Hours from "@/components/ui/Hours";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer1() {
  return <footer className="site-footer footer-one"><div className="footer-columns">
    <div><Link className="footer-brand" href="/">{content.brand.name}</Link><p>{content.brand.tagline}</p><SocialLinks /></div>
    <nav aria-label={content.ui.navigation}><h2>{content.ui.navigation}</h2>{content.navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}{content.footer.extraLinks.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
    <Hours />
  </div><p className="copyright">© {new Date().getFullYear()} {content.footer.copyright}. {content.ui.allRights}</p></footer>;
}
