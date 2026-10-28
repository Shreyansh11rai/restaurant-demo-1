import { content } from "@/data/content";
import { BiX } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Labels = {
  facebook: FaFacebook,
  instagram: BsInstagram,
  linkedin: FaLinkedin,
  x: BiX,
} as const;

export default function SocialLinks() {
  return (
    <nav
      className="social-links flex flex-wrap gap-3 mt-4 text-sm"
      aria-label={content.ui.followUs}
    >
      {Object.entries(content.social)
        .filter(([network, url]) => url && network in Labels)
        .map(([network, url]) => {
          const Icon = Labels[network as keyof typeof Labels];
          return (
            <a
              key={network}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={network}
            >
              <Icon aria-hidden="true" className="text-xl" />
            </a>
          );
        })}
    </nav>
  );
}
