import Image from "next/image";
import { withBase } from "@/lib/withBase";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function ResponsiveImage({ src, alt, className = "", priority = false }: ResponsiveImageProps) {
  return (
    <Image
      src={withBase(src)}
      alt={alt}
      width={1400}
      height={1000}
      sizes="(min-width: 1000px) 50vw, 100vw"
      className={className}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      unoptimized
    />
  );
}
