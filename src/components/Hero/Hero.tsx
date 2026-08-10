import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scrollTo";
import { netlifyImage } from "../../utils/netlifyImage";
import "./Hero.scss";

const HERO_BACKDROP =
  "/assets/Fotos/Revestimientos/Haras de Funes/Foto portada.webp";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__backdrop">
        <img
          src={netlifyImage(HERO_BACKDROP, {
            width: 1600,
            quality: 65,
            fit: "cover",
          })}
          srcSet={[800, 1200, 1600, 2000]
            .map(
              (w) =>
                `${netlifyImage(HERO_BACKDROP, { width: w, quality: 65, fit: "cover" })} ${w}w`,
            )
            .join(", ")}
          sizes="100vw"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="hero__backdrop-img"
        />
        <div className="hero__backdrop-overlay" />
      </div>

      <div className="hero__content">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="kicker hero__kicker"
        >
          Construcción residencial y comercial — Rosario
        </motion.span>

        <motion.img
          src="/assets/Logos/prosperi-logo.webp"
          alt="PROSPERI"
          width={674}
          height={100}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="hero__logo"
        />

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="hero__headline"
        >
          Cada obra, un <em>estándar</em> propio.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
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
