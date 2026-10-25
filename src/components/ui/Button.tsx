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
  const classes = `button ${secondary ? "button-secondary" : ""} ${className}`.trim();
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (external) {
    return <a className={classes} href={href} target={target} rel={target ? "noreferrer" : undefined}>{children}</a>;
  }
  return <Link className={classes} href={href}>{children}</Link>;
}
