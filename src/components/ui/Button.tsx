import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
  target?: "_blank";
};

export function Button({
  href,
  children,
  secondary = false,
  className = "",
  target,
}: ButtonProps) {
  const classes =
    `button inline-flex min-h-12 items-center justify-center gap-2 border border-primary rounded-theme px-5 py-3 bg-primary text-base font-bold text-center transition-all cursor-pointer hover:border-primary-hover hover:bg-primary-hover hover:-translate-y-0.5 ${secondary && "border-border bg-transparent text-primary hover:border-primary hover:bg-surface"} ${className}`.trim();
  const external =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");
  if (external) {
    return (
      <a
        className={classes}
        href={href}
        target={target}
        rel={target ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
