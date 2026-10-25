import { siteConfig } from "@/config/site.config";
import Contact1 from "./Contact1";
import Contact2 from "./Contact2";
import Contact3 from "./Contact3";

const variants = { 1: Contact1, 2: Contact2, 3: Contact3 } as const;
export default function Contact({ compact = false }: { compact?: boolean }) {
  const V = variants[siteConfig.layout.contact] ?? Contact1;
  return <V compact={compact} />;
}
