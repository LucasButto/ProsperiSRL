import "./PhilosophySection.scss";

function PhilosophySection() {
  return (
    <section id="filosofia" className="philosophy">
      <div className="philosophy__container">
        <h2 className="philosophy__title">FILOSOFÍA</h2>

        <div className="philosophy__text">
          <p>
            En PROSPERI entendemos la construcción como un acto de precisión y responsabilidad.
            Cada obra es única y se ejecuta con el mismo estándar de calidad, sin atajos.
          </p>
          <p>
            Trabajamos con materiales de primer nivel, mano de obra calificada y un control de obra
            exhaustivo. El objetivo no es solo entregar una obra, sino un producto que se sienta
            impecable en el tiempo.
          </p>
          <p>
            Combinamos experiencia técnica con una mirada estética contemporánea. Desde residencias
            de alto estándar hasta espacios comerciales y remodelaciones integrales, buscamos que
            cada proyecto eleve la calidad del entorno donde se encuentra.
          </p>
        </div>

        <div className="philosophy__grid">
          <div>
            <div className="philosophy__label">ENFOQUE</div>
            <div className="philosophy__value">Calidad constructiva</div>
          </div>
          <div>
            <div className="philosophy__label">ESCALA</div>
            <div className="philosophy__value">Albañilería · Pintura · Revestimientos · Trabajos de Altura</div>
          </div>
          <div>
            <div className="philosophy__label">UBICACIÓN</div>
            <div className="philosophy__value">Rosario y zona</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;
