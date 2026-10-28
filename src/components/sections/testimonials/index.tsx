import { siteConfig } from "@/config/site.config";
import Testimonials1 from "./Testimonials1";
import Testimonials2 from "./Testimonials2";
import Testimonials3 from "./Testimonials3";

const variants = {
  1: Testimonials1,
  2: Testimonials2,
  3: Testimonials3,
} as const;

export default function Testimonials() {
  const V = variants[siteConfig.layout.testimonials] ?? Testimonials1;
  return <V />;
}
