import { userContext } from "../../../../contexts/userContext.js";
import { loginUser } from "../../services/loginUser.js";
import ButtonLogin from "../ButtonLogin/ButtonLogin";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import "./logInForm.css";

const LogInForm = () => {
  const [loginError, setLoginError] = useState(false);
  const { register, handleSubmit } = useForm();
  const userFromContext = useContext(userContext);

  const loginUserInContext = (user: any) => {
    if (user.name === undefined) {
      userFromContext.setUser({
        name: "",
        email: "",
        password: "",
        userName: "",
        userId: "",
      });
      return setLoginError(true);
    }

    userFromContext.setUser({
      name: user.name,
      email: user.email,
      password: user.password,
      userName: user.userName,
      userId: user._id,
    });
  };

  const onSubmit = async (data: any) => {
    setLoginError(false);

    await loginUser(data)
      .then((res: any) => loginUserInContext(res.data))
      .catch((error: any) => console.log(error));
  };

  return (
    <div className="logInFormContainer d-flex flex-column justify-content-center">
      <div className="d-flex flex-column align-items-center">
        <div className="loadingContainerLogin justify-content-center">
          <div className="loadingImageLogin"></div>
        </div>

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
                {...register("userName")}
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

        {loginError && (
          <span className="d-flex justify-content-center errorLogin mt-3">
            El usuario o contraseña son incorrectos :(
          </span>
        )}
      </form>
    </div>
  );
};

export default LogInForm;
