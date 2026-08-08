import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToSection } from "../../utils/scrollTo";
import "./Header.scss";

const NAV_LINKS = [
  { id: "proyectos", label: "PROYECTOS" },
  { id: "filosofia", label: "FILOSOFÍA" },
  { id: "contacto", label: "CONTACTO" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <button
          className="header__logo-btn"
          onClick={() => handleNavigate("home")}
        >
          <img
            src="/assets/Logos/prosperi-logo.webp"
            alt="PROSPERI"
            className="header__logo"
          />
        </button>

        <nav className="header__nav">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="header__nav-link"
              onClick={() => handleNavigate(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="header__menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "CERRAR" : "MENÚ"}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="header__mobile-menu"
          >
            <div className="header__mobile-links">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  className="header__mobile-link"
                  onClick={() => handleNavigate(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
