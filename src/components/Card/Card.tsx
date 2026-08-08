import { useState } from "react";
import { motion } from "framer-motion";
import type { Proyecto } from "../../types/proyecto";
import { encodeAssetPath } from "../../utils/encodeAssetPath";
import "./Card.scss";

interface CardProps {
  proyecto: Proyecto;
  onClick: () => void;
}

function Card({ proyecto, onClick }: CardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(!proyecto.portada);

  return (
    <div
      className="card"
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
          <motion.img
            src={encodeAssetPath(proyecto.portada)}
            alt={proyecto.nombre}
            className="card__media-el"
            loading="lazy"
            decoding="async"
            style={{ opacity: isLoading ? 0 : 1 }}
            whileHover={{ scale: 1.045 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        )}
      </div>

      <div className="card__info">
        <h3 className="card__titulo">{proyecto.nombre}</h3>
        <span className="card__tipo">{proyecto.tipo}</span>
      </div>
    </div>
  );
}

export default Card;
