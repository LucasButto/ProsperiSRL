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
        <h2 className="contact__title">CONTACTO</h2>

        <div className="contact__grid">
          <div className="contact__info">
            <div>
              <div className="contact__label">EMAIL</div>
              <a href="mailto:contacto@prosperi.com.ar" className="contact__link">
                contacto@prosperi.com.ar
              </a>
            </div>
            <div>
              <div className="contact__label">UBICACIÓN</div>
              <div>Rosario, Santa Fe, Argentina</div>
            </div>
            <div>
              <div className="contact__label">INSTAGRAM</div>
              <a
                href="https://www.instagram.com/prosperisrl/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link"
              >
                @prosperisrl
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact__form">
            <input type="text" placeholder="Nombre" required className="contact__input" />
            <input type="email" placeholder="Email" required className="contact__input" />
            <textarea
              placeholder="Mensaje"
              rows={4}
              required
              className="contact__input contact__input--textarea"
            />
            <button type="submit" className="contact__submit">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
