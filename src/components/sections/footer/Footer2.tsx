import Link from "next/link";
import { content } from "@/data/content";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer2() {
  return <footer className="site-footer footer-two">
    <Link className="footer-brand" href="/">{content.brand.name}</Link>
    <p>{content.brand.tagline}</p>
    <nav aria-label={content.ui.navigation}>{content.navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
    <SocialLinks />
    <p className="copyright">© {new Date().getFullYear()} {content.footer.copyright}. {content.ui.allRights}</p>
  </footer>;
}
