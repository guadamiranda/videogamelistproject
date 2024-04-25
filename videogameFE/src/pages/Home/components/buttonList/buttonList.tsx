import { Link } from "react-router-dom"
import "./buttonList.css"

const ButtonList = () => {
    return(
        <Link to={"/myList"} className="buttonListContainer">
            Explora tus listados
        </Link>
    )
}

export default ButtonList