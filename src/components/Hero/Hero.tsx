import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scrollTo";
import { encodeAssetPath } from "../../utils/encodeAssetPath";
import "./Hero.scss";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__backdrop">
        <img
          src={encodeAssetPath("/assets/Fotos/Revestimientos/Haras de Funes/Foto portada.webp")}
          alt=""
          className="hero__backdrop-img"
        />
        <div className="hero__backdrop-overlay" />
      </div>

      <div className="hero__content">
        <motion.img
          src="/assets/Logos/prosperi-logo.webp"
          alt="PROSPERI"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero__logo"
        />

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="kicker hero__kicker"
        >
          Construcción residencial y comercial — Rosario
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="hero__headline"
        >
          Cada obra, un <em>estándar</em> propio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="hero__tagline"
        >
          Albañilería, pintura, revestimientos y trabajos de altura, ejecutados con
          precisión de principio a fin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="hero__cta-wrap"
        >
          <button
            className="hero__cta"
            onClick={() => scrollToSection("proyectos")}
          >
            Ver proyectos
            <span className="hero__cta-arrow">→</span>
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hero__scroll"
      >
        <span />
      </motion.div>
    </section>
  );
}

export default Hero;
