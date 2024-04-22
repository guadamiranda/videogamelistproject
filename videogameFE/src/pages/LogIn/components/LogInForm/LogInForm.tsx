import ButtonLogin from "../ButtonLogin/ButtonLogin";
import "./logInForm.css";

const LogInForm = () => {
  return (
    <div className="logInFormContainer d-flex flex-column justify-content-center">
      <div className="d-flex flex-column">
        <span className="welcomeLogin">Bienvenido de nuevo :)</span>
        <span className="welcomeSubtituleLogin">
          Ingrese sus datos para ingresar
        </span>
      </div>

      <div className="d-flex justify-content-center">
        <div className="row mt-3 w-50">
          <div className="col-md-6 col-sm-12 d-flex mt-3">
            <input className="inputLogin" placeholder="Usuario"></input>
          </div>
          <div className="col-md-6 col-sm-12 d-flex mt-3">
            <input className="inputLogin" placeholder="Contraseña"></input>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-3">
        <ButtonLogin />
      </div>
    </div>
  );
};

export default LogInForm;
