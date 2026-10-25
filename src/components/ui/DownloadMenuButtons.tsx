import { content } from "@/data/content";
import { withBase } from "@/lib/withBase";

export default function DownloadMenuButtons() {
  if (!content.menu.files.length) return null;
  return (
    <div className="download-area" aria-label={content.ui.menuDownloads}>
      {content.menu.files.map((file) => (
        <a className="download-button" href={withBase(file.file)} download key={file.file}>
          <span>{file.label}</span>
          <span className="file-tag">{file.type === "pdf" ? content.ui.pdf : content.ui.images}</span>
        </a>
      ))}
    </div>
  );
}
