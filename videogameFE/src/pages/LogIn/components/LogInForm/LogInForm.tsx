import { loginUser } from "../../services/loginUser.js";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import { useForm } from "react-hook-form";
import "./logInForm.css";

const LogInForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    const body = data;

    await loginUser(body)
      .then((res:any) => console.log(res))
      .catch((error: any) => console.log(error));
  };

  return (
    <div className="logInFormContainer d-flex flex-column justify-content-center">
      <div className="d-flex flex-column">
        <span className="welcomeLogin">Bienvenido de nuevo :)</span>
        <span className="welcomeSubtituleLogin">
          Ingrese sus datos para ingresar
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-center">
          <div className="row mt-3 w-50">
            <div className="col-md-6 col-sm-12 d-flex mt-3">
              <input
                className="inputLogin"
                type="text"
                placeholder="Usuario"
                {...register("user")}
              ></input>
            </div>
            <div className="col-md-6 col-sm-12 d-flex mt-3">
              <input
                className="inputLogin"
                type="password"
                placeholder="Contraseña"
                {...register("password")}
              ></input>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <ButtonLogin />
        </div>
      </form>
    </div>
  );
};

export default LogInForm;
