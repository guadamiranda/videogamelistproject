import SectionTitle from "../../components/sectionTitle/sectionTitle";
import NoGameMessage from "./components/NoGameMessage/NoGameMessage";
import GameListCard from "./components/GameListCard/GameListCard";
import NavbarImg from "../../components/NavbarImg/NavbarImg";
import GameStateEnum  from "../../models/enums/gameStateEnum";
import { Link } from "react-router-dom";
import "./myList.css";

const MyList = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-3">
      <NavbarImg />
      <SectionTitle title="Terminados" />
      <GameListCard />
      <Link to='/allGameList' state={{ stateGame: GameStateEnum.GAME_STATE_FINISHED }}><span className="linkSeeAllGames">Ver todos los juegos</span></Link>
      <SectionTitle title="Jugando" />
      <NoGameMessage />
      <Link to='/allGameList' state={{ stateGame: GameStateEnum.GAME_STATE_PLAYING }}><span className="linkSeeAllGames">Ver todos los juegos</span></Link>
      <SectionTitle title="Proximos" />
      <NoGameMessage />
      <Link to='/allGameList' state={{ stateGame: GameStateEnum.GAME_STATE_TO_PLAY }}><span className="linkSeeAllGames">Ver todos los juegos</span></Link>
    </div>
  );
};

export default MyList;
