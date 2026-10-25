import { siteConfig } from "@/config/site.config";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";

const variants = { 1: About1, 2: About2, 3: About3 } as const;
export default function About({ compact = false }: { compact?: boolean }) {
  const V = variants[siteConfig.layout.about] ?? About1;
  return <V compact={compact} />;
}
