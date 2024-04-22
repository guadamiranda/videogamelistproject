import { Link } from "react-router-dom";
import { gameModel } from "../../pages/Home/models/gameModel";
import "./gameCards.css";

const GameCard: React.FC<gameModel> = (game) => {
  const { image } = game;
  return (
    <Link to="/game" state={{ game: game }} className="gameCardContainer">
      <img src={image} className="gameCardImage" />
    </Link>
  );
};

export default GameCard;
