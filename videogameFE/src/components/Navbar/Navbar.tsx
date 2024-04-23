import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer d-flex justify-content-between">
      <div className="d-flex navbarOptionContainer gap-3">
        <Link to="/" className="navbarText">
          Home
        </Link>
        <Link to="/myList" className="navbarText">
          Listados
        </Link>
        <Link to="/titles" className="navbarText">
          Títulos
        </Link>
      </div>
      <Link
        to="/login"
        className="navbarText d-flex align-items-center gap-2 textOpaco"
      >
        Cerrar sesión <LogoutIcon className="iconLogOut" />
      </Link>
    </div>
  );
};

export default Navbar;
