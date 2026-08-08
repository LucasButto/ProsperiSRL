import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Card from "../Card/Card";
import Gallery from "../Gallery/Gallery";
import proyectosData from "../../data/proyectos.json";
import type { Proyecto } from "../../types/proyecto";
import { useMediaQuery } from "../../utils/useMediaQuery";
import "./ProjectsSection.scss";

const proyectos = proyectosData as Proyecto[];

const CATEGORIAS = ["Todas", "Albañilería", "Pintura", "Revestimientos", "Trabajos de Altura"];

const LIMITE_MOBILE = 3;

function ProjectsSection() {
  const [filtro, setFiltro] = useState<string>("Todas");
  const [proyectoActivo, setProyectoActivo] = useState<Proyecto | null>(null);
  const [verTodos, setVerTodos] = useState(false);
  const esMobile = useMediaQuery("(max-width: 639px)");

  const proyectosFiltrados =
    filtro === "Todas" ? proyectos : proyectos.filter((proyecto) => proyecto.tipo === filtro);

  const limitarEnMobile = esMobile && !verTodos && proyectosFiltrados.length > LIMITE_MOBILE;
  const proyectosVisibles = limitarEnMobile
    ? proyectosFiltrados.slice(0, LIMITE_MOBILE)
    : proyectosFiltrados;

  const handleFiltro = (cat: string) => {
    setFiltro(cat);
    setVerTodos(false);
  };

  return (
    <section id="proyectos" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div className="projects__title-block">
            <span className="mono-label">SECCIÓN 02</span>
            <h2 className="projects__title">PROYECTOS</h2>
          </div>

          <div className="projects__filters">
            {CATEGORIAS.map((cat, i) => (
              <button
                key={cat}
                onClick={() => handleFiltro(cat)}
                className={`projects__filter${filtro === cat ? " projects__filter--active" : ""}`}
              >
                <span className="projects__filter-index">{String(i).padStart(2, "0")}</span>
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="projects__grid">
          <AnimatePresence mode="popLayout">
            {proyectosVisibles.map((proyecto, i) => (
              <motion.div
                key={proyecto.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card
                  proyecto={proyecto}
                  index={i + 1}
                  onClick={() => setProyectoActivo(proyecto)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {esMobile && proyectosFiltrados.length > LIMITE_MOBILE && (
          <button className="projects__ver-mas" onClick={() => setVerTodos((v) => !v)}>
            [ {verTodos ? "VER MENOS" : "VER MÁS"} ]
          </button>
        )}
      </div>

      {proyectoActivo && (
        <Gallery proyecto={proyectoActivo} onClose={() => setProyectoActivo(null)} />
      )}
    </section>
  );
}

export default ProjectsSection;
