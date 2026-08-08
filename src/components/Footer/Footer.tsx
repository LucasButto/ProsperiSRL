import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__brand">PROSPERI®</span>
        <span className="footer__bars" aria-hidden="true" />
        <span className="footer__legal">
          © {new Date().getFullYear()} PROSPERI SRL — CONSTRUCCIÓN DE ALTO ESTÁNDAR — ROSARIO, ARGENTINA
        </span>
      </div>
    </footer>
  );
}

export default Footer;
