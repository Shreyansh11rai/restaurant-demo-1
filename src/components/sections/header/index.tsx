import { siteConfig } from "@/config/site.config";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";

const variants = { 1: Header1, 2: Header2, 3: Header3 } as const;
export default function Header() {
  const V = variants[siteConfig.layout.header] ?? Header1;
  return <V />;
}
