import { content } from "@/data/content";

const labels = {
  facebook: "Facebook",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  x: "X",
} as const;

export default function SocialLinks() {
  return (
    <nav className="social-links [&.social-links]:[display:flex] [&.social-links]:[flex-wrap:wrap] [&.social-links]:[gap:0.85rem] [&.social-links]:[margin-top:1.1rem] [&.social-links]:[font-size:0.82rem] [&.social-links_a]:[text-decoration:underline] [&.social-links_a]:[text-decoration-color:var(--theme-border)] [&.social-links_a]:[text-underline-offset:4px] [&.social-links]:[font-size:0.875rem]" aria-label={content.ui.followUs}>
      {Object.entries(content.social).filter(([, url]) => url).map(([network, url]) => (
        <a href={url} key={network} target="_blank" rel="noreferrer">
          {labels[network as keyof typeof labels]}
        </a>
      ))}
    </nav>
  );
}
