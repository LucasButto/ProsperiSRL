// Explicit .ts extensions: this module is also imported by vite.config.ts, which
// type-checks under tsconfig.node.json's nodenext resolution.
import { buildNetlifyImageUrl } from "../utils/netlifyImageUrl.ts";

export const HERO_BACKDROP =
  "/assets/Fotos/Revestimientos/Haras de Funes/Foto portada.webp";

export const HERO_WIDTHS = [800, 1200, 1600, 2000];
export const HERO_QUALITY = 65;
export const HERO_SIZES = "100vw";

// A 20px-wide WebP of the hero photo (~1KB), downscaled from the real asset and
// inlined so it paints with the first CSS pass — before any network request for
// the full image resolves. The browser's own upscaling is what blurs it.
export const HERO_LQIP =
  "data:image/webp;base64,UklGRvYCAABXRUJQVlA4WAoAAAAgAAAAEwAAGgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggCAEAANAFAJ0BKhQAGwA+tUqeSackIqEwCADgFolmAJ0y434doAQOgvOjv3HEO8y5iJWXYmFDMXNgQ3AA/suRY+v/MVr4I3f7UZTsJ6ldPE092U12Xyvy9AANoiBh4TqL2q3UmkmYSMkt9JJV/8OQ2wFqJKA3hT+aX/TnXMXwJPU48asW6b/G+wIa4kruhSd8KsaEn9xjSn4yCSio422lTFfRxIrhEP7QPnI/ljTQe+LYh3nGcrJSokp53T9WqpulwwqKyhXpEY/7f3No1ck6bjBCg9Lbm+kdHwnKY333+IlQEIOOxmqDCA6nx+MSBTLnoPYvaJRp21q38EkPudDbfDZT4VaPncBhSQAAAA==";

function heroUrl(width: number, isDev: boolean): string {
  return buildNetlifyImageUrl(
    HERO_BACKDROP,
    { width, quality: HERO_QUALITY, fit: "cover" },
    isDev,
  );
}

export function heroSrc(isDev: boolean): string {
  return heroUrl(1600, isDev);
}

export function heroSrcSet(isDev: boolean): string {
  return HERO_WIDTHS.map((w) => `${heroUrl(w, isDev)} ${w}w`).join(", ");
}
