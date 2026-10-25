import { siteConfig } from "@/config/site.config";
import Signature1 from "./Signature1";
import Signature2 from "./Signature2";
import Signature3 from "./Signature3";

const variants = { 1: Signature1, 2: Signature2, 3: Signature3 } as const;
export default function Signature() {
  const V = variants[siteConfig.layout.signature] ?? Signature1;
  return <V />;
}
