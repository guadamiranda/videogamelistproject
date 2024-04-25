import NavbarImg from "../../components/NavbarImg/NavbarImg";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import GameListCard from "./components/GameListCard/GameListCard";
import NoGameMessage from "./components/NoGameMessage/NoGameMessage";
import "./myList.css";

const MyList = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-3">
      <NavbarImg />
      <SectionTitle title="Terminados" />
      <GameListCard />
      <span className="linkSeeAllGames">Ver todos los juegos</span>
      <SectionTitle title="Jugando" />
      <NoGameMessage />
      <SectionTitle title="Proximos" />
      <NoGameMessage />
    </div>
  );
};

export default MyList;
