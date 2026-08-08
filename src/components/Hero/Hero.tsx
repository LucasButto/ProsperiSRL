import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scrollTo";
import "./Hero.scss";

const SPECS = [
  { label: "DISCIPLINAS", value: "04" },
  { label: "SEDE", value: "ROSARIO, ARG" },
  { label: "AÑO EN CURSO", value: "2026" },
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__meta">
        <span className="mono-label">[ CONSTRUCCIÓN DE ALTO ESTÁNDAR ]</span>
        <span className="mono-label">DOC N° 001</span>
      </div>

      <div className="hero__headline-wrap">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="hero__headline"
        >
          PROSPERI
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero__rule"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="hero__tagline"
      >
        // soluciones constructivas
      </motion.p>

      <motion.dl
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hero__specs"
      >
        {SPECS.map((spec) => (
          <div key={spec.label} className="hero__spec">
            <dt className="mono-label">{spec.label}</dt>
            <dd className="hero__spec-value">{spec.value}</dd>
          </div>
        ))}
      </motion.dl>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="hero__cta-wrap"
      >
        <button
          className="hero__cta"
          onClick={() => scrollToSection("proyectos")}
        >
          [ VER PROYECTOS ]
        </button>
        <span className="hero__scroll mono-label">SCROLL ↓</span>
      </motion.div>
    </section>
  );
}

export default Hero;
