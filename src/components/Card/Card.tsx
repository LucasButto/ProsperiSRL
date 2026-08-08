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
      {isLoading && !hasError && <div className="card__skeleton" />}

      {hasError && <div className="card__error">{proyecto.nombre}</div>}

      {!hasError && proyecto.portada && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
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

      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
        className="card__overlay"
      >
        <div className="card__overlay-top">
          <span className="card__tipo">{proyecto.tipo.toUpperCase()}</span>
          <span className="card__galeria">
            {proyecto.media.length} {proyecto.media.length === 1 ? "FOTO" : "FOTOS"}
          </span>
        </div>

        <h3 className="card__titulo">{proyecto.nombre}</h3>

        <span className="card__anio">{proyecto.anio}</span>
      </motion.div>
    </motion.div>
  );
}

export default Card;
