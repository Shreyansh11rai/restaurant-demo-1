import { content } from "@/data/content";
import { withBase } from "@/lib/withBase";

export default function DownloadMenuButtons() {
  if (!content.menu.files.length) return null;
  return (
    <div className="download-area [&.download-area]:[display:flex] [&.download-area]:[flex-wrap:wrap] [&.download-area]:[justify-content:center] [&.download-area]:[gap:0.6rem] [&.download-area]:[margin:1.75rem_0_2rem]" aria-label={content.ui.menuDownloads}>
      {content.menu.files.map((file) => (
        <a className="download-button [&.download-button]:[display:flex] [&.download-button]:[align-items:center] [&.download-button]:[gap:0.65rem] [&.download-button]:[border:1px_solid_var(--theme-border)] [&.download-button]:[border-radius:var(--radius)] [&.download-button]:[padding:0.65rem_0.8rem] [&.download-button]:[background:var(--theme-surface)] [&.download-button]:[font-size:0.82rem] [&.download-button]:[font-weight:600] [&.download-button:hover]:[border-color:var(--theme-primary)] [&.download-button]:[font-size:0.875rem]" href={withBase(file.file)} download key={file.file}>
          <span>{file.label}</span>
          <span className="file-tag [&.file-tag]:[border-radius:99px] [&.file-tag]:[padding:0.15rem_0.45rem] [&.file-tag]:[background:var(--theme-surface-muted)] [&.file-tag]:[color:var(--theme-accent)] [&.file-tag]:[font-size:0.65rem] [&.file-tag]:[text-transform:uppercase] [&.file-tag]:[font-size:0.875rem]">{file.type === "pdf" ? content.ui.pdf : content.ui.images}</span>
        </a>
      ))}
    </div>
  );
}
