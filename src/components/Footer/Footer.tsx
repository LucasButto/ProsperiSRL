import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">Prosperi</span>
        <div className="footer__meta">
          <span className="footer__legal">
            © {new Date().getFullYear()} — Construcción de alto estándar,
            Rosario
          </span>
          <p className="footer__credit">|</p>
          <a
            href="https://portfolio-lucasbutto.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__credit"
          >
            Desarrollo Lucas Butto
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
