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
        <div className="contact__intro">
          <span className="kicker">Contacto</span>
          <h2 className="contact__title">
            Hablemos de tu <em>próxima obra</em>.
          </h2>
        </div>

        <div className="contact__grid">
          <dl className="contact__info">
            <div>
              <dt className="kicker">Email</dt>
              <dd>
                <a href="mailto:contacto@prosperi.com.ar" className="contact__link">
                  contacto@prosperi.com.ar
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Ubicación</dt>
              <dd>Rosario, Santa Fe, Argentina</dd>
            </div>
            <div>
              <dt className="kicker">Instagram</dt>
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
              <span className="kicker">Nombre</span>
              <input type="text" required className="contact__input" />
            </label>
            <label className="contact__field">
              <span className="kicker">Email</span>
              <input type="email" required className="contact__input" />
            </label>
            <label className="contact__field">
              <span className="kicker">Mensaje</span>
              <textarea
                rows={3}
                required
                className="contact__input contact__input--textarea"
              />
            </label>
            <button type="submit" className="contact__submit">
              Enviar mensaje
              <span className="contact__submit-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
