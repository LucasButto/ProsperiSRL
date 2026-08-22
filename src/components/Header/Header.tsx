import { useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToSection } from "../../utils/scrollTo";
import "./Header.scss";

const NAV_LINKS = [
  { id: "proyectos", label: "Proyectos" },
  { id: "filosofia", label: "Filosofía" },
  { id: "contacto", label: "Contacto" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <button
            className="header__logo-btn"
            onClick={() => handleNavigate("home")}
          >
            <img
              src="/assets/Logos/prosperi-logo.webp"
              alt="PROSPERI"
              width={168}
              height={25}
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
            <span className={`header__menu-icon${menuOpen ? " header__menu-icon--open" : ""}`}>
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="header__mobile-menu"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="header__mobile-link"
                  onClick={() => handleNavigate(link.id)}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

export default Header;
