import { useState, type FormEvent } from "react";
import "./ContactSection.scss";

type Status = "idle" | "sending" | "success" | "error";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(data),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
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
                <a
                  href="mailto:consultas@prosperisrl.com"
                  className="contact__link"
                >
                  consultas@prosperisrl.com
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

          <form
            name="contacto"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="contact__form"
          >
            <input type="hidden" name="form-name" value="contacto" />
            <input
              type="hidden"
              name="subject"
              value="Nueva consulta desde prosperisrl.com"
            />
            <p className="contact__honeypot">
              <label>
                No completar: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <label className="contact__field">
              <span className="kicker">Nombre</span>
              <input type="text" name="nombre" required className="contact__input" />
            </label>
            <label className="contact__field">
              <span className="kicker">Email</span>
              <input type="email" name="email" required className="contact__input" />
            </label>
            <label className="contact__field">
              <span className="kicker">Mensaje</span>
              <textarea
                name="mensaje"
                rows={3}
                required
                className="contact__input contact__input--textarea"
              />
            </label>

            <button type="submit" className="contact__submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              <span className="contact__submit-arrow">→</span>
            </button>

            {status === "success" && (
              <p className="contact__status contact__status--ok">
                Gracias, tu mensaje fue enviado. Te vamos a responder a la brevedad.
              </p>
            )}
            {status === "error" && (
              <p className="contact__status contact__status--error">
                Hubo un error al enviar el mensaje. Probá de nuevo o escribinos directamente a{" "}
                <a href="mailto:consultas@prosperisrl.com" className="contact__link">
                  consultas@prosperisrl.com
                </a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
