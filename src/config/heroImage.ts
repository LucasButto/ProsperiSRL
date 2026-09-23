// Explicit .ts extension: this module is also imported by vite.config.ts, which
// type-checks under tsconfig.node.json's nodenext resolution.
import { encodeAssetPath } from "../utils/encodeAssetPath.ts";

const HERO_BACKDROP =
  "/assets/Fotos/Revestimientos/Haras de Funes/Foto portada.webp";

// Shared by Hero.tsx and the <link rel="preload"> emitted from vite.config.ts.
// The two URLs must match byte for byte or the browser downloads the image twice.
export const HERO_SRC = encodeAssetPath(HERO_BACKDROP);

// A 20px-wide WebP of the hero photo (~1KB), downscaled from the real asset and
// inlined so it paints with the first CSS pass — before any network request for
// the full image resolves. The browser's own upscaling is what blurs it.
export const HERO_LQIP =
  "data:image/webp;base64,UklGRvYCAABXRUJQVlA4WAoAAAAgAAAAEwAAGgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggCAEAANAFAJ0BKhQAGwA+tUqeSackIqEwCADgFolmAJ0y434doAQOgvOjv3HEO8y5iJWXYmFDMXNgQ3AA/suRY+v/MVr4I3f7UZTsJ6ldPE092U12Xyvy9AANoiBh4TqL2q3UmkmYSMkt9JJV/8OQ2wFqJKA3hT+aX/TnXMXwJPU48asW6b/G+wIa4kruhSd8KsaEn9xjSn4yCSio422lTFfRxIrhEP7QPnI/ljTQe+LYh3nGcrJSokp53T9WqpulwwqKyhXpEY/7f3No1ck6bjBCg9Lbm+kdHwnKY333+IlQEIOOxmqDCA6nx+MSBTLnoPYvaJRp21q38EkPudDbfDZT4VaPncBhSQAAAA==";
