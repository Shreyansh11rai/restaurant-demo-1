import { content } from "@/data/content";

const labels = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  x: "X",
} as const;

export default function SocialLinks() {
  return (
    <nav className="social-links" aria-label={content.ui.followUs}>
      {Object.entries(content.social).filter(([, url]) => url).map(([network, url]) => (
        <a href={url} key={network} target="_blank" rel="noreferrer">
          {labels[network as keyof typeof labels]}
        </a>
      ))}
    </nav>
  );
}
