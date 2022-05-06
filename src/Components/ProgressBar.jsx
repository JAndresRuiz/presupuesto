import "../Styles/progressBar.css";

const ProgressBar = ({porcentaje}) => {
  return (
    <div className="progressBarContainer">
      <div className="circular">
        <div className="dentro"></div>
        <div className="fuera"></div>
        <div className="numero">{porcentaje}% Gastado</div>
        <div className="circulo">
          <div className="dot">
            <span></span>
          </div>
          <div className="barra izquierdo">
            <div className="progreso"></div>
          </div>
          <div className="barra derecho">
            <div className="progreso"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProgressBar };
