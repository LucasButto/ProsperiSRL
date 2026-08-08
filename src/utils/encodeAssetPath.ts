// Asset filenames sourced from the client's folder export contain spaces and
// accented characters (e.g. "/assets/fotos/Alb/La paz/Foto-portada.webp"),
// which need percent-encoding to resolve reliably as a src/href.
export function encodeAssetPath(assetPath: string): string {
  return assetPath.split("/").map(encodeURIComponent).join("/");
}
