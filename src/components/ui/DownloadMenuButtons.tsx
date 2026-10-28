import { content } from "@/data/content";
import { withBase } from "@/lib/withBase";

export default function DownloadMenuButtons() {
  if (!content.menu.files.length) return null;
  return (
    <div className="download-area flex flex-wrap justify-center gap-2 m-7" aria-label={content.ui.menuDownloads}>
      {content.menu.files.map((file) => (
        <a className="download-button flex items-center gap-3 border border-border rounded-theme p-3 bg-surface text-sm font-semibold hover:border-primary" href={withBase(file.file)} download key={file.file}>
          <span>{file.label}</span>
          <span className="file-tag rounded-full p-1 bg-surface-muted text-accent text-xs uppercase text-sm">{file.type === "pdf" ? content.ui.pdf : content.ui.images}</span>
        </a>
      ))}
    </div>
  );
}
