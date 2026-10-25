import { siteConfig } from "@/config/site.config";
import Gallery1 from "./Gallery1";
import Gallery2 from "./Gallery2";
import Gallery3 from "./Gallery3";

const variants = { 1: Gallery1, 2: Gallery2, 3: Gallery3 } as const;
export default function Gallery({ compact = false }: { compact?: boolean }) {
  const V = variants[siteConfig.layout.gallery] ?? Gallery1;
  return <V compact={compact} />;
}
