import { siteConfig } from "@/config/site.config";
import Actions1 from "./Actions1";
import Actions2 from "./Actions2";
import Actions3 from "./Actions3";

const variants = { 1: Actions1, 2: Actions2, 3: Actions3 } as const;
export default function Actions() {
  const V = variants[siteConfig.layout.actions] ?? Actions1;
  return <V />;
}
