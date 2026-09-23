import { useState, type FormEvent } from "react";
import "./ContactSection.scss";

type Status = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
// Public by design (Web3Forms only delivers to the email registered with the key).
// Set VITE_WEB3FORMS_ACCESS_KEY in Vercel's env vars and in a local .env.local.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: humans never see this field, bots fill it. Fake a success so
    // they don't retry, but don't send anything.
    if (data.get("botcheck")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        throw new Error("Missing VITE_WEB3FORMS_ACCESS_KEY");
      }
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Nueva consulta desde prosperisrl.com",
          from_name: "Prosperi SRL - Web",
          name: data.get("nombre"),
          email: data.get("email"),
          message: data.get("mensaje"),
        }),
      });
      const result = (await res.json()) as { success: boolean; message?: string };
      if (!res.ok || !result.success) {
        throw new Error(result.message ?? "Web3Forms request failed");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Contact form error:", err);
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

          <form name="contacto" onSubmit={handleSubmit} className="contact__form">
            <p className="contact__honeypot">
              <label>
                No completar: <input name="botcheck" tabIndex={-1} autoComplete="off" />
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
