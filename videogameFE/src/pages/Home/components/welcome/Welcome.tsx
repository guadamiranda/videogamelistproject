import ButtonList from "../buttonList/buttonList";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <div className="welcomeImage">
        <div className="card-overlay">
          <div className="welcomeTitle d-flex flex-column justify-content-center align-items-start ">
            <span className="welcomePrincipalTitle">
              ¡Juega, Registra, Repite!
            </span>
            <span className="welcomeSecundaryTitle">
              Gestiona tu mundo de juegos
            </span>
            <div className="welcomeSecundaryButton">
              <ButtonList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
