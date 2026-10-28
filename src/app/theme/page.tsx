import type { CSSProperties } from "react";
import { themes } from "@/lib/themes";

const colorTokens = [
  "--theme-canvas",
  "--theme-surface",
  "--theme-surface-muted",
  "--theme-foreground",
  "--theme-muted",
  "--theme-border",
  "--theme-primary",
  "--theme-primary-hover",
  "--theme-primary-foreground",
  "--theme-accent",
  "--theme-overlay",
  "--theme-overlay-foreground",
] as const;

export const metadata = {
  robots: { index: false, follow: false },
};

export default function ThemePage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-intro w-page max-w-site m-auto pt-20 md:w-page-wide md:max-w-site">
        <p className="eyebrow mb-3 text-primary text-sm font-bold uppercase">
          Design reference
        </p>
        <h1>Theme colors</h1>
        <p className="max-w-wide-copy text-muted">
          Color tokens for each available site theme.
        </p>
      </header>
      <div className="mx-auto grid w-page max-w-site gap-12 py-12 md:w-page-wide md:py-20">
        {Object.entries(themes).map(([name, palette]) => (
          <section aria-labelledby={`theme-${name}`} key={name}>
            <h2 id={`theme-${name}`} className="mb-6 capitalize">
              {name}
            </h2>
            <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {colorTokens.map((token) => {
                const color = palette[token];
                return (
                  <li
                    className="grid grid-cols-[3.5rem_1fr] items-center gap-3 border border-border bg-surface p-3"
                    key={token}
                  >
                    <span
                      aria-hidden="true"
                      className="size-14 border border-border"
                      style={{ backgroundColor: color } as CSSProperties}
                    />
                    <span className="min-w-0">
                      <span className="block break-all text-sm font-semibold">
                        {token}
                      </span>
                      <code className="text-sm text-muted">{color}</code>
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}