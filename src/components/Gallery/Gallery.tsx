import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import type { Proyecto } from "../../types/proyecto";
import { encodeAssetPath } from "../../utils/encodeAssetPath";
import "./Gallery.scss";

interface GalleryProps {
  proyecto: Proyecto;
  onClose: () => void;
}

function Gallery({ proyecto, onClose }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [erroredSrc, setErroredSrc] = useState<string | null>(null);
  const { media } = proyecto;
  const current = media[index];
  const isLoading = loadedSrc !== current.src && erroredSrc !== current.src;
  const hasError = erroredSrc === current.src;

  const goPrev = () => setIndex((i) => (i - 1 + media.length) % media.length);
  const goNext = () => setIndex((i) => (i + 1) % media.length);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div className="gallery__header" onClick={(e) => e.stopPropagation()}>
        <div className="gallery__info">
          <h3 className="gallery__nombre">{proyecto.nombre}</h3>
          <span className="gallery__meta">
            {proyecto.tipo} · {proyecto.anio}
          </span>
        </div>
        <button
          className="gallery__close"
          onClick={onClose}
          aria-label="Cerrar galería"
        >
          Cerrar
        </button>
      </div>

      <div className="gallery__stage" onClick={(e) => e.stopPropagation()}>
        {media.length > 1 && (
          <button
            className="gallery__nav gallery__nav--prev"
            onClick={goPrev}
            aria-label="Anterior"
          >
            <ArrowBackIosRoundedIcon />
          </button>
        )}

        <div className="gallery__media">
          {isLoading && !hasError && <div className="gallery__skeleton" />}

          {hasError && (
            <div className="gallery__error">No se pudo cargar este archivo</div>
          )}

          {!hasError &&
            (current.type === "video" ? (
              <video
                key={current.src}
                src={encodeAssetPath(current.src)}
                className="gallery__media-el"
                style={{ opacity: isLoading ? 0 : 1 }}
                controls
                playsInline
                onLoadedData={() => setLoadedSrc(current.src)}
                onError={() => setErroredSrc(current.src)}
              />
            ) : (
              <img
                key={current.src}
                src={encodeAssetPath(current.src)}
                alt={`${proyecto.nombre} ${index + 1}`}
                className="gallery__media-el"
                style={{ opacity: isLoading ? 0 : 1 }}
                decoding="async"
                onLoad={() => setLoadedSrc(current.src)}
                onError={() => setErroredSrc(current.src)}
              />
            ))}
        </div>

        {media.length > 1 && (
          <button
            className="gallery__nav gallery__nav--next"
            onClick={goNext}
            aria-label="Siguiente"
          >
            <ArrowForwardIosRoundedIcon />
          </button>
        )}
      </div>

      {media.length > 1 && (
        <div className="gallery__footer" onClick={(e) => e.stopPropagation()}>
          <span className="gallery__counter">
            {String(index + 1).padStart(2, "0")} / {String(media.length).padStart(2, "0")}
          </span>
          <div className="gallery__thumbs">
            {media.map((item, i) => (
              <button
                key={item.src}
                className={`gallery__thumb${i === index ? " gallery__thumb--active" : ""}`}
                onClick={() => setIndex(i)}
              >
                {item.type === "video" ? (
                  <video
                    src={encodeAssetPath(item.src)}
                    className="gallery__thumb-el"
                    muted
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={encodeAssetPath(item.src)}
                    alt=""
                    className="gallery__thumb-el"
                    loading="lazy"
                    decoding="async"
                  />
                )}
                {item.type === "video" && (
                  <span className="gallery__thumb-play">
                    <PlayArrowRoundedIcon style={{ fontSize: 16 }} />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Gallery;
