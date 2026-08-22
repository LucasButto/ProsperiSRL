import { buildNetlifyImageUrl, type NetlifyImageOptions } from "./netlifyImageUrl";

// Routes local images through Netlify's Image CDN (/.netlify/images) so the
// browser downloads a resized, re-encoded (avif/webp) file instead of the
// original camera-resolution source. That endpoint only exists on a deployed
// Netlify site, so local `vite`/`npm run dev` keeps serving the raw asset.
export function netlifyImage(assetPath: string, options: NetlifyImageOptions = {}): string {
  return buildNetlifyImageUrl(assetPath, options, import.meta.env.DEV);
}
