import type { FormEvent } from "react";
import "./ContactSection.scss";

function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Mensaje enviado (demo)");
  };

  return (
    <section id="contacto" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <span className="mono-label">SECCIÓN 04</span>
          <h2 className="contact__title">CONTACTO</h2>
        </div>

        <div className="contact__grid">
          <dl className="contact__info">
            <div>
              <dt className="mono-label">EMAIL</dt>
              <dd>
                <a href="mailto:contacto@prosperi.com.ar" className="contact__link">
                  contacto@prosperi.com.ar
                </a>
              </dd>
            </div>
            <div>
              <dt className="mono-label">UBICACIÓN</dt>
              <dd>Rosario, Santa Fe, Argentina</dd>
            </div>
            <div>
              <dt className="mono-label">INSTAGRAM</dt>
              <dd>
                <a
                  href="https://www.instagram.com/prosperisrl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  @prosperisrl
                </a>
              </dd>
            </div>
          </dl>

          <form onSubmit={handleSubmit} className="contact__form">
            <label className="contact__field">
              <span className="mono-label">NOMBRE</span>
              <input type="text" required className="contact__input" />
            </label>
            <label className="contact__field">
              <span className="mono-label">EMAIL</span>
              <input type="email" required className="contact__input" />
            </label>
            <label className="contact__field">
              <span className="mono-label">MENSAJE</span>
              <textarea
                rows={4}
                required
                className="contact__input contact__input--textarea"
              />
            </label>
            <button type="submit" className="contact__submit">
              [ ENVIAR MENSAJE ]
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
