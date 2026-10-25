import type { MetadataRoute } from "next";
import { content } from "@/data/content";
import { withBase } from "@/lib/withBase";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/menu/", "/gallery/", "/about/", "/contact/"];
  return paths.map((path) => ({
    url: new URL(withBase(path), `${content.seo.siteUrl.replace(/\/$/, "")}/`).toString(),
    lastModified: new Date(),
  }));
}
