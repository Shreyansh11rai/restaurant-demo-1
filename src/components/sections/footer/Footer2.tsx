import Link from "next/link";
import { content } from "@/data/content";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer2() {
  return <footer className="site-footer footer-two border-t border-border bg-surface px-5 pb-4 pt-14 text-center">
    <Link className="footer-brand font-display font-semibold leading-tight text-3xl" href="/">{content.brand.name}</Link>
    <p>{content.brand.tagline}</p>
    <nav className="mx-auto mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label={content.ui.navigation}>{content.navigation.map((item) => <Link className="hover:text-primary" href={item.href} key={item.href}>{item.label}</Link>)}</nav>
    <SocialLinks />
    <p className="copyright w-page max-w-site border-t border-border text-muted text-sm">© {new Date().getFullYear()} {content.footer.copyright}. {content.ui.allRights}</p>
  </footer>;
}
