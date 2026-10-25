import { siteConfig } from "@/config/site.config";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";

const variants = { 1: Hero1, 2: Hero2, 3: Hero3 } as const;
export default function Hero() {
  const V = variants[siteConfig.layout.hero] ?? Hero1;
  return <V />;
}
