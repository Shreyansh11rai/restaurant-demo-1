import { siteConfig } from "@/config/site.config";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";

const variants = { 1: Footer1, 2: Footer2, 3: Footer3 } as const;
export default function Footer() {
  const V = variants[siteConfig.layout.footer] ?? Footer1;
  return <V />;
}
