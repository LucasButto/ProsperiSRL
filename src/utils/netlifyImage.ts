import { encodeAssetPath } from "./encodeAssetPath";

interface NetlifyImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: "contain" | "cover" | "fill";
}

// Routes local images through Netlify's Image CDN (/.netlify/images) so the
// browser downloads a resized, re-encoded (avif/webp) file instead of the
// original camera-resolution source. That endpoint only exists on a deployed
// Netlify site, so local `vite`/`npm run dev` keeps serving the raw asset.
export function netlifyImage(assetPath: string, options: NetlifyImageOptions = {}): string {
  if (import.meta.env.DEV) return encodeAssetPath(assetPath);

  const { width, height, quality = 75, fit } = options;
  const params = [`url=${encodeURIComponent(assetPath)}`];
  if (width) params.push(`w=${width}`);
  if (height) params.push(`h=${height}`);
  if (fit) params.push(`fit=${fit}`);
  params.push(`q=${quality}`);

  return `/.netlify/images?${params.join("&")}`;
}
