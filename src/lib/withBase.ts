const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) {
    throw new Error(`Expected a local absolute path, received "${path}"`);
  }
  return `${basePath}${path}`;
}
