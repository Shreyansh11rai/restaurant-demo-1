import type { ReactNode } from "react";
import {
  Cormorant_Garamond,
  DM_Sans,
  Fraunces,
  Inter,
  Poppins,
} from "next/font/google";
import { content } from "@/data/content";
import { siteConfig } from "@/config/site.config";
import { themes } from "@/lib/themes";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import Actions from "@/components/sections/actions";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const themeStyle = Object.entries(themes[siteConfig.theme])
  .map(([key, value]) => `${key}:${value}`)
  .join(";");

export const metadata = {
  metadataBase: new URL(content.seo.siteUrl),
  title: content.seo.pages.home.title,
  description: content.seo.pages.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${fraunces.variable} ${dmSans.variable} ${poppins.variable} theme-${siteConfig.theme}`}
    >
      <head>
        <style>{`:root{${themeStyle}}`}</style>
      </head>
      <body>
        <a
          className="skip-link fixed z-50 top-2 left-2  bg-surface p-3 focus:translate-y-0 -translate-y-full"
          href="#main-content"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <Actions />
      </body>
    </html>
  );
}
