import "./TechnicalFrame.scss";

function TechnicalFrame() {
  return (
    <div className="tframe" aria-hidden="true">
      <span className="tframe__mark tframe__mark--tl">+</span>
      <span className="tframe__mark tframe__mark--tr">+</span>
      <span className="tframe__mark tframe__mark--bl">+</span>
      <span className="tframe__mark tframe__mark--br">+</span>

      <span className="tframe__tag tframe__tag--tl">PROSPERI SRL</span>
      <span className="tframe__tag tframe__tag--tr">EST. ROSARIO</span>
      <span className="tframe__tag tframe__tag--bl">32.9468° S / 60.6393° W</span>
      <span className="tframe__tag tframe__tag--br">REV. 2026 / 01</span>
    </div>
  );
}

export default TechnicalFrame;
