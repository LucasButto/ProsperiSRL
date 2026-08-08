import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scrollTo";
import "./Hero.scss";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero__logo-wrap"
        >
          <img
            src="/assets/Logos/prosperi-logo.webp"
            alt="PROSPERI"
            className="hero__logo"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hero__tagline"
        >
          soluciones constructivas
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hero__cta-wrap"
        >
          <button
            className="hero__cta"
            onClick={() => scrollToSection("proyectos")}
          >
            VER PROYECTOS
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
