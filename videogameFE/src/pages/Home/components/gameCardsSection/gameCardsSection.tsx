import GameCard from "../../../../components/gameCard/GameCards.js";
import Loading from "../../../../components/Loading/Loading.js";
import { getAllGames } from "../../../../services/getAllGames";
import { gameModel } from "../../models/gameModel.js";
import { useEffect, useState } from "react";
import "./gameCardsSection.css";

const GameCardSection = () => {
  const [allGames, setAllGames] = useState<gameModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllGamesFromAPI = async() => {
    setIsLoading(true)
    Promise.all([getAllGames(28, 7)])
      .then((res) => {
        setAllGames(res[0]), setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGamesFromAPI();
  }, []);

  if(isLoading) {
    return(
      <Loading />
    )
  }

  return (
    <div className="gameCardsSectionContainer d-flex align-items-center flex-wrap justify-content-center gap-3">
       {allGames.map((game) => (
          <GameCard {...game} />
        ))}
    </div>
  );
};

export default GameCardSection;
