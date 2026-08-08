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
            <span className="kicker">Trabajo seleccionado</span>
            <h2 className="projects__title">Proyectos</h2>
          </div>

          <div className="projects__filters">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFiltro(cat)}
                className={`projects__filter${filtro === cat ? " projects__filter--active" : ""}`}
              >
                {cat}
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
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (i % 6) * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card proyecto={proyecto} onClick={() => setProyectoActivo(proyecto)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {esMobile && proyectosFiltrados.length > LIMITE_MOBILE && (
          <button className="projects__ver-mas" onClick={() => setVerTodos((v) => !v)}>
            {verTodos ? "Ver menos" : "Ver más"}
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
