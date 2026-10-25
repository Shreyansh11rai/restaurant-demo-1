import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
  target?: "_blank";
};

export function Button({ href, children, secondary = false, className = "", target }: ButtonProps) {
  const classes = `button inline-flex min-h-12 items-center justify-center gap-2 border border-solid border-[var(--theme-primary)] rounded-[var(--radius)] px-[1.15rem] py-3 bg-[var(--theme-primary)] text-[var(--theme-primary-foreground)] text-base font-bold text-center transition-[background-color,border-color,transform] duration-[160ms] ease-[ease] cursor-pointer hover:border-[var(--theme-primary-hover)] hover:bg-[var(--theme-primary-hover)] hover:-translate-y-px ${secondary ? "button-secondary border-[var(--theme-border)] bg-transparent text-[var(--theme-foreground)] hover:border-[var(--theme-primary)] hover:bg-[var(--theme-surface)]" : ""} ${className}`.trim();
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (external) {
    return <a className={classes} href={href} target={target} rel={target ? "noreferrer" : undefined}>{children}</a>;
  }
  return <Link className={classes} href={href}>{children}</Link>;
}
