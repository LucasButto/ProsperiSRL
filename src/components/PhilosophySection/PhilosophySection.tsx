import "./PhilosophySection.scss";

const SPECS = [
  { label: "ENFOQUE", value: "Calidad constructiva" },
  { label: "ESCALA", value: "Albañilería · Pintura · Revestimientos · Trabajos de Altura" },
  { label: "UBICACIÓN", value: "Rosario y zona" },
];

function PhilosophySection() {
  return (
    <section id="filosofia" className="philosophy">
      <div className="philosophy__container">
        <div className="philosophy__header">
          <span className="mono-label">SECCIÓN 03</span>
          <h2 className="philosophy__title">FILOSOFÍA</h2>
        </div>

        <div className="philosophy__text">
          <p>
            <span className="philosophy__marker">§ 01</span>
            En PROSPERI entendemos la construcción como un acto de precisión y responsabilidad.
            Cada obra es única y se ejecuta con el mismo estándar de calidad, sin atajos.
          </p>
          <p>
            <span className="philosophy__marker">§ 02</span>
            Trabajamos con materiales de primer nivel, mano de obra calificada y un control de obra
            exhaustivo. El objetivo no es solo entregar una obra, sino un producto que se sienta
            impecable en el tiempo.
          </p>
          <p>
            <span className="philosophy__marker">§ 03</span>
            Combinamos experiencia técnica con una mirada estética contemporánea. Desde residencias
            de alto estándar hasta espacios comerciales y remodelaciones integrales, buscamos que
            cada proyecto eleve la calidad del entorno donde se encuentra.
          </p>
        </div>

        <dl className="philosophy__grid">
          {SPECS.map((spec) => (
            <div key={spec.label} className="philosophy__item">
              <dt className="mono-label">{spec.label}</dt>
              <dd className="philosophy__value">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default PhilosophySection;
