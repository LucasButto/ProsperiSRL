import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">Prosperi</span>
        <span className="footer__legal">
          © {new Date().getFullYear()} — Construcción de alto estándar, Rosario
        </span>
      </div>
    </footer>
  );
}

export default Footer;
