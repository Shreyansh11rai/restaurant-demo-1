"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { content } from "@/data/content";
import { withBase } from "@/lib/withBase";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type HeaderFrameProps = { variant: 1 | 2 | 3 };

export default function HeaderFrame({ variant }: HeaderFrameProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
      if (open && event.key === "Tab") {
        const focusable = document.querySelectorAll<HTMLElement>(".mobile-menu a, .mobile-menu button");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (open) closeButton.current?.focus();
  }, [open]);

  const links = content.navigation.map((item) => (
    <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
  ));
  const split = Math.ceil(links.length / 2);
  const className = `site-header header-${variant}${scrolled ? " is-scrolled" : ""}`;

  return (
    <>
      <header className={className}>
        {variant === 2 ? <nav className="desktop-nav header-split" aria-label={content.ui.navigation}>
          <div>{links.slice(0, split)}</div>
          <Link className="brand-lockup centered-brand" href="/" aria-label={content.brand.name}>
            <span>{content.brand.name}</span><small>{content.brand.tagline}</small>
          </Link>
          <div>{links.slice(split)}</div>
        </nav> : <div className="header-inner">
          <Link className="brand-lockup" href="/" aria-label={content.brand.name}>
            <img src={withBase(content.brand.logo)} alt="" width="42" height="42" />
            <span>{content.brand.name}<small>{content.brand.tagline}</small></span>
          </Link>
          {variant !== 3 ? <nav className="desktop-nav" aria-label={content.ui.navigation}>
            {links}
            <a className="button header-book" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">{content.ui.book}</a>
          </nav> : <span className="header-spacer" />}
          <button
            ref={menuButton}
            className={`menu-toggle${open ? " is-open" : ""}`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? content.ui.closeMenu : content.ui.openMenu}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>}
      </header>
      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}${variant === 3 ? " mobile-menu-full" : ""}`} aria-hidden={!open}>
        <button className="mobile-menu-close" ref={closeButton} type="button" aria-label={content.ui.closeMenu} onClick={() => setOpen(false)}>×</button>
        <nav aria-label={content.ui.navigation}>{links}</nav>
        <a className="button" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">{content.ui.book}</a>
      </div>
    </>
  );
}
