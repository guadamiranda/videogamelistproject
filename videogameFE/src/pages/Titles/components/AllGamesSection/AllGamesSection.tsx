import GameCard from "../../../../components/gameCard/GameCards";
import { getAllGames } from "../../../../services/getAllGames";
import { gameModel } from "../../../Home/models/gameModel";
import { useEffect, useState } from "react";
import "./allGamesSection.css";
import Loading from "../../../../components/Loading/Loading.js";
import Pagination from "../Pagination/Pagination";

const AllGamesSection = () => {
  const [allGames, setAllGames] = useState<gameModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1)

  const getAllGamesFromAPI = () => {
    setIsLoading(true)
    Promise.all([getAllGames(pageNumber, 30)])
      .then((res) => {
        setAllGames(res[0]), setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllGamesFromAPI();
  }, [pageNumber]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="allGamesSectionContainer d-flex flex-direction-row flex-wrap justify-content-center">
        {allGames.map((game) => (
          <GameCard {...game} />
        ))}
      </div>
      <Pagination pageNumber={pageNumber} changePage={setPageNumber}/>
    </>
  );
};

export default AllGamesSection;
