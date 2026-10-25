import { siteConfig } from "@/config/site.config";
import Menu1 from "./Menu1";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";

const variants = { 1: Menu1, 2: Menu2, 3: Menu3 } as const;
export default function Menu() {
  const V = variants[siteConfig.layout.menu] ?? Menu1;
  return <V />;
}
