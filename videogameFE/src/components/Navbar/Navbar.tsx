import { userContext } from "../../contexts/userContext";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import "./navbar.css";

const Navbar = () => {
  const userFromContext = useContext(userContext);
  const navigate = useNavigate();

  const logOut = () => {
    userFromContext.setUser({
      name: "",
      email: "",
      password: "",
      userName: "",
      userId: "",
    });
    
    navigate("/")
  }

  return (
    <div className="navbarContainer d-flex justify-content-between">
      <div className="d-flex navbarOptionContainer gap-3">
        <Link to="/mainHome" className="navbarText">
          Home
        </Link>
        <Link to="/myList" className="navbarText">
          Listados
        </Link>
        <Link to="/titles" className="navbarText">
          Títulos
        </Link>
      </div>
      <div
        onClick={() => logOut()}
        className="navbarText d-flex align-items-center gap-2 textOpaco"
      >
        Cerrar sesión <LogoutIcon className="iconLogOut" />
      </div>
    </div>
  );
};

export default Navbar;
