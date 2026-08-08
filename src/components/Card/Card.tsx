import { useState } from "react";
import { motion } from "framer-motion";
import type { Proyecto } from "../../types/proyecto";
import { encodeAssetPath } from "../../utils/encodeAssetPath";
import "./Card.scss";

interface CardProps {
  proyecto: Proyecto;
  index: number;
  onClick: () => void;
}

function Card({ proyecto, index, onClick }: CardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(!proyecto.portada);

  return (
    <motion.div
      className="card"
      whileHover="hover"
      initial="rest"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
      <div className="card__media-frame">
        {isLoading && !hasError && <div className="card__skeleton" />}

        {hasError && <div className="card__error">{proyecto.nombre}</div>}

        {!hasError && proyecto.portada && (
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.04 } }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="card__media"
          >
            <img
              src={encodeAssetPath(proyecto.portada)}
              alt={proyecto.nombre}
              className="card__media-el"
              loading="lazy"
              decoding="async"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />
          </motion.div>
        )}

        <span className="card__index">N.{String(index).padStart(2, "0")}</span>
        <span className="card__tipo">{proyecto.tipo.toUpperCase()}</span>

        <motion.span
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.15 }}
          className="card__crosshair card__crosshair--tl"
        >
          +
        </motion.span>
        <motion.span
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.15 }}
          className="card__crosshair card__crosshair--br"
        >
          +
        </motion.span>
      </div>

      <div className="card__info">
        <h3 className="card__titulo">{proyecto.nombre}</h3>
        <div className="card__meta">
          <span>{proyecto.anio}</span>
          <span>
            {proyecto.media.length} {proyecto.media.length === 1 ? "ARCHIVO" : "ARCHIVOS"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
