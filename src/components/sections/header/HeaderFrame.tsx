"use client";

import Link from "next/link";
import Image from "next/image";
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
      if (open && event.key === "Escape") {
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
    onScroll();
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
    <Link className={`py-3 ${variant === 3 ? "font-display text-4xl md:text-6xl" : ""}`} key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
  ));
  const split = Math.ceil(links.length / 2);
  const className = `site-header sticky top-0 z-30 border-b border-border bg-surface text-foreground shadow-md lg:min-h-21 ${variant === 2 ? "inset-x-0 border-transparent bg-canvas" : ""} ${variant === 2 && scrolled ? "fixed border-border bg-surface" : ""}`;

  return (
    <>
      <header className={className}>
        <div className={`header-inner mx-auto flex min-h-18 w-page-header max-w-header items-center justify-between gap-4 lg:min-h-21 ${variant === 2 ? "lg:hidden" : ""}`}>
          <Link className="brand-lockup flex items-center gap-3 font-display text-2xl font-bold leading-tight" href="/" aria-label={content.brand.name}>
            <Image src={withBase(content.brand.logo)} alt="" width={42} height={42} unoptimized />
            <span className="flex flex-col">{content.brand.name}<small className="text-xs font-body font-normal text-muted">{content.brand.tagline}</small></span>
          </Link>
          {variant !== 3 ? <nav className="desktop-nav hidden items-center gap-8 lg:flex" aria-label={content.ui.navigation}>
            {links}
            <a className="button header-book inline-flex min-h-10 items-center justify-center gap-2 rounded-theme border border-primary bg-primary px-4 py-2 text-center text-base font-bold text-primary-foreground transition-colors hover:border-primary-hover hover:bg-primary-hover" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">{content.ui.book}</a>
          </nav> : <span className="header-spacer" />}
          <button
            ref={menuButton}
            className="grid size-11 place-content-center gap-1.5 rounded-theme border border-border bg-transparent lg:hidden"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? content.ui.closeMenu : content.ui.openMenu}
            onClick={() => setOpen(!open)}
          >
            <span className="block h-0.5 w-5 bg-current" /><span className="block h-0.5 w-5 bg-current" /><span className="block h-0.5 w-5 bg-current" />
          </button>
        </div>
        {variant === 2 && <nav className="desktop-nav header-split mx-auto hidden min-h-22 w-page-header max-w-header items-center justify-between lg:flex" aria-label={content.ui.navigation}>
          <div className="flex items-center gap-8">{links.slice(0, split)}</div>
          <Link className="brand-lockup centered-brand flex flex-col items-center gap-1 text-center font-display text-2xl font-bold leading-tight" href="/" aria-label={content.brand.name}>
            <span>{content.brand.name}</span><small>{content.brand.tagline}</small>
          </Link>
          <div className="flex items-center gap-8">
            {links.slice(split)}
            <a className="button header-book inline-flex min-h-10 items-center justify-center gap-2 rounded-theme border border-primary bg-primary px-4 py-2 text-center text-base font-bold text-primary-foreground transition-colors hover:border-primary-hover hover:bg-primary-hover" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">{content.ui.book}</a>
          </div>
        </nav>}
      </header>
      <div id="mobile-menu" className={`fixed inset-x-0 top-18 z-40 flex max-h-dvh flex-col gap-6 overflow-auto border-b border-border bg-surface p-6 transition-all lg:hidden ${open ? "visible translate-y-0 opacity-100 pointer-events-auto" : "invisible -translate-y-2 opacity-0 pointer-events-none"} ${variant === 3 ? "inset-0 justify-center bg-canvas px-8 py-12" : ""}`} aria-hidden={!open} inert={!open}>
        <button className="absolute right-3 top-2 border-0 bg-transparent text-2xl cursor-pointer" ref={closeButton} type="button" aria-label={content.ui.closeMenu} onClick={() => setOpen(false)}>×</button>
        <nav className="flex flex-col gap-2" aria-label={content.ui.navigation}>{links}</nav>
        <a className="button inline-flex min-h-12 items-center justify-center gap-2 rounded-theme border border-primary bg-primary px-5 py-3 text-center text-base font-bold text-primary-foreground transition-colors hover:border-primary-hover hover:bg-primary-hover" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">{content.ui.book}</a>
      </div>
    </>
  );
}
