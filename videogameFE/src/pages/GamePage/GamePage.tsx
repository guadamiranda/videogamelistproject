import GameMainDetails from "./components/GameMainDetails/GameMainDetails";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import NavbarImg from "../../components/NavbarImg/NavbarImg";
import { useLocation } from "react-router-dom";
import "./gamePage.css";

const GamePage = () => {
  let { state } = useLocation();
  const gameDetails = state.game

  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-3">
      <NavbarImg />
      <SectionTitle title={gameDetails.name}/>
      <GameMainDetails game={gameDetails}/>
    </div>
  );
};

export default GamePage;
