import type { Metadata } from "next";
import { content } from "@/data/content";
import { withBase } from "@/lib/withBase";

type PageKey = keyof typeof content.seo.pages;

export function createPageMetadata(page: PageKey, path: string): Metadata {
  const { title, description } = content.seo.pages[page];
  const canonical = new URL(withBase(path), `${content.seo.siteUrl.replace(/\/$/, "")}/`).toString();
  const image = new URL(withBase(content.seo.ogImage), `${content.seo.siteUrl.replace(/\/$/, "")}/`).toString();
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: content.brand.name,
      images: [{ url: image, alt: content.brand.name }],
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
