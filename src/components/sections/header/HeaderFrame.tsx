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
    <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
  ));
  const split = Math.ceil(links.length / 2);
  const className = `site-header header-${variant}${scrolled ? " is-scrolled" : ""}`;

  return (
    <>
      <header className={`${className} [&.site-header]:[position:sticky] [&.site-header]:[z-index:30] [&.site-header]:[top:0] [&.site-header]:[border-bottom:1px_solid_var(--theme-border)] [&.site-header]:[background:var(--theme-surface)] [&.site-header]:[color:var(--theme-foreground)] [&.site-header]:[box-shadow:0_6px_24px_rgba(0,_0,_0,_0.06)] min-[960px]:[&.site-header]:[min-height:5.25rem] [&.header-inner]:[width:min(100%_-_2rem,_1280px)] [&.header-inner]:[min-height:4.5rem] [&.header-inner]:[margin:0_auto] [&.header-inner]:[display:flex] [&.header-inner]:[align-items:center] [&.header-inner]:[justify-content:space-between] [&.header-inner]:[gap:1rem] min-[960px]:[&.header-inner]:[min-height:5.25rem] [&.header-2]:[inset:0_0_auto] [&.header-2]:[background:var(--theme-canvas)] [&.header-2]:[border-color:transparent] [&.header-2]:[color:var(--theme-foreground)] [&.header-2.is-scrolled]:[position:fixed] [&.header-2.is-scrolled]:[inset:0_0_auto] [&.header-2.is-scrolled]:[background:var(--theme-surface)] [&.header-2.is-scrolled]:[border-color:var(--theme-border)] [&.header-2.is-scrolled]:[color:var(--theme-foreground)] [&.header-2_.header-inner]:[display:flex] [&.header-2.is-scrolled_.centered-brand_small]:[color:var(--theme-muted)] min-[960px]:[&.header-2_.header-inner]:[display:none] min-[960px]:[&.header-2_.header-split]:[display:flex] [&.header-split]:[display:none] [&.header-split]:[width:min(100%_-_2rem,_1280px)] [&.header-split]:[min-height:5.5rem] [&.header-split]:[margin:auto] [&.header-split]:[align-items:center] [&.header-split]:[justify-content:space-between] [&.header-split_>_div]:[display:flex] [&.header-split_>_div]:[align-items:center] [&.header-split_>_div]:[gap:clamp(0.7rem,_2vw,_2rem)] [&.header-split_>_div_a]:[font-size:0.875rem] [&.header-3_.header-spacer]:[flex:1] min-[960px]:[&.header-book]:[min-height:2.6rem] min-[960px]:[&.header-book]:[padding:0.55rem_0.9rem]`}>
        <div className="header-inner [&.header-inner]:[width:min(100%_-_2rem,_1280px)] [&.header-inner]:[min-height:4.5rem] [&.header-inner]:[margin:0_auto] [&.header-inner]:[display:flex] [&.header-inner]:[align-items:center] [&.header-inner]:[justify-content:space-between] [&.header-inner]:[gap:1rem] min-[960px]:[&.header-inner]:[min-height:5.25rem]">
          <Link className="brand-lockup [&.brand-lockup]:[display:flex] [&.brand-lockup]:[align-items:center] [&.brand-lockup]:[gap:0.7rem] [&.brand-lockup]:[font-family:var(--font-display)] [&.brand-lockup]:[font-size:1.25rem] [&.brand-lockup]:[font-weight:700] [&.brand-lockup]:[line-height:1.05] [&.brand-lockup_img]:[width:2.65rem] [&.brand-lockup_img]:[height:2.65rem] [&.brand-lockup_small]:[display:block] [&.brand-lockup_small]:[margin-top:0.25rem] [&.brand-lockup_small]:[color:var(--theme-muted)] [&.brand-lockup_small]:[font-family:var(--font-body)] [&.brand-lockup_small]:[font-size:0.875rem] [&.brand-lockup_small]:[font-weight:500] [&.brand-lockup_small]:[letter-spacing:0.04em]" href="/" aria-label={content.brand.name}>
            <Image src={withBase(content.brand.logo)} alt="" width={42} height={42} unoptimized />
            <span>{content.brand.name}<small>{content.brand.tagline}</small></span>
          </Link>
          {variant !== 3 ? <nav className="desktop-nav [&.desktop-nav]:[display:none] min-[960px]:[&.desktop-nav]:[display:flex] min-[960px]:[&.desktop-nav]:[align-items:center] min-[960px]:[&.desktop-nav]:[gap:clamp(1rem,_2vw,_2rem)]" aria-label={content.ui.navigation}>
            {links}
            <a className="button header-book [&.button]:[display:inline-flex] [&.button]:[min-height:3rem] [&.button]:[align-items:center] [&.button]:[justify-content:center] [&.button]:[gap:0.5rem] [&.button]:[border:1px_solid_var(--theme-primary)] [&.button]:[border-radius:var(--radius)] [&.button]:[padding:0.75rem_1.15rem] [&.button]:[background:var(--theme-primary)] [&.button]:[color:var(--theme-primary-foreground)] [&.button]:[font-size:0.9rem] [&.button]:[font-weight:700] [&.button]:[text-align:center] [&.button]:[transition:background-color_160ms_ease,_border-color_160ms_ease,_transform_160ms_ease] [&.button]:[cursor:pointer] [&.button:hover]:[border-color:var(--theme-primary-hover)] [&.button:hover]:[background:var(--theme-primary-hover)] [&.button:hover]:[transform:translateY(-1px)] [&.button]:[font-size:1rem] min-[960px]:[&.header-book]:[min-height:2.6rem] min-[960px]:[&.header-book]:[padding:0.55rem_0.9rem]" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">{content.ui.book}</a>
          </nav> : <span className="header-spacer" />}
          <button
            ref={menuButton}
            className={`menu-toggle${open ? " is-open" : ""} [&.menu-toggle]:[display:grid] [&.menu-toggle]:[width:2.8rem] [&.menu-toggle]:[height:2.8rem] [&.menu-toggle]:[place-content:center] [&.menu-toggle]:[gap:5px] [&.menu-toggle]:[border:1px_solid_var(--theme-border)] [&.menu-toggle]:[border-radius:var(--radius)] [&.menu-toggle]:[background:transparent] [&.menu-toggle]:[cursor:pointer] [&.menu-toggle_span]:[display:block] [&.menu-toggle_span]:[width:1.1rem] [&.menu-toggle_span]:[height:2px] [&.menu-toggle_span]:[background:currentColor] min-[960px]:[&.menu-toggle]:[display:none]`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? content.ui.closeMenu : content.ui.openMenu}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
        {variant === 2 && <nav className="desktop-nav header-split [&.desktop-nav]:[display:none] min-[960px]:[&.desktop-nav]:[display:flex] min-[960px]:[&.desktop-nav]:[align-items:center] min-[960px]:[&.desktop-nav]:[gap:clamp(1rem,_2vw,_2rem)] [&.header-split]:[display:none] [&.header-split]:[width:min(100%_-_2rem,_1280px)] [&.header-split]:[min-height:5.5rem] [&.header-split]:[margin:auto] [&.header-split]:[align-items:center] [&.header-split]:[justify-content:space-between] [&.header-split_>_div]:[display:flex] [&.header-split_>_div]:[align-items:center] [&.header-split_>_div]:[gap:clamp(0.7rem,_2vw,_2rem)] [&.header-split_>_div_a]:[font-size:0.875rem]" aria-label={content.ui.navigation}>
          <div>{links.slice(0, split)}</div>
          <Link className="brand-lockup centered-brand [&.brand-lockup]:[display:flex] [&.brand-lockup]:[align-items:center] [&.brand-lockup]:[gap:0.7rem] [&.brand-lockup]:[font-family:var(--font-display)] [&.brand-lockup]:[font-size:1.25rem] [&.brand-lockup]:[font-weight:700] [&.brand-lockup]:[line-height:1.05] [&.brand-lockup_img]:[width:2.65rem] [&.brand-lockup_img]:[height:2.65rem] [&.brand-lockup_small]:[display:block] [&.brand-lockup_small]:[margin-top:0.25rem] [&.brand-lockup_small]:[color:var(--theme-muted)] [&.brand-lockup_small]:[font-family:var(--font-body)] [&.brand-lockup_small]:[font-size:0.875rem] [&.brand-lockup_small]:[font-weight:500] [&.brand-lockup_small]:[letter-spacing:0.04em] [&.centered-brand]:[display:flex] [&.centered-brand]:[flex-direction:column] [&.centered-brand]:[gap:0.2rem] [&.centered-brand]:[font-size:1.5rem] [&.centered-brand]:[text-align:center] [&.centered-brand_small]:[font-family:var(--font-body)] [&.centered-brand_small]:[font-size:0.875rem] [&.centered-brand_small]:[font-weight:400]" href="/" aria-label={content.brand.name}>
            <span>{content.brand.name}</span><small>{content.brand.tagline}</small>
          </Link>
          <div>
            {links.slice(split)}
            <a className="button header-book [&.button]:[display:inline-flex] [&.button]:[min-height:3rem] [&.button]:[align-items:center] [&.button]:[justify-content:center] [&.button]:[gap:0.5rem] [&.button]:[border:1px_solid_var(--theme-primary)] [&.button]:[border-radius:var(--radius)] [&.button]:[padding:0.75rem_1.15rem] [&.button]:[background:var(--theme-primary)] [&.button]:[color:var(--theme-primary-foreground)] [&.button]:[font-size:0.9rem] [&.button]:[font-weight:700] [&.button]:[text-align:center] [&.button]:[transition:background-color_160ms_ease,_border-color_160ms_ease,_transform_160ms_ease] [&.button]:[cursor:pointer] [&.button:hover]:[border-color:var(--theme-primary-hover)] [&.button:hover]:[background:var(--theme-primary-hover)] [&.button:hover]:[transform:translateY(-1px)] [&.button]:[font-size:1rem] min-[960px]:[&.header-book]:[min-height:2.6rem] min-[960px]:[&.header-book]:[padding:0.55rem_0.9rem]" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">{content.ui.book}</a>
          </div>
        </nav>}
      </header>
      <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}${variant === 3 ? " mobile-menu-full" : ""} [&.mobile-menu]:[position:fixed] [&.mobile-menu]:[z-index:40] [&.mobile-menu]:[inset:4.5rem_0_auto] [&.mobile-menu]:[display:flex] [&.mobile-menu]:[max-height:calc(100dvh_-_4.5rem)] [&.mobile-menu]:[flex-direction:column] [&.mobile-menu]:[gap:1.5rem] [&.mobile-menu]:[overflow:auto] [&.mobile-menu]:[border-bottom:1px_solid_var(--theme-border)] [&.mobile-menu]:[padding:1.5rem] [&.mobile-menu]:[background:var(--theme-surface)] [&.mobile-menu]:[opacity:0] [&.mobile-menu]:[pointer-events:none] [&.mobile-menu]:[visibility:hidden] [&.mobile-menu]:[transform:translateY(-0.5rem)] [&.mobile-menu]:[transition:opacity_180ms_ease,_transform_180ms_ease,_visibility_180ms] [&.mobile-menu.is-open]:[opacity:1] [&.mobile-menu.is-open]:[pointer-events:auto] [&.mobile-menu.is-open]:[visibility:visible] [&.mobile-menu.is-open]:[transform:translateY(0)] [&.mobile-menu_nav]:[display:grid] [&.mobile-menu_nav]:[gap:0.25rem] [&.mobile-menu_nav_a]:[padding:0.75rem_0] [&.mobile-menu_nav_a]:[font-size:1rem] min-[960px]:[&.mobile-menu]:[display:none] [&.mobile-menu-full]:[inset:0] [&.mobile-menu-full]:[max-height:100dvh] [&.mobile-menu-full]:[justify-content:center] [&.mobile-menu-full]:[padding:3rem_2rem] [&.mobile-menu-full]:[background:var(--theme-canvas)] [&.mobile-menu-full_nav]:[text-align:center] [&.mobile-menu-full_nav_a]:[font-family:var(--font-display)] [&.mobile-menu-full_nav_a]:[font-size:clamp(2rem,_9vw,_4rem)] [&.mobile-menu-full_>_.button]:[align-self:center]`} aria-hidden={!open} inert={!open}>
        <button className="mobile-menu-close [&.mobile-menu-close]:[position:absolute] [&.mobile-menu-close]:[top:0.5rem] [&.mobile-menu-close]:[right:0.75rem] [&.mobile-menu-close]:[border:0] [&.mobile-menu-close]:[background:transparent] [&.mobile-menu-close]:[font-size:1.5rem] [&.mobile-menu-close]:[cursor:pointer]" ref={closeButton} type="button" aria-label={content.ui.closeMenu} onClick={() => setOpen(false)}>×</button>
        <nav aria-label={content.ui.navigation}>{links}</nav>
        <a className="button [&.button]:[display:inline-flex] [&.button]:[min-height:3rem] [&.button]:[align-items:center] [&.button]:[justify-content:center] [&.button]:[gap:0.5rem] [&.button]:[border:1px_solid_var(--theme-primary)] [&.button]:[border-radius:var(--radius)] [&.button]:[padding:0.75rem_1.15rem] [&.button]:[background:var(--theme-primary)] [&.button]:[color:var(--theme-primary-foreground)] [&.button]:[font-size:0.9rem] [&.button]:[font-weight:700] [&.button]:[text-align:center] [&.button]:[transition:background-color_160ms_ease,_border-color_160ms_ease,_transform_160ms_ease] [&.button]:[cursor:pointer] [&.button:hover]:[border-color:var(--theme-primary-hover)] [&.button:hover]:[background:var(--theme-primary-hover)] [&.button:hover]:[transform:translateY(-1px)] [&.button]:[font-size:1rem]" href={buildWhatsAppUrl(content.contact.whatsappGreeting)} target="_blank" rel="noreferrer">{content.ui.book}</a>
      </div>
    </>
  );
}
