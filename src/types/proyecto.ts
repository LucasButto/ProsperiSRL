export type TipoProyecto = "Albañilería" | "Pintura" | "Revestimientos" | "Trabajos de Altura";

export interface MediaItem {
  type: "image" | "video";
  src: string;
}

export interface Proyecto {
  id: string;
  nombre: string;
  anio: string;
  tipo: TipoProyecto;
  portada: string | null;
  media: MediaItem[];
}
