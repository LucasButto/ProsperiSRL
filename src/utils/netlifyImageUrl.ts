import { encodeAssetPath } from "./encodeAssetPath.ts";

export interface NetlifyImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: "contain" | "cover" | "fill";
}

// Pure URL builder, kept free of `import.meta.env` so it can also be imported
// from vite.config.ts (Node) to emit a <link rel="preload"> whose URL matches
// the one React will request byte for byte — a mismatch downloads twice.
export function buildNetlifyImageUrl(
  assetPath: string,
  options: NetlifyImageOptions,
  isDev: boolean,
): string {
  if (isDev) return encodeAssetPath(assetPath);

  const { width, height, quality = 75, fit } = options;
  const params = [`url=${encodeURIComponent(assetPath)}`];
  if (width) params.push(`w=${width}`);
  if (height) params.push(`h=${height}`);
  if (fit) params.push(`fit=${fit}`);
  params.push(`q=${quality}`);

  return `/.netlify/images?${params.join("&")}`;
}
