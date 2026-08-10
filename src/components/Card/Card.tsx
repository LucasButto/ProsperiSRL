import { useState } from "react";
import { motion } from "framer-motion";
import type { Proyecto } from "../../types/proyecto";
import { netlifyImage } from "../../utils/netlifyImage";
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
            src={netlifyImage(proyecto.portada, { width: 700, height: 525, fit: "cover", quality: 70 })}
            srcSet={[400, 700, 1000]
              .map(
                (w) =>
                  `${netlifyImage(proyecto.portada as string, {
                    width: w,
                    height: Math.round((w * 3) / 4),
                    fit: "cover",
                    quality: 70,
                  })} ${w}w`,
              )
              .join(", ")}
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
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
