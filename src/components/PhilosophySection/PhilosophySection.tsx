import "./PhilosophySection.scss";

const SPECS = [
  { label: "Enfoque", value: "Calidad constructiva" },
  { label: "Escala", value: "Albañilería · Pintura · Revestimientos · Trabajos de Altura" },
  { label: "Ubicación", value: "Rosario y zona" },
];

function PhilosophySection() {
  return (
    <section id="filosofia" className="philosophy">
      <div className="philosophy__container">
        <span className="kicker">Filosofía</span>

        <p className="philosophy__lead">
          Entendemos la construcción como un acto de <em>precisión</em> y responsabilidad.
          Cada obra es única y se ejecuta con el mismo estándar de calidad, sin atajos.
        </p>

        <div className="philosophy__text">
          <p>
            Trabajamos con materiales de primer nivel, mano de obra calificada y un control de
            obra exhaustivo. El objetivo no es solo entregar una obra, sino un producto que se
            sienta impecable en el tiempo.
          </p>
          <p>
            Combinamos experiencia técnica con una mirada estética contemporánea. Desde
            residencias de alto estándar hasta espacios comerciales y remodelaciones integrales,
            buscamos que cada proyecto eleve la calidad del entorno donde se encuentra.
          </p>
        </div>

        <dl className="philosophy__facts">
          {SPECS.map((spec) => (
            <div key={spec.label} className="philosophy__fact">
              <dt className="kicker">{spec.label}</dt>
              <dd className="philosophy__value">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default PhilosophySection;
